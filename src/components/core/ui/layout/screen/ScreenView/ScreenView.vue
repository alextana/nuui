<template>
	<motion.div
		:initial="{ opacity: 0, scale: 0.85, borderRadius: '24px' }"
		:animate="{ opacity: 1, scale: 1, borderRadius: '0px' }"
		:transition="{
			type: 'spring',
			damping: 25,
			stiffness: 280,
			mass: 0.9,
			opacity: { duration: 0.2, ease: 'easeOut' },
			borderRadius: { duration: 0.6, delay: 0.05, ease: 'easeOut' },
		}"
		class="w-screen h-screen overflow-hidden"
	>
		<slot />
	</motion.div>
</template>

<script setup>
import { motion } from 'motion-v'
</script>
