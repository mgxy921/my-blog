import { defineConfig } from "vitepress";
import MySidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
      {
        text: "前端",
        items: [
          { text: "Vue", link: "/frontend/Vue/" },
          { text: "React", link: "/frontend/React/" },
          { text: "JavaScript", link: "/frontend/JavaScript/" },
        ],
      },
      {
        text: "后端",
        items: [
          { text: "Go", link: "/backend/go/" },
          { text: "Python", link: "/backend/Python/" },
          // { text: "Item C", link: "/item-3" },
        ],
      },
      {
        text: "中间件",
        items: [
          { text: "RabbitMQ", link: "/middleware/" },
          { text: "Nginx", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
      {
        text: "数据库",
        items: [
          { text: "redis", link: "/database/redis/" },
          { text: "MySql", link: "/database/MySql/" },
          { text: "PostgreSQL", link: "/database/PostgreSQL/" },
        ],
      },
      {
        text: "Linux",
        items: [
          { text: "Item A", link: "/linux" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
      {
        text: "工具",
        items: [
          { text: "git", link: "/git/" },
          { text: "Docker", link: "/Docker/01 Docker 简介.md" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],

    sidebar: MySidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

export var RootDocsPath = "/docs";
