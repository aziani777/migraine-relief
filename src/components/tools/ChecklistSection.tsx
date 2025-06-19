
import ChecklistCategory from './ChecklistCategory';
import { checklistItems } from './utils/checklistData';

interface ChecklistSectionProps {
  checkedItems: {[key: string]: boolean};
  onToggleItem: (category: string, itemIndex: number) => void;
}

const ChecklistSection = ({ checkedItems, onToggleItem }: ChecklistSectionProps) => {
  return (
    <div className="space-y-8">
      {checklistItems.map((category, categoryIndex) => (
        <ChecklistCategory
          key={categoryIndex}
          category={category}
          checkedItems={checkedItems}
          onToggleItem={onToggleItem}
        />
      ))}
    </div>
  );
};

export default ChecklistSection;
