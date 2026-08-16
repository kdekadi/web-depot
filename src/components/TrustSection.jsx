import React from 'react';
import { depotData } from '../data/depot';
import { Tag, Zap, MessageSquare, MapPin } from 'lucide-react';

const iconMap = {
  Tag: Tag,
  Zap: Zap,
  MessageSquare: MessageSquare,
  MapPin: MapPin,
};

export default function TrustSection() {
  return (
    <section id="tentang" className="py-12 md:py-16 bg-white border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Mengapa Memilih Depot Air Adi Tirta?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Kami menghadirkan layanan isi ulang air minum galon yang praktis, jujur, dan mudah dijangkau oleh warga Batubulan dan sekitarnya.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {depotData.trustPoints.map((point) => {
            const IconComponent = iconMap[point.iconName] || Tag;
            return (
              <div 
                key={point.id} 
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 hover:border-sky-300 transition-colors"
              >
                <div className="w-10 h-10 bg-sky-600 text-white rounded-lg flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
