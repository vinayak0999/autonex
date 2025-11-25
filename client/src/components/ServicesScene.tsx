import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Activity, Shield, Package, FileCheck, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./motion/Section";
import { StaggerChildren, SlideIn, serviceCardVariants, serviceCardHover } from "./motion/Motion";
import MagneticExplode from "./motion/MagneticExplode";
import { motion } from "framer-motion";
import dashboardMockupPath from "@assets/generated_images/new graph.png";

const services = [
  {
    icon: CheckCircle,
    title: "Material Verification",
    description: "Real-time verification of inbound materials and their quantities across all industrial processes with AI-powered accuracy.",
    features: ["Real-time scanning", "Quality assurance", "Automated logging"]
  },
  {
    icon: Activity,
    title: "Process Monitoring",
    description: "Continuous tracking of production processes and workflow optimization with intelligent analytics and predictive insights.",
    features: ["Live monitoring", "Performance analytics", "Workflow optimization"]
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "AI-powered quality control and inspection systems for consistent output and reduced defect rates.",
    features: ["Automated inspection", "Defect detection", "Quality reporting"]
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Automated tracking and logging for complete inventory visibility with predictive restocking capabilities.",
    features: ["Smart tracking", "Predictive restocking", "Cost optimization"]
  },
  {
    icon: FileCheck,
    title: "Compliance Monitoring",
    description: "Automated compliance monitoring and maintenance scheduling systems to ensure regulatory standards.",
    features: ["Regulatory compliance", "Automated reporting", "Risk assessment"]
  },
];

export default function ServicesScene() {
  return (
    <Section id="services" padding="xl">
      <SlideIn>
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive AI Solutions"
          subtitle="Autonex combines AI, IIoT, and edge computing to build sector-specific digital twins that deliver actionable insights, predictive maintenance, and dynamic operational optimization."
        />
      </SlideIn>

      {/* Dashboard Preview with Parallax */}
      <SlideIn>
        <motion.div
          className="mb-20 relative"
          whileInView={{ y: 0 }}
          initial={{ y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Card interactive={false} className="overflow-hidden border border-secondary/30 bg-card/20 backdrop-blur-xl relative shadow-2xl shadow-black/50">
            <CardContent className="p-0 relative">
              <img
                src={dashboardMockupPath}
                alt="Live Production Line Monitoring Dashboard"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                data-testid="img-dashboard"
              />
              {/* Premium overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </CardContent>
          </Card>

          {/* Premium floating elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-secondary/30 to-tertiary/20 rounded-full backdrop-blur-md border border-tertiary/30 shadow-lg shadow-tertiary/20"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute -bottom-8 -left-8 w-8 h-8 bg-gradient-to-br from-tertiary/30 to-secondary/20 rounded-full backdrop-blur-md border border-tertiary/30 shadow-lg shadow-tertiary/20"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
      </SlideIn>

      {/* Services Grid */}
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={index}
              variants={serviceCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2, margin: "0px 0px -10% 0px" }}
              whileHover={serviceCardHover}
              data-testid={`card-service-${index}`}
              data-service-card={index}
            >
              <Card className="group relative h-full overflow-hidden border border-secondary/30 bg-card/20 backdrop-blur-xl hover:border-tertiary/50 hover:bg-card/30 transition-all duration-500 shadow-lg shadow-black/50 hover:shadow-secondary/20 hover:shadow-2xl">
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/0 via-tertiary/0 to-tertiary/0 group-hover:from-tertiary/5 group-hover:via-tertiary/10 group-hover:to-tertiary/5 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-[1px] bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Outer glow */}
                      <div className="absolute inset-0 rounded-xl bg-tertiary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Icon container */}
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:border-tertiary/50 group-hover:bg-gradient-to-br group-hover:from-secondary/30 group-hover:to-tertiary/20 transition-all duration-300 shadow-lg shadow-secondary/10">
                        <MagneticExplode triggerSelector={`[data-service-card="${index}"]`}>
                          <IconComponent className="h-8 w-8 text-tertiary drop-shadow-[0_0_6px_rgba(98,170,222,0.5)] transition-all duration-300" data-testid={`icon-service-${index}`} />
                        </MagneticExplode>
                      </div>
                    </motion.div>

                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5, y: -5 }}
                    >
                      <ArrowUpRight className="h-6 w-6 text-tertiary drop-shadow-[0_0_6px_rgba(98,170,222,0.5)]" />
                    </motion.div>
                  </div>

                  <CardTitle className="text-xl text-foreground group-hover:text-tertiary transition-colors duration-300 drop-shadow-lg font-bold" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 space-y-6 relative z-10">
                  <p className="text-foreground/70 leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_4px_rgba(98,170,222,0.6)]" />
                        <span className="text-foreground/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                {/* Premium bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tertiary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(98,170,222,0.5)]" />
              </Card>
            </motion.div>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}