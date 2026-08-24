import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const isProducts = pathname === "/products";
  const isAbout = pathname === "/about";
  const isDataServices = pathname === "/data-services";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const goToContact = () => {
    window.location.href = "/contact";
  };

  const bookACall = () => {
    const mail = "nikhilg@autonexai360.com";
    const subject = encodeURIComponent("Book a Call - Data Annotation Services");
    const body = encodeURIComponent("Hi Autonex AI team,\n\nI would like to book a call to discuss data annotation needs.\n\nThanks,");
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  };

  const handleNavClick = (sectionId: string) => {
    if (window.location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.location.href = `/#${sectionId}`;
  };



  // Footer hero copy (page-specific overrides)
  const titleText = isAbout
    ? "Ready to Connect?"
    : isDataServices
      ? "Ready to Scale Your AI Training?"
      : isProducts
        ? "Ready To Transform Your Operations?"
        : "Ready to get started?";
  const subtitleText = isAbout
    ? "Reach out to us to discuss how we can transform your industrial operations"
    : isDataServices
      ? "Contact us to discuss your data annotation needs. We'll get back within 24 hours with a customized solution."
      : isProducts
        ? "Discover how our AI-powered solutions can revolutionize your industrial processess."
        : "Schedule a consultation to discuss your industrial automation needs";
  const primaryLabel = isDataServices
    ? "Book a Call"
    : isProducts || isAbout
      ? "Contact Us"
      : "Schedule Consultation";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        @keyframes rotateAurora {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
      <footer className="relative w-full">


        {/* ── CTA — LET'S GET STARTED TOGETHER ─────────────────────────── */}
        {!hideCta && (
          <div
            className="relative w-full overflow-hidden flex flex-col items-center justify-center"
            style={{ minHeight: "62vh" }}
          >
            {/* Brand blue — soft, blended glow from bottom */}
            <div style={{
              position: "absolute",
              bottom: 0, left: "50%",
              transform: "translateX(-50%)",
              width: "60%", height: "50%",
              background: "radial-gradient(ellipse at 50% 100%, rgba(22,55,145,0.28) 0%, rgba(98,170,222,0.08) 55%, transparent 80%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }} />


            {/* Removed top fade for clean white theme */}

            {/* ── Giant headline ──────────────────────────────────────────── */}
            <div
              className="relative z-10 text-center px-4"
              style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}
            >
              <h2
                className="font-medium text-[#1a2236]"
                style={{
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <span style={{ display: "block", fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}>
                  Let&apos;s get started
                </span>
                <span 
                  style={{ display: "block", fontSize: "clamp(2.5rem, 8vw, 7.5rem)", letterSpacing: "0.02em" }}
                  className="bg-gradient-to-br from-[#163791] to-[#62AADE] bg-clip-text text-transparent"
                >
                  together.
                </span>
              </h2>

              {/* ── SCHEDULE CONSULTATION button ──────────────────────────── */}
              <div style={{ marginTop: "3.5rem" }}>
                <a
                  href="/contact"
                  style={{
                    display:        "inline-flex",
                    alignItems:     "center",
                    gap:            "0.65rem",
                    padding:        "0.85rem 2.4rem",
                    borderRadius:   999,
                    background:     "#163791",
                    border:         "1px solid transparent",
                    color:          "#ffffff",
                    fontFamily:     "inherit",
                    fontWeight:     600,
                    fontSize:       "0.72rem",
                    letterSpacing:  "0.22em",
                    textTransform:  "uppercase",
                    textDecoration: "none",
                    cursor:         "pointer",
                    boxShadow:      "0 4px 15px rgba(22,55,145,0.3)",
                    transition:     "all 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#1a4fa8";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 25px rgba(22,55,145,0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#163791";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 15px rgba(22,55,145,0.3)";
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  SCHEDULE CONSULTATION
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Secondary footer (marketing) */}
        <div className="relative z-10">
          <div className="px-4 md:px-6 py-14">
            <div
              className="max-w-7xl mx-auto rounded-md bg-white border border-[rgba(22,55,145,0.1)] shadow-xl p-8 md:p-12 relative overflow-visible"
            >
              {/* < 1280px (xl) – three-column compact grid */}
              <div className="xl:hidden text-[11px] sm:text-xs md:text-sm leading-5 text-[rgba(30,40,80,0.6)]">
                <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                  {/* Left: Socials (vertical) */}
                  <div className="space-y-1.5 text-left">
                    <a
                      href="https://www.linkedin.com/company/autonex-ai/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-1 py-0.5 hover:text-[#163791] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                  {/* Middle: Navigation (vertical) */}
                  <div className="space-y-1.5 text-center">
                    <button className="block px-1 py-0.5 hover:text-[#163791] transition-colors" onClick={() => handleNavClick('home')}>Home</button>
                    <button className="block px-1 py-0.5 hover:text-[#163791] transition-colors" onClick={() => handleNavClick('why-autonex')}>Our Vision</button>
                    <button className="block px-1 py-0.5 hover:text-[#163791] transition-colors" onClick={() => handleNavClick('products')}>Services</button>
                    <button className="block px-1 py-0.5 hover:text-[#163791] transition-colors" onClick={() => handleNavClick('industries')}>Industries</button>
                    <button className="block px-1 py-0.5 hover:text-[#163791] transition-colors" onClick={goToContact}>Contact</button>
                  </div>
                  {/* Right: Legal (vertical) */}
                  <div className="space-y-1.5 text-right">
                    <a href="/terms" className="block px-1 py-0.5 hover:text-[#163791] transition-colors">Terms of Service</a>
                    <a href="/privacy" className="block px-1 py-0.5 hover:text-[#163791] transition-colors">Privacy Policy</a>
                  </div>
                </div>
              </div>

              {/* >= 1280px – single line, three groups */}
              <div className="hidden xl:flex w-full items-center justify-between gap-x-8 gap-y-4 pl-8 pr-4 text-sm text-[rgba(30,40,80,0.6)] flex-wrap">
                {/* Left: Socials */}
                <div className="flex items-center gap-6 xl:gap-8 2xl:gap-12">
                  <a
                    href="https://www.linkedin.com/company/autonex-ai/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#163791] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Center: Navigation */}
                <div className="flex items-center gap-6 xl:gap-8 2xl:gap-12">
                  <button className="hover:text-[#163791] transition-colors" onClick={() => handleNavClick('home')}>Home</button>
                  <button className="hover:text-[#163791] transition-colors" onClick={() => handleNavClick('why-autonex')}>Our Vision</button>
                  <button className="hover:text-[#163791] transition-colors" onClick={() => handleNavClick('products')}>Services</button>
                  <button className="hover:text-[#163791] transition-colors" onClick={() => handleNavClick('industries')}>Industries</button>
                  <button className="hover:text-[#163791] transition-colors" onClick={goToContact}>Contact</button>
                </div>

                {/* Right: Legal */}
                <div className="flex items-center gap-6 xl:gap-8 2xl:gap-12">
                  <a href="/terms" className="hover:text-[#163791] transition-colors">Terms of Service</a>
                  <a href="/privacy" className="hover:text-[#163791] transition-colors">Privacy Policy</a>
                </div>
              </div>

              {/* Thin divider visible on all sizes */}
              <Separator className="my-6 bg-gray-200" />

              {/* Bottom bar for < 1280px */}
              <div className="xl:hidden w-full mt-2">
                {/* Stacked layout on extra-small screens */}
                <div className="sm:hidden flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/autonex_logo.png"
                      alt="Autonex Home"
                      className="h-6 w-auto object-contain cursor-pointer"
                      onClick={() => handleNavClick('home')}
                    />
                    <span className="text-[rgba(30,40,80,0.6)]">|</span>
                    <p className="text-[rgba(30,40,80,0.6)] text-xs">© {currentYear} Autonex. All rights reserved.</p>
                  </div>
                  <div className="h-px w-4/5 bg-gray-200" />
                </div>

                {/* Single row with equal spacing on small-to-large (<1280px) */}
                <div className="hidden sm:flex items-center justify-between px-4 sm:px-6 md:px-8 gap-4">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-nowrap">
                    <img
                      src="/autonex_logo.png"
                      alt="Autonex Home"
                      className="h-6 w-auto object-contain cursor-pointer flex-shrink-0"
                      onClick={() => handleNavClick('home')}
                    />
                    <span className="text-[rgba(30,40,80,0.6)] flex-shrink-0">|</span>
                    <p className="text-[rgba(30,40,80,0.6)] whitespace-nowrap text-[10px] sm:text-xs md:text-sm truncate">© {currentYear} Autonex. All rights reserved.</p>
                  </div>
                </div>
              </div>

              {/* Bottom bar for >= 1280px */}
              <div className="hidden xl:flex items-center justify-between gap-10 text-left mt-12 pl-8 pr-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/autonex_logo.png"
                    alt="Autonex Home"
                    className="h-7 w-auto object-contain cursor-pointer"
                    onClick={() => handleNavClick('home')}
                  />
                  <span className="text-[rgba(30,40,80,0.6)]">|</span>
                  <p className="text-[rgba(30,40,80,0.6)] text-sm">© {currentYear} Autonex. All rights reserved.</p>
                </div>

              </div>

              {/* Removed: shadow here now connects to the Schedule Consultation bordered box above */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}