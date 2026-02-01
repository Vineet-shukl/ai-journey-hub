export interface SubTopic {
  id: string;
  title: string;
  description?: string;
  resourceUrl?: string;
  completed: boolean;
}

export interface Topic {
  id: string;
  title: string;
  subTopics: SubTopic[];
}

export interface Week {
  id: string;
  number: number;
  title: string;
  objective: string;
  topics: Topic[];
  isExpanded: boolean;
}

export interface RoadmapProgress {
  weekProgress: Record<string, number>;
  overallProgress: number;
  completedSubTopics: Set<string>;
}
