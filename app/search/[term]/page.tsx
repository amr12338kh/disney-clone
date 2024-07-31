import { notFound } from "next/navigation";
import {
  getSearchedMovies,
  getPopularMovies,
  getTrendingMovies,
} from "@/lib/utils";
import MoviesCarousel from "@/components/Carousel/MovieCarousel";
import SearchBar from "@/components/SearchBar";
import Section from "@/components/Section";

interface Props {
  params: {
    term: string;
  };
}

const SearchPage = async ({ params: { term } }: Props) => {
  if (!term) notFound();
  const trendingMovies = await getTrendingMovies();
  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="pt-8 space-y-5">
      <Section isLeft={false} className="flex items-center justify-center">
        <SearchBar />
      </Section>
      <h1 className="search_heading">
        {movies.length < 1 ? "Nothing Found For" : "Results For"}: {termToUse}
      </h1>
      {movies.length < 1 ? (
        <MoviesCarousel
          title="Trending Movies"
          movies={trendingMovies}
          isWide
        />
      ) : (
        <div className="flex flex-col gap-y-8">
          <MoviesCarousel movies={movies} isWide />
          <MoviesCarousel title="You may also like" movies={popularMovies} />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
