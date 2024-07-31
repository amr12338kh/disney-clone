"use client";

import { getImagePath } from "@/lib/utils";
import { CarouselBannerProps } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Image from "next/image";
import { MovieDetails } from "./MovieDetailes";
import useEmblaCarousel from "embla-carousel-react";

Autoplay.globalOptions = { delay: 12000 };

const CarouselBanner = ({
  discover,
  isSingle,
  certification,
  movieDetails,
}: CarouselBannerProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay(),
  ]);

  return (
    <div ref={!isSingle ? emblaRef : null} className="overflow-hidden">
      <div className="flex">
        {discover.map((movie) => (
          <div key={movie.id} className="flex-full min-w-0 relative">
            <Image
              key={movie.id}
              alt={movie.title}
              src={getImagePath(movie.backdrop_path, true)}
              width={1920}
              height={1080}
            />
            <div className="absolute mt-0 top-0 left-0 bg-transparent h-full w-[60%] bg-gradient-to-r from-[#0f1014] from-20% z-10 to-transparent">
              <MovieDetails
                movie={movie}
                certification={certification}
                movieDetails={movieDetails}
                isSingle={isSingle}
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-gradient-to-b w-full h-1/2 from-transparent to-[#0f1014]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
