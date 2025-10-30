export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export type ProjectView = 'FEATURED' | 'ORDINALS' | 'STACKS';
export type ProjectMode = 'BENTO' | 'TREE';
