
export const checklistItems = [
  {
    category: "Before a Migraine",
    items: [
      "Track potential triggers (food, stress, weather)",
      "Monitor sleep patterns",
      "Stay hydrated throughout the day",
      "Practice stress management techniques",
      "Take preventive medication if prescribed",
      "Check weather forecasts for pressure changes"
    ]
  },
  {
    category: "During a Migraine",
    items: [
      "Find a quiet, dark room",
      "Apply cold or heat therapy",
      "Take prescribed medication early",
      "Practice breathing exercises",
      "Use aromatherapy (peppermint, lavender)",
      "Stay hydrated with small sips",
      "Avoid bright screens and loud noises"
    ]
  },
  {
    category: "After a Migraine",
    items: [
      "Rest and recover gradually",
      "Document the episode in a migraine diary",
      "Note what helped or didn't help",
      "Stay hydrated and eat gently",
      "Avoid known triggers for 24-48 hours",
      "Plan a gentle return to normal activities"
    ]
  },
  {
    category: "Emergency Actions",
    items: [
      "Seek immediate help if migraine is sudden and severe",
      "Call doctor if migraine lasts more than 72 hours",
      "Get help if experiencing fever with migraine",
      "Seek care for changes in vision or speech",
      "Emergency room if migraine follows head injury"
    ]
  }
];

export const triggerCategories = [
  {
    title: "🌤 Environmental Triggers",
    items: [
      "Bright or flickering lights (e.g., screens, sunlight, fluorescent lighting)",
      "Loud noises (e.g., concerts, traffic, crowded places)",
      "Strong smells (e.g., perfumes, cleaning products, smoke)",
      "Weather changes (e.g., humidity, pressure, storms)",
      "High altitudes or quick elevation changes (e.g., airplanes, mountains)"
    ]
  },
  {
    title: "🍽 Food & Drink Triggers",
    items: [
      "Alcohol, especially red wine and beer",
      "Caffeine (e.g., coffee, tea, energy drinks)",
      "Chocolate",
      "Aged cheeses (e.g., cheddar, blue cheese)",
      "Processed foods (e.g., salami, cured meats, fast food)",
      "MSG (monosodium glutamate)",
      "Artificial sweeteners (e.g., aspartame, sucralose)",
      "Citrus fruits (e.g., oranges, lemons, grapefruits)"
    ]
  },
  {
    title: "🧬 Hormonal & Physical Triggers",
    items: [
      "Hormonal changes (e.g., PMS, menstruation, ovulation)",
      "Birth control or hormone treatments",
      "Intense exercise or physical strain",
      "Poor sleep or too much sleep",
      "Stress or high anxiety",
      "Sudden temperature changes"
    ]
  },
  {
    title: "🧘 Lifestyle & Emotional Triggers",
    items: [
      "Skipping meals or fasting",
      "Not drinking enough water (dehydration)",
      "Poor posture (e.g., slouching, bad work setup)",
      "Too much screen time (e.g., phone, TV, computer)",
      "Strong emotions (e.g., stress, sadness, anger)",
      "Letting go after stress (e.g., migraines on weekends)"
    ]
  },
  {
    title: "💊 Medication & Supplement Triggers",
    items: [
      "Overuse of pain relievers (can cause \"rebound headaches\")",
      "Herbal or vitamin supplements",
      "Prescription medications (check with your doctor if unsure)"
    ]
  }
];

export const triggerCategoryNames = [
  'Environmental Triggers',
  'Food & Drink Triggers', 
  'Hormonal & Physical Triggers',
  'Lifestyle & Emotional Triggers',
  'Medication & Supplement Triggers'
];

export const generateDays = () => {
  return Array.from({ length: 14 }, (_, i) => `Day ${i + 1}`);
};
