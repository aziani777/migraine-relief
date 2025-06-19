
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft, Clock, Calendar, Home, Lightbulb, Volume2, Wind, Eye, Settings } from 'lucide-react';

const MigraineFriendlyEnvironment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <Navigation />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>June 19, 2025</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Creating Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 block">
              Migraine-Friendly Environment
            </span>
            <span className="text-2xl md:text-3xl text-gray-600 font-normal block mt-2">
              At Home and Work
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Transform your living and working spaces to minimize migraine triggers. Get practical tips 
            for optimizing lighting, air quality, noise control, and ergonomics.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/eaa4f8f8-08df-4cfe-a81d-4ef4fef81644.png" 
            alt="Migraine-friendly home and work environment"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-10">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 mb-8">
            <div className="flex items-center mb-4">
              <Home className="text-indigo-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Your Environment Matters</h2>
            </div>
            <p className="text-gray-700 leading-relaxed m-0">
              We spend 90% of our time indoors, making our home and work environments crucial for 
              migraine management. Small changes to lighting, noise, air quality, and ergonomics 
              can dramatically reduce trigger exposure and create healing spaces.
            </p>
          </div>
        </div>

        {/* Lighting Solutions */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Lightbulb className="text-yellow-500 mr-3" size={28} />
            Lighting: Your First Line of Defense
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Understanding Light Triggers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Problem Lighting:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Fluorescent lights (especially old tubes)</li>
                    <li>• Bright overhead lighting</li>
                    <li>• Flickering or strobe effects</li>
                    <li>• Blue light from screens</li>
                    <li>• Sudden lighting changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Migraine-Friendly Options:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Warm LED bulbs (2700K-3000K)</li>
                    <li>• Layered lighting with dimmers</li>
                    <li>• Natural daylight when possible</li>
                    <li>• Table and floor lamps</li>
                    <li>• Bias lighting behind screens</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">Home Lighting Tips</h3>
                <ul className="space-y-2 text-yellow-700 text-sm">
                  <li>• Install dimmer switches in every room</li>
                  <li>• Use lamps instead of ceiling lights</li>
                  <li>• Add blackout curtains to bedrooms</li>
                  <li>• Consider smart bulbs with adjustable warmth</li>
                  <li>• Create "low-light zones" for migraine recovery</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Workplace Solutions</h3>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Request desk lamps instead of overhead lighting</li>
                  <li>• Use blue light filtering glasses</li>
                  <li>• Position screen perpendicular to windows</li>
                  <li>• Adjust monitor brightness to match surroundings</li>
                  <li>• Take regular screen breaks (20-20-20 rule)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sound Management */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Volume2 className="text-green-500 mr-3" size={28} />
            Sound: Creating Acoustic Comfort
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-green-700 mb-4">Noise Triggers vs. Helpful Sounds</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-800 mb-2">Avoid These Sounds:</h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Sudden loud noises</li>
                    <li>• High-pitched or shrill sounds</li>
                    <li>• Repetitive mechanical noises</li>
                    <li>• Conversation in open offices</li>
                    <li>• Traffic and construction noise</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">Healing Sounds:</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• White or pink noise</li>
                    <li>• Nature sounds (rain, ocean)</li>
                    <li>• Soft instrumental music</li>
                    <li>• Consistent, gentle background noise</li>
                    <li>• Complete silence when needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3">Sound Management Strategies</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">At Home:</h4>
                  <ul className="text-green-800 space-y-1 text-xs">
                    <li>• Use soft furnishings to absorb sound</li>
                    <li>• Install weather stripping</li>
                    <li>• Choose quiet appliances</li>
                    <li>• Create a quiet room for recovery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">At Work:</h4>
                  <ul className="text-green-800 space-y-1 text-xs">
                    <li>• Use noise-canceling headphones</li>
                    <li>• Request quieter workspace</li>
                    <li>• Use sound masking apps</li>
                    <li>• Take breaks in quiet areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Technology:</h4>
                  <ul className="text-green-800 space-y-1 text-xs">
                    <li>• White noise machines</li>
                    <li>• Sound-masking apps</li>
                    <li>• Quality earplugs</li>
                    <li>• Sound level meter apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Air Quality */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Wind className="text-blue-500 mr-3" size={28} />
            Air Quality: Breathing Easy
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Common Air Quality Triggers</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Chemical Triggers:</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Strong perfumes and fragrances</li>
                    <li>• Cleaning products</li>
                    <li>• Paint and adhesive fumes</li>
                    <li>• Cigarette smoke</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Environmental Factors:</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Poor ventilation</li>
                    <li>• Dust and allergens</li>
                    <li>• Extreme humidity levels</li>
                    <li>• Stale or stuffy air</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Improving Your Air Quality</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Home Solutions:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Use HEPA air purifiers</li>
                    <li>• Maintain humidity between 30-50%</li>
                    <li>• Open windows for fresh air daily</li>
                    <li>• Choose fragrance-free products</li>
                    <li>• Add air-purifying plants</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Workplace Tips:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Request scent-free workplace policies</li>
                    <li>• Use personal air purifiers</li>
                    <li>• Take fresh air breaks</li>
                    <li>• Report ventilation issues</li>
                    <li>• Keep workspace dust-free</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ergonomics */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Eye className="text-purple-500 mr-3" size={28} />
            Ergonomics: Preventing Tension Triggers
          </h2>

          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Proper Workstation Setup</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Screen Position:</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Top of screen at eye level</li>
                  <li>• 20-26 inches from your face</li>
                  <li>• Slightly tilted back (10-20 degrees)</li>
                  <li>• Directly in front of you</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Body Position:</h4>
                <ul className="space-y-2 text-purple-100">
                  <li>• Feet flat on floor or footrest</li>
                  <li>• Thighs parallel to floor</li>
                  <li>• Back supported by chair</li>
                  <li>• Shoulders relaxed, not hunched</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Room-by-Room Guide */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Settings className="text-orange-500 mr-3" size={28} />
            Room-by-Room Optimization
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Bedroom Sanctuary</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Temperature:</strong> Keep between 65-68°F</li>
                <li><strong>Lighting:</strong> Blackout curtains, red night lights</li>
                <li><strong>Sound:</strong> White noise machine, ear plugs</li>
                <li><strong>Air:</strong> Purifier, optimal humidity</li>
                <li><strong>Comfort:</strong> Supportive pillow, quality mattress</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Home Office Haven</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Lighting:</strong> Task lighting, screen filters</li>
                <li><strong>Ergonomics:</strong> Adjustable chair and desk</li>
                <li><strong>Organization:</strong> Clutter-free, calming colors</li>
                <li><strong>Breaks:</strong> Movement reminders, eye rest</li>
                <li><strong>Emergency:</strong> Migraine relief kit nearby</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Kitchen Comfort</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Ventilation:</strong> Exhaust fans for cooking odors</li>
                <li><strong>Lighting:</strong> Under-cabinet LED strips</li>
                <li><strong>Storage:</strong> Easy access to prevent strain</li>
                <li><strong>Safety:</strong> Fragrance-free cleaning supplies</li>
                <li><strong>Hydration:</strong> Filtered water readily available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Living Areas</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Seating:</strong> Supportive furniture, good posture</li>
                <li><strong>Entertainment:</strong> Screen brightness controls</li>
                <li><strong>Ambiance:</strong> Soft, indirect lighting</li>
                <li><strong>Plants:</strong> Air-purifying varieties</li>
                <li><strong>Recovery Space:</strong> Quiet corner for rest</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Budget-Friendly Solutions */}
        <section className="mb-10">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Budget-Friendly Environmental Changes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-green-900 mb-3">Under $25:</h4>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>• LED bulbs with dimmers</li>
                  <li>• Blue light filtering glasses</li>
                  <li>• Door draft stoppers</li>
                  <li>• Essential oil diffuser</li>
                  <li>• Organizational containers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-900 mb-3">Under $100:</h4>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>• Small air purifier</li>
                  <li>• White noise machine</li>
                  <li>• Ergonomic keyboard and mouse</li>
                  <li>• Blackout curtains</li>
                  <li>• Humidifier/dehumidifier</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-900 mb-3">Under $300:</h4>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>• HEPA air purifier</li>
                  <li>• Ergonomic office chair</li>
                  <li>• Smart lighting system</li>
                  <li>• Monitor arm/stand</li>
                  <li>• Sound-absorbing panels</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Your Healing Environment Awaits</h2>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Creating migraine-friendly environments doesn't require a complete overhaul—small, 
                thoughtful changes can make a significant difference. Start with the most problematic 
                triggers in your daily spaces and build from there.
              </p>
              <p className="font-medium text-white">
                Remember: Your environment should support your health, not hinder it. Every 
                modification you make is an investment in fewer migraines and better quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-indigo-50 p-8 rounded-2xl border border-indigo-200">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">Start Your Environment Assessment</h3>
          <p className="text-indigo-700 mb-6">
            Track environmental triggers alongside your migraines to identify which changes will have the biggest impact.
          </p>
          <Link 
            to="/tools" 
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            Access Environment Tracking Tools
            <ArrowLeft className="ml-2 rotate-180" size={20} />
          </Link>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default MigraineFriendlyEnvironment;
