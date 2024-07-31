import { CarouselMovieDetailsProps } from "@/types";
import React, { useMemo } from "react";
import Link from "next/link";
import Section from "../Section";

export const MovieDetails = ({
  movie,
  certification,
  movieDetails,
  isSingle,
}: CarouselMovieDetailsProps) => {
  const usCertification = useMemo(
    () => certification?.find((country) => country.iso_3166_1 === "US"),
    [certification]
  );

  const releaseYear = movie.release_date.split("-")[0];
  const languageCount = movieDetails?.spoken_languages?.length ?? 0;
  const certificationRating = usCertification?.release_dates[0]?.certification;

  return (
    <Section isLeft className="flex flex-col justify-center h-full">
      <h1
        className={`movie_title z-30 ${
          isSingle ? "xs:mb-1 sm:mb-2 md:mb-4 lg:mb-8" : "mb-0 sm:mb-2"
        } `}
      >
        {movie.title}
      </h1>
      {isSingle && (
        <div className="movie_metadata">
          <span>{releaseYear}</span>
          <span className="text-muted-foreground">•</span>
          <span>{languageCount} Languages</span>
          {usCertification?.release_dates[0].certification && (
            <React.Fragment>
              <span className="text-muted-foreground">•</span>
              <span>{certificationRating}</span>
            </React.Fragment>
          )}
        </div>
      )}
      <div className="my-1 lg:my-2 xl:my-4">
        <p className="movie_overview">{movie.overview}</p>
      </div>
      {isSingle && movieDetails?.genres && movieDetails?.genres.length > 0 && (
        <div className="hidden xs:block pb-5 lg:pb-8 xl:pb-10 space-y-3">
          <div className="flex gap-1 lg:gap-3 items-center">
            {movieDetails?.genres.map((genre, index) => (
              <React.Fragment key={genre.id}>
                <Link
                  href={`/genre/${genre.id}?genre=${genre.name}`}
                  className="movie_genreLink"
                >
                  {genre.name}
                </Link>
                {index !== movieDetails.genres.length - 1 && (
                  <span className="text-[7px] sm:text-[10px] lg:text-base text-muted-foreground">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
};
