"use client";

import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import navpic from '../../public/images/logo.png'

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Job Discovery",  href: "/job-discovery" },
      { label: "Worker AI",      href: "/worker-ai" },
      { label: "Companies",      href: "/companies" },
      { label: "Salary Data",    href: "/salary-data" },
    ],
  },
  {
    heading: "Navigations",
    links: [
      { label: "Help Center",    href: "/help" },
      { label: "Career Library", href: "/career-library" },
      { label: "Contact",        href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom",        href: "/newsroom" },
    ],
  },
];

const SOCIALS = [
  { icon: <FiFacebook size={16} />,   href: "https://facebook.com",  label: "Facebook" },
  { icon: <FaPinterestP size={16} />, href: "https://pinterest.com", label: "Pinterest" },
  { icon: <FiLinkedin size={16} />,   href: "https://linkedin.com",  label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0b] border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">

        {/* ── Top section ── */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand col — spans 2 on lg */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* 👇 Replace src with your logo */}
            <Link href="/">
              <Image
                src={navpic}
                alt="HireLoop"
                width={120}
                height={32}
                className="object-contain"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-[220px]">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/[0.07]" />

        {/* ── Bottom bar ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Social icons */}
          <div className="flex items-center gap-2">
           {SOCIALS.map((s) => (
  <Link
    key={s.label}
    href={s.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={s.label}
    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-150"
  >
    {s.icon}
  </Link>
))}
          </div>

          {/* Copyright + legal */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
            <p className="text-white/30 text-xs">
              Copyright 2024 — Programming Hero
            </p>
            <div className="hidden sm:block h-3 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <Link
                href="/terms"
                className="text-white/40 text-xs hover:text-white/70 transition-colors duration-150"
              >
                Terms & Policy
              </Link>
              <span className="text-white/20 text-xs">·</span>
              <Link
                href="/privacy"
                className="text-white/40 text-xs hover:text-white/70 transition-colors duration-150"
              >
                Privacy Guideline
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}