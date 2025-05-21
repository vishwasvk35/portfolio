'use client'

import { useEffect, useRef, useState } from 'react';

interface Drop {
  id: number;
  x: number;
  y: number;
  speed: number;
  height: number;
  color: string;
  delay: number;
  active: boolean;
}

export default function FallingLightDrops() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [drops, setDrops] = useState<Drop[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  
  const colors = [
    'rgba(173, 216, 230, 0.6)', // light blue
    'rgba(144, 238, 144, 0.6)', // light green
    'rgba(255, 255, 224, 0.6)', // light yellow
    'rgba(255, 182, 193, 0.6)', // light pink
    'rgba(216, 191, 216, 0.6)', // light purple
  ];
  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    // Initialize drops
    const initialDrops: Drop[] = [];
    const numDrops = Math.floor(dimensions.width / 30); // Adjust density here
    
    for (let i = 0; i < numDrops; i++) {
      initialDrops.push(createDrop(i, dimensions.width));
    }
    
    setDrops(initialDrops);
    
    // Start animation
    timeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);
  
  const createDrop = (id: number, width: number): Drop => {
    return {
      id,
      x: Math.random() * width,
      y: -Math.random() * 500 - 50, // Start above the screen with random stagger
      speed: Math.random() * 2 + 1,
      height: Math.random() * 100 + 50,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 15000, // Random delay for staggered start
      active: false
    };
  };
  
  const animate = (timestamp: number) => {
    const deltaTime = timestamp - timeRef.current;
    timeRef.current = timestamp;
    
    setDrops(prevDrops => {
      return prevDrops.map(drop => {
        // Check if drop should be active based on its delay
        const shouldBeActive = timestamp > drop.delay;
        
        // Only move the drop if it's active
        if (shouldBeActive) {
          // Move drop downward
          let newY = drop.y + drop.speed * deltaTime / 16;
          
          // Reset drop if it's gone off screen
          if (newY > dimensions.height) {
            return createDrop(drop.id, dimensions.width);
          }
          
          return {
            ...drop,
            y: newY,
            active: true
          };
        }
        
        return {
          ...drop,
          active: shouldBeActive
        };
      });
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-black z-0"
    >
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute w-px rounded-full"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            height: `${drop.height}px`,
            background: drop.active ? `linear-gradient(to bottom, transparent, ${drop.color}, transparent)` : 'transparent',
            opacity: drop.active ? 1 : 0,
            transition: 'opacity 0.5s ease-in'
          }}
        />
      ))}
    </div>
  );
}