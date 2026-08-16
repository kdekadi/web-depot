import { depotData } from '../data/depot';

/**
 * Format angka ke mata uang Rupiah
 * @param {number} amount 
 * @returns {string}
 */
export function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Membuat link WhatsApp dengan template pesan order
 * @param {Object} orderData
 * @returns {string}
 */
export function buildWhatsAppLink({ name, qty, method, address, notes, totalCost }) {
  const cleanPhone = depotData.whatsappNumber.replace(/\D/g, '');

  const message = `Halo Depot Air Adi Tirta, saya ingin memesan air isi ulang.

Nama: ${name.trim() || '-'}
Jumlah: ${qty} galon
Metode: ${method}
Alamat: ${address.trim() || '-'}
Catatan: ${notes.trim() || '-'}
Total: ${formatRupiah(totalCost)}

Mohon dikonfirmasi. Terima kasih.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Mengecek apakah depot sedang buka berdasarkan zona waktu WITA (UTC+8)
 * Jam operasional: 07.00 - 18.00 WITA
 * @returns {boolean}
 */
export function isDepotOpen() {
  const now = new Date();
  // Waktu UTC saat ini
  const utcTimestamp = now.getTime() + (now.getTimezoneOffset() * 60000);
  // WITA = UTC + 8 jam (8 * 3600000 ms)
  const witaDate = new Date(utcTimestamp + (8 * 3600000));
  
  const currentMinutes = (witaDate.getHours() * 60) + witaDate.getMinutes();
  const openMinutes = 7 * 60;   // 07:00 WITA
  const closeMinutes = 18 * 60; // 18:00 WITA

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}
