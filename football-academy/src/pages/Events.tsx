import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { events } from "@/data/academy";
import { Calendar, MapPin, Clock, Tag } from "lucide-react";

const typeColors: Record<string, string> = {
  "Compétition": "bg-red-100 text-red-700",
  "Détection": "bg-purple-100 text-purple-700",
  "Événement": "bg-[#F4B942]/20 text-[#071A2F]",
  "Match": "bg-blue-100 text-blue-700",
  "Partenariat": "bg-[#0B8F55]/10 text-[#0B8F55]",
};

export default function Events() {
  return (
    <PageLayout
      title="Événements"
      subtitle="Découvrez les événements à venir et passez de votre présence lors de nos activités."
      bgImage="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&h=800&fit=crop"
    >
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {events.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 0.1}>
                <div className="bg-[#F5F7FA] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex items-center gap-4 md:w-48 shrink-0">
                      <div className="w-16 h-16 bg-[#071A2F] rounded-2xl flex flex-col items-center justify-center text-white shrink-0">
                        <span className="text-xs font-semibold">{new Date(event.date).toLocaleDateString("fr-FR", { month: "short" })}</span>
                        <span className="text-xl font-bold font-[Poppins]">{new Date(event.date).getDate()}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${typeColors[event.type] || "bg-gray-100 text-gray-700"}`}>
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#071A2F] font-[Poppins]">{event.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {event.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
