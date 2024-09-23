import type { Metadata } from "next";
import "./globals.css";

import { Asap } from "next/font/google";
import Header from "@/components/header";

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: `
  Especialista em front-end: Felipe é um desenvolvedor front-end com foco em criar experiências digitais excepcionais.
Tecnologias de ponta: Ele domina tecnologias como React, Next.js, TypeScript e Node.js.
Experiência em banco de dados e containers: Felipe possui expertise em PostgreSQL e containers Docker.
Interfaces modernas e otimizadas: Ele cria interfaces que são visuais, rápidas, responsivas e acessíveis.
Paixão pela área: Felipe demonstra paixão pelo desenvolvimento e busca constante por aprimoramento.
Experiência profissional: Nos últimos três anos, ele se dedicou a projetos que expandiram seu conhecimento.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${asap.variable} antialiased`}>
        <main className="flex flex-col max-w-[1440px] mx-auto min-h-screen">
          <Header />
          {children}
        </main>
        <footer className="text-center bg-gray-900 h-16 p-6">
          <div>
            <p className="text-gray-200 text-normal">
              <span className="w-4 h-4">&copy; </span> 2024 | Felipe Silva
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
