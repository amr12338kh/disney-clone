import MoviesCarousel from "@/components/Carousel/MovieCarousel";
import { getDiscoverMovies, getPopularMovies } from "@/lib/utils";

interface Props {
  params: {
    genreId: string;
  };
  searchParams: {
    genre: string;
  };
}

const GenrePage = async ({
  params: { genreId },
  searchParams: { genre },
}: Props) => {
  const movies = await getDiscoverMovies(genreId);

  const popularMovies = await getPopularMovies();

  return (
    <div className="flex flex-col space-y-5 pt-8">
      <h1 className="genre_heading">Results for: {genre} genre</h1>
      <div className="space-y-10">
        <MoviesCarousel movies={movies} isWide />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
};

export default GenrePage;
