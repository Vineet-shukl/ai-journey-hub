import { useState, useCallback, useMemo } from 'react';
import { Week, RoadmapProgress } from '@/types/roadmap';

const STORAGE_KEY = 'ai-ml-roadmap-progress';

export function useRoadmapProgress(initialWeeks: Week[]) {
  // Load completed subtopics from localStorage
  const loadCompletedFromStorage = (): Set<string> => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return new Set(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load progress from storage', e);
    }
    return new Set();
  };

  const [completedSubTopics, setCompletedSubTopics] = useState<Set<string>>(loadCompletedFromStorage);
  const [weeks, setWeeks] = useState<Week[]>(initialWeeks);

  // Calculate progress for each week
  const calculateProgress = useMemo((): RoadmapProgress => {
    const weekProgress: Record<string, number> = {};
    let totalSubTopics = 0;
    let totalCompleted = 0;

    weeks.forEach((week) => {
      let weekTotal = 0;
      let weekCompleted = 0;

      week.topics.forEach((topic) => {
        topic.subTopics.forEach((subTopic) => {
          weekTotal++;
          totalSubTopics++;
          if (completedSubTopics.has(subTopic.id)) {
            weekCompleted++;
            totalCompleted++;
          }
        });
      });

      weekProgress[week.id] = weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0;
    });

    const overallProgress = totalSubTopics > 0 ? Math.round((totalCompleted / totalSubTopics) * 100) : 0;

    return { weekProgress, overallProgress, completedSubTopics };
  }, [weeks, completedSubTopics]);

  // Toggle subtopic completion (optimistic update)
  const toggleSubTopic = useCallback((subTopicId: string) => {
    setCompletedSubTopics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(subTopicId)) {
        newSet.delete(subTopicId);
      } else {
        newSet.add(subTopicId);
      }
      
      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...newSet]));
      
      return newSet;
    });
  }, []);

  // Toggle week expansion
  const toggleWeekExpansion = useCallback((weekId: string) => {
    setWeeks((prev) =>
      prev.map((week) =>
        week.id === weekId ? { ...week, isExpanded: !week.isExpanded } : week
      )
    );
  }, []);

  // Find next uncompleted subtopic
  const findNextSubTopic = useCallback((): string | null => {
    for (const week of weeks) {
      for (const topic of week.topics) {
        for (const subTopic of topic.subTopics) {
          if (!completedSubTopics.has(subTopic.id)) {
            return subTopic.id;
          }
        }
      }
    }
    return null;
  }, [weeks, completedSubTopics]);

  // Check if subtopic is completed
  const isCompleted = useCallback(
    (subTopicId: string) => completedSubTopics.has(subTopicId),
    [completedSubTopics]
  );

  return {
    weeks,
    progress: calculateProgress,
    toggleSubTopic,
    toggleWeekExpansion,
    findNextSubTopic,
    isCompleted,
  };
}
