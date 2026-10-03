"use client";

import Image from "next/image";
import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface FieldWorkGalleryProps {
  images: string[];
  title: string;
}

export function FieldWorkGallery({
  images,
  title,
}: FieldWorkGalleryProps) {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  if (!images.length) {
    return null;
  }

  const nextImage = () => {
    setActiveIndex((current) =>
      current === null
        ? 0
        : (current + 1) % images.length,
    );
  };

  const previousImage = () => {
    setActiveIndex((current) =>
      current === null
        ? 0
        : (current - 1 + images.length) %
          images.length,
    );
  };

  return (
    <>
      {/* Thumbnails */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface-secondary focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={`${title} ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute end-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            {images.length > 1 ? (
              <button
                type="button"
                onClick={previousImage}
                className="absolute start-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
            ) : null}

            {/* Next */}
            {images.length > 1 ? (
              <button
                type="button"
                onClick={nextImage}
                className="absolute end-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}