import { Link } from "react-router";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const footerColumns = [
  {
    title: "L'Académie",
    links: [
      { label: "À propos", href: "/academie" },
      { label: "Notre mission", href: "/academie#mission" },
      { label: "Notre équipe", href: "/academie#equipe" },
      { label: "Infrastructures", href: "/academie#infra" },
      { label: "Impact social", href: "/impact" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "Nos talents", href: "/talents" },
      { label: "Formation", href: "/formation" },
      { label: "Détection", href: "/detection" },
      { label: "Calendrier", href: "/calendrier" },
      { label: "Galerie", href: "/galerie" },
    ],
  },
  {
    title: "Soutenir",
    links: [
      { label: "Faire un don", href: "/soutenir" },
      { label: "Parrainer un talent", href: "/soutenir" },
      { label: "Financer un projet", href: "/projets" },
      { label: "Devenir sponsor", href: "/partenaires" },
      { label: "Partenariat ONG", href: "/partenaires" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Actualités", href: "/actualites" },
      { label: "Événements", href: "/evenements" },
      { label: "Projets en cours", href: "/projets" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#000000" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071A2F] text-white">
      {/* ── Top accent line ── */}
      <div className="h-1 bg-gradient-to-r from-[#0B8F55] via-[#F4B942] to-[#0B8F55]" />

      {/* ── Quick contact bar ── */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
              <a
                href="mailto:contact@africafootballacademy.com"
                className="flex items-center gap-2 text-white/50 hover:text-[#0B8F55] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contact@africafootballacademy.com</span>
              </a>
              <a
                href="tel:+221771234567"
                className="flex items-center gap-2 text-white/50 hover:text-[#0B8F55] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+221 77 123 45 67</span>
              </a>
              <div className="flex items-center gap-2 text-white/50">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 transition-all duration-300"
                    style={{
                      "--social-color": social.color,
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.color = "";
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* ── Brand column ── */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B8F55] to-[#097a48] flex items-center justify-center shadow-lg shadow-[#0B8F55]/20">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-tight block font-[Poppins]">
                  AFRICA
                </span>
                <span className="text-[#0B8F55] text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Football Academy
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Former des talents. Construire des destins. Transformer des vies.
              Nous ne cherchons pas seulement à former des footballeurs — nous
              formons des personnes capables de construire leur avenir.
            </p>

            {/* CTA button */}
            <Link
              to="/soutenir"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F4B942] hover:bg-[#e5a935] text-[#071A2F] text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#F4B942]/20"
            >
              Soutenir l'académie
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── Link columns ── */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 relative pb-3">
                    {col.title}
                    <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#0B8F55] rounded-full" />
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-white/45 hover:text-[#F4B942] text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Newsletter ── */}
      <div className="border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold font-[Poppins] text-white mb-1">
                Restez informé
              </h3>
              <p className="text-white/45 text-sm">
                Recevez nos dernières actualités et les nouvelles de nos talents.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Merci ! Vous serez informé de nos prochaines actualités."
                );
              }}
              className="flex w-full lg:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Votre adresse email"
                required
                className="flex-1 lg:w-72 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0B8F55] focus:ring-1 focus:ring-[#0B8F55] transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white text-sm font-semibold rounded-xl transition-all flex items-center gap-2 shrink-0 hover:shadow-lg hover:shadow-[#0B8F55]/20"
              >
                S'abonner
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Africa Football Academy. Tous droits
              réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link
                to="/mentions-legales"
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                to="/confidentialite"
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                to="/cgu"
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                CGU
              </Link>
              <Link
                to="/politique-dons"
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                Politique de dons
              </Link>
            </div>
            <div className="flex items-center gap-1.5 text-white/30 text-xs">
              Fait avec{" "}
              <Heart className="w-3 h-3 text-red-400/80" /> pour la jeunesse
              africaine
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
