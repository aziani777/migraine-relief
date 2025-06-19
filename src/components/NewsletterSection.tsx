
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import { sanitizeInput } from '../lib/sanitization';
import { useRateLimit } from '../hooks/useRateLimit';
import { newsletterSchema, NewsletterFormData } from '../lib/validation';

const NewsletterSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { checkRateLimit, isBlocked } = useRateLimit(5, 300000);

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ''
    }
  });

  const handleSubmit = async (data: NewsletterFormData) => {
    if (!checkRateLimit()) {
      toast.error('Too many subscription attempts. Please wait before trying again.');
      return;
    }

    setIsLoading(true);
    
    try {
      const sanitizedEmail = sanitizeInput(data.email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you for subscribing! Welcome to our migraine warrior community.');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="mx-auto mb-6 h-12 w-12 text-white" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Migraine Warrior Community
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Get weekly tips, natural remedies, and inspiring stories delivered to your inbox. 
            Be part of a supportive community that understands your journey.
          </p>
          
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/90 border-0 text-gray-900 placeholder:text-gray-600"
              autoComplete="email"
              {...form.register('email')}
            />
            <Button 
              type="submit" 
              disabled={isLoading || isBlocked}
              className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8"
            >
              {isLoading ? 'Joining...' : 'Join Now'}
            </Button>
          </form>
          
          {form.formState.errors.email && (
            <p className="text-red-200 text-sm mt-2">
              {form.formState.errors.email.message}
            </p>
          )}
          
          <p className="text-teal-100 text-sm mt-4">
            No spam, ever. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
