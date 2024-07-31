import React from "react";
import Link from "next/link";
import { MovieCardProps } from "@/types";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

const MovieCard = ({ movie, isWide }: MovieCardProps) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div
        className={`relative overflow-hidden bg-[#1b1f27] rounded-md border-none ${
          isWide
            ? "aspect-video"
            : "w-[120px] h-[180px] xs:w-[150px] xs:h-[220px] sm:w-[180px] sm:h-[270px] md:w-[210px] md:h-[300px] lg:w-[230px] lg:h-[320px]"
        }`}
      >
        {isWide && (
          <div className=" absolute bottom-0 left-0 bg-gradient-to-b w-full h-1/2 from-transparent to-[#0f1014]/90 z-10" />
        )}
        <Image
          src={
            isWide
              ? getImagePath(movie?.backdrop_path || movie?.poster_path)
              : getImagePath(movie?.poster_path || movie?.backdrop_path)
          }
          alt={movie.title || "Movie Poster"}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
