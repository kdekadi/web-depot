import React, { useState } from 'react';
import { depotData } from '../data/depot';
import { isDepotOpen } from '../utils/whatsapp';
import { Menu, X, Droplets, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOpen = isDepotOpen();

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Cara Pesan', href: '#cara-pesan' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
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
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      {/* Top Banner Status Info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            <span>
              {isOpen ? 'Buka Sekarang (07.00 - 18.00 WITA)' : 'Tutup Saat Ini (Buka 07.00 WITA)'}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>Jl. Bebengan No. 5, Batubulan</span>
            <span>•</span>
            <span className="font-semibold text-white">Rp5.000 / Galon</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#beranda" 
          onClick={(e) => handleNavClick(e, '#beranda')}
          className="flex items-center gap-2 text-slate-900 font-bold text-xl tracking-tight"
        >
          <div className="w-9 h-9 bg-sky-600 rounded-lg flex items-center justify-center text-white">
            <Droplets className="w-5 h-5" />
          </div>
          <span>Depot <span className="text-sky-600">{depotData.shortName}</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 hover:text-sky-600 font-medium text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pesan"
            onClick={(e) => handleNavClick(e, '#pesan')}
            className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Pesan Sekarang</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup menu navigation" : "Buka menu navigation"}
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 hover:bg-sky-50 hover:text-sky-700 font-medium px-3 py-2 rounded-md transition-colors text-base"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="#pesan"
              onClick={(e) => handleNavClick(e, '#pesan')}
              className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold w-full py-3 rounded-lg text-center transition-colors shadow-sm"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Pesan Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
