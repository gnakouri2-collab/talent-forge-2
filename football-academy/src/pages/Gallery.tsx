import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryItems, galleryCategories } from "@/data/academy";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [active, setActive] = useState("Tous");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "Tous" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const openLightbox = (idx: number) => setLightbox(idx);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((l) => l !== null ? (l - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightbox((l) => l !== null ? (l + 1) % filtered.length : null);

  return (
    <PageLayout
      title="Galerie"
      subtitle="Explorez nos photos et vidéos — entraînements, matchs, talents, événements et infrastructures."
      bgImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=800&fit=crop"
    >
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {galleryCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    active === c ? "bg-[#071A2F] text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative rounded-xl overflow-hidden aspect-square"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#071A2F]/0 group-hover:bg-[#071A2F]/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold px-3 py-1.5 bg-[#0B8F55] rounded-full">
                      {item.category}
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-4 right-4 text-white/80 hover:text-white p-2" aria-label="Fermer">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white/80 hover:text-white p-2" aria-label="Précédent">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white/80 hover:text-white p-2" aria-label="Suivant">
              <ChevronRight className="w-8 h-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 text-white/60 text-sm">
              {filtered[lightbox].alt} · {lightbox + 1}/{filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
