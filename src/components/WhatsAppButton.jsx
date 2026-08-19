import React from 'react';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const waUrl = buildWhatsAppLink({
    name: 'Pelanggan Depot',
    qty: 1,
    method: 'Datang ke Depot (Jl. Bebengan No. 5)',
    address: 'Batubulan',
    notes: 'Pesan galon air',
    totalCost: 5000
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pesan via WhatsApp Depot Air Adi Tirta"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm px-4 py-3 rounded-full shadow-lg transition-all"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Tanya via WA</span>
        <span className="sm:hidden font-bold">WA?</span>
      </a>
    </div>
  );
}
