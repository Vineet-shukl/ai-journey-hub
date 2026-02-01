import { motion } from 'framer-motion';
import { Topic } from '@/types/roadmap';
import { SubTopicItem } from './SubTopicItem';
import { BookOpen } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  isCompleted: (id: string) => boolean;
  onToggleSubTopic: (id: string) => void;
  topicIndex: number;
}

export function TopicCard({ topic, isCompleted, onToggleSubTopic, topicIndex }: TopicCardProps) {
  const completedCount = topic.subTopics.filter((st) => isCompleted(st.id)).length;
  const totalCount = topic.subTopics.length;
  const allCompleted = completedCount === totalCount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: topicIndex * 0.1, duration: 0.4 }}
      className="glass-card-hover p-6"
    >
      {/* Topic Header */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`
            flex items-center justify-center w-10 h-10 rounded-xl
            transition-all duration-300
            ${allCompleted 
              ? 'bg-success/20 text-success' 
              : 'bg-primary/10 text-primary'
            }
          `}
        >
          <BookOpen className="w-5 h-5" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-foreground mb-1">
            {topic.title}
          </h4>
          <p className="text-sm text-muted-foreground">
            {completedCount} of {totalCount} completed
          </p>
        </div>
        
        {/* Mini progress indicator */}
        <div className="flex gap-1">
          {topic.subTopics.map((st, i) => (
            <motion.div
              key={st.id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isCompleted(st.id) ? 'bg-success' : 'bg-muted'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            />
          ))}
        </div>
      </div>

      {/* SubTopics */}
      <div className="space-y-2">
        {topic.subTopics.map((subTopic, index) => (
          <SubTopicItem
            key={subTopic.id}
            subTopic={subTopic}
            isCompleted={isCompleted(subTopic.id)}
            onToggle={() => onToggleSubTopic(subTopic.id)}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
