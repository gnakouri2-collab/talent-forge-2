import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { sponsorTiers, partners } from "@/data/academy";
import { CheckCircle, Send, Globe, Shield, Star, Heart, Zap, Trophy } from "lucide-react";

export default function Partners() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ org: "", type: "", contactName: "", email: "", phone: "", partnerType: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F55] focus:border-transparent transition-all";

  return (
    <PageLayout
      title="Nos partenaires"
      subtitle="Ils croient en notre vision et contribuent à construire l'avenir de la jeunesse africaine."
      bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=800&fit=crop"
    >
      {/* Sponsor tiers */}
      <section id="sponsor" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Devenir sponsor" title={<>Construisons ensemble la <span className="text-[#F4B942]">prochaine génération</span></>} />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div className={`bg-[#F5F7FA] rounded-2xl p-8 border-2 border-transparent hover:border-[#0B8F55]/30 transition-all duration-300 hover:-translate-y-1 ${i === 3 ? "ring-2 ring-[#0B8F55] shadow-lg" : ""}`}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center text-white font-bold text-lg font-[Poppins]`}>
                    {tier.price}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#071A2F] font-[Poppins]">{tier.name}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#0B8F55] shrink-0 mt-0.5" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 md:p-12">
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
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F7FA] rounded-xl">
                    <div className="text-[#0B8F55]">{item.icon}</div>
                    <span className="text-sm font-medium text-[#071A2F]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Current partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Partenaires actuels" title="Ils croient en notre vision" />
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-[#F5F7FA] rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-all min-h-[120px]">
                  <span className="font-bold text-sm text-[#071A2F]">{p.name}</span>
                  <span className={`mt-2 px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                    p.tier === "Premium" ? "bg-[#0B8F55]/10 text-[#0B8F55]" :
                    p.tier === "Gold" ? "bg-yellow-100 text-yellow-700" :
                    p.tier === "Silver" ? "bg-gray-200 text-gray-600" :
                    "bg-amber-100 text-amber-700"
                  }`}>
                    {p.tier}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NGO Section */}
      <section id="ong" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-[#0B8F55]/10 text-[#0B8F55] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                ONG & Fondations
              </span>
              <h2 className="text-3xl font-bold text-[#071A2F] font-[Poppins] leading-tight">
                Ensemble pour la jeunesse
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Nos programmes sociaux couvrent l'éducation, l'insertion, l'égalité des chances
                et le développement communautaire. Nous cherchons des partenaires engagés pour
                maximiser notre impact social.
              </p>
              <ul className="mt-6 space-y-3">
                {["Éducation et scolarisation", "Insertion sociale par le sport", "Égalité des chances", "Développement communautaire"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#0B8F55] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal>
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
                  <CheckCircle className="w-12 h-12 text-[#0B8F55] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#071A2F] font-[Poppins]">Demande envoyée !</h3>
                  <p className="mt-3 text-gray-500">Nous vous contacterons rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-5">
                  <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins]">Formulaire de partenariat</h3>
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Organisation *</label>
                    <input name="org" value={form.org} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#071A2F] mb-2">Type d'organisation *</label>
                      <select name="type" value={form.type} onChange={handleChange} required className={inputClass}>
                        <option value="">Sélectionner...</option>
                        <option>ONG</option>
                        <option>Fondation</option>
                        <option>Entreprise</option>
                        <option>Institution</option>
                        <option>Club</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#071A2F] mb-2">Responsable *</label>
                      <input name="contactName" value={form.contactName} onChange={handleChange} required className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#071A2F] mb-2">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#071A2F] mb-2">Téléphone</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#071A2F] mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className={inputClass + " resize-none"} />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-xl transition-all text-sm">
                    <Send className="w-4 h-4" /> Envoyer la demande
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
