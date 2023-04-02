import { SearchPlugin } from "vitepress-plugin-search";
import { createMarkdownRenderer, defineConfig } from 'vitepress'

var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Sample",
  description: "VitePress Sample Description",
  cleanUrls: true,
  lang: "ja-JP",
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    config: (md) =>{
      md.use(require('markdown-it-plantuml'), {
        server: "http://localhost:8080",
      })
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alkanoic/VitePressSample' }
    ]
  },
})
