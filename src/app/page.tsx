"use client";
import { CarouselProvider } from "@/components/carousel-context";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center p-4 pb-20 gap-24 m-4 sm:p-6">
      <Hero />
      <CarouselProvider>
        <QueryClientProvider client={queryClient}>
          <Work />
        </QueryClientProvider>
      </CarouselProvider>
      <Contact />
    </div>
  );
}
