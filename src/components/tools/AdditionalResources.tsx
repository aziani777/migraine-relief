
const AdditionalResources = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-lavender-100 to-teal-100 rounded-2xl p-10 border border-lavender-200 shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/60 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">📊 Migraine Diary Template</h4>
          <p className="text-gray-600">Track your migraines to identify patterns and triggers over time</p>
        </div>
        <div className="bg-white/60 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">🆘 Emergency Contact Card</h4>
          <p className="text-gray-600">Printable card with important medical information for emergencies</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalResources;
