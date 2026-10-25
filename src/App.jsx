import { useEffect, useState } from 'react'
import './index.css'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#quality', label: 'Quality' },
    { href: '#contact', label: 'Contact' },
    { href: '#booking', label: 'Book Consultation', cta: true },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex xl:grid xl:grid-cols-[1fr_auto_1fr] items-center justify-between gap-6 h-20">
          <a href="#home" className="font-display text-lg sm:text-2xl font-bold text-earth-900 flex items-center gap-3 leading-tight justify-self-start" aria-label="GreenHarvest Exports Home">
            <svg className="w-10 h-10 shrink-0 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            GreenHarvest Exports
          </a>

          <div className="hidden xl:flex items-center justify-center gap-8">
            {navLinks.filter((link) => !link.cta).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-earth-600 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#booking" className="btn-primary hidden xl:inline-flex justify-self-end text-sm whitespace-nowrap">Book Consultation</a>

          <div className="xl:hidden flex items-center gap-4 shrink-0">
            <a href="#booking" className="btn-primary text-sm py-2 px-4 hidden sm:block">Book Consultation</a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-earth-600 hover:text-primary-600 p-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="xl:hidden py-4 border-t border-earth-200 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={link.cta ? 'btn-primary text-center mt-2' : 'text-earth-600 hover:text-primary-600 font-medium py-2'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-28 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-earth-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2322c55e%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Trusted by 500+ Global Buyers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-earth-900 leading-[1.1] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <span className="lg:block">Premium</span>{' '}
              <span className="lg:block">Agricultural</span>{' '}
              <span className="lg:block">Exports</span>
              <br className="lg:hidden" />
              <span className="text-primary-600"><span className="lg:block">Delivered</span>{' '}<span className="lg:block">Worldwide</span></span>
            </h1>

            <p className="text-lg sm:text-xl text-earth-600 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              From farm to global markets — we source, process, and export the finest spices, grains, coffee, and specialty foods with uncompromising quality and traceability.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a href="#booking" className="btn-primary text-lg px-8 py-4">
                Book Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#products" className="btn-secondary text-lg px-8 py-4">
                Explore Products
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 mt-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-earth-900">50+</p>
                  <p className="text-sm text-earth-500">Countries Served</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-earth-900">ISO/HACCP</p>
                  <p className="text-sm text-earth-500">Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-earth-900">99.2%</p>
                  <p className="text-sm text-earth-500">On-Time Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-earth-900">24/7</p>
                  <p className="text-sm text-earth-500">Dedicated Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[90%] lg:justify-self-end lg:mt-12 animate-fade-in-right" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-primary-50 rounded-3xl blur-2xl opacity-50" aria-hidden="true" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-earth-200">
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-earth-50">
                  {/* World Map with Trade Routes */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#dcfce7" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0.1"/>
                      </linearGradient>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#16a34a"/>
                        <stop offset="50%" stopColor="#22c55e"/>
                        <stop offset="100%" stopColor="#4ade80"/>
                      </linearGradient>
                      <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="1"/>
                        <stop offset="70%" stopColor="#16a34a" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#16a34a" stopOpacity="0"/>
                      </radialGradient>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Ocean background */}
                    <rect width="800" height="600" fill="url(#oceanGradient)"/>

                    {/* Simplified world map continents */}
                    <g fill="#86efac" fillOpacity="0.25" stroke="#86efac" strokeOpacity="0.4" strokeWidth="0.5">
                      {/* North America */}
                      <path d="M80,120 Q100,100 140,110 Q160,130 150,170 Q140,190 110,200 Q70,190 50,160 Q30,130 60,110 Q70,100 80,120"/>
                      {/* South America */}
                      <path d="M110,200 Q120,220 100,260 Q90,280 110,300 Q130,290 140,250 Q130,220 110,200"/>
                      {/* Europe */}
                      <path d="M320,80 Q350,70 380,80 Q400,85 395,110 Q390,130 360,125 Q340,120 320,90 Q310,75 320,80"/>
                      {/* Africa */}
                      <path d="M340,130 Q360,125 380,140 Q390,180 370,220 Q350,240 320,230 Q300,210 310,170 Q320,140 340,130"/>
                      {/* Asia */}
                      <path d="M400,70 Q450,60 500,75 Q530,80 540,110 Q550,150 520,180 Q500,200 480,190 Q450,180 420,160 Q400,130 400,70"/>
                      {/* India */}
                      <path d="M460,160 Q480,155 490,175 Q485,200 460,205 Q440,200 445,175 Q450,155 460,160"/>
                      {/* Southeast Asia */}
                      <path d="M500,180 Q520,175 530,195 Q520,220 500,225 Q480,220 485,195 Q490,175 500,180"/>
                      {/* Australia */}
                      <path d="M530,260 Q560,250 580,270 Q575,290 550,300 Q530,290 520,270 Q525,255 530,260"/>
                    </g>

                    {/* Trade Routes - Animated curved lines */}
                    <g stroke="url(#routeGradient)" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="10,10">
                      {/* Americas to Europe */}
                      <path d="M140,140 Q230,90 320,100">
                        <animate attributeName="strokeDashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
                      </path>
                      {/* Americas to Asia */}
                      <path d="M130,180 Q200,160 280,160 Q350,155 420,160">
                        <animate attributeName="strokeDashoffset" values="0;-20" dur="2.5s" repeatCount="indefinite"/>
                      </path>
                      {/* Africa to Europe */}
                      <path d="M340,180 Q340,140 350,110">
                        <animate attributeName="strokeDashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite"/>
                      </path>
                      {/* Asia to Europe */}
                      <path d="M420,130 Q380,110 350,105">
                        <animate attributeName="strokeDashoffset" values="0;-20" dur="1.8s" repeatCount="indefinite"/>
                      </path>
                      {/* Asia to Middle East */}
                      <path d="M460,160 Q440,140 400,140">
                        <animate attributeName="strokeDashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite"/>
                      </path>
                      {/* Australia to Asia */}
                      <path d="M550,270 Q530,230 500,200">
                        <animate attributeName="strokeDashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
                      </path>
                      {/* South America to Africa */}
                      <path d="M110,260 Q200,220 300,200">
                        <animate attributeName="strokeDashoffset" values="0;-20" dur="3s" repeatCount="indefinite"/>
                      </path>
                    </g>

                    {/* Shipment pulses moving along routes */}
                    <g filter="url(#glow)">
                      {/* Pulse 1: Americas to Europe */}
                      <circle r="4" fill="url(#pulseGradient)">
                        <animateMotion path="M140,140 Q230,90 320,100" dur="4s" repeatCount="indefinite" rotate="auto"/>
                        <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
                      </circle>
                      {/* Pulse 2: Americas to Asia */}
                      <circle r="4" fill="url(#pulseGradient)">
                        <animateMotion path="M130,180 Q200,160 280,160 Q350,155 420,160" dur="5s" repeatCount="indefinite" rotate="auto"/>
                        <animate attributeName="r" values="3;5;3" dur="5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"/>
                      </circle>
                      {/* Pulse 3: Africa to Europe */}
                      <circle r="3" fill="url(#pulseGradient)">
                        <animateMotion path="M340,180 Q340,140 350,110" dur="3s" repeatCount="indefinite" rotate="auto"/>
                        <animate attributeName="r" values="2;5;2" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      {/* Pulse 4: Asia to Europe */}
                      <circle r="3" fill="url(#pulseGradient)">
                        <animateMotion path="M420,130 Q380,110 350,105" dur="3.5s" repeatCount="indefinite" rotate="auto"/>
                        <animate attributeName="r" values="2;5;2" dur="3.5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite"/>
                      </circle>
                      {/* Pulse 5: Australia to Asia */}
                      <circle r="3" fill="url(#pulseGradient)">
                        <animateMotion path="M550,270 Q530,230 500,200" dur="4s" repeatCount="indefinite" rotate="auto"/>
                        <animate attributeName="r" values="2;5;2" dur="4s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
                      </circle>
                      {/* Pulse 6: South America to Africa */}
                      <circle r="4" fill="url(#pulseGradient)">
                        <animateMotion path="M110,260 Q200,220 300,200" dur="5s" repeatCount="indefinite" rotate="auto"/>
                        <animate attributeName="r" values="3;6;3" dur="5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"/>
                      </circle>
                    </g>

                    {/* Origin/Destination markers - Pulsing dots at key locations */}
                    <g>
                      {/* Major ports/origins */}
                      <circle cx="120" cy="150" r="5" fill="#16a34a" opacity="0.8">
                        <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="100" cy="250" r="4" fill="#22c55e" opacity="0.8">
                        <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="350" cy="100" r="5" fill="#16a34a" opacity="0.8">
                        <animate attributeName="r" values="5;8;5" dur="1.8s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="350" cy="200" r="4" fill="#22c55e" opacity="0.8">
                        <animate attributeName="r" values="4;7;4" dur="2.2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="450" cy="130" r="5" fill="#16a34a" opacity="0.8">
                        <animate attributeName="r" values="5;8;5" dur="2.1s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="520" cy="170" r="4" fill="#22c55e" opacity="0.8">
                        <animate attributeName="r" values="4;7;4" dur="2.3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="550" cy="280" r="4" fill="#22c55e" opacity="0.8">
                        <animate attributeName="r" values="4;7;4" dur="2.4s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite"/>
                      </circle>
                    </g>
                  </svg>

                  {/* Overlay labels */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 text-xs font-medium text-primary-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">Los Angeles</div>
                    <div className="absolute top-16 left-2 text-xs font-medium text-primary-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">Santos</div>
                    <div className="absolute top-6 left-40 text-xs font-medium text-primary-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">Rotterdam</div>
                    <div className="absolute top-24 left-44 text-xs font-medium text-primary-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">Mombasa</div>
                    <div className="absolute top-10 right-20 text-xs font-medium text-primary-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">Singapore</div>
                    <div className="absolute top-16 right-8 text-xs font-medium text-primary-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">Shanghai</div>
                    <div className="absolute bottom-12 right-4 text-xs font-medium text-primary-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm">Melbourne</div>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-center gap-4 md:justify-between">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-earth-200 flex items-center gap-3 min-w-[160px]">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-earth-900">50+</p>
                        <p className="text-xs text-earth-500">Active Trade Routes</p>
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-earth-200 flex items-center gap-3 min-w-[160px]">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-earth-900">1,200+</p>
                        <p className="text-xs text-earth-500">Shipments/Month</p>
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-earth-200 flex items-center gap-3 min-w-[160px]">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-earth-900">99.2%</p>
                        <p className="text-xs text-earth-500">On-Time Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About GreenHarvest" className="absolute bottom-2 left-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full text-earth-400 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 motion-safe:animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}

function About() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Direct Farm Sourcing',
      description: 'We work directly with 2,000+ certified farmers across 12 countries, ensuring fair prices and full traceability from seed to shipment.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Rigorous Quality Control',
      description: 'Multi-stage testing at ISO 17025 accredited labs. Every batch tested for purity, contaminants, moisture, and microbiological safety.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Regulatory Compliance',
      description: 'Full documentation for EU, US FDA, CFIA, and GCC imports. We handle phytosanitary certificates, COAs, and customs paperwork.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Dedicated Account Management',
      description: 'Each client gets a dedicated export specialist managing orders, logistics, documentation, and market intelligence 24/7.'
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-medium text-sm tracking-wider uppercase mb-3">About GreenHarvest Exports</p>
          <h2 className="section-title">Your Trusted Partner in Global Food Trade</h2>
          <p className="section-subtitle mx-auto">
            Founded in 2009, we've built a reputation for reliability, transparency, and excellence in agricultural exports.
            Our mission: connect the world's best farms with discerning buyers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-earth-900 mb-2">{feature.title}</h3>
              <p className="text-earth-600 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Products() {
  const categories = [
    {
      name: 'Spices & Herbs',
      items: ['Turmeric', 'Cumin', 'Coriander', 'Cardamom', 'Black Pepper', 'Cloves', 'Cinnamon', 'Ginger'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
      color: 'bg-amber-100 text-amber-700',
      bgColor: 'from-amber-50 to-amber-100',
    },
    {
      name: 'Grains & Pulses',
      items: ['Basmati Rice', 'Wheat', 'Chickpeas', 'Lentils', 'Mung Beans', 'Quinoa', 'Millet', 'Sorghum'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: 'bg-yellow-100 text-yellow-700',
      bgColor: 'from-yellow-50 to-yellow-100',
    },
    {
      name: 'Coffee & Tea',
      items: ['Arabica Coffee', 'Robusta Coffee', 'Black Tea', 'Green Tea', 'Herbal Tea', 'Matcha', 'Rooibos', 'Yerba Mate'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-orange-100 text-orange-700',
      bgColor: 'from-orange-50 to-orange-100',
    },
    {
      name: 'Specialty Foods',
      items: ['Dried Fruits', 'Nuts & Seeds', 'Cold-Pressed Oils', 'Honey', 'Superfoods', 'Organic Snacks', 'Plant Proteins', 'Functional Ingredients'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'bg-emerald-100 text-emerald-700',
      bgColor: 'from-emerald-50 to-emerald-100',
    },
  ]

  return (
    <section id="products" className="py-20 sm:py-28 lg:py-32 bg-earth-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-medium text-sm tracking-wider uppercase mb-3">Our Product Portfolio</p>
          <h2 className="section-title">Premium Agricultural Products</h2>
          <p className="section-subtitle mx-auto">
            Curated selection of the world's finest spices, grains, coffee, tea, and specialty foods — all sourced sustainably and processed to the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <article
              key={category.name}
              className="card group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-earth-900 mb-3">{category.name}</h3>
                <ul className="space-y-2 text-earth-600 text-sm">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 group-hover:text-primary-600 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-300 group-hover:bg-primary-600 transition-colors" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 w-full text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all"
                  aria-label={`View all ${category.name}`}
                >
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#booking" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Request Product Catalog
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Quality() {
  const certifications = [
    {
      name: 'ISO 22000',
      desc: 'Food Safety Management',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      name: 'HACCP',
      desc: 'Hazard Analysis Critical Control',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: 'USDA Organic',
      desc: 'Organic Certification',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" />
        </svg>
      )
    },
    {
      name: 'FSSC 22000',
      desc: 'Food Safety System Certification',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      name: 'BRCGS',
      desc: 'Global Food Safety Standard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Kosher & Halal',
      desc: 'Religious Dietary Compliance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 009-9c0-1.82-.52-3.53-1.46-5.01l-1.32 1.32a7 7 0 01-1.23 3.56A6.98 6.98 0 0112 21z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3a9 9 0 00-9 9c0 .85.11 1.68.31 2.46l2.04-2.04a7 7 0 012.66-2.66A6.98 6.98 0 0112 3z" />
        </svg>
      )
    },
  ]

  const processSteps = [
    { step: '01', title: 'Farm Audit & Selection', desc: 'We audit farms for sustainable practices, soil health, and compliance with international standards.' },
    { step: '02', title: 'Harvest & Primary Processing', desc: 'Crops harvested at peak maturity, cleaned, sorted, and pre-processed in certified facilities.' },
    { step: '03', title: 'Lab Testing & Certification', desc: 'Every batch tested at ISO 17025 labs for pesticides, heavy metals, microbiology, and authenticity.' },
    { step: '04', title: 'Processing & Packaging', desc: 'Custom processing (grinding, blending, roasting) in GMP facilities with traceable packaging.' },
    { step: '05', title: 'Quality Assurance & Documentation', desc: 'Final QA checks, COA generation, phytosanitary certificates, and export documentation.' },
    { step: '06', title: 'Cold Chain Logistics', desc: 'Temperature-controlled shipping with real-time tracking to 50+ countries worldwide.' },
  ]

  return (
    <section id="quality" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-medium text-sm tracking-wider uppercase mb-3">Quality Assurance</p>
          <h2 className="section-title">Uncompromising Quality at Every Step</h2>
          <p className="section-subtitle mx-auto">
            From farm audit to final delivery — our 6-stage quality protocol ensures every shipment meets the world's toughest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="card certification-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="certification-icon">{cert.icon}</div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-earth-900 mb-1">{cert.name}</h3>
                <p className="text-earth-600 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="card flex flex-col md:flex-row gap-6 items-start md:items-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-earth-900 mb-1">{step.title}</h3>
                <p className="text-earth-600">{step.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-primary-200 flex items-center justify-center flex-shrink-0 group-hover:border-primary-500 group-hover:bg-primary-50 transition-colors">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      quote: "GreenHarvest has been our primary spice supplier for 3 years. Their consistency, documentation, and responsiveness are unmatched. They've helped us scale from regional to national distribution.",
      author: "Sarah Chen",
      role: "Procurement Director, SpiceCo International",
      company: "USA",
      avatar: "SC",
    },
    {
      quote: "The traceability system is incredible — we can trace every batch back to the specific farm and harvest date. This transparency has been crucial for our organic certification audits.",
      author: "Marcus Weber",
      role: "Quality Manager, EuroFoods GmbH",
      company: "Germany",
      avatar: "MW",
    },
    {
      quote: "Their team feels like an extension of ours. Dedicated account manager, proactive market updates, and they've never missed a delivery window. True partners in every sense.",
      author: "Priya Sharma",
      role: "Supply Chain VP, Global Pantry Ltd",
      company: "UAE",
      avatar: "PS",
    },
  ]

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-earth-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-medium text-sm tracking-wider uppercase mb-3">Client Success Stories</p>
          <h2 className="section-title">Trusted by Industry Leaders Worldwide</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it — hear from buyers who've partnered with us for years.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.author}
              className="card relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 right-6 text-primary-100" aria-hidden="true">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.426.948-4 3.456-4 6.558v3.292h-5.978zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.999-10.609l.996 2.151c-2.426.948-4 3.456-4 6.558v3.292h-5.979z"/>
                </svg>
              </div>
              <p className="text-earth-700 leading-relaxed mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-earth-900">{testimonial.author}</p>
                  <p className="text-sm text-earth-500">{testimonial.role}</p>
                  <p className="text-sm text-earth-400">{testimonial.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    volume: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : ''
      case 'company':
        return value.trim().length < 2 ? 'Company name is required' : ''
      case 'phone':
        return value && !/^[\d\s\-\+\(\)]{10,}$/.test(value) ? 'Please enter a valid phone number' : ''
      case 'interest':
        return !value ? 'Please select a product category' : ''
      case 'volume':
        return !value ? 'Please select expected volume' : ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key])
    })
    setErrors(newErrors)
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))

    if (Object.values(newErrors).some(err => err)) return

    setSubmitStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
    setSubmitStatus('success')
    setFormData({ name: '', email: '', company: '', phone: '', interest: '', volume: '', message: '' })
    setTouched({})
  }

  const interestOptions = [
    { value: '', label: 'Select product category...' },
    { value: 'spices', label: 'Spices & Herbs' },
    { value: 'grains', label: 'Grains & Pulses' },
    { value: 'coffee-tea', label: 'Coffee & Tea' },
    { value: 'specialty', label: 'Specialty Foods' },
    { value: 'multiple', label: 'Multiple Categories' },
  ]

  const volumeOptions = [
    { value: '', label: 'Select expected monthly volume...' },
    { value: 'small', label: 'Under 1 MT/month (Trial/Small Business)' },
    { value: 'medium', label: '1-10 MT/month (Growing Business)' },
    { value: 'large', label: '10-100 MT/month (Established Importer)' },
    { value: 'enterprise', label: '100+ MT/month (Enterprise/Distributor)' },
  ]

  if (submitStatus === 'success') {
    return (
      <section id="booking" className="py-20 sm:py-28 lg:py-32 bg-primary-600">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Request Submitted Successfully!</h2>
            <p className="text-primary-100 text-lg mb-8">
              Thank you for your interest in partnering with GreenHarvest Exports. Our team will review your requirements and reach out within 24 hours to schedule your free consultation.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="btn-secondary bg-white text-primary-700 hover:bg-primary-50"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 sm:py-28 lg:py-32 bg-primary-600">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-primary-100 font-medium text-sm tracking-wider uppercase mb-3">Book a Consultation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let's Discuss Your Sourcing Needs</h2>
            <p className="text-primary-100 text-lg mb-8">
              Schedule a free 30-minute consultation with our export specialists. We'll discuss your product requirements, volume needs, certification requirements, and provide a customized sourcing proposal.
            </p>

            <div className="space-y-4 text-primary-100">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: 'Flexible scheduling — we work across time zones'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  text: 'Customized product recommendations & pricing'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                  text: 'Logistics & compliance guidance included'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'No obligation — free initial consultation'
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex-shrink-0">{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input-field ${errors.name && touched.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="John Smith"
                    aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                    aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="label">Business Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input-field ${errors.email && touched.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="john@company.com"
                    aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="label">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input-field ${errors.company && touched.company ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="SpiceCo International"
                    aria-invalid={errors.company && touched.company ? 'true' : 'false'}
                    aria-describedby={errors.company && touched.company ? 'company-error' : undefined}
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.company && touched.company && (
                    <p id="company-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="label">Phone (with country code)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input-field ${errors.phone && touched.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="+1 (555) 123-4567"
                    aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                    disabled={submitStatus === 'submitting'}
                  />
                  {errors.phone && touched.phone && (
                    <p id="phone-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="label">Product Interest *</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input-field ${errors.interest && touched.interest ? 'border-red-500 focus:ring-red-500' : ''}`}
                  aria-invalid={errors.interest && touched.interest ? 'true' : 'false'}
                  aria-describedby={errors.interest && touched.interest ? 'interest-error' : undefined}
                  disabled={submitStatus === 'submitting'}
                >
                  {interestOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.interest && touched.interest && (
                  <p id="interest-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.interest}</p>
                )}
              </div>

              <div>
                <label htmlFor="volume" className="label">Expected Monthly Volume *</label>
                <select
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input-field ${errors.volume && touched.volume ? 'border-red-500 focus:ring-red-500' : ''}`}
                  aria-invalid={errors.volume && touched.volume ? 'true' : 'false'}
                  aria-describedby={errors.volume && touched.volume ? 'volume-error' : undefined}
                  disabled={submitStatus === 'submitting'}
                >
                  {volumeOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.volume && touched.volume && (
                  <p id="volume-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.volume}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="label">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className="input-field resize-y"
                  placeholder="Tell us about your specific requirements, target markets, certification needs, timeline, or any questions you have..."
                  disabled={submitStatus === 'submitting'}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-lg disabled:opacity-50"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Book Free Consultation'
                )}
              </button>

              <p className="text-center text-sm text-earth-500">
                By submitting, you agree to our <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-600 hover:underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-earth-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-medium text-sm tracking-wider uppercase mb-3">Get In Touch</p>
          <h2 className="section-title">Ready to Start Sourcing?</h2>
          <p className="section-subtitle mx-auto">
            Have questions? Our team is ready to help. Reach out via any channel below or book a consultation above.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card text-center">
            <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4 text-primary-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-earth-900 mb-2">Email Us</h3>
            <p className="text-earth-600 mb-4">General inquiries & partnerships</p>
            <a href="mailto:exports@greenharvest.com" className="text-primary-600 hover:text-primary-700 font-medium">exports@greenharvest.com</a>
            <p className="text-earth-500 text-sm mt-1">Typically responds within 4 hours</p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4 text-primary-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-earth-900 mb-2">Call Us</h3>
            <p className="text-earth-600 mb-4">Mon-Fri 8AM-6PM EST</p>
            <a href="tel:+18005550199" className="text-primary-600 hover:text-primary-700 font-medium">+1 (800) 555-0199</a>
            <p className="text-earth-500 text-sm mt-1">WhatsApp: +1 (800) 555-0199</p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4 text-primary-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-earth-900 mb-2">Visit Us</h3>
            <p className="text-earth-600 mb-4">Headquarters & Showroom</p>
            <address className="text-earth-500 text-sm not-italic">
              1250 Trade Center Blvd, Suite 400<br />
              Miami, FL 33132, USA
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const footerLinks = {
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Products', href: '#products' },
      { label: 'Quality Standards', href: '#quality' },
      { label: 'Careers', href: '#' },
      { label: 'Press & Media', href: '#' },
    ],
    Resources: [
      { label: 'Product Catalog', href: '#' },
      { label: 'Certifications', href: '#' },
      { label: 'Sustainability Report', href: '#' },
      { label: 'Market Insights', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    Support: [
      { label: 'Contact Sales', href: '#booking' },
      { label: 'Track Shipment', href: '#' },
      { label: 'Documentation Portal', href: '#' },
      { label: 'Compliance Help', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, href: '#' },
    { name: 'Twitter', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>, href: '#' },
    { name: 'YouTube', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, href: '#' },
    { name: 'Instagram', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-.127-.058-.535-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, href: '#' },
  ]

  return (
    <footer className="bg-earth-900 text-earth-300" role="contentinfo">
      <div className="section-container pt-12 pb-8 sm:pt-16">
        {/* Balanced brand and navigation columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-10 lg:gap-16 mb-10 sm:mb-12">
          {/* Brand column - left side */}
          <div className="min-w-0">
            <a href="#home" className="font-display text-xl font-bold text-white flex items-center gap-2 mb-6" aria-label="GreenHarvest Exports Home">
              <svg className="w-8 h-8 shrink-0 text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              GreenHarvest Exports
            </a>
            <p className="text-earth-400 text-sm leading-relaxed mb-8 max-w-xs">
              Connecting the world's finest farms with global markets since 2009. Premium spices, grains, coffee, and specialty foods — delivered with integrity.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center text-earth-400 hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 3 Link columns - right side, equal width */}
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 min-w-0">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-earth-400 hover:text-primary-400 text-sm transition-colors">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-8 border-t border-earth-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-earth-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} GreenHarvest Exports. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3 text-sm text-earth-400">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <Testimonials />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
