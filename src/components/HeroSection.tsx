
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-end justify-center overflow-hidden bg-cover bg-center bg-no-repeat pb-16 md:pb-48"
      style={{
        backgroundImage: `url('/lovable-uploads/dbc35b6f-a15b-4d79-ab04-759e7a92e3c5.png')`,
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Stop Migraine Pain
          <br />
          <span className="text-teal-400">Before It Starts</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Discover natural prevention methods, understand your triggers, and take control of your migraine journey with proven strategies.
        </p>
        
        <button 
          onClick={scrollToContent}
          className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Start Your Relief Journey
          <ArrowDown className="ml-2 animate-bounce" size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
