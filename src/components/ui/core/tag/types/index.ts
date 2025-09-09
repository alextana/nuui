// Tag types exports
import type { TagVariant, TagSize, TagTheme } from '../theme';

export type { TagVariant, TagSize, TagTheme };

// Tag props interface (defined in Tag.vue)
export interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  label?: string;
  closable?: boolean;
  disabled?: boolean;
  customClasses?: string;
  theme?: TagTheme;
}