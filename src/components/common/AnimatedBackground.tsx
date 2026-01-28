import React, { useEffect, useRef } from 'react';
import { animationConfig } from '../../data/animationConfig';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    if (animationConfig.performance.enableResize) {
      window.addEventListener('resize', resizeCanvas);
    }

    // 低多边形顶点类
    class Polygon {
      x: number;
      y: number;
      size: number;
      color: string;
      opacity: number;
      speed: number;
      angle: number;
      sides: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * (animationConfig.polygons.maxSize - animationConfig.polygons.minSize) + animationConfig.polygons.minSize;
        this.opacity = Math.random() * (animationConfig.polygons.maxOpacity - animationConfig.polygons.minOpacity) + animationConfig.polygons.minOpacity;
        this.speed = Math.random() * (animationConfig.polygons.maxSpeed - animationConfig.polygons.minSpeed) + animationConfig.polygons.minSpeed;
        this.angle = Math.random() * Math.PI * 2;
        this.sides = animationConfig.polygons.sides[Math.floor(Math.random() * animationConfig.polygons.sides.length)];
        
        // 从配置中选择颜色
        const color = animationConfig.colors[Math.floor(Math.random() * animationConfig.colors.length)];
        this.color = color;
      }

      update(canvasWidth: number, canvasHeight: number) {
        if (animationConfig.performance.reduceMotion) {
          // 减少动画模式：只旋转，不移动
          this.angle += 0.0005;
        } else {
          // 完整动画模式
          this.x += Math.cos(this.angle) * this.speed;
          this.y += Math.sin(this.angle) * this.speed;
          this.angle += 0.001;
          
          // 边界检测和循环
          if (this.x < -this.size) this.x = canvasWidth + this.size;
          if (this.x > canvasWidth + this.size) this.x = -this.size;
          if (this.y < -this.size) this.y = canvasHeight + this.size;
          if (this.y > canvasHeight + this.size) this.y = -this.size;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        // 绘制低多边形
        ctx.beginPath();
        for (let i = 0; i < this.sides; i++) {
          const angle = (i / this.sides) * Math.PI * 2;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        
        // 填充渐变
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, `${this.color}, ${this.opacity})`);
        gradient.addColorStop(1, `${this.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.restore();
      }
    }

    // 创建多边形数组
    const polygons: Polygon[] = [];
    for (let i = 0; i < animationConfig.polygons.count; i++) {
      polygons.push(new Polygon(canvas.width, canvas.height));
    }

    // 帧率控制
    let lastTime = 0;
    const targetFrameTime = 1000 / animationConfig.performance.targetFPS;

    // 动画循环
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime >= targetFrameTime) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制渐变背景
        const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        bgGradient.addColorStop(0, animationConfig.background.startColor);
        bgGradient.addColorStop(0.5, animationConfig.background.middleColor);
        bgGradient.addColorStop(1, animationConfig.background.endColor);
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 更新和绘制多边形
        polygons.forEach(polygon => {
          polygon.update(canvas.width, canvas.height);
          polygon.draw(ctx);
        });
        
        lastTime = currentTime;
      }
      
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      if (animationConfig.performance.enableResize) {
        window.removeEventListener('resize', resizeCanvas);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;
