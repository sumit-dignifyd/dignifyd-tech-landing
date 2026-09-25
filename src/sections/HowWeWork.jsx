"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: "01",
    phase: "PHASE 01",
    title: "Quality Engineering",
    description:
      "Testing that is executed each time the code changes. It also catches the break before your customers do, which is the most cost-effective solution.",
    toc: "Quality Engineering",
  },
  {
    id: "02",
    phase: "PHASE 02",
    title: "Digital Experience",
    description:
      "Your public site & online store digitally. Designed to enable your marketing team to edit a page without creating a ticket.",
    toc: "Digital Experience",
  },
  {
    id: "03",
    phase: "PHASE 03",
    title: "Mobile iOS and Android",
    description:
      "Native, when the hardware of the phone is a factor; Cross-platform – when it isn't; We will let you know which one you need.",
    toc: "Mobile iOS and Android",
  },
  {
    id: "04",
    phase: "PHASE 04",
    title: "Cloud & DevOps",
    description:
      "Where it runs and how it gets there. Install so it leases aren't tedious and also your month-to-month expense is anticipated.",
    toc: "Cloud & DevOps",
  },
  {
    id: "05",
    phase: "PHASE 05",
    title: "Data Engineering",
    description:
      "Extracting numbers from the systems that store them, in a form that someone can take action on. Self-reporting data that is consistent from tools.",
    toc: "Data Engineering",
  },
];

export default function HowWeWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const highlightTimer = useRef(null);
  const isProgrammaticScroll = useRef(false);

  const scrollUnlockTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const viewportCenter = window.innerHeight * 0.42;

      let closestIndex = 0;
      let closestDistance = Infinity;

      phases.forEach((_, index) => {
        const element = document.getElementById(`phase-${index}`);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        const distance = Math.abs(rect.top - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((current) =>
        current === closestIndex ? current : closestIndex,
      );
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (scrollUnlockTimer.current) {
        clearTimeout(scrollUnlockTimer.current);
      }
    };
  }, []);

  const scrollToPhase = (index) => {
    const element = document.getElementById(`phase-${index}`);

    if (!element) return;

    if (scrollUnlockTimer.current) {
      clearTimeout(scrollUnlockTimer.current);
    }

    if (highlightTimer.current) {
      clearTimeout(highlightTimer.current);
    }

    isProgrammaticScroll.current = true;
    setActiveIndex(index);

    setHighlightedIndex(index);

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    const distance = Math.abs(index - activeIndex);

    const unlockDelay = Math.min(1400, Math.max(700, 550 + distance * 180));

    scrollUnlockTimer.current = setTimeout(() => {
      setActiveIndex(index);
      isProgrammaticScroll.current = false;
    }, unlockDelay);

    highlightTimer.current = setTimeout(() => {
      setHighlightedIndex(null);
    }, 1400);
  };
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 px-6 py-20 sm:gap-16 sm:px-8 sm:py-24 md:gap-20 md:px-10 md:py-28 lg:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)] lg:gap-20 lg:px-12 lg:py-32 xl:grid-cols-[416px_minmax(0,608px)] xl:justify-between xl:gap-20 xl:px-16 xl:py-36 2xl:grid-cols-[416px_minmax(0,608px)] 2xl:gap-28 2xl:px-20">
        <aside className="h-fit w-full lg:sticky lg:top-[100px] lg:self-start">
          <div className="max-w-[416px]">
            <span className="block text-[13px] leading-[20px] font-medium tracking-[2.08px] text-[#8E939A] uppercase sm:text-[11px] md:text-[12px]">
              HOW WE WORK
            </span>

            <h2 className="mt-4 max-w-[350px] text-[38px] leading-[1.08] font-semibold tracking-[-1.2px] text-[#111111] sm:mt-5 sm:text-[42px] sm:tracking-[-1.4px] md:text-[46px] lg:mt-5 lg:text-[58px] lg:leading-[1.04] xl:text-[58px] xl:tracking-[-1.5px]">
              Building technology around your business.
            </h2>

            <nav
              aria-label="How we work phases"
              className="mt-8 flex flex-col items-start gap-2 sm:mt-9 sm:gap-2.5 md:mt-10 md:gap-3 lg:mt-10 lg:gap-2.5"
            >
              {phases.map((phase, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => scrollToPhase(index)}
                    aria-current={isActive ? "step" : undefined}
                    className={`flex min-h-[34px] items-center rounded-full px-4 py-1.5 text-left text-[13px] leading-[20px] font-medium transition-all duration-300 sm:min-h-[36px] sm:px-4 sm:py-2 sm:text-[14px] md:min-h-[38px] md:px-4 md:text-[15px] lg:min-h-[36px] lg:px-4 lg:text-[14px] xl:min-h-[38px] xl:text-[15px] ${isActive ? "bg-[#0EA5FF] text-white shadow-[0_5px_18px_rgba(14,165,255,0.16)]" : "bg-transparent text-[#8E939A] hover:text-[#111111]"}`}
                  >
                    <span className={isActive ? "mr-2" : "mr-2 text-[#8E939A]"}>
                      {phase.id}
                    </span>

                    <span>{phase.toc}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="w-full max-w-[608px]">
          {phases.map((phase, index) => (
            <article
              key={phase.id}
              id={`phase-${index}`}
              className={`scroll-mt-[110px] border-b border-[#E8EAED] py-12 transition-all duration-500 first:pt-0 last:border-b-0 last:pb-0 sm:py-14 md:py-16 lg:py-12 xl:py-14 ${highlightedIndex === index ? "rounded-[20px] bg-[#F5FAFF] px-5 shadow-[0_0_0_1px_rgba(14,165,255,0.16),0_12px_35px_rgba(14,165,255,0.10)]" : "bg-transparent"}`}
            >
              <div className="flex items-center">
                <span className="bg-gradient-to-r from-[#0EA5FF] to-[#1997AA] bg-clip-text text-[56px] leading-[56px] font-extrabold tracking-[-1.5px] text-transparent sm:text-[60px] sm:leading-[60px] md:text-[62px] md:leading-[62px] lg:text-[62px] lg:leading-[62px] xl:text-[64px] xl:leading-[64px]">
                  {phase.id}
                </span>

                <span className="ml-3 h-px w-[14px] bg-[#D8DCE1] sm:ml-4 sm:w-[16px]" />

                <span className="ml-2 text-[9px] leading-[18px] font-semibold tracking-[1.4px] text-[#8E939A] uppercase sm:text-[10px] sm:tracking-[1.5px]">
                  {phase.phase}
                </span>
              </div>

              <h3 className="mt-2 text-[30px] leading-[1.15] font-semibold tracking-[-0.8px] text-[#111111] sm:mt-2 sm:text-[34px] sm:tracking-[-0.9px] md:text-[36px] lg:text-[38px] lg:tracking-[-1px] xl:text-[40px]">
                {phase.title}
              </h3>

              <p className="mt-5 max-w-[608px] text-[15px] leading-[1.6] font-normal text-[#4A4D52] sm:mt-5 sm:text-[16px] md:mt-5 md:text-[17px] lg:mt-5 lg:text-[18px] lg:leading-[30px] xl:mt-5 xl:text-[19px] xl:leading-[30px]">
                {phase.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
