
import { Link } from 'react-router-dom';
import { Heart, Mail, Shield, BookOpen, Users, Lightbulb } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-lavender-100 to-teal-50 border-t border-lavender-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg text-gray-900 mb-4">AntiMigraines.net</h3>
            <p className="text-gray-600 mb-4">
              Empowering migraine sufferers with education, natural remedies, and hope for a pain-free life.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Mail size={16} />
              <span>info@antimigraines.net</span>
            </div>
          </div>
          
          {/* Resources Section */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen size={16} className="mr-2" />
              Resources
            </h4>
            <nav className="space-y-2">
              <Link to="/#what-is-migraine" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Understanding Migraines
              </Link>
              <Link to="/#manage-your-migraine" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Management Tips
              </Link>
              <Link to="/tools" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Tracking Tools
              </Link>
              <Link to="/blog" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Latest Articles
              </Link>
            </nav>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Users size={16} className="mr-2" />
              Community
            </h4>
            <nav className="space-y-2">
              <Link to="/contact" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Contact Marie
              </Link>
              <Link to="/member-area" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Member Area
              </Link>
              <a href="#newsletter" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Newsletter
              </a>
              <a href="#support" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Support Groups
              </a>
            </nav>
          </div>
          
          {/* Legal & Info Section */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Shield size={16} className="mr-2" />
              Legal & Info
            </h4>
            <nav className="space-y-2">
              <Link to="/privacy" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Terms of Use
              </Link>
              <Link to="/disclaimer" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Medical Disclaimer
              </Link>
              <a href="#accessibility" className="block text-gray-600 hover:text-teal-600 transition-colors">
                Accessibility
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-lavender-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm flex items-center">
              © {currentYear} AntiMigraines.net – Made with <Heart size={16} className="mx-1 text-red-500" /> for migraine warriors
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Lightbulb size={16} className="mr-1" />
                Hope • Healing • Community
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
