export { default as Tabs } from './Tabs.vue'
export { default as TabGroup } from './TabGroup.vue'
export { default as TabList } from './TabList.vue'
export { default as Tab } from './Tab.vue'
export { default as TabPanel } from './TabPanel.vue'

export {
  tabsTheme,
  defaultTabsTheme,
  mergeTabsTheme,
  type TabsTheme,
  type TabsVariant,
  type TabsSize
} from './theme'

// Export all types
export type {
  TabProps,
  TabGroupProps,
  TabListProps,
  TabPanelProps,
  TabEmits,
  TabGroupEmits,
  TabVariant,
  TabSize,
  TabOrientation,
  TabIcon,
  SetActiveTabFunction,
  TabRegisterFunction,
  TabUnregisterFunction,
  NavigationDirection
} from './types'

// Default export for convenience
export { default } from './Tabs.vue'