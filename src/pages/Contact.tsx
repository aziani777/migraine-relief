
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Send, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { contactFormSchema, ContactFormData } from '../lib/validation';
import { sanitizeFormData } from '../lib/sanitization';
import { useRateLimit } from '../hooks/useRateLimit';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { checkRateLimit, isBlocked, getRemainingTime } = useRateLimit(3, 60000);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!checkRateLimit()) {
      const remainingTime = Math.ceil(getRemainingTime() / 1000);
      toast.error(`Too many attempts. Please wait ${remainingTime} seconds before trying again.`);
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizedData = sanitizeFormData({
        name: data.name,
        email: data.email,
        message: data.message
      });
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you for your message! We\'ll get back to you soon.');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have a question about migraine management? Want to share your story? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-teal-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@antimigraines.net</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-lavender-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 24-48 hours. 
                  For urgent medical concerns, please consult with your healthcare provider.
                </p>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-green-800">Privacy & Security</h3>
                </div>
                <p className="text-green-700 text-sm">
                  Your information is protected with security measures including input validation, 
                  sanitization, and rate limiting. We never share your personal data.
                </p>
              </div>
            </div>

            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              autoComplete="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              rows={6}
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting || isBlocked}
                      className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
                    >
                      <Send size={20} className="mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {isBlocked && (
                      <p className="text-red-600 text-sm text-center">
                        Too many attempts. Please wait before trying again.
                      </p>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
