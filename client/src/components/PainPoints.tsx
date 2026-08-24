import { useRef } from "react";
import { ChevronRight, CheckCircle2, Hexagon, Activity, Eye, Crosshair, Sparkles } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";

// ─── Journey Data ───────────────────────────────────────────────────────────

type StepSolution = {
  name: string;
  tagline: string;
  color: string;
  icon: React.ElementType;
  wins: string[];
  proof: string;
  quickWin: string;
};

type Step = {
  step: string;
  problem: { headline: string; pain: string; stat: string; statLabel: string };
  solution: StepSolution;
};

const STEPS: Step[] = [
  {
    step: "01",
    problem: {
      headline: "Safety blind spots discovered too late",
      pain: "Workers bypass PPE protocols. Zone violations go unnoticed until an incident occurs. No immutable audit trail exists.",
      stat: "80%",
      statLabel: "of facilities harbor active safety blind spots",
    },
    solution: {
      name: "V.I.G.I.L",
      tagline: "Visual Intelligence & Guard Inspection",
      color: "#38bdf8",
      icon: Eye,
      wins: [
        "Real-time PPE & zone breach detection",
        "OCR label & dispatch verification",
        "Instant visual alerts via SMS & WhatsApp",
      ],
      proof: "Accidents reduced by 50% in month one · 99.4% detection accuracy",
      quickWin: "Live in 7 days",
    },
  },
  {
    step: "02",
    problem: {
      headline: "Critical shift time lost to search",
      pain: "Forklifts navigate on human memory. Inventory audits consume days. ERP data drifts rapidly from physical reality.",
      stat: "60%",
      statLabel: "of material handling time is pure search",
    },
    solution: {
      name: "WIL",
      tagline: "Warehouse Intelligence & Logistics",
      color: "#2dd4bf",
      icon: Crosshair,
      wins: [
        "5cm precision tracking. Find anything in one click",
        "Turn-by-turn HMI navigation for forklifts",
        "Autonomous ERP synchronization on the move",
      ],
      proof: "Retrieval time cut by 70% · Forklift idle time down 40%",
      quickWin: "Live in 21 days",
    },
  },
  {
    step: "03",
    problem: {
      headline: "Invisible bottlenecks capping throughput",
      pain: "Production planning relies on intuition rather than data. Throughput losses occur without identifiable root causes.",
      stat: "60%",
      statLabel: "of plants run measurably below potential",
    },
    solution: {
      name: "Digital Twin",
      tagline: "Patent-Published Simulation Engine",
      color: "#818cf8",
      icon: Activity,
      wins: [
        "Simulate hundreds of scenarios in minutes",
        "Live telemetry connected directly to the shop floor",
        'Actionable directives: "Adjust X to gain +12% output"',
      ],
      proof: "Throughput +4% · Downtime –5% · Zero new hardware required",
      quickWin: "+4% output in 6 weeks",
    },
  },
  {
    step: "04",
    problem: {
      headline: "Manual compliance drains engineering hours",
      pain: "Reliance on paper batch records. Audit preparation takes days of manual collation. Legacy AI fails at compliance.",
      stat: "70%",
      statLabel: "of facilities still file audits manually",
    },
    solution: {
      name: "AI eBMR",
      tagline: "Autonomous Enterprise Resource Planning",
      color: "#c084fc",
      icon: Hexagon,
      wins: [
        "Zero-paper auto-capture via existing cameras",
        "Process deviations flagged and isolated in real-time",
        "Comprehensive audit packages generated in minutes",
      ],
      proof: "99.9% documentation accuracy · Zero recurring operational cost",
      quickWin: "Audit-ready instantly",
    },
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([]);

  // Detect touch/mobile once — used to skip expensive GPU operations
  const isMobile = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  // Fixed useGSAP call — signature is (fn, scopeRef, deps)
  useGSAP(() => {
    // 3D stacking: as next card scrolls up, current card scales back & blurs
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      if (index === cardsRef.current.length - 1) return;
      const nextCard = cardsRef.current[index + 1];
      gsap.to(card, {
        scale:   0.92,
        y:       -40,
        opacity: 0.3,
        // Animated filter:blur on every scroll frame = repaint per tick → biggest mobile lag.
        // Skip on touch devices entirely.
        ...(isMobile ? {} : { filter: "blur(8px)" }),
        ease:    "none",
        scrollTrigger: {
          trigger: nextCard,
          start:   "top bottom",
          end:     "top top",
          scrub:   true,
        },
      });
    });

    // Entrance animation for content inside each card
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const elements = card.querySelectorAll(".reveal-element");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start:   "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, sectionRef, []);

  return (
    <section
      id="pain-points"
      ref={sectionRef}
      className="relative text-[#1a2236]"
      style={{ background: "transparent" }}
    >
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div className="w-full text-center pt-32 pb-16 px-4">
        {/* Aurora badge */}
        <div className="relative inline-flex items-center justify-center p-[1px] mb-8 overflow-hidden rounded-full border border-[rgba(22,55,145,0.1)] shadow-sm bg-white">
          <div className="relative flex items-center px-5 py-2.5 rounded-full bg-white">
            <Sparkles className="w-3.5 h-3.5 mr-2" style={{ color: "#163791" }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a2236]">Start Where It Hurts</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05] text-[#1a2236]">
          Identify the Friction.<br />
          <span className="bg-gradient-to-br from-[#163791] to-[#62AADE] bg-clip-text text-transparent">
            Deploy the Solution.
          </span>
        </h2>
      </div>

      {/* ── Stacking Cards ──────────────────────────────────────────────────── */}
      <div className="relative pb-8 lg:pb-32">
        {STEPS.map((step, i) => {
          const Icon = step.solution.icon;
          return (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="lg:sticky top-0 min-h-[auto] lg:h-screen w-full flex items-center justify-center p-4 md:p-8 origin-top"
            >
              <div
                className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] overflow-visible lg:overflow-hidden bg-white shadow-xl shadow-[rgba(22,55,145,0.05)] border border-[rgba(22,55,145,0.1)]"
              >
                {/* Ambient glow */}
                <div
                  className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"
                  style={{
                    background: `radial-gradient(circle, ${step.solution.color}18 0%, transparent 70%)`,
                    filter: "blur(60px)",
                  }}
                />

                {/* Colored top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.solution.color}, transparent)` }}
                />

                <div
                  className="relative p-6 md:p-14 flex flex-col justify-center border-r-0 lg:border-r border-[rgba(22,55,145,0.1)]"
                >
                  {/* Watermark step number */}
                  <div
                    className="absolute top-4 left-8 leading-none tracking-tighter select-none pointer-events-none"
                    style={{
                      fontSize: "11rem", fontWeight: 900, lineHeight: 1,
                      color: "transparent",
                      WebkitTextStroke: `1px ${step.solution.color}10`,
                    }}
                  >
                    {step.step}
                  </div>

                  <div className="relative z-10">
                    {/* Phase label */}
                    <div className="reveal-element flex items-center gap-3 mb-8">
                      <span
                        className="text-sm font-black tracking-widest uppercase"
                        style={{ color: `${step.solution.color}80` }}
                      >
                        Phase {step.step}
                      </span>
                      <div className="h-px w-12" style={{ background: `${step.solution.color}30` }} />
                    </div>

                    <h3
                      className="reveal-element text-3xl md:text-4xl font-black text-[#1a2236] mb-5 leading-tight"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {step.problem.headline}
                    </h3>
                    <p
                      className="reveal-element text-base leading-relaxed mb-12 max-w-md text-[rgba(30,40,80,0.6)]"
                    >
                      {step.problem.pain}
                    </p>

                    {/* Stat */}
                    <div className="reveal-element flex flex-col gap-1">
                      <div
                        className="font-black tracking-tight leading-none"
                        style={{ fontSize: "5rem", color: step.solution.color, letterSpacing: "-0.04em" }}
                      >
                        {step.problem.stat}
                      </div>
                      <div
                        className="text-sm font-bold uppercase tracking-wider max-w-[220px] text-[rgba(30,40,80,0.5)]"
                      >
                        {step.problem.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 md:p-14 flex flex-col justify-center border-t border-[rgba(22,55,145,0.1)] lg:border-t-0">
                  <div className="relative z-10">

                    {/* Solution header */}
                    <div className="reveal-element flex flex-wrap items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `${step.solution.color}18`,
                            border: `1px solid ${step.solution.color}40`,
                            color: step.solution.color,
                          }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4
                          className="text-2xl md:text-3xl font-black text-[#1a2236]"
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          {step.solution.name}
                        </h4>
                      </div>
                      <div
                        className="px-3 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase whitespace-nowrap"
                        style={{
                          background: `${step.solution.color}12`,
                          border: `1px solid ${step.solution.color}35`,
                          color: step.solution.color,
                        }}
                      >
                        {step.solution.quickWin}
                      </div>
                    </div>

                    {/* Tagline */}
                    <p
                      className="reveal-element text-sm font-mono tracking-wide mb-8 pb-6 border-b border-[rgba(22,55,145,0.1)] text-[rgba(30,40,80,0.5)]"
                    >
                      {step.solution.tagline}
                    </p>

                    {/* Wins */}
                    <ul className="reveal-element space-y-4 mb-10">
                      {step.solution.wins.map((win, wi) => (
                        <li key={wi} className="flex items-start gap-4 group">
                          <div
                            className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                            style={{ background: `${step.solution.color}20` }}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.solution.color }} />
                          </div>
                          <span className="text-base leading-snug text-[rgba(30,40,80,0.75)]">
                            {win}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="reveal-element relative overflow-hidden rounded-2xl p-5 border border-[rgba(22,55,145,0.1)] bg-slate-50"
                    >
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px]"
                        style={{ background: step.solution.color }}
                      />
                      <div
                        className="text-[10px] uppercase tracking-widest mb-2 font-black flex items-center gap-2 pl-4"
                        style={{ color: step.solution.color }}
                      >
                        <ChevronRight className="w-3 h-3" /> Verified Impact
                      </div>
                      <div
                        className="text-base font-semibold pl-4 text-[#1a2236]"
                      >
                        {step.solution.proof}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}