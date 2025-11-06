import React, { useMemo } from 'react';
import { ExternalLink, Trophy } from 'lucide-react';

const GAMES = [
  {
    id: 'slope',
    title: 'Slope',
    category: 'arcade',
    description: 'تزلّج على منحدر لا نهائي وتجنب العقبات.',
    cover: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop',
    url: 'https://www.crazygames.com/game/slope',
  },
  {
    id: '2048',
    title: '2048',
    category: 'puzzle',
    description: 'ادمج المربعات حتى تصل إلى 2048.',
    cover: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200&auto=format&fit=crop',
    url: 'https://play2048.co/',
  },
  {
    id: 'subway',
    title: 'Subway Surfers',
    category: 'arcade',
    description: 'اهرب بسرعة وتجنب القطارات.',
    cover: 'https://images.unsplash.com/photo-1546447149-8fa99e97b42d?q=80&w=1200&auto=format&fit=crop',
    url: 'https://poki.com/en/g/subway-surfers',
  },
  {
    id: 'soccer',
    title: 'Soccer Skills',
    category: 'sports',
    description: 'مهارات كرة القدم في مباريات سريعة.',
    cover: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
    url: 'https://poki.com/en/g/soccer-skills-world-cup',
  },
  {
    id: 'moto',
    title: 'Moto X3M',
    category: 'racing',
    description: 'تحديات دراجات نارية ممتعة وسريعة.',
    cover: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    url: 'https://poki.com/en/g/moto-x3m',
  },
  {
    id: 'cuttherope',
    title: 'Cut the Rope',
    category: 'puzzle',
    description: 'اقطع الحبل لإطعام أوم نوم.',
    cover: 'https://images.unsplash.com/photo-1615528616018-7dcdfed31f13?q=80&w=1200&auto=format&fit=crop',
    url: 'https://poki.com/en/g/cut-the-rope',
  },
  {
    id: 'stickman',
    title: 'Stickman Hook',
    category: 'arcade',
    description: 'تأرجح وتخطَّى العقبات لتحقيق أفضل نتيجة.',
    cover: 'https://images.unsplash.com/photo-1591181520189-abcb0735c65d?q=80&w=1200&auto=format&fit=crop',
    url: 'https://poki.com/en/g/stickman-hook',
  },
  {
    id: 'drift',
    title: 'Drift Hunters',
    category: 'racing',
    description: 'انطلق بسيارتك وابدأ الاستعراض.',
    cover: 'https://images.unsplash.com/photo-1493236296276-d17357e2880e?q=80&w=1200&auto=format&fit=crop',
    url: 'https://www.crazygames.com/game/drift-hunters',
  },
];

const GameCard = ({ game, onPlay }) => {
  return (
    <div className="group rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-violet-600/60 transition-colors">
      <div className="relative aspect-video">
        <img src={game.cover} alt={game.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <div className="text-white font-semibold drop-shadow">{game.title}</div>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-slate-200">
            {game.category}
          </span>
        </div>
      </div>
      <div className="p-3">
        <p className="text-slate-300 text-sm line-clamp-2 mb-3">{game.description}</p>
        <div className="flex items-center gap-2">
          <button onClick={() => onPlay(game)} className="flex-1 px-3 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium">
            العب الآن
          </button>
          <a href={game.url} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const GameGrid = ({ activeCategory, search, onPlay }) => {
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return GAMES.filter(g =>
      (activeCategory === 'all' || g.category === activeCategory) &&
      (g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q))
    );
  }, [activeCategory, search]);

  return (
    <section id="games" className="max-w-6xl mx-auto px-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-white font-bold text-lg">ألعاب مختارة</h2>
        <div className="text-xs text-slate-400 inline-flex items-center gap-1">
          <Trophy className="w-4 h-4" /> ألعاب سريعة بدون تنزيل
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((game) => (
          <GameCard key={game.id} game={game} onPlay={onPlay} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-slate-400 py-10">لا توجد ألعاب مطابقة لبحثك</div>
        )}
      </div>
    </section>
  );
};

export default GameGrid;
