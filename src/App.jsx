import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import PriceSection from './components/PriceSection';
import Services from './components/Services';
import HowToOrder from './components/HowToOrder';
import OrderForm from './components/OrderForm';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <PriceSection />
        <Services />
        <HowToOrder />
        <OrderForm />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
