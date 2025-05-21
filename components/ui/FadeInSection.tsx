import { ReactNode } from 'react';
import { useIntersectionObserver } from '../../app/hooks/useIntersectionObserver';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

export const FadeInSection = ({ children, className = '' }: FadeInSectionProps) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isIntersecting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}; 