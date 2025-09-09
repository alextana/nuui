// Button types exports
import type { ButtonVariant, ButtonSize, ButtonRounded, ButtonTheme } from '../theme';

export type { ButtonVariant, ButtonSize, ButtonRounded, ButtonTheme };

// Button props interface (defined in Button.vue)
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  rounded?: ButtonRounded;
  leftIcon?: any;
  rightIcon?: any;
  iconOnly?: boolean;
  fullWidth?: boolean;
  customClasses?: string;
  theme?: ButtonTheme;
}