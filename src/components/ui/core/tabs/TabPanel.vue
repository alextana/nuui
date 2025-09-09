<template>
  <div
    v-if="shouldRender"
    :id="panelId"
    :aria-labelledby="tabId"
    role="tabpanel"
    :tabindex="isActive ? '0' : '-1'"
    :class="panelClasses"
    v-show="isActive"
  >
    <Transition
      v-if="animated && shouldRenderContent"
      mode="out-in"
      appear
      :name="transitionName"
      :key="activeTab"
    >
      <div v-if="shouldRenderContent" class="tab-content-wrapper">
        <slot />
      </div>
    </Transition>
    <div v-else-if="shouldRenderContent" class="tab-content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { twMerge } from 'tailwind-merge'

interface TabPanelProps {
  value: string
  activeTab: string
  hasBeenActive?: boolean
  navigationDirection?: 'forward' | 'backward'
  orientation?: 'horizontal' | 'vertical'
  customClasses?: string
  lazy?: boolean
  animated?: boolean
}

const {
  value,
  activeTab,
  hasBeenActive = false,
  navigationDirection = 'forward',
  orientation = 'horizontal',
  customClasses = '',
  lazy = false,
  animated = true
} = defineProps<TabPanelProps>()

// Tab context is now passed as props

// Computed properties
const isActive = computed(() => activeTab === value)
const panelId = computed(() => `panel-${value}`)
const tabId = computed(() => `tab-${value}`)

// Track if this panel has ever been active (for lazy loading)
const shouldRender = computed(() => {
  if (!lazy) return true
  return isActive.value || hasBeenActive
})

// Control content rendering for lazy loading
const shouldRenderContent = computed(() => {
  if (!lazy) return true
  return isActive.value || hasBeenActive
})

const transitionName = computed(() => {
  if (orientation === 'vertical') {
    if (navigationDirection === 'forward') {
      return 'slide-down' // Next tab slides from bottom to top
    } else if (navigationDirection === 'backward') {
      return 'slide-up' // Previous tab slides from top to bottom
    }
    return 'slide-down' // Default vertical direction
  } else {
    if (navigationDirection === 'forward') {
      return 'slide-left' // Next tab slides from right to left
    } else if (navigationDirection === 'backward') {
      return 'slide-right' // Previous tab slides from left to right
    }
    return 'slide-left' // Default horizontal direction
  }
})

// Computed classes
const panelClasses = computed(() => {
  const theme = {
    tabPanel: {
      base: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      variants: {
        default: 'p-4'
      }
    }
  }

  return twMerge(
    'overflow-hidden', // Prevent content from spilling during transitions
    theme.tabPanel?.base || 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    theme.tabPanel?.variants?.default || 'p-4',
    customClasses
  )
})
</script>

<style scoped>
/* Slide Left (Forward) - Next tab slides from right to left */
.slide-left-enter-active {
  transition: transform 0.4s cubic-bezier(0.05, 0.7, 0.1, 1), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-left-leave-active {
  transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-left-enter-to,
.slide-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Right (Backward) - Previous tab slides from left to right */
.slide-right-enter-active {
  transition: transform 0.4s cubic-bezier(0.05, 0.7, 0.1, 1), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-right-leave-active {
  transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Down (Forward Vertical) - Next tab slides from bottom to top */
.slide-down-enter-active {
  transition: transform 0.4s cubic-bezier(0.05, 0.7, 0.1, 1), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-down-leave-active {
  transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Slide Up (Backward Vertical) - Previous tab slides from top to bottom */
.slide-up-enter-active {
  transition: transform 0.4s cubic-bezier(0.05, 0.7, 0.1, 1), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-up-leave-active {
  transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.tab-content-wrapper {
  width: 100%;
}
</style>