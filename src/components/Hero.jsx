import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-200 text-xs mb-3">
              <Star className="w-4 h-4" />
              منصّة ألعاب ويب مجانية
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              العب فوراً بدون تنزيل مثل Friv
            </h1>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto md:mx-0">
              مجموعة مختارة من ألعاب المتصفح السريعة والممتعة. ابدأ اللعب بضغطة زر وبدون أي تعقيد.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#games" className="px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium inline-flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                ابدأ اللعب الآن
              </a>
              <a href="#categories" className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium">
                تصفّح الفئات
              </a>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-3">
            {["🎯","🚗","🧩","🏹","🏎️","⚽","🧠","🪄","🕹️"].map((e,i)=> (
              <div key={i} className="aspect-square rounded-xl bg-slate-800/60 border border-slate-700/70 flex items-center justify-center text-3xl">
                <span className="select-none" aria-hidden>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
