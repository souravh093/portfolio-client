import { INavItem } from "@/types/navItem.types";
import {
  Album,
  Blinds,
  Brush,
  Contact,
  Cpu,
  HandPlatter,
  Home,
  MessageCircleQuestion,
  MonitorPause,
  Rss,
  Star,
} from "lucide-react";

const navItems: INavItem[] = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "Appearances",
    to: "/dashboard/appearance",
    icon: <Brush className="h-5 w-5" />,
  },
  {
    name: "Educations",
    to: "/dashboard/education",
    icon: <Album className="w-5 h-5" />,
  },
  {
    name: "Experiences",
    to: "/dashboard/experience",
    icon: <Star className="w-5 h-5" />,
  },
  {
    name: "Services",
    to: "/dashboard/service",
    icon: <HandPlatter className="w-5 h-5" />,
  },
  {
    name: "Technologies",
    to: "/dashboard/technology",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    name: "Projects",
    to: "/dashboard/project",
    icon: <Blinds className="w-5 h-5" />,
  },
  {
    name: "Blogs",
    to: "/dashboard/blog",
    icon: <Rss className="w-5 h-5" />,
  },
  {
    name: "FAQs",
    to: "/dashboard/faq",
    icon: <MessageCircleQuestion className="w-5 h-5" />,
  },
  {
    name: "Contacts",
    to: "/dashboard/contact",
    icon: <Contact className="w-5 h-5" />,
  },
  {
    name: "Socials",
    to: "/dashboard/social",
    icon: <MonitorPause className="w-5 h-5" />,
  },
];

export default navItems;