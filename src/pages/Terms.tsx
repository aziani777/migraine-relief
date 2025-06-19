
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p className="text-sm text-gray-500">Last updated: December 8, 2024</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using AntiMigraines.net, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on 
                AntiMigraines.net for personal, non-commercial transitory viewing only. This is 
                the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Content</h2>
              <p>
                Any content you submit to our website, including but not limited to comments, 
                messages, or feedback, becomes the property of AntiMigraines.net and may be 
                used for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
              <p>
                In no event shall AntiMigraines.net or its suppliers be liable for any damages 
                arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with 
                the laws of the United Kingdom.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
