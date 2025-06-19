
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ToolsHeader from '../components/tools/ToolsHeader';
import ChecklistSection from '../components/tools/ChecklistSection';
import TriggerSection from '../components/tools/TriggerSection';
import AdditionalResources from '../components/tools/AdditionalResources';

const Tools = () => {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  const [activeTab, setActiveTab] = useState('checklist');

  const toggleItem = (category: string, itemIndex: number) => {
    const key = `${category}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleTableItem = (day: string, categoryIndex: number) => {
    const key = `table-${day}-${categoryIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 to-teal-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <ToolsHeader 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            checkedItems={checkedItems}
          />

          {activeTab === 'checklist' && (
            <ChecklistSection 
              checkedItems={checkedItems}
              onToggleItem={toggleItem}
            />
          )}

          {activeTab === 'triggers' && (
            <TriggerSection 
              checkedItems={checkedItems}
              onToggleItem={toggleItem}
              onToggleTableItem={toggleTableItem}
            />
          )}

          <AdditionalResources />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;
