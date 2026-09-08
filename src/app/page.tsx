"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "@/components/ui/AnimatedText";
import InteractiveDotGrid from "@/components/ui/InteractiveDotGrid";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Image Pills Animation
      gsap.fromTo(".hero-pill",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", stagger: 0.2 }
      );
      
      // Card reveals
      gsap.utils.toArray(".reveal-card").forEach((card: any, i) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.5, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
      
      // Line reveals
      gsap.utils.toArray(".reveal-line").forEach((line: any) => {
        gsap.fromTo(line,
          { scaleX: 0, transformOrigin: "left center" },
          { 
            scaleX: 1, 
            duration: 1.5, 
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
            }
          }
        );
      });
      
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-white text-black font-light selection:bg-black selection:text-white">
      
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full px-6 lg:px-12 py-6 flex justify-between items-center z-50 text-white">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-full border-2 border-[#C59B63] flex items-center justify-center text-[#C59B63] font-bold text-xl shadow-[0_0_15px_rgba(197,155,99,0.2)]">S</div>
          <div>
            <div className="font-bold tracking-widest text-sm uppercase text-white leading-tight">Subashini Industries</div>
            <div className="text-[11px] text-[#C59B63] font-medium tracking-wide">Building Global. Empowering Lives.</div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-medium text-sm text-gray-200">
           <a href="#" className="text-white font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#C59B63]">Home</a>
           <a href="#" className="hover:text-[#C59B63] transition-colors">About Us</a>
           <a href="#" className="hover:text-[#C59B63] transition-colors">Businesses</a>
           <a href="#" className="hover:text-[#C59B63] transition-colors">Careers</a>
           <a href="#" className="hover:text-[#C59B63] transition-colors">Contact</a>
        </nav>

        <div className="w-11 h-11 bg-[#081320] border border-[#C59B63]/40 rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:border-[#C59B63] transition-colors shadow-md">
          <div className="w-5 h-[2px] bg-white"></div>
          <div className="w-5 h-[2px] bg-white"></div>
          <div className="w-5 h-[2px] bg-white"></div>
        </div>
      </header>

      {/* NEW PREMIUM HERO SECTION */}
      <section className="relative w-full min-h-screen bg-[#081320] text-white pt-28 lg:pt-32 pb-24 lg:pb-32 px-6 lg:px-12 flex flex-col justify-between overflow-hidden">
        
        {/* Background Decorative SVG World Map Pattern & Subtle Living Radial Glows */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Living Ambient Lighting Drift & Radial Gold Glow */}
          <div className="animate-ambient-drift absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[radial-gradient(circle,_rgba(197,155,99,0.16)_0%,_transparent_70%)] rounded-full blur-3xl"></div>
          <div className="animate-breathing-glow absolute -top-32 -left-32 w-[550px] h-[550px] bg-[radial-gradient(circle,_rgba(11,25,44,0.85)_0%,_transparent_70%)] rounded-full blur-2xl"></div>
          
          {/* Interactive Pulsating & Cursor-Responsive Dots Grid */}
          <InteractiveDotGrid gridSpacing={36} baseRadius={1.0} interactionRadius={140} />
          <div className="animate-map-sweep absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-[#C59B63]/10 to-transparent"></div>
          
          {/* Floating Gold Particles (Low Opacity Ambient Motion) */}
          <div className="animate-floating-particles absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-[#C59B63] rounded-full blur-[0.5px]"></div>
            <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-[#C59B63] rounded-full blur-[1px]"></div>
            <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-[#C59B63] rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#C59B63] rounded-full blur-[1px]"></div>
          </div>
          
          {/* Thin Gold Decorative Waves with Living Illumination */}
          <svg className="animate-line-illuminate absolute bottom-0 left-0 w-full h-[350px] opacity-25" viewBox="0 0 1440 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 250 C 300 320, 700 150, 1540 280" stroke="#C59B63" strokeWidth="1.5" fill="none"/>
            <path d="M-100 280 C 400 350, 800 180, 1540 310" stroke="#C59B63" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
            <path d="M-100 220 C 250 280, 650 120, 1540 250" stroke="#C59B63" strokeWidth="0.75" fill="none"/>
          </svg>
        </div>

        {/* Main Content & Visuals (Two-Column 50/50 Split) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-6">
            
            {/* Label with Gold Accent Line */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#C59B63]"></span>
              <span className="text-[#C59B63] text-xs lg:text-sm tracking-[0.25em] font-semibold uppercase">WELCOME TO SUBASHINI INDUSTRIES</span>
            </div>

            {/* Large Bold Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white block">Empowering Businesses.</span>
              <span className="text-[#C59B63] block mt-1">Enriching Lives.</span>
            </h1>

            {/* Subtle Gold Divider */}
            <div className="w-16 h-[2px] bg-[#C59B63]/60 mb-6"></div>

            {/* Supporting Paragraph */}
            <p className="text-gray-300 text-base lg:text-lg font-light max-w-lg leading-relaxed mb-10">
              An enterprise-scale corporate group operating global export systems, modern supermarkets, and premium tower rental rooms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary Button */}
              <a href="#businesses" className="group relative overflow-hidden px-7 py-4 bg-gradient-to-r from-[#C59B63] to-[#A37B44] text-white text-xs lg:text-sm font-semibold tracking-wider uppercase rounded-xl shadow-[0_10px_25px_rgba(197,155,99,0.25)] hover:shadow-[0_15px_35px_rgba(197,155,99,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3">
                <span className="animate-glass-shimmer absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></span>
                <span className="relative z-10">Explore Businesses</span>
                <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Secondary Button */}
              <a href="#contact" className="group px-7 py-4 bg-transparent border border-[#C59B63]/80 text-white hover:bg-white hover:text-[#081320] text-xs lg:text-sm font-semibold tracking-wider uppercase rounded-xl transition-all duration-300 flex items-center gap-3 hover:-translate-y-0.5">
                <span>Contact Us</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right Visuals Column (Three Vertical Business Cards) */}
          <div className="lg:col-span-6 flex justify-center items-center gap-3 sm:gap-5 w-full">
            
            {/* Card 1: Global Exports */}
            <div className="hero-pill flex-1 h-[390px] sm:h-[430px] lg:h-[450px] rounded-[28px] sm:rounded-[32px] overflow-hidden relative border border-white/15 shadow-2xl group transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
              <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" alt="Global Exports" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081320] via-[#081320]/65 to-black/30 z-10"></div>
              
              {/* Glass Shimmer Light Streak */}
              <div className="animate-glass-shimmer absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-15"></div>

              <div className="absolute inset-0 z-20 p-5 sm:p-6 flex flex-col justify-end items-center text-center">
                {/* Gold Circular Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#C59B63]/80 bg-[#081320]/75 backdrop-blur-md flex items-center justify-center text-[#C59B63] mb-4 shadow-lg group-hover:border-[#C59B63] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18l3 1.5 6-1.5 6 1.5 3-1.5M3 12l3 1.5 6-1.5 6 1.5 3-1.5M3 6l3 1.5 6-1.5 6 1.5 3-1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12L12 3L5 12" />
                  </svg>
                </div>
                {/* Title */}
                <div className="mb-2">
                  <div className="text-white font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">GLOBAL</div>
                  <div className="text-[#C59B63] font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">EXPORTS</div>
                </div>
                {/* Gold Accent Line */}
                <div className="w-6 h-[1.5px] bg-[#C59B63]/60 mb-2"></div>
                {/* Description */}
                <p className="text-[11px] sm:text-xs text-gray-300 font-light leading-snug max-w-[140px]">
                  Delivering quality products worldwide.
                </p>
              </div>
            </div>

            {/* Card 2: Tower Rentals (TALLER for visual hierarchy) */}
            <div className="hero-pill flex-1 h-[430px] sm:h-[475px] lg:h-[500px] -translate-y-3 lg:-translate-y-4 rounded-[28px] sm:rounded-[32px] overflow-hidden relative border border-[#C59B63]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transition-all duration-500 hover:-translate-y-6 hover:scale-[1.02] cursor-pointer">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Tower Rentals" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081320] via-[#081320]/55 to-black/20 z-10"></div>
              
              {/* Glass Shimmer Light Streak */}
              <div className="animate-glass-shimmer absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-15" style={{ animationDelay: '3s' }}></div>

              <div className="absolute inset-0 z-20 p-5 sm:p-6 flex flex-col justify-end items-center text-center">
                {/* Gold Circular Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#C59B63] bg-[#081320]/80 backdrop-blur-md flex items-center justify-center text-[#C59B63] mb-4 shadow-lg shadow-[#C59B63]/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                  </svg>
                </div>
                {/* Title */}
                <div className="mb-2">
                  <div className="text-white font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">TOWER</div>
                  <div className="text-[#C59B63] font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">RENTALS</div>
                </div>
                {/* Gold Accent Line */}
                <div className="w-6 h-[1.5px] bg-[#C59B63]/60 mb-2"></div>
                {/* Description */}
                <p className="text-[11px] sm:text-xs text-gray-300 font-light leading-snug max-w-[140px]">
                  Premium spaces for modern lifestyles.
                </p>
              </div>
            </div>

            {/* Card 3: Modern Retail */}
            <div className="hero-pill flex-1 h-[390px] sm:h-[430px] lg:h-[450px] rounded-[28px] sm:rounded-[32px] overflow-hidden relative border border-white/15 shadow-2xl group transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" alt="Modern Retail" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081320] via-[#081320]/65 to-black/30 z-10"></div>
              
              {/* Glass Shimmer Light Streak */}
              <div className="animate-glass-shimmer absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-15" style={{ animationDelay: '6s' }}></div>

              <div className="absolute inset-0 z-20 p-5 sm:p-6 flex flex-col justify-end items-center text-center">
                {/* Gold Circular Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#C59B63]/80 bg-[#081320]/75 backdrop-blur-md flex items-center justify-center text-[#C59B63] mb-4 shadow-lg group-hover:border-[#C59B63] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                {/* Title */}
                <div className="mb-2">
                  <div className="text-white font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">MODERN</div>
                  <div className="text-[#C59B63] font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">RETAIL</div>
                </div>
                {/* Gold Accent Line */}
                <div className="w-6 h-[1.5px] bg-[#C59B63]/60 mb-2"></div>
                {/* Description */}
                <p className="text-[11px] sm:text-xs text-gray-300 font-light leading-snug max-w-[140px]">
                  Redefining shopping with quality & trust.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Floating White Stats Bar (Overlapping Bottom of Hero) */}
        <div className="relative z-30 max-w-6xl mx-auto w-full mt-12 lg:mt-16 bg-white rounded-3xl lg:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center border border-gray-100 text-black">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 relative pr-2 md:border-r md:border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#081320] text-[#C59B63] flex items-center justify-center shrink-0 border border-[#C59B63]/40 shadow-md">
              <svg className="w-6 h-6 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-5-8h10a3 3 0 003-3V5H4v5a3 3 0 003 3zM4 5h-1a2 2 0 00-2 2v2a2 2 0 002 2h1m16-6h1a2 2 0 012 2v2a2 2 0 01-2 2h-1" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#081320]">25+</div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Years of<br/>Excellence</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 relative pr-2 md:border-r md:border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#081320] text-[#C59B63] flex items-center justify-center shrink-0 border border-[#C59B63]/40 shadow-md">
              <svg className="w-6 h-6 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#081320]">50+</div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Countries<br/>Worldwide</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 relative pr-2 md:border-r md:border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#081320] text-[#C59B63] flex items-center justify-center shrink-0 border border-[#C59B63]/40 shadow-md">
              <svg className="w-6 h-6 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#081320]">1000+</div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Happy<br/>Clients</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#081320] text-[#C59B63] flex items-center justify-center shrink-0 border border-[#C59B63]/40 shadow-md">
              <svg className="w-6 h-6 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#081320]">Trusted</div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">Commitment to<br/>Quality</div>
            </div>
          </div>

        </div>

      </section>

      {/* ABOUT SECTION - EDITORIAL ENTERPRISE REDESIGN */}
      <section className="relative w-full pt-16 pb-12 lg:pt-24 lg:pb-16 px-6 lg:px-12 bg-gradient-to-b from-[#FAFAF9] via-white to-[#FAFAF9] text-black overflow-hidden">
        
        {/* Subtle Ambient Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Extremely Subtle Geometric Grid Pattern (2-3% opacity) */}
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(#000000 1.2px, transparent 1.2px)`, backgroundSize: '32px 32px' }}></div>
          
          {/* Soft Floating Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(197,155,99,0.06)_0%,_transparent_70%)] rounded-full blur-3xl pointer-events-none"></div>

          {/* Corner Decorative Dots */}
          <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-[#C59B63]/30"></div>
          <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#C59B63]/30"></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-[#C59B63]/30"></div>
          <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-[#C59B63]/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Divider (Preserving reveal-line GSAP animation) */}
          <div className="reveal-line w-full h-[1px] bg-gradient-to-r from-transparent via-[#C59B63]/40 to-transparent mb-10 lg:mb-14"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
             {/* Left Column: Premium Section Indicator */}
             <div className="lg:col-span-4 flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-[2px] bg-[#C59B63]"></span>
                  <span className="text-xs font-semibold tracking-[0.35em] text-[#C59B63] uppercase">ABOUT US</span>
                </div>
                <div className="text-gray-400 text-[11px] font-mono tracking-[0.2em] uppercase pl-13">
                  Enterprise Excellence
                </div>
                <div className="w-12 h-[1px] bg-gray-200 mt-4 hidden lg:block"></div>
             </div>

             {/* Right Column: Editorial Headline (Preserving AnimatedText Component & Timeline) */}
             <div className="lg:col-span-8 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C59B63]/5 rounded-full blur-2xl pointer-events-none"></div>
                <AnimatedText 
                  text="We are an enterprise-driven group structured for scale. We build massive export systems, operate comprehensive supermarket networks, and provide premium tower rental spaces for modern living and business."
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-[1.2] font-semibold tracking-tight text-gray-900 max-w-4xl"
                />
             </div>
          </div>

          {/* Bottom Accent Line (Preserving reveal-line GSAP animation) */}
          <div className="reveal-line w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-10 lg:mt-14"></div>
        </div>

      </section>

      {/* BUSINESS DIVISIONS (DARK SECTION - LIVING AMBIENT SYSTEM) */}
      <section className="relative w-full pt-16 pb-28 lg:pt-20 lg:pb-32 px-8 bg-black text-white overflow-hidden">
        
        {/* Living Background Ambient System */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <InteractiveDotGrid gridSpacing={38} baseRadius={1.0} interactionRadius={140} />
          <div className="animate-ambient-drift-reverse absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(197,155,99,0.1)_0%,_transparent_70%)] rounded-full blur-3xl"></div>
          <div className="animate-floating-particles-slow absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#C59B63] rounded-full blur-[0.5px]"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#C59B63] rounded-full blur-[1px]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
             <div className="md:col-span-4">
                <h2 className="text-sm font-semibold tracking-widest uppercase mb-4 text-white/50">Our Divisions</h2>
             </div>
             <div className="md:col-span-8">
                <AnimatedText 
                  text="Three pillars of excellence. One unified vision."
                  className="text-4xl md:text-6xl leading-tight font-medium tracking-tight"
                />
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Enterprise Export System", num: "01", desc: "Global logistics, enterprise trade, and massive export systems.", img: "/export-system.png" },
              { name: "Geenz Supermarket", num: "02", desc: "Premium modern retail and large-scale supermarket operations.", img: "/geenz-supermarket.png" },
              { name: "Subashini Tower", num: "03", desc: "Premium tower offering luxury rental rooms and commercial spaces.", img: "/subashini-tower.png" }
            ].map((div, i) => (
              <div key={i} className="reveal-card group cursor-pointer relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-[#C59B63]/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-full aspect-[4/5] bg-white/5 relative overflow-hidden group-hover:bg-white/10 transition-colors duration-500 flex items-center justify-center">
                   <img 
                     src={div.img} 
                     alt={div.name} 
                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                   <div className="animate-glass-shimmer absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10" style={{ animationDelay: `${i * 4}s` }}></div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="text-xl font-medium text-white group-hover:text-[#C59B63] transition-colors">{div.name}</h3>
                    <span className="text-[#C59B63] text-sm font-mono">{div.num}</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/20 mb-3 group-hover:bg-[#C59B63] transition-colors duration-500"></div>
                  <p className="text-white/70 font-light text-sm">{div.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="w-full py-20 lg:py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-sm font-semibold tracking-widest uppercase mb-12 lg:mb-16 text-black/50 text-center">Core Values</h2>
        <div className="flex flex-col">
           {['Enterprise Scale', 'Retail Excellence', 'Premium Living Spaces', 'Global Trade Connectivity'].map((value, i) => (
             <div key={i} className="group">
               <div className="reveal-line w-full h-[1px] bg-black/20"></div>
               <div className="py-8 lg:py-10 flex justify-between items-center px-4 hover:px-8 transition-all duration-500 cursor-pointer">
                 <h3 className="text-3xl md:text-5xl font-medium tracking-tight group-hover:text-gray-500 transition-colors">{value}</h3>
                 <span className="text-lg text-black/30 font-mono">0{i+1}</span>
               </div>
             </div>
           ))}
           <div className="reveal-line w-full h-[1px] bg-black/20"></div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="w-full py-16 lg:py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
           {[
             { num: "35+", label: "Years of Experience" },
             { num: "50", label: "Export Countries" },
             { num: "03", label: "Business Divisions" },
             { num: "1M+", label: "Trusted Clients" }
           ].map((stat, i) => (
             <div key={i} className="reveal-card">
               <div className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-4">{stat.num}</div>
               <div className="text-xs md:text-sm font-medium uppercase tracking-widest text-black/50">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full py-20 lg:py-24 px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
        <div className="reveal-line w-[1px] h-16 lg:h-20 bg-black/20 mb-10 lg:mb-12 mx-auto"></div>
        <AnimatedText 
          text="Let's Build the Future Together."
          className="text-4xl md:text-6xl lg:text-7xl leading-tight font-medium tracking-tight mb-12 justify-center"
        />
        <button className="px-10 py-5 bg-black text-white text-sm font-medium rounded-none hover:bg-gray-800 hover:scale-105 transition-all duration-500">
          Contact Our Team
        </button>
      </section>

      {/* FOOTER (DARK SECTION - LIVING AMBIENT SYSTEM) */}
      <footer className="relative w-full bg-black text-white py-16 px-8 overflow-hidden">
        
        {/* Living Background Ambient System */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <InteractiveDotGrid gridSpacing={40} baseRadius={1.0} interactionRadius={140} />
          <div className="animate-breathing-glow absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(197,155,99,0.08)_0%,_transparent_70%)] rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
          <div className="mb-12 md:mb-0">
             <div className="text-3xl font-semibold tracking-tighter mb-2">SUBASHINI INDUSTRIES</div>
             <div className="text-white/40 text-sm font-light">Global Corporate Group</div>
          </div>
          <div className="flex gap-16 text-sm font-light text-white/60">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">Enterprise Export System</a>
              <a href="#" className="hover:text-white transition-colors">Geenz Supermarket</a>
              <a href="#" className="hover:text-white transition-colors">Tower Rental Rooms</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto mt-24 pt-8 border-t border-white/20 flex justify-between text-xs font-light text-white/40">
          <div>© 2026 Subashini Industries. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
