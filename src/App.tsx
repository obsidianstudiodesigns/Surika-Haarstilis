import { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { HeroVideoSection } from './components/HeroVideoSection';
import { TransformationsSection } from './components/TransformationsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingBookingBar } from './components/FloatingBookingBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [lang, setLang] = useState<Language>('af');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (service?: string) => {
    setPreselectedService(service);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0A2626] font-sans selection:bg-[#C5A059]/30 selection:text-[#041818] overflow-x-hidden">
      {/* Navigation Header */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroVideoSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Before & After Transformations (Extracted directly from Work done 1 - 4) */}
        <TransformationsSection
          lang={lang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Services & Pricing Menu */}
        <ServicesSection
          lang={lang}
          onOpenBooking={handleOpenBooking}
        />

        {/* About Surika & Reflexions Salon (Flyer 1 and Logo details) */}
        <AboutSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Client Reviews */}
        <TestimonialsSection lang={lang} />

        {/* Frequently Asked Questions */}
        <FaqSection lang={lang} />

        {/* Location, Hours & Direct WhatsApp Booking Generator */}
        <LocationContactSection
          lang={lang}
          preselectedService={preselectedService}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Mobile Fixed Quick Action Bar */}
      <FloatingBookingBar
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        lang={lang}
        initialService={preselectedService}
      />
    </div>
  );
}
