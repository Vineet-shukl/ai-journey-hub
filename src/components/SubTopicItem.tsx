import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CustomCheckbox } from './CustomCheckbox';
import { SubTopic } from '@/types/roadmap';

interface SubTopicItemProps {
  subTopic: SubTopic;
  isCompleted: boolean;
  onToggle: () => void;
  index: number;
}

export function SubTopicItem({ subTopic, isCompleted, onToggle, index }: SubTopicItemProps) {
  return (
    <motion.div
      id={subTopic.id}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={`
        group flex items-center gap-4 p-4 rounded-xl
        transition-all duration-300 ease-out
        ${isCompleted 
          ? 'bg-success/5 border border-success/20' 
          : 'bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-primary/20'
        }
      `}
    >
      <CustomCheckbox checked={isCompleted} onChange={onToggle} />
      
      <div className="flex-1 min-w-0">
        <span
          className={`
            relative text-sm font-medium transition-all duration-500
            ${isCompleted ? 'text-muted-foreground' : 'text-foreground'}
          `}
        >
          {subTopic.title}
          {isCompleted && (
            <motion.span
              className="absolute left-0 top-1/2 h-[2px] bg-success/50"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          )}
        </span>
      </div>
      
      {subTopic.resourceUrl && (
        <motion.a
          href={subTopic.resourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
            transition-all duration-300
            ${isCompleted
              ? 'text-muted-foreground hover:text-foreground'
              : 'text-primary hover:bg-primary/10'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="hidden sm:inline">Resources</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </motion.a>
      )}
    </motion.div>
  );
}
