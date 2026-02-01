import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, Trophy } from 'lucide-react';
import { Week } from '@/types/roadmap';
import { TopicCard } from './TopicCard';
import { ProgressBar } from './ProgressBar';

interface WeekAccordionProps {
  week: Week;
  progress: number;
  isExpanded: boolean;
  onToggle: () => void;
  isCompleted: (id: string) => boolean;
  onToggleSubTopic: (id: string) => void;
}

export function WeekAccordion({
  week,
  progress,
  isExpanded,
  onToggle,
  isCompleted,
  onToggleSubTopic,
}: WeekAccordionProps) {
  const isWeekComplete = progress === 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        rounded-2xl border overflow-hidden transition-all duration-500
        ${isWeekComplete 
          ? 'border-success/30 bg-success/5' 
          : 'border-border bg-card/30'
        }
        ${isExpanded ? 'shadow-lg shadow-primary/5' : ''}
      `}
    >
      {/* Accordion Header */}
      <motion.button
        onClick={onToggle}
        className="w-full p-6 flex items-center gap-4 text-left hover:bg-muted/20 transition-colors duration-300"
        whileTap={{ scale: 0.995 }}
      >
        {/* Week Number Badge */}
        <div
          className={`
            relative flex items-center justify-center w-14 h-14 rounded-2xl
            font-bold text-lg transition-all duration-500
            ${isWeekComplete 
              ? 'bg-success text-success-foreground' 
              : 'bg-gradient-to-br from-primary to-secondary text-primary-foreground'
            }
          `}
        >
          {isWeekComplete ? (
            <Trophy className="w-6 h-6" />
          ) : (
            <span>{week.number}</span>
          )}
          
          {/* Glow effect */}
          {isWeekComplete && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-success"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ filter: 'blur(10px)' }}
            />
          )}
        </div>

        {/* Week Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-foreground truncate">
              Week {week.number}: {week.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Target className="w-4 h-4" />
            <p className="text-sm truncate">{week.objective}</p>
          </div>
          
          {/* Progress bar in header */}
          <div className="mt-3 max-w-md">
            <ProgressBar progress={progress} showPercentage={false} size="sm" />
          </div>
        </div>

        {/* Progress & Chevron */}
        <div className="flex items-center gap-4">
          <span
            className={`
              text-2xl font-bold tabular-nums
              ${isWeekComplete ? 'text-success' : 'text-primary'}
            `}
          >
            {progress}%
          </span>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.button>

      {/* Accordion Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 space-y-4 border-t border-border/50">
              {week.topics.map((topic, index) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  isCompleted={isCompleted}
                  onToggleSubTopic={onToggleSubTopic}
                  topicIndex={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
