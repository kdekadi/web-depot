import React from 'react';
import { depotData } from '../data/depot';
import { isDepotOpen } from '../utils/whatsapp';
import { MapPin, Clock, Tag, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const isOpen = isDepotOpen();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
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
    <section id="beranda" className="bg-slate-50 border-b border-slate-200 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
            <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            <span>{isOpen ? 'Sedang Buka Hari Ini' : 'Buka 07.00 - 18.00 WITA'}</span>
            <span className="text-slate-300">•</span>
            <span className="text-sky-700 font-bold">Batubulan</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {depotData.name}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-medium">
              {depotData.tagline}
            </p>
          </div>

          {/* Key Quick Specs Badge Box */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Harga Galon</p>
                <p className="text-base font-bold text-slate-900">Rp5.000 / galon</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Jam Buka</p>
                <p className="text-base font-bold text-slate-900">07.00 – 18.00 WITA</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-50 text-sky-700 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Lokasi</p>
                <p className="text-sm font-bold text-slate-900 truncate">Jl. Bebengan No. 5</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#pesan"
              onClick={(e) => scrollToSection(e, '#pesan')}
              className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-base px-6 py-3.5 rounded-xl transition-colors shadow-sm text-center"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Pesan Sekarang</span>
            </a>

            <a
              href="#lokasi"
              onClick={(e) => scrollToSection(e, '#lokasi')}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-300 transition-colors text-center"
            >
              <MapPin className="w-5 h-5 text-sky-600" />
              <span>Lihat Lokasi</span>
            </a>
          </div>

          {/* Micro trust checklist */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-600" /> Pesan via WhatsApp
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-600" /> Pengambilan Langsung
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-600" /> Buka Setiap Hari
            </span>
          </div>

        </div>

        {/* Right Column: Practical Graphic / Card */}
        <div className="md:col-span-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
            
            <div className="w-full bg-sky-50 border border-sky-100 rounded-xl p-6 text-center space-y-4">
              <div className="w-20 h-20 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
                  Depot Air Minum Isi Ulang
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-2">
                  Rp5.000 <span className="text-sm font-normal text-slate-600">/ galon</span>
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Praktis & Mudah</p>
                  <p className="text-xs text-slate-600">Cukup pesan melalui formulir online untuk meneruskan ke WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Alamat Jelas</p>
                  <p className="text-xs text-slate-600">{depotData.address}</p>
                </div>
              </div>
            </div>

            <a
              href="#cara-pesan"
              onClick={(e) => scrollToSection(e, '#cara-pesan')}
              className="flex items-center justify-between w-full text-xs font-semibold text-sky-700 hover:text-sky-800 pt-1"
            >
              <span>Pelajari cara pemesanan air galon</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
