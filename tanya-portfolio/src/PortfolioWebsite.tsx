import {
  Activity,
  Award,
  BadgeCheck,
  BarChart3,
  Binary,
  Briefcase,
  ChevronRight,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Radar,
  ScanSearch,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

import React from "react";
import { motion } from "framer-motion";

// Simple local UI components for plain Vite + React projects
function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ asChild = false, children, className = "", ...props }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: [className, children.props.className].filter(Boolean).join(" "),
    });
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

const experience = [
  {
    role: "Information Security Analyst 1",
    company: "Noridian Healthcare Solutions, LLC",
    period: "Dec 2023 – Jan 2026",
    location: "Remote | United States",
    bullets: [
      "Monitored and investigated network and endpoint activity using Microsoft Sentinel, Defender, and Netskope to detect and respond to threats.",
      "Conducted threat hunting, phishing response, malware review, and incident documentation aligned with operational procedures.",
      "Supported vulnerability remediation, audit evidence preparation, and compliance efforts tied to NIST, SOX, GDPR, and healthcare controls.",
      "Built reports and tracked remediation progress, risk exposure, and security operations outcomes across regulated environments.",
    ],
  },
  {
    role: "Cyber Threat Analyst Intern",
    company: "iQ4 Corporation & Alan B. Levan/NSU Broward Center of Innovation",
    period: "Sep 2023 – Nov 2023",
    location: "Remote | United States",
    bullets: [
      "Worked on cyber risk and insider threat case analysis using the NIST Cybersecurity Framework.",
      "Documented incident response, recovery planning, and risk management workflows for team-based investigations.",
      "Supported cybersecurity awareness initiatives for Spanish-speaking communities and small businesses.",
    ],
  },
  {
    role: "Cybersecurity Fellow",
    company: "Grow with Google on Coursera",
    period: "Jun 2023 – Aug 2023",
    location: "Remote",
    bullets: [
      "Completed hands-on labs and simulations in SIEM, Linux, SQL, Python, IDS concepts, and security operations workflows.",
      "Built entry-level SOC foundations in alert review, incident analysis, and investigation processes.",
    ],
  },
  {
    role: "Developer / IT Support Roles",
    company: "StudioLabs, Vanderbilt University, and Middle Tennessee State University",
    period: "2020 – 2023",
    location: "Remote & On-site",
    bullets: [
      "Built technical foundations across software development, documentation, cloud support, research, and operational analysis.",
      "Strengthened cross-functional communication, reporting, systems thinking, and analytical problem-solving skills.",
    ],
  },
];

const skillGroups = [
  {
    title: "SOC Operations",
    items: [
      "Microsoft Sentinel",
      "Microsoft Defender",
      "SIEM Monitoring",
      "Threat Hunting",
      "Incident Response",
      "Phishing Investigation",
      "Malware Analysis",
      "IOC Review",
    ],
  },
  {
    title: "FinTech & Risk",
    items: [
      "Financial Risk Analysis",
      "Regulatory Compliance",
      "SOX Controls",
      "GDPR",
      "Risk Dashboards",
      "Fraud Detection Concepts",
      "Security for Financial Systems",
      "Exposure Tracking",
    ],
  },
  {
    title: "Technical Stack",
    items: [
      "Linux",
      "Python",
      "SQL",
      "Azure",
      "Microsoft Purview",
      "Netskope",
      "ServiceNow",
      "Data Analysis",
    ],
  },
];

const certifications = [
  "CompTIA Security+",
  "Microsoft Security Operations Analyst (SC-200)",
  "Microsoft Security, Compliance & Identity Fundamentals (SC-900)",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Google Cybersecurity Professional Certificate",
];

const notaryCredential = {
  title: "Notary Public",
  issuer: "State of North Carolina",
  issued: "Issued Jul 2025",
  expires: "Expires Jul 2030",
  id: "Credential ID 202521200052",
};

const education = [
  "Western Governors University — B.S. Finance & Data Science",
  "Middle Tennessee State University — M.A. International Affairs, Risk Management, & Chinese Politics",
  "Middle Tennessee State University — B.S. Criminal Justice, Homeland Security, & Information Security",
  "Interamerican University of Puerto Rico — A.S. Business Administration & Marketing",
];

const achievements = [
  "Top 16% in a Security Engineer Capture-the-Flag competition.",
  "Built bilingual cybersecurity awareness content for broader community education.",
  "Managed reporting, operations, and coordination in fast-paced team environments.",
  "Combines cybersecurity operations experience with finance, compliance, and data analytics perspective.",
];

