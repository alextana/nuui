import Button from '../Button.vue'
import { Icon } from '@iconify/vue'

export default {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		theme: {
			control: { type: 'object' },
			description: 'Theme object for styling the button',
		},
		type: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset'],
			description: 'HTML button type',
		},
	},
}

export const Default = {
	args: {
		type: 'button',
	},
	render: (args) => ({
		components: { Button, Icon },
		setup() {
			return { args }
		},
		template: `
			<div class="box relative flex items-center gap-2  rounded-2xl p-4">
				<Button v-bind="args">
					<template #icon>
						<Icon icon="material-symbols:zoom-in" />
					</template>
					Some call to action
				</Button>
				<Button variant="secondary">
					<template #icon>
						<Icon icon="material-symbols:zoom-in" />
					</template>
				</Button>
			</div>
    `,
	}),
}

export const WithIcon = {
	args: {
		type: 'button',
	},
	render: (args) => ({
		components: { Button, Icon },
		setup() {
			return { args }
		},
		template: `
			<div class="flex items-center gap-2">
				<Button v-bind="args">
					<template #icon>
						<Icon icon="carbon:clean" />
					</template>
					Button with Icon
				</Button>
				<Button v-bind="args" variant="secondary">
					<template #icon>
						<Icon icon="carbon:clean" />
					</template>
					Button with Icon
				</Button>
			</div>
    `,
	}),
}

export const IconOnly = {
	args: {
		type: 'button',
	},
	render: (args) => ({
		components: { Button, Icon },
		setup() {
			return { args }
		},
		template: `
		<div class="flex items-center gap-2">
      <Button v-bind="args">
				<template #icon>
					<Icon icon="carbon:face-neutral" />
				</template>
      </Button>
			<Button v-bind="args" variant="secondary">
				<template #icon>
					<Icon icon="carbon:face-neutral" />
				</template>
      </Button>
		</div>
    `,
	}),
}
