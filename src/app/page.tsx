import Header from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col max-w-[1440px] mx-auto">
      <Header />
      <div className="items-center justify-items-center min-h-full p-4 pb-20 gap-6 m-4 sm:p-6">
        <Hero />
      </div>
    </div>
  );
}
