import { ReactNode } from "react";

interface Props {
  badge?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, align = "center", light = false }: Props) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-[#0B8F55]/10 text-[#0B8F55] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] leading-tight ${
          light ? "text-white" : "text-[#071A2F]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? "text-white/70" : "text-gray-500"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
