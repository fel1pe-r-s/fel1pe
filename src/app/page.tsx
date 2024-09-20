import { CarouselProvider } from "@/components/carousel-context";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center p-4 pb-20 gap-24 m-4 sm:p-6">
      <Hero />
      <CarouselProvider>
        <Work />
      </CarouselProvider>
      <Contact />
    </div>
  );
}
