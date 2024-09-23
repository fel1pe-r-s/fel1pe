"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useProjects } from "@/hooks/useProjects";
import { RepoData } from "@/@types/repoData";

interface CarouselComponentProps {
  images: RepoData[];
}

export default function Projects({ images }: CarouselComponentProps) {
  const { setApi, handleThumbnailClick, selectedImageId } = useProjects(images);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 px-4 sm:px-0">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
      <div className="flex justify-center space-x-2 overflow-x-auto sm:overflow-x-visible">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => handleThumbnailClick(image.id.toString())}
            className={cn(
              "w-16 h-16 flex-shrink-0 border-2 rounded overflow-hidden transition-all",
              selectedImageId === image.id.toString()
                ? "border-primary"
                : "border-transparent opacity-50 hover:opacity-100"
            )}
          >
            <Image
              src={image.imageUrl}
              alt={image.title}
              width={64}
              height={64}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
