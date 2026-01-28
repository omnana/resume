import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import AnimatedBackground from '../components/common/AnimatedBackground';

// 筛选类别
const categories = [
  { id: 'all', name: '所有', icon: '🎮' },
  { id: 'unity', name: 'Unity', icon: '🔷' },
  { id: 'unreal', name: 'Unreal', icon: '🔶' },
  { id: 'mobile', name: '移动游戏', icon: '📱' },
  { id: 'pc', name: 'PC/主机', icon: '💻' }
];

// 项目类型映射
const typeToCategory: Record<string, string> = {
  unity: 'unity',
  unreal: 'unreal',
  mobile: 'mobile',
  pc: 'pc'
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null);

  // 筛选项目
  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    return projects.filter(project => typeToCategory[project.type] === selectedCategory);
  }, [selectedCategory]);

  // 获取项目类型图标
  const getTypeIcon = (type: string) => {
    const icons: Record<string, string> = {
      unity: '🔷',
      unreal: '🔶',
      mobile: '📱',
      pc: '💻'
    };
    return icons[type] || '🎮';
  };

  // 获取角色标签
  const getRoleLabel = (role: string) => {
    const roles: Record<string, string> = {
      developer: '开发者',
      designer: '设计师',
      artist: '美术',
      producer: '制作人',
      'lead-developer': '主开发者',
      'gameplay-programmer': '游戏程序员',
      'solo-developer': '独立开发者',
      'developer-designer': '开发设计师'
    };
    return roles[role] || role;
  };

  return (
    <div className="min-h-screen relative">
      {/* 使用Hero页面的动态背景 */}
      <AnimatedBackground />
      
      {/* 额外的渐变叠加层，增强文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/50 via-transparent to-dark-secondary/50 opacity-70" />
      
      {/* 内容区域 */}
      <div className="relative z-10 min-h-screen pt-56 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* 标题区域 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            style={{ paddingTop: '120px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              项目展示
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              探索我的游戏开发项目，涵盖不同引擎和平台的创意作品
            </p>
          </motion.div>

          {/* 筛选标签 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12 mt-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* 项目卡片网格 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* 项目卡片 */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-primary-500/50 transition-all duration-300">
                  {/* 封面图区域 */}
                  <div 
                    className="relative bg-gradient-to-br from-primary-900/20 to-secondary-900/20 overflow-hidden"
                    style={{ height: '100px', minHeight: '100px', maxHeight: '100px' }}
                  >
                    {/* 项目封面图 */}
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={`${project.title} cover`}
                        className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        style={{ height: '100px', minHeight: '100px', maxHeight: '100px' }}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    
                    {/* 占位图标（图片加载失败或无封面时显示） */}
                    <div className={`absolute inset-0 flex items-center justify-center ${project.coverImage ? 'hidden' : ''}`}>
                      <span className="opacity-50" style={{ fontSize: '32px', lineHeight: '32px' }}>{getTypeIcon(project.type)}</span>
                    </div>
                    
                    {/* 悬停时的操作按钮 */}
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                      >
                        {project.videoUrl && (
                          <motion.button
                            className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            📹 视频
                          </motion.button>
                        )}
                        {project.demoUrl && (
                          <motion.button
                            className="px-4 py-2 text-sm bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🎮 试玩
                          </motion.button>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* 项目信息 */}
                  <div className="p-3 sm:p-4">
                    {/* 项目标题和类型 */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-base sm:text-lg">{getTypeIcon(project.type)}</span>
                    </div>

                    {/* 项目描述 */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* 关键信息 */}
                    <div className="space-y-3">
                      {/* 角色标签 */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">角色:</span>
                        <span className="px-2 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full">
                          {getRoleLabel(project.role)}
                        </span>
                        {project.isTeamProject && (
                          <span className="text-xs text-gray-400">
                            团队项目 ({project.teamSize}人)
                          </span>
                        )}
                      </div>

                      {/* 技术栈 */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/80 text-gray-400 text-xs rounded backdrop-blur-sm">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* 开发时间 */}
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>⏱️</span>
                        <span>{project.developmentTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 空状态 */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-400 text-lg">
                该分类下暂无项目，请选择其他分类查看。
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
