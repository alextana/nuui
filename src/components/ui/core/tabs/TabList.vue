<template>
  <div
    ref="tabListRef"
    :class="tabListClasses"
    role="tablist"
    :aria-orientation="orientation"
    @keydown="handleKeydown"
  >
    <div
      v-if="showIndicator"
      :class="indicatorClasses"
      :style="indicatorStyle"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, toRef, onMounted, onUnmounted, watch } from 'vue'
import type { TabsVariant, TabsSize, TabsTheme } from './theme'
import { useTabIndicator } from './composables/useTabIndicator'
import { useTabKeyboardNavigation } from './composables/useTabKeyboardNavigation'
import { useTabListTheme } from './composables/useTabListTheme'

interface TabListProps {
  activeTab: string
  setActiveTab: (value: string) => void
  variant?: TabsVariant
  size?: TabsSize
  orientation?: 'horizontal' | 'vertical'
  customClasses?: string
  theme?: TabsTheme
  animated?: boolean
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
} = defineProps<TabListProps>()

// Template refs
const tabListRef = ref<HTMLElement>()

// Convert props to refs for composables
const variantRef = toRef(() => variant)
const sizeRef = toRef(() => size)
const orientationRef = toRef(() => orientation)
const customClassesRef = toRef(() => customClasses)
const animatedRef = toRef(() => animated)
const activeTabRef = toRef(() => activeTab)
const themeRef = toRef(() => theme)

// Use composables
const { tabListClasses } = useTabListTheme({
  variant: variantRef,
  size: sizeRef,
  orientation: orientationRef,
  customClasses: customClassesRef,
  theme: themeRef
})

const {
  indicatorStyle,
  showIndicator,
  indicatorClasses,
  updateIndicator
} = useTabIndicator({
  variant: variantRef,
  orientation: orientationRef,
  animated: animatedRef,
})

const { handleKeydown } = useTabKeyboardNavigation({
  orientation: orientationRef,
  setActiveTab
})

// Event listener management
let resizeCleanup: (() => void) | null = null

const handleResize = () => updateIndicator(tabListRef.value || null)

// Lifecycle hooks
onMounted(() => {
  updateIndicator(tabListRef.value || null)

  // Add resize listener
  window.addEventListener('resize', handleResize)
  resizeCleanup = () => window.removeEventListener('resize', handleResize)
})

onUnmounted(() => {
  resizeCleanup?.()
})

watch(
  activeTabRef,
  () => updateIndicator(tabListRef.value || null),
  { flush: 'post' }
)

watch(
  [variantRef, orientationRef],
  () => updateIndicator(tabListRef.value || null)
)
</script>