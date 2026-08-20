"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------
type SlideMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; alt: string };

type TextPosition = "left" | "center" | "right";

interface Slide {
  media: SlideMedia;
  badge: string;
  title: string;
  highlight?: string;     // highlighted word inside title
  subtitle: string;
  cta: { label: string; href: string; variant?: "primary" | "gold" }[];
  textPosition: TextPosition;
}

// ----------------------------------------------------------------
// Slide data
// ----------------------------------------------------------------
const slides: Slide[] = [
  // ---- SLIDE 1 — Détection ----
  {
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1080&fit=crop&q=85",
      alt: "Jeunes footballeurs lors d'une session de détection",
    },
    badge: "Détection",
    title: "LE TALENT EST PARTOUT.",
    subtitle:
      "Nous détectons et accompagnons les jeunes talents afin de leur offrir les meilleures opportunités pour construire leur avenir.",
    cta: [
      { label: "Découvrir l'académie", href: "/academie", variant: "primary" },
      { label: "Postuler à la détection", href: "/detection", variant: "gold" },
    ],
    textPosition: "left",
  },
  // ---- SLIDE 2 — Formation (video) ----
  {
    media: {
      type: "video",
      src: "https://cdn.coverr.co/videos/coverr-soccer-player-doing-tricks-on-a-field-1080p-1881/1080p.mp4",
      poster: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&h=1080&fit=crop&q=85",
      alt: "Entraîneur et jeunes joueurs lors d'une séance tactique",
    },
    badge: "Formation",
    title: "FORMER AUJOURD'HUI\nLES TALENTS DE DEMAIN.",
    subtitle:
      "Une formation sportive, éducative et humaine conçue pour développer chaque jeune dans toutes les dimensions.",
    cta: [
      { label: "Notre formation", href: "/formation", variant: "primary" },
      { label: "Nos talents", href: "/talents", variant: "gold" },
    ],
    textPosition: "right",
  },
  // ---- SLIDE 3 — Impact & Financement ----
  {
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop&q=85",
      alt: "Équipe de jeunes joueurs célébrant ensemble",
    },
    badge: "Impact",
    title: "VOTRE SOUTIEN\nPEUT CHANGER UN AVENIR.",
    subtitle:
      "Soutenez la formation d'une nouvelle génération de talents et contribuez directement au développement de l'académie.",
    cta: [
      { label: "Soutenir un talent", href: "/soutenir", variant: "primary" },
      { label: "Devenir partenaire", href: "/partenaires", variant: "gold" },
    ],
    textPosition: "center",
  },
];

