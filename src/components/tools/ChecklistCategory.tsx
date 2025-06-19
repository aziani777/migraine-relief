
import ChecklistItem from './ChecklistItem';

interface ChecklistCategoryProps {
  category: {
    category?: string;
    title?: string;
    items: string[];
  };
  checkedItems: {[key: string]: boolean};
  onToggleItem: (category: string, itemIndex: number) => void;
}

const ChecklistCategory = ({ 
  category, 
  checkedItems, 
  onToggleItem
}: ChecklistCategoryProps) => {
  const categoryKey = category.category || category.title || '';

  const isChecked = (itemIndex: number) => {
    const key = `${categoryKey}-${itemIndex}`;
    return checkedItems[key] || false;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-lavender-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-teal-500 to-lavender-500 px-8 py-6">
        <h2 className="text-2xl font-bold text-white">{categoryKey}</h2>
      </div>
      <div className="p-8">
        <div className="space-y-5">
          {category.items.map((item, itemIndex) => (
            <ChecklistItem
              key={itemIndex}
              item={item}
              isChecked={isChecked(itemIndex)}
              onToggle={() => onToggleItem(categoryKey, itemIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChecklistCategory;
