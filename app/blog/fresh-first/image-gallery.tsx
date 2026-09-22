"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  cropTop?: number;
};

function CroppedImage({
  image,
  fullResolution = false,
}: {
  image: GalleryImage;
  fullResolution?: boolean;
}) {
  const cropTop = image.cropTop ?? 0;
  const visibleHeight = image.height - cropTop;
  const cropStyle = {
    aspectRatio: `${image.width} / ${visibleHeight}`,
  };
  const imageStyle = cropTop
    ? {
        transform: `translateY(-${(cropTop / image.height) * 100}%)`,
      }
    : undefined;

  return (
    <span className="gallery-crop" style={cropStyle}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        quality={fullResolution ? undefined : 92}
        unoptimized={fullResolution}
        sizes={
          fullResolution
            ? "100vw"
            : "(max-width: 560px) calc(100vw - 72px), (max-width: 900px) 72vw, 650px"
        }
        style={imageStyle}
      />
    </span>
  );
}

function ImageLightbox({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) {
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const zoomLayerRef = useRef<HTMLSpanElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const cropTop = image.cropTop ?? 0;
  const visibleHeight = image.height - cropTop;
  const frameStyle = {
    "--image-ratio": image.width / visibleHeight,
    "--frame-width": `min(92vw, ${(image.width / visibleHeight) * 86}vh)`,
  } as CSSProperties;

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>("button"),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [onClose]);

  function updateZoomOrigin(
    event: ReactPointerEvent<HTMLButtonElement>,
  ) {
    if (!zoomed || !zoomLayerRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    zoomLayerRef.current.style.transformOrigin = `${x}% ${y}%`;
  }

  function toggleZoom(event: ReactMouseEvent<HTMLButtonElement>) {
    if (!zoomed && zoomLayerRef.current) {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      zoomLayerRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
    setZoomed((current) => !current);
  }

  function handleImageKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if ((event.key === "Enter" || event.key === " ") && zoomLayerRef.current) {
      zoomLayerRef.current.style.transformOrigin = "50% 50%";
    }
  }

  return createPortal(
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      aria-describedby="image-viewer-instructions"
      ref={dialogRef}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <p className="sr-only" id="image-viewer-instructions">
        Select the image to zoom. Move the pointer to inspect the zoomed image.
        Press Escape or select outside the image to close.
      </p>
      <button
        className="image-lightbox-close"
        type="button"
        aria-label="Close image viewer"
        ref={closeRef}
        onClick={onClose}
      >
        ×
      </button>
      <button
        className="image-lightbox-frame"
        type="button"
        aria-label={zoomed ? "Zoom out" : "Zoom in"}
        aria-pressed={zoomed}
        data-zoomed={zoomed || undefined}
        style={frameStyle}
        onPointerMove={updateZoomOrigin}
        onPointerLeave={() => {
          if (zoomLayerRef.current) {
            zoomLayerRef.current.style.transformOrigin = "50% 50%";
          }
        }}
        onPointerDown={(event) => event.stopPropagation()}
        onClick={toggleZoom}
        onKeyDown={handleImageKeyDown}
      >
        <span className="image-lightbox-zoom" ref={zoomLayerRef}>
          <CroppedImage image={image} fullResolution />
        </span>
      </button>
    </div>,
    document.body,
  );
}

export default function ImageGallery({
  images,
  className,
}: {
  images: GalleryImage[];
  className?: string;
}) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div
        className={`post-media post-media-${Math.min(images.length, 4)}${className ? ` ${className}` : ""}`}
      >
        {images.map((image) => (
          <figure key={image.src}>
            <button
              className="post-image-trigger"
              type="button"
              aria-label={`View larger: ${image.alt}`}
              onClick={() => setActiveImage(image)}
            >
              <CroppedImage image={image} />
            </button>
          </figure>
        ))}
      </div>
      {activeImage ? (
        <ImageLightbox
          image={activeImage}
          onClose={() => setActiveImage(null)}
        />
      ) : null}
    </>
  );
}
