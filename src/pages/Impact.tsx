import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { impactStats } from "@/data/academy";
import { CheckCircle, TrendingUp, Heart, Users, Target, Award } from "lucide-react";

const stories = [
  {
    name: "Amadou Diallo",
    quote: "Avant l'académie, je jouais pieds nus dans la rue. Aujourd'hui, je m'entraîne avec du matériel professionnel et je rêve d'un avenir en première division.",
    before: "Joueur amateur dans son village",
    after: "Attaquant U18 de l'Académie",
  },
  {
    name: "Seydou Bamba",
    quote: "L'académie m'a appris que le football ne suffit pas. L'éducation est tout aussi importante pour construire un avenir stable.",
    before: "Sans soutien scolaire",
    after: "Bonne élève et talent reconnu",
  },
];

const milestones = [
  { year: "2019", title: "Création de l'Académie", desc: "Fondation avec 30 jeunes et 3 éducateurs." },
  { year: "2020", title: "Premier terrain synthétique", desc: "Construction du premier terrain d'entraînement." },
  { year: "2021", title: "100 jeunes accompagnés", desc: "Seuil symbolique franchi dans l'accompagnement." },
  { year: "2022", title: "Premiers partenaires internationaux", desc: "Accords avec des clubs et académies européennes." },
  { year: "2023", title: "Centre médical ouvert", desc: "Mise en place du support médical complet." },
  { year: "2024", title: "500 jeunes accompagnés", desc: "Élargissement de l'impact à 15 communautés." },
  { year: "2025", title: "Nouveaux projets", desc: "Internat, salle de musculation, programme éducatif." },
];

export default function Impact() {
  return (
    <PageLayout
      title="Impact social"
      subtitle="Des chiffres concrets, des vies transformées, un impact durable."
      bgImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=800&fit=crop"
    >
      {/* Stats */}
      <section className="py-24 bg-[#071A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader light badge="Chiffres clés" title="Notre impact en chiffres" />
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {impactStats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#F4B942] font-[Poppins]">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-white/60 mt-2">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Histoires" title="Des parcours qui inspirent" subtitle="Derrière chaque chiffre, il y a une histoire humaine unique." />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-[#F5F7FA] rounded-2xl p-8">
                  <p className="text-gray-600 italic leading-relaxed">"{s.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div>
                      <p className="font-bold text-[#071A2F] font-[Poppins] text-sm">{s.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400 line-through">{s.before}</span>
                        <TrendingUp className="w-3 h-3 text-[#0B8F55]" />
                        <span className="text-xs text-[#0B8F55] font-semibold">{s.after}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Notre parcours" title="Les étapes clés" />
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#0B8F55]/20" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#071A2F] rounded-full flex items-center justify-center text-[#F4B942] font-bold text-xs font-[Poppins] shrink-0 relative z-10">
                      {m.year.slice(2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#071A2F] font-[Poppins]">{m.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{m.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
