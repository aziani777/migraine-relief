
import { Moon } from 'lucide-react';

const HormonalConnection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
        <Moon className="text-purple-500 mr-3" size={28} />
        How Hormones Trigger Migraines
      </h2>

      <div className="space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Estrogen: The Key Player</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Estrogen doesn't just trigger migraines—it's the dramatic rise and fall of estrogen 
              levels that creates the perfect storm for migraine attacks. When estrogen drops rapidly, 
              it affects neurotransmitters like serotonin and dopamine, triggering the migraine cascade.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-800 mb-3">Why Estrogen Withdrawal Triggers Migraines:</h4>
              <ul className="space-y-2 text-purple-700">
                <li>• Rapid estrogen decline affects blood vessel stability</li>
                <li>• Serotonin levels drop with falling estrogen</li>
                <li>• Inflammation increases during hormonal transitions</li>
                <li>• Pain threshold decreases with hormone fluctuations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HormonalConnection;
