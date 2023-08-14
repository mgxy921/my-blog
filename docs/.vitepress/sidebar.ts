import { GetSibleItemByPath } from "./utils/sidebar";

var homeSidebarItem = { text: "Home", link: "/" };
const MySidebar = {
  "/frontend/": [
    {
      text: "Vue",
      // collapsible: true,
      collapsed: true,
      items: [
        // This shows `/guide/index.md` page.
        { text: "Index", link: "/guide/" }, // /guide/index.md
        { text: "One", link: "/guide/one" }, // /guide/one.md
        { text: "Two", link: "/guide/two" }, // /guide/two.md
      ],
    },
  ],
  // "/docker/": [
  //   {
  //     text: "Docker",
  //     // collapsible: true,
  //     collapsed: true,
  //     items: [
  //       // This shows `/guide/index.md` page.
  //       { text: "Index", link: "/guide/" }, // /guide/index.md
  //       { text: "One", link: "/guide/one" }, // /guide/one.md
  //       { text: "Two", link: "/guide/two" }, // /guide/two.md
  //     ],
  //   },
  // ],

  "/docker/": [
    {
      text: "Docker",
      // collapsible: true,
      collapsed: true,
      items: GetSibleItemByPath("/docker"),
    },
  ],
};
export default MySidebar;
