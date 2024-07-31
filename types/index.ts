export interface SidebarItemsProps {
  icon: JSX.Element;
  text: string;
  link: string;
  setIsOpen?: (e: boolean) => void;
}

export interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
}

export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailsProps extends MovieProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieSearchResultsProps {
  page: number;
  results: MovieProps[];
  details: MovieDetailsProps;
  total_pages: number;
  total_results: number;
}

export interface CarouselBannerProps {
  movieDetails?: MovieDetailsProps;
  discover: MovieProps[];
  isSingle?: boolean;
  certification?: MovieCertificationProps[];
}

export interface MovieCertificationProps {
  iso_3166_1: string;
  release_dates: [
    {
      certification: string;
      descriptors: string[];
      iso_639_1: string;
      note: string;
      release_date: string;
      type: number;
    }
  ];
}

export interface CarouselMovieDetailsProps {
  certification?: MovieCertificationProps[];
  movieDetails?: MovieDetailsProps;
  movie: MovieProps;
  isSingle: boolean | undefined;
}

export interface MoviesCarouselProps {
  title?: string;
  movies: MovieProps[];
  isWide?: boolean;
}

export interface MovieCardProps {
  movie: MovieProps;
  isWide?: boolean;
}

export interface FooterLinksProps {
  title: string;
  isRow?: boolean;
  links: LinkProps[];
}

interface LinkProps {
  link: string | JSX.Element;
}

export interface MovieVideoProps {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface SingleMovieProps {
  movie: MovieDetailsProps;
  certification: MovieCertificationProps[];
}

export interface GenreProps {
  id: number;
  name: string;
}

export interface GenresProps {
  genres: GenreProps[];
}
