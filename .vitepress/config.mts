import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kita Wiki",
  description: "Note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav:[
      { text: 'Home', link: '/index.md' },

      { text: 'FEISHU WIKI', link: 'https://cxdttgbvam1.feishu.cn/wiki/LEyCwNxgXi9svSkJiM8cuRovn7g?from=from_copylink' },

      {
        text: 'NOTE', link:'/note.md'
      }
    ],
    sidebar:[
      {
      text: '病毒理论',
      items: [
        { text: 'Chapter1', link: '/病毒理论/Chapter1' },
        { text: 'Chapter2', link: '/病毒理论/Chapter2' },
        { text: 'Chapter3', link: '/病毒理论/Chapter3' },
        { text: 'Chapter4', link: '/病毒理论/Chapter4' },
        { text: 'Chapter5', link: '/病毒理论/Chapter5' },
        { text: 'Chapter6', link: '/病毒理论/Chapter6' },
      ],
      },
      
      {
        text: '计算机图形学',
        items: [
          { text: 'Chapter-1-Base', link: '/计算机图形学/Chapter-1-Base' },
          { text: 'Chapter-2-Transfomation', link: '/计算机图形学/Chapter-2-Transfomation' },
          { text: 'Chapter-3-Viewing', link: '/计算机图形学/Chapter-3-Viewing' },
          { text: 'Chapter-4-Modeling', link: '/计算机图形学/Chapter-4-Modeling' },
        ],
      },
      {
        text: '数据挖掘与大数据分析',
        items: [
          { text: 'Chapter-1-引言', link: '/数据挖掘与大数据分析/Chapter-1-引言' },
          { text: 'Chapter-2-认识数据和数据预处理', link: '/数据挖掘与大数据分析/Chapter-2-认识数据和数据预处理' },
          { text: 'Chapter-3-关联规则挖掘', link: '/数据挖掘与大数据分析/Chapter-3-关联规则挖掘' },
          { text: 'Chapter-4-分类', link: '/数据挖掘与大数据分析/Chapter-4-分类' },
          { text: 'Chapter-5-聚类', link: '/数据挖掘与大数据分析/Chapter-5-聚类' },
          { text: 'Chapter-6-大数据挖掘', link: '/数据挖掘与大数据分析/Chapter-6-大数据挖掘' }
        ],
      },
      {
        text: '计算机体系结构',
        items: [
          { text: 'Chapter1-量化设计与分析基础', link: '/计算机体系结构/Chapter1-量化设计与分析基础' },
          { text: 'Chapter2-指令系统', link: '/计算机体系结构/Chapter2-指令系统' },
          { text: 'Chapter3-流水线技术', link: '/计算机体系结构/Chapter3-流水线技术' },
          { text: 'Chapter4-存储器层次结构', link: '/计算机体系结构/Chapter4-存储器层次结构' },
        ],
      },
    ],
    footer:{ 
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kita'
    },
    outline:
    {
      level: [1,6] 
    }, 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kita-71' }
    ]
  }
})
