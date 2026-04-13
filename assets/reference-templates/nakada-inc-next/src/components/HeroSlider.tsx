"use client";

import { useCallback, useEffect, useState } from "react";
import type { CompanyData } from "@/data/company";
import { DemoLink } from "@/components/DemoLink";

const SLIDE_DURATION = 6000;

export function HeroSlider({ company }: { company: CompanyData }) {
  const { heroSlides } = company;
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => setCurrent(index), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="hero" id="hero">
      <div className="hero-slider">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? " active" : ""}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">
                {slide.titleLine1}
                <br />
                {slide.titleLine2}
              </h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <DemoLink
                href={slide.ctaHref}
                className="hero-btn"
                note="契約後に実装"
              >
                {slide.ctaLabel}
              </DemoLink>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots" id="hero-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? " active" : ""}`}
            data-slide={i}
            aria-label={`スライド${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
