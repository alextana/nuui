// Test file to verify TypeScript declarations work correctly
import type { ButtonProps, ButtonVariant, ButtonSize } from './dist/index';
import type { TabProps, TabVariant, TabsTheme } from './dist/tabs';
import type { TagProps, TagVariant } from './dist/tag';

// Test Button types
const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  label: 'Test Button',
  disabled: false
};

const buttonVariant: ButtonVariant = 'secondary';
const buttonSize: ButtonSize = 'lg';

// Test Tab types
const tabProps: TabProps = {
  value: 'tab1',
  label: 'Tab 1',
  variant: 'default',
  size: 'md'
};

const tabVariant: TabVariant = 'underline';

const tabsTheme: TabsTheme = {
  base: 'custom-base',
  variants: {
    default: 'default-variant'
  }
};

// Test Tag types
const tagProps: TagProps = {
  label: 'Test Tag',
  variant: 'primary',
  size: 'sm',
  clickable: true
};

const tagVariant: TagVariant = 'success';

console.log('All types compiled successfully!');