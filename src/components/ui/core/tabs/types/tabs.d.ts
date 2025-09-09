/**
 * TypeScript declaration file for Tabs components
 * This file provides type definitions for all tab-related components and utilities
 */

import type { Component, VNode } from 'vue'
import type { TabsTheme } from '../theme'

/**
 * Icon type - can be a Vue component, string, or VNode
 */
export type TabIcon = Component | string | VNode | (() => VNode)

/**
 * Tab orientation options
 */
export type TabOrientation = 'horizontal' | 'vertical'

/**
 * Tab variant types
 */
export type TabVariant = 'default' | 'pills' | 'underline' | 'cards'

/**
 * Tab size types
 */
export type TabSize = 'sm' | 'md' | 'lg'

/**
 * Navigation direction for animations
 */
export type NavigationDirection = 'forward' | 'backward'

/**
 * Tab registration function type
 */
export type TabRegisterFunction = (value: string, tabId: string) => void

/**
 * Tab unregistration function type
 */
export type TabUnregisterFunction = (value: string) => void

/**
 * Set active tab function type
 */
export type SetActiveTabFunction = (value: string) => void

/**
 * Tab props interface
 */
export interface TabProps {
  /** Unique identifier for the tab */
  value: string
  /** Currently active tab value */
  activeTab: string
  /** Function to set the active tab */
  setActiveTab: SetActiveTabFunction
  /** Tab variant style */
  variant?: TabVariant
  /** Tab size */
  size?: TabSize
  /** Tab orientation */
  orientation?: TabOrientation
  /** Whether animations are enabled */
  animated?: boolean
  /** Theme configuration */
  theme?: TabsTheme
  /** Function to register tab with parent */
  registerTab?: TabRegisterFunction
  /** Function to unregister tab from parent */
  unregisterTab?: TabUnregisterFunction
  /** Tab label text */
  label?: string
  /** Whether the tab is disabled */
  disabled?: boolean
  /** Left icon component */
  leftIcon?: TabIcon
  /** Right icon component */
  rightIcon?: TabIcon
  /** Badge text or number */
  badge?: string | number
  /** Custom CSS classes */
  customClasses?: string
}

/**
 * Tab emits interface
 */
export interface TabEmits {
  /** Emitted when tab is clicked */
  click: [value: string, event: MouseEvent]
  /** Emitted when key is pressed on tab */
  keydown: [value: string, event: KeyboardEvent]
}

/**
 * Tab item configuration for the Tabs component
 */
export interface TabItem {
  /** Unique identifier for the tab */
  value: string
  /** Tab label text */
  label: string
  /** Whether the tab is disabled */
  disabled?: boolean
  /** Left icon component */
  leftIcon?: TabIcon
  /** Right icon component */
  rightIcon?: TabIcon
  /** Badge text or number */
  badge?: string | number
  /** Content for the tab panel */
  content?: string
  /** Panel content (alternative to content) */
  panelContent?: string
  /** Custom CSS classes for the tab */
  customClasses?: string
  /** Custom CSS classes for the panel */
  panelClasses?: string
}

/**
 * Tab group props interface
 */
export interface TabGroupProps {
  /** Current active tab value */
  modelValue?: string
  /** Default tab value when no modelValue is provided */
  defaultValue?: string
  /** Tab variant style */
  variant?: TabVariant
  /** Tab size */
  size?: TabSize
  /** Tab orientation */
  orientation?: TabOrientation
  /** Whether animations are enabled */
  animated?: boolean
  /** Custom CSS classes */
  customClasses?: string
  /** Theme configuration */
  theme?: TabsTheme
}

/**
 * Tab group emits interface
 */
export interface TabGroupEmits {
  /** Emitted when modelValue changes */
  'update:modelValue': [value: string]
  /** Emitted when active tab changes */
  change: [value: string]
}

/**
 * Tab list props interface
 */
export interface TabListProps {
  /** Currently active tab value */
  activeTab: string
  /** Function to set the active tab */
  setActiveTab: SetActiveTabFunction
  /** Tab variant style */
  variant?: TabVariant
  /** Tab size */
  size?: TabSize
  /** Tab orientation */
  orientation?: TabOrientation
  /** Whether animations are enabled */
  animated?: boolean
  /** Custom CSS classes */
  customClasses?: string
  /** Theme configuration */
  theme?: TabsTheme
  /** Function to register tab with parent */
  registerTab?: TabRegisterFunction
  /** Function to unregister tab from parent */
  unregisterTab?: TabUnregisterFunction
}

/**
 * Tab panel props interface
 */
export interface TabPanelProps {
  /** Unique identifier for the panel */
  value: string
  /** Currently active tab value */
  activeTab?: string
  /** Tab variant style */
  variant?: TabVariant
  /** Tab size */
  size?: TabSize
  /** Tab orientation */
  orientation?: TabOrientation
  /** Whether animations are enabled */
  animated?: boolean
  /** Whether this panel has been active before */
  hasBeenActive?: boolean
  /** Navigation direction for animations */
  navigationDirection?: NavigationDirection
  /** Whether to lazy load panel content */
  lazy?: boolean
  /** Custom CSS classes */
  customClasses?: string
  /** Theme configuration */
  theme?: TabsTheme
}

/**
 * Tabs component props interface
 */
export interface TabsProps {
  /** Array of tab configurations */
  tabs: TabItem[]
  /** Current active tab value */
  modelValue?: string
  /** Default tab value when no modelValue is provided */
  defaultValue?: string
  /** Tab variant style */
  variant?: TabVariant
  /** Tab size */
  size?: TabSize
  /** Tab orientation */
  orientation?: TabOrientation
  /** Whether animations are enabled */
  animated?: boolean
  /** Whether to lazy load panel content */
  lazy?: boolean
  /** Whether to show tab panels */
  showPanels?: boolean
  /** Custom CSS classes for the container */
  customClasses?: string
  /** Custom CSS classes for the tab list */
  tabListClasses?: string
  /** Custom CSS classes for the panels container */
  panelsContainerClasses?: string
  /** Theme configuration */
  theme?: TabsTheme
}

/**
 * Tabs component emits interface
 */
export interface TabsEmits {
  /** Emitted when modelValue changes */
  'update:modelValue': [value: string]
  /** Emitted when active tab changes */
  change: [value: string]
}

// Component instance types
export interface TabInstance {
  $props: TabProps
  $emit: TabEmits
}

export interface TabGroupInstance {
  $props: TabGroupProps
  $emit: TabGroupEmits
}

export interface TabPanelInstance {
  $props: TabPanelProps
}

// Utility types
export interface TabConfiguration {
  value: string
  id: string
  disabled?: boolean
  element?: HTMLElement
}

export interface TabIndicatorStyle {
  transform?: string
  width?: string
  height?: string
  opacity?: number
  transition?: string
}
