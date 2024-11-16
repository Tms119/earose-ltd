import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isNav?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, href, className = '', isNav = false, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <RouterLink
        to={href}
        className={`transition-all duration-300 ${
          isNav ? 'hover:text-blue-600' : ''
        } relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${className}`}
        {...props}
      >
        {children}
      </RouterLink>
    </motion.div>
  );
};

export default Link; 


