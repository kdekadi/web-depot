import React from 'react';
import { depotData } from '../data/depot';
import { Droplets, ArrowDown, Filter } from 'lucide-react';

export default function WaterProcessSection() {
  return (
    <section id="proses-air" className="py-12 md:py-16 bg-slate-50 border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Sumber &amp; Proses Pengolahan Air
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {depotData.name} menggunakan sumber air dari {depotData.waterSource.toLowerCase()} yang diproses menggunakan sistem {depotData.waterProcess} sebelum digunakan sebagai air isi ulang.
          </p>
        </div>

        {/* Process Flow Visual */}
        <div className="flex flex-col items-center gap-0">

          {/* Step 1: Sumber Air */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 w-full max-w-sm text-center space-y-2">
            <div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-xl flex items-center justify-center mx-auto">
              <Droplets className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Sumber Air</p>
            <p className="text-lg font-bold text-slate-900">{depotData.waterSource}</p>
          </div>

          {/* Arrow Down */}
          <div className="py-3 text-slate-300">
            <ArrowDown className="w-6 h-6" />
          </div>

          {/* Step 2: Proses Pengolahan */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 w-full max-w-sm text-center space-y-2">
            <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center mx-auto">
              <Filter className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Proses Pengolahan</p>
            <p className="text-lg font-bold text-slate-900">{depotData.waterProcess}</p>
          </div>

          {/* Arrow Down */}
          <div className="py-3 text-slate-300">
            <ArrowDown className="w-6 h-6" />
          </div>

          {/* Step 3: Air Isi Ulang */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 w-full max-w-sm text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Hasil</p>
            <p className="text-lg font-bold text-slate-900">Air Isi Ulang</p>
          </div>

        </div>

        {/* RO Description */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-2xl mx-auto">
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-900">Reverse Osmosis (RO)</span> merupakan proses penyaringan menggunakan membran untuk membantu mengurangi berbagai zat terlarut dan kontaminan dari air.
          </p>
        </div>

      </div>
    </section>
  );
}
