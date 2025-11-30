import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagneticButton } from "./motion/MagneticButton";
import { Package, Beaker, Factory, ArrowRight, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "./motion/Section";
import { StaggerChildren, SlideIn, serviceCardHover, splitEntry } from "./motion/Motion";
import { CountUp } from "./motion/CountUp";
import { motion } from "framer-motion";
import MagneticExplode from "./motion/MagneticExplode";

const industries = [
  {
    icon: Package,
    title: "Corrugated Packaging",
    features: [
      "Machine tracking & quality control",
      "Artwork quality checks",
      "Dispatch quantity tracking"
    ],
    stats: { improvement: 35, metric: "Quality Improvement" },
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Beaker,
    title: "Plastics Manufacturing",
    features: [
      "Predictive quality control",
      "Energy optimization",
      "Process uptime monitoring"
    ],
    stats: { improvement: 42, metric: "Energy Savings" },
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Factory,
    title: "Other Industries",
    features: [
      "Customized AI models",
      "Machine health monitoring",
      "Compliance & throughput enhancement"
    ],
    stats: { improvement: 28, metric: "Uptime Increase" },
    color: "from-purple-500/20 to-violet-500/20"
  },
];

export default function IndustriesScene() {
  const handleLearnMore = (industry: string) => {
    console.log(`Learn more about ${industry} clicked`); // TODO: remove mock functionality
  };

  return (
    <Section id="industries" background="gradient" padding="xl">
      <SlideIn>
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Tailored Solutions for Every Sector"
          subtitle="Advanced AI automation customized for your industry's unique challenges and requirements"
        />
      </SlideIn>

      <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {industries.map((industry, index) => {
          const IconComponent = industry.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`card-industry-${index}`}
              data-industry-card={index}
              style={{ perspective: 1000 }}
            >
              <motion.div whileHover={serviceCardHover}>
                <Card className="group relative h-[500px] overflow-hidden border border-secondary/30 bg-card/20 backdrop-blur-xl hover:border-tertiary/50 hover:bg-card/30 transition-all duration-500 flex flex-col shadow-lg shadow-black/50 hover:shadow-secondary/20 hover:shadow-2xl">
                  {/* Premium glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-tertiary/0 via-tertiary/0 to-tertiary/0 group-hover:from-tertiary/5 group-hover:via-tertiary/10 group-hover:to-tertiary/5 transition-all duration-500 rounded-xl" />
                  <div className="absolute inset-[1px] bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Stats Badge with premium styling */}
                  <motion.div
                    className="absolute top-6 right-6 z-20 bg-gradient-to-br from-secondary/30 to-secondary/20 backdrop-blur-md rounded-full px-4 py-2 border border-tertiary/30 group-hover:border-tertiary/50 group-hover:bg-gradient-to-br group-hover:from-secondary/40 group-hover:to-tertiary/30 transition-all duration-300 shadow-lg shadow-secondary/20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center space-x-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-tertiary drop-shadow-[0_0_4px_rgba(98,170,222,0.6)]" />
                      <span className="text-tertiary font-bold drop-shadow-[0_0_4px_rgba(98,170,222,0.4)]">
                        <CountUp end={industry.stats.improvement} suffix="%" />
                      </span>
                    </div>
                  </motion.div>

                  <CardHeader className="relative pb-6 pt-8 h-[160px] flex flex-col justify-center z-10">
                    {/* Icon with premium magnetic effect */}
                    <motion.div
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MagneticExplode triggerSelector={`[data-industry-card="${index}"]`}>
                        <div className="relative">
                          {/* Outer glow */}
                          <div className="absolute inset-0 rounded-2xl bg-tertiary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          {/* Icon container */}
                          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:border-tertiary/50 group-hover:bg-gradient-to-br group-hover:from-secondary/30 group-hover:to-tertiary/20 transition-all duration-300 shadow-lg shadow-secondary/10">
                            <IconComponent className="h-10 w-10 text-tertiary relative z-10 drop-shadow-[0_0_8px_rgba(98,170,222,0.5)] transition-all duration-300" data-testid={`icon-industry-${index}`} />

                            {/* Premium ripple effect */}
                            <motion.div
                              className="absolute inset-0 rounded-2xl border-2 border-tertiary/40"
                              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      </MagneticExplode>
                    </motion.div>

                    <CardTitle className="text-2xl text-center text-foreground group-hover:text-tertiary transition-colors duration-300 drop-shadow-lg font-bold" data-testid={`text-industry-title-${index}`}>
                      {industry.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative flex-grow flex flex-col justify-between px-8 pb-8 z-10">
                    {/* Features List */}
                    <div className="space-y-4 mb-8 h-[120px] overflow-hidden">
                      {industry.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: (index * 0.1) + (featureIndex * 0.1),
                            duration: 0.5
                          }}
                          data-testid={`text-industry-feature-${index}-${featureIndex}`}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-tertiary mt-2 flex-shrink-0 shadow-[0_0_6px_rgba(98,170,222,0.6)]"
                            whileInView={{ scale: [0, 1.2, 1] }}
                            transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                          />
                          <span className="text-foreground/80 leading-relaxed text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats Display */}
                    <div className="mb-8 text-center">
                      <div className="text-sm text-foreground/60 mb-2">{industry.stats.metric}</div>
                      <div className="text-3xl font-bold text-tertiary drop-shadow-[0_0_10px_rgba(98,170,222,0.6)]">
                        <CountUp end={industry.stats.improvement} suffix="%" />
                      </div>
                    </div>

                    {/* Premium CTA Button */}
                    <MagneticButton
                      variant="outline"
                      className="w-full border-2 border-secondary/40 text-tertiary bg-gradient-to-r from-secondary/10 to-transparent group-hover:from-secondary group-hover:to-tertiary/30 group-hover:text-white group-hover:border-tertiary transition-all duration-300 shadow-lg shadow-secondary/10 group-hover:shadow-tertiary/30 font-semibold"
                      onClick={() => handleLearnMore(industry.title)}
                      data-testid={`button-learn-more-${index}`}
                      strength={0.2}
                    >
                      Learn More
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </MagneticButton>
                  </CardContent>

                  {/* Premium animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "linear-gradient(45deg, transparent, rgba(98, 170, 222, 0.15), transparent)",
                    }}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 3, ease: "linear" }}
                  />

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tertiary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(98,170,222,0.6)]" />
                </Card>
              </motion.div>
            </motion.div>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}