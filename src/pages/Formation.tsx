import { Link } from "react-router";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle, ArrowRight, Target, Brain, Dumbbell, Users } from "lucide-react";

const programs = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Technique individuelle",
    items: ["Dribble & conduite de balle", "Passe courte et longue", "Tir & frappe", "Jeu de tête", "Protection du ballon"],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Tactique & vision de jeu",
    items: ["Positionnement collectif", "Transitions défense/attaque", "Jeu de pressing", "Lecture du jeu", "Leadership sur le terrain"],
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Préparation physique",
    items: ["Vitesse & agilité", "Endurance", "Force & puissance", "Souplesse", "Prévention des blessures"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Développement mental",
    items: ["Gestion du stress", "Confiance en soi", "Travail en équipe", "Résilience", "Objectifs personnels"],
  },
];

const ageGroups = [
  { name: "U12", ages: "10-12 ans", desc: "Découverte, plaisir et apprentissage des bases." },
  { name: "U14", ages: "12-14 ans", desc: "Développement technique intensif et premiers enjeux compétitifs." },
  { name: "U16", ages: "14-16 ans", desc: "Approfondissement tactique et préparation à la haute compétition." },
  { name: "U18", ages: "16-18 ans", desc: "Perfectionnement et orientation professionnelle." },
];

export default function Formation() {
  return (
    <PageLayout
      title="Formation"
      subtitle="Un programme complet de formation sportive, éducative et humaine pour préparer les jeunes à réussir."
      bgImage="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&h=800&fit=crop"
    >
      {/* Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Nos programmes" title="Une formation à 360°" subtitle="Notre approche combine tous les aspects nécessaires au développement d'un footballeur complet et d'une personne épanouie." />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {programs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#0B8F55] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins] mb-3">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0B8F55] shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Age groups */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Catégories" title="Par groupe d'âge" subtitle="Chaque catégorie bénéficie d'un programme adapté à son niveau et à ses objectifs de développement." />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((g, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 mx-auto bg-[#071A2F] rounded-full flex items-center justify-center text-[#F4B942] font-bold text-xl font-[Poppins]">
                    {g.name}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#0B8F55]">{g.ages}</p>
                  <p className="mt-2 text-sm text-gray-500">{g.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#071A2F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white font-[Poppins]">Prêt à rejoindre notre programme ?</h2>
            <p className="mt-4 text-white/70">Postulez maintenant à notre session de détection et donnez une chance à votre talent.</p>
            <Link to="/detection" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-full transition-all text-sm">
              Postuler à la détection <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
