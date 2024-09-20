"use client";
import { ArrowUpRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Tag } from "./tag";
import Link from "next/link";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section className="flex flex-col gap-6 md:gap-12 justify-center items-center w-80 md:w-[500px]">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Tag>Contato</Tag>
        <h2 className="text-2xl font-bold">Gostou do meu trabalho?</h2>
        <p className="text-base text-center">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/fel1pe-r-s/"
          className="w-full"
        >
          <Button className="w-full flex gap-3 items-center justify-between p-6">
            <span className=" flex gap-3 items-center">
              <LinkedinLogo size={32} color="#ffffff" /> Linkedin
            </span>
            <ArrowUpRight />
          </Button>
        </Link>

        <Link
          target="_blank"
          href="https://github.com/fel1pe-r-s"
          className="w-full"
        >
          <Button className="w-full flex gap-3 items-center justify-between p-6">
            <span className=" flex gap-3 items-center">
              <GithubLogo size={32} color="#ffffff" /> GitHub
            </span>
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
