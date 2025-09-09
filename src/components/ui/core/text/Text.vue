<template>
  <component
    :is="as"
    :id="id"
    :class="textClasses"
  >
    <slot>
      {{ children }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import {
  mergeTextTheme,
  type TextTheme,
  type TextVariant,
  type TextTone,
  type TextAlignment,
  type TextFontWeight,
  type TextDecoration
} from './theme'

// Props interface
interface TextProps {
  /** The HTML element to render */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'em' | 'small' | 'mark' | 'del' | 'ins' | 'sub' | 'sup' | 'code' | 'kbd' | 'samp' | 'var' | 'time' | 'abbr' | 'dfn' | 'q' | 'cite' | 'blockquote' | 'pre' | 'address' | 'dt' | 'dd' | 'legend'
  /** Typography variant */
  variant?: TextVariant
  /** Text tone/color */
  tone?: TextTone
  /** Text alignment */
  alignment?: TextAlignment
  /** Font weight override */
  fontWeight?: TextFontWeight
  /** Text decoration */
  textDecorationLine?: TextDecoration
  /** Text content when not using slot */
  children?: string
  /** HTML id attribute */
  id?: string
  /** Prevent text from overflowing */
  breakWord?: boolean
  /** Truncate text with ellipsis */
  truncate?: boolean
  /** Use monospace font for numeric content */
  numeric?: boolean
  /** Visually hide the text (for screen readers) */
  visuallyHidden?: boolean
  /** Custom CSS classes */
  customClasses?: string
  /** Custom theme */
  theme?: TextTheme
}

// Props with defaults
const {
  as = 'p',
  variant = 'bodyMd',
  tone = 'base',
  alignment,
  fontWeight,
  textDecorationLine,
  children,
  id,
  breakWord = false,
  truncate = false,
  numeric = false,
  visuallyHidden = false,
  customClasses = '',
  theme
} = defineProps<TextProps>()

// Computed theme
const mergedTheme = computed(() => mergeTextTheme(theme))

// Computed classes
const textClasses = computed(() => {
  const themeData = mergedTheme.value
  
  const baseClasses = themeData.root.base
  const variantClasses = themeData.root.variants[variant]
  const toneClasses = themeData.root.tones[tone]
  const alignmentClasses = alignment ? themeData.root.alignments[alignment] : ''
  const fontWeightClasses = fontWeight ? themeData.root.fontWeights[fontWeight] : ''
  const decorationClasses = textDecorationLine ? themeData.root.decorations[textDecorationLine] : ''
  
  // Utility classes
  const breakWordClasses = breakWord ? 'break-words' : ''
  const truncateClasses = truncate ? 'truncate' : ''
  const numericClasses = numeric ? 'font-mono tabular-nums' : ''
  const visuallyHiddenClasses = visuallyHidden ? 'sr-only' : ''
  
  return twMerge(
    baseClasses,
    variantClasses,
    toneClasses,
    alignmentClasses,
    fontWeightClasses,
    decorationClasses,
    breakWordClasses,
    truncateClasses,
    numericClasses,
    visuallyHiddenClasses,
    customClasses
  )
})
</script>