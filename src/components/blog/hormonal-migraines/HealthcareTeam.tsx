
const HealthcareTeam = () => {
  return (
    <section className="mb-12">
      <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
        <h3 className="text-2xl font-bold text-yellow-800 mb-4">Building Your Healthcare Team</h3>
        <div className="space-y-4 text-yellow-800">
          <p>
            Managing hormonal migraines often requires a team approach. Consider working with:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Primary Team:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Neurologist or headache specialist</li>
                <li>• Gynecologist familiar with migraines</li>
                <li>• Primary care physician</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Supporting Specialists:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Reproductive endocrinologist</li>
                <li>• Mental health counselor</li>
                <li>• Integrative medicine practitioner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareTeam;
