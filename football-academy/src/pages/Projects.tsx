import { useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/academy";
import { ArrowRight, Users, Calendar, Target } from "lucide-react";

// ----------------------------------------------------------------
// Project Detail
// ----------------------------------------------------------------
export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageLayout title="Projet introuvable">
        <div className="py-24 text-center">
          <Link to="/projets" className="text-[#0B8F55] font-semibold hover:underline">Retour aux projets</Link>
        </div>
      </PageLayout>
    );
  }

  const pct = Math.round((project.raised / project.goal) * 100);

  return (
    <PageLayout title={project.title} subtitle={project.description} bgImage={project.image}>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-2xl" />
                <h2 className="mt-8 text-2xl font-bold text-[#071A2F] font-[Poppins]">À propos du projet</h2>
                <p className="mt-4 text-gray-500 leading-relaxed">{project.description}</p>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Ce projet est essentiel pour le développement de l'académie et l'amélioration
                  des conditions d'entraînement de nos jeunes talents. Avec votre soutien, nous
                  pourrons offrir un cadre exceptionnel à la prochaine génération de footballeurs.
                </p>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal>
                <div className="bg-[#F5F7FA] rounded-2xl p-6 sticky top-28">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#071A2F] font-[Poppins]">{pct}%</div>
                    <div className="text-sm text-gray-500">financé</div>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#0B8F55] to-[#0a7d4a] rounded-full"
                    />
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Collecté</span>
                      <span className="font-bold text-[#0B8F55]">{project.raised.toLocaleString("fr-FR")} €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Objectif</span>
                      <span className="font-bold text-[#071A2F]">{project.goal.toLocaleString("fr-FR")} €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Contributeurs</span>
                      <span className="font-bold text-[#071A2F]">{project.contributors}</span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-xl transition-all text-sm">
                    Contribuer <ArrowRight className="w-4 h-4" />
                  </button>
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
// Projects List
// ----------------------------------------------------------------
export function ProjectList() {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", ...new Set(projects.map((p) => p.category))];

  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageLayout
      title="Nos projets"
      subtitle="Découvrez et soutenez nos projets de financement pour l'avenir de la jeunesse."
      bgImage="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1920&h=800&fit=crop"
    >
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    filter === c ? "bg-[#071A2F] text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => {
              const pct = Math.round((p.raised / p.goal) * 100);
              return (
                <ScrollReveal key={p.id} delay={i * 0.1}>
                  <div className="bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#071A2F] text-xs font-semibold rounded-full">{p.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins] mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4">{p.description}</p>
                      <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span><strong className="text-[#071A2F]">{p.raised.toLocaleString("fr-FR")} €</strong> collectés</span>
                        <span>Objectif : {p.goal.toLocaleString("fr-FR")} €</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#0B8F55] to-[#0a7d4a] rounded-full"
                        />
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {p.contributors} contributeurs</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(p.endDate).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}</span>
                      </div>
                      <Link
                        to={`/projets/${p.id}`}
                        className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#071A2F] hover:bg-[#0a2540] text-white text-sm font-semibold rounded-xl transition-all"
                      >
                        Contribuer <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default ProjectList;
