
import { CheckSquare, Square } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { generateDays, triggerCategoryNames } from './utils/checklistData';

interface TriggerTrackingTableProps {
  checkedItems: {[key: string]: boolean};
  onToggleTableItem: (day: string, categoryIndex: number) => void;
}

const TriggerTrackingTable = ({ checkedItems, onToggleTableItem }: TriggerTrackingTableProps) => {
  const isTableItemChecked = (day: string, categoryIndex: number) => {
    const key = `table-${day}-${categoryIndex}`;
    return checkedItems[key] || false;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-lavender-200 overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-lavender-500 px-8 py-6">
        <h2 className="text-2xl font-bold text-white text-center">14 Days Migraine Trigger Tracking</h2>
      </div>
      <div className="p-8 overflow-x-auto">
        <Table className="w-full" data-print-table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-gray-900">Day</TableHead>
              <TableHead className="font-bold text-gray-900 text-center">Environmental Triggers</TableHead>
              <TableHead className="font-bold text-gray-900 text-center">Food & Drink Triggers</TableHead>
              <TableHead className="font-bold text-gray-900 text-center">Hormonal & Physical Triggers</TableHead>
              <TableHead className="font-bold text-gray-900 text-center">Lifestyle & Emotional Triggers</TableHead>
              <TableHead className="font-bold text-gray-900 text-center">Medication & Supplement Triggers</TableHead>
              <TableHead className="font-bold text-gray-900 text-center">Severity (1-10)</TableHead>
              <TableHead className="font-bold text-gray-900 text-center">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {generateDays().map((day) => (
              <TableRow key={day} className="hover:bg-gray-50">
                <TableCell className="font-medium whitespace-nowrap">{day}</TableCell>
                {triggerCategoryNames.map((_, categoryIndex) => (
                  <TableCell key={categoryIndex} className="text-center">
                    <div 
                      className="cursor-pointer inline-block p-2"
                      onClick={() => onToggleTableItem(day, categoryIndex)}
                    >
                      {isTableItemChecked(day, categoryIndex) ? (
                        <CheckSquare className="text-teal-600" size={20} />
                      ) : (
                        <Square className="text-gray-400" size={20} />
                      )}
                    </div>
                  </TableCell>
                ))}
                <TableCell className="text-center">
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    className="w-16 p-1 border border-gray-300 rounded text-center"
                    placeholder="1-10"
                  />
                </TableCell>
                <TableCell className="text-center">
                  <input 
                    type="text" 
                    className="w-24 p-1 border border-gray-300 rounded"
                    placeholder="Notes"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TriggerTrackingTable;
