"use client";

import {
  FiSearch,
  FiTrendingUp,
  FiBarChart2,
  FiBookmark,
  FiZap,
  FiFileText,
  FiTarget,
  FiAward,
} from "react-icons/fi";

const FEATURES = [
  {
    icon: <FiSearch size={20} />,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: <FiTrendingUp size={20} />,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: <FiBarChart2 size={20} />,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: <FiBookmark size={20} />,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: <FiZap size={20} />,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: <FiFileText size={20} />,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: <FiTarget size={20} />,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: <FiAward size={20} />,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#141416] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-[#18181c] transition-all duration-200 group">
      {/* Icon box */}
      <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[#1e1e24] border border-white/[0.07] text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-200">
        {icon}
      </div>
      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-sm font-semibold leading-snug">{title}</h3>
        <p className="text-white/45 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function JobFeature() {
  return (
    <section className="w-full bg-[#0a0a0b] py-16 md:py-24 px-5 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-indigo-500 rotate-45" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/45">
              Features Job
            </span>
            <span className="w-2 h-2 rounded-sm bg-indigo-500 rotate-45" />
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-lg">
            Everything you need <br className="hidden sm:block" /> to succeed
          </h2>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}