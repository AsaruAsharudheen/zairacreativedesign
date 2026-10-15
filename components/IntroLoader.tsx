"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState("Crafting Elegance...");

  useEffect(() => {
    // Check if user already saw the loader in this session
    try {
      if (sessionStorage.getItem("zaira_loader_seen") === "true") {
        setIsVisible(false);
        return;
      }
    } catch {
      // Ignore sessionStorage restriction
    }

    // Step 1: Smoothly animate progress
    const timer1 = setTimeout(() => {
      setProgress(55);
      setStatusText("Curating Luxury Spaces...");
    }, 300);

    const timer2 = setTimeout(() => {
      setProgress(100);
      setStatusText("Welcome to Zaira");
    }, 850);

    // Step 2: Fade out
    const timer3 = setTimeout(() => {
      setIsFading(true);
    }, 1250);

    // Step 3: Remove from DOM
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem("zaira_loader_seen", "true");
      } catch {
        // Ignore
      }
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F6] transition-all duration-700 ease-out ${
        isFading ? "opacity-0 pointer-events-none scale-102" : "opacity-100 scale-100"
      }`}
      aria-label="Loading Zaira Creative Design"
      role="status"
    >
      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,149,131,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Center Brand Modal Card */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 py-10 rounded-3xl max-w-sm sm:max-w-md w-full animate-fade-in">
        {/* Brand Logo */}
        <div className="relative h-14 w-48 sm:h-16 sm:w-56 mb-4">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.logoAlt}
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#78564C] mb-8">
          Curtains, Blinds &amp; Luxury Interiors
        </p>

        {/* Minimalist Rose Gold Loading Track */}
        <div className="w-44 sm:w-52 h-1 rounded-full bg-[#EAE3DF] overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#C99583] to-[#B37D6B] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Status Text */}
        <span className="text-[11px] text-[#77716D] font-normal tracking-wider transition-opacity duration-300">
          {statusText}
        </span>
      </div>
    </div>
  );
}
