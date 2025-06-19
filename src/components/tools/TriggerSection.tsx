
import ChecklistCategory from './ChecklistCategory';
import TriggerTrackingTable from './TriggerTrackingTable';
import { triggerCategories } from './utils/checklistData';

interface TriggerSectionProps {
  checkedItems: {[key: string]: boolean};
  onToggleItem: (category: string, itemIndex: number) => void;
  onToggleTableItem: (day: string, categoryIndex: number) => void;
}

const TriggerSection = ({ checkedItems, onToggleItem, onToggleTableItem }: TriggerSectionProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl border border-lavender-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          The Ultimate Migraine Trigger Checklist
        </h2>
        <h3 className="text-xl text-teal-600 mb-6 text-center">
          Discover Your Personal Triggers
        </h3>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Welcome to your journey toward understanding and managing your migraines! Use this checklist daily to identify and track potential triggers. Remember, small changes can lead to big improvements. Happy tracking!
        </p>
      </div>

      {triggerCategories.map((category, categoryIndex) => (
        <ChecklistCategory
          key={categoryIndex}
          category={category}
          checkedItems={checkedItems}
          onToggleItem={onToggleItem}
        />
      ))}

      <TriggerTrackingTable 
        checkedItems={checkedItems}
        onToggleTableItem={onToggleTableItem}
      />

      {/* Instructions */}
      <div className="bg-gradient-to-r from-lavender-100 to-teal-100 rounded-2xl p-10 border border-lavender-200 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">✅ How to Use This Checklist</h3>
        <div className="space-y-4 text-gray-700">
          <p><strong>Track Daily:</strong> Use this checklist every day to monitor potential triggers.</p>
          <p><strong>Write It Down:</strong> Keep a migraine journal for at least 2 weeks. Note the time of your migraine, its severity, and any potential triggers you encountered.</p>
          <p><strong>Look for Patterns:</strong> Identify recurring triggers and share your findings with your doctor to develop a prevention plan.</p>
        </div>
        <div className="mt-6 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
          <p className="text-gray-800 font-semibold text-center">
            🎉 Congratulations! You're on the path to better understanding and managing your migraines. Stay consistent, stay aware, and celebrate each step forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TriggerSection;
