export interface Project {
  title: string;
  description: string;
  categories: ProjectCategory[];
  image: string;
  url: string;
}

export type ProjectCategory = 'FEATURED' | 'WORDPRESS' | 'BRICKS' | 'ELEMENTOR' | 'GUTENBERG' | 'WOOCOMMERCE' | 'REACT' | 'NEXTJS';
export type ProjectMode = 'BENTO' | 'TREE';
