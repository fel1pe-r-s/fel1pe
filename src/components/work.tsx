"use client";
import { useEffect } from "react";
import Projects from "./carousel";
import { ImageObject, useCarousel } from "./carousel-context";
import { Tag } from "./tag";

// Simula uma função de busca de API
const fetchImages = async (): Promise<ImageObject[]> => {
  // Simula um atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "1",
      title: "Paisagem Montanhosa",
      description:
        "Uma bela vista de montanhas cobertas de neve ao pôr do sol.",
      imageUrl: "/picture.svg",
      tags: ["montanhas", "neve", "pôr do sol"],
    },
    {
      id: "2",
      title: "Praia Tropical",
      description: "Águas cristalinas e areia branca em uma praia paradisíaca.",
      imageUrl: "/picture.svg",
      tags: ["praia", "mar", "tropical"],
    },
    {
      id: "3",
      title: "Floresta Densa",
      description:
        "Um caminho sereno através de uma floresta verde e exuberante.",
      imageUrl: "/picture.svg",
      tags: ["floresta", "natureza", "verde"],
    },
  ];
};

export function Work() {
  const { state, dispatch } = useCarousel();

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await fetchImages();
        dispatch({ type: "SET_IMAGES", payload: images });
        if (images.length > 0) {
          dispatch({ type: "SET_SELECTED_IMAGE", payload: images[0].id });
        }
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    loadImages();
  }, [dispatch]);

  const selectedImage = state.images.find(
    (img) => img.id === state.selectedImageId
  );

  if (state.images.length === 0) {
    return <div className="text-center py-8">Carregando...</div>;
  }

  return (
    <article>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Tag>Trabalhos</Tag>
        <p className="text-base text-center">
          Alguns dos projetos que construí:
        </p>
      </div>
      <div className="grid md:grid-cols-2 items-center justify-center bg-gray-900 rounded-sm min-h-[550px]">
        <div className="rounded-sm p-12  bg-gray-800 md:h-full min-h-80 flex items-center justify-center">
          <Projects images={state.images} />
        </div>
        <div className="flex flex-col gap-6 p-12 min-h-80 rounded-sm">
          {selectedImage && (
            <>
              <div className="max-w-3xl mx-auto px-4 sm:px-0">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <p className="text-base ">{selectedImage.description}</p>
              </div>

              <div className="flex gap-2 flex-wrap">
                {selectedImage.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
