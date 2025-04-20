// Centralized data for Code Crumble website

export const company = {
  name: "Code Crumble",
  founded: "2018",
  timeline: [
    { year: "2018", event: "Founded in India" },
    { year: "2020", event: "Expanded to East Africa (Kenya HQ)" },
    { year: "2023", event: "Opened London, UK office" },
  ],
  offices: [
    { location: "India", since: 2018 },
    { location: "Kenya (HQ)", since: 2020 },
    { location: "London, UK", since: 2023 },
  ],
  mission: "Empowering businesses globally with innovative, reliable, and scalable digital solutions.",
  vision: "To be the world’s most trusted partner for digital transformation.",
  values: ["Innovation", "Integrity", "Global Impact", "Excellence"],
};

export const leadership = [
  { name: "Prateek Jain", role: "CEO" },
  { name: "Shivam Taneja", role: "CTO" },
  { name: "Chirag Shukla", role: "COO" },
  { name: "Shivangi Jain", role: "CFO" },
  { name: "Guri Bains", role: "Development Head" },
  { name: "Moksha Shah", role: "Senior Software Developer" },
  { name: "Avi Khera", role: "Senior Mobile Developer" },
];

export const services = [
  {
    id: "web-app",
    name: "Web Application Development",
    desc: "Modern, scalable web apps for business growth. Responsive UI, robust backend, cloud-ready.",
  },
  {
    id: "mobile-app",
    name: "Mobile Application Development",
    desc: "Cross-platform mobile apps for iOS & Android. Seamless UX, native performance, global reach.",
  },
  {
    id: "hosting",
    name: "Managed Hosting & Dedicated Servers",
    desc: "Secure, reliable hosting solutions—on-premise or cloud. 24/7 monitoring, backups, and support.",
  },
  {
    id: "enterprise",
    name: "Enterprise-grade Customizable Solutions",
    desc: "White-label, modular platforms for reselling or internal use. API integrations, multi-tenant ready.",
  },
  {
    id: "pentest",
    name: "Penetration Testing & Vulnerability Assessment",
    desc: "Comprehensive security audits, risk analysis, and actionable remediation for your digital assets.",
  },
  {
    id: "digital-ai",
    name: "Digital Marketing & AI-Agent Development",
    desc: "SEO, PPC, Meta Ads, and AI-powered workflow automation for modern marketing.",
  },
  {
    id: "bulk-campaigns",
    name: "Bulk SMS & Email Campaign Management",
    desc: "Multi-channel campaigns: bulk SMS, email, Google PPC, Meta Ads. Automation & analytics included.",
  },
];

export const jobs = [
  { title: "Full Stack Developer", location: "Remote", type: "Full-time", description: "React, Node.js, REST APIs, cloud deployments." },
  { title: "Mobile App Engineer", location: "Kenya / Remote", type: "Full-time", description: "Flutter/React Native, iOS & Android, CI/CD." },
  { title: "AI/ML Specialist", location: "India / Remote", type: "Contract", description: "Custom AI agents, workflow automation, ML models." },
  { title: "Digital Marketing Lead", location: "London / Remote", type: "Full-time", description: "SEO, PPC, campaign management, analytics." },
];

export const projects = [
  {
    name: "TrackAlways",
    desc: "GPS fleet tracking: live, 60s updates, 24/7 global access.",
    logo: "trackalways.png",
    link: "https://trackalways.in",
  },
  {
    name: "Vegisphere",
    desc: "Premium fresh-produce exports from Kenya & Tanzania.",
    logo: "vegisphere.png",
    link: "https://vegisphere.com",
  },
  {
    name: "EncryptedBug",
    desc: "Cybersecurity services: pentesting & vulnerability assessment.",
    logo: "encryptedbug.png",
    link: "#",
  },
  {
    name: "MerceTec",
    desc: "Fuel-sensor innovations & IoT connectivity.",
    logo: "mercetech.png",
    link: "#",
  },
  { name: "CS Corp Technologies", desc: "Enterprise solutions provider.", logo: "cscorp.png", link: "#" },
  { name: "Barber Haven", desc: "Salon management platform.", logo: "barberhaven.png", link: "#" },
  { name: "Sttago", desc: "Tech consulting & services.", logo: "sttago.png", link: "#" },
  { name: "Empeeps", desc: "HR & employee engagement.", logo: "empeeps.png", link: "#" },
];
