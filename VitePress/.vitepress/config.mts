import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/lua5.4-manual-zh/lua.ico' }]],
  title: "Lua 5.4 中文参考手册",
  description: "《Lua5.4参考手册》 译自lua官方《Lua 5.4 Reference Manual》",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Lua 5.4 中文参考手册',
        items: [
          { text: '1 - 简介', link: '/1' },
          {
            text: '2 - 基本概念',
            link: '/2',
            items: [
              { text: '2.1 - 值和类型', link: '/2.1' },
              { text: '2.2 - 环境和全局环境', link: '/2.2' },
              { text: '2.3 - 错误处理', link: '/2.3' },
              { text: '2.4 - 元表和元函数', link: '/2.4' },
              {
                text: '2.5 - 垃圾回收（GC）',
                link: '/2.5',
                items: [
                  { text: '2.5.1 - 步进模式', link: '/2.5.1' },
                  { text: '2.5.2 - 代际模式', link: '/2.5.2' },
                  { text: '2.5.3 - GC元函数', link: '/2.5.3' },
                  { text: '2.5.4 - 弱表', link: '/2.5.4' }
                ]
              },
              { text: '2.6 - 协程（Coroutines）', link: '/2.6' }
            ]
          },
          {
            text: '3 - 语言',
            link: '/3',
            items: [
              { text: '3.1 - 词法约定', link: '/3.1' },
              { text: '3.2 - 变量', link: '/3.2' },
              {
                text: '3.3 - 语句',
                link: '/3.3',
                items: [
                  { text: '3.3.1 - 语句块（Blocks）', link: '/3.3.1' },
                  { text: '3.3.2 - 代码块（Chunks）', link: '/3.3.2' },
                  { text: '3.3.3 - 赋值', link: '/3.3.3' },
                  { text: '3.3.4 - 控制结构', link: '/3.3.4' },
                  { text: '3.3.5 - for语句', link: '/3.3.5' },
                  { text: '3.3.6 - 作为语句的函数调用', link: '/3.3.6' },
                  { text: '3.3.7 - 局部声明', link: '/3.3.7' },
                  { text: '3.3.8 - 待关闭变量', link: '/3.3.8' }
                ]
              },
              {
                text: '3.4 - 表达式',
                link: '/3.4',
                items: [
                  { text: '3.4.1 - 算术操作', link: '/3.4.1' },
                  { text: '3.4.2 - 位操作', link: '/3.4.2' },
                  { text: '3.4.3 - 转换及强制转换', link: '/3.4.3' },
                  { text: '3.4.4 - 关系操作', link: '/3.4.4' },
                  { text: '3.4.5 - 逻辑操作', link: '/3.4.5' },
                  { text: '3.4.6 - 连接', link: '/3.4.6' },
                  { text: '3.4.7 - 取长操作符', link: '/3.4.7' },
                  { text: '3.4.8 - 优先级', link: '/3.4.8' },
                  { text: '3.4.9 - 表的构造', link: '/3.4.9' },
                  { text: '3.4.10 - 函数调用', link: '/3.4.10' },
                  { text: '3.4.11 - 函数定义', link: '/3.4.11' },
                  { text: '3.4.12 - 表达式列表和多重返回', link: '/3.4.12' }
                ]
              },
              { text: '3.5 - 可见性规则', link: '/3.5' }
            ]
          },
          {
            text: '4 - 应用编程接口',
            link: '/4',
            items: [
              {
                text: '4.1 - 栈',
                link: '/4.1',
                items: [
                  { text: '4.1.1 - 栈的大小', link: '/4.1.1' },
                  { text: '4.1.2 - 有效与可接受的索引', link: '/4.1.2' },
                  { text: '4.1.3 - 字符串指针', link: '/4.1.3' }
                ]
              },
              { text: '4.2 - C闭包', link: '/4.2' },
              { text: '4.3 - 注册表', link: '/4.3' },
              {
                text: '4.4 - C代码中的错误处理',
                link: '/4.4',
                items: [{ text: '4.4.1 - 状态码', link: '/4.4.1' }]
              },
              { text: '4.5 - 在C代码中处理让出', link: '/4.5' },
              { text: '4.6 - 函数及类型列表', link: '/4.6' },
              { text: '4.7 - 调试接口', link: '/4.7' }
            ]
          },
          {
            text: '5 - 辅助库',
            link: '/5',
            items: [{ text: '5.1 - 函数和类型', link: '/5.1' }]
          },
          {
            text: '6 - 标准库',
            link: '/6',
            items: [
              { text: '6.1 - 基础库', link: '/6.1' },
              { text: '6.2 - 处理协程', link: '/6.2' },
              { text: '6.3 – 模块', link: '/6.3' },
              {
                text: '6.4 - 字符串操作',
                link: '/6.4',
                items: [
                  { text: '6.4.1 - 模式匹配', link: '/6.4.1' },
                  { text: '6.4.2 - 打包与解包中的格式化字符串', link: '/6.4.2' }
                ]
              },
              { text: '6.5 - UTF-8支持', link: '/6.5' },
              { text: '6.6 - 表操作', link: '/6.6' },
              { text: '6.7 - 数学函数', link: '/6.7' },
              { text: '6.8 - I/O操作', link: '/6.8' },
              { text: '6.9 - OS相关操作', link: '/6.9' },
              { text: '6.10 - 调试库', link: '/6.10' }
            ]
          },
          { text: '7 - 单独使用的Lua', link: '/7' },
          {
            text: '8 - 版本兼容性相关',
            link: '/8',
            items: [
              { text: '8.1 - 语言中的兼容性问题', link: '/8.1' },
              { text: '8.2 - 库中的兼容性问题', link: '/8.2' },
              { text: '8.3 - API中的兼容性问题', link: '/8.3' }
            ]
          },
          { text: '9 - Lua完整语法', link: '/9' }
        ]
      }
    ],

    outline: {
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/atom-l/lua5.4-manual-zh' }
    ],

    logo: '/lua.ico',

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    }
  },
  outDir: '../docs',
  base: '/lua5.4-manual-zh/'
})
