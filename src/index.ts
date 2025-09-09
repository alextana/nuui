// Components
export { default as Button } from './components/ui/core/button/Button.vue';
export { default as Tag } from './components/ui/core/tag/Tag.vue';
export { default as Text } from './components/ui/core/text/Text.vue';
export {
  default as Tabs,
  Tabs as TabsComponent,
  TabGroup,
  TabList,
  Tab,
  TabPanel
} from './components/ui/core/tabs';

// Themes
export {
  buttonTheme,
  defaultButtonTheme,
  mergeButtonTheme,
  type ButtonTheme,
  type ButtonVariant,
  type ButtonSize,
  type ButtonRounded
} from './components/ui/core/button/theme';

export {
  tagTheme,
  defaultTagTheme,
  mergeTagTheme,
  type TagTheme,
  type TagVariant,
  type TagSize
} from './components/ui/core/tag/theme';

export {
  tabsTheme,
  defaultTabsTheme,
  mergeTabsTheme,
  type TabsTheme,
  type TabsVariant,
  type TabsSize
} from './components/ui/core/tabs/theme';

export {
  textTheme,
  defaultTextTheme,
  mergeTextTheme,
  type TextTheme,
  type TextVariant,
  type TextTone,
  type TextAlignment,
  type TextFontWeight,
  type TextDecoration
} from './components/ui/core/text/theme';

// Export all types
export * from './types.ts';

// CSS (commented out for library build to avoid issues with .d.ts generation)
// import './tailwind.css';