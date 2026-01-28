// 网站文本内容统一管理

export const siteTexts = {
  // 导航相关
  nav: {
    logo: 'GameDev',
    items: [
      { name: '首页', href: '#home' },
      { name: '项目', href: '#projects' },
      { name: '关于', href: '#about' },
      { name: '联系', href: '#contact' }
    ]
  },

  // Hero 区域
  hero: {
    title: '游戏开发者',
    subtitle: '专注于 Unity 与 Unreal 引擎，创造沉浸式游戏体验',
    cta: {
      primary: '查看项目',
      secondary: '联系我'
    }
  },

  // 页脚相关
  footer: {
    title: 'Game Developer Portfolio',
    description: 'Creating immersive gaming experiences',
    copyright: '© 2024 Game Developer Portfolio. All rights reserved.'
  },

  // 社交链接
  social: {
    github: {
      name: 'GitHub',
      href: 'https://github.com',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    linkedin: {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    },
    twitter: {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    }
  },

  // 项目相关
  projects: {
    title: '项目展示',
    subtitle: '探索我的游戏开发作品',
    filters: [
      { name: '全部', value: 'all' },
      { name: 'Unity', value: 'unity' },
      { name: 'Unreal', value: 'unreal' },
      { name: '移动游戏', value: 'mobile' },
      { name: 'PC/主机', value: 'pc' }
    ],
    viewDetails: '查看详情',
    playDemo: '试玩Demo',
    watchVideo: '观看视频'
  },

  // 关于页面
  about: {
    title: '关于我',
    subtitle: '了解我的技能与经历',
    skills: {
      title: '技术栈',
      categories: {
        languages: '编程语言',
        engines: '游戏引擎',
        tools: '开发工具',
        frameworks: '框架与库'
      }
    },
    experience: {
      title: '职业经历',
      current: '当前状态'
    }
  },

  // 联系页面
  contact: {
    title: '联系我',
    subtitle: '让我们一起创造精彩的游戏',
    form: {
      name: '姓名',
      email: '邮箱',
      message: '留言',
      submit: '发送消息',
      sending: '发送中...',
      success: '消息发送成功！',
      error: '发送失败，请重试。'
    },
    info: {
      email: '邮箱',
      location: '位置',
      availability: '当前状态'
    },
    status: {
      available: '开放全职机会',
      freelance: '可接 freelance 游戏原型开发',
      busy: '当前项目繁忙'
    }
  }
};

export default siteTexts;
