import React from 'react';
import { depotData } from '../data/depot';
import { isDepotOpen } from '../utils/whatsapp';
import { MapPin, Clock, ExternalLink, Calendar, Compass } from 'lucide-react';

export default function Location() {
  const isOpen = isDepotOpen();

  return (
    <section id="lokasi" className="py-12 md:py-16 bg-slate-50 border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Lokasi & Jam Operasional
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Kunjungi depot kami di Batubulan atau buka petunjuk arah melalui Google Maps.
          </p>
        </div>

        {/* Info & Map Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Location Info */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6 flex flex-col justify-between">
            
            <div className="space-y-5">
              
              {/* Dynamic Status */}
              <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                <span className={isOpen ? 'text-emerald-700 font-bold' : 'text-slate-700'}>
                  {isOpen ? 'Buka Sekarang' : 'Tutup Saat Ini'}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">{depotData.timezone}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {depotData.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  {depotData.village}, {depotData.subdistrict}, {depotData.regency}
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 border-t border-slate-100 pt-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Alamat Lengkap</p>
                    <p className="text-sm font-semibold text-slate-900 leading-snug">
                      {depotData.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Jam Operasional</p>
                    <p className="text-sm font-semibold text-slate-900">
                      {depotData.openingHour} – {depotData.closingHour} {depotData.timezone}
                    </p>
                    <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5" /> Buka setiap hari (Senin – Minggu)
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Google Maps Link CTA */}
            <div className="pt-4 border-t border-slate-100">
              <a
                href={depotData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm w-full py-3.5 rounded-xl transition-colors shadow-sm"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Light Frame */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col min-h-[320px]">
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Peta Lokasi Depot Air Adi Tirta</span>
              </div>
              <span className="text-xs text-slate-500">Batubulan, Bali</span>
            </div>

            {depotData.googleMapsEmbedUrl ? (
              <iframe
                title="Peta Lokasi Depot Air Adi Tirta"
                src={depotData.googleMapsEmbedUrl}
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div className="flex-1 bg-slate-100 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm text-sky-600">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="space-y-1 max-w-sm">
                  <h4 className="text-base font-bold text-slate-900">
                    Depot Air Adi Tirta
                  </h4>
                  <p className="text-xs text-slate-600">
                    {depotData.address}
                  </p>
                </div>
                <a
                  href={depotData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span>Petunjuk Arah Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
