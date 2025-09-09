<template>
  <div
    ref="tabListRef"
    :class="tabListClasses"
    role="tablist"
    :aria-orientation="orientation"
    @keydown="handleKeydown"
  >
    <!-- Animated indicator -->
    <div
      v-if="showIndicator"
      :class="indicatorClasses"
      :style="indicatorStyle"
    ></div>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, onMounted, watch, provide } from 'vue'
import { twMerge } from 'tailwind-merge'
import { mergeTabsTheme, type TabsVariant, type TabsSize, type TabsTheme } from './theme'

// Template refs
const tabListRef = ref<HTMLElement>()

// Indicator state
const indicatorStyle = ref({})
const showIndicator = ref(false)

interface TabListProps {
  activeTab: string
  setActiveTab: (value: string) => void
  variant?: TabsVariant
  size?: TabsSize
  orientation?: 'horizontal' | 'vertical'
  customClasses?: string
  theme?: TabsTheme
  animated?: boolean
  registerTab?: (tabValue: string, tabId: string) => void
  unregisterTab?: (tabValue: string) => void
}

const {
  activeTab,
  setActiveTab,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  customClasses = '',
  theme,
  animated = true,
  registerTab,
  unregisterTab
} = defineProps<TabListProps>()

// Merge custom theme with default theme
const mergedTheme = computed(() => mergeTabsTheme(theme))

// Computed classes
const tabListClasses = computed(() => {
  const themeConfig = mergedTheme.value
  const orientationClass = orientation === 'vertical' ? 'flex-col border-r border-b-0' : ''

  return twMerge(
    'relative',
    themeConfig.tabList.base,
    themeConfig.tabList.variants[variant],
    themeConfig.tabList.sizes[size],
    orientationClass,
    'relative', // Ensure relative positioning for indicator
    customClasses
  )
})

// Indicator classes
const indicatorClasses = computed(() => {
  const baseClasses = animated
    ? 'absolute transition-all duration-300 ease-in-out pointer-events-none'
    : 'absolute pointer-events-none'

  if (variant === 'underline') {
    return twMerge(
      baseClasses,
      'bg-blue-600',
      orientation === 'vertical' ? 'left-0 w-1 h-auto' : 'bottom-0 h-1'
    )
  }

  return twMerge(
    baseClasses,
    'bg-primary/10 rounded-md backdrop-blur-sm'
  )
})

// Update indicator position
const updateIndicator = async () => {
  await nextTick()

  if (!tabListRef.value) return

  const activeTabElement = tabListRef.value.querySelector('[role="tab"][aria-selected="true"]') as HTMLElement

  if (!activeTabElement) {
    showIndicator.value = false
    return
  }

  const tabListRect = tabListRef.value.getBoundingClientRect()
  const activeTabRect = activeTabElement.getBoundingClientRect()

  const left = activeTabRect.left - tabListRect.left
  const top = activeTabRect.top - tabListRect.top
  const width = activeTabRect.width
  const height = activeTabRect.height

  if (variant === 'underline') {
    if (orientation === 'vertical') {
      indicatorStyle.value = {
        top: `${top}px`,
        left: '0px',
        width: '6px',
        height: `${height}px`
      }
    } else {
      indicatorStyle.value = {
        left: `${left}px`,
        bottom: '0px',
        width: `${width}px`,
        height: '4px'
      }
    }
  } else {
    indicatorStyle.value = {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`
    }
  }

  showIndicator.value = true
}

// Active tab management is now passed as props

// Keyboard navigation handler
const handleKeydown = async (event: KeyboardEvent) => {
  const { key } = event

  // Only handle arrow keys
  if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(key)) {
    return
  }

  event.preventDefault()

  // Get all tab elements within this TabList
  await nextTick()
  const currentTarget = event.currentTarget as HTMLElement
  if (!currentTarget) return

  const tabElements = Array.from(
    currentTarget.querySelectorAll('[role="tab"]:not([disabled])') as NodeListOf<HTMLElement>
  )

  if (tabElements.length === 0) return

  const currentIndex = tabElements.findIndex(tab => tab.getAttribute('aria-selected') === 'true')
  let nextIndex = currentIndex

  // Determine next index based on key and orientation
  if (orientation === 'horizontal') {
    if (key === 'ArrowLeft') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : tabElements.length - 1
    } else if (key === 'ArrowRight') {
      nextIndex = currentIndex < tabElements.length - 1 ? currentIndex + 1 : 0
    }
  } else {
    if (key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : tabElements.length - 1
    } else if (key === 'ArrowDown') {
      nextIndex = currentIndex < tabElements.length - 1 ? currentIndex + 1 : 0
    }
  }

  // Handle Home and End keys
  if (key === 'Home') {
    nextIndex = 0
  } else if (key === 'End') {
    nextIndex = tabElements.length - 1
  }

  // Focus and activate the next tab
  if (nextIndex !== currentIndex && tabElements[nextIndex]) {
    const nextTab = tabElements[nextIndex]
    const tabValue = nextTab.getAttribute('id')?.replace('tab-', '') || ''

    // Set focus and activate
    nextTab.focus()
    if (tabValue) {
      setActiveTab(tabValue)
    }
  }
}

// Watch for active tab changes to update indicator
watch(
  () => activeTab,
  () => updateIndicator(),
  { flush: 'post' }
)

// Update indicator on mount and when variant changes
onMounted(() => {
  updateIndicator()

  // Also update on window resize
  const handleResize = () => updateIndicator()
  window.addEventListener('resize', handleResize)

  // Cleanup on unmount
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})

watch([() => variant, () => orientation], () => {
  updateIndicator()
})

// Provide context to child Tab components
provide('tabsContext', {
  variant,
  size,
  orientation,
  theme: mergedTheme,
  animated
})
</script>