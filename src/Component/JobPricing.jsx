"use client";
import { motion } from "motion/react"
import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiPlus, FiZap, FiTrendingUp, FiAward } from "react-icons/fi";
import { MotionConfig } from "motion/react";



const PLANS = [
  {
    id: "starter",
    icon: <FiAward size={18} />,
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    cta: "Choose This Plan",
    href: "/get-started?plan=starter",
    highlighted: false,
  },
  {
    id: "growth",
    icon: <FiTrendingUp size={18} />,
    iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    name: "Growth",
    monthlyPrice: 17,
    yearlyPrice: 13,
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    cta: "Choose This Plan",
    href: "/get-started?plan=growth",
    highlighted: true,
  },
  {
    id: "premium",
    icon: <FiZap size={18} />,
    iconBg: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    name: "Premium",
    monthlyPrice: 99,
    yearlyPrice: 75,
    description: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    cta: "Choose This Plan",
    href: "/get-started?plan=premium",
    highlighted: false,
  },
];

export default function JobPricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-full bg-black py-16 md:py-24 px-5 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-indigo-500 rotate-45" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/45">
              Pricing
            </span>
            <span className="w-2 h-2 rounded-sm bg-indigo-500 rotate-45" />
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-lg">
            Pay for the leverage, <br className="hidden sm:block" /> not the listings
          </h2>
        </div>

        {/* ── Toggle ── */}
        <div   className="flex items-center justify-center mb-10 md:mb-14">
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#141416] border border-white/[0.08]">
            <motion.button  
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !yearly
                  ? "bg-white text-black shadow"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Monthly
            </motion.button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                yearly
                  ? "bg-white text-black shadow"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-500 text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* ── Cards ── */}
        <motion.div    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between gap-8 p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                plan.highlighted
                  ? "bg-[#141416] border-white/20 shadow-[0_0_40px_rgba(99,102,241,0.12)]"
                  : "bg-[#0e0e10] border-white/[0.07] hover:border-white/15"
              }`}
            >
              {/* Top */}
              <div className="flex flex-col gap-6">

                {/* Name + Price row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-9 h-9 rounded-xl border ${plan.iconBg}`}>
                      {plan.icon}
                    </div>
                    <span className="text-white font-semibold text-base">{plan.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white text-2xl font-bold">
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-white/40 text-xs ml-1">/month</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.07]" />

                {/* Features */}
                <div className="flex flex-col gap-2">
                  <p className="text-white/50 text-sm mb-1">{plan.description}</p>
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div className="flex items-center justify-center w-4 h-4 rounded-sm bg-white/[0.07] border border-white/[0.1]">
                        <FiPlus size={10} className="text-white/50" />
                      </div>
                      <span className="text-white/60 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150 group ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/[0.06] text-white border border-white/[0.08] hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {plan.cta}
                <FiArrowRight
                  size={16}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                />
              </Link>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}