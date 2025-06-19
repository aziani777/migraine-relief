
const TrackingSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Tracking Your Hormonal Patterns</h2>
      
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-6">Essential Tracking Elements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-3">Menstrual Cycle</h4>
            <ul className="space-y-2 text-pink-100 text-sm">
              <li>• Cycle start date</li>
              <li>• Flow intensity</li>
              <li>• Cycle length</li>
              <li>• PMS symptoms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Migraine Details</h4>
            <ul className="space-y-2 text-pink-100 text-sm">
              <li>• Timing relative to cycle</li>
              <li>• Severity and duration</li>
              <li>• Associated symptoms</li>
              <li>• Treatment response</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Additional Factors</h4>
            <ul className="space-y-2 text-pink-100 text-sm">
              <li>• Stress levels</li>
              <li>• Sleep quality</li>
              <li>• Exercise patterns</li>
              <li>• Medication timing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
