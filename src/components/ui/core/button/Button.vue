<template>
  <button
    ref="buttonRef"
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseLeave"
  >
    <!-- Ripple effect container -->
    <span 
      v-for="ripple in ripples" 
      :key="ripple.id"
      :class="rippleClasses"
      :style="{
        left: ripple.x + 'px',
        top: ripple.y + 'px',
        transform: ripple.scale,
        opacity: ripple.opacity
      }"
    ></span>

    <!-- Left icon slot or prop -->
    <span v-if="leftIcon || $slots.iconLeft" :class="leftIconClasses">
      <slot name="iconLeft">
        <component v-if="leftIcon" :is="markRaw(leftIcon)" />
      </slot>
    </span>

    <!-- Button content -->
    <span v-if="$slots.default || label" :class="contentClasses">
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

    <!-- Loading spinner -->
    <span v-if="loading" :class="loadingClasses">
      <svg :class="loadingSpinnerClasses" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { useSlots, computed, markRaw, ref, nextTick, onMounted, onUnmounted } from 'vue'
import { twMerge } from 'tailwind-merge'
import { mergeButtonTheme, type ButtonVariant, type ButtonSize, type ButtonRounded, type ButtonTheme } from './theme'

const slots = useSlots()
const buttonRef = ref<HTMLButtonElement>()

// Ripple animation state
interface Ripple {
  id: number
  x: number
  y: number
  scale: string
  opacity: number
}

const ripples = ref<Ripple[]>([])
let rippleId = 0
let isPressed = ref(false)

// Keyboard focus detection
const isKeyboardFocused = ref(false)
let isUsingKeyboard = false

// Track keyboard usage globally
const handleKeyDown = () => {
  isUsingKeyboard = true
}

const handleGlobalMouseDown = () => {
  isUsingKeyboard = false
}

const handleFocus = () => {
  isKeyboardFocused.value = isUsingKeyboard
}

const handleBlur = () => {
  isKeyboardFocused.value = false
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('mousedown', handleGlobalMouseDown)
  if (buttonRef.value) {
    buttonRef.value.addEventListener('focus', handleFocus)
    buttonRef.value.addEventListener('blur', handleBlur)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('mousedown', handleGlobalMouseDown)
  if (buttonRef.value) {
    buttonRef.value.removeEventListener('focus', handleFocus)
    buttonRef.value.removeEventListener('blur', handleBlur)
  }
})

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  label?: string
  disabled?: boolean
  loading?: boolean
  rounded?: ButtonRounded
  leftIcon?: any
  rightIcon?: any
  iconOnly?: boolean
  fullWidth?: boolean
  customClasses?: string
  theme?: ButtonTheme
}

const {
  variant = 'primary',
  size = 'md',
  type = 'button',
  label = '',
  disabled = false,
  loading = false,
  rounded = 'md',
  leftIcon = undefined,
  rightIcon = undefined,
  iconOnly = false,
  fullWidth = false,
  customClasses = '',
  theme
} = defineProps<ButtonProps>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Merge custom theme with default theme
const mergedTheme = computed(() => mergeButtonTheme(theme))

// Computed classes
const buttonClasses = computed(() => {
  const theme = mergedTheme.value
  const sizeClass = iconOnly ? theme.root.iconOnlySizes[size] : theme.root.sizes[size]
  const widthClass = fullWidth ? 'w-full' : ''
  
  // Base classes without focus styles
  const baseWithoutFocus = theme.root.base.replace(/focus:outline-none focus:ring-2 focus:ring-offset-2/g, '')
  
  // Conditional focus styles - only show when keyboard focused
  const focusStyles = isKeyboardFocused.value ? 'outline-none ring-2 ring-offset-2' : 'focus:outline-none'
  
  // Get focus ring color from variant
  const getFocusRingColor = () => {
    const variantClass = theme.root.variants[variant]
    if (variantClass.includes('focus:ring-blue-500')) return 'ring-blue-500'
    if (variantClass.includes('focus:ring-gray-500')) return 'ring-gray-500'
    if (variantClass.includes('focus:ring-red-500')) return 'ring-red-500'
    if (variantClass.includes('focus:ring-green-500')) return 'ring-green-500'
    if (variantClass.includes('focus:ring-yellow-500')) return 'ring-yellow-500'
    return 'ring-blue-500' // default
  }
  
  const focusRingColor = isKeyboardFocused.value ? getFocusRingColor() : ''

  return twMerge(
    baseWithoutFocus,
    theme.root.variants[variant].replace(/focus:ring-\w+-\d+/g, ''), // Remove focus ring from variant
    sizeClass,
    theme.root.rounded[rounded],
    widthClass,
    focusStyles,
    focusRingColor,
    customClasses,
    // Animation classes
    'relative overflow-hidden transform-gpu transition-all duration-150 ease-out',
    'active:scale-95 hover:scale-[1.02]',
    isPressed.value && !disabled && !loading && 'scale-95'
  )
})

const leftIconClasses = computed(() => {
  const theme = mergedTheme.value
  const iconSize = theme.icon.sizes[size]
  const marginClass = (label || slots.default) && !iconOnly ? 'mr-2' : ''
  return twMerge(theme.icon.base, iconSize, marginClass)
})

const rightIconClasses = computed(() => {
  const theme = mergedTheme.value
  const iconSize = theme.icon.sizes[size]
  const marginClass = (label || slots.default) && !iconOnly ? 'ml-2' : ''
  return twMerge(theme.icon.base, iconSize, marginClass)
})

const contentClasses = computed(() => {
  const theme = mergedTheme.value
  const loadingClass = loading ? 'opacity-0' : ''
  return twMerge(theme.content.base, loadingClass)
})

const loadingClasses = computed(() => {
  return 'absolute inset-0 flex items-center justify-center'
})

const loadingSpinnerClasses = computed(() => {
  const theme = mergedTheme.value
  const spinnerSize = theme.loading.sizes[size]
  return twMerge(theme.loading.base, spinnerSize)
})

// Ripple classes
const rippleClasses = computed(() => {
  return twMerge(
    'absolute pointer-events-none rounded-full bg-current',
    'animate-ping transform-gpu transition-all duration-600 ease-out'
  )
})

// Mouse event handlers for animations
const handleMouseDown = (event: MouseEvent) => {
  if (disabled || loading) return
  
  isPressed.value = true
  createRipple(event)
}

const handleMouseUp = () => {
  isPressed.value = false
}

const handleMouseLeave = () => {
  isPressed.value = false
}

// Create ripple effect
const createRipple = (event: MouseEvent) => {
  if (!buttonRef.value) return
  
  const rect = buttonRef.value.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2
  
  const ripple: Ripple = {
    id: rippleId++,
    x,
    y,
    scale: 'scale(0)',
    opacity: 0.3
  }
  
  ripples.value.push(ripple)
  
  // Animate ripple
  nextTick(() => {
    const currentRipple = ripples.value.find(r => r.id === ripple.id)
    if (currentRipple) {
      currentRipple.scale = 'scale(4)'
      currentRipple.opacity = 0
    }
  })
  
  // Remove ripple after animation
  setTimeout(() => {
    ripples.value = ripples.value.filter(r => r.id !== ripple.id)
  }, 600)
}

const handleClick = (event: MouseEvent) => {
  if (disabled || loading) return

  // Haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(50)
  }

  emit('click', event)
}
</script>