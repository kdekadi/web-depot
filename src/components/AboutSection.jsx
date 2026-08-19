import React from 'react';
import { depotData } from '../data/depot';
import { formatRupiah } from '../utils/whatsapp';
import { MapPin, Clock, Droplets } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="tentang" className="py-12 md:py-16 bg-white border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Image Column */}
          <div className="md:col-span-5">
            <div className="bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
              <img
                src={depotData.image}
                alt="Depot Air Adi Tirta di Batubulan"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-7 space-y-5">

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full inline-block">
                {depotData.type}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Tentang {depotData.name}
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                {depotData.name} merupakan depot air minum isi ulang yang melayani kebutuhan air minum masyarakat di sekitar Batubulan.
                Depot berlokasi di {depotData.address} dan buka setiap hari pukul {depotData.openingHour}–{depotData.closingHour} {depotData.timezone}.
              </p>
              <p>
                Layanan isi ulang tersedia dengan harga {formatRupiah(depotData.pricePerGallon)} per galon.
                Pelanggan dapat datang langsung ke depot atau melakukan pemesanan melalui WhatsApp.
              </p>
              <p>
                Air yang digunakan berasal dari sumber {depotData.waterSource.toLowerCase()} dan diproses menggunakan sistem {depotData.waterProcess} sebelum digunakan sebagai air isi ulang.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="w-9 h-9 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Lokasi</p>
                  <p className="text-xs font-semibold text-slate-900">Batubulan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="w-9 h-9 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Jam Buka</p>
                  <p className="text-xs font-semibold text-slate-900">{depotData.openingHour}–{depotData.closingHour}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="w-9 h-9 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Proses</p>
                  <p className="text-xs font-semibold text-slate-900">RO</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
