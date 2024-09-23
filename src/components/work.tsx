"use client";
import { useEffect } from "react";
import Projects from "./carousel";
import { ImageObject, useCarousel } from "./carousel-context";
import { Tag } from "./tag";
import { LinkSimple } from "@phosphor-icons/react";

// Simula uma função de busca de API
const fetchImages = async (): Promise<ImageObject[]> => {
  // Simula um atraso de rede
  /* await new Promise((resolve) => setTimeout(resolve, 1000)); */

  return [
    {
      id: "1",
      title: "Focus Timer",
      description:
        "'Focus Timer', esse é um desafio proposto pelo time da rocketseat um projeto de timer que utiliza ES6 modules, estados, variáveis, callback functions e um modo escuro / claro.",
      imageUrl: "/focusTime.jpg",
      tags: ["Git", "javaScript", "Netlify"],
      link: "https://desafio-focus-time.netlify.app/",
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
              <div className="flex gap-2">
                {selectedImage.link && (
                  <a
                    href={selectedImage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-center bg-gray-900 rounded-sm px-4 py-2 hover:text-popover transition-colors duration-300"
                  >
                    <LinkSimple size={20} />
                    <span>Ver projeto</span>
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
