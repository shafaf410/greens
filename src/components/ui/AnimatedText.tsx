"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".word", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        y: "110%",
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        delay,
      });
    }, containerRef);
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap`}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.25em]">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </div>
  );
}
