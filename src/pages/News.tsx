import { useState } from "react";
import { Link, useParams } from "react-router";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { news } from "@/data/academy";
import { ArrowRight, Calendar, User, ArrowLeft } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Matchs": "bg-red-100 text-red-700",
  "Partenariats": "bg-blue-100 text-blue-700",
  "Détection": "bg-purple-100 text-purple-700",
  "Talents": "bg-green-100 text-green-700",
  "Projets": "bg-orange-100 text-orange-700",
  "Académie": "bg-cyan-100 text-cyan-700",
};

// ----------------------------------------------------------------
// News Detail
// ----------------------------------------------------------------
export function NewsDetail() {
  const { id } = useParams();
  const article = news.find((n) => n.id === id);

  if (!article) {
    return (
      <PageLayout title="Article introuvable">
        <div className="py-24 text-center">
          <Link to="/actualites" className="text-[#0B8F55] font-semibold hover:underline">Retour aux actualités</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={article.title} bgImage={article.image}>
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link to="/actualites" className="inline-flex items-center gap-2 text-[#0B8F55] text-sm font-semibold hover:gap-3 transition-all mb-8">
              <ArrowLeft className="w-4 h-4" /> Retour aux actualités
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <User className="w-4 h-4" /> {article.author}
              </span>
            </div>
            <img src={article.image} alt={article.title} className="w-full h-80 object-cover rounded-2xl mb-8" />
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg">{article.excerpt}</p>
              <p className="text-gray-500 leading-relaxed mt-4">{article.content}</p>
              <p className="text-gray-500 leading-relaxed mt-4">
                Cette initiative s'inscrit dans la continuité de notre mission : offrir aux jeunes talents
                les meilleures opportunités pour développer leur potentiel et construire leur avenir.
                L'académie continue de croître grâce au soutien de ses partenaires et de la communauté.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

// ----------------------------------------------------------------
// News List
// ----------------------------------------------------------------
export function NewsList() {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Académie", "Matchs", "Talents", "Détection", "Projets", "Partenariats"];
  const filtered = filter === "Tous" ? news : news.filter((n) => n.category === filter);

  return (
    <PageLayout
      title="Actualités"
      subtitle="Suivez l'actualité de l'académie, nos réussites et les progrès de nos talents."
      bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=800&fit=crop"
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
            {filtered.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.1}>
                <Link
                  to={`/actualites/${article.id}`}
                  className="group block bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
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
    </PageLayout>
  );
}

export default NewsList;
