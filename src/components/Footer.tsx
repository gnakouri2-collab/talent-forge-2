import { Link } from "react-router";
import { Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";

const footerLinks = {
  academie: {
    title: "L'Académie",
    links: [
      { label: "À propos", href: "/academie" },
      { label: "Notre mission", href: "/academie#mission" },
      { label: "Notre équipe", href: "/academie#equipe" },
      { label: "Infrastructures", href: "/academie#infra" },
    ],
  },
  talents: {
    title: "Talents",
    links: [
      { label: "Nos joueurs", href: "/talents" },
      { label: "Détection", href: "/detection" },
      { label: "Programmes de formation", href: "/formation" },
      { label: "Galerie", href: "/galerie" },
    ],
  },
  soutenir: {
    title: "Soutenir",
    links: [
      { label: "Faire un don", href: "/soutenir" },
      { label: "Parrainer un talent", href: "/soutenir#parrainer" },
      { label: "Financer un projet", href: "/projets" },
      { label: "Devenir sponsor", href: "/partenaires#sponsor" },
      { label: "Partenariat ONG", href: "/partenaires#ong" },
    ],
  },
  infos: {
    title: "Informations",
    links: [
      { label: "Actualités", href: "/actualites" },
      { label: "Événements", href: "/evenements" },
      { label: "Calendrier", href: "/calendrier" },
      { label: "Impact social", href: "/impact" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#071A2F] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-[Poppins]">Restez informé</h3>
              <p className="text-white/60 text-sm mt-1">
                Recevez nos dernières actualités et les nouvelles de nos talents.
              </p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Merci ! Vous serez informé de nos prochaines actualités."); }}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Votre adresse email"
                required
                className="flex-1 md:w-72 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#0B8F55] focus:ring-1 focus:ring-[#0B8F55] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white text-sm font-semibold rounded-xl transition-all flex items-center gap-2 shrink-0"
              >
                S'abonner
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#0B8F55] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-xl leading-tight block font-[Poppins]">
                  AFRICA
                </span>
                <span className="text-[#0B8F55] text-xs uppercase tracking-[0.2em] font-semibold">
                  Football Academy
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Former des talents. Construire des destins. Transformer des vies.
              Nous ne cherchons pas seulement à former des footballeurs. Nous formons
              des personnes capables de construire leur avenir.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@africafootballacademy.com" className="flex items-center gap-3 text-white/60 hover:text-[#0B8F55] text-sm transition-colors">
                <Mail className="w-4 h-4" />
                contact@africafootballacademy.com
              </a>
              <a href="tel:+221771234567" className="flex items-center gap-3 text-white/60 hover:text-[#0B8F55] text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +221 77 123 45 67
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                Dakar, Sénégal
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, col]) => (
            <div key={key}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/50 hover:text-[#F4B942] text-sm transition-colors"
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Africa Football Academy. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/mentions-legales" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                Confidentialité
              </Link>
              <Link to="/cgu" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                CGU
              </Link>
            </div>
            <div className="flex items-center gap-1 text-white/40 text-xs">
              Fait avec <Heart className="w-3 h-3 text-red-400 mx-0.5" /> pour la jeunesse africaine
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
