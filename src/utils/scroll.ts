// 平滑滚动工具函数
export const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// 处理导航点击事件
export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  
  // 移除 # 前缀获取目标ID
  const targetId = href.replace('#', '');
  
  if (targetId === 'home') {
    // 滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // 滚动到指定区域
    smoothScroll(targetId);
  }
};
