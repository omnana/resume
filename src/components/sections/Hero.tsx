import React from 'react';
import { motion } from 'framer-motion';
import { siteTexts } from '../../data/texts';
import AnimatedBackground from '../common/AnimatedBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      {/* 动态低多边形背景 */}
      <AnimatedBackground />
      
      {/* 额外的渐变叠加层，增强文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/50 via-transparent to-dark-secondary/50 opacity-70" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* 头像区域 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* 头像图片 */}
              <motion.img
                src={siteTexts.hero.avatar.src}
                alt={siteTexts.hero.avatar.alt}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 shadow-2xl object-cover backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.4)' }}
                onError={(e) => {
                  // 如果图片加载失败，显示默认头像
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iNjAiIHI9IjIwIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik00MCAxMjBDNDAgMTAwIDYwIDkwIDgwIDkwQzEwMCA5MCAxMjAgMTAwIDEyMCAxMjBWMTQwSDQwVjEyMFoiIGZpbGw9IiM5QTNBRiIvPgo8L3N2Zz4K';
                }}
              />
              
              {/* 头像光环效果 */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary-500/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* 头像描述 */}
            <p
              className="mt-4 text-white text-sm md:text-base max-w-md mx-auto"
              style={{
                paddingLeft: '2px',
                textIndent: '0px',
                marginLeft: '0px',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
              }}
            >
              {siteTexts.hero.avatar.description}
            </p>
          </motion.div>

          {/* 标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            {siteTexts.hero.title}
          </motion.h1>
          
          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-dark/20 px-6 py-3 rounded-lg"
            style={{ color: '#ffffff', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            {siteTexts.hero.subtitle}
          </motion.p>
          
          {/* 按钮组 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-white rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm border-0"
              style={{ 
                color: '#ffffff',
                border: 'none',
                outline: 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {siteTexts.hero.cta.primary}
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-white rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm border-0"
              style={{ 
                color: '#ffffff',
                border: 'none',
                outline: 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {siteTexts.hero.cta.secondary}
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 backdrop-blur-sm bg-dark/30 px-3 py-2 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
