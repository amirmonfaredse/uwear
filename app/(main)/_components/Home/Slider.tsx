"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); 
      console.log("Slide Nodes:", emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {["slider1.jpg", "slider2.jpg", "slider3.jpg"].map((img, index) => (
          <div key={index} className="embla__slide flex-shrink-0 min-w-full">
            <img src={`/img/${img}`} alt={`Slide ${index + 1}`} className="w-full h-120 rounded-lg object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
