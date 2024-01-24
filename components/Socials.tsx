"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Socials() {
  const pathname = usePathname();
  return (
    <>
      {!pathname.startsWith("/vote") && (
        <div
          id="right"
          className="w-fit h-full max-[800px]:h-fit max-[800px]:w-full flex flex-col gap-32 align-middle place-items-center max-[800px]:pb-[200px]"
        >
          <div className="flex min-[800px]:flex-col gap-16">
            <Link
              href={"https://www.youtube.com/@dukkcc"}
              target="_blank"
              className="hover-active-effect"
            >
              <Image width={36} height={36} alt="YouTube" src="/icons/yt.svg" />
            </Link>
            <Link
              href={"https://www.behance.net/duckyhq"}
              target="_blank"
              className="hover-active-effect"
            >
              <Image
                width={36}
                height={36}
                alt="Behance"
                src="/icons/behance.svg"
              />
            </Link>
            <Link
              href={"https://discord.gg/kVS5dEekmT"}
              target="_blank"
              className="hover-active-effect"
            >
              <Image
                width={36}
                height={36}
                alt="Discord"
                src="/icons/discord.svg"
              />
            </Link>
            <Link
              href={"https://github.com/dukcc"}
              target="_blank"
              className="hover-active-effect"
            >
              <Image
                width={36}
                height={36}
                alt="GitHub"
                src="/icons/github.svg"
              />
            </Link>
          </div>
          <div className="w-[1px] h-full border border-white/10 max-[800px]:hidden"></div>
        </div>
      )}
    </>
  );
}
