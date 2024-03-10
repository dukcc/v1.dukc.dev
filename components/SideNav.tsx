"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiSquares2X2, HiUser, HiFolder, HiEnvelope } from "react-icons/hi2";

export default function SideNav() {
  const isCurrentPage = (path: string) => usePathname() === path;
  return (
    <div className="w-fit h-full flex text-[17px] max-[950px]:text-[20px] min-[800px]:flex-col align-middle justify-center gap-32 p-16 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out max-[800px]:h-fit max-[800px]:w-full">
      <Link href={"/"}>
        <HiSquares2X2
          name="work"
          className={`w-[20px] h-[20px] hover-active-effect ${
            isCurrentPage("/") ? "text-selected" : ""
          }`}
        />
      </Link>
      <Link href={"/about"}>
        <HiUser
          name="about"
          className={`w-[20px] h-[20px] hover-active-effect ${
            isCurrentPage("/about") ? "text-selected" : ""
          }`}
        />
      </Link>
      <Link href={"/posts"}>
        <HiFolder
          name="posts"
          className={`w-[20px] h-[20px] hover-active-effect ${
            isCurrentPage("/posts") ? "text-selected" : ""
          }`}
        />
      </Link>
      <Link href={"/contact"}>
        <HiEnvelope
          name="contact"
          className={`w-[20px] h-[20px] hover-active-effect ${
            isCurrentPage("/contact") ? "text-selected" : ""
          }`}
        />
      </Link>
    </div>
  );
}
