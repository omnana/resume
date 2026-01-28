// 动画背景配置
export const animationConfig = {
  // 多边形配置
  polygons: {
    count: 15,                    // 多边形数量
    minSize: 50,                  // 最小尺寸
    maxSize: 150,                 // 最大尺寸
    minOpacity: 0.1,              // 最小透明度
    maxOpacity: 0.4,              // 最大透明度
    minSpeed: 0.1,                // 最小移动速度
    maxSpeed: 0.5,                // 最大移动速度
    sides: [3, 4, 5],             // 多边形边数 [三角形, 四边形, 五边形]
  },
  
  // 颜色配置 - 游戏主题
  colors: [
    'rgba(59, 130, 246',  // primary-500 - 蓝色
    'rgba(37, 99, 235',   // primary-600 - 深蓝色
    'rgba(29, 78, 216',   // primary-700 - 更深蓝色
    'rgba(139, 92, 246',  // 紫色
    'rgba(236, 72, 153',  // 粉色
    'rgba(34, 197, 94',   // 绿色
    'rgba(251, 146, 60',  // 橙色
  ],
  
  // 背景渐变配置
  background: {
    startColor: 'rgba(10, 25, 47, 0.9)',     // dark
    middleColor: 'rgba(17, 34, 64, 0.9)',    // dark-secondary
    endColor: 'rgba(26, 54, 93, 0.9)',       // dark-tertiary
  },
  
  // 性能配置
  performance: {
    targetFPS: 60,               // 目标帧率
    enableResize: true,           // 启用响应式调整
    reduceMotion: false,          // 减少动画（适合低端设备）
  }
};

export default animationConfig;
