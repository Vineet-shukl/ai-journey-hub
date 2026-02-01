import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

export function CosmicBackground() {
  const { scrollY } = useScroll();
  
  // Parallax transforms at different speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]); // Slow
  const y2 = useTransform(scrollY, [0, 1000], [0, -250]); // Medium
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]); // Very slow
  const gridY = useTransform(scrollY, [0, 1000], [0, -50]); // Subtle grid movement
  
  // Memoize particle positions to prevent re-render
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    })), []
  );

  const orbs = useMemo(() => 
    [...Array(5)].map((_, i) => ({
      id: i,
      left: `${15 + i * 20}%`,
      top: `${20 + Math.random() * 60}%`,
      duration: 8 + i * 2,
      delay: i * 0.5,
    })), []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated gradient orbs with parallax */}
      <motion.div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(260 80% 60% / 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          y: y1,
        }}
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(190 95% 55% / 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          y: y2,
        }}
        animate={{
          x: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(290 85% 55% / 0.25) 0%, transparent 60%)',
          filter: 'blur(100px)',
          y: y3,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Grid overlay with subtle parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          y: gridY,
        }}
      />

      {/* Floating particles with parallax */}
      <motion.div style={{ y: y2 }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Larger floating orbs with parallax */}
      <motion.div style={{ y: y1 }}>
        {orbs.map((orb) => (
          <motion.div
            key={`orb-${orb.id}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: orb.left,
              top: orb.top,
              background: orb.id % 2 === 0 
                ? 'hsl(var(--primary) / 0.5)' 
                : 'hsl(var(--secondary) / 0.5)',
              boxShadow: orb.id % 2 === 0 
                ? '0 0 20px hsl(var(--primary) / 0.4)' 
                : '0 0 20px hsl(var(--secondary) / 0.4)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              delay: orb.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 100%)',
          opacity: 0.4,
        }}
      />
    </div>
  );
}
