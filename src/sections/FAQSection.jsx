"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, X, Plus } from "lucide-react";

const faqs = [
  {
    question: "How much does Dignifyd’s custom software development cost?",
    answer:
      "The cost for the software development in Dignifyd depends completely on the size of the project. It could be a tool for a company or a complete software solution from start to end.",
  },

  {
    question: "What is included in Dignifyd’s software development services?",
    answer:
      "Dignifyd includes planning, design, build, testing, and launch in software development services. These different parts of the process makes it easier to understand the service works.",
  },

  {
    question:
      "Does Dignifyd do app development as well as software development?",
    answer:
      "Yes, mobile app development for Android and iOS, as well as web apps for browsers. If you are not sure which one you need, Dignifyd helps you in finding your exact match.",
  },

  {
    question: "Does Dignifyd Tech work with enterprise clients?",
    answer:
      "Yes the company works with the enterprise clients because they have experience in building large level software and they also have the teams to build larger and complex systems.",
  },

  {
    question: "How much does Agentic AI development cost from Dignifyd?",
    answer:
      "The cost for Agentic AI development depends on the number of systems and processes it’ll be connected to. The process can include sorting the email lists to analyze a large number of data.",
  },
  {
    question: "How Dignifiyd maintains quality for every project?",
    answer:
      "We test as we build, not at the end, every code change gets checked before it ships, not after a customer finds it. Combined with weekly reviews and the same team owning the project start to finish, nothing slips through unnoticed.",
  },
  {
    question: "What does software management looks like by Dignifyd?",
    answer:
      "You're not chasing status updates. The person who scoped your project is the one building it, and you'll see progress weekly, what's done, what's next, and what needs a decision from you before we move forward.",
  },
  {
    question: "How do you stay ahead in AI technology?",
    answer:
      "The field moves fast, so we treat it that way, testing new tools and approaches on real projects, not shelving them for a someday roadmap. What we adopt has to earn its place by actually making the work better, not just because it's new.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-20 xl:py-25">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-20">
        <div className="w-full">
          <div>
            <h2 className="max-w-[330px] text-[48px] leading-[0.98] font-extrabold tracking-[-2px] text-[#071121] sm:text-[54px] md:text-[58px]">
              Got Questions?
            </h2>

            <h3 className="mt-4 max-w-[420px] text-[38px] leading-[1.05] font-light tracking-[-1.5px] whitespace-nowrap text-[#1A2330] italic sm:max-w-[480px] sm:text-[42px] md:max-w-[520px] md:text-[50px]">
              We've Got Answers
            </h3>

            <p className="mt-7 max-w-[374px] text-[15px] leading-[1.6] text-[#596474] sm:text-[16px]">
              If you're unsure where to start or want to see how we can help,
              reach out, and we'll walk you through it.
            </p>
          </div>

          <div className="mt-10 w-full max-w-[390px] rounded-[24px] bg-[#E3F3FC] p-8 sm:mt-12 sm:p-9">
            <div className="relative h-[58px] w-[58px] overflow-hidden rounded-full">
              <Image
                src="/images/faqs.jpg"
                alt="Book an Intro Call"
                fill
                sizes="58px"
                className="object-cover"
              />
            </div>

            <h4 className="mt-6 text-[22px] leading-[1.2] font-bold text-[#111827]">
              Book an Intro Call
            </h4>

            <p className="mt-3 max-w-[280px] text-[15px] leading-[1.55] text-[#596474]">
              Time to get introduced and explore how Dignifyd. can help your
              team.
            </p>

            <Link
              href="#contact"
              className="group relative mt-6 inline-flex h-[46px] w-full items-center justify-center rounded-full bg-[#071121] px-5 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(7,17,33,0.18)] sm:w-auto"
            >
              <span className="whitespace-nowrap pr-9">Book a Call</span>

              <span className="absolute right-[5px] flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-white text-[#071121] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </span>
            </Link>

            <div className="mt-7 border-t border-black/5 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-white">
                  <Mail
                    size={16}
                    strokeWidth={1.7}
                    className="text-[#7B8794]"
                  />
                </div>

                <div>
                  <p className="text-[13px] leading-[1.3] text-[#8993A0]">
                    Do you prefer email communication?
                  </p>

                  <a
                    href="mailto:sales@dignifyd.io"
                    className="text-[14px] font-semibold text-[#182231] hover:underline"
                  >
                    sales@dignifyd.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#E2E5E9] first:border-t"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                >
                  <span className="text-[17px] leading-[1.35] font-semibold tracking-[-0.3px] text-[#111827] sm:text-[20px]">
                    {faq.question}
                  </span>

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#253142]">
                    {isOpen ? (
                      <X size={21} strokeWidth={1.8} />
                    ) : (
                      <Plus size={20} strokeWidth={1.8} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[620px] pb-7 text-[14px] leading-[1.7] text-[#596474] sm:text-[15.5px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
