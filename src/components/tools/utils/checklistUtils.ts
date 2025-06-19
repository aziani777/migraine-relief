
export const getCategoryCompletionPercentage = (
  category: { items: string[]; category?: string; title?: string },
  checkedItems: {[key: string]: boolean}
) => {
  const categoryItems = category.items;
  const categoryKey = category.category || category.title || '';
  const checkedCount = categoryItems.filter((_, index) => {
    const key = `${categoryKey}-${index}`;
    return checkedItems[key] || false;
  }).length;
  return Math.round((checkedCount / categoryItems.length) * 100);
};

export const printTriggerChecklist = () => {
  const printWindow = window.open('', '_blank');
  const tableContent = document.querySelector('[data-print-table]')?.outerHTML || '';
  
  if (printWindow) {
    printWindow.document.write(`
      <html>
        <head>
          <title>14 Days Migraine Trigger Tracking</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #000; padding: 8px; text-align: center; }
            th { background-color: #f0f0f0; font-weight: bold; }
            h1 { text-align: center; color: #333; }
          </style>
        </head>
        <body>
          <h1>14 Days Migraine Trigger Tracking</h1>
          ${tableContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
};

export const downloadTriggerTable = (
  checkedItems: {[key: string]: boolean},
  generateDays: () => string[],
  triggerCategoryNames: string[]
) => {
  const isTableItemChecked = (day: string, categoryIndex: number) => {
    const key = `table-${day}-${categoryIndex}`;
    return checkedItems[key] || false;
  };

  const tableData = generateDays().map(day => {
    const dayData = {
      Day: day,
      'Environmental Triggers': isTableItemChecked(day, 0) ? '✓' : '',
      'Food & Drink Triggers': isTableItemChecked(day, 1) ? '✓' : '',
      'Hormonal & Physical Triggers': isTableItemChecked(day, 2) ? '✓' : '',
      'Lifestyle & Emotional Triggers': isTableItemChecked(day, 3) ? '✓' : '',
      'Medication & Supplement Triggers': isTableItemChecked(day, 4) ? '✓' : '',
      'Severity (1-10)': '',
      'Notes': ''
    };
    return dayData;
  });

  const csvContent = [
    Object.keys(tableData[0]).join(','),
    ...tableData.map(row => Object.values(row).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = '14-days-migraine-trigger-tracking.csv';
  link.click();
  window.URL.revokeObjectURL(url);
};
