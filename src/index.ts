// Components
export { default as Button } from './components/ui/core/button/Button.vue';
export { default as Tag } from './components/ui/core/tag/Tag.vue';
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

// CSS
import './tailwind.css';