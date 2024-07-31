import MoviesCarousel from "@/components/Carousel/MovieCarousel";
import Section from "@/components/Section";
import { getAllGenre, getPopularMovies } from "@/lib/utils";
import Link from "next/link";

const page = async () => {
  const genres = await getAllGenre();
  const popularMovies = await getPopularMovies();

  return (
    <section>
      <Section isLeft={false} className="py-8 space-y-10">
        <h1 className="text-3xl font-semibold">Genres:</h1>
        <div>
          <ul className="w-full list-disc pl-5 gap-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {genres.map(({ id, name }) => (
              <li key={id}>
                <Link
                  href={`/genre/${id}`}
                  className="hover:bg-muted/20 duration-100 p-1 rounded-md"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <MoviesCarousel title="you may also like" movies={popularMovies} />
    </section>
  );
};

export default page;
