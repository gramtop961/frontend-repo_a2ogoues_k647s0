import React from 'react';
import { Gamepad2, Search } from 'lucide-react';

const Navbar = ({ search, setSearch, onClear }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg">PlayHub</span>
        </div>

        <div className="flex-1" />

        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن لعبة..."
            className="w-full pl-10 pr-10 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          {search && (
            <button
              onClick={onClear}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-sm"
            >
              مسح
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
