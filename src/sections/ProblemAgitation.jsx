"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  {
    id: "01",
    title: "System Stuck",
    description:
      "The people who built it are gone, taking the reasoning with them. What's left is a system nobody on your team can actually explain and you're stuck maintaining it.",
  },
  {
    id: "02",
    title: "Six Months, Zero Code",
    description:
      "You collected three quotes, and the idea is still sitting on paper six months later. Somewhere between the estimates and the silence, momentum quietly died before any real code got written.",
  },
  {
    id: "03",
    title: "Agentic AI",
    description:
      "You want an AI that reduces the 2 hours work. Not an AI which only makes spreadsheets.",
  },
];

export default function ProblemAgitation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const mobileCardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;

      const section = document.getElementById("problem-agitation");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const sectionHeight = section.offsetHeight;
      const scrollableHeight = sectionHeight - viewportHeight;

      if (scrollableHeight <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));

      setScrollProgress(progress);

      const index = Math.min(
        problems.length - 1,
        Math.floor(progress * problems.length),
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth >= 1024) return;

    const cards = mobileCardRefs.current.filter(Boolean);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) return;

        const activeCard = visibleEntries[0];

        const index = Number(activeCard.target.dataset.index);

        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="problem-agitation"
      className="relative min-h-0 w-full bg-white lg:min-h-[300vh]"
    >
      <div className="block px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:hidden">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="mb-6 block text-[13px] font-medium tracking-[0.22em] text-[#9CA3AF] uppercase sm:mb-7 sm:text-[11px]">
            Problem Agitation
          </span>

          <h2 className="max-w-[390px] text-[42px] leading-[1.04] font-bold tracking-[-1.8px] text-black min-[375px]:text-[44px] sm:max-w-[560px] sm:text-[50px] sm:tracking-[-2px] md:text-[56px] md:tracking-[-2.5px]">
            Problem Agitation Starts With Real Challenges
          </h2>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {problems.map((problem, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={problem.id}
                ref={(element) => {
                  mobileCardRefs.current[index] = element;
                }}
                data-index={index}
                className={`w-full rounded-[18px] px-5 py-6 transition-all duration-500 ease-out sm:px-7 sm:py-8 ${isActive ? "bg-[#F3F5F8] opacity-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : "bg-transparent opacity-35"} `}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span
                    className={`shrink-0 pt-[3px] text-[12px] font-normal transition-colors duration-500 sm:text-[13px] ${isActive ? "text-[#119CF0]" : "text-[#C8CED7]"} `}
                  >
                    /{problem.id}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-[24px] leading-[1.15] font-semibold tracking-[-0.5px] transition-colors duration-500 sm:text-[28px] ${isActive ? "text-[#080808]" : "text-[#A7AFBC]"} `}
                    >
                      {problem.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-[600px] text-[14px] leading-[1.65] transition-colors duration-500 sm:mt-5 sm:text-[16px] ${isActive ? "text-[#3F4A5A]" : "text-[#B4BCC8]"} `}
                    >
                      {problem.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="sticky top-0 hidden min-h-screen w-full items-center overflow-hidden lg:flex">
        <div className="mx-auto grid w-full grid-cols-1 items-center px-6 lg:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] lg:gap-0 lg:px-12 xl:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)] xl:px-16 2xl:grid-cols-[minmax(0,1.05fr)_120px_minmax(0,1fr)] 2xl:px-20">
          <div className="flex items-start justify-start lg:min-h-screen lg:pt-[18vh] xl:pt-[19vh] 2xl:pt-[18vh]">
            <div className="w-full max-w-[620px] 2xl:max-w-[760px]">
              <span className="mb-7 block text-[10px] font-medium tracking-[0.22em] text-[#9CA3AF] uppercase sm:mb-8 sm:text-[11px] md:text-[12px] lg:mb-9 xl:text-[12px] 2xl:mb-10 2xl:text-[14px]">
                Problem Agitation
              </span>

              <h2 className="max-w-[620px] text-[42px] leading-[1.04] font-bold tracking-[-2px] text-black sm:text-[48px] md:text-[54px] md:tracking-[-2.5px] lg:text-[56px] xl:text-[64px] xl:tracking-[0px] 2xl:max-w-[760px] 2xl:text-[76px] 2xl:leading-[1.02] 2xl:tracking-[-2.5px]">
                Problem Agitation Starts With Real Challenges
              </h2>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-0 flex h-screen items-center justify-center">
              <div className="absolute top-[8%] h-[84%] w-[4px] rounded-full bg-[#E8E8E8] 2xl:w-[5px]" />

              <div
                className="absolute top-[8%] left-1/2 w-[5px] -translate-x-1/2 rounded-full bg-[#119CF0] shadow-[0_0_14px_rgba(17,156,240,0.85),0_0_32px_rgba(17,156,240,0.5),0_0_55px_rgba(17,156,240,0.25)] transition-[height] duration-100 ease-linear 2xl:w-[6px] 2xl:shadow-[0_0_18px_rgba(17,156,240,0.85),0_0_38px_rgba(17,156,240,0.5),0_0_65px_rgba(17,156,240,0.25)]"
                style={{
                  height: `${Math.max(28, scrollProgress * 84)}%`,
                }}
              />

              <div
                className="absolute left-1/2 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#119CF0] shadow-[0_0_12px_rgba(17,156,240,0.95),0_0_28px_rgba(17,156,240,0.65),0_0_45px_rgba(17,156,240,0.3)] transition-[top] duration-100 ease-linear 2xl:h-[14px] 2xl:w-[14px] 2xl:shadow-[0_0_15px_rgba(17,156,240,0.95),0_0_35px_rgba(17,156,240,0.65),0_0_55px_rgba(17,156,240,0.3)]"
                style={{
                  top: `calc(8% + ${Math.max(28, scrollProgress * 84)}% - 0px)`,
                }}
              />
            </div>
          </div>

          <div className="flex min-h-screen items-center">
            <div className="grid h-[84vh] w-full grid-rows-3 2xl:h-[84vh]">
              {problems.map((problem, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={problem.id} className="flex w-full items-center">
                    <article
                      className={`w-full rounded-[16px] transition-all duration-700 ease-out ${isActive ? "bg-[#F3F5F8] px-7 py-7 opacity-100 shadow-[0_8px_30px_rgba(0,0,0,0.025)] xl:px-8 xl:py-8 2xl:rounded-[20px] 2xl:px-10 2xl:py-10" : "bg-transparent px-7 py-5 opacity-35 xl:px-8 xl:py-6 2xl:px-10 2xl:py-7"} `}
                    >
                      <div className="flex items-start gap-5 xl:gap-6 2xl:gap-7">
                        <span
                          className={`shrink-0 pt-[3px] text-[13px] font-normal transition-colors duration-500 xl:text-[14px] 2xl:pt-[5px] 2xl:text-[16px] ${isActive ? "text-[#119CF0]" : "text-[#C8CED7]"} `}
                        >
                          /{problem.id}
                        </span>

                        <div className="min-w-0 flex-1">
                          <h3
                            className={`text-[25px] leading-[1.15] font-semibold tracking-[-0.5px] transition-colors duration-500 xl:text-[28px] 2xl:text-[34px] 2xl:tracking-[-0.8px] ${isActive ? "text-[#080808]" : "text-[#A7AFBC]"} `}
                          >
                            {problem.title}
                          </h3>

                          <p
                            className={`mt-4 max-w-[560px] text-[15px] leading-[1.6] transition-colors duration-500 xl:mt-5 xl:text-[17px] 2xl:mt-6 2xl:max-w-[700px] 2xl:text-[19px] 2xl:leading-[1.6] ${isActive ? "text-[#3F4A5A]" : "text-[#B4BCC8]"} `}
                          >
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
