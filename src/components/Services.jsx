import React from 'react';
import { depotData } from '../data/depot';
import { Droplet, Smartphone, Store } from 'lucide-react';

const iconMap = {
  Droplet: Droplet,
  Smartphone: Smartphone,
  Store: Store,
};

export default function Services() {
  return (
    <section id="layanan" className="py-12 md:py-16 bg-white border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Layanan Depot Air Adi Tirta
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Pilihan layanan praktis untuk mempermudah pemenuhan air minum Anda.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depotData.services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Droplet;
            return (
              <div 
                key={service.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 hover:border-sky-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <span className="inline-block text-xs font-semibold text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full mt-1">
                      {service.priceText}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
