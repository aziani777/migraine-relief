
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft, Clock, Calendar, Brain, Zap, Shield, Heart, RefreshCw, Waves } from 'lucide-react';

const StressMigrainConnection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>June 19, 2025</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Hidden Connection Between 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Stress and Migraines
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Discover how chronic stress creates a perfect storm for migraines and learn evidence-based 
            strategies to break the stress-migraine cycle for lasting relief.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/efd55834-d3be-4d12-90b9-22f659e990cc.png" 
            alt="Stress and migraine connection visualization"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 mb-8">
            <div className="flex items-center mb-4">
              <Brain className="text-purple-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 m-0">The Invisible Trigger</h2>
            </div>
            <p className="text-gray-700 leading-relaxed m-0">
              Stress is consistently ranked as the #1 migraine trigger, yet its role is often 
              misunderstood. It's not just acute stress that matters—chronic stress creates lasting 
              changes in your brain and body that make migraines more likely, more severe, and harder to treat.
            </p>
          </div>
        </div>

        {/* The Science of Stress and Migraines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Zap className="text-yellow-500 mr-3" size={28} />
            How Stress Triggers Migraines
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">The Neurological Pathway</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When you experience stress, your brain releases a cascade of chemicals including cortisol, 
                  adrenaline, and inflammatory compounds. These substances directly affect the trigeminal 
                  nerve system—the same pathway involved in migraine pain.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-3">Key Stress Responses That Trigger Migraines:</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li>• Elevated cortisol levels increase inflammation</li>
                    <li>• Muscle tension restricts blood flow</li>
                    <li>• Neurotransmitter imbalances affect pain perception</li>
                    <li>• Sleep disruption lowers migraine threshold</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">The Stress-Let Down Effect</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Many people notice migraines strike not during high-stress periods, but afterward—
                  during weekends, vacations, or after completing major projects. This "let-down" 
                  effect occurs when stress hormones rapidly decrease.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="text-orange-800">
                    <strong>Why it happens:</strong> Your body becomes accustomed to high stress levels. 
                    When stress suddenly drops, the rapid hormonal shift can trigger a migraine attack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Stress */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Waves className="text-blue-500 mr-3" size={28} />
            Different Types of Stress, Different Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-3">Acute Stress</h3>
              <p className="text-red-700 leading-relaxed mb-4">
                Short-term, intense stress from specific events—deadlines, conflicts, emergencies. 
                Often triggers immediate migraines in susceptible individuals.
              </p>
              <div className="text-sm text-red-600">
                <strong>Examples:</strong> Job interviews, arguments, sudden bad news
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Chronic Stress</h3>
              <p className="text-purple-700 leading-relaxed mb-4">
                Long-term, ongoing stress that becomes your baseline. More dangerous for migraines 
                because it rewires your brain's stress response system.
              </p>
              <div className="text-sm text-purple-600">
                <strong>Examples:</strong> Work pressure, relationship issues, financial strain
              </div>
            </div>
          </div>
        </section>

        {/* Breaking the Cycle */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <RefreshCw className="text-green-500 mr-3" size={28} />
            Breaking the Stress-Migraine Cycle
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-green-700 mb-3">Stress Prevention Strategies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Practices:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• 10-minute morning meditation</li>
                    <li>• Regular sleep schedule</li>
                    <li>• Planned relaxation breaks</li>
                    <li>• Physical exercise routine</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Changes:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Boundary setting</li>
                    <li>• Time management skills</li>
                    <li>• Social support networks</li>
                    <li>• Lifestyle simplification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-green-700 mb-3">Acute Stress Management</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you feel stress building, these techniques can help prevent it from triggering a migraine:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <ul className="space-y-2 text-green-800">
                  <li><strong>4-7-8 Breathing:</strong> Inhale for 4, hold for 7, exhale for 8</li>
                  <li><strong>Progressive Muscle Relaxation:</strong> Tense and release muscle groups</li>
                  <li><strong>Grounding Techniques:</strong> 5-4-3-2-1 sensory awareness</li>
                  <li><strong>Cold Therapy:</strong> Cold compress on neck and temples</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mind-Body Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Heart className="text-pink-500 mr-3" size={28} />
            Proven Mind-Body Approaches
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Mindfulness Meditation</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-3">
                Regular practice rewires stress response patterns and reduces migraine frequency by 30-50%.
              </p>
              <div className="text-xs text-blue-600">
                <strong>Time needed:</strong> 10-20 minutes daily
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Yoga Therapy</h3>
              <p className="text-green-700 text-sm leading-relaxed mb-3">
                Combines physical movement with stress reduction. Studies show significant migraine improvement.
              </p>
              <div className="text-xs text-green-600">
                <strong>Frequency:</strong> 3-4 sessions per week
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-3">Biofeedback Training</h3>
              <p className="text-purple-700 text-sm leading-relaxed mb-3">
                Learn to control physiological stress responses through real-time monitoring.
              </p>
              <div className="text-xs text-purple-600">
                <strong>Success rate:</strong> 60-70% improvement
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Modifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Shield className="text-indigo-500 mr-3" size={28} />
            Building Stress Resilience
          </h2>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">The Stress-Resilient Lifestyle</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Physical Foundation</h4>
                <ul className="space-y-2 text-indigo-100">
                  <li>• Consistent sleep schedule (7-9 hours)</li>
                  <li>• Regular moderate exercise</li>
                  <li>• Balanced nutrition with stable blood sugar</li>
                  <li>• Limited caffeine and alcohol</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">Mental Strategies</h4>
                <ul className="space-y-2 text-indigo-100">
                  <li>• Cognitive behavioral techniques</li>
                  <li>• Problem-solving skills</li>
                  <li>• Realistic expectation setting</li>
                  <li>• Regular mental health check-ins</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When to Seek Help */}
        <section className="mb-12">
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
              <Heart className="text-orange-600 mr-3" size={24} />
              When Professional Help is Needed
            </h3>
            <div className="space-y-4 text-orange-800">
              <p>
                Sometimes stress and migraines create a cycle that's difficult to break alone. 
                Consider professional support if you're experiencing:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Chronic anxiety or depression</li>
                <li>• Overwhelming daily stress</li>
                <li>• Sleep disorders</li>
                <li>• Substance use as stress relief</li>
                <li>• Relationship or work problems</li>
              </ul>
              <p className="font-medium">
                Mental health professionals, particularly those familiar with chronic pain, 
                can provide valuable tools and support.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Taking Control of the Stress-Migraine Connection</h2>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Understanding the stress-migraine connection is the first step toward breaking free from 
                this debilitating cycle. While you can't eliminate all stress from your life, you can 
                change how your body responds to it.
              </p>
              <p>
                The key is consistency. Small, daily stress management practices are more effective 
                than sporadic intensive efforts. Start with one technique that resonates with you 
                and build from there.
              </p>
              <p className="font-medium text-white">
                Remember: Managing stress isn't about perfection—it's about progress. Every small 
                step toward better stress management is a step toward fewer, less severe migraines.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-purple-50 p-8 rounded-2xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">Start Your Stress Management Journey</h3>
          <p className="text-purple-700 mb-6 max-w-2xl mx-auto">
            Begin tracking your stress levels alongside your migraines to identify your personal 
            stress-migraine patterns and develop targeted management strategies.
          </p>
          <Link 
            to="/tools" 
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Access Stress Tracking Tools
            <ArrowLeft className="ml-2 rotate-180" size={20} />
          </Link>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default StressMigrainConnection;
