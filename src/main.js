import { createApp } from 'vue'
import './style.css'
import { Button } from './index.js'

const app = createApp({
	template: `
		<div class="min-h-screen bg-gray-100 flex items-center justify-center gap-4">
			<NuuiButton>Hover me</NuuiButton>
			<NuuiButton>
				<template #icon>🚀</template>
				With Icon
			</NuuiButton>
		</div>
	`,
})

app.component('NuuiButton', Button)
app.mount('#app')
