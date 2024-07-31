import CarouselBanner from "@/components/Carousel/CarouselBanner";
import MoviesCarousel from "@/components/Carousel/MovieCarousel";
import {
  getDiscoverMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/lib/utils";

export default async function Home() {
  const discoverMovies = await getDiscoverMovies();
  const popularMovies = await getPopularMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const nowPlyingMovies = await getNowPlayingMovies();
  const trendingMovies = await getTrendingMovies();

  return (
    <section>
      <section>
        <CarouselBanner discover={discoverMovies} />
      </section>

      <section className="main_movies_section">
        <section>
          <MoviesCarousel title="Popular Movies" movies={popularMovies} />
        </section>

        <section>
          <MoviesCarousel
            title="New Movies To Disney+"
            movies={upcomingMovies}
          />
        </section>

        <section>
          <MoviesCarousel title="Trending Movies" movies={trendingMovies} />
        </section>

        <section>
          <MoviesCarousel title="Now Plying Movies" movies={nowPlyingMovies} />
        </section>

        <section>
          <MoviesCarousel title="Top Rated Movies" movies={topRatedMovies} />
        </section>
      </section>
    </section>
  );
}
