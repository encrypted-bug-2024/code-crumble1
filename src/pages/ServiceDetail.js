import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data";
import { motion } from "framer-motion";

/**
 * LatentHQ-inspired ServiceDetail: huge heading, glass glowing card, pill CTA.
 */
const serviceFeatures = {
  "web-app": [
    "Responsive UI/UX design",
    "REST/GraphQL APIs",
    "Cloud-native deployments",
    "Security best practices",
    "Ongoing support & scaling"
  ],
  "mobile-app": [
    "iOS & Android platforms",
    "Native & cross-platform",
    "Push notifications",
    "App Store/Play Store launch",
    "Maintenance & analytics"
  ],
  "hosting": [
    "Managed cloud & on-prem hosting",
    "Dedicated servers",
    "Automated backups",
    "Global CDN integration",
    "24/7 monitoring"
  ],
  "enterprise": [
    "Customizable modules",
    "White-label ready",
    "Multi-tenant architecture",
    "API integrations",
    "Branding & localization"
  ],
  "pentest": [
    "Comprehensive security audits",
    "Vulnerability scanning",
    "Penetration testing",
    "Detailed risk reports",
    "Remediation guidance"
  ],
  "digital-ai": [
    "SEO & SEM",
    "AI agent development",
    "Workflow automation",
    "Social media campaigns",
    "Analytics & reporting"
  ],
  "bulk-campaigns": [
    "Bulk SMS & email",
    "Campaign management",
    "Automation workflows",
    "Delivery analytics",
    "Compliance & opt-out"
  ]
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  if (!service) return <div className="text-light">Service not found.</div>;
  return (
    <main className="min-h-screen pb-20">
      <section className="max-w-4xl mx-auto py-24 px-4">
        <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="font-heading text-6xl md:text-7xl font-extrabold mb-16 text-white drop-shadow-lg text-center">{service.name}</motion.h1>
        <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.7}} className="glass glow-border p-10 rounded-2xl text-center shadow-md">
          <div className="text-light/80 mb-8 text-2xl">{service.desc}</div>
          <a href="/contact" className="pill-btn text-lg px-12 py-4">Contact Us</a>
        </motion.div>
      </section>
    </main>
  );
}
