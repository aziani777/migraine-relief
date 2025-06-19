
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';

const Conclusion = () => {
  return (
    <>
      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100 mb-8">
          <div className="flex items-center mb-4">
            <Heart className="text-pink-600 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 m-0">The Female Migraine Experience</h2>
          </div>
          <p className="text-gray-700 leading-relaxed m-0">
            Women are three times more likely to suffer from migraines than men, and hormones play 
            a central role in this disparity. Understanding the connection between estrogen fluctuations 
            and migraine attacks empowers women to take control of their unique migraine patterns.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Empowering Your Hormonal Migraine Journey</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              Understanding the connection between hormones and migraines is the first step toward 
              effective management. While you can't control your hormonal fluctuations, you can 
              learn to work with them rather than against them.
            </p>
            <p>
              Every woman's hormonal migraine pattern is unique. What works for one person may not 
              work for another, which is why tracking, patience, and working with knowledgeable 
              healthcare providers is so important.
            </p>
            <p className="font-medium text-white">
              Remember: Hormonal migraines are a medical condition, not a character flaw. You deserve 
              comprehensive care and support in managing this complex but treatable condition.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-pink-50 p-8 rounded-2xl border border-pink-200">
        <h3 className="text-2xl font-bold text-pink-800 mb-4">Start Tracking Your Patterns Today</h3>
        <p className="text-pink-700 mb-6 max-w-2xl mx-auto">
          Use our comprehensive tracking tools to identify your unique hormonal migraine patterns 
          and work with your healthcare provider to develop an effective treatment plan.
        </p>
        <Link 
          to="/tools" 
          className="inline-flex items-center bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
        >
          Access Tracking Tools
          <ArrowLeft className="ml-2 rotate-180" size={20} />
        </Link>
      </div>
    </>
  );
};

export default Conclusion;
