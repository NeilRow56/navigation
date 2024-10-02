import { SideNavItem } from "@/types";
import { Icon } from "@iconify/react";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Admin",
    path: "/admin",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/admin" },
      { title: "Web Design", path: "/admin/web-design" },
      { title: "Graphic Design", path: "/admin/graphic-design" },
    ],
  },
  {
    title: "List",
    path: "/list",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/list" },
      { title: "Lessons", path: "/list/lessons" },
      { title: "Students", path: "/list/students" },
    ],
  },
  {
    title: "Teachers",
    path: "/teachers",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Students",
    path: "/students",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/students/account" },
      { title: "Privacy", path: "/students/privacy" },
    ],
  },
  {
    title: "Parents",
    path: "/parents",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/parents/account" },
      { title: "Privacy", path: "/parents/privacy" },
    ],
  },
  {
    title: "Help",
    path: "/help",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
