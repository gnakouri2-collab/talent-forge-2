import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { events } from "@/data/academy";
import { Calendar as CalIcon, MapPin, Clock, Tag } from "lucide-react";

const typeColors: Record<string, string> = {
  "Compétition": "bg-red-100 text-red-700",
  "Détection": "bg-purple-100 text-purple-700",
  "Événement": "bg-[#F4B942]/20 text-[#071A2F]",
  "Match": "bg-blue-100 text-blue-700",
  "Partenariat": "bg-[#0B8F55]/10 text-[#0B8F55]",
};

export default function CalendarPage() {
  // Group events by month
  const grouped = events.reduce<Record<string, typeof events>>((acc, e) => {
    const key = new Date(e.date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
    (acc[key] ??= []).push(e);
    return acc;
  }, {});

  return (
    <PageLayout
      title="Calendrier"
      subtitle="Planifiez votre participation à nos activités : matchs, tournois, journées de détection et événements."
      bgImage="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&h=800&fit=crop"
    >
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(grouped).map(([month, evts]) => (
            <div key={month} className="mb-12">
              <ScrollReveal>
                <h2 className="text-xl font-bold text-[#071A2F] font-[Poppins] capitalize mb-6 flex items-center gap-2">
                  <CalIcon className="w-5 h-5 text-[#0B8F55]" />
                  {month}
                </h2>
              </ScrollReveal>
              <div className="space-y-4">
                {evts.map((event, i) => (
                  <ScrollReveal key={event.id} delay={i * 0.1}>
                    <div className="flex gap-4 p-4 bg-[#F5F7FA] rounded-xl hover:shadow-md transition-all">
                      <div className="w-14 h-14 bg-[#071A2F] rounded-xl flex flex-col items-center justify-center text-white shrink-0">
                        <span className="text-[10px]">{new Date(event.date).toLocaleDateString("fr-FR", { month: "short" })}</span>
                        <span className="text-lg font-bold font-[Poppins]">{new Date(event.date).getDate()}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${typeColors[event.type] || "bg-gray-100 text-gray-700"}`}>{event.type}</span>
                        </div>
                        <h3 className="font-bold text-[#071A2F] text-sm">{event.title}</h3>
                        <div className="flex gap-3 mt-1 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
