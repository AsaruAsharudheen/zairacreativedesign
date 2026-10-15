"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface HeroCanvasProps {
  onProgressChange?: (progress: number) => void;
}

export default function HeroCanvas({ onProgressChange }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  // Cached image elements
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  // Constants
  const DESKTOP_FRAMES = 181;
  const MOBILE_FRAMES = 156;

  const getFrameUrl = useCallback((index: number, mobile: boolean) => {
    const frameNum = String(index + 1).padStart(3, "0");
    return mobile
      ? `/frames/mobile/frame_${frameNum}.jpg`
      : `/frames/desktop/frame_${frameNum}.jpg`;
  }, []);

  // Draw a frame using cover fit
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
      currentFrameRef.current = index;
      const images = imagesRef.current;
      const img = images[index];

      if (img && img.complete && img.naturalWidth > 0) {
        drawImageCover(img);
        return;
      }

      // If requested frame isn't ready yet, search backwards for closest loaded frame
      for (let i = index - 1; i >= 0; i--) {
        if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
          drawImageCover(images[i]);
          return;
        }
      }

      // Or search forwards
      for (let i = index + 1; i < images.length; i++) {
        if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
          drawImageCover(images[i]);
          return;
        }
      }
    },
    [drawImageCover]
  );

  // Resize canvas according to device pixel ratio
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Setup device detection & preload frames
  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    const totalFrames = mobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

    // Allocate images array
    imagesRef.current = new Array(totalFrames);

    // 1. Immediately load frame 0
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0, mobile);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      setFirstFrameLoaded(true);
      handleResize();
      drawFrame(0);
    };

    // 2. Load remaining frames sequentially / in batches to keep UI fluid
    let loadedCount = 1;
    for (let i = 1; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(i, mobile);
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCount++;
      };
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getFrameUrl, handleResize, drawFrame]);

  // Scroll listener for parent container
  useEffect(() => {
    const onScroll = () => {
      const parent = canvasRef.current?.closest(".hero-scroll-container");
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const scrollDistance = rect.height - window.innerHeight;
      if (scrollDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
      if (onProgressChange) {
        onProgressChange(progress);
      }

      const totalFrames = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
      const targetIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(progress * (totalFrames - 1)))
      );

      if (targetIndex !== currentFrameRef.current) {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        animationFrameId.current = requestAnimationFrame(() => {
          drawFrame(targetIndex);
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMobile, drawFrame, onProgressChange]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#FAF8F6]">
      {/* High-Performance Canvas Renderer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: firstFrameLoaded ? 1 : 0 }}
      />

      {/* Immediate fallback background image so there is 0ms white flash */}
      {!firstFrameLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getFrameUrl(0, isMobile)})`,
          }}
        />
      )}
    </div>
  );
}
