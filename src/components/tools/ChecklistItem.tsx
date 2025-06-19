
import { CheckSquare, Square } from 'lucide-react';

interface ChecklistItemProps {
  item: string;
  isChecked: boolean;
  onToggle: () => void;
}

const ChecklistItem = ({ item, isChecked, onToggle }: ChecklistItemProps) => {
  return (
    <div 
      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
      onClick={onToggle}
    >
      <div className="mt-1">
        {isChecked ? (
          <CheckSquare className="text-teal-600 group-hover:text-teal-700" size={22} />
        ) : (
          <Square className="text-gray-400 group-hover:text-gray-500" size={22} />
        )}
      </div>
      <span 
        className={`text-gray-700 leading-relaxed text-base ${
          isChecked 
            ? 'line-through text-gray-500' 
            : 'group-hover:text-gray-900'
        }`}
      >
        {item}
      </span>
    </div>
  );
};

export default ChecklistItem;
