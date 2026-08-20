import { useState } from "react";
import { Link, useParams } from "react-router";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { talents, type Talent } from "@/data/academy";
import { MapPin, Ruler, Footprints, ArrowRight, Star, TrendingUp, Target } from "lucide-react";

// ----------------------------------------------------------------
// Talent Detail Page
// ----------------------------------------------------------------
export function TalentDetail() {
  const { id } = useParams();
  const talent = talents.find((t) => t.id === id);

  if (!talent) {
    return (
      <PageLayout title="Talent introuvable" subtitle="Ce joueur n'existe pas encore.">
        <div className="py-24 text-center">
          <Link to="/talents" className="text-[#0B8F55] font-semibold hover:underline">
            Retour à la liste des talents
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={talent.name}
      subtitle={`${talent.position} · ${talent.nationality} · ${talent.age} ans`}
      bgImage={talent.photo}
    >
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <img
                    src={talent.photo}
                    alt={talent.name}
                    className="w-32 h-32 rounded-2xl object-cover border-2 border-[#0B8F55]/20"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-[#071A2F] font-[Poppins]">{talent.name}</h2>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="px-3 py-1 bg-[#0B8F55]/10 text-[#0B8F55] text-xs font-semibold rounded-full">
                        {talent.position}
                      </span>
                      <span className="px-3 py-1 bg-[#F4B942]/20 text-[#071A2F] text-xs font-semibold rounded-full">
                        {talent.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                        {talent.nationality}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-500 leading-relaxed">{talent.bio}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stats */}
              <ScrollReveal>
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { label: "Buts marqués", value: talent.goals, icon: <Target className="w-5 h-5" /> },
                    { label: "Passes décisives", value: talent.assists, icon: <TrendingUp className="w-5 h-5" /> },
                    { label: "Matchs joués", value: talent.matches, icon: <Star className="w-5 h-5" /> },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#F5F7FA] rounded-2xl p-6 text-center">
                      <div className="text-[#0B8F55] flex justify-center mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-[#071A2F] font-[Poppins]">{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Bio */}
              <ScrollReveal>
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins] mb-4">Parcours</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {talent.bio} Découvert lors d'une session de détection, {talent.name} a rapidement
                    impressionné par ses qualités techniques et son état d'esprit. Aujourd'hui, il
                    fait partie des joueurs les plus prometteurs de notre académie et bénéficie d'un
                    programme de formation personnalisé pour l'accompagner vers le plus haut niveau.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal>
                <div className="bg-[#F5F7FA] rounded-2xl p-6 sticky top-28">
                  <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins] mb-4">Fiche technique</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <MapPin className="w-4 h-4" />, label: "Nationalité", value: talent.nationality },
                      { icon: <Ruler className="w-4 h-4" />, label: "Taille", value: talent.height },
                      { icon: <Footprints className="w-4 h-4" />, label: "Pied dominant", value: talent.dominantFoot },
                      { label: "Âge", value: `${talent.age} ans` },
                      { label: "Catégorie", value: talent.category },
                      { label: "Poste", value: talent.position },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                        <span className="text-sm text-gray-500">{item.label}</span>
                        <span className="text-sm font-medium text-[#071A2F]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/soutenir"
                    className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-xl transition-all text-sm"
                  >
                    Parrainer ce talent <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// ----------------------------------------------------------------
// Talent List Page
// ----------------------------------------------------------------
export function TalentList() {
  const [filter, setFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const positions = ["Tous", "Gardien", "Défenseur", "Milieu", "Attaquant"];

  const filtered = talents.filter((t) => {
    const matchPos = filter === "Tous" || t.position === filter;
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.nationality.toLowerCase().includes(search.toLowerCase());
    return matchPos && matchSearch;
  });

  return (
    <PageLayout
      title="Nos Talents"
      subtitle="Découvrez les jeunes joueurs que nous formons et accompagnons vers l'excellence."
      bgImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=800&fit=crop"
    >
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <input
                type="text"
                placeholder="Rechercher un joueur..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-5 py-3 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F55] focus:border-transparent"
              />
              <div className="flex flex-wrap gap-2">
                {positions.map((p) => (
                  <button
                    key={p}
                    onClick={() => setFilter(p)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      filter === p
                        ? "bg-[#071A2F] text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <Link
                  to={`/talents/${t.id}`}
                  className="group block bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-[#0B8F55] text-white text-xs font-semibold rounded-full">{t.position}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins] group-hover:text-[#0B8F55] transition-colors">{t.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{t.nationality} · {t.age} ans · {t.category}</p>
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

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">Aucun joueur trouvé pour cette recherche.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

export default TalentList;
