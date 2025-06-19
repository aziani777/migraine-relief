
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <p className="font-bold text-yellow-800 mb-2">Important Notice</p>
              <p className="text-yellow-700">
                The information provided on AntiMigraines.net is for educational and informational 
                purposes only and is not intended as medical advice.
              </p>
            </div>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Medical Advice</h2>
              <p>
                The content on this website, including but not limited to articles, blog posts, 
                comments, and other materials, is not intended to be a substitute for professional 
                medical advice, diagnosis, or treatment. Always seek the advice of your physician 
                or other qualified health provider with any questions you may have regarding a 
                medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Doctor-Patient Relationship</h2>
              <p>
                Use of this website does not create a doctor-patient relationship between you and 
                AntiMigraines.net or any of its contributors. The information provided should not 
                be used for diagnosing or treating a health problem or disease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Situations</h2>
              <p>
                If you think you may have a medical emergency, call your doctor or emergency 
                services immediately. AntiMigraines.net does not recommend or endorse any 
                specific tests, physicians, products, procedures, opinions, or other information 
                that may be mentioned on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Responsibility</h2>
              <p>
                Reliance on any information provided by AntiMigraines.net is solely at your own 
                risk. You should not stop taking any medications or change your treatment plan 
                without first consulting with your healthcare provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Individual Results May Vary</h2>
              <p>
                Personal testimonials and experiences shared on this website represent individual 
                experiences and may not be typical. Results may vary from person to person, and 
                no guarantee of specific results is made.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p>
                If you have questions about this disclaimer, please contact us at:
              </p>
              <p className="font-medium">
                Email: info@antimigraines.net<br />
                Address: 7 Bell Yard, WC2A 2JR, London, UK
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
