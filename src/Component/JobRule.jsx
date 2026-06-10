"use client";

import Link from "next/link";
import { FiMapPin, FiLayers, FiDollarSign, FiArrowRight } from "react-icons/fi";

const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
    href: "/jobs/1",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
    href: "/jobs/2",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
    href: "/jobs/3",
  },
  {
    id: 4,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
    href: "/jobs/4",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
    href: "/jobs/5",
  },
  {
    id: 6,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
    href: "/jobs/6",
  },
];

function JobCard({ job }) {
  return (
    <div className="flex flex-col justify-between gap-6 p-6 rounded-2xl bg-[#141416] border border-white/[0.08] hover:border-white/20 transition-all duration-200 group">

      {/* Top */}
      <div className="flex flex-col gap-3">
        <h3 className="text-white text-xl font-bold">{job.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{job.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white/70 bg-white/[0.06] border border-white/[0.08]">
          <FiMapPin size={11} className="text-indigo-400" />
          {job.location}
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white/70 bg-white/[0.06] border border-white/[0.08]">
          <FiLayers size={11} className="text-purple-400" />
          {job.type}
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white/70 bg-white/[0.06] border border-white/[0.08]">
          <FiDollarSign size={11} className="text-emerald-400" />
          {job.salary}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06]" />

      {/* Apply */}
      <Link
        href={job.href}
        className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors duration-150 group-hover:gap-2.5"
      >
        Apply Now
        <FiArrowRight size={15} className="transition-transform duration-150 group-hover:translate-x-1" />
      </Link>

    </div>
  );
}

export default function JobRule() {
  return (
    <section className="w-full bg-black py-16 md:py-24 px-5 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-indigo-500 rotate-45" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              Smart Job Discovery
            </span>
            <span className="w-2 h-2 rounded-sm bg-indigo-500 rotate-45" />
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-lg">
            The roles you&apos;d never find by searching
          </h2>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
}