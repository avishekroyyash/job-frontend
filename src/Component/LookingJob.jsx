"use client";

import Link  from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FiArrowRight, FiStar, FiBriefcase, FiZap } from "react-icons/fi";
import fpic from '../../public/images/globe.png'

const STATS = [
  { icon: FiBriefcase, num: "120K+", lbl: "Active roles"   },
  { icon: FiStar,      num: "4.9 ★", lbl: "Avg. rating"    },
  { icon: FiZap,       num: "3 min",  lbl: "To get started" },
];

export default function LookingJob() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 pb-28 pt-20 text-center mb-2">

      {/* Globe glow */}
      <div
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[min(800px,110vw)] aspect-square rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 50% 40%, #3a30c8 0%, #1a1580 28%, #0a0830 58%, transparent 78%)`
        }}
      />

      {/* Globe SVG grid */}
      <svg
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[min(800px,110vw)] opacity-[0.32] pointer-events-none"
        viewBox="0 0 700 700"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="hero-hemi">
            <ellipse cx="350" cy="350" rx="350" ry="350" />
          </clipPath>
        </defs>
        <g clipPath="url(#hero-hemi)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.7" fill="none">
          {[350, 280, 210, 140, 70].map((r) => (
            <ellipse key={r} cx="350" cy="350" rx={r} ry={r} />
          ))}
          {[200, 120, 50].map((ry) => (
            <ellipse key={ry} cx="350" cy="350" rx="350" ry={ry} />
          ))}
          {[0, 45, -45, 22.5, -22.5, 67.5, -67.5, 90].map((deg) => (
            <line key={deg} x1="0" y1="350" x2="700" y2="350" transform={`rotate(${deg},350,350)`} />
          ))}
        </g>
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center">

        {/* Logo image via next/image */}
        <div className="mb-6">
          <Image
            src="/logo.svg"
            alt="Roleio logo"
            width={40}
            height={40}
            priority
            className="mx-auto opacity-90"
          />
        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.13] text-white/60 text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-7">
          <FiZap className="text-violet-400 text-sm" />
          AI-Powered Matching
        </span>

        {/* Headline */}
        <h1 className="text-[clamp(32px,5.5vw,62px)] font-extrabold leading-[1.13] tracking-tight mb-5">
          Your next role is
          <br className="hidden sm:block" />
          {" "}already looking for you
        </h1>

        {/* Subtitle */}
        <p className="text-white/50 text-[clamp(14px,2vw,17px)] leading-relaxed max-w-[420px] mx-auto mb-9">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* CTA buttons — using HeroUI Button + next/link */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-stretch sm:items-center justify-center">
          <Button
            as={Link}
            href="/register"
            size="lg"
            radius="md"
            className="bg-white text-[#0a0830] font-semibold text-[15px] px-8 hover:opacity-85 transition-opacity"
            endContent={<FiArrowRight />}
          >
            Create a free account
          </Button>

          <Button
            as={Link}
            href="/pricing"
            variant="bordered"
            size="lg"
            radius="md"
            className="text-white border-white/25 bg-white/[0.06] font-medium text-[15px] px-8 hover:bg-white/[0.13] transition-colors"
          >
            View pricing
          </Button>
        </div>

        {/* Trusted by — avatar row */}
        <div className="flex items-center gap-3 mt-8">
          <div className="flex -space-x-2">
            {[
              { src: "/avatars/a1.jpg", alt: "User 1" },
              { src: "/avatars/a2.jpg", alt: "User 2" },
              { src: "/avatars/a3.jpg", alt: "User 3" },
            ].map((av) => (
              <div key={av.src} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden relative">
                <Image src={av.src} alt={av.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
          <p className="text-white/45 text-[13px]">
            Trusted by{" "}
            <span className="text-white font-medium">50,000+ professionals</span>
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 mt-16 border-t border-white/[0.08] pt-10 flex flex-wrap gap-10 justify-center w-full max-w-lg">
        {STATS.map(({ icon: Icon, num, lbl }) => (
          <div key={lbl} className="text-center">
            <div className="flex items-center justify-center gap-1.5 text-violet-400 mb-1">
              <Icon className="text-base" />
              <span className="text-white font-bold text-[clamp(20px,3vw,28px)] tracking-tight">
                {num}
              </span>
            </div>
            <p className="text-white/40 text-xs tracking-wide uppercase">{lbl}</p>
          </div>
        ))}
      </div>
    </section>
  );
}