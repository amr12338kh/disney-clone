import { FooterLinksProps } from "@/types";
import {
  Tv,
  Search,
  Home,
  Clapperboard,
  CircleUser,
  Sparkles,
  Instagram,
  Twitter,
  Facebook,
  List,
} from "lucide-react";

const iconsSize = 23;

export const sidebarData = [
  { icon: <CircleUser size={iconsSize} />, text: "Profile", link: "/profile" },
  { icon: <Search size={iconsSize} />, text: "Search", link: `/search` },
  { icon: <Home size={iconsSize} />, text: "Home", link: "/" },
  { icon: <Tv size={iconsSize} />, text: "Series", link: "/series" },
  { icon: <Clapperboard size={iconsSize} />, text: "Movies", link: "/movies" },
  { icon: <List size={iconsSize} />, text: "Genres", link: "/genre" },
  {
    icon: <Sparkles size={iconsSize} />,
    text: "Originals",
    link: "/originals",
  },
];

export const footerLinks: FooterLinksProps[] = [
  {
    title: "Company",
    links: [
      {
        link: "Supported Devices",
      },
      {
        link: "Internet based Ads",
      },
    ],
  },
  {
    title: "View Website in",
    links: [
      {
        link: "English",
      },
      {
        link: "Arabic",
      },
    ],
  },
  {
    title: "Need Help?",
    links: [
      {
        link: "Help",
      },
      {
        link: "Feedback",
      },
    ],
  },
  {
    title: "Connect With Us",
    isRow: true,
    links: [
      {
        link: <Facebook />,
      },
      {
        link: <Twitter />,
      },
      {
        link: <Instagram />,
      },
    ],
  },
];
