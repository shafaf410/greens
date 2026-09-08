"use client";

import React, { useEffect, useRef } from "react";

interface InteractiveDotGridProps {
  className?: string;
  dotColor?: string;
  dotHighlightColor?: string;
  gridSpacing?: number;
  baseRadius?: number;
  interactionRadius?: number;
}

export default function InteractiveDotGrid({
  className = "",
  dotColor = "#C59B63",
  dotHighlightColor = "#E6C594",
  gridSpacing = 36,
  baseRadius = 1.0,
  interactionRadius = 140,
}: InteractiveDotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates (container-relative)
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Resize handler
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Global mousemove listener
    const handleWindowMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      
      const isVisibleOnScreen =
        rect.bottom >= 0 &&
        rect.top <= window.innerHeight &&
        e.clientX >= rect.left - 200 &&
        e.clientX <= rect.right + 200 &&
        e.clientY >= rect.top - 200 &&
        e.clientY <= rect.bottom + 200;

      if (isVisibleOnScreen) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleWindowMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseleave", handleWindowMouseLeave);

    const startTime = performance.now();

    // Render loop
    const render = (currentTime: number) => {
      const elapsedTime = (currentTime - startTime) * 0.001; // seconds

      // Smooth lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / gridSpacing) + 1;
      const rows = Math.ceil(height / gridSpacing) + 1;

      const startX = (width % gridSpacing) / 2;
      const startY = (height % gridSpacing) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = startX + i * gridSpacing;
          const y = startY + j * gridSpacing;

          // Subtle wave pattern for pulsating dots
          const phase = (i * 0.5 + j * 0.7);
          const pulse = prefersReducedMotion
            ? 0.5
            : Math.sin(elapsedTime * 1.8 + phase) * 0.5 + 0.5;

          // Distance to cursor
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = interactionRadius * interactionRadius;

          // Minimal base pulse (radius 1.0px ~ 1.4px, opacity 0.06 ~ 0.18)
          let currentRadius = baseRadius + pulse * 0.4;
          let opacity = 0.06 + pulse * 0.12;
          let drawColor = dotColor;

          // Subtle Cursor Interaction
          if (mouse.active && distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / interactionRadius;
            const easeFactor = factor * factor * (3 - 2 * factor); // Smooth step curve

            // Cursor proximity subtly boosts radius & opacity
            currentRadius = baseRadius + pulse * 0.3 + easeFactor * 1.2; // Max ~2.2px
            opacity = Math.min(0.55, opacity + easeFactor * 0.38);
            drawColor = dotHighlightColor;

            // Minimal magnetic nudge
            const nudge = easeFactor * 2.5;
            const angle = Math.atan2(dy, dx);
            const nudgeX = -Math.cos(angle) * nudge;
            const nudgeY = -Math.sin(angle) * nudge;

            ctx.beginPath();
            ctx.arc(x + nudgeX, y + nudgeY, currentRadius, 0, Math.PI * 2);
          } else {
            ctx.beginPath();
            ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
          }

          ctx.fillStyle = drawColor;
          ctx.globalAlpha = opacity;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseleave", handleWindowMouseLeave);
    };
  }, [dotColor, dotHighlightColor, gridSpacing, baseRadius, interactionRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
