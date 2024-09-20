"use client";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import ResponsiveMenu from "./menu";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 h-16">
      <div className="text-xl font-bold flex gap-1">
        <a
          href="https://github.com/fel1pe-r-s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo size={32} color="#ffffff" />
        </a>
        <a
          href="https://www.linkedin.com/in/fel1pe-r-s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo size={32} color="#ffffff" />
        </a>
      </div>
      <ResponsiveMenu />
    </header>
  );
}
