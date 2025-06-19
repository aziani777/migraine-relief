
import { Sun, Flower, Heart, Baby, Users } from 'lucide-react';

const LifeStages = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
        <Sun className="text-yellow-500 mr-3" size={28} />
        Migraines Through Life Stages
      </h2>

      <div className="space-y-8">
        {/* Puberty */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
            <Flower className="text-yellow-500 mr-3" size={24} />
            Puberty & Teen Years
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">What Happens:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Migraines often begin with first menstruation</li>
                <li>• Irregular cycles = unpredictable migraines</li>
                <li>• Academic stress compounds hormonal triggers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Management Tips:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Establish regular sleep schedule</li>
                <li>• Learn stress management early</li>
                <li>• Track patterns from the start</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reproductive Years */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <Heart className="text-green-500 mr-3" size={24} />
            Reproductive Years (20s-40s)
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              This is often when migraines are most challenging due to career demands, 
              relationship stress, and potential family planning considerations.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-bold text-green-800 mb-2">Birth Control Considerations</h5>
                <p className="text-green-700 text-sm">Some hormonal contraceptives can worsen migraines, while others may help stabilize hormones.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-800 mb-2">Career Management</h5>
                <p className="text-blue-700 text-sm">Workplace accommodations and stress management become crucial for migraine control.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-bold text-purple-800 mb-2">Family Planning</h5>
                <p className="text-purple-700 text-sm">Medication considerations and pregnancy planning require specialized medical guidance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pregnancy */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-teal-700 mb-4 flex items-center">
            <Baby className="text-teal-500 mr-3" size={24} />
            Pregnancy & Postpartum
          </h3>
          <div className="space-y-4">
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h4 className="font-bold text-teal-800 mb-3">The Good News:</h4>
              <p className="text-teal-700">About 70% of women experience migraine improvement during pregnancy, especially after the first trimester when estrogen levels stabilize.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-800 mb-3">Postpartum Challenges:</h4>
              <ul className="text-orange-700 space-y-1">
                <li>• Hormonal crash after delivery can trigger severe migraines</li>
                <li>• Sleep deprivation compounds migraine risk</li>
                <li>• Breastfeeding hormones may affect migraine patterns</li>
                <li>• Limited medication options during nursing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Perimenopause & Menopause */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
            <Users className="text-indigo-500 mr-3" size={24} />
            Perimenopause & Menopause
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Perimenopause (40s-early 50s):</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Irregular cycles = unpredictable migraines</li>
                <li>• Often the worst period for hormonal migraines</li>
                <li>• Hot flashes may trigger migraines</li>
                <li>• Sleep disturbances increase migraine risk</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Post-Menopause:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Many women see migraine improvement</li>
                <li>• Hormone replacement therapy may help or hinder</li>
                <li>• Focus shifts to non-hormonal triggers</li>
                <li>• Age-related health factors become more important</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeStages;
