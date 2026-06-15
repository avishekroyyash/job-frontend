"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiBriefcase, FiGrid, FiDollarSign } from "react-icons/fi";
import logo from '../../public/images/logo.png'
import { signOut, useSession } from "@/lib/auth-client";

const NAV_ITEMS = [
  { label: "Browse Jobs", href: "/jobs",    icon: <FiBriefcase size={16} /> },
  { label: "Company",     href: "/company", icon: <FiGrid      size={16} /> },
  { label: "Pricing",     href: "/plan", icon: <FiDollarSign size={16} /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const {data} = useSession()
  const user = data?.user
  // console.log(user);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#111214] border-b border-white/[0.07]">

      {/* ── Main bar ── */}
      <nav className="mx-auto flex items-center justify-between px-5 md:px-8 lg:px-12 h-[60px] max-w-[1280px]">

        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" width={120} height={32} className="object-contain" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        {
          !user ? (
           <div className="hidden md:flex items-center gap-3">
          <div className="h-5 w-px bg-white/15" />
          <Link
            href="/login"
            className="px-4 py-2 rounded-md text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
          >
            Sign In
          </Link>
          <Link
            href="/resister"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 hover:shadow-[0_4px_14px_rgba(99,102,241,0.45)] transition-all duration-150"
          >
            Get Started
          </Link>
        </div>
          ): (
           <div  className="hidden md:flex items-center gap-3">
          <div className="h-5 w-px bg-white/15" />
          <Link
            href="/login"
            className="px-4 py-2 rounded-md text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
          >
            {user?.name}
          </Link>
          <Link
          onClick={()=> signOut()}
            href="/resister"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 hover:shadow-[0_4px_14px_rgba(99,102,241,0.45)] transition-all duration-150"
          >
           Sign Out
          </Link>
        </div>
          )
        }
       

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-gray-300 hover:bg-white/[0.07] transition-colors duration-150"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] border-t border-white/[0.07]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 pt-3 pb-2 gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-2.5 px-3 py-3 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                <span className="text-indigo-400">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA row */}
        <div className="flex items-center gap-3 px-4 pt-4 pb-5 border-t border-white/[0.07]">
          <Link
            href="/login"
            className="flex-1 text-center py-2.5 rounded-md text-sm font-semibold text-indigo-400 border border-indigo-400/35 hover:border-indigo-400/60 hover:text-indigo-300 transition-colors duration-150"
          >
            Sign In
          </Link>
          <Link
            href="/resister"
            className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 transition-colors duration-150"
          >
            Get Started
          </Link>
        </div>
      </div>

    </header>
  );
}