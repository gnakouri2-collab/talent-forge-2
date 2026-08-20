import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Trophy, GraduationCap, Users, ArrowRight, Star, ChevronRight,
  Heart, Target, TrendingUp, Shield, Globe, Zap, Calendar,
  Play, ChevronLeft, ChevronRight as ChevronRightIcon,
  CheckCircle, ArrowUpRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeader from "@/components/SectionHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  stats, impactStats, talents, projects, news, testimonials,
  partners, detectionSteps,
} from "@/data/academy";

// ----------------------------------------------------------------
// Hero
// ----------------------------------------------------------------
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1080&fit=crop"
          alt="Jeunes footballeurs en entraînement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A2F]/80 via-[#071A2F]/60 to-[#071A2F]/90" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B8F55]/10 to-[#F4B942]/5 animate-pulse" style={{ animationDuration: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0B8F55]/20 text-[#0B8F55] text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-[#0B8F55]/30">
            Former des talents · Construire des destins
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-[Poppins] leading-[1.1]">
            Le talent est{" "}
            <span className="text-[#F4B942]">partout</span>.
            <br />
            Les opportunités{" "}
            <span className="text-[#0B8F55]">ne le sont pas</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
            Nous donnons aux jeunes talents les moyens de transformer leur passion
            pour le football en véritable avenir.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/academie"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#0B8F55]/25 text-sm"
            >
              Découvrir l'académie
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/soutenir"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4B942] hover:bg-[#e5a832] text-[#071A2F] font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#F4B942]/25 text-sm"
            >
              <Heart className="w-4 h-4" />
              Soutenir un talent
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------
// Stats Bar
// ----------------------------------------------------------------
function StatsBar() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#071A2F] font-[Poppins]">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Mission
// ----------------------------------------------------------------
function Mission() {
  const cards = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Formation sportive",
      desc: "Technique, tactique, physique et mentale — un programme complet pour développer chaque facettes du joueur.",
      color: "from-[#0B8F55] to-[#087a44]",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Éducation",
      desc: "Football et scolarité ne sont pas incompatibles. Nous combinons formation sportive et développement intellectuel.",
      color: "from-[#071A2F] to-[#0a2540]",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Insertion & opportunités",
      desc: "Passerelles vers clubs, académies, universités et structures internationales pour un avenir professionnel.",
      color: "from-[#F4B942] to-[#e5a832]",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Notre mission"
            title="Révéler le potentiel de chaque jeune"
            subtitle="Nous croyons que chaque jeune porte en lui un potentiel unique. Notre rôle est de le révéler, le cultiver et le transformer en un avenir concret."
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="group relative bg-[#F5F7FA] hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 border border-transparent hover:border-gray-100">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#071A2F] font-[Poppins] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
                <ArrowRight className="w-5 h-5 text-[#0B8F55] mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Detection Teaser
// ----------------------------------------------------------------
function DetectionTeaser() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Détection"
            title={<>Chaque talent mérite <span className="text-[#0B8F55]">une chance</span></>}
            subtitle="Notre processus de détection est rigoureux et transparent, conçu pour identifier les vrais talents et leur offrir les meilleures opportunités."
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-12">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B8F55] via-[#F4B942] to-[#0B8F55]" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-2">
            {detectionSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-[#071A2F] rounded-full flex items-center justify-center text-[#F4B942] font-bold text-sm font-[Poppins] relative z-10">
                    {step.step}
                  </div>
                  <h4 className="mt-4 text-sm font-bold text-[#071A2F]">{step.title}</h4>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed hidden sm:block">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/detection"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#071A2F] hover:bg-[#0a2540] text-white font-semibold rounded-full transition-all hover:shadow-lg text-sm"
            >
              Postuler à la détection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Talents Teaser
// ----------------------------------------------------------------
function TalentsTeaser() {
  const [filter, setFilter] = useState<string>("Tous");
  const positions = ["Tous", "Gardien", "Défenseur", "Milieu", "Attaquant"];
  const filtered = filter === "Tous" ? talents.slice(0, 4) : talents.filter((t) => t.position === filter).slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Nos talents"
            title={<>Des joueurs qui <span className="text-[#0B8F55]">écrivent</span> l'avenir</>}
            subtitle="Découvrez les jeunes talents que nous formons et accompagnons vers l'excellence."
          />
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {positions.map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === p
                    ? "bg-[#071A2F] text-white shadow-lg shadow-[#071A2F]/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <Link
                to={`/talents/${t.id}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2.5 py-1 bg-[#0B8F55] text-white text-xs font-semibold rounded-full">
                      {t.position}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#071A2F] font-[Poppins] group-hover:text-[#0B8F55] transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {t.nationality} · {t.age} ans · {t.category}
                  </p>
                  <div className="flex gap-4 mt-3 text-xs text-gray-400">
                    <span><strong className="text-[#071A2F]">{t.goals}</strong> buts</span>
                    <span><strong className="text-[#071A2F]">{t.assists}</strong> passes</span>
                    <span><strong className="text-[#071A2F]">{t.matches}</strong> matchs</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              to="/talents"
              className="inline-flex items-center gap-2 text-[#0B8F55] font-semibold hover:gap-3 transition-all text-sm"
            >
              Voir tous les talents
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Fund a Talent
// ----------------------------------------------------------------
function FundTalent() {
  const options = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Parrainer un jeune",
      items: ["Équipement", "Formation", "Transport", "Alimentation", "Scolarité", "Soins"],
      color: "bg-[#0B8F55]",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Financer un projet",
      items: ["Terrain", "Infrastructures", "Matériel", "Centre médical", "Internat", "Bibliothèque"],
      color: "bg-[#071A2F]",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Faire un don libre",
      items: ["Montant libre", "Usage optimal", "Impact direct", "Suivi transparent"],
      color: "bg-[#F4B942]",
    },
  ];

  return (
    <section className="py-24 bg-[#071A2F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B8F55]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F4B942]/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            light
            badge="Soutenir"
            title={<>Investissez dans un talent. <br className="hidden sm:block" />Construisez un <span className="text-[#F4B942]">avenir</span>.</>}
            subtitle="Chaque contribution, quelle que soit sa taille, a un impact direct sur la vie d'un jeune."
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className={`w-14 h-14 ${opt.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {opt.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-[Poppins] mb-4">{opt.title}</h3>
                <ul className="space-y-2">
                  {opt.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0B8F55] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/soutenir"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4B942] hover:bg-[#e5a832] text-[#071A2F] font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#F4B942]/25 text-sm"
            >
              Je soutiens l'académie
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Projects Teaser (Crowdfunding)
// ----------------------------------------------------------------
function ProjectsTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Projets"
            title={<>Ensemble, <span className="text-[#0B8F55]">construisons</span> l'avenir</>}
            subtitle="Chaque projet est une opportunité de créer un impact durable pour les jeunes et leur communauté."
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p, i) => {
            const pct = Math.round((p.raised / p.goal) * 100);
            return (
              <ScrollReveal key={p.id} delay={i * 0.15}>
                <div className="group bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#071A2F] text-xs font-semibold rounded-full">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins] mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{p.description}</p>
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span><strong className="text-[#071A2F]">{p.raised.toLocaleString("fr-FR")} €</strong> collectés</span>
                      <span>Objectif : {p.goal.toLocaleString("fr-FR")} €</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#0B8F55] to-[#0a7d4a] rounded-full"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-400">
                        <strong className="text-[#0B8F55]">{pct}%</strong> financé · {p.contributors} contributeurs
                      </span>
                    </div>
                    <Link
                      to={`/projets/${p.id}`}
                      className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#071A2F] hover:bg-[#0a2540] text-white text-sm font-semibold rounded-xl transition-all"
                    >
                      Contribuer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 text-[#0B8F55] font-semibold hover:gap-3 transition-all text-sm"
            >
              Voir tous les projets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// NGOs
// ----------------------------------------------------------------
function NGOSection() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&h=500&fit=crop"
                alt="Programme social"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0B8F55] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg">
                15 communautés aidées
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="inline-block px-4 py-1.5 bg-[#0B8F55]/10 text-[#0B8F55] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              ONG & Fondations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2F] font-[Poppins] leading-tight">
              Ensemble, donnons plus d'opportunités à la jeunesse
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Nos programmes sociaux couvrent l'éducation, l'insertion, l'égalité des chances
              et le développement communautaire. Nous travaillons main dans la main avec les ONG
              et fondations pour maximiser notre impact.
            </p>
            <ul className="mt-6 space-y-3">
              {["Éducation et scolarisation", "Insertion sociale par le sport", "Égalité des chances", "Développement communautaire"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0B8F55] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/partenaires#ong"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#071A2F] hover:bg-[#0a2540] text-white font-semibold rounded-full transition-all text-sm"
            >
              Devenir partenaire
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Sponsors
// ----------------------------------------------------------------
function SponsorsSection() {
  const tiers = [
    { name: "Bronze", color: "from-amber-600 to-amber-800", price: "1K€" },
    { name: "Silver", color: "from-gray-400 to-gray-600", price: "5K€" },
    { name: "Gold", color: "from-yellow-500 to-yellow-700", price: "15K€" },
    { name: "Premium", color: "from-[#0B8F55] to-[#087a44]", price: "50K€+" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Sponsors & entreprises"
            title={<>Construisons ensemble la <span className="text-[#F4B942]">prochaine génération</span></>}
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="relative bg-[#F5F7FA] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg font-[Poppins] group-hover:scale-110 transition-transform`}>
                  {t.price}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#071A2F] font-[Poppins]">{t.name}</h3>
                <div className="mt-3 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${t.color} rounded-full`} style={{ width: `${["25%", "50%", "75%", "100%"][i]}` }} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 bg-[#F5F7FA] rounded-2xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-[#071A2F] font-[Poppins] mb-6">Pourquoi devenir partenaire ?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <Globe className="w-5 h-5" />, text: "Visibilité internationale" },
                { icon: <Shield className="w-5 h-5" />, text: "Responsabilité sociale (RSE)" },
                { icon: <Zap className="w-5 h-5" />, text: "Impact jeunesse direct" },
                { icon: <Star className="w-5 h-5" />, text: "Image de marque renforcée" },
                { icon: <Trophy className="w-5 h-5" />, text: "Présence dans le sport africain" },
                { icon: <Heart className="w-5 h-5" />, text: "Projets à fort impact social" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl">
                  <div className="text-[#0B8F55]">{item.icon}</div>
                  <span className="text-sm font-medium text-[#071A2F]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Transparency
// ----------------------------------------------------------------
function Transparency() {
  const steps = [
    { icon: <Heart className="w-5 h-5" />, label: "DON", desc: "Votre contribution arrive" },
    { icon: <Target className="w-5 h-5" />, label: "FINANCEMENT", desc: "Allocation au projet" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "RÉALISATION", desc: "Exécution du projet" },
    { icon: <CheckCircle className="w-5 h-5" />, label: "RAPPORT", desc: "Transparence totale" },
    { icon: <Trophy className="w-5 h-5" />, label: "IMPACT", desc: "Résultats mesurables" },
  ];

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Transparence"
            title={<>Votre contribution. <span className="text-[#0B8F55]">Notre responsabilité.</span></>}
            subtitle="Chaque euro est tracé, chaque projet est documenté, chaque impact est mesuré."
          />
        </ScrollReveal>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B8F55] via-[#F4B942] to-[#0B8F55]" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center relative">
                  <div className="w-14 h-14 mx-auto bg-[#071A2F] rounded-full flex items-center justify-center text-[#F4B942] relative z-10">
                    {s.icon}
                  </div>
                  <h4 className="mt-4 text-xs font-bold text-[#071A2F] uppercase tracking-wider">{s.label}</h4>
                  <p className="mt-1 text-xs text-gray-500">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// News Teaser
// ----------------------------------------------------------------
function NewsTeaser() {
  const categoryColors: Record<string, string> = {
    "Matchs": "bg-red-100 text-red-700",
    "Partenariats": "bg-blue-100 text-blue-700",
    "Détection": "bg-purple-100 text-purple-700",
    "Talents": "bg-green-100 text-green-700",
    "Projets": "bg-orange-100 text-orange-700",
    "Académie": "bg-cyan-100 text-cyan-700",
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Actualités"
            title={<>Restez informé de nos <span className="text-[#0B8F55]">nouvelles</span></>}
            subtitle="Suivez l'actualité de l'académie, nos réussites et les progrès de nos talents."
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(0, 3).map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.15}>
              <Link
                to={`/actualites/${article.id}`}
                className="group block bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#071A2F] font-[Poppins] group-hover:text-[#0B8F55] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[#0B8F55] text-sm font-semibold group-hover:gap-2 transition-all">
                    Lire plus <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Impact
// ----------------------------------------------------------------
function Impact() {
  return (
    <section className="py-24 bg-[#071A2F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0B8F55] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#F4B942] rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            light
            badge="Impact social"
            title="Des chiffres qui parlent"
            subtitle="Chaque nombre cache une histoire, un parcours, une vie transformée."
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {impactStats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4B942] font-[Poppins]">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-white/60 mt-2">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Testimonials
// ----------------------------------------------------------------
function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Témoignages"
            title={<>Ils en parlent <span className="text-[#0B8F55]">mieux</span> que nous</>}
          />
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 p-8 md:p-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: i === current ? 1 : 0, x: i === current ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className={`${i === current ? "block" : "hidden"}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#0B8F55]"
                  />
                  <div>
                    <h4 className="font-bold text-[#071A2F] font-[Poppins]">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#F4B942] text-[#F4B942]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-[#071A2F]"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-[#0B8F55] w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-[#071A2F]"
              aria-label="Suivant"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Partners Carousel
// ----------------------------------------------------------------
function PartnersCarousel() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Partenaires"
            title="Ils croient en notre vision"
          />
        </ScrollReveal>
      </div>
      <div className="relative mt-8">
        <div className="flex animate-scroll gap-12 items-center">
          {doubled.map((p, i) => (
            <div
              key={i}
              className="shrink-0 px-8 py-6 bg-[#F5F7FA] rounded-2xl flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <span className="text-gray-400 font-bold text-sm">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// ----------------------------------------------------------------
// Final CTA
// ----------------------------------------------------------------
function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=800&fit=crop"
          alt="Jeunes footballeurs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071A2F]/85" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Poppins] leading-tight">
            Un talent peut changer une vie.
            <br />
            <span className="text-[#F4B942]">Votre soutien peut changer son avenir.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Rejoignez-nous dans cette mission. Chaque geste compte, chaque contribution fait la différence.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/soutenir"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#0B8F55]/25 text-sm"
            >
              <Heart className="w-4 h-4" />
              Soutenir l'académie
            </Link>
            <Link
              to="/partenaires"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20 text-sm"
            >
              Devenir partenaire
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Main Landing Page
// ----------------------------------------------------------------
export default function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Mission />
        <DetectionTeaser />
        <TalentsTeaser />
        <FundTalent />
        <ProjectsTeaser />
        <NGOSection />
        <SponsorsSection />
        <Transparency />
        <NewsTeaser />
        <Impact />
        <Testimonials />
        <PartnersCarousel />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
