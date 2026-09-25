import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const topFields = [
  "Software Development",
  "Mobile App Development",
  "UI/UX Design",
  "Custom Software & Platform",
  "Cloud And DevOps",
];

const socials = [
  { name: "Instagram", link: "https://www.instagram.com/dignifyd_tech/" },
  { name: "X (formerly Twitter)", link: "https://x.com/Dignifyd_" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/dignifyd/posts/?feedView=all",
  },
];
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030913] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_1fr]">
          <div className="min-h-[250px] rounded-[14px] bg-[#07182a] px-7 py-6 sm:px-8">
            <div className="flex h-[38px] items-center">
              <Image
                src={"/images/dignifyd-logo.svg"}
                alt="dignifyd"
                width={125}
                height={42}
                className="h-auto w-[120px] object-contain object-left"
              />
            </div>

            <p className="mt-7 max-w-[330px] text-[14px] leading-[1.55] text-white/50">
              Being fully bootstrapped, we&apos;re not driven by money or
              interested in becoming a mystical unicorn. We happily cut through
              the noise and teach designers and devs personally, taking a 100%
              learn-by-doing approach with zero powerpoint policy.
            </p>

            <p className="mt-7 text-[14px] leading-[1.5] text-white/50">
              Address: C-64, Upper Ground Floor,Sector-2, Noida
            </p>
          </div>

          <div className="min-h-[250px] rounded-[14px] bg-[#07182a] px-7 py-6 sm:px-8">
            <h3 className="text-[20px] font-semibold text-white">Top fields</h3>

            <nav className="mt-6 flex flex-col gap-4">
              {topFields.map((field) => (
                <Link
                  key={field}
                  href="https://dignifyd.tech/services.html"
                  className="text-[16px] text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {field}
                </Link>
              ))}
            </nav>
          </div>

          <div className="min-h-[250px] rounded-[14px] bg-[#07182a] px-7 py-6 sm:px-8">
            <h3 className="text-[20px] font-semibold text-white">Socials</h3>

            <nav className="mt-6 flex flex-col gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  className="text-[16px] text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {social.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="min-h-[250px] rounded-[14px] bg-[#07182a] px-7 py-6 sm:px-8">
            <h3 className="text-[20px] font-semibold text-white">Our Group</h3>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="https://dignifyd.io/"
                className="text-[16px] text-white/80 transition-colors duration-200 hover:text-white"
              >
                Dignifyd
              </Link>
              <Link
                href="https://dignifydtalentconnect.com/"
                className="text-[16px] text-white/80 transition-colors duration-200 hover:text-white"
              >
                Talent Connect
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
