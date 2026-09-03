import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { salonContact } from '../data/salonData';

interface FloatingBookingBarProps {
  lang: Language;
  onOpenBooking: () => void;
}

export function FloatingBookingBar({ lang, onOpenBooking }: FloatingBookingBarProps) {
  return (
    <aside
      aria-label="Quick mobile contact and booking options"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#072929]/95 backdrop-blur-md border-t border-[#C5A059]/40 p-3 shadow-2xl flex items-center justify-between gap-2"
    >
      <a
        href={`tel:${salonContact.phoneClean}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#C5A059]/40 bg-[#041818] text-white text-xs font-semibold hover:bg-[#0B4F4F] transition-colors"
      >
        <Phone className="w-4 h-4 text-[#C5A059]" />
        <span>{lang === 'af' ? 'Skakel' : 'Call'}</span>
      </a>

      <button
        type="button"
        onClick={onOpenBooking}
        className="flex-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBD69] text-[#041818] text-xs font-bold shadow-lg cursor-pointer"
      >
        <MessageCircle className="w-4 h-4" />
        <span>{lang === 'af' ? 'Bespreek op WhatsApp' : 'Book on WhatsApp'}</span>
      </button>
    </aside>
  );
}
