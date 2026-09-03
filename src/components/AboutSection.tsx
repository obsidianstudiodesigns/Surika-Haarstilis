import { Sparkles, Heart, CheckCircle2, MapPin, Phone, Award, Shield, Scissors } from 'lucide-react';
import { Language } from '../types';
import { salonAssets, salonContact } from '../data/salonData';

interface AboutSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export function AboutSection({ lang, onOpenBooking }: AboutSectionProps) {
  return (
    <section id="oor-surika" className="py-20 lg:py-28 bg-[#093737] text-white relative overflow-hidden">
      {/* Boho aesthetic background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#167D76]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stylist Portrait with Boho Mandala Gold Ring (from Flyer 1 & Logo) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square group">
              {/* Outer Boho Mandala Glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#C5A059]/40 via-[#167D76]/30 to-[#C5A059]/40 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              
              {/* Gold Ring Border */}
              <div className="relative w-full h-full rounded-full border-4 border-[#C5A059] p-2 shadow-2xl bg-white">
                <div className="w-full h-full rounded-full overflow-hidden border border-[#C5A059]/40 relative bg-white flex items-center justify-center">
                  <img
                    src={salonAssets.logo}
                    alt="Surika Haarstilis en Kleurspesialis"
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-2 right-2 sm:right-6 bg-[#C5A059] text-[#041818] rounded-2xl p-3.5 shadow-2xl border border-white/40 flex items-center gap-2.5">
                <Award className="w-6 h-6 text-[#041818]" />
                <div className="text-left">
                  <span className="block text-xs font-black uppercase tracking-wider">Kleurspesialis</span>
                  <span className="text-[11px] font-semibold text-[#041818]/85">Reflexions Salon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B4F4F] border border-[#C5A059]/40 text-[#F3E3B5] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Scissors className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{lang === 'af' ? 'Ontmoet Surika' : 'Meet Surika'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              {lang === 'af' ? (
                <>
                  Passievolle Haarkuns & <span className="text-[#F3E3B5]">Presisie Kleur</span>
                </>
              ) : (
                <>
                  Passionate Hair Artistry & <span className="text-[#F3E3B5]">Precision Colour</span>
                </>
              )}
            </h2>

            {/* Core Tagline repeated with emphasis */}
            <p className="text-base sm:text-lg text-[#F3E3B5] font-serif italic border-l-2 border-[#C5A059] pl-4">
              "{lang === 'af' ? salonContact.taglineAfrikaans : salonContact.taglineEnglish}"
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#FAF7F2]/80 font-light leading-relaxed">
              <p>
                {lang === 'af'
                  ? 'Surika is gevestig by Reflexions Salon in Oostville Sentrum, Voorbaai, Mosselbaai. Met jare se toegewyde ondervinding in gevorderde kleurtegnieke, balayage, presisie snywerk en gespesialiseerde Goldwell stelsels (insluitend die wêreldbekende Elumen en SilkLift), bied sy vir elke kliënt ’n eksklusiewe, ontspannende salon-ervaring.'
                  : 'Based at Reflexions Salon in Oostville Sentrum, Voorbaai, Mossel Bay, Surika brings years of dedicated mastery in advanced hair coloring, balayage, precision cutting, and specialized Goldwell systems (including world-renowned Elumen and SilkLift). She delivers an exclusive, relaxing salon transformation to every client.'}
              </p>
              <p>
                {lang === 'af'
                  ? 'Geen twee kliënte is dieselfde nie. Surika fokus op ’n een-tot-een benadering waar sy na jou wense luister, jou haargesondheid prioritiseer, en ’n styl skep wat jou natuurlike skoonheid en selfvertroue laat blom.'
                  : 'No two clients are the same. Surika takes a bespoke 1-on-1 approach—listening carefully to your goals, protecting hair integrity, and creating a signature look that illuminates your natural beauty and confidence.'}
              </p>
            </div>

            {/* Highlights Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-[#072929] p-3 rounded-xl border border-[#C5A059]/30">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {lang === 'af' ? 'Goldwell SilkLift & Elumen Kenner' : 'Goldwell SilkLift & Elumen Certified'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#072929] p-3 rounded-xl border border-[#C5A059]/30">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {lang === 'af' ? 'Vriendelike, Rustige Salon-Atmosfeer' : 'Friendly, Relaxed Salon Atmosphere'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#072929] p-3 rounded-xl border border-[#C5A059]/30">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {lang === 'af' ? 'Gerieflike Voorbaai Ligging' : 'Convenient Voorbaai Location'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#072929] p-3 rounded-xl border border-[#C5A059]/30">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {lang === 'af' ? 'Bespreek Maklik op WhatsApp' : 'Easy Instant WhatsApp Booking'}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="bg-[#C5A059] hover:bg-[#DFBD69] text-[#041818] font-bold px-7 py-3 rounded-full text-sm shadow-xl transition-all cursor-pointer"
              >
                {lang === 'af' ? 'Bespreek Jou Konsultasie' : 'Book Your Consultation'}
              </button>

              <a
                href={`tel:${salonContact.phoneClean}`}
                className="flex items-center gap-2 text-sm text-[#F3E3B5] hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>{salonContact.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
