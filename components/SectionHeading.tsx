import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-3.5 border transition-colors bg-[#F7EFEB]/80 text-[#78564C] border-[#EAE3DF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C99583]" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] ${
          light ? "text-white" : "text-[#25211F]"
        }`}
      >
        {title}
      </h2>

      {/* Subtle Rose Gold Accent Line */}
      <div
        className={`w-14 h-0.5 bg-[#C99583] my-4 rounded-full ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      />

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-[#77716D]"
          } max-w-2xl`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
