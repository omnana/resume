# 技术设计

## 技术栈
- React + TypeScript + Vite
- Tailwind CSS
- React Router（如果需要多页面）
- Framer Motion（动画效果）
- WebGL（Unity/Godot导出）、YouTube/Vimeo视频、[itch.io](https://itch.io/)嵌入

## 项目结构
```
my-game-portfolio/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── (其他静态资源，如WebGL构建的文件可以放在子目录中，例如public/WebGL/)
├── src/
│   ├── assets/
│   │   ├── fonts/          # 字体文件
│   │   ├── images/         # 图片资源
│   │   └── videos/         # 视频资源（如果视频不大，可以放在这里；否则建议使用外部托管）
│   ├── components/
│   │   ├── common/         # 通用组件，如Button, Card等
│   │   ├── layout/         # 布局组件，如Header, Footer, Layout等
│   │   ├── sections/       # 页面各部分组件，如Hero, Projects, About, Contact等
│   │   └── ui/             # 其他UI组件，如Modal, Filter等
│   ├── data/
│   │   └── projects.ts     # 项目数据
│   ├── hooks/              # 自定义hooks
│   ├── pages/              # 页面组件（如果需要多页面，但这里可能是单页面，所以可能不需要）
│   ├── styles/
│   │   ├── globals.css     # 全局样式
│   │   └── (其他样式文件，如果使用SCSS)
│   ├── types/              # TypeScript类型定义
│   ├── utils/              # 工具函数
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 数据管理
- 项目数据和技能数据存储在 TypeScript 文件中
- 使用数组存储，方便后续添加和修改
