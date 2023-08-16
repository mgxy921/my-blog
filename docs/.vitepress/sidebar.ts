import { GetSibleItemByPath } from "./utils/sidebar";

var homeSidebarItem = { text: "Home", link: "/" };
const MySidebar = {
  "/frontend/html_css/": [
    {
      text: "html css",
      // collapsible: true,
      collapsed: true,
      items: GetSibleItemByPath("/frontend/html_css/", true),
    },
  ],
  "/git/": [
    {
      text: "git",
      // collapsible: true,
      collapsed: true,
      items: GetSibleItemByPath("/git", true),
    },
  ],
};
export default MySidebar;
