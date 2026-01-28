# 项目图片说明

这个文件夹用于存放项目展示页中使用的图片资源。

## 文件命名规范

- `cyber-runner-cover.jpg` - Cyber Runner 2077 项目封面图
- `cyber-runner-preview.gif` - Cyber Runner 2077 项目预览动图
- `mystic-realms-cover.jpg` - Mystic Realms 项目封面图
- `puzzle-master-cover.jpg` - Puzzle Master 项目封面图
- `space-defender-cover.jpg` - Space Defender 项目封面图

## 图片尺寸要求

- **封面图**: 建议 800x450 像素 (16:9 比例)，支持 JPG/PNG/WebP 格式
- **预览动图**: 建议 800x450 像素，支持 GIF 格式

## 使用方法

1. 将项目图片放入此文件夹
2. 在 `src/data/projects.ts` 中更新对应的图片路径
3. 图片会自动在项目展示页中显示

## 动态配置

项目信息支持以下字段动态配置：

```typescript
{
  id: '1',
  title: '项目名称',
  description: '项目描述',
  type: 'unity' | 'unreal' | 'mobile' | 'pc' | 'web',
  role: 'developer' | 'designer' | 'artist' | 'producer' | 'lead-developer' | 'gameplay-programmer' | 'solo-developer' | 'developer-designer',
  coverImage: '/images/projects/项目封面图.jpg',
  previewGif: '/images/projects/项目预览图.gif',
  videoUrl: 'https://www.youtube.com/embed/视频ID',
  demoUrl: 'https://example.com/demo',
  techStack: ['Unity', 'C#', 'Shader Graph'],
  features: ['特色功能1', '特色功能2'],
  developmentTime: '开发时间',
  teamSize: 团队人数,
  isTeamProject: true,
  status: 'completed' | 'in-development' | 'published' | 'prototype',
  year: '2024',
  tags: ['标签1', '标签2']
}
```

## 注意事项

- 图片文件名应与项目数据中的路径保持一致
- 建议使用优化后的图片以提高加载速度
- 可以使用 WebP 格式以获得更好的压缩效果
- 封面图会自动适配卡片尺寸，支持悬停缩放效果
- 如果图片加载失败，会显示对应项目类型的占位图标
