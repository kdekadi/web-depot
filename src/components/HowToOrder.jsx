import React from 'react';
import { depotData } from '../data/depot';

export default function HowToOrder() {
  return (
    <section id="cara-pesan" className="py-12 md:py-16 bg-slate-50 border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Cara Pemesanan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            4 langkah praktis untuk memesan isi ulang air galon di Depot Air Adi Tirta.
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {depotData.orderSteps.map((stepItem) => (
            <div 
              key={stepItem.step}
              className="bg-white border border-slate-200 rounded-xl p-6 relative space-y-3 shadow-sm hover:border-sky-300 transition-colors"
            >
              <div className="w-9 h-9 bg-sky-600 text-white font-bold rounded-lg flex items-center justify-center text-base">
                {stepItem.step}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {stepItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {stepItem.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
