import { Star, Quote, Heart } from 'lucide-react';
import { Language } from '../types';
import { testimonials } from '../data/salonData';

interface TestimonialsSectionProps {
  lang: Language;
}

export function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B4F4F] text-[#F3E3B5] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 fill-[#E6CE8A] text-[#E6CE8A]" />
            <span>{lang === 'af' ? 'Kliënte Terugvoer' : 'Client Testimonials'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#072929] tracking-tight">
            {lang === 'af' ? 'Waarom Kliënte van Surika Hou' : 'Why Clients Adore Surika'}
          </h2>

          <p className="text-base text-[#0A2626]/75 font-light">
            {lang === 'af'
              ? 'Regte woorde van tevrede dames in Mosselbaai en omgewing.'
              : 'Genuine words from happy clients across Mossel Bay and surrounding areas.'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#C5A059]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#C5A059]/20 absolute top-5 right-5 group-hover:text-[#C5A059]/30 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                  ))}
                </div>

                <p className="text-sm text-[#0A2626]/85 italic leading-relaxed mb-6 relative z-10">
                  "{item.comment[lang]}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#C5A059]/20">
                <div className="font-serif font-bold text-base text-[#072929]">
                  {item.name}
                </div>
                <div className="text-xs text-[#0B4F4F] font-medium">
                  {item.role[lang]}
                </div>
                <div className="text-[11px] text-[#B38C44] mt-0.5">
                  {item.service[lang]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Community Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#0B4F4F]">
            {lang === 'af'
              ? 'Sien meer resensies en nuwe foto\'s op ons amptelike Facebook-blad.'
              : 'Explore more reviews and daily salon photos on our official Facebook page.'}
          </p>
        </div>

      </div>
    </section>
  );
}
