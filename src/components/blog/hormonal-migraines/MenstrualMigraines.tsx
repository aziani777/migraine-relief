
import { Flower } from 'lucide-react';

const MenstrualMigraines = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
        <Flower className="text-pink-500 mr-3" size={28} />
        Menstrual Migraines: Patterns and Prevention
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200">
          <h3 className="text-xl font-bold text-pink-800 mb-4">Understanding the Timing</h3>
          <div className="space-y-3 text-pink-700">
            <p><strong>True Menstrual Migraine:</strong> Occurs 2 days before to 3 days after menstruation</p>
            <p><strong>Menstrually-Related Migraine:</strong> Occurs around menstruation but also at other times</p>
            <p><strong>Peak Risk Days:</strong> Days -2, -1, +1, +2, +3 relative to menstruation start</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Prevention Strategies</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• Track cycles for 3+ months to identify patterns</li>
            <li>• Consider short-term preventive medication</li>
            <li>• Maintain steady blood sugar during cycle</li>
            <li>• Prioritize sleep consistency</li>
            <li>• Use continuous birth control (with doctor approval)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MenstrualMigraines;
