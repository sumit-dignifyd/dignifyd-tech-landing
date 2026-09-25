"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    platform: {
      logo: "/images/fiverr-logo.png",
      alt: "Fiverr",
    },

    categories: ["Telecom ", "Infrastructure", "Managed IT"],

    rating: "★★★★★",

    quote:
      "Clear scopes, fast iterations, and a design system our developers could ship from without rework.",

    client: "Telecommunications service provider",
    role: "Middle East & North America",

    stats: [
      {
        value: "18",
        label: "Months",
      },
      {
        value: "5",
        label: "Locations",
      },
      {
        value: "1",
        label: "Team",
      },
    ],

    project: {
      image: "/images/dummy_img.jpg",
      title: "IT Support",
      description: "Telecom",
    },
  },

  {
    platform: {
      logo: "/images/upwork-logo.png",
      alt: "Upwork",
    },

    categories: ["Hospitality", "Cloud", "Managed IT"],

    rating: "★★★★★",

    quote:
      "Improved system performance, higher reliability, and better operational visibility.",

    client: "Hospitality product & services company",
    role: "North America",

    stats: [
      {
        value: "14",
        label: "Months",
      },
      {
        value: "20+",
        label: "Partners",
      },
      {
        value: "1",
        label: "Team",
      },
    ],

    project: {
      image: "/images/cloud.jpg",
      title: "Hospitality",
      description: "Tech & Cloud",
    },
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="w-full bg-white px-5 py-15 sm:px-8 sm:py-24 lg:px-12 lg:py-12 xl:px-16">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <span className="rounded-full bg-[#F5F5F5] px-7 py-2 text-[12px] font-medium text-[#555555] sm:text-[14px]">
          Testimonials
        </span>

        <h2 className="mt-10 text-[42px] leading-[1.05] font-bold tracking-[-2px] text-[#111111] sm:text-[54px] md:text-[62px] lg:text-[54px]">
          What Clients Say About
        </h2>

        <h3 className="mt-2 text-[38px] leading-[1.05] font-light tracking-[-1.5px] text-[#1A2330] italic sm:text-[48px] md:text-[50px]">
          Working With dignifyd
        </h3>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[1045px]">
        <div
          key={activeIndex}
          className="animate-[testimonialIn_500ms_ease-out]"
        >
          <article className="relative overflow-hidden rounded-[28px] border border-[#E3E3E3] bg-white px-7 py-10 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-[32px] items-center">
                  <Image
                    src={"/images/light-logo.png"}
                    alt={"testimonials"}
                    width={100}
                    height={32}
                    className="h-auto max-h-[32px] w-auto max-w-[100px] object-contain"
                  />
                </div>

                <span className="hidden h-5 w-px bg-[#DDDDDD] sm:block" />

                <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#777777] sm:text-[14px]">
                  {testimonial.categories.map((category, index) => (
                    <div key={category} className="flex items-center gap-2">
                      <span>{category}</span>

                      {index !== testimonial.categories.length - 1 && (
                        <span className="text-[#999999]">•</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* <span className="text-[20px] tracking-[2px] text-[#119CF0]">
                {testimonial.rating}
              </span> */}
            </div>

            <blockquote className="mt-12 max-w-[960px] text-[34px] leading-[1.2] font-normal tracking-[-1.2px] text-[#171717] sm:mt-14 sm:text-[42px] lg:text-[45px]">
              “{testimonial.quote}”
            </blockquote>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-[15px]">
              <span className="font-semibold text-[#222222]">
                {testimonial.client}
              </span>

              <span className="text-[#777777]">{testimonial.role}</span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-7 rounded-[22px] bg-[#F7F8F9] px-7 py-7 sm:grid-cols-3 sm:gap-5 sm:px-8 lg:grid-cols-[1fr_1fr_1fr_1.2fr]">
              {testimonial.stats.map((stat, index) => (
                <div
                  key={`${stat.value}-${index}`}
                  className={`flex flex-col items-center text-center ${
                    index === 2 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div className="text-[40px] leading-none font-normal tracking-[-1.5px] text-[#111111] sm:text-[46px]">
                    {stat.value}
                  </div>

                  <div className="mt-3 text-[14px] leading-none text-[#858585]">
                    {stat.label}
                  </div>
                </div>
              ))}

              <div className="col-span-2 flex items-center gap-4 sm:col-span-1">
                <div className="relative h-[52px] w-[64px] shrink-0 overflow-hidden rounded-[10px] bg-[#DDE2E6]">
                  <Image
                    src={testimonial.project.image}
                    alt={testimonial.project.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <div className="text-[14px] font-semibold text-[#222222]">
                    {testimonial.project.title}
                  </div>

                  <div className="mt-1 text-[11px] leading-[1.3] text-[#888888]">
                    {testimonial.project.description}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-7 flex w-full items-center justify-center gap-2">
          {testimonials.map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${isActive ? "w-2.5 bg-[#111111]" : "w-2.5 bg-[#D5D5D5] hover:bg-[#999999]"}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
