import React, { useEffect } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { services } from "../data";
import { motion } from "framer-motion";

/**
 * Modern black/white themed ServiceDetail page with elegant sections.
 */
const serviceFeatures = {
  "web-app": {
    features: [
      "Responsive UI/UX design",
      "REST/GraphQL APIs",
      "Cloud-native deployments",
      "Security best practices",
      "Ongoing support & scaling"
    ],
    image: "/project-images/web-app-service.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS/GCP", "Docker"],
    process: [
      "Requirements Analysis",
      "UI/UX Design",
      "Development",
      "Testing",
      "Deployment"
    ]
  },
  "open-source": {
    features: [
      "Enterprise-grade platform customization",
      "Seamless deployment & configuration",
      "Integration with existing systems",
      "Performance optimization",
      "Ongoing maintenance & updates"
    ],
    image: "/project-images/open-source-service.jpg",
    technologies: ["Docker", "Kubernetes", "Git", "CI/CD", "Cloud Platforms"],
    process: [
      "Requirements Analysis",
      "Platform Selection",
      "Customization",
      "Deployment",
      "Support & Maintenance"
    ],
    examples: [
      {
        category: "Communication & Collaboration",
        platforms: ["Mattermost", "RocketChat"]
      },
      {
        category: "Enterprise Resource Planning",
        platforms: ["ERPNext", "Odoo"]
      },
      {
        category: "AI & Machine Learning",
        platforms: ["Ollama", "Open WebUI"]
      },
      {
        category: "E-commerce & CMS",
        platforms: ["Medusa", "Saleor", "Strapi"]
      },
      {
        category: "Productivity & Knowledge",
        platforms: ["AFFiNE"]
      }
    ]
  },
  "mobile-app": {
    features: [
      "iOS & Android platforms",
      "Native & cross-platform",
      "Push notifications",
      "App Store/Play Store launch",
      "Maintenance & analytics"
    ],
    image: "/project-images/mobile-app-service.jpg",
    technologies: ["React Native", "Flutter", "Firebase", "Swift", "Kotlin"],
    process: [
      "Platform Strategy",
      "UI/UX Design",
      "Native Development",
      "Testing",
      "Store Launch"
    ]
  },
  "hosting": {
    features: [
      "Managed cloud & on-prem hosting",
      "Dedicated servers",
      "Automated backups",
      "Global CDN integration",
      "24/7 monitoring"
    ],
    image: "/project-images/hosting-service.jpg",
    technologies: ["AWS", "GCP", "Azure", "Kubernetes", "Docker"],
    process: [
      "Infrastructure Planning",
      "Security Setup",
      "Deployment",
      "Monitoring",
      "Maintenance"
    ]
  },
  "enterprise": {
    features: [
      "Customizable modules",
      "White-label ready",
      "Multi-tenant architecture",
      "API integrations",
      "Branding & localization"
    ],
    image: "/project-images/enterprise-service.jpg",
    technologies: ["Java", "Spring Boot", "Oracle", "Kubernetes", "Redis"],
    process: [
      "Business Analysis",
      "Architecture Design",
      "Development",
      "Integration",
      "Training"
    ]
  },
  "pentest": {
    features: [
      "Comprehensive security audits",
      "Vulnerability scanning",
      "Penetration testing",
      "Detailed risk reports",
      "Remediation guidance"
    ],
    image: "/project-images/pentest-service.jpg",
    technologies: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark"],
    process: [
      "Scope Definition",
      "Reconnaissance",
      "Testing",
      "Analysis",
      "Reporting"
    ]
  },
  "digital-ai": {
    features: [
      "SEO & SEM",
      "AI agent development",
      "Workflow automation",
      "Social media campaigns",
      "Analytics & reporting"
    ],
    image: "/project-images/digital-ai-service.jpg",
    technologies: ["TensorFlow", "PyTorch", "Google Ads", "Meta Ads", "Analytics"],
    process: [
      "Strategy Planning",
      "AI Model Development",
      "Campaign Setup",
      "Optimization",
      "Reporting"
    ]
  },
  "bulk-campaigns": {
    features: [
      "Bulk SMS & email",
      "Campaign management",
      "Automation workflows",
      "Delivery analytics",
      "Compliance & opt-out"
    ],
    image: "/project-images/bulk-campaigns-service.jpg",
    technologies: ["SendGrid", "Twilio", "AWS SES", "Mailchimp", "HubSpot"],
    process: [
      "List Management",
      "Content Creation",
      "Campaign Setup",
      "Delivery",
      "Analysis"
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const location = useLocation();
  const service = services.find(s => s.id === id);
  const serviceDetail = serviceFeatures[id];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!service || !serviceDetail) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="min-h-screen pb-20 bg-[#111111]">
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={serviceDetail.image} 
          alt={service.name}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]" />
        <motion.h1 
          initial={{opacity:0, y:30}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.7}} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-heading text-6xl md:text-7xl font-extrabold text-white text-center"
        >
          {service.name}
        </motion.h1>
      </div>

      <section className="max-w-7xl mx-auto py-16 px-4">
        <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{delay:0.2, duration:0.7}}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-[#1A1A1A] p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <p className="text-gray-400 text-lg mb-8">{service.desc}</p>
            <div className="space-y-4">
              {serviceDetail.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1A1A1A] p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {serviceDetail.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-white text-black rounded-full font-medium">{tech}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Our Process</h2>
              <div className="space-y-4">
                {serviceDetail.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {id === 'open-source' && serviceDetail.examples && (
          <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.4, duration:0.7}}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Open Source Solutions We Work With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceDetail.examples.map((category, index) => (
                <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, pIndex) => (
                      <span key={pIndex} className="px-3 py-1 bg-[#2A2A2A] text-gray-300 rounded-full text-sm">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.4, duration:0.7}}
          className="mt-16 text-center"
        >
          <Link 
            to="/contact" 
            className="inline-block px-12 py-5 bg-white text-black font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
