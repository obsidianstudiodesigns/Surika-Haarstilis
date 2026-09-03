import { useState, type FormEvent } from 'react';
import { X, MessageCircle, Send, Sparkles, Calendar, Clock, User, Phone } from 'lucide-react';
import { Language } from '../types';
import { salonContact } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
}

export function BookingModal({ isOpen, onClose, lang, initialService }: BookingModalProps) {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedService, setSelectedService] = useState(
    initialService || (lang === 'af' ? 'Sny & Blaas Special (20% Afslag)' : 'Cut & Blowdry Special (20% Off)')
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Oggend / Morning');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const greeting = lang === 'af' ? 'Hallo Surika!' : 'Hello Surika!';
    const intro = lang === 'af'
      ? `Ek wil graag 'n salon afspraak maak by Reflexions Salon.`
      : `I would like to book an appointment at Reflexions Salon.`;

    const textLines = [
      greeting,
      intro,
      '',
      `*Naam / Name:* ${clientName || 'Kliënt'}`,
      clientPhone ? `*Sel / Phone:* ${clientPhone}` : '',
      `*Diens / Service:* ${selectedService}`,
      preferredDate ? `*Datum / Date:* ${preferredDate}` : '',
      `*Tyd / Time:* ${preferredTime}`,
      notes ? `*Nota / Notes:* ${notes}` : '',
      '',
      lang === 'af' ? 'Kan jy asseblief bevestig of die tyd beskikbaar is? Baie dankie!' : 'Could you please confirm if this time slot is available? Thank you!',
    ].filter(Boolean);

    const fullMessage = textLines.join('\n');
    const url = `https://wa.me/27835149285?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#072929] border-2 border-[#C5A059] rounded-2xl max-w-lg w-full p-6 sm:p-7 text-white shadow-2xl relative space-y-4 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-6">
          <div className="flex items-center gap-2 text-[#E6CE8A] text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Reflexions Salon • Mosselbaai</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            {lang === 'af' ? 'Bespreek Jou Afspraak' : 'Book Your Appointment'}
          </h3>
          <p className="text-xs text-[#FAF7F2]/80 font-light">
            {lang === 'af'
              ? 'Kies jou verlangde diens en datum. Dit open WhatsApp dadelik met ’n klaargemaakte boodskap vir Surika.'
              : 'Choose your desired service and date. This will open WhatsApp immediately with a pre-filled request.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-white/90 block">
              {lang === 'af' ? 'Jou Naam & Van *' : 'Your Name *'}
            </label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder={lang === 'af' ? 'bv. Rina Nel' : 'e.g. Emma Watson'}
              className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-white/90 block">
              {lang === 'af' ? 'Kontaknommer' : 'Phone Number'}
            </label>
            <input
              type="tel"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="083 123 4567"
              className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          {/* Service */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-white/90 block">
              {lang === 'af' ? 'Geselekteerde Diens' : 'Desired Service'}
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#C5A059]"
            >
              <option value="Sny & Blaas Special (20% Afslag)">
                {lang === 'af' ? 'Sny & Blaas (20% Afslag Special)' : 'Cut & Blowdry (20% Off Special)'}
              </option>
              <option value="Kleur Diens Special (20% Afslag)">
                {lang === 'af' ? 'Kleur Diens (20% Afslag Special)' : 'Colour Service (20% Off Special)'}
              </option>
              <option value="Volkop Highlights – Karamell Blonde">
                {lang === 'af' ? 'Volkop Highlights – Karamell Blonde' : 'Full Head Highlights – Caramel Blonde'}
              </option>
              <option value="Goldwell SilkLift Blonde Transformasie">
                {lang === 'af' ? 'Goldwell SilkLift Blonde Transformasie' : 'Goldwell SilkLift Blonde Transformation'}
              </option>
              <option value="Goldwell Elumen Violet Violet">
                {lang === 'af' ? 'Goldwell Elumen Violet Violet' : 'Goldwell Elumen Violet Violet'}
              </option>
              <option value="Lewendige Rooi met Donker Basis">
                {lang === 'af' ? 'Lewendige Rooi met Donker Basis' : 'Vibrant Red with Darker Base'}
              </option>
              <option value="Blaas & Stilering (20% Afslag)">
                {lang === 'af' ? 'Blaas & Stilering (20% Afslag)' : 'Blowout & Styling (20% Off)'}
              </option>
              <option value="Haarbehandeling (20% Afslag)">
                {lang === 'af' ? 'Haarbehandeling (20% Afslag)' : 'Hair Treatment (20% Off)'}
              </option>
              <option value="Konsultasie & Haaranalise">
                {lang === 'af' ? 'Konsultasie & Haaranalise' : 'Consultation & Hair Analysis'}
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Preferred Date */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-white/90 block">
                {lang === 'af' ? 'Voorkeur Datum' : 'Preferred Date'}
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* Preferred Time */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-white/90 block">
                {lang === 'af' ? 'Voorkeur Tyd' : 'Preferred Time'}
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
              >
                <option value="Oggend (08:30 – 12:00)">
                  {lang === 'af' ? 'Oggend (08:30 – 12:00)' : 'Morning (08:30 – 12:00)'}
                </option>
                <option value="Middag (12:00 – 15:00)">
                  {lang === 'af' ? 'Middag (12:00 – 15:00)' : 'Midday (12:00 – 15:00)'}
                </option>
                <option value="Laatmiddag (15:00 – 17:00)">
                  {lang === 'af' ? 'Laatmiddag (15:00 – 17:00)' : 'Late Afternoon (15:00 – 17:00)'}
                </option>
                <option value="Saterdag Oggend">
                  {lang === 'af' ? 'Saterdag Oggend' : 'Saturday Morning'}
                </option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-white/90 block">
              {lang === 'af' ? 'Nota of huidige haarlengte' : 'Notes or current hair status'}
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={lang === 'af' ? 'bv. Skouerlengte, baie fyn hare...' : 'e.g. Shoulder length, fine texture...'}
              className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-3.5 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBD69] to-[#C5A059] text-[#041818] font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:brightness-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'af' ? 'Stuur WhatsApp na Surika' : 'Send WhatsApp to Surika'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
