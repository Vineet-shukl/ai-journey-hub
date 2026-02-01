import { motion } from 'framer-motion';
import { ArrowRight, Brain, Sparkles, Zap } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { Button } from '@/components/ui/button';

interface DashboardProps {
  overallProgress: number;
  weekProgress: Record<string, number>;
  onContinueLearning: () => void;
}

export function Dashboard({ overallProgress, weekProgress, onContinueLearning }: DashboardProps) {
  const weeks = Object.entries(weekProgress);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mb-12"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="glass-card p-8 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <motion.div
              className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Brain className="w-8 h-8 text-primary-foreground" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </motion.div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground glow-text">
                My AI/ML Learning Roadmap
              </h1>
              <p className="text-muted-foreground mt-1">
                From beginner to AI wizard in 4 weeks
              </p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={onContinueLearning}
            className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Continue Learning
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Overall Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">Overall Progress</h2>
            <span className="text-3xl font-bold text-primary tabular-nums">{overallProgress}%</span>
          </div>
          <ProgressBar progress={overallProgress} showPercentage={false} size="lg" variant="glow" />
        </div>

        {/* Weekly Progress Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {weeks.map(([weekId, progress], index) => (
            <motion.div
              key={weekId}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className={`
                relative p-4 rounded-xl border transition-all duration-300
                ${progress === 100 
                  ? 'border-success/30 bg-success/5' 
                  : 'border-border bg-muted/20 hover:bg-muted/30'
                }
              `}
            >
              <div className="text-sm text-muted-foreground mb-2">Week {index + 1}</div>
              <div className="flex items-end justify-between">
                <span
                  className={`text-2xl font-bold tabular-nums ${
                    progress === 100 ? 'text-success' : 'text-foreground'
                  }`}
                >
                  {progress}%
                </span>
                {progress === 100 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-success"
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                )}
              </div>
              <div className="mt-3">
                <ProgressBar progress={progress} showPercentage={false} size="sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
