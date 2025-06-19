
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft, Clock, Calendar, AlertTriangle, RefreshCw, Heart, Shield, TrendingDown, CheckCircle } from 'lucide-react';

const MedicationCycle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Navigation />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>13 min read</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>June 19, 2025</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Breaking the 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block">
              Migraine-Medication Cycle
            </span>
            <span className="text-2xl md:text-3xl text-gray-600 font-normal block mt-2">
              A Gentle Approach
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Learn how to safely reduce dependence on pain medications while maintaining effective 
            migraine management. Discover gentle strategies to break free from medication overuse headaches.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&h=300" 
            alt="Breaking medication dependency cycle"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-amber-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Understanding the Cycle</h2>
            </div>
            <p className="text-gray-700 leading-relaxed m-0">
              The irony of migraine treatment is that the very medications meant to help can sometimes 
              make things worse. Medication overuse headaches (MOH) affect millions of migraine sufferers 
              who find themselves trapped in a cycle of increasing medication use and worsening symptoms.
            </p>
          </div>
        </div>

        {/* What is MOH */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <RefreshCw className="text-red-500 mr-3" size={28} />
            What is Medication Overuse Headache?
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-red-700 mb-4">The Vicious Cycle</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Medication overuse headache occurs when pain medications, taken too frequently, 
                  actually increase headache frequency and intensity. Your brain becomes dependent 
                  on the medication, and withdrawal between doses triggers more headaches.
                </p>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-800 mb-3">Signs You Might Have MOH:</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Headaches on 15+ days per month</li>
                    <li>• Using pain medication 10+ days per month</li>
                    <li>• Headaches worsen when medication wears off</li>
                    <li>• Original migraine treatments no longer work</li>
                    <li>• Feeling like you "need" medication daily</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">High-Risk Medications</h3>
                <ul className="space-y-2 text-orange-700 text-sm">
                  <li>• Over-the-counter pain relievers (when used frequently)</li>
                  <li>• Combination medications with caffeine</li>
                  <li>• Triptans (more than 10 days/month)</li>
                  <li>• Ergot derivatives</li>
                  <li>• Opioid medications</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">The 2-10 Rule</h3>
                <p className="text-blue-700 text-sm mb-3">
                  To avoid MOH, limit acute medications to:
                </p>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <strong>2 days per week maximum</strong></li>
                  <li>• <strong>10 days per month maximum</strong></li>
                  <li>• Track your usage carefully</li>
                  <li>• Consider preventive medications if exceeding limits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Phase */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Heart className="text-pink-500 mr-3" size={28} />
            Step 1: Honest Assessment
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-pink-700 mb-6">Before Making Changes</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Track Your Current Use</h4>
                <div className="space-y-3 text-gray-700">
                  <p>For 4 weeks, record:</p>
                  <ul className="space-y-2 text-sm ml-4">
                    <li>• Every medication taken (type, dose, time)</li>
                    <li>• Headache severity before and after</li>
                    <li>• Duration of relief</li>
                    <li>• Side effects experienced</li>
                    <li>• Triggers that led to medication use</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Evaluate Effectiveness</h4>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-pink-800 text-sm mb-2">Ask yourself:</p>
                  <ul className="space-y-1 text-pink-700 text-sm">
                    <li>• Are medications working as well as before?</li>
                    <li>• Do I need higher doses for the same relief?</li>
                    <li>• Am I taking medication "just in case"?</li>
                    <li>• Do I feel anxious without medication available?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Withdrawal Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingDown className="text-green-500 mr-3" size={28} />
            Step 2: Gentle Withdrawal Strategies
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Withdrawal Approaches</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Gradual Tapering (Preferred)</h4>
                  <ul className="space-y-2 text-green-100 text-sm">
                    <li>• Reduce one medication at a time</li>
                    <li>• Decrease frequency before decreasing dose</li>
                    <li>• Allow 2-4 weeks between reductions</li>
                    <li>• Monitor symptoms carefully</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Immediate Cessation</h4>
                  <ul className="space-y-2 text-green-100 text-sm">
                    <li>• Sometimes necessary for severe MOH</li>
                    <li>• Requires medical supervision</li>
                    <li>• May need inpatient support</li>
                    <li>• Faster resolution but more challenging</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Week 1-2</h3>
                <p className="text-blue-700 text-sm mb-3">Expect temporary worsening:</p>
                <ul className="space-y-1 text-blue-600 text-xs">
                  <li>• Increased headache frequency</li>
                  <li>• Nausea and fatigue</li>
                  <li>• Sleep disturbances</li>
                  <li>• Mood changes</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">Week 3-4</h3>
                <p className="text-yellow-700 text-sm mb-3">Gradual improvement:</p>
                <ul className="space-y-1 text-yellow-600 text-xs">
                  <li>• Headaches become less frequent</li>
                  <li>• Sleep patterns improve</li>
                  <li>• Energy levels stabilize</li>
                  <li>• Mood begins to lift</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">Month 2-3</h3>
                <p className="text-green-700 text-sm mb-3">Significant improvement:</p>
                <ul className="space-y-1 text-green-600 text-xs">
                  <li>• Return to baseline headache pattern</li>
                  <li>• Medications work effectively again</li>
                  <li>• Overall quality of life improves</li>
                  <li>• Clearer thinking and better mood</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Shield className="text-purple-500 mr-3" size={28} />
            Step 3: Support During Withdrawal
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-purple-700 mb-4">Medical Support Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bridge Medications:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Corticosteroids for severe withdrawal</li>
                    <li>• Anti-nausea medications</li>
                    <li>• Short-term muscle relaxants</li>
                    <li>• Sleep aids if needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Preventive Start:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Begin preventive medication early</li>
                    <li>• Higher initial doses may be needed</li>
                    <li>• Allow 6-8 weeks for full effect</li>
                    <li>• Monitor for interactions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-purple-700 mb-4">Non-Medication Support</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Physical Comfort:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Cold/heat therapy</li>
                    <li>• Gentle massage</li>
                    <li>• Relaxation techniques</li>
                    <li>• Aromatherapy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lifestyle Support:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Strict sleep schedule</li>
                    <li>• Gentle exercise</li>
                    <li>• Stress reduction</li>
                    <li>• Hydration focus</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emotional Support:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Counseling/therapy</li>
                    <li>• Support groups</li>
                    <li>• Family education</li>
                    <li>• Mindfulness practice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building New Habits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <CheckCircle className="text-teal-500 mr-3" size={28} />
            Step 4: Building Sustainable Habits
          </h2>

          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Long-term Success Strategies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Medication Management Rules</h4>
                <ul className="space-y-2 text-teal-100">
                  <li>• Use a medication tracking app or calendar</li>
                  <li>• Set weekly limits and stick to them</li>
                  <li>• Have someone else hold backup medications</li>
                  <li>• Practice the "wait 2 hours" rule before taking rescue meds</li>
                  <li>• Identify your personal warning signs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Alternative First-Line Approaches</h4>
                <ul className="space-y-2 text-teal-100">
                  <li>• Try non-medication strategies first</li>
                  <li>• Use hydration and rest as initial treatment</li>
                  <li>• Practice relaxation techniques early</li>
                  <li>• Apply cold therapy before medication</li>
                  <li>• Consider acupressure or massage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Focus */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shifting to Prevention</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">The Prevention Mindset</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Breaking the medication cycle requires a fundamental shift from treating attacks 
                to preventing them. This means addressing root causes and building resilience 
                rather than relying on rescue medications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-800 mb-3">Preventive Medications:</h4>
                  <ul className="text-indigo-700 space-y-1 text-sm">
                    <li>• Beta-blockers (propranolol, metoprolol)</li>
                    <li>• Anticonvulsants (topiramate, valproate)</li>
                    <li>• Antidepressants (amitriptyline, venlafaxine)</li>
                    <li>• CGRP inhibitors (newer option)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3">Lifestyle Prevention:</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Regular sleep-wake cycles</li>
                    <li>• Consistent meal timing</li>
                    <li>• Stress management training</li>
                    <li>• Regular moderate exercise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Working with Healthcare Providers */}
        <section className="mb-12">
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Working with Your Healthcare Team</h3>
            <div className="space-y-4 text-orange-800">
              <p>
                Breaking the medication cycle requires professional support. Be honest with your 
                healthcare provider about your medication use—they're there to help, not judge.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Prepare for Appointments:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Bring detailed medication logs</li>
                    <li>• List all symptoms experienced</li>
                    <li>• Describe impact on daily life</li>
                    <li>• Share your goals and concerns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Ask Important Questions:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• What withdrawal timeline should I expect?</li>
                    <li>• Which symptoms require immediate attention?</li>
                    <li>• How can family/friends best support me?</li>
                    <li>• When should we reassess the plan?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories and Hope */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Hope and Recovery</h2>
            <div className="space-y-4 text-emerald-100 leading-relaxed">
              <p>
                Recovery from medication overuse headache is not only possible—it's common. 
                Studies show that 70-80% of people who break the MOH cycle experience 
                significant improvement in their migraine patterns.
              </p>
              <p>
                The journey may be challenging, but it's temporary. Most people find that 
                once they break free from the cycle, their migraines become more manageable 
                and respond better to appropriate treatments.
              </p>
              <p className="font-medium text-white">
                Remember: Taking control of medication overuse is a sign of strength, not weakness. 
                You're taking an important step toward better health and quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Your Path to Freedom</h2>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Breaking the migraine-medication cycle is one of the most important steps you can 
                take for your long-term health. While the process requires patience and support, 
                the freedom from daily medication dependence is worth the effort.
              </p>
              <p>
                Start with small steps: track your current use, work with your healthcare provider, 
                and build your support system. Recovery is a journey, not a destination, and every 
                step forward is progress.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-amber-50 p-8 rounded-2xl border border-amber-200">
          <h3 className="text-2xl font-bold text-amber-800 mb-4">Ready to Break the Cycle?</h3>
          <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
            Start by tracking your medication use and migraine patterns. Understanding your current 
            situation is the first step toward positive change.
          </p>
          <Link 
            to="/tools" 
            className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
          >
            Start Medication Tracking
            <ArrowLeft className="ml-2 rotate-180" size={20} />
          </Link>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default MedicationCycle;