// ----------------------------------------------------------------
// Timing
// ----------------------------------------------------------------
const SLIDE_DURATION = 5500; // ms per slide
const TRANSITION_DURATION = 900; // ms fade

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const prefersReducedRef = useRef(false);
  useEffect(() => {
    prefersReducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
  const prefersReduced = prefersReducedRef.current;

  const progressRef = useRef<ReturnType<typeof setInterval>>(undefined);

  // ---- Navigation ----
  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
      setProgress(0);
    },
    [current],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  // ---- Autoplay + progress ----
  useEffect(() => {
    if (prefersReduced || paused) return;

    setProgress(0);
    const step = 50;
    let elapsed = 0;

    progressRef.current = setInterval(() => {
      elapsed += step;
      setProgress((elapsed / SLIDE_DURATION) * 100);
      if (elapsed >= SLIDE_DURATION) {
        clearInterval(progressRef.current);
        setCurrent((prev) => (prev + 1) % slides.length);
        setDirection(1);
      }
    }, step);

    return () => clearInterval(progressRef.current);
  }, [current, paused, prefersReduced]);

  // ---- Keyboard ----
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setDirection(1);
        setCurrent((p) => (p + 1) % slides.length);
        setProgress(0);
      }
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setCurrent((p) => (p - 1 + slides.length) % slides.length);
        setProgress(0);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ---- Derived ----
  const slide = slides[current];

  // ----------------------------------------------------------------
  // Overlay class based on text position
  // ----------------------------------------------------------------
  const overlayClass: Record<TextPosition, string> = {
    left: "hero-overlay-left",
    center: "hero-overlay-center",
    right: "hero-overlay-right",
  };

  // ----------------------------------------------------------------
  // Text alignment class
  // ----------------------------------------------------------------
  const textAlign: Record<TextPosition, string> = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  // ----------------------------------------------------------------
  // Framer variants
  // ----------------------------------------------------------------
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.25 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Carrousel principal"
      role="region"
    >
      {/* ---- Slides ---- */}
      <div className="hero-slides">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: TRANSITION_DURATION / 1000, ease: [0.4, 0, 0.2, 1] }}
            className="hero-slide"
          >
            {/* Media */}
            <div className="hero-media">
              {slide.media.type === "image" ? (
                <img
                  src={slide.media.src}
                  alt={slide.media.alt}
                  className="hero-media-item"
                  loading={current === 0 ? "eager" : "lazy"}
                />
              ) : (
                <video
                  className="hero-media-item"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={current === 1 ? "auto" : "metadata"}
                  poster={slide.media.poster}
                  aria-label={slide.media.alt}
                >
                  <source src={slide.media.src} type="video/mp4" />
                </video>
              )}
            </div>

            {/* Localized gradient overlay */}
            <div className={`hero-gradient ${overlayClass[slide.textPosition]}`} />

            {/* ---- Text content ---- */}
            <div
              className={`hero-text-wrapper ${slide.textPosition === "center" ? "justify-center" : slide.textPosition === "right" ? "justify-end" : "justify-start"}`}
            >
              <div className={`hero-text-inner flex flex-col ${textAlign[slide.textPosition]}`}>
                {/* Badge */}
                <motion.span
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="hero-badge"
                >
                  {slide.badge}
                </motion.span>

                {/* Title */}
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="hero-title"
                >
                  {slide.title.split("\n").map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="hero-subtitle"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="hero-ctas"
                >
                  {slide.cta.map((btn, i) => (
                    <Link
                      key={i}
                      to={btn.href}
                      aria-label={btn.label}
                      className={`hero-btn ${btn.variant === "gold" ? "hero-btn-gold" : "hero-btn-primary"}`}
                    >
                      {btn.label}
                    </Link>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---- Navigation arrows ---- */}
      <button
        onClick={prev}
        aria-label="Slide précédent"
        className="hero-nav hero-nav-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Slide suivant"
        className="hero-nav hero-nav-next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ---- Progress indicators ---- */}
      <div className="hero-indicators" role="tablist" aria-label="Navigation des slides">
        {slides.map((s, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}: ${s.badge}`}
            onClick={() => goTo(i)}
            className="hero-indicator"
          >
            <span className={`hero-indicator-num ${i === current ? "active" : ""}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="hero-indicator-track">
              <div
                className="hero-indicator-fill"
                style={{
                  width: i === current ? `${progress}%` : i < current ? "100%" : "0%",
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* ---- Inline styles for the carousel system ---- */}
      <style>{`
        /* ===== HERO CAROUSEL CONTAINER ===== */
        .hero-carousel {
          position: relative;
          width: 100%;
          height: 85vh;
          min-height: 700px;
          overflow: hidden;
          background: #071A2F;
        }
        @media (min-width: 1600px) {
          .hero-carousel { min-height: 800px; }
        }
        @media (max-width: 768px) {
          .hero-carousel {
            height: auto;
            min-height: auto;
          }
        }

        /* ===== SLIDES ===== */
        .hero-slides {
          position: absolute;
          inset: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
        }
        @media (max-width: 768px) {
          .hero-slide {
            position: relative;
          }
        }

        /* ===== MEDIA ===== */
        .hero-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        @media (max-width: 768px) {
          .hero-media {
            position: relative;
            width: 100%;
            height: 55vh;
            min-height: 360px;
          }
        }
        .hero-media-item {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: heroZoom 8s ease-out forwards;
        }
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-media-item { animation: none; }
        }

        /* ===== GRADIENT OVERLAYS ===== */
        .hero-gradient {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-overlay-left {
          background: linear-gradient(
            90deg,
            rgba(7, 26, 47, 0.82) 0%,
            rgba(7, 26, 47, 0.45) 40%,
            transparent 72%
          );
        }
        .hero-overlay-right {
          background: linear-gradient(
            270deg,
            rgba(7, 26, 47, 0.82) 0%,
            rgba(7, 26, 47, 0.45) 40%,
            transparent 72%
          );
        }
        .hero-overlay-center {
          background: radial-gradient(
            ellipse at center,
            rgba(7, 26, 47, 0.75) 0%,
            rgba(7, 26, 47, 0.35) 55%,
            transparent 85%
          );
        }
        @media (max-width: 768px) {
          .hero-overlay-left,
          .hero-overlay-right,
          .hero-overlay-center {
            background: linear-gradient(
              to top,
              rgba(7, 26, 47, 0.88) 0%,
              rgba(7, 26, 47, 0.45) 50%,
              transparent 100%
            );
          }
        }

        /* ===== TEXT WRAPPER ===== */
        .hero-text-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          padding: 0 clamp(1.5rem, 6vw, 6rem);
          z-index: 10;
        }
        @media (max-width: 768px) {
          .hero-text-wrapper {
            position: relative;
            padding: 2rem 1.25rem 2.5rem;
            align-items: flex-end;
            background: transparent;
          }
        }

        .hero-text-inner {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ===== BADGE ===== */
        .hero-badge {
          display: inline-block;
          padding: 0.35rem 1rem;
          background: rgba(11, 143, 85, 0.2);
          color: #0B8F55;
          border: 1px solid rgba(11, 143, 85, 0.3);
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 1rem;
          width: fit-content;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        @media (max-width: 768px) {
          .hero-badge { font-size: 0.65rem; margin-bottom: 0.75rem; }
        }

        /* ===== TITLE ===== */
        .hero-title {
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0;
          text-shadow: 0 2px 20px rgba(0,0,0,0.25);
        }
        .hero-title span.block {
          display: block;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(1.75rem, 7vw, 2.5rem);
            text-align: left;
          }
        }

        /* ===== SUBTITLE ===== */
        .hero-subtitle {
          margin-top: 1.25rem;
          color: rgba(255,255,255,0.78);
          font-size: clamp(0.9rem, 1.4vw, 1.15rem);
          line-height: 1.65;
          max-width: 480px;
          text-shadow: 0 1px 8px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
          .hero-subtitle {
            font-size: 0.9rem;
            margin-top: 0.75rem;
            max-width: 100%;
            text-align: left;
          }
        }

        /* ===== CTAs ===== */
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        @media (max-width: 768px) {
          .hero-ctas { margin-top: 1.5rem; }
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
          border: none;
        }
        .hero-btn-primary {
          background: #0B8F55;
          color: #fff;
          box-shadow: 0 4px 20px rgba(11,143,85,0.3);
        }
        .hero-btn-primary:hover {
          background: #0a7d4a;
          box-shadow: 0 6px 28px rgba(11,143,85,0.4);
          transform: translateY(-1px);
        }
        .hero-btn-gold {
          background: #F4B942;
          color: #071A2F;
          box-shadow: 0 4px 20px rgba(244,185,66,0.25);
        }
        .hero-btn-gold:hover {
          background: #e5a832;
          box-shadow: 0 6px 28px rgba(244,185,66,0.35);
          transform: translateY(-1px);
        }

        /* ===== NAVIGATION ARROWS ===== */
        .hero-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: rgba(255,255,255,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-nav:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.35);
          color: #fff;
          transform: translateY(-50%) scale(1.08);
        }
        .hero-nav:focus-visible {
          outline: 2px solid #0B8F55;
          outline-offset: 3px;
        }
        .hero-nav-prev { left: clamp(1rem, 3vw, 2.5rem); }
        .hero-nav-next { right: clamp(1rem, 3vw, 2.5rem); }
        @media (max-width: 768px) {
          .hero-nav {
            width: 42px;
            height: 42px;
            top: auto;
            bottom: 220px;
            transform: none;
          }
          .hero-nav:hover { transform: scale(1.05); }
          .hero-nav-prev { left: 1rem; }
          .hero-nav-next { right: 1rem; }
        }

        /* ===== PROGRESS INDICATORS ===== */
        .hero-indicators {
          position: absolute;
          bottom: clamp(1.5rem, 3vw, 2.5rem);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 20;
        }
        @media (max-width: 768px) {
          .hero-indicators {
            position: relative;
            bottom: auto;
            left: auto;
            transform: none;
            justify-content: center;
            padding: 1rem 1.25rem 0;
          }
        }
        .hero-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem 0;
        }
        .hero-indicator:focus-visible {
          outline: 2px solid #0B8F55;
          outline-offset: 3px;
          border-radius: 4px;
        }
        .hero-indicator-num {
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          transition: color 0.3s ease;
          letter-spacing: 0.05em;
        }
        .hero-indicator-num.active {
          color: #F4B942;
        }
        .hero-indicator-track {
          width: 48px;
          height: 3px;
          background: rgba(255,255,255,0.15);
          border-radius: 3px;
          overflow: hidden;
        }
        .hero-indicator-fill {
          height: 100%;
          background: linear-gradient(90deg, #0B8F55, #F4B942);
          border-radius: 3px;
          transition: width 60ms linear;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-indicator-fill { transition: none; }
        }
      `}</style>
    </section>
  );
}
