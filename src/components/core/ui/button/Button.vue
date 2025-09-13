<template>
	<motion.button
		:theme="props.theme || buttonTheme"
		:type="props.type"
		:class="twMerge(props.theme?.root || theme.base.root)"
		ref="buttonRef"
		:animate="{
			boxShadow: `inset ${Math.max(-1, Math.min(1, relativeX / 20))}px ${Math.max(-1, Math.min(1, relativeY / 20))}px .5px rgba(255,255,255,0.7), inset ${Math.max(-1, Math.min(1, -relativeX / 20))}px ${Math.max(-1, Math.min(1, -relativeY / 20))}px 2px rgba(255,255,255,0.4)`,
			outlineWidth: '0px',
			outlineOffset: '2px',
		}"
		:transition="{ type: 'spring', stiffness: 300, damping: 30 }"
		:whileHover="{ scale: 1.05 }"
		:whilePress="{
			scale: 0.98,
		}"
		:whileFocus="{ outlineWidth: '2px', outlineOffset: '4px' }"
	>
		<div v-if="props.icon || 'icon' in slots" :class="!props.icon ? theme.base.icon : null">
			<Icon v-if="props.icon" :icon="props.icon" :class="theme.base.icon" />
			<slot v-else name="icon" />
		</div>
		<slot name="default"> </slot>
	</motion.button>
</template>

<script setup>
import buttonTheme from './theme.js'
import { useSlots, ref, computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { motion } from 'motion-v'
import { Icon } from '@iconify/vue'
import { useMouse } from '@vueuse/core'

// Component name for multi-word compliance
defineOptions({
	name: 'BaseButton',
})

const slots = useSlots()
const buttonRef = ref(null)

// Mouse position tracking with VueUse
const { x, y } = useMouse()

// Calculate relative position to button
const relativeX = computed(() => {
	if (buttonRef.value?.$el) {
		const rect = buttonRef.value.$el.getBoundingClientRect()
		return x.value - rect.left
	}
	return 0
})

const relativeY = computed(() => {
	if (buttonRef.value?.$el) {
		const rect = buttonRef.value.$el.getBoundingClientRect()
		return y.value - rect.top
	}
	return 0
})

const props = defineProps({
	variant: {
		type: String,
		default: 'primary',
	},
	type: {
		type: String,
		default: 'button',
	},
	theme: {
		type: Object,
		default: null,
	},
})

const theme = computed(() => {
	return {
		base: {
			root: twMerge(buttonTheme.base.root, buttonTheme.base.variants[props.variant]),
			icon: twMerge(buttonTheme.base.icon),
		},
	}
})
</script>
