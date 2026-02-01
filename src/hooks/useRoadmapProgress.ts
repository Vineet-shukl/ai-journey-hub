import { useState, useCallback, useMemo, useEffect } from 'react';
import { Week, RoadmapProgress } from '@/types/roadmap';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const STORAGE_KEY = 'ai-ml-roadmap-progress';

export function useRoadmapProgress(initialWeeks: Week[]) {
  const { user } = useAuth();
  const [completedSubTopics, setCompletedSubTopics] = useState<Set<string>>(new Set());
  const [weeks, setWeeks] = useState<Week[]>(initialWeeks);
  const [isLoading, setIsLoading] = useState(true);

  // Load progress from database or localStorage
  useEffect(() => {
    const loadProgress = async () => {
      setIsLoading(true);

      if (user) {
        // Load from database for authenticated users
        const { data, error } = await supabase
          .from('learning_progress')
          .select('subtopic_id')
          .eq('user_id', user.id)
          .eq('completed', true);

        if (!error && data) {
          setCompletedSubTopics(new Set(data.map((item) => item.subtopic_id)));
        }
      } else {
        // Fall back to localStorage for anonymous users
        try {
          const stored = localStorage.getItem(STORAGE_KEY);
          if (stored) {
            setCompletedSubTopics(new Set(JSON.parse(stored)));
          }
        } catch (e) {
          console.error('Failed to load progress from storage', e);
        }
      }

      setIsLoading(false);
    };

    loadProgress();
  }, [user]);

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
  const toggleSubTopic = useCallback(
    async (subTopicId: string) => {
      const isCompleted = completedSubTopics.has(subTopicId);

      // Optimistic update
      setCompletedSubTopics((prev) => {
        const newSet = new Set(prev);
        if (isCompleted) {
          newSet.delete(subTopicId);
        } else {
          newSet.add(subTopicId);
        }
        return newSet;
      });

      if (user) {
        // Sync with database for authenticated users
        if (isCompleted) {
          // Delete the progress record
          await supabase
            .from('learning_progress')
            .delete()
            .eq('user_id', user.id)
            .eq('subtopic_id', subTopicId);
        } else {
          // Insert or update the progress record
          await supabase
            .from('learning_progress')
            .upsert({
              user_id: user.id,
              subtopic_id: subTopicId,
              completed: true,
              completed_at: new Date().toISOString(),
            }, {
              onConflict: 'user_id,subtopic_id',
            });
        }
      } else {
        // Save to localStorage for anonymous users
        setCompletedSubTopics((prev) => {
          const newSet = new Set(prev);
          if (isCompleted) {
            newSet.delete(subTopicId);
          } else {
            newSet.add(subTopicId);
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify([...newSet]));
          return newSet;
        });
      }
    },
    [completedSubTopics, user]
  );

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
    isLoading,
  };
}
