
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Clock, ArrowLeft, Moon, Sun, Apple, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SleepLightDiet = () => {
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
            src="/lovable-uploads/5a782d54-fa69-494b-bcef-fbd11285ee35.png" 
            alt="How Sleep, Light, and Diet Can Trigger Your Migraine"
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8 md:p-12">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Clock size={16} className="mr-1" />
              <span>10 min read</span>
              <span className="mx-2">•</span>
              <span>June 19, 2025</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              How Sleep, Light, and Diet Can Trigger Your Migraine
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                Discover the three most common lifestyle triggers that could be causing your migraines. Get actionable tips to modify your environment and habits for better prevention.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-l-4 border-blue-500 my-12">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="text-blue-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Understanding Lifestyle Triggers</h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  While genetics play a role in migraine susceptibility, lifestyle factors often act as the immediate triggers that set off an attack. Understanding and managing these three key areas—sleep, light exposure, and diet—can significantly reduce your migraine frequency and severity.
                </p>
              </div>

              {/* Sleep Section */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl my-12">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Moon className="text-indigo-600" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Sleep: Your Brain's Reset Button</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Sleep disturbances are among the most common migraine triggers, affecting up to 85% of migraine sufferers. Both too little and too much sleep can trigger attacks, making consistency key to prevention.
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-4">How Sleep Affects Migraines:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                        <span><strong>Disrupted Sleep Cycles:</strong> Irregular sleep patterns disrupt your circadian rhythm, affecting hormone production and pain sensitivity.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                        <span><strong>Sleep Debt:</strong> Chronic sleep deprivation increases stress hormones like cortisol, which can trigger migraine attacks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                        <span><strong>Weekend Sleep-ins:</strong> Sleeping in on weekends can trigger "weekend migraines" due to sudden schedule changes.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-600 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">✨ Sleep Optimization Tips:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Sleep Schedule</h4>
                        <p className="text-indigo-100">Go to bed and wake up at the same time every day, even on weekends.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Sleep Environment</h4>
                        <p className="text-indigo-100">Keep your bedroom cool (65-68°F), dark, and quiet.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Pre-Sleep Routine</h4>
                        <p className="text-indigo-100">Establish a relaxing 30-minute wind-down routine before bed.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Screen Time</h4>
                        <p className="text-indigo-100">Avoid screens 1-2 hours before bedtime to prevent blue light interference.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Light Section */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl my-12">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Sun className="text-yellow-600" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Light: The Double-Edged Trigger</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Light sensitivity (photophobia) affects 80% of migraine sufferers. Understanding different types of light triggers and how to manage them is crucial for prevention.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-red-700 mb-4">⚠️ Problematic Light Sources:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Fluorescent lighting</li>
                        <li>• Computer and phone screens</li>
                        <li>• Bright sunlight</li>
                        <li>• Flickering lights</li>
                        <li>• LED lights with blue wavelengths</li>
                        <li>• Glare from reflective surfaces</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-green-700 mb-4">✅ Migraine-Friendly Lighting:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Warm, dim lighting</li>
                        <li>• Natural light (filtered)</li>
                        <li>• Incandescent bulbs</li>
                        <li>• Soft, indirect lighting</li>
                        <li>• Green light therapy</li>
                        <li>• Adjustable lighting systems</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-600 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">🛡️ Light Management Strategies:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                        <div>
                          <h4 className="font-semibold">Wear Quality Sunglasses</h4>
                          <p className="text-yellow-100">Choose wraparound styles with UV protection, both indoors and outdoors when needed.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                        <div>
                          <h4 className="font-semibold">Use Blue Light Filters</h4>
                          <p className="text-yellow-100">Install apps or use glasses that filter blue light from screens, especially in the evening.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                        <div>
                          <h4 className="font-semibold">Adjust Your Environment</h4>
                          <p className="text-yellow-100">Position computer screens perpendicular to windows and use anti-glare screen protectors.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diet Section */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl my-12">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Apple className="text-green-600" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Diet: Fuel vs. Triggers</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    What you eat—and when you eat it—can significantly impact your migraine patterns. Certain foods contain compounds that can trigger attacks, while others may help prevent them.
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-red-700 mb-4">🚫 Common Dietary Triggers:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Foods to Watch:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Aged cheeses (tyramine)</li>
                          <li>• Processed meats (nitrates)</li>
                          <li>• Chocolate (phenylethylamine)</li>
                          <li>• Red wine (histamines)</li>
                          <li>• MSG and artificial sweeteners</li>
                          <li>• Citrus fruits (for some people)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Eating Patterns:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Skipping meals</li>
                          <li>• Dehydration</li>
                          <li>• Caffeine withdrawal</li>
                          <li>• Excessive caffeine</li>
                          <li>• Irregular meal times</li>
                          <li>• Blood sugar fluctuations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-600 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">🌱 Migraine-Friendly Nutrition Plan:</h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">🕐 Timing</h4>
                          <p className="text-green-100 text-sm">Eat regular meals every 3-4 hours to maintain stable blood sugar levels.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">💧 Hydration</h4>
                          <p className="text-green-100 text-sm">Drink 8-10 glasses of water daily. Dehydration is a major trigger.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">🥗 Balance</h4>
                          <p className="text-green-100 text-sm">Include protein, healthy fats, and complex carbs in each meal.</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Migraine-Fighting Foods:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-green-100"><strong>Magnesium-rich:</strong> Spinach, almonds, avocados, dark chocolate (in moderation)</p>
                          </div>
                          <div>
                            <p className="text-green-100"><strong>Anti-inflammatory:</strong> Fatty fish, berries, leafy greens, ginger</p>
                          </div>
                          <div>
                            <p className="text-green-100"><strong>Riboflavin sources:</strong> Eggs, dairy, lean meats, mushrooms</p>
                          </div>
                          <div>
                            <p className="text-green-100"><strong>Stable energy:</strong> Oats, quinoa, sweet potatoes, legumes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Plan Section */}
              <div className="bg-gray-50 p-8 rounded-xl my-12 border-2 border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">🎯 Your 30-Day Action Plan</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3">Week 1-2: Sleep Foundation</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Set consistent sleep/wake times</li>
                      <li>✓ Create a bedtime routine</li>
                      <li>✓ Optimize bedroom environment</li>
                      <li>✓ Track sleep patterns</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">Week 2-3: Light Management</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Get quality sunglasses</li>
                      <li>✓ Install blue light filters</li>
                      <li>✓ Adjust workspace lighting</li>
                      <li>✓ Note light-related triggers</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">Week 3-4: Diet Optimization</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Establish regular meal times</li>
                      <li>✓ Increase water intake</li>
                      <li>✓ Identify food triggers</li>
                      <li>✓ Add migraine-fighting foods</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-500 p-8 rounded-r-lg my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Remember: Small Changes, Big Impact</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  You don't need to overhaul your entire lifestyle overnight. Start with one area that feels most manageable for you—whether it's establishing a consistent sleep schedule, managing light exposure, or stabilizing your eating patterns.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Keep a migraine diary to track which changes have the most significant impact on your symptoms. This data will help you and your healthcare provider create a personalized prevention strategy that works for your unique situation.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default SleepLightDiet;
