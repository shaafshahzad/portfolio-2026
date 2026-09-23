"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";

const columns = 6;
const lightHues = [0, 28] as const;
const darkHues = [145, 210] as const;
const motionQuery = "(prefers-reduced-motion: reduce)";
const shadeBands = [28, 45, 62, 79];
const tiles = Array.from({ length: columns * columns }, (_, index) => {
  const column = index % columns;
  const row = Math.floor(index / columns);

  return {
    phase: Math.random() * Math.PI * 2,
    duration: 2 + Math.random() * 2,
    // This four-tone spatial pattern keeps every horizontal, vertical, and
    // diagonal neighbour in a different lightness band.
    baseLightness: shadeBands[(column + row * 2) % shadeBands.length],
  };
});

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getHues() {
  return document.documentElement.dataset.theme === "dark"
    ? darkHues
    : lightHues;
}

export default function Portrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elapsedRef = useRef(0);
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(motionQuery).matches,
    () => false,
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    let lastTime = 0;
    let lastPaint = 0;
    let visible = false;
    let hues = getHues();

    function paint() {
      if (!context) return;
      context.clearRect(0, 0, columns, columns);
      const [startHue, endHue] = hues;
      tiles.forEach((tile, index) => {
        const progress = (elapsedRef.current / tile.duration) * Math.PI * 2;
        const hue =
          (startHue + endHue) / 2 +
          Math.cos(tile.phase + progress) * ((startHue - endHue) / 2);
        // Each square follows its own 2–4 second color cycle while retaining
        // enough lightness contrast to remain distinct from its neighbours.
        const lightness =
          tile.baseLightness + Math.sin(tile.phase + progress) * 8;
        context.fillStyle = `hsl(${hue} 92% ${lightness}%)`;
        context.fillRect(index % columns, Math.floor(index / columns), 1, 1);
      });
    }

    function syncHues() {
      hues = getHues();
      paint();
    }

    function tick(time: number) {
      if (lastTime) elapsedRef.current += (time - lastTime) / 1000;
      lastTime = time;
      if (time - lastPaint >= 1000 / 24) {
        paint();
        lastPaint = time;
      }
      frame = requestAnimationFrame(tick);
    }

    function syncAnimation() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (visible && !document.hidden && !reducedMotion) {
        frame = requestAnimationFrame(tick);
      }
    }

    paint();
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    const themeObserver = new MutationObserver(syncHues);
    observer.observe(canvas);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    document.addEventListener("visibilitychange", syncAnimation);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", syncAnimation);
    };
  }, [reducedMotion]);

  return (
    <figure className="portrait">
      <Image
        src="/shaaf-photo.jpg"
        alt="shaaf smiling, with a grid of colored squares over his photograph."
        width={1024}
        height={1024}
        unoptimized
        preload
      />
      <canvas
        ref={canvasRef}
        width={columns}
        height={columns}
        aria-hidden="true"
      />
    </figure>
  );
}
