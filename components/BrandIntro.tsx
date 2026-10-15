import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BrandIntro() {
  const valuePoints = [
    {
      title: 'Quality Craftsmanship',
      description:
        'Every hem, seam, track, and joint is completed to exacting standards using premium materials and hardware.',
    },
    {
      title: 'Thoughtful Design',
      description:
        'We balance visual refinement with real-world practicality, light filtration, and effortless usability.',
    },
    {
      title: 'Personalized Service',
      description:
        'From fabric selection in your space to final millimeter-accurate installation, we guide you every step.',
    },
  ];

  return (
    <section
      id="brand-intro"
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Image perfectly matching right content height */}
          <div className="lg:col-span-6 relative flex flex-col">
            <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-0 flex-1">
              {/* Decorative Rose-Gold Accent Underlay */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-[#F7EFEB] -rotate-1 -z-10" />

              <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden shadow-xl border border-[#EAE3DF]">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Harmonious residential interior with soft linen drapes and bespoke furniture"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#EAE3DF] max-w-[240px]">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#F7EFEB] text-[#C99583] flex items-center justify-center font-semibold text-lg">
                    Z
                  </span>
                  <div>
                    <h4 className="text-xs font-semibold text-[#25211F] uppercase tracking-wider">
                      Signature Drapery
                    </h4>
                    <p className="text-xs text-[#77716D] mt-0.5">
                      Tailored to your space
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 py-1">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-[#F7EFEB] text-[#78564C] border border-[#EAE3DF] self-start">
              <span>About Zaira Creative Design</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#25211F] tracking-tight leading-[1.2]">
              Designing Spaces That{' '}
              <span className="text-[#C99583] font-medium">Feel Like Home</span>
            </h2>

            <p className="text-base sm:text-lg text-[#77716D] leading-relaxed">
              At Zaira Creative Design, we specialize in elegant curtains,
              modern blinds, and timeless interior solutions that bring comfort,
              beauty, and sophistication to every space.
            </p>

            <p className="text-sm sm:text-base text-[#77716D] leading-relaxed">
              Our expertise also includes interior design, metal fabrication,
              gypsum ceilings, and contemporary staircase solutions.
            </p>

            {/* Three Value Points */}
            <div className="space-y-4 pt-2">
              {valuePoints.map(point => (
                <div key={point.title} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-[#F7EFEB] text-[#C99583] mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C99583]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-[#25211F]">
                      {point.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#77716D] mt-0.5 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Discover Story Button */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#78564C] hover:text-[#C99583] transition-colors group"
              >
                <span>Discover Our Story & Craft</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
