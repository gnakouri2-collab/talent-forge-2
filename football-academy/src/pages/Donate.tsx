import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { Heart, Target, TrendingUp, CheckCircle, Send, ArrowRight } from "lucide-react";

export default function Donate() {
  const [submitted, setSubmitted] = useState(false);
  const [donationType, setDonationType] = useState<"parrainer" | "projet" | "libre">("libre");
  const [amount, setAmount] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const options = [
    {
      key: "parrainer" as const,
      icon: <Heart className="w-6 h-6" />,
      title: "Parrainer un jeune",
      desc: "Financez directement la formation, l'éducation et le bien-être d'un jeune talent.",
      items: ["Équipement complet", "Formation professionnelle", "Transport & hébergement", "Alimentation équilibrée", "Frais scolaires", "Soins médicaux"],
    },
    {
      key: "projet" as const,
      icon: <Target className="w-6 h-6" />,
      title: "Financer un projet",
      desc: "Contribuez à l'amélioration des infrastructures et des programmes de l'académie.",
      items: ["Terrain synthétique", "Centre médical", "Salle de musculation", "Internat", "Bibliothèque", "Programme éducatif"],
    },
    {
      key: "libre" as const,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Faire un don libre",
      desc: "Choisissez le montant de votre contribution. Chaque euro compte.",
      items: ["Montant libre", "Usage optimal", "Impact direct", "Reçu fiscal", "Suivi transparent"],
    },
  ];

  const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F55] focus:border-transparent transition-all";

  return (
    <PageLayout
      title="Soutenir l'académie"
      subtitle="Votre contribution a un impact direct sur la vie des jeunes talents. Ensemble, construisons leur avenir."
      bgImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=800&fit=crop"
    >
      {/* Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Choisir votre soutien" title={<>Investissez dans un <span className="text-[#0B8F55]">avenir</span></>} />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {options.map((opt) => (
              <ScrollReveal key={opt.key}>
                <button
                  onClick={() => setDonationType(opt.key)}
                  className={`w-full text-left p-8 rounded-2xl border-2 transition-all duration-300 ${
                    donationType === opt.key
                      ? "border-[#0B8F55] bg-[#0B8F55]/5 shadow-lg shadow-[#0B8F55]/10"
                      : "border-gray-200 bg-[#F5F7FA] hover:border-gray-300"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    donationType === opt.key ? "bg-[#0B8F55] text-white" : "bg-gray-200 text-gray-600"
                  }`}>
                    {opt.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins]">{opt.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{opt.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {opt.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-[#0B8F55] shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="parrainer" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
                <div className="w-20 h-20 mx-auto bg-[#0B8F55]/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#0B8F55]" />
                </div>
                <h3 className="text-xl font-bold text-[#071A2F] font-[Poppins]">Merci pour votre soutien !</h3>
                <p className="mt-3 text-gray-500">Votre contribution fera une vraie différence dans la vie d'un jeune talent. Nous vous contacterons pour finaliser le processus.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
                <h3 className="text-xl font-bold text-[#071A2F] font-[Poppins] mb-2">Finaliser votre contribution</h3>
                <div>
                  <label className="block text-sm font-medium text-[#071A2F] mb-2">Type de soutien</label>
                  <select value={donationType} onChange={(e) => setDonationType(e.target.value as "parrainer" | "projet" | "libre")} className={inputClass}>
                    <option value="parrainer">Parrainer un jeune</option>
                    <option value="projet">Financer un projet</option>
                    <option value="libre">Don libre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#071A2F] mb-2">Montant (€) *</label>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {["25", "50", "100", "500"].map((a) => (
                      <button key={a} type="button" onClick={() => setAmount(a)} className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${amount === a ? "bg-[#0B8F55] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                        {a} €
                      </button>
                    ))}
                  </div>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required min="1" className={inputClass} placeholder="Ou entrez un montant libre" />
                </div>
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
                <div>
                  <label className="block text-sm font-medium text-[#071A2F] mb-2">Téléphone</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#071A2F] mb-2">Message (optionnel)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} className={inputClass + " resize-none"} placeholder="Votre message ou instruction..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0B8F55] hover:bg-[#0a7d4a] text-white font-semibold rounded-xl transition-all text-sm">
                  <Heart className="w-4 h-4" /> Confirmer ma contribution
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
