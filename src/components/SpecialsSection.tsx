import { Gift, Scissors, Wind, Palette, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { specialsList, specialBonus, salonContact } from '../data/salonData';

interface SpecialsSectionProps {
  lang: Language;
  onOpenBooking: (preselectedService?: string) => void;
}

export function SpecialsSection({ lang, onOpenBooking }: SpecialsSectionProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'sny-blaas':
        return <Scissors className="w-6 h-6 text-[#C5A059]" />;
      case 'blaas':
        return <Wind className="w-6 h-6 text-[#C5A059]" />;
      case 'kleur-diens':
        return <Palette className="w-6 h-6 text-[#C5A059]" />;
      case 'behandelings':
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="specials" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Delicate background aesthetic - subtle feather and teal watercolor wash */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4F4F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Extracted directly from Flyer 2 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B4F4F] text-[#F3E3B5] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md">
            <Heart className="w-4 h-4 text-[#E6CE8A] fill-[#E6CE8A]" />
            <span>
              {lang === 'af' ? 'Vroue Maand & Seisoenale Aanbiedinge' : "Women's Month & Exclusive Specials"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#072929] tracking-tight">
            {lang === 'af' ? 'Bederf Jouself Met Ons Specials' : 'Treat Yourself With Our Specials'}
          </h2>

          <p className="text-base sm:text-lg text-[#0B4F4F]/85 font-medium tracking-wide">
            {specialBonus.motto[lang]}
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-px w-12 bg-[#C5A059]" />
            <div className="w-2.5 h-2.5 rounded-full border border-[#C5A059] bg-[#C5A059]/30" />
            <div className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>

        {/* Centerpiece Hero Badge: 20% AFSLAG (Matching Flyer 2 circle medal design) */}
        <div className="my-10 flex justify-center">
          <div className="relative group">
            {/* Outer radiant gold glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C5A059] via-[#F3E3B5] to-[#B38C44] rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            
            {/* Circular Badge Body */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-b from-[#0B4F4F] to-[#072929] border-4 border-[#C5A059] p-2 shadow-2xl flex flex-col items-center justify-center text-center">
              {/* Inner delicate gold ring */}
              <div className="w-full h-full rounded-full border border-dashed border-[#F3E3B5]/60 flex flex-col items-center justify-center p-3">
                <span className="text-xs uppercase tracking-widest text-[#E6CE8A] font-semibold">
                  {lang === 'af' ? 'Spesiale Aanbod' : 'Special Offer'}
                </span>
                <span className="text-4xl sm:text-5xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] via-[#F3E3B5] to-[#C5A059] leading-none my-1">
                  20%
                </span>
                <span className="text-sm sm:text-base font-display font-bold uppercase tracking-widest text-[#FAF7F2]">
                  {lang === 'af' ? 'AFSLAG' : 'DISCOUNT'}
                </span>
                <span className="text-[10px] text-[#E6CE8A]/80 font-light mt-1">
                  {lang === 'af' ? 'Op Geselekteerde Dienste' : 'On Selected Services'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Signature Specials Cards Grid (from Flyer 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialsList.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#FDFBF8] rounded-2xl p-6 border border-[#C5A059]/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0B4F4F]/10 border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#0B4F4F] transition-colors">
                    {getIcon(item.id)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#C5A059] text-[#041818] font-bold text-xs shadow-xs">
                    {item.discount}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#072929] group-hover:text-[#0B4F4F] transition-colors">
                  {item.title[lang]}
                </h3>

                {/* Catchphrase from Flyer 2 */}
                <p className="text-xs font-semibold text-[#B38C44] italic my-1.5">
                  "{item.quote[lang]}"
                </p>

                <p className="text-sm text-[#0A2626]/75 leading-relaxed mt-2">
                  {item.description[lang]}
                </p>
              </div>

              {/* Card Action */}
              <div className="mt-6 pt-4 border-t border-[#C5A059]/20">
                <button
                  type="button"
                  onClick={() => onOpenBooking(item.title[lang])}
                  className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B4F4F] group-hover:text-[#072929] group-hover:bg-[#C5A059]/20 py-2 rounded-lg transition-all cursor-pointer"
                >
                  <span>{lang === 'af' ? 'Bespreek Hierdie Diens' : 'Book This Service'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Gift Banner (Directly from Flyer 2) */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#072929] via-[#0B4F4F] to-[#072929] border-2 border-[#C5A059] p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden">
          {/* Subtle gold foil highlights */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[#C5A059]/20 blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#C5A059] text-[#041818] flex items-center justify-center shrink-0 shadow-lg">
                <Gift className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#E6CE8A]">
                    {specialBonus.title[lang]}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-[#C5A059] text-[#072929] rounded-full uppercase">
                    R800+ Bonus
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {specialBonus.condition[lang]}
                </h4>
                <p className="text-xs sm:text-sm text-[#FAF7F2]/80 font-light">
                  {specialBonus.sub[lang]}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => onOpenBooking(lang === 'af' ? 'Kleurdiens met Gratis Geskenk' : 'Colour Service with Free Gift')}
                className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#DFBD69] text-[#041818] font-bold px-6 py-3 rounded-full text-sm shadow-xl transition-all duration-200 text-center cursor-pointer"
              >
                {lang === 'af' ? 'Eis Jou Geskenk & Afslag' : 'Claim Your Gift & Discount'}
              </button>
            </div>
          </div>
        </div>

        {/* Closing Banner Quote from Flyer 2 */}
        <div className="text-center mt-8 text-xs sm:text-sm text-[#0B4F4F]/80 font-medium">
          <p>
            {lang === 'af'
              ? '✨ Augustus is vir vroue – deur vroue! Maak jou afspraak vandag by Reflexions Salon: 083 514 9285'
              : '✨ Celebrating women with beautiful hair! Reserve your dream appointment at Reflexions Salon: 083 514 9285'}
          </p>
        </div>

      </div>
    </section>
  );
}
