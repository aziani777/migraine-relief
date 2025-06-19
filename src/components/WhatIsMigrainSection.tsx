
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const WhatIsMigrainSection = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (itemKey: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const migraineFacts = [
    {
      key: 'definition',
      title: 'What is Migraine?',
      content: [
        'A complex neurological disorder affecting over 1 billion people worldwide',
        'Much more than just a headache - it\'s a genetic, neurological disease',
        'Characterized by recurring episodes of moderate to severe head pain',
        'Often accompanied by nausea, vomiting, and sensitivity to light and sound',
        'Can last anywhere from 4 hours to 3 days if untreated'
      ]
    },
    {
      key: 'phases',
      title: 'The Four Phases of Migraine',
      content: [
        'Prodrome: Early warning signs (mood changes, neck stiffness, cravings)',
        'Aura: Visual, sensory, or speech disturbances (affects 25% of people)',
        'Headache: The main attack phase with throbbing pain',
        'Postdrome: Recovery phase, often called "migraine hangover"'
      ]
    },
    {
      key: 'types',
      title: 'Types of Migraine',
      content: [
        'Migraine without aura: Most common type (85% of cases)',
        'Migraine with aura: Preceded by visual or sensory disturbances',
        'Chronic migraine: 15+ headache days per month for 3+ months',
        'Hemiplegic migraine: Rare type causing temporary paralysis',
        'Vestibular migraine: Involves dizziness and balance problems'
      ]
    },
    {
      key: 'causes',
      title: 'What Causes Migraine?',
      content: [
        'Genetic predisposition - runs in families (90% have family history)',
        'Abnormal brain activity affecting nerve signals and blood vessels',
        'Imbalance of brain chemicals, particularly serotonin',
        'Triggered by environmental and lifestyle factors',
        'More common in women due to hormonal influences'
      ]
    }
  ];

  return (
    <section id="what-is-migraine" className="py-16 bg-gradient-to-br from-lavender-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 scroll-animate">
            What is Migraine?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 scroll-animate">
            Understanding migraine is the first step toward effective management and relief.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md scroll-animate">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Neurological Disease</h3>
              </div>
              <p className="text-gray-600 text-center">
                Migraine is a complex neurological condition, not just a bad headache. It involves your entire nervous system.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md scroll-animate">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Genetic Component</h3>
              </div>
              <p className="text-gray-600 text-center">
                About 90% of people with migraine have a family history, indicating a strong genetic link.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden scroll-animate">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-lavender-100 to-teal-100">
              <h3 className="text-xl font-semibold text-gray-900">Learn More About Migraine</h3>
            </div>
            {migraineFacts.map((item) => (
              <div key={item.key} className="border-b border-gray-100 last:border-b-0">
                <button
                  onClick={() => toggleItem(item.key)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-teal-700">{item.title}</span>
                  {expandedItems[item.key] ? (
                    <ChevronDown size={20} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={20} className="text-gray-400" />
                  )}
                </button>
                {expandedItems[item.key] && (
                  <div className="px-6 pb-4">
                    <ul className="space-y-2">
                      {item.content.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-teal-100 to-lavender-100 rounded-lg p-6 scroll-animate">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Did You Know?</h3>
            <p className="text-gray-700">
              Migraine is the 3rd most prevalent illness in the world and the 6th most disabling illness globally. 
              Despite this, it remains one of the most under-diagnosed and under-treated conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMigrainSection;
