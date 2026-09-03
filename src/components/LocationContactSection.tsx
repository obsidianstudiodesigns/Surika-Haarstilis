import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Facebook, ExternalLink, Calendar, User, Sparkles, Send } from 'lucide-react';
import { Language } from '../types';
import { salonContact, servicesList } from '../data/salonData';

interface LocationContactSectionProps {
  lang: Language;
  preselectedService?: string;
}

export function LocationContactSection({ lang, preselectedService }: LocationContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || (lang === 'af' ? 'Sny & Blaas' : 'Cut & Blowdry'));
  const [date, setDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Oggend / Morning');
  const [notes, setNotes] = useState('');

  const handleSendWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const greeting = lang === 'af' ? 'Hallo Surika!' : 'Hello Surika!';
    const intro = lang === 'af'
      ? `Ek wil graag 'n afspraak maak by Reflexions Salon.`
      : `I would like to book an appointment at Reflexions Salon.`;
    const nameLine = lang === 'af' ? `*Naam:* ${name || 'Kliënt'}` : `*Name:* ${name || 'Client'}`;
    const phoneLine = phone ? (lang === 'af' ? `*Sel:* ${phone}` : `*Phone:* ${phone}`) : '';
    const serviceLine = lang === 'af' ? `*Diens:* ${service}` : `*Service:* ${service}`;
    const dateLine = date ? (lang === 'af' ? `*Voorkeur Datum:* ${date}` : `*Preferred Date:* ${date}`) : '';
    const timeLine = lang === 'af' ? `*Tyd:* ${preferredTime}` : `*Time:* ${preferredTime}`;
    const notesLine = notes ? (lang === 'af' ? `*Nota:* ${notes}` : `*Notes:* ${notes}`) : '';

    const messageLines = [
      greeting,
      intro,
      '',
      nameLine,
      phoneLine,
      serviceLine,
      dateLine,
      timeLine,
      notesLine,
      '',
      lang === 'af' ? 'Kan jy my asseblief laat weet watter tyd beskikbaar is? Baie dankie!' : 'Could you please let me know what slots are available? Thank you!',
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/27835149285?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-[#041818] text-white relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0B4F4F]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B4F4F] border border-[#C5A059]/40 text-[#F3E3B5] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'af' ? 'Ligging & Afsprake' : 'Location & Bookings'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            {lang === 'af' ? 'Kom Besoek Ons in Voorbaai' : 'Visit Us in Voorbaai, Mossel Bay'}
          </h2>

          <p className="text-base text-[#FAF7F2]/80 font-light">
            {lang === 'af'
              ? 'Geleë in die gerieflike Oostville Sentrum met volop gratis parkering reg voor die deur.'
              : 'Located at the convenient Oostville Sentrum with plenty of free doorstep parking.'}
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-px w-12 bg-[#C5A059]" />
            <div className="w-2.5 h-2.5 rounded-full border border-[#C5A059] bg-[#C5A059]" />
            <div className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Salon Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#072929] rounded-2xl p-7 border border-[#C5A059]/40 shadow-2xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#E6CE8A] font-semibold">
                  Reflexions Salon
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Surika Haarstilis & Kleurspesialis
                </h3>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 text-sm text-[#FAF7F2]/90">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B4F4F] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">
                      {lang === 'af' ? 'Adres' : 'Address'}
                    </span>
                    <span className="text-xs text-white/80 leading-relaxed block">
                      {salonContact.address}
                    </span>
                    <a
                      href={salonContact.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#E6CE8A] hover:underline mt-1 font-medium"
                    >
                      <span>{lang === 'af' ? 'Maak oop in Google Maps' : 'Open in Google Maps'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B4F4F] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">
                      {lang === 'af' ? 'Telefoon & WhatsApp' : 'Phone & WhatsApp'}
                    </span>
                    <a
                      href={`tel:${salonContact.phoneClean}`}
                      className="text-white hover:text-[#C5A059] font-medium"
                    >
                      {salonContact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B4F4F] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">E-pos</span>
                    <a
                      href={`mailto:${salonContact.email}`}
                      className="text-white/85 hover:text-[#C5A059]"
                    >
                      {salonContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B4F4F] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-semibold text-white">
                      {lang === 'af' ? 'Besigheidsure' : 'Opening Hours'}
                    </span>
                    <div className="text-xs text-white/80 space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span>{lang === 'af' ? 'Dinsdag – Vrydag:' : 'Tuesday – Friday:'}</span>
                        <span className="font-semibold text-white">{salonContact.hours.tueFri}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>{lang === 'af' ? 'Saterdag:' : 'Saturday:'}</span>
                        <span className="font-semibold text-white">{salonContact.hours.sat}</span>
                      </div>
                      <div className="flex justify-between gap-4 text-white/60">
                        <span>{lang === 'af' ? 'Sondag & Maandag:' : 'Sunday & Monday:'}</span>
                        <span>{salonContact.hours.sunMon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Link */}
              <div className="pt-2 border-t border-[#C5A059]/20">
                <a
                  href={salonContact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0B4F4F]/60 hover:bg-[#0B4F4F] border border-[#C5A059]/30 transition-all text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-5 h-5 text-[#E6CE8A]" />
                    <span className="text-xs font-semibold">
                      {lang === 'af' ? 'Volg Surika op Facebook' : 'Follow Surika on Facebook'}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Map Directions Card */}
            <div className="bg-[#093737] rounded-2xl p-6 border border-[#C5A059]/30 text-center space-y-3">
              <h4 className="font-serif font-bold text-lg text-white">
                {lang === 'af' ? 'Gids na die Salon' : 'Directions to Salon'}
              </h4>
              <p className="text-xs text-white/75 leading-relaxed">
                {lang === 'af'
                  ? 'Oostville Sentrum is geleë reg op die hoek van Louis Fourie-rylaan en Garret-straat in Voorbaai, regoors bekende kleinhandelwinkels met veilige, gratis parkering.'
                  : 'Oostville Sentrum is situated right on the corner of Louis Fourie Road and Garret Street in Voorbaai, with safe, hassle-free parking right in front of the door.'}
              </p>
              <a
                href={salonContact.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0B4F4F] hover:bg-[#106660] text-[#F3E3B5] border border-[#C5A059] px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{lang === 'af' ? 'Kry Aanwysings' : 'Get Driving Directions'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Appointment Generator Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#072929] rounded-2xl p-7 sm:p-9 border-2 border-[#C5A059] shadow-2xl space-y-6 relative">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#E6CE8A] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  {lang === 'af' ? 'Vinnige Afspraak Navraag' : 'Fast Appointment Inquiry'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {lang === 'af' ? 'Bespreek Direk op WhatsApp' : 'Book Directly on WhatsApp'}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light">
                  {lang === 'af'
                    ? 'Vul jou besonderhede in en klik die knoppie om dadelik ’n gereed boodskap aan Surika te stuur.'
                    : 'Fill in your details and click the button to immediately open a pre-formatted booking request on WhatsApp.'}
                </p>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/90 block">
                      {lang === 'af' ? 'Jou Naam & Van *' : 'Your Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'af' ? 'bv. Marie van Wyk' : 'e.g. Sarah Smith'}
                      className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/90 block">
                      {lang === 'af' ? 'Kontaknommer' : 'Contact Number'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="082 123 4567"
                      className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/90 block">
                    {lang === 'af' ? 'Geselekteerde Diens *' : 'Select Service *'}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059]"
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
                    <option value="Algemene Konsultasie & Kwotasie">
                      {lang === 'af' ? 'Konsultasie & Haaranalise' : 'Consultation & Hair Analysis'}
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/90 block">
                      {lang === 'af' ? 'Voorkeur Datum' : 'Preferred Date'}
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/90 block">
                      {lang === 'af' ? 'Voorkeur Tyd' : 'Preferred Time'}
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059]"
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
                        {lang === 'af' ? 'Saterdag Oggend (08:30 – 13:00)' : 'Saturday Morning (08:30 – 13:00)'}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/90 block">
                    {lang === 'af' ? 'Enige ekstra wense of huidige haarkleur?' : 'Any specific notes or current hair condition?'}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={lang === 'af' ? 'bv. My hare is tans donkerbruin en ek wil graag ligter gaan...' : 'e.g. Currently dark brown, looking to transition to caramel blonde...'}
                    className="w-full bg-[#041818] border border-[#C5A059]/40 rounded-xl px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBD69] to-[#C5A059] hover:from-[#B38C44] hover:to-[#B38C44] text-[#041818] font-bold text-base shadow-xl hover:shadow-[#C5A059]/30 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#041818]" />
                  <span>{lang === 'af' ? 'Stuur WhatsApp Afspraak Navraag' : 'Send WhatsApp Booking Request'}</span>
                  <Send className="w-4 h-4 text-[#041818]" />
                </button>

                <p className="text-[11px] text-center text-white/60">
                  {lang === 'af'
                    ? '🔒 Geen direkte betaling nodig nie. Surika sal jou beskikbaarheid bevestig.'
                    : '🔒 No instant payment required. Surika will review and confirm your available time.'}
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
