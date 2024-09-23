import { useEffect, useState } from "react";

import { CarouselApi } from "@/components/ui/carousel";
import { RepoData } from "@/@types/repoData";
import { useCarousel } from "@/components/carousel-context";

export function useProjects(images: RepoData[]) {
  const [api, setApi] = useState<CarouselApi>();
  const { dispatch, state } = useCarousel();

  useEffect(() => {
    if (!api) return;

    const selectHandler = () => {
      const selectedIndex = api.selectedScrollSnap();
      const selectedImageId = images[selectedIndex]?.id;
      if (selectedImageId) {
        dispatch({
          type: "SET_SELECTED_IMAGE",
          payload: selectedImageId.toString(),
        });
      }
    };

    api.on("select", selectHandler);
    return () => {
      api.off("select", selectHandler);
    };
  }, [api, dispatch, images]);

  const handleThumbnailClick = (id: string) => {
    const index = images.findIndex((img) => img.id.toString() === id);
    if (index !== -1) {
      api?.scrollTo(index);
      dispatch({ type: "SET_SELECTED_IMAGE", payload: id });
    }
  };

  return {
    setApi,
    handleThumbnailClick,
    selectedImageId: state.selectedImageId,
  };
}
