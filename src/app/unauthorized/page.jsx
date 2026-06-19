'use client'
// app/unauthorized/page.jsx

import Link from "next/link";
import { FiLock, FiArrowLeft, FiHome } from "react-icons/fi";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="mx-auto w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-6">
          <FiLock className="text-red-600 text-5xl" />
        </div>

        {/* Error Code */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-slate-900">
          401
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800">
          Unauthorized Access
        </h2>

        {/* Description */}
        <p className="mt-4 text-slate-600 text-lg max-w-lg mx-auto">
          Sorry, you don't have permission to access this page.
          Please log in with the appropriate account or contact
          the administrator if you believe this is a mistake.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            <FiHome />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium hover:bg-slate-100 transition-all duration-300"
          >
            <FiArrowLeft />
            Go Back
          </button>
        </div>

        {/* Card */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-800">
            Need Access?
          </h3>
          <p className="mt-2 text-slate-600">
            Contact your administrator or sign in with an account
            that has the required permissions.
          </p>
        </div>
      </div>
    </div>
  );
}
//If you're using Next.js App Router middleware
// middleware.js

import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuthorized = false;

  if (!isAuthorized) {
    return NextResponse.redirect(
      new URL("/unauthorized", req.url)
    );
  }

  return NextResponse.next();
}



