import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { detectionSteps } from "@/data/academy";
import { CheckCircle, Send } from "lucide-react";

export default function Detection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    lastName: "", firstName: "", dob: "", country: "", city: "",
    position: "", dominantFoot: "", height: "", experience: "",
    currentClub: "", phone: "", email: "", videoUrl: "",
    guardianName: "", guardianPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F55] focus:border-transparent transition-all";

  return (
    <PageLayout
      title="Détection des talents"
      subtitle="Notre processus de détection identifie les meilleurs jeunes talents et leur offre les meilleures opportunités de progression."
      bgImage="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&h=800&fit=crop"
    >
      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071A2F] font-[Poppins] text-center mb-16">
              Le processus de détection
            </h2>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div className="h-full w-full bg-gradient-to-r from-[#0B8F55] via-[#F4B942] to-[#0B8F55] rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
              {detectionSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center relative">
                    <div className="w-12 h-12 mx-auto bg-[#071A2F] rounded-full flex items-center justify-center text-[#F4B942] font-bold text-xs font-[Poppins] relative z-10 border-4 border-white shadow-md">
                      {step.step}
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-[#071A2F]">{step.title}</h4>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed hidden sm:block">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071A2F] font-[Poppins] text-center mb-4">
              Formulaire de candidature
            </h2>
            <p className="text-center text-gray-500 mb-12">
              Remplissez le formulaire ci-dessous pour postuler à notre session de détection.
            </p>
          </ScrollReveal>

          {submitted ? (
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
                <div className="w-20 h-20 mx-auto bg-[#0B8F55]/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#0B8F55]" />
                </div>
                <h3 className="text-xl font-bold text-[#071A2F] font-[Poppins]">
                  Candidature envoyée !
                </h3>
                <p className="mt-3 text-gray-500">
                  Merci pour votre intérêt. Notre équipe technique examinera votre profil
                  et vous contactera sous 48h.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Nom *</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Prénom *</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Date de naissance *</label>
                    <input name="dob" type="date" value={form.dob} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Pays *</label>
                    <input name="country" value={form.country} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Ville *</label>
                    <input name="city" value={form.city} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Poste *</label>
                    <select name="position" value={form.position} onChange={handleChange} required className={inputClass}>
                      <option value="">Sélectionner...</option>
                      <option>Gardien</option>
                      <option>Défenseur</option>
                      <option>Milieu</option>
                      <option>Attaquant</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Pied dominant *</label>
                    <select name="dominantFoot" value={form.dominantFoot} onChange={handleChange} required className={inputClass}>
                      <option value="">Sélectionner...</option>
                      <option>Droit</option>
                      <option>Gauche</option>
                      <option>Les deux</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Taille (cm) *</label>
                    <input name="height" type="number" value={form.height} onChange={handleChange} required className={inputClass} placeholder="175" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Expérience (ans) *</label>
                    <input name="experience" type="number" value={form.experience} onChange={handleChange} required className={inputClass} placeholder="5" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#071A2F] mb-2">Club actuel</label>
                  <input name="currentClub" value={form.currentClub} onChange={handleChange} className={inputClass} placeholder="Nom du club (si applicable)" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Téléphone *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#071A2F] mb-2">Lien vidéo de présentation</label>
                  <input name="videoUrl" type="url" value={form.videoUrl} onChange={handleChange} className={inputClass} placeholder="https://youtube.com/..." />
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-bold text-[#071A2F] mb-4">Responsable légal</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#071A2F] mb-2">Nom du responsable *</label>
                      <input name="guardianName" value={form.guardianName} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#071A2F] mb-2">Téléphone du responsable *</label>
                      <input name="guardianPhone" type="tel" value={form.guardianPhone} onChange={handleChange} required className={inputClass} />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-xl transition-all text-sm"
                >
                  <Send className="w-4 h-4" />
                  Envoyer ma candidature
                </button>
              </form>
            </ScrollReveal>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
