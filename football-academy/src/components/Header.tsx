"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { mainNav } from "@/data/academy";

const languages = [
  { code: "FR", label: "Français", flag: "🇫🇷" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(languages[0]);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071A2F]/95 backdrop-blur-md shadow-lg shadow-black/10 py-2"
          : "bg-transparent py-3"
      }`}
    >
      <nav
        className="max-w-[1440px] mx-auto px-4 lg:px-6"
        aria-label="Navigation principale"
      >
        <div className="header-row">
          {/* ---- Logo ---- */}
          <Link to="/" className="header-brand" aria-label="Africa Football Academy — Accueil">
            <div className="w-9 h-9 rounded-full bg-[#0B8F55] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div className="hidden xl:block ml-2">
              <span className="text-white font-bold text-sm leading-tight block font-[Poppins]">
                AFRICA
              </span>
              <span className="text-[#0B8F55] text-[8px] uppercase tracking-[0.18em] font-semibold">
                Football Academy
              </span>
            </div>
          </Link>

          {/* ---- Desktop navigation — all items on one line ---- */}
          <div className="header-nav">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`header-nav-link ${
                  location.pathname === item.href
                    ? "header-nav-link-active"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ---- Actions: language + CTA + hamburger ---- */}
          <div className="header-actions">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="header-lang-btn"
                aria-label="Changer de langue"
                aria-expanded={langOpen}
              >
                <Globe className="w-4 h-4" />
                <span className="hidden 2xl:inline">{lang.flag} {lang.code}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-1 bg-[#071A2F] border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-[160px]"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors ${
                          lang.code === l.code ? "text-[#F4B942]" : "text-white/80"
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA button */}
            <Link
              to="/soutenir"
              className="header-cta"
            >
              Soutenir un talent
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="header-hamburger"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ---- Mobile menu ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#071A2F]/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-[#F4B942] bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/soutenir"
                className="block text-center mt-4 px-5 py-3 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white text-sm font-semibold rounded-full transition-all"
              >
                Soutenir un talent
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Inline styles for strict horizontal layout ---- */}
      <style>{`
        /* === HEADER ROW — single horizontal line, never wraps === */
        .header-row {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          gap: 0;
          width: 100%;
        }

        /* === BRAND === */
        .header-brand {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          margin-right: 20px;
          text-decoration: none;
        }

        /* === NAV — horizontal, no wrap, flexible === */
        .header-nav {
          display: flex;
          align-items: center;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 0;
          flex: 1 1 0%;
          min-width: 0;
          overflow: hidden;
          justify-content: center;
        }

        .header-nav-link {
          white-space: nowrap;
          padding: 6px 10px;
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          border-radius: 8px;
          transition: color 0.2s, background-color 0.2s;
          text-decoration: none;
          flex-shrink: 0;
        }
        .header-nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }
        .header-nav-link-active {
          color: #F4B942;
          background: rgba(255,255,255,0.1);
        }

        /* === ACTIONS === */
        .header-actions {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          margin-left: 16px;
          gap: 6px;
        }

        /* Language button */
        .header-lang-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          border-radius: 8px;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s, background-color 0.2s;
          white-space: nowrap;
        }
        .header-lang-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }

        /* CTA button */
        .header-cta {
          display: inline-flex;
          align-items: center;
          padding: 7px 16px;
          background: #0B8F55;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          border-radius: 9999px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .header-cta:hover {
          background: #0a7d4a;
          box-shadow: 0 4px 16px rgba(11,143,85,0.3);
        }

        /* Hamburger — only on < lg */
        .header-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          padding: 6px;
          color: rgba(255,255,255,0.8);
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: color 0.2s, background-color 0.2s;
        }
        .header-hamburger:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }

        /* === RESPONSIVE: switch to hamburger below 1280px (xl) === */
        @media (max-width: 1279px) {
          .header-nav {
            display: none;
          }
          .header-hamburger {
            display: flex;
          }
          .header-cta {
            display: none;
          }
          .header-lang-btn span {
            display: none;
          }
          .header-brand > div:last-child {
            display: none !important;
          }
        }

        /* On very wide screens, give nav more room */
        @media (min-width: 1600px) {
          .header-nav-link {
            font-size: 13px;
            padding: 6px 12px;
          }
        }
      `}</style>
    </header>
  );
}
