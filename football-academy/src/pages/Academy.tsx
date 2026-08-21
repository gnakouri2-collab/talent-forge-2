import { Link } from "react-router";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle, ArrowRight, Shield, Eye, Heart, Users, Trophy, Globe } from "lucide-react";

const values = [
  { icon: <Shield className="w-6 h-6" />, title: "Excellence", desc: "Nous visons le plus haut niveau dans tout ce que nous entreprenons." },
  { icon: <Eye className="w-6 h-6" />, title: "Transparence", desc: "Chaque action est documentée, chaque euro est tracé." },
  { icon: <Heart className="w-6 h-6" />, title: "Humanité", desc: "Chaque joueur est une personne avant d'être un athlète." },
  { icon: <Users className="w-6 h-6" />, title: "Solidarité", desc: "Nous grandissons ensemble, personne n'est laissé derrière." },
  { icon: <Trophy className="w-6 h-6" />, title: "Ambition", desc: "Nous croyons en chaque jeune et en son potentiel à atteindre le sommet." },
  { icon: <Globe className="w-6 h-6" />, title: "Ouverture", desc: "Nous construisons des ponts entre les cultures et les continents." },
];

const team = [
  { name: "Coach Jean Mensah", role: "Directeur sportif", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Mamadou Sy", role: "Entraîneur principal U18", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Aminata Touré", role: "Responsable pédagogique", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop" },
  { name: "Ibrahim Keita", role: "Préparateur physique", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
];

export default function Academy() {
  return (
    <PageLayout
      title="L'Académie"
      subtitle="Découvrez notre mission, notre équipe et nos infrastructures dédiées à la formation des jeunes talents du football africain."
      bgImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=800&fit=crop"
    >
      {/* Mission */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block px-4 py-1.5 bg-[#0B8F55]/10 text-[#0B8F55] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                Notre mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2F] font-[Poppins] leading-tight">
                Former des talents. <br />Construire des destins. <br />Transformer des vies.
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                Nous ne cherchons pas seulement à former des footballeurs. Nous formons des personnes
                capables de construire leur avenir. Notre académie combine formation sportive de
                haut niveau, éducation scolaire et développement personnel pour offrir aux jeunes
                les meilleures chances de réussite.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { num: "500+", label: "Jeunes accompagnés" },
                  { num: "12", label: "Joueurs en club pro" },
                  { num: "35+", label: "Éducateurs" },
                  { num: "8", label: "Projets réalisés" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#F5F7FA] rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#0B8F55] font-[Poppins]">{s.num}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&h=500&fit=crop"
                  alt="Entraînement academy"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Nos valeurs" title="Ce qui nous guide" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#0B8F55]/10 rounded-xl flex items-center justify-center text-[#0B8F55] mb-4 group-hover:bg-[#0B8F55] group-hover:text-white transition-colors">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins]">{v.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Notre équipe" title="Des professionnels dévoués" subtitle="Une équipe d'entraîneurs, éducateurs et accompagnateurs passionnés au service des jeunes." />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#0B8F55]/20 group-hover:border-[#0B8F55] transition-colors">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#071A2F] font-[Poppins]">{member.name}</h3>
                  <p className="text-sm text-[#0B8F55]">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infra" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Infrastructures" title="Un cadre d'exception" subtitle="Des installations modernes pour une formation de qualité professionnelle." />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&h=400&fit=crop", title: "Terrain principal", desc: "Terrain herbe naturelle de 110x70m, éclairé pour les entraînements nocturnes." },
              { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop", title: "Salle de musculation", desc: "Équipements de pointe pour le conditionnement physique." },
              { img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop", title: "Centre médical", desc: "Soins préventifs et curatifs avec du matériel de dernière génération." },
              { img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop", title: "Internat", desc: "Espaces de vie et d'étude pour les joueurs résidents." },
              { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", title: "Salle de classe", desc: "Espaces d'apprentissage équipés pour le soutien scolaire." },
              { img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&h=400&fit=crop", title: "Terrain d'entraînement", desc: "Terrain synthétique pour les sessions techniques intensives." },
            ].map((infra, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={infra.img} alt={infra.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#071A2F] font-[Poppins]">{infra.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{infra.desc}</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-white font-[Poppins]">Prêt à rejoindre l'aventure ?</h2>
            <p className="mt-4 text-white/70">Contactez-nous pour en savoir plus sur nos programmes.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/detection" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-full transition-all text-sm">
                Postuler à la détection <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all text-sm">
                Nous contacter
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
