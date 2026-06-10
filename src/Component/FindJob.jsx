"use client";

import { useState } from "react";
import { FiSearch, FiMapPin, FiBriefcase } from "react-icons/fi";

const TRENDING = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export default function FindJob() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#0a0a0b] overflow-hidden px-5 sm:px-6 lg:px-12">

      {/* ── Subtle radial glow ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(40,35,80,0.6)_0%,transparent_70%)] pointer-events-none" />

      {/* ── Dot grid texture ── */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl gap-6 py-24 md:py-32">

        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141416] border border-white/[0.1] text-sm">
          <FiBriefcase size={15} className="text-orange-400" />
          <span className="text-white font-bold">50,000+</span>
          <span className="text-white/40 tracking-widest text-xs font-semibold uppercase">
            New Jobs This Month
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Find Your Dream Job Today
        </h1>

        {/* Subheading */}
        <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* ── Search bar ── */}
        <div className="w-full mt-2">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 w-full bg-[#141416] border border-white/[0.1] rounded-2xl sm:rounded-full px-3 py-3 sm:py-2 sm:px-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

            {/* Job input */}
            <div className="flex items-center gap-2 flex-1 px-2">
              <FiSearch size={16} className="text-white/30 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-white placeholder-white/30 outline-none"
              />
            </div>

            {/* Divider — hidden on mobile */}
            <div className="hidden sm:block h-5 w-px bg-white/15 mx-2 shrink-0" />

            {/* Location input */}
            <div className="flex items-center gap-2 flex-1 px-2">
              <FiMapPin size={16} className="text-white/30 shrink-0" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-white placeholder-white/30 outline-none"
              />
            </div>

            {/* Search button */}
            <button
              className="flex items-center justify-center w-full sm:w-10 h-10 rounded-xl sm:rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-150 shrink-0 mt-1 sm:mt-0"
              aria-label="Search jobs"
            >
              <FiSearch size={17} />
            </button>

          </div>
        </div>

        {/* ── Trending ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
          <span className="text-white/35 text-xs font-medium">Trending Position</span>
          {TRENDING.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-white/60 bg-white/[0.06] border border-white/[0.08] hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-150"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}