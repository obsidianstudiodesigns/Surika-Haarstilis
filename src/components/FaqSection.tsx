import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { faqs } from '../data/salonData';

interface FaqSectionProps {
  lang: Language;
}

export function FaqSection({ lang }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B4F4F] text-[#F3E3B5] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'af' ? 'Vrae & Antwoorde' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#072929] tracking-tight">
            {lang === 'af' ? 'Gereelde Vrae Oor Ons Salon' : 'Common Questions About Our Salon'}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#C5A059]/30 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2]/60 transition-colors cursor-pointer"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#072929]">
                    {faq.question[lang]}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0B4F4F]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#0A2626]/80 leading-relaxed border-t border-[#C5A059]/10">
                    <p>{faq.answer[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
