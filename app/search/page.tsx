import SearchBar from "@/components/SearchBar";
import MoviesCarousel from "@/components/Carousel/MovieCarousel";
import { getTrendingMovies } from "@/lib/utils";
import Section from "@/components/Section";

const page = async () => {
  const trendingMovies = await getTrendingMovies();

  return (
    <div className="pt-8 space-y-8">
      <Section isLeft={false} className="flex items-center justify-center">
        <SearchBar />
      </Section>
      <div>
        <MoviesCarousel
          title="Trending Movies"
          movies={trendingMovies}
          isWide
        />
      </div>
    </div>
  );
};

export default page;
