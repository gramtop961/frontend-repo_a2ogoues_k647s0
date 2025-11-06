import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import GameGrid from './components/GameGrid';
import PlayerModal from './components/PlayerModal';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [currentGame, setCurrentGame] = useState(null);

  const handleClear = () => setSearch('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar search={search} setSearch={setSearch} onClear={handleClear} />
      <Hero />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      <GameGrid activeCategory={activeCategory} search={search} onPlay={setCurrentGame} />
      <footer className="max-w-6xl mx-auto px-4 py-10 text-slate-400 text-sm">
        صُمّم ليوفر لك تجربة ألعاب ويب سريعة وخفيفة مثل Friv — كل الألعاب تُفتح في تبويب أو داخل المشغّل.
      </footer>
      <PlayerModal game={currentGame} onClose={() => setCurrentGame(null)} />
    </div>
  );
}

export default App;
