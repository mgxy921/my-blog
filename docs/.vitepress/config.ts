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
      {
        text: "前端",
        items: [
          { text: "HTML CSS", link: "/frontend/html_css/01 HTML简介.md" },
          { text: "JavaScript", link: "/frontend/JavaScript/" },
          { text: "Vue", link: "/frontend/Vue/00 MVVM模式.md" },
          { text: "React", link: "/frontend/React/" },
        ],
      },
      {
        text: "后端",
        items: [
          { text: "Go", link: "/backend/go/" },
          { text: "Python", link: "/backend/Python/" },
        ],
      },
      {
        text: "中间件",
        items: [
          { text: "RabbitMQ", link: "/middleware/" },
          { text: "Nginx", link: "/nginx" },
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
        link: "/linux/01 Linux 基础篇.md",
      },
      {
        text: "工具",
        items: [
          { text: "Git", link: "/git/01 起步.md" },
          { text: "Docker", link: "/Docker/01 Docker 简介.md" },
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
