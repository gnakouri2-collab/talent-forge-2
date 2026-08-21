import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageLayout({ children, title, subtitle, bgImage }: Props) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            {bgImage ? (
              <img src={bgImage} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#071A2F] to-[#0B8F55]/80" />
            )}
            <div className="absolute inset-0 bg-[#071A2F]/80" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Poppins]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg text-white/70 max-w-2xl">{subtitle}</p>
            )}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
