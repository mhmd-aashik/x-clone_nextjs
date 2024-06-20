import {
  FaBookmark,
  FaHouse,
  FaListOl,
  FaMessage,
  FaUser,
  FaUserGroup,
} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaBell, FaEllipsisH, FaGlobeAmericas } from "react-icons/fa";

export const twitterLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
    logo: FaHouse,
  },
  {
    id: 2,
    name: "Search",
    link: "/",
    logo: IoSearch,
  },
  {
    id: 3,
    name: "Notifications",
    link: "/",
    logo: FaBell,
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    logo: FaMessage,
  },
  {
    id: 5,
    name: "Lists",
    link: "/",
    logo: FaListOl,
  },
  {
    id: 6,
    name: "Explore",
    link: "/",
    logo: FaGlobeAmericas,
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    logo: FaUserGroup,
  },
  {
    id: 8,
    name: "Bookmarks",
    link: "/",
    logo: FaBookmark,
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    logo: FaUser,
  },
  {
    id: 10,
    name: "More",
    link: "/",
    logo: FaEllipsisH,
  },
];
