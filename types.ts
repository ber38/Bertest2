
import { ReactNode } from 'react';

// A block of content can be a heading, paragraph, list, etc.
export interface ContentBlock {
  type: 'heading' | 'subheading' | 'paragraph' | 'list';
  text?: string;
  // List items can be simple strings or objects containing a sublist
  items?: (string | { main: string; sublist: string[] })[];
}

// A sub-category within a main domain, e.g., "Nombres et Opération" in "Mathématiques"
export interface SubCategory {
  id: string;
  title: string;
  content: ContentBlock[];
}

// A main category or domain, e.g., "Mathématiques"
export interface Category {
  id: string;
  title: string;
  icon: ReactNode;
  subCategories: SubCategory[];
}
