<template>
  <component
    :is="isClickable ? 'button' : 'span'"
    :class="tagClasses"
    :tabindex="isClickable ? 0 : -1"
    :role="isClickable ? 'button' : null"
    :aria-pressed="(isClickable && pressed) ? 'true' : null"
    :disabled="disabled && isClickable"
    @click="handleClick"
    @keydown="handleKeydown"
    @keyup="handleKeyup"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <span :class="contentClasses">
      <!-- Left Icon Slot or Prop -->
      <slot name="icon-left" v-if="$slots['icon-left']"></slot>
      <component
        :is="iconLeft"
        v-else-if="iconLeft"
        :class="leftIconClasses"
      />

      <!-- Default Content Slot -->
      <slot>
        <span v-if="label">{{ label }}</span>
      </slot>

      <!-- Right Icon Slot or Prop -->
      <slot name="icon-right" v-if="$slots['icon-right']"></slot>
      <component
        :is="iconRight"
        v-else-if="iconRight"
        :class="rightIconClasses"
      />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs, ref, onMounted, onUnmounted, type Component } from 'vue';
import { twMerge } from 'tailwind-merge';
import {
  mergeTagTheme,
  type TagTheme,
  type TagVariant,
  type TagSize
} from './theme';

// Props interface
interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  label?: string;
  iconLeft?: Component | string;
  iconRight?: Component | string;
  disabled?: boolean;
  pressed?: boolean;
  customClasses?: string;
  theme?: TagTheme;
  clickable?: boolean;
}

// Props with defaults
const {
  variant = 'default',
  size = 'sm',
  label,
  iconLeft,
  iconRight,
  disabled = false,
  pressed = false,
  customClasses = '',
  theme,
  clickable
} = defineProps<TagProps>();

// Emits
const emit = defineEmits<{
  click: [event: MouseEvent];
}>()

// Computed theme
const mergedTheme = computed(() => mergeTagTheme(theme));

// Check if tag is clickable
const attrs = useAttrs();
const isClickable = computed(() => {
  // Check if clickable prop is explicitly set
  if (clickable !== undefined) return clickable;

  // Check if there are click event listeners
  return 'onClick' in attrs;
});

// Pressed state for keyboard and mouse interactions
const isPressed = ref(false);

// Keyboard focus detection
const isKeyboardFocused = ref(false);
let isUsingKeyboard = false;

// Track keyboard usage globally
const handleKeyDown = () => {
  isUsingKeyboard = true;
};

const handleGlobalMouseDown = () => {
  isUsingKeyboard = false;
};

const handleFocus = () => {
  isKeyboardFocused.value = isUsingKeyboard;
};

const handleBlur = () => {
  isKeyboardFocused.value = false;
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('mousedown', handleGlobalMouseDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('mousedown', handleGlobalMouseDown);
});

// Computed classes
const tagClasses = computed(() => {
  const theme = mergedTheme.value;
  
  // Base classes without focus styles
  const baseWithoutFocus = theme.root.base.replace(/focus:outline-none focus:ring-2 focus:ring-offset-2/g, '');
  
  const variantClasses = isClickable.value
    ? theme.root.variants[variant]
    : theme.static.variants[variant];
  const sizeClasses = theme.root.sizes[size];

  // Add pressed state classes when isPressed is true
  const pressedClasses = isPressed.value && isClickable.value ? getPressedClasses(variant) : '';
  
  // Conditional focus styles - only show when keyboard focused
  const focusStyles = isKeyboardFocused.value ? 'outline-none ring-2 ring-offset-2' : 'focus:outline-none';
  
  // Get focus ring color from variant
  const getFocusRingColor = () => {
    if (!isClickable.value) return '';
    const variantClass = variantClasses;
    if (variantClass.includes('focus:ring-gray-400')) return 'ring-gray-400';
    if (variantClass.includes('focus:ring-green-400')) return 'ring-green-400';
    if (variantClass.includes('focus:ring-blue-400')) return 'ring-blue-400';
    if (variantClass.includes('focus:ring-yellow-400')) return 'ring-yellow-400';
    if (variantClass.includes('focus:ring-red-400')) return 'ring-red-400';
    if (variantClass.includes('focus:ring-orange-400')) return 'ring-orange-400';
    return 'ring-gray-400'; // default
  };
  
  const focusRingColor = isKeyboardFocused.value ? getFocusRingColor() : '';
  
  // Remove focus ring from variant classes
  const cleanVariantClasses = isClickable.value 
    ? variantClasses.replace(/focus:ring-\w+-\d+/g, '')
    : variantClasses;

  return twMerge(
    baseWithoutFocus,
    cleanVariantClasses,
    sizeClasses,
    'rounded-full',
    focusStyles,
    focusRingColor,
    pressedClasses,
    customClasses
  );
});

// Get pressed state classes for each variant
const getPressedClasses = (variant: TagVariant): string => {
  const pressedStyles = {
    default: 'transform scale-[0.98] bg-gray-400 shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)]',
    success: 'transform scale-[0.98] bg-green-800 shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]',
    info: 'transform scale-[0.98] bg-blue-800 shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]',
    warning: 'transform scale-[0.98] bg-yellow-700 shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]',
    danger: 'transform scale-[0.98] bg-red-800 shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]',
    pending: 'transform scale-[0.98] bg-orange-800 shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]'
  };
  return pressedStyles[variant] || '';
};

const contentClasses = computed(() => {
  const theme = mergedTheme.value;
  return twMerge(theme.content.base);
});

const leftIconClasses = computed(() => {
  const theme = mergedTheme.value;
  return twMerge(
    theme.icon.base,
    theme.icon.sizes[size]
  );
});

const rightIconClasses = computed(() => {
  const theme = mergedTheme.value;
  return twMerge(
    theme.icon.base,
    theme.icon.sizes[size]
  );
});

// Event handlers
const handleClick = (event: MouseEvent) => {
  if (disabled || !isClickable.value) return;

  // Add haptic feedback for mobile devices
  if ('vibrate' in navigator) {
    navigator.vibrate(10);
  }

  emit('click', event);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (!isClickable.value || disabled) return;

  // Handle Enter and Space key presses for accessibility
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    isPressed.value = true;
    handleClick(event as unknown as MouseEvent);
    // Reset pressed state after a short delay
    setTimeout(() => {
      isPressed.value = false;
    }, 150);
  }
};

const handleKeyup = (event: KeyboardEvent) => {
  if (!isClickable.value || disabled) return;

  // Reset pressed state when space or enter is released
  if (event.key === 'Enter' || event.key === ' ') {
    isPressed.value = false;
  }
};

const handleMouseDown = () => {
  if (!isClickable.value || disabled) return;
  isPressed.value = true;
};

const handleMouseUp = () => {
  if (!isClickable.value || disabled) return;
  isPressed.value = false;
};

const handleMouseLeave = () => {
  if (!isClickable.value || disabled) return;
  isPressed.value = false;
};
</script>
