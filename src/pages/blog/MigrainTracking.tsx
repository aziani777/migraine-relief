
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft, Clock, Calendar, Target, TrendingUp, AlertCircle, CheckCircle2, BarChart3 } from 'lucide-react';

const MigrainTracking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>June 19, 2025</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            When Should You 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
              Track Your Migraine?
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Learn the optimal times to start tracking your migraines and how consistent monitoring 
            can transform your treatment approach and quality of life.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/0749db91-4a5e-42e2-9c98-a7132ab2feef.png" 
            alt="Migraine tracking and monitoring"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-10">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 mb-8">
            <div className="flex items-center mb-4">
              <Target className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 m-0">The Power of Data</h2>
            </div>
            <p className="text-gray-700 leading-relaxed m-0">
              Migraine tracking isn't just about recording pain—it's about uncovering patterns that can 
              revolutionize your treatment. But timing is everything. Knowing when to start tracking and 
              what to focus on can make the difference between useful insights and overwhelming data.
            </p>
          </div>
        </div>

        {/* When to Start Tracking */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="text-green-500 mr-3" size={28} />
            Perfect Times to Start Tracking
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" size={20} />
                When Starting New Treatment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Begin tracking 2-4 weeks before starting any new medication or treatment. This baseline 
                data helps you and your doctor measure the true effectiveness of interventions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" size={20} />
                During Pattern Changes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If your migraines suddenly become more frequent, severe, or change character, tracking 
                helps identify potential triggers and provides crucial information for your healthcare provider.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" size={20} />
                Life Transitions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Major life changes—new job, moving, relationship changes, or hormonal shifts—can affect 
                migraine patterns. Tracking during these times helps separate coincidence from causation.
              </p>
            </div>
          </div>
        </section>

        {/* What to Track */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <BarChart3 className="text-blue-500 mr-3" size={28} />
            Essential Tracking Elements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Core Migraine Data</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Date and time of onset</li>
                <li>• Duration of attack</li>
                <li>• Pain intensity (1-10 scale)</li>
                <li>• Location of pain</li>
                <li>• Associated symptoms</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-4">Trigger Factors</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Sleep patterns</li>
                <li>• Stress levels</li>
                <li>• Weather changes</li>
                <li>• Food and drink consumption</li>
                <li>• Medication timing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tracking Duration */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Clock className="mr-3" size={28} />
              How Long Should You Track?
            </h2>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Minimum: 3 Months</h3>
                <p>Captures seasonal variations and provides enough data for pattern recognition.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Optimal: 6-12 Months</h3>
                <p>Allows for comprehensive analysis of triggers and treatment effectiveness.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Ongoing: Maintenance Tracking</h3>
                <p>Simplified tracking for long-term pattern monitoring and early warning signs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* When NOT to Track */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="text-orange-500 mr-3" size={28} />
            When Tracking Might Not Help
          </h2>
          
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
            <div className="space-y-4 text-orange-800">
              <p>
                <strong>During acute crisis periods:</strong> If you're experiencing status migrainosus 
                or severe daily headaches, focus on immediate treatment rather than detailed tracking.
              </p>
              <p>
                <strong>When it increases anxiety:</strong> Some people find tracking stressful. 
                If monitoring becomes a source of anxiety, take a break or simplify your approach.
              </p>
              <p>
                <strong>Without clear goals:</strong> Random tracking without specific objectives 
                often leads to data overload. Define what you hope to learn before starting.
              </p>
            </div>
          </div>
        </section>

        {/* Making Tracking Sustainable */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Making It Stick: Sustainable Tracking</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Use Technology</h3>
              <p className="text-gray-600 text-sm">Apps and digital tools make tracking quick and consistent.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Set Reminders</h3>
              <p className="text-gray-600 text-sm">Daily check-ins help capture data even on pain-free days.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Keep It Simple</h3>
              <p className="text-gray-600 text-sm">Track only what's useful—more isn't always better.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Your Tracking Journey Starts Now</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              The best time to start tracking is when you have a clear purpose and can commit to consistency. 
              Whether you're evaluating a new treatment, searching for triggers, or preparing for a doctor's 
              appointment, systematic tracking provides the insights you need for better migraine management.
            </p>
            <p className="text-white font-medium">
              Remember: The goal isn't perfect data—it's actionable insights that improve your quality of life.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 p-8 rounded-2xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to Start Tracking?</h3>
          <p className="text-blue-700 mb-6">
            Use our comprehensive tracking tools to start identifying your migraine patterns today.
          </p>
          <Link 
            to="/tools" 
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Tracking Now
            <ArrowLeft className="ml-2 rotate-180" size={20} />
          </Link>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default MigrainTracking;
