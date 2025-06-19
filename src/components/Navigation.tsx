
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, CheckSquare, Brain, Target, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'What is Migraine', path: '/#what-is-migraine', icon: Brain },
    { name: 'Manage Your Migraine', path: '/#manage-your-migraine', icon: Target },
    { name: 'Tools', path: '/tools', icon: CheckSquare },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSmoothScroll = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const targetId = path.substring(2);
      
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    } else if (path === '/tools') {
      // For Tools page, ensure we scroll to top
      e.preventDefault();
      navigate('/tools');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-lavender-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/87137796-74a1-4d8c-ab3d-452956a25784.png" 
              alt="AntiMigraines.net Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleSmoothScroll(e, item.path)}
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-teal-600 px-3 py-2 rounded-lg text-sm ${
                  isActive(item.path) 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.icon && <item.icon size={16} />}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Get my ebook button */}
            <button className="flex items-center space-x-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm">
              <Download size={16} />
              <span>Get my ebook</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-lavender-200 bg-white/95">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => {
                  handleSmoothScroll(e, item.path);
                }}
                className={`flex items-center space-x-2 py-3 px-4 font-medium transition-colors hover:text-teal-600 rounded-lg mx-2 ${
                  isActive(item.path) 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-700 hover:bg-lavender-50'
                }`}
              >
                {item.icon && <item.icon size={16} />}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile Get my ebook button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-4 rounded-lg mx-2 mt-2 transition-all duration-300 shadow-md"
            >
              <Download size={16} />
              <span>Get my ebook</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
