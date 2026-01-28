# 动态背景组件说明

## 组件概述

`AnimatedBackground` 是一个基于 Canvas 的低多边形游戏场景循环动画背景组件，专为游戏开发者作品集设计。

## 功能特性

### 🎮 游戏主题设计
- **低多边形风格**: 3-5边形随机组合
- **游戏配色**: 蓝色、紫色、粉色、绿色、橙色等游戏主题色彩
- **动态效果**: 缓慢移动和旋转的多边形
- **渐变背景**: 深色主题渐变，营造游戏氛围

### ⚡ 性能优化
- **帧率控制**: 目标 60 FPS，可配置
- **响应式设计**: 自动适配屏幕尺寸
- **减少动画模式**: 支持低端设备优化
- **内存管理**: 自动清理事件监听器

### 🎨 视觉效果
- **半透明叠加**: 增强文字可读性
- **光环动画**: 头像周围的动态光环
- **悬停效果**: 交互式动画反馈
- **阴影效果**: 增强立体感

## 配置选项

在 `src/data/animationConfig.ts` 中可以自定义：

### 多边形配置
```typescript
polygons: {
  count: 15,           // 多边形数量
  minSize: 50,         // 最小尺寸
  maxSize: 150,        // 最大尺寸
  minOpacity: 0.1,     // 最小透明度
  maxOpacity: 0.4,     // 最大透明度
  minSpeed: 0.1,       // 最小移动速度
  maxSpeed: 0.5,       // 最大移动速度
  sides: [3, 4, 5],    // 多边形边数
}
```

### 颜色配置
```typescript
colors: [
  'rgba(59, 130, 246',  // 蓝色
  'rgba(139, 92, 246',  // 紫色
  'rgba(236, 72, 153',  // 粉色
  // ... 更多颜色
]
```

### 性能配置
```typescript
performance: {
  targetFPS: 60,        // 目标帧率
  enableResize: true,    // 启用响应式调整
  reduceMotion: false,   // 减少动画
}
```

## 使用方法

### 基本使用
```tsx
import AnimatedBackground from '../components/common/AnimatedBackground';

// 在 Hero 组件中使用
<section className="relative">
  <AnimatedBackground />
  {/* 其他内容 */}
</section>
```

### 自定义配置
1. 修改 `src/data/animationConfig.ts`
2. 调整参数以适应你的需求
3. 重新启动开发服务器

## 性能建议

### 高性能设备
- `count: 20-30` (更多多边形)
- `maxSpeed: 0.8` (更快动画)
- `targetFPS: 60`

### 低端设备
- `count: 8-12` (较少多边形)
- `reduceMotion: true` (减少动画)
- `targetFPS: 30`

### 移动设备
- `count: 10-15`
- `maxSize: 100` (较小尺寸)
- `enableResize: true`

## 故障排除

### 动画卡顿
1. 减少 `count` 值
2. 降低 `targetFPS`
3. 启用 `reduceMotion`

### 内存泄漏
- 组件自动清理事件监听器
- 确保在组件卸载时正确清理

### 兼容性问题
- 现代浏览器支持 Canvas API
- IE11 及以下版本不支持

## 扩展功能

### 添加交互
```typescript
// 可以添加鼠标交互
canvas.addEventListener('mousemove', (e) => {
  // 鼠标跟随效果
});
```

### 主题切换
```typescript
// 可以根据主题切换颜色
const themeColors = isDark ? darkColors : lightColors;
```

### 音频可视化
```typescript
// 可以集成音频 API
const audioContext = new AudioContext();
// 音频频谱分析
```
