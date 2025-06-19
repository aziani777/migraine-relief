
import { Shield } from 'lucide-react';

const TreatmentStrategies = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
        <Shield className="text-blue-500 mr-3" size={28} />
        Hormonal Migraine Treatment Approaches
      </h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Medical Interventions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3">Preventive Options:</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Continuous birth control pills</li>
                <li>• Estrogen patches during vulnerable days</li>
                <li>• Magnesium supplementation</li>
                <li>• Traditional migraine preventives</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Acute Treatment:</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Triptans (when safe to use)</li>
                <li>• NSAIDs with gastroprotection</li>
                <li>• Anti-nausea medications</li>
                <li>• Hormonal timing strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-bold text-green-800 mb-3">Lifestyle Modifications</h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• Maintain consistent sleep schedule</li>
              <li>• Regular exercise (moderate intensity)</li>
              <li>• Stress reduction techniques</li>
              <li>• Balanced nutrition with regular meals</li>
              <li>• Hydration maintenance</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Natural Approaches</h3>
            <ul className="space-y-2 text-purple-700 text-sm">
              <li>• Magnesium glycinate supplementation</li>
              <li>• B-complex vitamins</li>
              <li>• Omega-3 fatty acids</li>
              <li>• Herbal remedies (with medical guidance)</li>
              <li>• Acupuncture for hormone balance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentStrategies;
