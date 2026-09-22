"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";

const columns = 8;
const redHue = 0;
const orangeHue = 28;
const hueCycleSeconds = 8;
const motionQuery = "(prefers-reduced-motion: reduce)";
const shadeBands = [32, 46, 60, 74];
const tiles = Array.from({ length: columns * columns }, (_, index) => {
  const column = index % columns;
  const row = Math.floor(index / columns);

  return {
    phase: Math.random() * Math.PI * 2,
    duration: 8 + Math.random() * 4,
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

    function paint() {
      if (!context) return;
      const hueProgress =
        (elapsedRef.current / hueCycleSeconds) * Math.PI * 2;
      const hue =
        (redHue + orangeHue) / 2 +
        Math.cos(hueProgress) * ((orangeHue - redHue) / 2);
      tiles.forEach((tile, index) => {
        const progress = (elapsedRef.current / tile.duration) * Math.PI * 2;
        // Share one continuously changing core hue while each square moves
        // independently within its assigned lightness band.
        const lightness =
          tile.baseLightness + Math.sin(tile.phase + progress) * 5;
        context.fillStyle = `hsl(${hue} 92% ${lightness}%)`;
        context.fillRect(index % columns, Math.floor(index / columns), 1, 1);
      });
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
    observer.observe(canvas);
    document.addEventListener("visibilitychange", syncAnimation);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
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
