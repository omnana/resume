import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { siteTexts } from '../../data/texts';

const Header: React.FC = () => {
  const location = useLocation();

  // 检查当前路径是否活跃
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw', // 使用视口宽度
        zIndex: 50,
        backgroundColor: 'rgba(10, 25, 47, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #374151',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          width: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          boxSizing: 'border-box'
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {siteTexts.nav.logo}
          </Link>
        </motion.div>

        {/* Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '16px'
          }}
        >
          {siteTexts.nav.items.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.href}
                style={{
                  color: isActive(item.href) ? '#3b82f6' : 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  backgroundColor: isActive(item.href) ? 'rgba(59, 130, 246, 0.1)' : 'transparent'
                }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
