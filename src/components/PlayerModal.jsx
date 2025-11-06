import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const PlayerModal = ({ game, onClose }) => {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <div className="text-white font-semibold">{game.title}</div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 text-slate-200">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="aspect-video bg-black">
          <iframe
            src={game.url}
            title={game.title}
            className="w-full h-full"
            allow="autoplay; fullscreen; gamepad; accelerometer"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
