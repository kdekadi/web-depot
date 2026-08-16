import React, { useState } from 'react';
import { depotData } from '../data/depot';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section className="py-12 md:py-16 bg-white border-b border-slate-200 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Jawaban lengkap atas pertanyaan yang sering diajukan pelanggan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {depotData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Post-FAQ CTA Banner */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 text-center space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Masih ada pertanyaan atau mau langsung pesan galon?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Tim Depot Air Adi Tirta siap melayani pesanan air isi ulang Anda via WhatsApp.
          </p>
          <div>
            <a
              href="#pesan"
              onClick={scrollToOrder}
              className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Pesan Sekarang via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
