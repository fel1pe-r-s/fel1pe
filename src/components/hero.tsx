import Image from "next/image";

export function Hero() {
  return (
    <div className="container grid gap-6 mx-auto md:grid-cols-5">
      <div className="md:row-start-1  md:row-end-3 md:col-start-4 md:col-end-6 flex justify-center md:justify-end">
        <Image
          src="/perfil.jpg"
          alt="foto de perfil"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="md:row-start-1 md:col-start-1  md:col-end-4">
        <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-300">
          Oi, eu sou Felipe
        </h1>
        <p className="text-sm">
          Sou um desenvolvedor front end com ênfase em criar experiências
          digitais excepcionais, rápidas, acessíveis, visualmente atraentes e
          responsivas. Nos últimos 3 anos, tenho me especializado em tecnologias
          como React, Next.js, TypeScript e Node.js, além de bancos de dados
          relacionais como PostgreSQL e o uso de containers Docker, criando
          interfaces modernas e otimizadas. Cada projeto é uma nova oportunidade
          de aplicar e expandir meu conhecimento, mantendo a mesma paixão que me
          motivou a entrar na área.
        </p>
      </div>

      <div className="md:col-start-1  md:col-end-4 sm:grid sm:grid-cols-5 flex flex-wrap gap-5 md:gap-10 justify-evenly">
        <div className="flex flex-col gap-2 items-center text-center">
          <Image
            src="/javascript.svg"
            alt="javascript"
            width={64}
            height={64}
          />
          <span>Javascript</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image
            src="/typescript.svg"
            alt="typescript"
            width={64}
            height={64}
          />
          <span>Typescript</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image src="/react.svg" alt="react" width={64} height={64} />
          <span>React</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image src="/nextjs.svg" alt="next.js" width={64} height={64} />
          <span>Next.js</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image src="/node.svg" alt="node" width={64} height={64} />
          <span>Node.js</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image
            src="/postgresql.svg"
            alt="postgresql"
            width={64}
            height={64}
          />
          <span>PostgreSQL</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image
            src="/tailwindcss.svg"
            alt="tailwindcss"
            width={64}
            height={64}
          />
          <span>Tailwindcss</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image src="/storybook.svg" alt="Storybook" width={64} height={64} />
          <span>Storybook</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image src="/git.svg" alt="git" width={64} height={64} />
          <span>Git</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Image src="/docker.svg" alt="Docker" width={64} height={64} />
          <span>Docker</span>
        </div>
      </div>
    </div>
  );
}
