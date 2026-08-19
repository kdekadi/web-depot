import React, { useState } from 'react';
import { depotData } from '../data/depot';
import { formatRupiah, buildWhatsAppLink } from '../utils/whatsapp';
import { ShoppingBag, Plus, Minus, Send, CheckCircle, MapPin, Truck } from 'lucide-react';

export default function OrderForm() {
  const [name, setName] = useState('');
  const [qty, setQty] = useState(1);
  const [method, setMethod] = useState('Ambil di Depot');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const isAntar = method === 'Antar';
  const hargaAir = qty * depotData.pricePerGallon;
  const biayaAntar = isAntar ? depotData.deliveryFee : 0;
  const totalCost = hargaAir + biayaAntar;

  const handleQtyChange = (delta) => {
    setQty((prev) => Math.max(1, prev + delta));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAntar && !address.trim()) {
      return;
    }
    
    const waUrl = buildWhatsAppLink({
      name: name || '-',
      qty,
      method,
      address: address || '-',
      notes: notes || '-',
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pesan" className="py-12 md:py-16 bg-white border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full inline-block">
            Form Pemesanan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Pesan Air Isi Ulang
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Isi formulir di bawah ini. Pesanan Anda akan langsung diteruskan ke WhatsApp depot.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Nama */}
            <div className="space-y-1.5">
              <label htmlFor="order-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Nama <span className="text-rose-500">*</span>
              </label>
              <input
                id="order-name"
                type="text"
                required
                placeholder="Contoh: Kadek"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-sky-600 transition-colors"
              />
            </div>

            {/* Jumlah Galon Counter */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Jumlah Galon <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center gap-4 bg-white border border-slate-300 rounded-lg p-2 max-w-xs">
                <button
                  type="button"
                  onClick={() => handleQtyChange(-1)}
                  disabled={qty <= 1}
                  aria-label="Kurangi jumlah galon"
                  className="w-9 h-9 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold rounded-md flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                
                <div className="flex-1 text-center">
                  <span className="text-xl font-bold text-slate-900">{qty}</span>
                  <span className="text-xs text-slate-500 ml-1">galon</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleQtyChange(1)}
                  aria-label="Tambah jumlah galon"
                  className="w-9 h-9 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-md flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Metode Pengambilan */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Metode Pengambilan <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${method === 'Ambil di Depot' ? 'bg-sky-50 border-sky-600' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                  <input
                    type="radio"
                    name="method"
                    value="Ambil di Depot"
                    checked={method === 'Ambil di Depot'}
                    onChange={(e) => setMethod(e.target.value)}
                    className="mt-0.5 text-sky-600 focus:ring-sky-500"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-600" />
                      Ambil di Depot
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">Tanpa biaya antar</p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${method === 'Antar' ? 'bg-sky-50 border-sky-600' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                  <input
                    type="radio"
                    name="method"
                    value="Antar"
                    checked={method === 'Antar'}
                    onChange={(e) => setMethod(e.target.value)}
                    className="mt-0.5 text-sky-600 focus:ring-sky-500"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-sky-600" />
                      Antar
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">Biaya antar {formatRupiah(depotData.deliveryFee)} / pesanan</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Info berdasarkan metode */}
            {!isAntar && (
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  Ambil langsung di Depot
                </p>
                <p className="text-xs text-slate-600 mt-1">{depotData.address}</p>
              </div>
            )}

            {/* Alamat Pengantaran (hanya jika Antar) */}
            {isAntar && (
              <div className="space-y-1.5">
                <label htmlFor="order-address" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Alamat Pengantaran <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="order-address"
                  rows={2}
                  required
                  placeholder="Contoh: Jl. Bebengan No. 10, dekat pura"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-sky-600 transition-colors"
                />
              </div>
            )}

            {/* Catatan Tambahan */}
            <div className="space-y-1.5">
              <label htmlFor="order-notes" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Catatan (Opsional)
              </label>
              <input
                id="order-notes"
                type="text"
                placeholder={isAntar ? "Contoh: Rumah pagar hitam" : "Contoh: Pesan galon air"}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-sky-600 transition-colors"
              />
            </div>

            {/* Rincian Biaya */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Rincian Biaya</p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center text-slate-700">
                  <span>Harga air ({qty} galon × {formatRupiah(depotData.pricePerGallon)})</span>
                  <span className="font-semibold">{formatRupiah(hargaAir)}</span>
                </div>

                {isAntar && (
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Biaya antar</span>
                    <span className="font-semibold">{formatRupiah(biayaAntar)}</span>
                  </div>
                )}

                <div className="border-t border-slate-100 pt-2 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {formatRupiah(totalCost)}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2.5 transition-colors shadow-sm"
            >
              <Send className="w-5 h-5" />
              <span>Kirim Pesanan via WhatsApp</span>
            </button>

            <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Data Anda tidak disimpan di server (langsung diteruskan ke WhatsApp depot).
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
