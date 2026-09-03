import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Phone, Sparkles, MapPin, Award, ShieldCheck, Heart, ChevronDown, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Language } from '../types';
import { salonAssets, salonContact } from '../data/salonData';
import { SparkleCanvas } from './SparkleCanvas';

interface HeroVideoSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export function HeroVideoSection({ lang, onOpenBooking }: HeroVideoSectionProps) {
  const [sparklesActive, setSparklesActive] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser policy without user interaction if unmuted
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#041818] pt-20 pb-12 lg:py-24">
      {/* Background Media Container: HTML5 Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={salonAssets.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-102"
        />

        {/* Dreamy Gradient Overlays for optimal readability and luxury atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041818]/92 via-[#072929]/75 to-[#041818]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#041818]/70" />
        
        {/* Subtle Boho Mandala & Feather Glow Effect */}
        <div
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#C5A059]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -left-20 bottom-10 w-96 h-96 rounded-full bg-[#0B4F4F]/40 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Floating Gold Sparkles Particle Canvas (Inspired by the Video's floating sparkles) */}
      {sparklesActive && <SparkleCanvas className="opacity-75" />}

      {/* Video Controls Pill in Top-Right / Bottom-Right */}
      <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center gap-2 bg-[#041818]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C5A059]/40 shadow-lg text-xs text-[#FAF7F2]">
        <button
          type="button"
          onClick={togglePlay}
          className="hover:text-[#C5A059] flex items-center gap-1.5 cursor-pointer transition-colors"
          title={isPlaying ? 'Pouseer Video' : 'Speel Video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isPlaying ? (lang === 'af' ? 'Pouseer' : 'Pause') : (lang === 'af' ? 'Speel' : 'Play')}</span>
        </button>
        <span className="w-px h-3.5 bg-[#C5A059]/40" />
        <button
          type="button"
          onClick={toggleMute}
          className="hover:text-[#C5A059] flex items-center gap-1.5 cursor-pointer transition-colors"
          title={isMuted ? 'Klank Aan' : 'Demp Klank'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isMuted ? (lang === 'af' ? 'Gedemp' : 'Muted') : (lang === 'af' ? 'Klank' : 'Sound')}</span>
        </button>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Top Badge: Bohemian Dreamy Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B4F4F]/90 border border-[#C5A059]/50 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F3E3B5] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#F3E3B5]">
              {lang === 'af'
                ? 'Dromerige Haarsalon Ervaring • Mosselbaai'
                : 'Dreamy Luxury Hair Salon Experience • Mossel Bay'}
            </span>
          </div>

          {/* Main Title with Calligraphic Signature Script */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.1]">
              <span className="block font-serif font-light text-[#F3E3B5]">
                {lang === 'af' ? 'Pragtige, Selfversekerde Hare' : 'Beautiful, Confident Hair'}
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-sans font-normal text-[#E6CE8A] mt-1">
                Surika Haarstilis & Kleurspesialis
              </span>
            </h1>

            {/* Reflexions Salon Location Accent */}
            <div className="flex items-center gap-2 text-sm sm:text-base text-white/80 font-light pt-1">
              <span className="text-[#C5A059] font-medium">@ Reflexions Salon</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                Oostville Sentrum, Voorbaai, Mosselbaai
              </span>
            </div>
          </div>

          {/* Business Core Tagline (Directly from user request) */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FAF7F2]/90 font-light leading-relaxed max-w-2xl border-l-2 border-[#C5A059] pl-4 sm:pl-5 bg-[#072929]/30 py-1 rounded-r-lg">
            {lang === 'af' ? salonContact.taglineAfrikaans : salonContact.taglineEnglish}
          </p>

          {/* Key Trust Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
            <div className="flex items-center gap-2 bg-[#0B4F4F]/60 border border-[#C5A059]/30 rounded-lg p-2.5 backdrop-blur-xs">
              <Award className="w-4 h-4 text-[#C5A059] shrink-0" />
              <div className="text-xs">
                <span className="block font-semibold text-white">Goldwell Master</span>
                <span className="text-[#FAF7F2]/70">SilkLift & Elumen</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#0B4F4F]/60 border border-[#C5A059]/30 rounded-lg p-2.5 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <div className="text-xs">
                <span className="block font-semibold text-white">Persoonlike Diens</span>
                <span className="text-[#FAF7F2]/70">{lang === 'af' ? '1-tot-1 Aandag' : '1-on-1 Attention'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#0B4F4F]/60 border border-[#C5A059]/30 rounded-lg p-2.5 backdrop-blur-xs col-span-2 sm:col-span-1">
              <Heart className="w-4 h-4 text-[#C5A059] shrink-0" />
              <div className="text-xs">
                <span className="block font-semibold text-white">Mosselbaai Plaaslik</span>
                <span className="text-[#FAF7F2]/70">Gratis Parkering</span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#C5A059] via-[#DFBD69] to-[#C5A059] hover:from-[#B38C44] hover:to-[#B38C44] text-[#041818] font-bold px-7 py-3.5 rounded-full text-sm sm:text-base tracking-wide shadow-xl hover:shadow-[#C5A059]/30 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-[#041818]" />
              <span>{lang === 'af' ? 'Maak Afspraak op WhatsApp' : 'Book via WhatsApp'}</span>
            </button>

            <a
              href="#transformasies"
              className="flex items-center justify-center gap-2 bg-[#072929]/80 hover:bg-[#0B4F4F] text-white border border-[#C5A059]/60 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#E6CE8A]" />
              <span>{lang === 'af' ? 'Sien Voor & Na Werke' : 'See Before & After'}</span>
            </a>

            <a
              href={`tel:${salonContact.phoneClean}`}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#F3E3B5] hover:text-white px-3 py-2 text-center"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{salonContact.phone}</span>
            </a>
          </div>

          {/* Sparkle Control & Mobile Friendly Notification */}
          <div className="pt-2 flex items-center justify-between text-xs text-white/50">
            <span>
              {lang === 'af'
                ? 'Geïnspireer deur die salon landing video met dromerige goue vonke'
                : 'Inspired by the salon video with dreamy floating golden sparkles'}
            </span>
            <button
              type="button"
              onClick={() => setSparklesActive(!sparklesActive)}
              className="underline text-white/70 hover:text-[#C5A059] cursor-pointer"
            >
              {sparklesActive
                ? (lang === 'af' ? 'Vonke Af' : 'Sparkles Off')
                : (lang === 'af' ? 'Vonke Aan' : 'Sparkles On')}
            </button>
          </div>
        </div>
      </div>

      {/* Down Arrow for Smooth Scroll */}
      <a
        href="#specials"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[#FAF7F2]/60 hover:text-[#C5A059] flex flex-col items-center gap-1 transition-colors group"
        aria-label="Scroll down to specials"
      >
        <span className="text-[11px] uppercase tracking-widest text-[#E6CE8A]">
          {lang === 'af' ? 'Ontdek' : 'Explore'}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#C5A059]" />
      </a>
    </section>
  );
}
