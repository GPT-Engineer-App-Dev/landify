import { Home, Calendar, Music, Users, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Tour Dates",
    to: "/tour-dates",
    icon: <Calendar className="h-4 w-4" />,
    page: <div>Tour Dates Page</div>,
  },
  {
    title: "Music",
    to: "/music",
    icon: <Music className="h-4 w-4" />,
    page: <div>Music Page</div>,
  },
  {
    title: "About",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <div>About Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];