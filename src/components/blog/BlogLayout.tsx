
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  readTime: string;
  date: string;
  featuredImage?: string;
  featuredImageAlt?: string;
}

const BlogLayout = ({ 
  children, 
  title, 
  subtitle, 
  description, 
  readTime, 
  date, 
  featuredImage, 
  featuredImageAlt 
}: BlogLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <Navigation />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{date}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
            {subtitle && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 block">
                {subtitle}
              </span>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={featuredImage}
              alt={featuredImageAlt || "Blog post featured image"}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        )}

        {children}
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogLayout;
