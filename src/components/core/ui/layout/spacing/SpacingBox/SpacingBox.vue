<template>
	<div :class="spacingClasses">
		<slot />
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { getSpacingClass, SPACING_TOKENS, DEFAULT_SPACING } from '../../../tokens/spacing.js'

/**
 * SpacingBox - Consistent spacing component using design tokens
 * @typedef {Object} SpacingProps
 * @property {string} [size='base'] - Spacing size token: 'none', 'px', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl'
 * @property {string} [type='padding'] - Spacing type: 'padding', 'margin', 'gap'
 * @property {string} [direction='all'] - Spacing direction: 'all', 'x', 'y', 't', 'r', 'b', 'l'
 * @property {string} [className=''] - Additional CSS classes
 */

/** @type {SpacingProps} */
const props = defineProps({
	size: {
		type: String,
		default: DEFAULT_SPACING,
		validator: (value) => SPACING_TOKENS.includes(value),
	},
	type: {
		type: String,
		default: 'padding',
		validator: (value) => ['padding', 'margin', 'gap'].includes(value),
	},
	direction: {
		type: String,
		default: 'all',
		validator: (value) => ['all', 'x', 'y', 't', 'r', 'b', 'l'].includes(value),
	},
	className: {
		type: String,
		default: '',
	},
})

/**
 * Computed classes for spacing
 * @returns {string} Combined Tailwind classes
 */
const spacingClasses = computed(() => {
	const classes = []

	// Get the base spacing class prefix
	let prefix = ''
	switch (props.type) {
		case 'padding':
			prefix = 'p'
			break
		case 'margin':
			prefix = 'm'
			break
		case 'gap':
			prefix = 'gap'
			break
	}

	// Add direction modifier
	if (props.direction !== 'all' && props.type !== 'gap') {
		prefix += props.direction
	}

	// Get the spacing class
	const spacingClass = getSpacingClass(props.size, prefix)
	classes.push(spacingClass)

	// Add additional classes
	if (props.className) {
		classes.push(props.className)
	}

	return classes.join(' ')
})
</script>
