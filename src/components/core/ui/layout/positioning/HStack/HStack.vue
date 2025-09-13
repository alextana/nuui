<template>
	<div :class="stackClasses">
		<slot />
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import {
	getSpacingClass,
	getWidthClass,
	getHeightClass,
	getPaddingClass,
	SPACING_TOKENS,
	DEFAULT_SPACING,
} from '../../../tokens/spacing.js'
import {
	addConditionalClass,
	alignMap,
	justifyMap,
	alignValidator,
	justifyValidator,
	paddingValidator,
} from '../utility/stackUtils.js'

/**
 * HStack - Horizontal Stack Layout Component
 * @typedef {Object} HStackProps
 * @property {string} [spacing='base'] - Gap between items using design tokens: 'none', 'px', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl'
 * @property {string} [align='center'] - Cross-axis alignment: 'start', 'center', 'end', 'stretch', 'baseline'
 * @property {string} [justify='start'] - Main-axis alignment: 'start', 'center', 'end', 'between', 'around', 'evenly'
 * @property {string} [width='auto'] - Width: 'auto', 'full', 'fit', 'min', 'max' or custom Tailwind width class
 * @property {string} [height='auto'] - Height: 'auto', 'full', 'fit', 'min', 'max', 'screen' or custom Tailwind height class
 * @property {string} [padding='0'] - Internal padding (Tailwind spacing scale)
 * @property {boolean} [wrap=false] - Allow items to wrap to next line
 * @property {string} [className=''] - Additional CSS classes
 */

/** @type {HStackProps} */
const props = defineProps({
	spacing: {
		type: String,
		default: DEFAULT_SPACING,
		validator: (value) => SPACING_TOKENS.includes(value),
	},
	align: {
		type: String,
		default: 'center',
		validator: (value) => alignValidator(value, true),
	},
	justify: {
		type: String,
		default: 'start',
		validator: justifyValidator,
	},
	width: {
		type: String,
		default: 'auto',
	},
	height: {
		type: String,
		default: 'auto',
	},
	padding: {
		type: String,
		default: '0',
		validator: paddingValidator,
	},
	wrap: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: '',
	},
})

/**
 * Computed classes for the stack container
 * @returns {string} Combined Tailwind classes
 */
const stackClasses = computed(() => {
	const classes = ['flex', 'flex-row']

	// Wrap behavior
	if (props.wrap) {
		classes.push('flex-wrap')
	}

	// Gap/spacing
	if (props.spacing !== 'none') {
		const gapClass = getSpacingClass(props.spacing, 'gap')
		classes.push(gapClass)
	}

	// Cross-axis alignment (items-*)
	classes.push(alignMap[props.align])

	// Main-axis alignment (justify-*)
	classes.push(justifyMap[props.justify])

	// Conditional classes using factory function
	addConditionalClass(classes, props.width, 'auto', getWidthClass)
	addConditionalClass(classes, props.height, 'auto', getHeightClass)
	addConditionalClass(classes, props.padding, '0', getPaddingClass)

	// Additional classes
	if (props.className) {
		classes.push(props.className)
	}

	return twMerge(classes.join(' '))
})
</script>
