"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import NextImage from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isMobileRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const DESKTOP_FRAMES = 181;
  const MOBILE_FRAMES = 156;
  const DURATION_MS = 2800; // 2.8 seconds total curtain opening sequence

  const getFrameUrl = useCallback((index: number, mobile: boolean) => {
    const frameNum = String(index + 1).padStart(3, "0");
    return mobile
      ? `/frames/mobile/frame_${frameNum}.jpg`
      : `/frames/desktop/frame_${frameNum}.jpg`;
  }, []);

  const drawImageCover = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    if (!iw || !ih) return;

    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);

    const nw = iw * ratio;
    const nh = ih * ratio;
    const cx = (cw - nw) / 2;
    const cy = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, cx, cy, nw, nh);
  }, []);

  const drawFrame = useCallback(
    (index: number) => {
      const images = imagesRef.current;
      const img = images[index];

      if (img && img.complete && img.naturalWidth > 0) {
        drawImageCover(img);
        return;
      }

      // Fallback search backwards
      for (let i = index - 1; i >= 0; i--) {
        if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
          drawImageCover(images[i]);
          return;
        }
      }

      // Fallback search forwards
      for (let i = index + 1; i < images.length; i++) {
        if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
          drawImageCover(images[i]);
          return;
        }
      }
    },
    [drawImageCover]
  );

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
  }, []);

  const finishIntro = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem("zaira_intro_seen", "true");
      } catch {
        // Ignore session storage errors
      }
    }, 700);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    // If user already saw intro in this session, skip it
    try {
      if (sessionStorage.getItem("zaira_intro_seen") === "true") {
        setIsVisible(false);
        return;
      }
    } catch {
      // Ignore
    }

    const mobile = window.innerWidth < 768;
    isMobileRef.current = mobile;
    const totalFrames = mobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

    handleResize();
    window.addEventListener("resize", handleResize);

    // Allocate images cache
    imagesRef.current = new Array(totalFrames);

    // 1. Immediately load frame 0
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0, mobile);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      drawImageCover(firstImg);
    };

    // 2. Preload remaining frames
    for (let i = 1; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(i, mobile);
      img.onload = () => {
        imagesRef.current[i] = img;
      };
    }

    // 3. Start animation after brief pause (400ms to let initial frame display)
    const timer = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const rawProgress = Math.min(1, elapsed / DURATION_MS);
        setProgress(rawProgress);

        const frameIndex = Math.min(
          totalFrames - 1,
          Math.floor(rawProgress * (totalFrames - 1))
        );
        drawFrame(frameIndex);

        if (rawProgress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Pause slightly on the fully opened room before fading out
          setTimeout(() => {
            finishIntro();
          }, 450);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }, 400);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [getFrameUrl, handleResize, drawImageCover, drawFrame, finishIntro]);

  if (!isMounted || !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-[#FAF8F6] transition-opacity duration-700 ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* HTML5 Canvas Frame Renderer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Opening Ambient Overlay (subtle luxury vignette) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none transition-opacity duration-700"
        style={{ opacity: Math.max(0, 1 - progress * 1.5) }}
      />

      {/* Elegant Brand Intro Monogram (fades as curtains open) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none transition-all duration-500"
        style={{
          opacity: Math.max(0, 1 - progress * 2.5),
          transform: `scale(${1 - progress * 0.08})`,
        }}
      >
        <div className="bg-white/90 backdrop-blur-md px-8 py-6 rounded-3xl border border-[#EAE3DF] shadow-2xl flex flex-col items-center space-y-3 max-w-xs sm:max-w-sm">
          <div className="relative h-12 w-44">
            <NextImage
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#78564C] pt-1">
            Curtains &amp; Luxury Interiors
          </div>
          <div className="w-12 h-0.5 bg-[#C99583] rounded-full mt-1" />
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={finishIntro}
        className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-[#25211F] text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-[#EAE3DF] shadow-md transition-all active:scale-95"
      >
        <span>Skip</span>
      </button>

      {/* Subtle Bottom Loading Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 z-20">
        <div
          className="h-full bg-[#C99583] transition-all duration-100 ease-linear"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
