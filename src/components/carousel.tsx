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
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ImageObject, useCarousel } from "./carousel-context";

interface CarouselComponentProps {
  images: ImageObject[];
}

export default function Projects({ images }: CarouselComponentProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const { state, dispatch } = useCarousel();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const selectHandler = () => {
      const selectedIndex = api.selectedScrollSnap();
      const selectedImageId = images[selectedIndex]?.id;
      if (selectedImageId) {
        dispatch({ type: "SET_SELECTED_IMAGE", payload: selectedImageId });
      }
    };

    api.on("select", selectHandler);

    return () => {
      api.off("select", selectHandler);
    };
  }, [api, dispatch, images]);

  const handleThumbnailClick = (id: string) => {
    const index = images.findIndex((img) => img.id === id);
    if (index !== -1) {
      api?.scrollTo(index);
      dispatch({ type: "SET_SELECTED_IMAGE", payload: id });
    }
  };

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
            onClick={() => handleThumbnailClick(image.id)}
            className={cn(
              "w-16 h-16 flex-shrink-0 border-2 rounded overflow-hidden transition-all",
              state.selectedImageId === image.id
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
