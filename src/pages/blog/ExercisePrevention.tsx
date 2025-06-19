
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft, Clock, Calendar, Activity, Heart, Zap, Shield, TrendingUp } from 'lucide-react';

const ExercisePrevention = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Navigation />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>7 min read</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>June 19, 2025</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Role of Exercise in 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 block">
              Migraine Prevention
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Discover how the right type and amount of exercise can significantly reduce migraine 
            frequency while learning to exercise safely without triggering attacks.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&h=300" 
            alt="Exercise and migraine prevention"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-10">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100 mb-8">
            <div className="flex items-center mb-4">
              <Activity className="text-emerald-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Exercise: Friend or Foe?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed m-0">
              For many migraine sufferers, exercise feels like a double-edged sword. While intense 
              workouts can trigger attacks, research consistently shows that regular, moderate exercise 
              is one of the most effective natural migraine preventives available.
            </p>
          </div>
        </div>

        {/* The Science */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Heart className="text-red-500 mr-3" size={28} />
            How Exercise Prevents Migraines
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-red-700 mb-4">The Neurochemical Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Brain Chemistry Changes:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Increases endorphin production (natural painkillers)</li>
                    <li>• Balances serotonin levels</li>
                    <li>• Reduces inflammation markers</li>
                    <li>• Improves BDNF (brain-derived neurotrophic factor)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Physical Benefits:</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Improves cardiovascular health</li>
                    <li>• Reduces muscle tension</li>
                    <li>• Enhances sleep quality</li>
                    <li>• Lowers stress hormones</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Research Results</h3>
              <p className="text-emerald-700 leading-relaxed">
                Studies show that regular aerobic exercise can reduce migraine frequency by 30-40%, 
                with benefits comparable to some preventive medications. The key is consistency and 
                finding the right intensity level for your body.
              </p>
            </div>
          </div>
        </section>

        {/* Exercise Types */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Zap className="text-yellow-500 mr-3" size={28} />
            Best Exercise Types for Migraine Prevention
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Aerobic Exercise</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                Low to moderate intensity cardio that you can sustain comfortably.
              </p>
              <div className="text-xs text-blue-600">
                <strong>Examples:</strong> Walking, swimming, cycling, dancing
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Yoga & Stretching</h3>
              <p className="text-green-700 text-sm leading-relaxed mb-4">
                Combines gentle movement with stress reduction and flexibility.
              </p>
              <div className="text-xs text-green-600">
                <strong>Benefits:</strong> Reduces tension, improves posture, calms nervous system
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-3">Strength Training</h3>
              <p className="text-purple-700 text-sm leading-relaxed mb-4">
                Light to moderate resistance exercises to build stability.
              </p>
              <div className="text-xs text-purple-600">
                <strong>Focus:</strong> Core strength, neck/shoulder support, posture improvement
              </div>
            </div>
          </div>
        </section>

        {/* Safe Exercise Guidelines */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Shield className="text-blue-500 mr-3" size={28} />
            Exercise Safety Guidelines
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">The "Start Low, Go Slow" Approach</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Week 1-2: Foundation</h4>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    <li>• 10-15 minutes of gentle activity</li>
                    <li>• Focus on consistency over intensity</li>
                    <li>• Choose activities you enjoy</li>
                    <li>• Monitor for any migraine triggers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Week 3-4: Building</h4>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    <li>• Gradually increase to 20-30 minutes</li>
                    <li>• Add variety to prevent boredom</li>
                    <li>• Maintain comfortable intensity</li>
                    <li>• Continue tracking symptoms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Warning Signs to Stop</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">During Exercise:</h4>
                  <ul className="text-yellow-800 space-y-1 text-sm">
                    <li>• Sudden severe headache</li>
                    <li>• Visual disturbances</li>
                    <li>• Nausea or dizziness</li>
                    <li>• Chest pain or shortness of breath</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">After Exercise:</h4>
                  <ul className="text-yellow-800 space-y-1 text-sm">
                    <li>• Headache within 2 hours</li>
                    <li>• Unusual fatigue</li>
                    <li>• Increased migraine frequency</li>
                    <li>• Poor recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exercise Timing and Environment */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="text-green-500 mr-3" size={28} />
            Optimizing Your Exercise Routine
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-green-700 mb-4">Timing Considerations</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best Times:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• When you feel energetic</li>
                    <li>• Not during migraine prodrome</li>
                    <li>• 2+ hours after eating</li>
                    <li>• When well-hydrated</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avoid When:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Feeling migraine onset</li>
                    <li>• Severely sleep-deprived</li>
                    <li>• Very stressed or anxious</li>
                    <li>• Dehydrated or hungry</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Environmental Tips:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Avoid bright, flickering lights</li>
                    <li>• Choose well-ventilated spaces</li>
                    <li>• Monitor temperature</li>
                    <li>• Minimize strong odors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3">Hydration and Fuel Strategy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Before Exercise:</h4>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Drink 16-20oz water 2-3 hours prior</li>
                    <li>• Have a small snack if needed</li>
                    <li>• Avoid trigger foods</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">During/After Exercise:</h4>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Sip water regularly during activity</li>
                    <li>• Replace fluids within 30 minutes</li>
                    <li>• Include electrolytes for longer sessions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Your Plan */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating Your Personal Exercise Plan</h2>
          
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Weekly Exercise Template</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Beginner Plan (Weeks 1-4)</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li><strong>Monday:</strong> 15-min gentle walk</li>
                  <li><strong>Wednesday:</strong> 10-min yoga or stretching</li>
                  <li><strong>Friday:</strong> 15-min activity of choice</li>
                  <li><strong>Weekend:</strong> Gentle outdoor activity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Intermediate Plan (Weeks 5+)</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li><strong>Mon/Wed/Fri:</strong> 30-min aerobic exercise</li>
                  <li><strong>Tue/Thu:</strong> 20-min strength or yoga</li>
                  <li><strong>Saturday:</strong> 45-min enjoyable activity</li>
                  <li><strong>Sunday:</strong> Rest or gentle stretching</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-10">
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Troubleshooting Common Issues</h3>
            <div className="space-y-4 text-orange-800">
              <div>
                <h4 className="font-bold mb-2">If exercise triggers migraines:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Reduce intensity and duration</li>
                  <li>• Check hydration and blood sugar levels</li>
                  <li>• Ensure proper warm-up and cool-down</li>
                  <li>• Consider exercising in cooler environments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">If you can't maintain consistency:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Start with just 5 minutes daily</li>
                  <li>• Find an exercise buddy or group</li>
                  <li>• Choose activities you genuinely enjoy</li>
                  <li>• Set realistic, achievable goals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Exercise: Your Natural Migraine Medicine</h2>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Regular exercise is one of the most powerful, natural migraine preventives available. 
                While it requires patience to find your optimal routine, the benefits extend far beyond 
                migraine prevention to improved overall health and quality of life.
              </p>
              <p className="font-medium text-white">
                Remember: The best exercise is the one you'll actually do consistently. Start small, 
                listen to your body, and celebrate every step forward on your journey to better health.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-emerald-50 p-8 rounded-2xl border border-emerald-200">
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">Start Your Exercise Journey Today</h3>
          <p className="text-emerald-700 mb-6">
            Track your exercise routine alongside your migraine patterns to see the benefits unfold.
          </p>
          <Link 
            to="/tools" 
            className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
          >
            Track Exercise & Migraines
            <ArrowLeft className="ml-2 rotate-180" size={20} />
          </Link>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default ExercisePrevention;
