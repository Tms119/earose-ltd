import React from 'react';

import { motion } from 'framer-motion';



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: 'default' | 'outline' | 'white';

  size?: 'default' | 'sm' | 'lg';

}



export const Button: React.FC<ButtonProps> = ({

  children,

  className = '',

  variant = 'default',

  size = 'default',

  ...props

}) => {

  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105';

  

  const variants = {

    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',

    outline: 'bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg',

    white: 'bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg'

  };

  

  const sizes = {

    default: 'h-10 py-2 px-4',

    sm: 'h-9 px-3',

    lg: 'h-11 px-8'

  };



  return (

    <motion.button

      whileHover={{ scale: 1.05 }}

      whileTap={{ scale: 0.95 }}

      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}

      {...props}

    >

      {children}

    </motion.button>

  );

}; 
