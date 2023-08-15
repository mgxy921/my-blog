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
};
export default MySidebar;
