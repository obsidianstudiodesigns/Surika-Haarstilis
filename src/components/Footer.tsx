import { Phone, Mail, MapPin, Facebook, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { salonAssets, salonContact } from '../data/salonData';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#041818] text-white border-t border-[#C5A059]/30 pt-16 pb-24 lg:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C5A059] bg-white p-0.5 shadow-md shrink-0">
                <img
                  src={salonAssets.logo}
                  alt="Surika Haarstilis Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Surika
                </span>
                <span className="text-[11px] text-[#E6CE8A] tracking-wider uppercase block">
                  Haarstilis & Kleurspesialis
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-light">
              {lang === 'af' ? salonContact.taglineAfrikaans : salonContact.taglineEnglish}
            </p>

            <div className="pt-1">
              <span className="text-xs font-semibold text-[#E6CE8A] block">
                Reflexions Salon • Oostville Sentrum
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F3E3B5] uppercase tracking-wider text-xs">
              {lang === 'af' ? 'Vinnige Skakels' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#hero" className="hover:text-[#C5A059] transition-colors">
                  {lang === 'af' ? 'Tuisblad' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#transformasies" className="hover:text-[#C5A059] transition-colors">
                  {lang === 'af' ? 'Voor & Na Transformasies' : 'Before & After Transformations'}
                </a>
              </li>
              <li>
                <a href="#dienste" className="hover:text-[#C5A059] transition-colors">
                  {lang === 'af' ? 'Dienste & Pryse' : 'Services & Pricing'}
                </a>
              </li>
              <li>
                <a href="#oor-surika" className="hover:text-[#C5A059] transition-colors">
                  {lang === 'af' ? 'Oor Surika' : 'About Surika'}
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#C5A059] transition-colors">
                  {lang === 'af' ? 'Kontak & Aanwysings' : 'Contact & Directions'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F3E3B5] uppercase tracking-wider text-xs">
              {lang === 'af' ? 'Kontak Besonderhede' : 'Contact Details'}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{salonContact.addressShort}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${salonContact.phoneClean}`} className="hover:text-white">
                  {salonContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${salonContact.email}`} className="hover:text-white">
                  {salonContact.email}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={salonContact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#E6CE8A] hover:underline"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook Blad</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Back to top */}
          <div className="space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-base font-bold text-[#F3E3B5] uppercase tracking-wider text-xs">
                {lang === 'af' ? 'Besigheidsure' : 'Opening Hours'}
              </h4>
              <div className="space-y-1 text-xs text-white/80 mt-2">
                <p>Di – Vr: {salonContact.hours.tueFri}</p>
                <p>Sa: {salonContact.hours.sat}</p>
                <p className="text-white/50">So & Ma: {salonContact.hours.sunMon}</p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B4F4F] border border-[#C5A059]/40 text-xs text-[#F3E3B5] hover:bg-[#106660] transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{lang === 'af' ? 'Terug na bo' : 'Back to top'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Surika Haarstilis & Kleurspesialis @ Reflexions Salon. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            <span>Website crafted with care by</span>
            <span className="text-[#E6CE8A] font-medium">Obsidian Studio Designs</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
