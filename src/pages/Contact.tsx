import React from 'react';
import { motion } from 'framer-motion';
import { siteTexts } from '../data/texts';
import AnimatedBackground from '../components/common/AnimatedBackground';

const Contact: React.FC = () => {
  // 社交媒体数据
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/omnana', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: 'hover:text-sky-400' },
    { name: 'itch.io', icon: '🎮', url: 'https://itch.io', color: 'hover:text-pink-400' }
  ];

  // 联系方式数据
  const contactInfo = [
    { type: '邮箱', value: 'developer@example.com', icon: '📧' },
    { type: '微信', value: 'gamedev_2024', icon: '💬' },
    { type: 'QQ', value: '123456789', icon: '🐧' },
    { type: 'Discord', value: 'GameDev#1234', icon: '🎮' }
  ];

  // 表单数据
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 处理表单输入
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('表单数据:', formData);
    alert('感谢您的留言！我会尽快回复您。');
    // 重置表单
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* 使用Hero页面的动态背景 */}
      <AnimatedBackground />
      
      {/* 额外的渐变叠加层，增强文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/50 via-transparent to-dark-secondary/50 opacity-70" />
      
      {/* 内容区域 */}
      <div className="relative z-10 min-h-screen pt-56 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 标题区域 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            style={{ paddingTop: '120px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              联系我
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              欢迎与我交流游戏开发相关的话题，合作机会，或者只是打个招呼
            </p>
          </motion.div>

          {/* 当前状态 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 mt-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/20 border border-green-500/50 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 font-medium">开放全职机会</span>
            </div>
            <p className="text-gray-400 mt-4">
              目前正在寻找新的工作机会，欢迎讨论游戏开发相关的职位
            </p>
          </motion.div>

          {/* 主要内容区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左侧：联系信息和社交媒体 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* 联系方式 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">联系方式</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800/50"
                    >
                      <span className="text-2xl">{contact.icon}</span>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.type}</p>
                        <p className="text-white font-medium">{contact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 社交媒体 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">社交媒体</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className={`flex items-center gap-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800/50 text-white transition-all ${social.color} hover:scale-105`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 右侧：联系表单 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50">
                <h3 className="text-2xl font-bold text-white mb-6">发送消息</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 姓名 */}
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 backdrop-blur-sm"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  {/* 邮箱 */}
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 backdrop-blur-sm"
                      placeholder="请输入您的邮箱"
                    />
                  </div>

                  {/* 主题 */}
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                      主题 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 backdrop-blur-sm"
                      placeholder="请输入消息主题"
                    />
                  </div>

                  {/* 消息 */}
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      消息 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 backdrop-blur-sm resize-none"
                      placeholder="请输入您的消息..."
                    />
                  </div>

                  {/* 提交按钮 */}
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    发送消息
                  </motion.button>
                </form>

                <p className="text-gray-400 text-sm mt-4 text-center">
                  * 标记的字段为必填项
                </p>
              </div>
            </motion.div>
          </div>

          {/* 底部说明 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-4">合作机会</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                我对以下合作机会特别感兴趣：游戏开发职位、独立项目合作、技术咨询、
                游戏设计顾问、性能优化服务。如果您有任何相关的机会或想法，
                欢迎随时与我联系！
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
