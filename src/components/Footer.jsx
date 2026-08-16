import React from 'react';
import { depotData } from '../data/depot';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { Droplets, MapPin, Clock, ExternalLink, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const directWaUrl = buildWhatsAppLink({
    name: 'Pelanggan Depot',
    qty: 1,
    method: 'Datang ke Depot (Jl. Bebengan No. 5)',
    address: 'Batubulan',
    notes: 'Tanya info / pesan',
    totalCost: 5000
  });

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white">
                <Droplets className="w-5 h-5" />
              </div>
              <span>{depotData.name}</span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Depot air minum isi ulang di Batubulan. Menyediakan air minum isi ulang berkualitas dengan harga terjangkau Rp5.000 per galon.
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Harga Rp5.000 / Galon • Batubulan, Bali</span>
            </div>
          </div>

          {/* Business Details */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">
              Informasi Depot
            </h3>
            
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>{depotData.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-500 shrink-0" />
                <span>{depotData.openingHour} – {depotData.closingHour} {depotData.timezone} (Setiap Hari)</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">
              Tautan Cepat
            </h3>
            
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Depot ({depotData.whatsappDisplay})</span>
                </a>
              </li>
              <li>
                <a 
                  href={depotData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Google Maps Location</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {depotData.name}. All rights reserved.</p>
          <p>Jl. Bebengan No. 5, Br. Tubuh, Batubulan, Bali</p>
        </div>

      </div>
    </footer>
  );
}
