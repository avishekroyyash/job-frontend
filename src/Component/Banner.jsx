"use client";
import { motion } from "motion/react"
import Image from "next/image";
import { FiBriefcase, FiBarChart2, FiSearch, FiStar } from "react-icons/fi";
import bgimg from '../../public/images/globe.png'


const STATS = [
  { icon: <FiBriefcase size={20} />, value: "50K", label: "Active Jobs" },
  { icon: <FiBarChart2 size={20} />, value: "12K", label: "Companies" },
  { icon: <FiSearch size={20} />,    value: "2M",  label: "Job Seekers" },
  { icon: <FiStar size={20} />,      value: "97%", label: "Satisfaction Rate" },
];

export default function Banner() {
  return (
   
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">

      {/* ── Background globe image ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={bgimg}
          alt="Globe background"
          fill
          className="object-cover object-center opacity-80 "
          priority
        />
        {/* Purple glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(99,60,220,0.45)_0%,transparent_70%)]" />
        {/* Bottom dark fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-black to-transparent" />
      </div>

      {/* ── Hero text ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 mt-16 md:mt-24">
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-xl leading-snug">
          Assisting over{" "}
          <span className="font-bold text-white">15,000 job seekers</span>
          <br />
          find their dream positions.
        </p>
      </div>

      {/* ── Stats cards ── */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-12 mt-16 md:mt-24 pb-10">
        <motion.div    whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}    className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-4 p-5 sm:p-6 rounded-2xl bg-[#0e0e10]/90 border border-white/8 backdrop-blur-sm hover:border-white/20 transition-colors duration-200"
            >
              <span className="text-white/50">{stat.icon}</span>
              <div>
                <p className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
   
  );
}