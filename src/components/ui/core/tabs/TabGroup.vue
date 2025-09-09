<template>
  <div :class="groupClasses">
    <slot 
      :active-tab="activeTab"
      :set-active-tab="setActiveTab"
      :variant="variant"
      :size="size"
      :orientation="orientation"
      :theme="mergedTheme"
      :animated="true"
      :has-been-active="hasBeenActive"
      :navigation-direction="navigationDirection"
      :register-tab="registerTab"
      :unregister-tab="unregisterTab"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { twMerge } from 'tailwind-merge'
import { mergeTabsTheme, type TabsVariant, type TabsSize, type TabsTheme } from './theme'

interface TabGroupProps {
  modelValue?: string
  defaultValue?: string
  variant?: TabsVariant
  size?: TabsSize
  orientation?: 'horizontal' | 'vertical'
  customClasses?: string
  theme?: TabsTheme
}

const {
  modelValue,
  defaultValue = '',
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  customClasses = '',
  theme
} = defineProps<TabGroupProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

// Internal state
const activeTab = ref(modelValue || defaultValue)
const hasBeenActive = ref(new Set([activeTab.value]))
const navigationDirection = ref<'forward' | 'backward' | null>(null)
const tabOrder = ref<string[]>([])

// Watch for external changes to modelValue
watch(() => modelValue, (newValue) => {
  if (newValue !== undefined && newValue !== activeTab.value) {
    activeTab.value = newValue
    hasBeenActive.value.add(newValue)
  }
})

// Watch for internal changes to activeTab
watch(activeTab, (newValue) => {
  hasBeenActive.value.add(newValue)
  emit('update:modelValue', newValue)
  emit('change', newValue)

  // Reset navigation direction after a short delay to allow animation to complete
    setTimeout(() => {
      navigationDirection.value = null
    }, 450) // Slightly longer than the animation duration
})

// Merge custom theme with default theme
const mergedTheme = computed(() => mergeTabsTheme(theme))

// Computed classes
const groupClasses = computed(() => {
  const orientationClass = orientation === 'vertical' ? 'flex' : ''
  return twMerge(orientationClass, customClasses)
})

// Functions to manage active tab
const setActiveTab = (value: string) => {
  const currentIndex = tabOrder.value.indexOf(activeTab.value)
  const newIndex = tabOrder.value.indexOf(value)

  if (currentIndex !== -1 && newIndex !== -1) {
    navigationDirection.value = newIndex > currentIndex ? 'forward' : 'backward'
  } else {
    navigationDirection.value = null
  }

  activeTab.value = value
}

// Function to register tab order
const registerTab = (tabValue: string, tabId: string) => {
  if (!tabOrder.value.includes(tabValue)) {
    // Add tab to the end using unique ID for ordering
    tabOrder.value.push(tabValue)
  }
}

const unregisterTab = (tabValue: string) => {
  const index = tabOrder.value.indexOf(tabValue)
  if (index > -1) {
    tabOrder.value.splice(index, 1)
  }
}

const getActiveTab = () => activeTab.value

// Expose methods for programmatic control
defineExpose({
  setActiveTab,
  getActiveTab,
  activeTab: computed(() => activeTab.value)
})
</script>