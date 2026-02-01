import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Dashboard } from './Dashboard';
import { WeekAccordion } from './WeekAccordion';
import { LoadingScreen } from './LoadingScreen';
import { UserMenu } from './UserMenu';
import { CosmicBackground } from './CosmicBackground';
import { useRoadmapProgress } from '@/hooks/useRoadmapProgress';
import { roadmapData } from '@/data/roadmapData';

export function RoadmapApp() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    weeks,
    progress,
    toggleSubTopic,
    toggleWeekExpansion,
    findNextSubTopic,
    isCompleted,
  } = useRoadmapProgress(roadmapData);

  const handleContinueLearning = useCallback(() => {
    const nextId = findNextSubTopic();
    if (nextId) {
      // Find which week contains this subtopic and expand it
      for (const week of weeks) {
        for (const topic of week.topics) {
          const found = topic.subTopics.find((st) => st.id === nextId);
          if (found) {
            if (!week.isExpanded) {
              toggleWeekExpansion(week.id);
            }
            // Wait for expansion animation then scroll
            setTimeout(() => {
              const element = document.getElementById(nextId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Add a highlight effect
                element.classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-background');
                setTimeout(() => {
                  element.classList.remove('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-background');
                }, 2000);
              }
            }, 400);
            break;
          }
        }
      }
    }
  }, [findNextSubTopic, weeks, toggleWeekExpansion]);

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <CosmicBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen py-8 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-5xl mx-auto">
        {/* Header with User Menu */}
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold glow-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            AI/ML Roadmap
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <UserMenu />
          </motion.div>
        </div>

        <Dashboard
          overallProgress={progress.overallProgress}
          weekProgress={progress.weekProgress}
          onContinueLearning={handleContinueLearning}
        />

        {/* Roadmap Section */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-foreground">Your Learning Path</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="space-y-4">
            {weeks.map((week) => (
              <WeekAccordion
                key={week.id}
                week={week}
                progress={progress.weekProgress[week.id] || 0}
                isExpanded={week.isExpanded}
                onToggle={() => toggleWeekExpansion(week.id)}
                isCompleted={isCompleted}
                onToggleSubTopic={toggleSubTopic}
              />
            ))}
          </div>
        </motion.main>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground text-sm">
          <p>
            Built with 💜 for your AI journey •{' '}
            <span className="text-primary">{progress.overallProgress}% complete</span>
          </p>
        </footer>
      </div>
    </motion.div>
    </>
  );
}
