import React from 'react';
import { depotData } from '../data/depot';
import { formatRupiah } from '../utils/whatsapp';
import { Check, PhoneCall, Info } from 'lucide-react';

export default function PriceSection() {
  const scrollToOrder = (e) => {
    e.preventDefault();
    const element = document.querySelector('#pesan');
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Harga Air Isi Ulang
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Harga transparan tanpa biaya tersembunyi untuk kebutuhan harian Anda.
          </p>
        </div>

        {/* Price Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto shadow-sm space-y-6 text-center">
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full inline-block">
              Isi Ulang Galon Standard
            </span>
            <div className="pt-3">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                {formatRupiah(depotData.pricePerGallon)}
              </span>
              <span className="text-slate-600 font-medium text-base"> / galon</span>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-5 space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Berlaku untuk semua jenis galon standar</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Pengambilan langsung di depot (Jl. Bebengan No. 5)</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>Pemesanan cepat & responsif via WhatsApp</span>
            </div>
          </div>

          {/* Delivery Note Placeholder */}
          {depotData.deliveryNotes && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 flex items-start gap-2.5 text-left">
              <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>{depotData.deliveryNotes}</span>
            </div>
          )}

          <div className="pt-2">
            <a
              href="#pesan"
              onClick={scrollToOrder}
              className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-base w-full py-3.5 rounded-xl transition-colors shadow-sm"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Pesan Sekarang (Rp5.000 / Galon)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
