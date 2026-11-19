"use client";
import { useRef } from "react";
import { Arrow, ArrowLeft } from "./Icons";

export function CarouselArrows({ target }: { target: string }) {
  const go = (dir: number) => {
    const el = document.getElementById(target);
    if (el) el.scrollBy({ left: dir * 316, behavior: "smooth" });
  };
  return (
    <div className="arrows">
      <button aria-label="Previous" onClick={() => go(-1)}><ArrowLeft /></button>
      <button aria-label="Next" onClick={() => go(1)}><Arrow /></button>
    </div>
  );
}

export function useNoop() { return useRef(null); }
