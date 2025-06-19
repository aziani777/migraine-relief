
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NutrientDeficiencies = () => {
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
            src="/lovable-uploads/6638a65a-6bb0-4231-aa3b-a81218afbbc5.png" 
            alt="5 Common Nutrient Deficiencies Linked to Migraine"
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8 md:p-12">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Clock size={16} className="mr-1" />
              <span>8 min read</span>
              <span className="mx-2">•</span>
              <span>June 19, 2025</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              5 Common Nutrient Deficiencies Linked to Migraine (And What to Do About Them)
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                Discover the essential vitamins and minerals that could be missing from your diet and triggering your migraines. Learn practical ways to address these deficiencies naturally.
              </p>
              
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding the Nutrition-Migraine Connection</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Research has increasingly shown that certain nutrient deficiencies can play a significant role in migraine frequency and severity. When your body lacks essential vitamins and minerals, it can trigger the complex cascade of events that lead to a migraine attack.
                </p>
              </div>
              
              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">1. Magnesium Deficiency</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Magnesium is often called the "anti-stress" mineral, and for good reason. Studies show that up to 50% of migraine sufferers have low levels of magnesium during an attack. This essential mineral helps regulate nerve function and blood vessel constriction.
                </p>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="font-semibold text-teal-800 mb-2">What to do:</p>
                  <p className="text-gray-700 leading-relaxed">Include magnesium-rich foods like dark leafy greens, nuts, seeds, and whole grains in your diet. Consider a high-quality magnesium supplement after consulting with your healthcare provider.</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">2. Riboflavin (Vitamin B2) Deficiency</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Riboflavin plays a crucial role in cellular energy production. Research has shown that high-dose riboflavin supplementation can significantly reduce migraine frequency and duration.
                </p>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="font-semibold text-blue-800 mb-2">What to do:</p>
                  <p className="text-gray-700 leading-relaxed">Include eggs, dairy products, lean meats, and green vegetables in your diet. Supplementation may be beneficial for migraine prevention.</p>
                </div>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">3. Coenzyme Q10 Deficiency</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  CoQ10 is essential for cellular energy production and has powerful antioxidant properties. Studies have shown that CoQ10 supplementation can reduce migraine frequency by up to 50%.
                </p>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="font-semibold text-purple-800 mb-2">What to do:</p>
                  <p className="text-gray-700 leading-relaxed">While CoQ10 is found in small amounts in foods like fatty fish and organ meats, supplementation is often necessary to achieve therapeutic levels.</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">4. Vitamin D Deficiency</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Low vitamin D levels have been linked to increased migraine frequency and severity. This "sunshine vitamin" plays a role in inflammation regulation and neurological function.
                </p>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="font-semibold text-yellow-800 mb-2">What to do:</p>
                  <p className="text-gray-700 leading-relaxed">Get regular sun exposure, include vitamin D-rich foods like fatty fish, and consider supplementation, especially during winter months.</p>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">5. Iron Deficiency</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Iron deficiency anemia can trigger migraines, particularly in women. Low iron levels affect oxygen transport and can lead to headaches and fatigue.
                </p>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="font-semibold text-red-800 mb-2">What to do:</p>
                  <p className="text-gray-700 leading-relaxed">Include iron-rich foods like lean meats, beans, spinach, and fortified cereals. Have your iron levels checked regularly, especially if you're experiencing frequent migraines.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg my-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Taking Action</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    If you suspect nutrient deficiencies might be contributing to your migraines, work with a healthcare provider to get proper testing. A comprehensive metabolic panel can help identify specific deficiencies and guide targeted supplementation.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Remember, addressing nutrient deficiencies is just one piece of the migraine puzzle. A holistic approach that includes proper nutrition, stress management, sleep hygiene, and trigger identification will give you the best chance of reducing migraine frequency and severity.
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

export default NutrientDeficiencies;
