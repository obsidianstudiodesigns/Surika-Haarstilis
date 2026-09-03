import { useState } from 'react';
import { Sparkles, Clock, MessageCircle, Check, Star } from 'lucide-react';
import { Language } from '../types';
import { servicesList, salonContact } from '../data/salonData';

interface ServicesSectionProps {
  lang: Language;
  onOpenBooking: (serviceName?: string) => void;
}

export function ServicesSection({ lang, onOpenBooking }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { af: 'Alle Dienste', en: 'All Services' } },
    { id: 'cut', label: { af: 'Snywerk', en: 'Haircuts' } },
    { id: 'color', label: { af: 'Kleur & Highlights', en: 'Color & Highlights' } },
    { id: 'treatment', label: { af: 'Behandelings', en: 'Treatments' } },
    { id: 'styling', label: { af: 'Blaas & Stilering', en: 'Blowout & Styling' } },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter((s) => s.category === activeCategory);

  return (
    <section id="dienste" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B4F4F] text-[#F3E3B5] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'af' ? 'Haarsalon Pryse & Dienste' : 'Salon Pricing & Menu'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#072929] tracking-tight">
            {lang === 'af' ? 'Ons Luukse Haardienste' : 'Our Luxury Hair Services'}
          </h2>

          <p className="text-base sm:text-lg text-[#0A2626]/75 font-light">
            {lang === 'af'
              ? 'Alle dienste sluit ’n professionele konsultasie, luukse sjampoe en kopmassering in.'
              : 'All services include a customized consultation, luxury shampoo, and relaxing scalp massage.'}
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-px w-12 bg-[#C5A059]" />
            <div className="w-2.5 h-2.5 rounded-full border border-[#C5A059] bg-[#C5A059]/30" />
            <div className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8 pb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B4F4F] text-[#FAF7F2] font-bold shadow-md'
                  : 'bg-white text-[#072929] border border-[#C5A059]/30 hover:border-[#C5A059]'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                service.featured
                  ? 'bg-[#FDFBF8] border-[#C5A059] shadow-lg relative'
                  : 'bg-white border-[#C5A059]/25 shadow-xs hover:shadow-md'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-[#C5A059] text-[#041818] font-bold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#041818]" />
                  <span>{lang === 'af' ? 'Gewildste' : 'Most Popular'}</span>
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#072929]">
                    {service.name[lang]}
                  </h3>
                  <span className="text-base sm:text-lg font-bold text-[#0B4F4F] whitespace-nowrap bg-[#0B4F4F]/10 px-3 py-1 rounded-lg border border-[#0B4F4F]/20">
                    {service.price}
                  </span>
                </div>

                <p className="text-sm text-[#0A2626]/75 mt-2 leading-relaxed">
                  {service.description[lang]}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-[#B38C44] font-medium mt-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#C5A059]/20 flex items-center justify-between">
                <span className="text-xs text-[#0A2626]/60">
                  {lang === 'af' ? 'Sluit stilering in' : 'Includes styling'}
                </span>

                <button
                  type="button"
                  onClick={() => onOpenBooking(service.name[lang])}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#0B4F4F] hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'af' ? 'Bespreek Hierdie' : 'Book Service'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Note */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0B4F4F]/5 border border-[#C5A059]/40 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#072929] font-medium">
            {lang === 'af'
              ? '💡 Nie seker watter diens die beste vir jou is nie? Stuur gerus vir Surika ’n foto van jou hare op WhatsApp vir ’n gratis voorlopige kwotasie en advies.'
              : '💡 Unsure which treatment is right for your hair? Feel free to send Surika a quick photo of your hair on WhatsApp for a complimentary quotation and expert advice.'}
          </p>
        </div>

      </div>
    </section>
  );
}
