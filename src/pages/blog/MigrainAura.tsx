
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MigrainAura = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="/lovable-uploads/1f1876b5-3ea6-4dbc-b3cd-51be6c333873.png" 
            alt="What an Aura Really Means – And When to Take Action"
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8 md:p-12">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Clock size={16} className="mr-1" />
              <span>6 min read</span>
              <span className="mx-2">•</span>
              <span>June 19, 2025</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              What an Aura Really Means – And When to Take Action
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                Understanding the warning signs your body gives you before a migraine attack. Learn to recognize aura symptoms and use them as your early intervention opportunity.
              </p>
              
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Migraine Aura</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Migraine aura affects about 25-30% of people with migraines. It's a collection of neurological symptoms that typically occur before the headache phase, though some people experience aura without the subsequent headache.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Types of Aura Symptoms</h2>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Visual Aura (Most Common)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        <span>Flashing or flickering lights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        <span>Zigzag lines or geometric patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        <span>Blind spots or vision loss</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        <span>Shimmering or wavy lines</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Sensory Aura</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 font-bold">•</span>
                        <span>Tingling or numbness in hands, arms, or face</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 font-bold">•</span>
                        <span>Pins and needles sensation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 font-bold">•</span>
                        <span>Changes in taste or smell</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-teal-800 mb-4">Language Aura</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">•</span>
                        <span>Difficulty finding words</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">•</span>
                        <span>Slurred speech</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">•</span>
                        <span>Problems understanding language</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">When Aura Becomes Your Early Warning System</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Recognizing your aura symptoms can be incredibly valuable for migraine management. This warning period typically lasts 20-60 minutes, giving you a crucial window for early intervention.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-lg my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Immediate Actions During Aura</h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">Take medication early:</p>
                    <p className="text-gray-700 leading-relaxed">If prescribed, acute migraine medications are most effective when taken during the aura phase</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">Find a quiet, dark space:</p>
                    <p className="text-gray-700 leading-relaxed">Reduce sensory input that could worsen the coming headache</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">Stay hydrated:</p>
                    <p className="text-gray-700 leading-relaxed">Drink water to prevent dehydration from worsening symptoms</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">Apply cold therapy:</p>
                    <p className="text-gray-700 leading-relaxed">Ice pack to the head or neck can help reduce inflammation</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Seek Emergency Care</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">While aura is usually harmless, certain symptoms require immediate medical attention:</p>
                <div className="space-y-3">
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <span className="text-red-600 mr-3 font-bold text-lg">⚠️</span>
                    <span className="text-gray-700">Sudden, severe aura symptoms that are different from your usual pattern</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <span className="text-red-600 mr-3 font-bold text-lg">⚠️</span>
                    <span className="text-gray-700">Aura lasting longer than 1 hour</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <span className="text-red-600 mr-3 font-bold text-lg">⚠️</span>
                    <span className="text-gray-700">Weakness or difficulty moving one side of your body</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <span className="text-red-600 mr-3 font-bold text-lg">⚠️</span>
                    <span className="text-gray-700">Severe confusion or difficulty speaking</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <span className="text-red-600 mr-3 font-bold text-lg">⚠️</span>
                    <span className="text-gray-700">Aura accompanied by fever or neck stiffness</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg my-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Building Your Aura Action Plan</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Work with your healthcare provider to develop a personalized action plan for when you experience aura. This might include specific medications, environmental modifications, and relaxation techniques that work best for you.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700 font-medium bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                    Remember, aura is your body's way of giving you advance notice. By learning to recognize and respond to these early warning signs, you can often reduce the severity of the migraine that follows or sometimes prevent it altogether.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default MigrainAura;
