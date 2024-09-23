"use client";
import { useWorkData } from "@/hooks/useWorkData";
import Projects from "./carousel";
import { Tag } from "./tag";
import { LinkSimple } from "@phosphor-icons/react";
import { SkeletonLoader } from "./skeleton";

export function Work() {
  const { selectedImage, isLoading } = useWorkData();

  if (isLoading) {
    return <SkeletonLoader />;
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
        <div className="rounded-sm p-12 bg-gray-800 md:h-full min-h-80 flex items-center justify-center">
          <Projects images={selectedImage ? [selectedImage] : []} />
        </div>
        <div className="flex flex-col gap-6 p-12 min-h-80 rounded-sm">
          {selectedImage && (
            <>
              <div className="max-w-3xl mx-auto px-4 sm:px-0">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <p className="text-base">{selectedImage.description}</p>
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
