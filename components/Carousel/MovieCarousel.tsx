import { MoviesCarouselProps } from "@/types";
import { cn } from "@/lib/utils";
import MovieCard from "../Cards/MovieCard";
import { Star } from "lucide-react";
import Section from "../Section";

const MoviesCarousel = async ({
  title,
  movies,
  isWide,
}: MoviesCarouselProps) => {
  return (
    <Section isLeft={isWide ? false : true} className="z-30 relative">
      <h2 className="text-sm xs:text-lg sm:text-xl mb-3 font-semibold">
        {title}
      </h2>
      <div
        className={cn(
          "gap-x-2",
          isWide
            ? " grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8"
            : "flex overflow-scroll scrollbar-hide"
        )}
      >
        {isWide
          ? movies?.map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} isWide={isWide} />
                <div className="p-2 max-w-[340px]">
                  <p className="line-clamp-1 font-medium">{movie.title}</p>
                  <p className="flex gap-2 text-muted">
                    <span>{movie.release_date?.split("-")[0]}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star size={16} />
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <span>•</span>
                    <span>{movie.original_language}</span>
                  </p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </Section>
  );
};

export default MoviesCarousel;
