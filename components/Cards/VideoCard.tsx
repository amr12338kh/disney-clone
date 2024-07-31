import { MovieVideoProps } from "@/types";
import Section from "../Section";

interface Props {
  videos: MovieVideoProps[];
}

const VideoCard = ({ videos }: Props) => {
  return (
    <Section isLeft>
      <h2 className="text-sm xs:text-lg sm:text-xl mb-3 font-semibold">
        Trailers & More
      </h2>
      <div className="flex gap-x-2 overflow-x-scroll scrollbar-hide">
        {videos.map((video) => (
          <div key={video.id} className="aspect-video">
            <iframe
              className="rounded-md bg-[#1b1f27]"
              height={190}
              width={340}
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <div className="px-1 pt-2 max-w-[340px]">
              <p className="line-clamp-2 text-sm font-medium text-muted">
                {video.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default VideoCard;
