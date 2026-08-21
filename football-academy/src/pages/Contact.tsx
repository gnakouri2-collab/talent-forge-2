import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

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
      title="Contactez-nous"
      subtitle="Une question, une suggestion ou envie de collaborer ? Nous sommes à votre écoute."
      bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=800&fit=crop"
    >
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-[#071A2F] font-[Poppins] mb-6">Nos coordonnées</h2>
                <div className="space-y-6">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, label: "Adresse", value: "Dakar, Sénégal", href: null },
                    { icon: <Phone className="w-5 h-5" />, label: "Téléphone", value: "+221 77 123 45 67", href: "tel:+221771234567" },
                    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "contact@africafootballacademy.com", href: "mailto:contact@africafootballacademy.com" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0B8F55]/10 rounded-xl flex items-center justify-center text-[#0B8F55] shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-[#071A2F] hover:text-[#0B8F55] transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm font-medium text-[#071A2F]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-[#F5F7FA] rounded-2xl p-6">
                  <h3 className="font-bold text-[#071A2F] text-sm font-[Poppins] mb-3">Horaires</h3>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>Lundi — Vendredi : 8h00 — 18h00</p>
                    <p>Samedi : 8h00 — 13h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="bg-[#F5F7FA] rounded-2xl p-12 text-center">
                    <div className="w-20 h-20 mx-auto bg-[#0B8F55]/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-[#0B8F55]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#071A2F] font-[Poppins]">Message envoyé !</h3>
                    <p className="mt-3 text-gray-500">Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-[#F5F7FA] rounded-2xl p-8 md:p-10 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#071A2F] mb-2">Nom complet *</label>
                        <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#071A2F] mb-2">Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#071A2F] mb-2">Téléphone</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#071A2F] mb-2">Sujet *</label>
                        <select name="subject" value={form.subject} onChange={handleChange} required className={inputClass}>
                          <option value="">Sélectionner...</option>
                          <option>Demande de renseignement</option>
                          <option>Partenariat</option>
                          <option>Dons et parrainage</option>
                          <option>Détection</option>
                          <option>Média / Presse</option>
                          <option>Autre</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#071A2F] mb-2">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className={inputClass + " resize-none"} placeholder="Votre message..." />
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-xl transition-all text-sm">
                      <Send className="w-4 h-4" /> Envoyer le message
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
