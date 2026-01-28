import React from 'react';
import { motion } from 'framer-motion';
import { siteTexts } from '../../data/texts';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-secondary border-t border-gray-800 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">{siteTexts.footer.title}</h3>
            <p className="text-gray-400">{siteTexts.footer.description}</p>
          </div>

          <div className="flex space-x-6">
            {Object.values(siteTexts.social).map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            {siteTexts.footer.copyright}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
