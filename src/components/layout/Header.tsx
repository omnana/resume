import React from 'react';
import { motion } from 'framer-motion';
import { siteTexts } from '../../data/texts';

const Header: React.FC = () => {
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
        <motion.a
          href="#home"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none'
          }}
          whileHover={{ scale: 1.05, color: '#3b82f6' }}
          whileTap={{ scale: 0.95 }}
        >
          {siteTexts.nav.logo}
        </motion.a>

        {/* Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '16px'
          }}
        >
          {siteTexts.nav.items.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '8px 12px',
                borderRadius: '4px',
                whiteSpace: 'nowrap'
              }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#3b82f6' }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
