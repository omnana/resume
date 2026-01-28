import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/common/AnimatedBackground';

const About: React.FC = () => {
  // 技术技能数据
  const skills = [
    { name: 'C#', level: 90, category: 'programming' },
    { name: 'C++', level: 75, category: 'programming' },
    { name: 'Unity', level: 95, category: 'engine' },
    { name: 'Unreal Engine', level: 80, category: 'engine' },
    { name: 'Shader编程', level: 70, category: 'graphics' },
    { name: '3D建模', level: 60, category: 'art' },
    { name: '游戏设计', level: 85, category: 'design' },
    { name: '性能优化', level: 88, category: 'optimization' }
  ];

  // 职业经历数据
  const experiences = [
    {
      title: '高级游戏开发工程师',
      company: '某某游戏公司',
      period: '2022.03 - 至今',
      description: '负责核心玩法系统开发和性能优化，参与多个成功项目的开发'
    },
    {
      title: '游戏开发工程师',
      company: '某某科技',
      period: '2020.07 - 2022.02',
      description: '参与移动游戏开发，负责客户端逻辑和UI系统实现'
    },
    {
      title: '独立游戏开发者',
      company: '个人项目',
      period: '2019.01 - 2020.06',
      description: '独立开发并发布多款小型游戏，积累全栈开发经验'
    }
  ];

  // 获取技能颜色
  const getSkillColor = (category: string) => {
    const colors: Record<string, string> = {
      programming: 'bg-blue-500',
      engine: 'bg-green-500',
      graphics: 'bg-purple-500',
      art: 'bg-pink-500',
      design: 'bg-yellow-500',
      optimization: 'bg-red-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen relative">
      {/* 使用Hero页面的动态背景 */}
      <AnimatedBackground />
      
      {/* 额外的渐变叠加层，增强文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/50 via-transparent to-dark-secondary/50 opacity-70" />
      
      {/* 内容区域 */}
      <div className="relative z-10 min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 标题区域 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              关于我
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              热爱游戏开发的全栈工程师，专注于创造沉浸式的游戏体验
            </p>
          </motion.div>

          {/* 个人介绍区域 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* 左侧：头像和基本信息 */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                  <div className="w-full h-full rounded-full bg-dark/80 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">游戏开发者</h3>
                <p className="text-gray-300 mb-4">
                  拥有5年游戏开发经验，专注于Unity和Unreal Engine开发。
                  热衷于探索新技术，致力于创造有趣且具有挑战性的游戏体验。
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm">
                    全栈开发
                  </span>
                  <span className="px-3 py-1 bg-secondary-600/20 text-secondary-400 rounded-full text-sm">
                    性能优化
                  </span>
                  <span className="px-3 py-1 bg-accent-600/20 text-accent-400 rounded-full text-sm">
                    创意设计
                  </span>
                </div>
              </motion.div>
            </div>

            {/* 右侧：技能标签云 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">技术技能</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-2 backdrop-blur-sm">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className={`h-2 rounded-full ${getSkillColor(skill.category)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 职业经历时间线 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">职业经历</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 个人理念 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-white mb-4">开发理念</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                "我相信优秀的游戏不仅仅是技术的展示，更是艺术与创意的完美结合。
                每一行代码都应该为玩家创造更好的体验，每一个设计都应该让游戏更加有趣。
                持续学习，不断创新，这是我作为游戏开发者的信念。"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
