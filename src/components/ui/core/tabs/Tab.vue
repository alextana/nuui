<template>
  <button
    ref="tabRef"
    :id="tabId"
    :class="tabClasses"
    :aria-selected="isActive"
    :aria-controls="panelId"
    :tabindex="isActive ? 0 : -1"
    :disabled="disabled"
    role="tab"
    type="button"
    @click="handleClick"
    @keydown="handleKeydown"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseLeave"
  >

    <!-- Left icon slot or prop -->
    <span v-if="leftIcon || $slots.iconLeft" :class="leftIconClasses">
      <slot name="iconLeft">
        <component v-if="leftIcon" :is="markRaw(leftIcon)" />
      </slot>
    </span>

    <!-- Tab content -->
    <span v-if="$slots.default || label" class="truncate">
      <slot>
        {{ label }}
      </slot>
    </span>

    <!-- Right icon slot or prop -->
    <span v-if="rightIcon || $slots.iconRight" :class="rightIconClasses">
      <slot name="iconRight">
        <component v-if="rightIcon" :is="markRaw(rightIcon)" />
      </slot>
    </span>

    <!-- Badge/count indicator -->
    <span v-if="badge || $slots.badge" :class="badgeClasses">
      <slot name="badge">
        {{ badge }}
      </slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, markRaw, ref, onMounted, onUnmounted, useId } from 'vue'
import { twMerge } from 'tailwind-merge'

// Animation state
const tabRef = ref<HTMLButtonElement>()
const isPressed = ref(false)

interface TabProps {
  value: string
  activeTab: string
  setActiveTab: (value: string) => void
  variant?: string
  size?: string
  orientation?: 'horizontal' | 'vertical'
  animated?: boolean
  registerTab?: (value: string, tabId: string) => void
  unregisterTab?: (value: string) => void
  label?: string
  disabled?: boolean
  leftIcon?: any
  rightIcon?: any
  badge?: string | number
  customClasses?: string
}

const {
  value,
  activeTab,
  setActiveTab,
  orientation = 'horizontal',
  animated = true,
  registerTab,
  unregisterTab,
  label = '',
  disabled = false,
  leftIcon = undefined,
  rightIcon = undefined,
  badge = undefined,
  customClasses = ''
} = defineProps<TabProps>()

const emit = defineEmits<{
  click: [value: string, event: MouseEvent]
  keydown: [value: string, event: KeyboardEvent]
}>()

// Tab context is now passed as props

// Register this tab with the TabGroup
const uniqueTabId = useId()
onMounted(() => {
  // Use Vue's useId for unique tab identification
  registerTab?.(value, uniqueTabId)
})

onUnmounted(() => {
  unregisterTab?.(value)
})

const isActive = computed(() => activeTab === value)
const tabId = computed(() => `tab-${value}`)
const panelId = computed(() => `panel-${value}`)

const tabClasses = computed(() => {
  const theme = {
    tab: {
      base: 'inline-flex items-center justify-center px-4 py-2 font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed',
      variants: {
        default: {
          inactive: 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300',
          active: 'text-blue-600 border-b-2 border-blue-600'
        }
      },
      sizes: {
        md: 'px-4 py-2 text-base'
      }
    }
  }

  let variantClasses = isActive.value
    ? theme.tab.variants.default.active
    : theme.tab.variants.default.inactive

  // Replace border classes based on orientation
  if (orientation === 'vertical') {
    variantClasses = variantClasses
      .replace(/border-b-2/g, 'border-l-4')
      .replace(/border-b(?!-)/g, 'border-l')
  }

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  return twMerge(
    theme.tab.base,
    theme.tab.sizes.md,
    variantClasses,
    disabledClass,
    customClasses,
    'relative overflow-hidden transform-gpu transition-all duration-200 ease-out',
    animated ? 'hover:scale-[1.02] active:scale-95' : '',
    isPressed.value && !disabled && 'scale-95'
  )
})

const leftIconClasses = computed(() => {
  const marginClass = (label || badge) ? 'mr-2' : ''
  return twMerge('w-4 h-4', marginClass)
})

const rightIconClasses = computed(() => {
  const marginClass = (label || badge) ? 'ml-2' : ''
  return twMerge('w-4 h-4', marginClass)
})

const badgeClasses = computed(() => {
  const marginClass = label ? 'ml-2' : ''
  return twMerge(
    'inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full',
    'bg-gray-100 text-gray-800',
    marginClass
  )
})

// Event handlers
const handleClick = (event: MouseEvent) => {
  if (disabled) return

  setActiveTab(value)
  emit('click', value, event)
}

const handleMouseDown = () => {
  if (!disabled) {
    isPressed.value = true
  }
}

const handleMouseUp = () => {
  isPressed.value = false
}

const handleMouseLeave = () => {
  isPressed.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (disabled) return

  emit('keydown', value, event)

  // Handle activation keys (Enter and Space)
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    setActiveTab(value)
  }
}
</script>