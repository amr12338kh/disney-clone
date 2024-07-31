import {
  getMovieDetails,
  getMovieVideo,
  getRecommendations,
  getCertification,
} from "@/lib/utils";
import {
  MovieDetailsProps,
  MovieVideoProps,
  MovieProps,
  MovieCertificationProps,
} from "@/types";
import Movie from "@/components/SingleMovie/Movie";
import MoviesCarousel from "@/components/Carousel/MovieCarousel";
import VideoCard from "@/components/Cards/VideoCard";

const page = async ({ params }: { params: { movie_id: number } }) => {
  const movie: MovieDetailsProps = await getMovieDetails(params.movie_id);
  const videos: MovieVideoProps[] = await getMovieVideo(params.movie_id);
  const recommendations: MovieProps[] = await getRecommendations(
    params.movie_id
  );
  const certification: MovieCertificationProps[] = await getCertification(
    params.movie_id
  );

  return (
    <section>
      <Movie movie={movie} certification={certification} />
      <div className="space-y-10">
        {recommendations.length > 0 && (
          <MoviesCarousel title="More Like This" movies={recommendations} />
        )}
        {videos.length > 0 && <VideoCard videos={videos} />}
      </div>
    </section>
  );
};

export default page;
