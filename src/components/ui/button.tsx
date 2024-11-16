import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { buttonHoverVariant } from './motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'default' | 'outline' | 'white';
  size?: 'default' | 'sm' | 'lg';
}

const buttonVariants = ({
  variant = 'default',
  size = 'default',
  className = '',
}: Partial<ButtonProps>) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    white: 'bg-white text-black hover:bg-gray-100',
  };

  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
  };

  return cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        variants={buttonHoverVariant}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps }; 


