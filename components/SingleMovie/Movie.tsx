import { SingleMovieProps } from "@/types";
import { Button } from "../ui/button";
import { IoPlay } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import CarouselBanner from "../Carousel/CarouselBanner";

const Movie = ({ movie, certification }: SingleMovieProps) => {
  let discover = [];
  discover.push(movie);

  return (
    <div className="relative">
      <CarouselBanner
        movieDetails={movie}
        discover={discover}
        certification={certification}
        isSingle
      />
      <div className="flex gap-2 sm:gap-3 px-5 sm:px-0 sm:ml-container absolute top-[70%] z-20">
        <Button className="flex items-center xs:gap-1 sm:gap-2" size="custom">
          <IoPlay />
          Watch Now
        </Button>
        <Button size="custom" variant="secondary">
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default Movie;
