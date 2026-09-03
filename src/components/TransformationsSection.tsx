import { useState } from 'react';
import { Sparkles, MessageCircle, Eye, X, ZoomIn, ShieldCheck, Columns } from 'lucide-react';
import { Language, TransformationItem } from '../types';
import { transformations } from '../data/salonData';

interface TransformationsSectionProps {
  lang: Language;
  onOpenBooking: (styleName?: string) => void;
}

export function TransformationsSection({ lang, onOpenBooking }: TransformationsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<TransformationItem | null>(null);
  const [modalView, setModalView] = useState<'split' | 'before' | 'after'>('split');
  const [cardViews, setCardViews] = useState<Record<string, 'split' | 'before' | 'after'>>({
    'work-1': 'split',
    'work-2': 'split',
    'work-3': 'split',
    'work-4': 'split',
  });

  const categories = [
    { id: 'all', label: { af: 'Alle Transformasies', en: 'All Transformations' } },
    { id: 'highlights', label: { af: 'Karamell Highlights', en: 'Caramel Highlights' } },
    { id: 'bleach-tone', label: { af: 'Goldwell SilkLift Blond', en: 'Goldwell SilkLift Blonde' } },
    { id: 'creative-color', label: { af: 'Elumen Violet', en: 'Elumen Violet' } },
    { id: 'vibrant-red', label: { af: 'Lewendige Rooi', en: 'Vibrant Red' } },
  ];

  const filteredItems = selectedCategory === 'all'
    ? transformations
    : transformations.filter((t) => t.category === selectedCategory);

  const setViewForCard = (id: string, view: 'split' | 'before' | 'after') => {
    setCardViews((prev) => ({ ...prev, [id]: view }));
  };

  return (
    <section id="transformasies" className="py-20 lg:py-28 bg-[#072929] text-white relative overflow-hidden">
      {/* Dreamy golden aura background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#167D76]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B4F4F] border border-[#C5A059]/40 text-[#F3E3B5] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'af' ? 'Regte Kliënt Resultate' : 'Real Client Results'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            {lang === 'af' ? 'Voor & Na Transformasies' : 'Before & After Transformations'}
          </h2>

          <p className="text-base sm:text-lg text-[#FAF7F2]/80 font-light">
            {lang === 'af'
              ? 'Kyk na die presiese Voor & Na foto’s van Surika se kliënte met Goldwell SilkLift, Elumen en Topchic formulerings.'
              : 'Explore the exact Before & After images from Surika’s clients using Goldwell SilkLift, Elumen, and Topchic systems.'}
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-px w-12 bg-[#C5A059]" />
            <div className="w-2.5 h-2.5 rounded-full border border-[#C5A059] bg-[#C5A059]" />
            <div className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8 pb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#C5A059] text-[#041818] font-bold shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0B4F4F]/60 text-white/80 hover:text-white border border-[#C5A059]/30 hover:border-[#C5A059]'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Grid of the 4 Workdone Before & After Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item, index) => {
            const currentView = cardViews[item.id] || 'split';

            return (
              <div
                key={item.id}
                className="bg-[#093737] rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Media Controls Bar: Toggle between Split, Before, After */}
                <div className="bg-[#052424] px-4 py-2.5 border-b border-[#C5A059]/30 flex items-center justify-between gap-2">
                  <span className="text-xs text-[#FAF7F2]/70 font-medium">
                    {lang === 'af' ? 'Aansig:' : 'View:'}
                  </span>

                  {/* View Mode Buttons */}
                  <div className="flex items-center gap-1 bg-[#093737] p-1 rounded-lg border border-[#C5A059]/30 text-xs">
                    <button
                      type="button"
                      onClick={() => setViewForCard(item.id, 'split')}
                      className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                        currentView === 'split'
                          ? 'bg-[#C5A059] text-[#041818] font-bold shadow'
                          : 'text-white/70 hover:text-white'
                      }`}
                      title={lang === 'af' ? 'Sy-aan-Sy Vergelyking' : 'Side-by-side comparison'}
                    >
                      <Columns className="w-3 h-3" />
                      <span>{lang === 'af' ? 'Sy-aan-Sy' : 'Split'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewForCard(item.id, 'before')}
                      className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                        currentView === 'before'
                          ? 'bg-[#C5A059] text-[#041818] font-bold shadow'
                          : 'text-white/70 hover:text-white'
                      }`}
                      title={lang === 'af' ? 'Kyk Slegs Voor' : 'View Before Only'}
                    >
                      {lang === 'af' ? 'Voor' : 'Before'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewForCard(item.id, 'after')}
                      className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                        currentView === 'after'
                          ? 'bg-[#C5A059] text-[#041818] font-bold shadow'
                          : 'text-white/70 hover:text-white'
                      }`}
                      title={lang === 'af' ? 'Kyk Slegs Na' : 'View After Only'}
                    >
                      {lang === 'af' ? 'Na' : 'After'}
                    </button>
                  </div>
                </div>

                {/* Media Display Area based on View Mode */}
                <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-[#041818]">
                  {currentView === 'split' && (
                    <div className="grid grid-cols-2 w-full h-full divide-x divide-[#C5A059]/40">
                      {/* Left: Before Image */}
                      <div className="relative h-full overflow-hidden bg-black">
                        <img
                          src={item.beforeImageSrc || item.imageSrc}
                          alt={`${item.title[lang]} - Before`}
                          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-[#041818]/90 text-red-300 border border-red-400/40 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                          {lang === 'af' ? 'VOOR' : 'BEFORE'}
                        </div>
                      </div>

                      {/* Right: After Image */}
                      <div className="relative h-full overflow-hidden bg-black">
                        <img
                          src={item.afterImageSrc || item.imageSrc}
                          alt={`${item.title[lang]} - After`}
                          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 right-3 bg-[#0B4F4F]/90 text-[#F3E3B5] border border-[#C5A059]/60 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                          {lang === 'af' ? 'NA' : 'AFTER'}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentView === 'before' && (
                    <div className="relative w-full h-full">
                      <img
                        src={item.beforeImageSrc || item.imageSrc}
                        alt={`${item.title[lang]} - Before`}
                        className="w-full h-full object-contain object-center bg-black/40"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#041818]/90 text-red-300 border border-red-400/40 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                        {lang === 'af' ? 'VOOR' : 'BEFORE'}
                      </div>
                    </div>
                  )}

                  {currentView === 'after' && (
                    <div className="relative w-full h-full">
                      <img
                        src={item.afterImageSrc || item.imageSrc}
                        alt={`${item.title[lang]} - After`}
                        className="w-full h-full object-contain object-center bg-black/40"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B4F4F]/90 text-[#F3E3B5] border border-[#C5A059]/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                        {lang === 'af' ? 'NA' : 'AFTER'}
                      </div>
                    </div>
                  )}

                  {/* Quick Zoom Trigger Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalItem(item);
                      setModalView(currentView);
                    }}
                    className="absolute bottom-3 right-3 p-2.5 rounded-full bg-[#041818]/80 text-[#F3E3B5] hover:bg-[#C5A059] hover:text-[#041818] transition-all shadow-lg backdrop-blur-xs cursor-pointer z-10"
                    title={lang === 'af' ? 'Kyk Besonderhede & Zoom' : 'View Details & Zoom'}
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                {/* Card Content & Comparison Details */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                        {item.title[lang]}
                      </h3>
                    </div>

                    {/* Before & After Text Blocks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-3 border-t border-[#C5A059]/20">
                      <div className="bg-[#072929] rounded-xl p-3 border border-red-500/20">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-300 block mb-1">
                          {lang === 'af' ? 'Voor / Before' : 'Before State'}
                        </span>
                        <p className="text-xs text-white/80 leading-relaxed">
                          {item.beforeText[lang]}
                        </p>
                      </div>
                      <div className="bg-[#0B4F4F] rounded-xl p-3 border border-[#C5A059]/40">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F3E3B5] block mb-1">
                          {lang === 'af' ? 'Na / After' : 'Transformed Result'}
                        </span>
                        <p className="text-xs text-white/90 leading-relaxed font-medium">
                          {item.afterText[lang]}
                        </p>
                      </div>
                    </div>

                    {/* Formula / Technique Highlight */}
                    <div className="mt-3 text-xs text-[#FAF7F2]/70 flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#E6CE8A] font-medium">Produkte: </strong>
                        {item.productUsed}
                      </span>
                    </div>

                    {/* Work 3 product highlight if available */}
                    {item.productImageSrc && (
                      <div className="mt-2.5 inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#041818]/60 border border-[#C5A059]/30 text-xs text-[#F3E3B5]">
                        <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                        <span>{lang === 'af' ? 'Sluit amptelike Goldwell Elumen VV@all in' : 'Includes official Goldwell Elumen VV@all'}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 mt-4 border-t border-[#C5A059]/20 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(item.title[lang])}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#DFBD69] text-[#041818] font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{lang === 'af' ? 'Ek Soek Hierdie Styl' : 'I Want This Look'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveModalItem(item);
                        setModalView(currentView);
                      }}
                      className="p-2.5 rounded-xl border border-[#C5A059]/40 hover:bg-[#0B4F4F] text-[#F3E3B5] transition-colors cursor-pointer"
                      title="Besonderhede"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#093737]/70 border border-[#C5A059]/30 max-w-2xl mx-auto">
          <p className="text-sm text-[#FAF7F2]/90 font-light">
            {lang === 'af'
              ? '✨ Elke transformasie word voorafgegaan deur ’n deeglike konsultasie en haaranalise om die beste gesondheid en glans vir jou hare te verseker.'
              : '✨ Every transformation begins with a personalized consultation and strand analysis to protect hair health and lock in high-gloss shine.'}
          </p>
        </div>

      </div>

      {/* Detail Modal for High-Resolution Image Inspection */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-[#072929] border-2 border-[#C5A059] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 text-white space-y-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal View Selector */}
            <div className="flex items-center gap-2 pt-1 pb-1">
              <span className="text-xs text-[#FAF7F2]/70 font-medium">
                {lang === 'af' ? 'Aansig:' : 'View:'}
              </span>
              <div className="flex items-center gap-1 bg-[#041818] p-1 rounded-lg border border-[#C5A059]/40 text-xs">
                <button
                  type="button"
                  onClick={() => setModalView('split')}
                  className={`px-3 py-1 rounded font-medium cursor-pointer ${
                    modalView === 'split' ? 'bg-[#C5A059] text-[#041818] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {lang === 'af' ? 'Sy-aan-Sy' : 'Side-by-Side'}
                </button>
                <button
                  type="button"
                  onClick={() => setModalView('before')}
                  className={`px-3 py-1 rounded font-medium cursor-pointer ${
                    modalView === 'before' ? 'bg-[#C5A059] text-[#041818] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {lang === 'af' ? 'Voor' : 'Before'}
                </button>
                <button
                  type="button"
                  onClick={() => setModalView('after')}
                  className={`px-3 py-1 rounded font-medium cursor-pointer ${
                    modalView === 'after' ? 'bg-[#C5A059] text-[#041818] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {lang === 'af' ? 'Na' : 'After'}
                </button>
              </div>
            </div>

            {/* Modal Image Container */}
            <div className="w-full rounded-xl overflow-hidden border border-[#C5A059]/40 bg-[#041818] min-h-[300px]">
              {modalView === 'split' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A059]/40">
                  <div className="relative p-2 bg-black/40 flex flex-col items-center">
                    <div className="text-xs font-bold text-red-300 pb-2">VOOR / BEFORE</div>
                    <img
                      src={activeModalItem.beforeImageSrc || activeModalItem.imageSrc}
                      alt="Before Transformation"
                      className="max-h-[380px] w-auto object-contain rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative p-2 bg-black/40 flex flex-col items-center">
                    <div className="text-xs font-bold text-[#F3E3B5] pb-2">NA / AFTER</div>
                    <img
                      src={activeModalItem.afterImageSrc || activeModalItem.imageSrc}
                      alt="After Transformation"
                      className="max-h-[380px] w-auto object-contain rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              )}

              {modalView === 'before' && (
                <div className="p-4 flex flex-col items-center">
                  <span className="text-xs font-bold text-red-300 pb-2">VOOR / BEFORE</span>
                  <img
                    src={activeModalItem.beforeImageSrc || activeModalItem.imageSrc}
                    alt="Before View"
                    className="max-h-[460px] w-auto object-contain rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {modalView === 'after' && (
                <div className="p-4 flex flex-col items-center">
                  <span className="text-xs font-bold text-[#F3E3B5] pb-2">NA / AFTER</span>
                  <img
                    src={activeModalItem.afterImageSrc || activeModalItem.imageSrc}
                    alt="After View"
                    className="max-h-[460px] w-auto object-contain rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            {/* Extra product preview if available (Work 3) */}
            {activeModalItem.productImageSrc && (
              <div className="flex items-center gap-3 bg-[#041818] p-3 rounded-xl border border-[#C5A059]/30">
                <img
                  src={activeModalItem.productImageSrc}
                  alt="Goldwell Elumen Product Bottle"
                  className="w-12 h-12 object-contain bg-white rounded p-1"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#E6CE8A] block">Goldwell Elumen VV@all</span>
                  <span className="text-white/70">
                    {lang === 'af'
                      ? 'Spesiale fisiese ioon-kleurformule vir intense violet sonder skade.'
                      : 'Special non-oxidative ionic pigment for high-intensity damage-free violet.'}
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-1">
              <h3 className="text-2xl font-serif font-bold text-white">
                {activeModalItem.title[lang]}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#041818] rounded-lg border border-red-400/20">
                <span className="font-bold text-red-300 block mb-1">VOOR / BEFORE:</span>
                <p className="text-white/80">{activeModalItem.beforeText[lang]}</p>
              </div>
              <div className="p-3 bg-[#0B4F4F] rounded-lg border border-[#C5A059]/40">
                <span className="font-bold text-[#F3E3B5] block mb-1">NA / AFTER:</span>
                <p className="text-white/90">{activeModalItem.afterText[lang]}</p>
              </div>
            </div>

            <div className="text-xs text-white/80 bg-[#093737] p-3 rounded-lg border border-[#C5A059]/30">
              <p className="text-[#E6CE8A] font-semibold mb-1">Formulering & Tegniek:</p>
              <p>{activeModalItem.formulaHighlight[lang]}</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  const title = activeModalItem.title[lang];
                  setActiveModalItem(null);
                  onOpenBooking(title);
                }}
                className="w-full py-3.5 rounded-full bg-[#C5A059] text-[#041818] font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-[#DFBD69] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {lang === 'af'
                    ? `Bespreek Hierdie Transformasie (${activeModalItem.title[lang]})`
                    : `Book This Transformation (${activeModalItem.title[lang]})`}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
