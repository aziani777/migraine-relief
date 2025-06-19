
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const ManageYourMigrainSection = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (itemKey: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const managementAreas = [
    {
      key: 'triggers',
      title: 'Migraine Triggers',
      icon: '🎯',
      color: 'from-red-50 to-orange-50 border-red-200',
      content: [
        'Food triggers: aged cheese, chocolate, caffeine, alcohol, MSG',
        'Environmental: bright lights, loud sounds, strong smells, weather changes',
        'Lifestyle: stress, irregular sleep, skipped meals, dehydration',
        'Hormonal: menstrual cycle, birth control, hormone therapy',
        'Physical: intense exercise, poor posture, eye strain'
      ]
    },
    {
      key: 'medications',
      title: 'Medications',
      icon: '💊',
      color: 'from-blue-50 to-teal-50 border-blue-200',
      content: [
        'Acute treatments: triptans, NSAIDs, anti-nausea medications',
        'Preventive medications: beta-blockers, anticonvulsants, antidepressants',
        'CGRP inhibitors: newer targeted migraine prevention drugs',
        'Botox injections: for chronic migraine (15+ headache days/month)',
        'Always consult healthcare providers for proper medication management'
      ]
    },
    {
      key: 'treatments',
      title: 'Other Treatments',
      icon: '🌿',
      color: 'from-green-50 to-teal-50 border-green-200',
      content: [
        'Cognitive Behavioral Therapy (CBT): helps manage pain and stress',
        'Biofeedback: learning to control physiological responses',
        'Acupuncture: may help reduce frequency and intensity',
        'Massage therapy: can help with tension and stress relief',
        'Physical therapy: especially helpful for cervicogenic headaches'
      ]
    }
  ];

  return (
    <section id="manage-your-migraine" className="py-16 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 scroll-animate">
            Manage Your Migraine
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 scroll-animate">
            Effective migraine management combines prevention, treatment, and lifestyle modifications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center scroll-animate hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Patterns</h3>
              <p className="text-gray-600">Keep a headache diary to identify personal triggers and patterns.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center scroll-animate hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-lavender-100 to-lavender-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Avoid Triggers</h3>
              <p className="text-gray-600">Once identified, work to minimize exposure to your specific triggers.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center scroll-animate hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Treatment Plan</h3>
              <p className="text-gray-600">Work with healthcare providers to develop both acute and preventive strategies.</p>
            </div>
          </div>

          <div className="scroll-animate">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Management Strategies</h3>
            <div className="grid gap-4 max-w-4xl mx-auto">
              {managementAreas.map((item) => (
                <Card key={item.key} className={`bg-gradient-to-r ${item.color} border-2 shadow-md hover:shadow-lg transition-all duration-300`}>
                  <Collapsible 
                    open={expandedItems[item.key]} 
                    onOpenChange={() => toggleItem(item.key)}
                  >
                    <CollapsibleTrigger asChild>
                      <button className="w-full p-6 text-left flex items-center justify-between hover:bg-white/30 transition-colors rounded-lg">
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl">{item.icon}</span>
                          <span className="font-semibold text-lg text-gray-800">{item.title}</span>
                        </div>
                        {expandedItems[item.key] ? (
                          <ChevronDown size={24} className="text-gray-600" />
                        ) : (
                          <ChevronRight size={24} className="text-gray-600" />
                        )}
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6">
                        <div className="pl-16">
                          <ul className="space-y-3">
                            {item.content.map((point, index) => (
                              <li key={index} className="flex items-start space-x-3 text-gray-700">
                                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-lavender-100 to-teal-100 rounded-xl p-8 scroll-animate shadow-lg">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Remember</h3>
                <p className="text-gray-700 leading-relaxed">
                  Migraine management is highly individual. What works for one person may not work for another. 
                  Be patient with yourself as you and your healthcare team find the right combination of strategies 
                  that work best for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageYourMigrainSection;
