"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  if (!images.length) {
    return null;
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() =>
              setSelectedImage(image)
            }
            className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-secondary"
            aria-label={`${title} image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <button
            type="button"
            onClick={() =>
              setSelectedImage(null)
            }
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <Image
              src={selectedImage}
              alt={title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}