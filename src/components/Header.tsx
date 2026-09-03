import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { Language } from '../types';
import { salonAssets, salonContact } from '../data/salonData';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export function Header({ lang, onLanguageChange, onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: { af: 'Tuis', en: 'Home' } },
    { href: '#specials', label: { af: 'Aanbiedinge', en: 'Specials' }, highlight: true },
    { href: '#transformasies', label: { af: 'Transformasies', en: 'Transformations' } },
    { href: '#dienste', label: { af: 'Dienste & Pryse', en: 'Services' } },
    { href: '#oor-surika', label: { af: 'Oor Surika', en: 'About' } },
    { href: '#kontak', label: { af: 'Kontak & Ligging', en: 'Location' } },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#072929]/95 backdrop-blur-md py-2.5 shadow-xl border-b border-[#C5A059]/30 text-white'
          : 'bg-gradient-to-b from-[#041818]/90 via-[#072929]/60 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded-lg p-1"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#C5A059] shadow-md group-hover:scale-105 transition-transform duration-300 bg-white p-0.5">
              <img
                src={salonAssets.logo}
                alt="Surika Haarstilis Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#F3E3B5] transition-colors">
                  Surika
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#E6CE8A] border-l border-[#C5A059]/50 pl-1.5 hidden sm:inline">
                  Haarstilis
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#FAF7F2]/80 font-light tracking-wide flex items-center gap-1">
                <span>Reflexions Salon</span>
                <span className="text-[#C5A059]">•</span>
                <span className="text-[#E6CE8A]/90">Mosselbaai</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  link.highlight
                    ? 'text-[#F3E3B5] font-semibold hover:text-white flex items-center gap-1'
                    : 'text-white/85 hover:text-[#F3E3B5]'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />}
                {link.label[lang]}
                {link.highlight && (
                  <span className="absolute -top-1 -right-2 px-1.5 py-0.2 text-[9px] font-bold bg-[#C5A059] text-[#041818] rounded-full uppercase">
                    -20%
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Area: Language Switcher & Quick Booking */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switch Tab */}
            <div
              id="lang-switcher"
              className="flex items-center bg-[#0B4F4F]/80 border border-[#C5A059]/40 rounded-full p-0.5 text-xs font-semibold shadow-inner"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('af')}
                className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'af'
                    ? 'bg-[#C5A059] text-[#041818] shadow-sm font-bold'
                    : 'text-[#FAF7F2]/80 hover:text-white'
                }`}
                title="Skakel na Afrikaans"
              >
                AF
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#C5A059] text-[#041818] shadow-sm font-bold'
                    : 'text-[#FAF7F2]/80 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Quick Call Button */}
            <a
              href={`tel:${salonContact.phoneClean}`}
              className="p-2 rounded-full border border-[#C5A059]/40 hover:bg-[#C5A059]/20 transition-colors text-[#F3E3B5]"
              title={lang === 'af' ? 'Skakel Surika' : 'Call Surika'}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* WhatsApp CTA Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center gap-2 bg-gradient-to-r from-[#106660] to-[#0B4F4F] hover:from-[#167D76] hover:to-[#106660] text-[#FAF7F2] border border-[#C5A059] px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg hover:shadow-[#C5A059]/20 transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#F3E3B5]" />
              <span>{lang === 'af' ? 'Bespreek Afspraak' : 'Book Appointment'}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Lang Button */}
            <button
              type="button"
              onClick={() => onLanguageChange(lang === 'af' ? 'en' : 'af')}
              className="bg-[#0B4F4F] border border-[#C5A059]/60 px-2.5 py-1 rounded-full text-[11px] font-bold text-[#F3E3B5]"
            >
              {lang === 'af' ? 'AF / EN' : 'EN / AF'}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#F3E3B5] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#072929] border-b border-[#C5A059]/40 px-5 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-white/90 hover:text-[#F3E3B5] py-1.5 border-b border-white/5"
              >
                <span className="flex items-center gap-2">
                  {link.highlight && <Sparkles className="w-4 h-4 text-[#C5A059]" />}
                  {link.label[lang]}
                </span>
                {link.highlight && (
                  <span className="text-[10px] font-bold bg-[#C5A059] text-[#041818] px-2 py-0.5 rounded-full">
                    -20%
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Salon Address & Quick Phone in Mobile Menu */}
          <div className="pt-2 text-xs text-white/70 space-y-1.5 border-t border-[#C5A059]/20">
            <div className="flex items-center gap-2 text-[#E6CE8A]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{salonContact.addressShort}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 font-medium">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <a href={`tel:${salonContact.phoneClean}`}>{salonContact.phone}</a>
            </div>
          </div>

          {/* Mobile CTAs */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#C5A059] text-[#072929] font-bold py-2.5 rounded-full shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'af' ? 'Bespreek via WhatsApp' : 'Book via WhatsApp'}</span>
            </button>
            <a
              href={`tel:${salonContact.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 border border-[#C5A059] text-[#F3E3B5] py-2 rounded-full text-xs font-semibold text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{lang === 'af' ? 'Skakel Salon: 083 514 9285' : 'Call Salon: 083 514 9285'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
