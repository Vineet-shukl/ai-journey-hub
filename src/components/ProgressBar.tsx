import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
  variant?: 'default' | 'gradient' | 'glow';
}

export function ProgressBar({
  progress,
  label,
  size = 'md',
  showPercentage = true,
  variant = 'gradient',
}: ProgressBarProps) {
  const heights = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  const getBackground = () => {
    switch (variant) {
      case 'gradient':
        return 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))';
      case 'glow':
        return 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))';
      default:
        return 'hsl(var(--primary))';
    }
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-foreground">{label}</span>
          )}
          {showPercentage && (
            <span className="text-sm font-semibold text-primary tabular-nums">
              {progress}%
            </span>
          )}
        </div>
      )}
      <div
        className={`relative w-full ${heights[size]} bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm`}
      >
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${heights[size]}`}
          style={{
            background: getBackground(),
            boxShadow: progress > 0 ? '0 0 20px hsl(var(--primary) / 0.4)' : 'none',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
        
        {/* Shimmer effect */}
        {progress > 0 && progress < 100 && (
          <motion.div
            className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-80px', '400px'],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'linear',
            }}
          />
        )}
      </div>
    </div>
  );
}
