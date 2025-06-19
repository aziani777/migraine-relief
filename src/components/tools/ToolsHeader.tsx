
import { Share2, Printer, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { printTriggerChecklist, downloadTriggerTable } from './utils/checklistUtils';
import { generateDays, triggerCategoryNames } from './utils/checklistData';

interface ToolsHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  checkedItems: {[key: string]: boolean};
}

const ToolsHeader = ({ activeTab, setActiveTab, checkedItems }: ToolsHeaderProps) => {
  const handleDownloadTriggerTable = () => {
    downloadTriggerTable(checkedItems, generateDays, triggerCategoryNames);
  };

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        Migraine Management Tools
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Comprehensive tools to help you manage migraines effectively
      </p>
      
      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-12">
        <Button 
          variant={activeTab === 'checklist' ? 'default' : 'outline'}
          onClick={() => setActiveTab('checklist')}
          className="px-6 py-3"
        >
          Management Checklist
        </Button>
        <Button 
          variant={activeTab === 'triggers' ? 'default' : 'outline'}
          onClick={() => setActiveTab('triggers')}
          className="px-6 py-3"
        >
          Trigger Checklist
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 px-6 py-3"
        >
          <Share2 size={16} />
          Share Checklist
        </Button>
        {activeTab === 'triggers' && (
          <>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 px-6 py-3"
              onClick={printTriggerChecklist}
            >
              <Printer size={16} />
              Print Checklist
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 px-6 py-3"
              onClick={handleDownloadTriggerTable}
            >
              <Download size={16} />
              Download Table
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToolsHeader;
