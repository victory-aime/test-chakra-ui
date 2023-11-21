import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType; 
}

export const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
  { name: "Settings", icon: FiSettings },
  { name: "Settings", icon: FiSettings },
];
