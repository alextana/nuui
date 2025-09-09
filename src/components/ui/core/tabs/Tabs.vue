<template>
  <TabGroup
    :model-value="modelValue"
    :default-value="defaultValue"
    :variant="variant"
    :size="size"
    :orientation="orientation"
    :custom-classes="customClasses"
    :theme="theme"
    @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
  >
    <template #default="{ activeTab, setActiveTab, variant: groupVariant, size: groupSize, orientation: groupOrientation, theme: groupTheme, animated: groupAnimated, hasBeenActive, navigationDirection, registerTab, unregisterTab }">
      <TabList
        :active-tab="activeTab"
        :set-active-tab="setActiveTab"
        :variant="groupVariant"
        :size="groupSize"
        :orientation="groupOrientation"
        :custom-classes="tabListClasses"
        :theme="groupTheme"
        :animated="groupAnimated"
        :register-tab="registerTab"
        :unregister-tab="unregisterTab"
      >
        <Tab
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
          :active-tab="activeTab"
          :set-active-tab="setActiveTab"
          :variant="groupVariant"
          :size="groupSize"
          :orientation="groupOrientation"
          :animated="groupAnimated"
          :register-tab="registerTab"
          :unregister-tab="unregisterTab"
          :label="tab.label"
          :disabled="tab.disabled"
          :left-icon="tab.leftIcon"
          :right-icon="tab.rightIcon"
          :badge="tab.badge"
          :custom-classes="tab.customClasses"
          @click="handleTabClick"
        >
          <template v-if="tab.content" #default>
            {{ tab.content }}
          </template>
          <template v-if="$slots[`tab-${tab.value}`]" #default>
            <slot :name="`tab-${tab.value}`" :tab="tab" />
          </template>
        </Tab>
      </TabList>

      <div v-if="showPanels" :class="panelsContainer">
        <TabPanel
          v-for="tab in tabs"
          :key="`panel-${tab.value}`"
          :value="tab.value"
          :custom-classes="tab.panelClasses"
          :lazy="lazy"
          :animated="groupAnimated"
          :active-tab="activeTab"
          :variant="groupVariant"
          :size="groupSize"
          :orientation="groupOrientation"
          :theme="groupTheme"
          :has-been-active="hasBeenActive.has(tab.value)"
          :navigation-direction="navigationDirection || 'forward'"
        >
          <slot :name="`panel-${tab.value}`" :tab="tab">
            <div v-if="tab.panelContent" v-html="tab.panelContent" />
          </slot>
        </TabPanel>
      </div>
    </template>
  </TabGroup>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import TabGroup from './TabGroup.vue'
import TabList from './TabList.vue'
import Tab from './Tab.vue'
import TabPanel from './TabPanel.vue'
import type { TabsVariant, TabsSize, TabsTheme } from './theme'

interface TabItem {
  value: string
  label?: string
  content?: string
  panelContent?: string
  disabled?: boolean
  leftIcon?: any
  rightIcon?: any
  badge?: string | number
  customClasses?: string
  panelClasses?: string
}

interface TabsProps {
  modelValue?: string
  defaultValue?: string
  tabs: TabItem[]
  variant?: TabsVariant
  size?: TabsSize
  orientation?: 'horizontal' | 'vertical'
  showPanels?: boolean
  lazy?: boolean
  animated?: boolean
  customClasses?: string
  tabListClasses?: string
  panelsContainerClasses?: string
  theme?: TabsTheme
}

const {
  modelValue,
  defaultValue = '',
  tabs,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  showPanels = true,
  lazy = false,
  animated = true,
  customClasses = '',
  tabListClasses = '',
  panelsContainerClasses = '',
  theme
} = defineProps<TabsProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
  tabClick: [tab: TabItem, event: MouseEvent]
}>()

// Computed classes for panels container
const panelsContainer = computed(() => {
  const orientationClass = orientation === 'vertical' ? 'flex-1' : ''
  const positionClass = animated 
    ? 'relative min-h-0 transition-all duration-300 ease-out'
    : 'relative min-h-0'
  return twMerge(positionClass, orientationClass, panelsContainerClasses)
})

// Event handlers
const handleTabClick = (value: string, event: MouseEvent) => {
  const tab = tabs.find(t => t.value === value)
  if (tab) {
    emit('tabClick', tab, event)
  }
}
</script>