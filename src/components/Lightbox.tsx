import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  images: { src: string; alt: string; caption?: string }[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
        className="absolute left-3 md:left-8 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Próxima"
        className="absolute right-3 md:right-8 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <figure
        className="max-h-[90vh] max-w-[92vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="mx-auto max-h-[85vh] w-auto object-contain"
        />
        {img.caption && (
          <figcaption className="mt-4 text-center text-sm tracking-wide text-white/80">
            {img.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