function SectionHeading({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
        <Icon className="h-4 w-4" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-slate-400 sm:text-base">{description}</p>
    </div>
  );
}

function Panel({ title, icon: Icon, children }) {
  return (
    <Card className="rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-black/20 backdrop-blur">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-emerald-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Live
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}

function MetricCard({ icon: Icon, label, value, note }) {
  return (
    <Card className="rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-black/20 backdrop-blur">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{value}</p>
            <p className="mt-2 text-sm text-slate-400">{note}</p>
          </div>
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-cyan-300">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PortfolioWebsite() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.15),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.12),_transparent_20%),linear-gradient(to_bottom,_#020617,_#020617)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:36px_36px]" />

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <div className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-center text-xs text-emerald-300 sm:w-auto sm:justify-start sm:text-sm">
              <ShieldCheck className="h-4 w-4" />
              Information Security Analyst • Finance Student • AI & Data Science Enthusiast
            </div>
            <div className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-center text-xs text-cyan-300 sm:w-auto sm:justify-start sm:text-sm">
              <Activity className="h-4 w-4" />
              SOC Dashboard • FinTech Focus
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">Threat Detection • Risk • Compliance • Finance</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tanya Gonzalez</h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-xl">
                Cybersecurity and Financial Risk Analyst with 3+ years of experience across security operations, threat detection, incident response, compliance, and regulated environments. Currently pursuing a Finance degree with a strong interest in FinTech security, cyber risk, artificial intelligence, and data science.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                Experienced with Microsoft Sentinel, Microsoft Defender, ServiceNow, Netskope, Linux, Python, and SQL. I bring a hybrid perspective that connects cyber defense with financial systems, risk reporting, and business-focused decision making.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="w-full rounded-2xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 sm:w-auto">
                  <a href="mailto:tanyaleedev@gmail.com">Contact Me</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full rounded-2xl border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800 sm:w-auto">
                  <a href="https://www.linkedin.com/in/tanyagonzalez/" target="_blank" rel="noreferrer">View LinkedIn</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full rounded-2xl border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800 sm:w-auto">
                  <a href="https://github.com/tanyaleepr" target="_blank" rel="noreferrer">View GitHub</a>
                </Button>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                <MetricCard icon={Radar} label="Security Ops" value="3+ Yrs" note="Detection, triage, investigation, and legally verifiable documentation (NC Notary Public)." />
                <MetricCard icon={Wallet} label="FinTech Lens" value="Risk" note="Finance controls, compliance mindset, and regulatory awareness supported by NC Notary credential." />
                <MetricCard icon={Cpu} label="Core Stack" value="SIEM" note="Sentinel, Defender, Netskope, ServiceNow with audit-ready documentation practices." />
                
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="grid gap-6">
              <Panel title="Target Roles" icon={Briefcase}>
                <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  {[
                    "SOC Analyst",
                    "Cybersecurity Analyst",
                    "Tier 2 SOC Analyst",
                    "Financial Analyst",
                    "FinTech Security",
                    "Business Analytics",
                    "Data Science",
                    "Cyber Risk Analyst",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">{item}</div>
                  ))}
                </div>
              </Panel>

              <Panel title="Contact & Coverage" icon={BadgeCheck}>
                <div className="grid gap-3">
                  {[
                    { icon: Mail, text: "tanyaleedev@gmail.com" },
                    { icon: MapPin, text: "Knightdale, North Carolina" },
                    { icon: Linkedin, text: "linkedin.com/in/tanyagonzalez" },
                    { icon: Github, text: "github.com/tanyaleepr" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                      <item.icon className="h-4 w-4 text-emerald-300" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </Panel>
            </motion.div>
          </div>

            <div className="mt-8">
              <Panel title="Regulatory & Legal Credential" icon={Landmark}>
                <div className="text-sm leading-7 text-slate-300">
                  <p className="font-medium">Notary Public — State of North Carolina</p>
                  <p className="text-slate-400">Commissioned Public Official Authorized to Verify Legal Documents</p>
                  <p>{notaryCredential.issued} · {notaryCredential.expires}</p>
                  <p className="text-slate-400">{notaryCredential.id}</p>
                  <p className="mt-2 text-slate-400">Supports compliance environments where document verification, identity validation, and legally recognized attestations are required.</p>
                </div>
              </Panel>
            </div>
          </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <SectionHeading
          icon={Database}
          eyebrow="Profile Overview"
          title="A cybersecurity portfolio with finance and fintech depth"
          description="My background blends SOC operations, cyber risk, compliance, reporting, and financial awareness. I am especially interested in roles where security monitoring, investigation, and risk analysis support digital financial systems and regulated business environments."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Panel title="SOC Operations" icon={ScanSearch}>
            <div className="space-y-3 text-sm leading-7 text-slate-300">
              <p>• Alert triage and investigation</p>
              <p>• Threat hunting and IOC analysis</p>
              <p>• Phishing and email security response</p>
              <p>• Incident escalation and documentation</p>
              <p>• Endpoint and network monitoring</p>
            </div>
          </Panel>
          <Panel title="Finance & Risk Alignment" icon={Landmark}>
            <div className="space-y-3 text-sm leading-7 text-slate-300">
              <p>• Financial risk awareness and controls mindset</p>
              <p>• Compliance support in regulated environments</p>
              <p>• Risk dashboards and remediation tracking</p>
              <p>• Business-minded security recommendations</p>
              <p>• FinTech-oriented security interest</p>
            </div>
          </Panel>
          <Panel title="Data & Technical Analysis" icon={Binary}>
            <div className="space-y-3 text-sm leading-7 text-slate-300">
              <p>• Python and SQL for analysis</p>
              <p>• Linux investigation workflows</p>
              <p>• Dashboard and reporting support</p>
              <p>• Cross-functional documentation</p>
              <p>• Clear communication for technical findings</p>
            </div>
          </Panel>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            icon={Briefcase}
            eyebrow="Experience"
            title="Professional experience"
            description="Hands-on work across threat detection, incident response, risk analysis, technical operations, and regulated security environments."
          />

          <div className="grid gap-6">
            {experience.map((job) => (
              <Panel key={`${job.company}-${job.role}`} title={job.role} icon={ShieldCheck}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-300">{job.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 sm:text-right">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3">
                  {job.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300">
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <SectionHeading
          icon={ShieldCheck}
          eyebrow="Skills Matrix"
          title="Cybersecurity, fintech, and technical tools"
          description="A focused skills layout for recruiters looking for SOC readiness, cyber risk awareness, and finance-aligned security capability."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Panel key={group.title} title={group.title} icon={[Radar, Wallet, Cpu][index]}>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading
              icon={GraduationCap}
              eyebrow="Education"
              title="Academic foundation"
              description="Finance, data, risk, international affairs, and information security shape my multidimensional approach to cyber and business problems."
            />
            <div className="grid gap-4">
              {education.map((item) => (
                <Panel key={item} title="Education Entry" icon={GraduationCap}>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </Panel>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              icon={Award}
              eyebrow="Certifications"
              title="Credentials"
              description="Security certifications that support analyst credibility in SOC, compliance, and Microsoft security environments."
            />
            <div className="grid gap-4">
              {certifications.map((item) => (
                <Panel key={item} title="Certification" icon={Award}>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </Panel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <SectionHeading
          icon={Users}
          eyebrow="Highlights"
          title="Selected achievements"
          description="Signals of initiative, communication, adaptability, and leadership that strengthen my analyst profile."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {achievements.map((item) => (
            <Panel key={item} title="Achievement" icon={BadgeCheck}>
              <div className="flex gap-3 text-sm leading-7 text-slate-300">
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                <p>{item}</p>
              </div>
            </Panel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <SectionHeading
          icon={Github}
          eyebrow="Projects & Code"
          title="GitHub"
          description="Repositories and experiments covering cybersecurity labs, SIEM investigations, automation, analytics, and technical learning."
        />

        <Panel title="tanyaleepr" icon={Github}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              Explore work related to cybersecurity experimentation, analytics, and software development that supports my growth across SOC operations, technical problem-solving, and FinTech-oriented security roles.
            </p>
            <Button asChild size="lg" className="w-full rounded-2xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 sm:w-auto">
              <a href="https://github.com/tanyaleepr" target="_blank" rel="noreferrer">View GitHub</a>
            </Button>
          </div>
        </Panel>
      </section>

      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <Card className="rounded-[2rem] border border-slate-800 bg-slate-950/80 shadow-2xl shadow-black/20">
            <CardContent className="flex flex-col gap-6 p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm text-emerald-300">Open to work</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Interested in working together?</h2>
                <p className="mt-3 max-w-2xl text-slate-400">
                  I’m open to opportunities in cybersecurity operations, Tier 2 SOC analysis, FinTech security, cyber risk analysis, financial analysis, and data-driven roles that support secure digital infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="w-full rounded-2xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 sm:w-auto">
                  <a href="mailto:tanyaleedev@gmail.com">Email Me</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full rounded-2xl border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800 sm:w-auto">
                  <a href="https://www.linkedin.com/in/tanyagonzalez/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
