import SpacingBox from '../SpacingBox.vue'
import Button from '../../../../button/Button.vue';

export default {
	title: 'Layout/SpacingBox',
	component: SpacingBox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: [
				'none',
				'px',
				'xs',
				'sm',
				'base',
				'md',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl',
				'10xl',
			],
		},
		type: {
			control: { type: 'select' },
			options: ['padding', 'margin', 'gap'],
		},
		direction: {
			control: { type: 'select' },
			options: ['all', 'x', 'y', 't', 'r', 'b', 'l'],
		},
	},
}

const Template = (args) => ({
	components: { SpacingBox, Button },
	setup() {
		return { args }
	},
	template: `
		<div class="border border-gray-300 bg-gray-50">
			<SpacingBox v-bind="args" class="bg-blue-100 border border-blue-300">
				<Button>{{ args.type }} spacing</Button>
			</SpacingBox>
		</div>
	`,
})

const GapTemplate = (args) => ({
	components: { SpacingBox, Button },
	setup() {
		return { args }
	},
	template: `
		<SpacingBox v-bind="args" class="flex flex-col border border-gray-300">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</SpacingBox>
	`,
})

const ShowcaseTemplate = (args) => ({
	components: { SpacingBox, Button },
	setup() {
		return { args }
	},
	template: `
		<div class="space-y-4">
			<div class="text-sm font-medium text-gray-700">Spacing Size: {{ args.size }}</div>
			<div class="border border-gray-300 bg-gray-50 inline-block">
				<SpacingBox v-bind="args" class="bg-blue-100 border border-blue-300">
					<Button>Sample Button</Button>
				</SpacingBox>
			</div>
		</div>
	`,
})

export const Default = Template.bind({})
Default.args = {
	size: 'base',
	type: 'padding',
	direction: 'all',
}

export const WithMargin = Template.bind({})
WithMargin.args = {
	size: 'lg',
	type: 'margin',
	direction: 'all',
}

export const WithGap = GapTemplate.bind({})
WithGap.args = {
	size: 'md',
	type: 'gap',
	direction: 'all',
}

export const DirectionalPadding = Template.bind({})
DirectionalPadding.args = {
	size: 'xl',
	type: 'padding',
	direction: 'x',
}

export const TightSpacing = ShowcaseTemplate.bind({})
TightSpacing.args = {
	size: 'xs',
	type: 'padding',
	direction: 'all',
}

export const ComfortableSpacing = ShowcaseTemplate.bind({})
ComfortableSpacing.args = {
	size: 'base',
	type: 'padding',
	direction: 'all',
}

export const LooseSpacing = ShowcaseTemplate.bind({})
LooseSpacing.args = {
	size: 'lg',
	type: 'padding',
	direction: 'all',
}

export const SpaciousSpacing = ShowcaseTemplate.bind({})
SpaciousSpacing.args = {
	size: '2xl',
	type: 'padding',
	direction: 'all',
}

export const ExtraLargeSpacing = ShowcaseTemplate.bind({})
ExtraLargeSpacing.args = {
	size: '5xl',
	type: 'padding',
	direction: 'all',
}

// Spacing Scale Showcase
export const SpacingScale = () => ({
	components: { SpacingBox },
	template: `
		<div class="space-y-4">
			<h3 class="text-lg font-semibold mb-4">Spacing Scale Showcase</h3>
			<div class="grid grid-cols-1 gap-4">
				<div v-for="size in sizes" :key="size" class="flex items-center space-x-4">
					<div class="w-16 text-sm font-mono">{{ size }}</div>
					<div class="border border-gray-300 bg-gray-50">
						<SpacingBox :size="size" type="padding" class="bg-blue-100 border border-blue-300">
							<div class="bg-blue-500 text-white px-2 py-1 rounded text-xs">
								Content
							</div>
						</SpacingBox>
					</div>
				</div>
			</div>
		</div>
	`,
	data() {
		return {
			sizes: ['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
		}
	},
})
