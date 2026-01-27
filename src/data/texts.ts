// 网站所有文本的统一管理

export const siteTexts = {
  // Header 组件
  header: {
    title: '个人简历',
    navigation: {
      home: '首页',
      about: '关于',
      projects: '项目',
      contact: '联系'
    }
  },

  // Hero 组件
  hero: {
    avatar: '头像',
    greeting: '你好，我是',
    name: 'SPY',
    description: 'Unity开发工程师',
    buttons: {
      viewProjects: '查看项目',
      contactMe: '联系我'
    }
  },

  // About 组件
  about: {
    title: '关于我',
    introduction: {
      paragraph1: '我是一名充满热情的全栈开发工程师，拥有多年的Web开发经验。我专注于创建高性能、用户友好的应用程序，并且始终保持对新技术的学习热情。',
      paragraph2: '在我的职业生涯中，我参与了多个项目的开发，从初创公司的MVP到大型企业的复杂系统。我擅长解决复杂的技术问题，并且具有良好的团队协作能力。'
    },
    skills: {
      title: '技能栈'
    }
  },

  // Projects 组件
  projects: {
    title: '项目展示',
    projectCard: {
      screenshot: '项目截图',
      viewProject: '查看项目',
      github: 'GitHub'
    }
  },

  // Contact 组件
  contact: {
    title: '联系方式',
    introduction: '如果您对我的项目感兴趣，或者想要合作，欢迎随时联系我！',
    methods: {
      email: {
        title: '邮箱',
        address: 'your.email@example.com'
      },
      github: {
        title: 'GitHub',
        url: 'https://github.com/yourusername',
        display: 'github.com/yourusername'
      },
      linkedin: {
        title: 'LinkedIn',
        url: 'https://linkedin.com/in/yourprofile',
        display: 'linkedin.com/in/yourprofile'
      }
    }
  },

  // Footer 组件
  footer: {
    copyright: '© 2024 Portfolio. All rights reserved.',
    builtWith: 'Built with React, TypeScript & Tailwind CSS'
  }
};

// 类型定义
export type SiteTexts = typeof siteTexts;
