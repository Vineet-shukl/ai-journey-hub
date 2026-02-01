import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      >
        {/* Animated Neural Network */}
        <div className="relative mb-8">
          <svg width="120" height="120" viewBox="0 0 120 120" className="animate-pulse">
            {/* Outer ring */}
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="314"
              initial={{ strokeDashoffset: 314 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Inner nodes */}
            {[0, 72, 144, 216, 288].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 60 + 35 * Math.cos(rad);
              const y = 60 + 35 * Math.sin(rad);
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="6"
                  fill="hsl(var(--primary))"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                />
              );
            })}
            
            {/* Center node */}
            <motion.circle
              cx="60"
              cy="60"
              r="10"
              fill="hsl(var(--secondary))"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            
            {/* Connection lines */}
            {[0, 72, 144, 216, 288].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 60 + 35 * Math.cos(rad);
              const y = 60 + 35 * Math.sin(rad);
              return (
                <motion.line
                  key={`line-${i}`}
                  x1="60"
                  y1="60"
                  x2={x}
                  y2={y}
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Loading text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold text-foreground mb-4 glow-text"
        >
          Initializing Your AI Journey
        </motion.h2>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))',
            }}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mt-4 text-sm"
        >
          {Math.round(Math.min(progress, 100))}% loaded
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
