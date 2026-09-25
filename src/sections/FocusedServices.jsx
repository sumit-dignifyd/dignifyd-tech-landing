"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Software Development",
    image: "/images/web_development.jpg",
    description:
      "We build web and mobile applications shaped around how your business runs, not a template. Every project is planned around your workflows and built for the way your team works.",
    linkText: "TALK TO SOFTWARE TEAM",
  },
  {
    title: "Mobile App Development",
    image: "/images/mobile_development.jpg",
    description:
      "We build iOS and Android apps shaped around how your business runs, not a generic template. Every app is planned around your users and built for the way your team works.",
    linkText: "TALK TO APP DEVELOPMENT TEAM",
  },
  {
    title: "Agentic AI",
    image: "/images/agentic.jpg",
    description:
      "We build AI that acts, not just responds, handling real tasks for your business. Every system is shaped around your workflows and built for the way your team works.",
    linkText: "TALK TO AGENTIC AI TEAM",
  },
];

export default function FocusedServices() {
  return (
    <section className="w-full bg-white px-5 py-20 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-20 xl:py-25" id="our_services">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[38px] leading-[1.05] font-extrabold tracking-[-1.8px] text-[#111111] sm:text-[44px] md:text-[50px] lg:text-[58px] xl:text-[58px]">
            Building technology around your business.
          </h2>

          <h3 className="mt-3 text-[30px] leading-[1.1] font-light italic tracking-[-1px] text-[#222222] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[50px]">
            Yours, built from scratch
          </h3>

          <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.45] font-normal text-[#555555] sm:text-[17px] md:text-[18px] lg:text-[20px]">
            We build technology, software, apps, AI, and cloud infrastructure
            around the way your business actually works.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 md:gap-10 lg:grid-cols-3 lg:gap-8 xl:mt-20 xl:gap-9">
          {services.map((service) => (
            <article key={service.title} className="group w-full">
              <div className="relative aspect-[1.55/1] w-full overflow-hidden rounded-[20px] bg-[#f3f3f3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pt-7">
                <h4 className="text-[23px] leading-[1.2] font-bold tracking-[-0.5px] text-[#111827] sm:text-[22px]">
                  {service.title}
                </h4>

                <p className="mt-5 max-w-[390px] text-[15px] leading-[1.65] text-[#536071] sm:text-[15px]">
                  {service.description}
                </p>

                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.2px] text-[#0EA5FF] transition-all duration-300 hover:gap-2.5"
                >
                  <span>{service.linkText}</span>

                  <ArrowRight size={17} strokeWidth={1.8} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
