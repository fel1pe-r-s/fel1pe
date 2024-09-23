import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getReposAndImages } from "@/hooks/getReposAndImages";
import { useCarousel } from "@/components/carousel-context";

export function useWorkData() {
  const { state, dispatch } = useCarousel();
  const { data, isLoading } = useQuery({
    queryKey: ["reposAndImages"],
    queryFn: getReposAndImages,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    const loadImages = async () => {
      if (!data) return;

      dispatch({ type: "SET_IMAGES", payload: data });
      if (data.length > 0) {
        dispatch({
          type: "SET_SELECTED_IMAGE",
          payload: data[0].id.toString(),
        });
      }
    };

    loadImages();
  }, [dispatch, data]);

  const selectedImage = state.images.find(
    (img) => img.id.toString() === state.selectedImageId
  );

  return { selectedImage, isLoading };
}
