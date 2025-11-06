import React from 'react';

const categories = [
  { key: 'all', label: 'الكل' },
  { key: 'arcade', label: 'أركيد' },
  { key: 'racing', label: 'سباقات' },
  { key: 'puzzle', label: 'ألغاز' },
  { key: 'sports', label: 'رياضة' },
  { key: 'action', label: 'أكشن' },
];

const CategoryTabs = ({ active, onChange }) => {
  return (
    <div id="categories" className="max-w-6xl mx-auto px-4 mt-4">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-colors ${
              active === cat.key
                ? 'bg-violet-600 text-white border-violet-500'
                : 'bg-slate-800/60 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
