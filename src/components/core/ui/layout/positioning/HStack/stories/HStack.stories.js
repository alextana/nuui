import HStack from '../HStack.vue'

export default {
	title: 'Layout/HStack',
	component: HStack,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		spacing: {
			control: { type: 'select' },
			options: ['none', 'px', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
		},
		align: {
			control: { type: 'select' },
			options: ['start', 'center', 'end', 'stretch', 'baseline'],
		},
		justify: {
			control: { type: 'select' },
			options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
		},
		width: {
			control: { type: 'select' },
			options: ['auto', 'full', 'fit', 'min', 'max'],
		},
		height: {
			control: { type: 'select' },
			options: ['auto', 'full', 'fit', 'min', 'max', 'screen'],
		},
		padding: {
			control: { type: 'select' },
			options: ['0', '2', '4', '6', '8', '12', '16'],
		},
		wrap: {
			control: { type: 'boolean' },
		},
	},
}

const Template = (args) => ({
	components: { HStack },
	setup() {
		return { args }
	},
	template: `
		<HStack v-bind="args" class="border border-gray-300 min-w-[400px]">
			<div class="bg-blue-500 text-white p-4 rounded">Item 1</div>
			<div class="bg-green-500 text-white p-4 rounded">Item 2</div>
			<div class="bg-red-500 text-white p-4 rounded">Item 3</div>
		</HStack>
	`,
})

const WrapTemplate = (args) => ({
	components: { HStack },
	setup() {
		return { args }
	},
	template: `
		<HStack v-bind="args" class="border border-gray-300 w-[300px]">
			<div class="bg-blue-500 text-white p-4 rounded whitespace-nowrap">Long Item 1</div>
			<div class="bg-green-500 text-white p-4 rounded whitespace-nowrap">Long Item 2</div>
			<div class="bg-red-500 text-white p-4 rounded whitespace-nowrap">Long Item 3</div>
			<div class="bg-purple-500 text-white p-4 rounded whitespace-nowrap">Long Item 4</div>
		</HStack>
	`,
})

export const Default = Template.bind({})
Default.args = {
	spacing: 'base',
	align: 'center',
	justify: 'start',
}

export const Centered = Template.bind({})
Centered.args = {
	spacing: '2xl',
	align: 'center',
	justify: 'center',
	width: 'full',
}

export const SpaceBetween = Template.bind({})
SpaceBetween.args = {
	spacing: 'none',
	align: 'center',
	justify: 'between',
	width: 'full',
}

export const WithPadding = Template.bind({})
WithPadding.args = {
	spacing: 'base',
	align: 'center',
	justify: 'start',
	padding: '8',
	width: 'full',
}

export const TightSpacing = Template.bind({})
TightSpacing.args = {
	spacing: 'xs',
	align: 'center',
	justify: 'start',
}

export const WideSpacing = Template.bind({})
WideSpacing.args = {
	spacing: '5xl',
	align: 'center',
	justify: 'start',
}

export const WithWrap = WrapTemplate.bind({})
WithWrap.args = {
	spacing: 'base',
	align: 'center',
	justify: 'start',
	wrap: true,
}

export const AlignBaseline = (args) => ({
	components: { HStack },
	setup() {
		return { args }
	},
	template: `
		<HStack v-bind="args" class="border border-gray-300">
			<div class="bg-blue-500 text-white p-2 rounded text-sm">Small</div>
			<div class="bg-green-500 text-white p-4 rounded text-lg">Medium</div>
			<div class="bg-red-500 text-white p-6 rounded text-xl">Large</div>
		</HStack>
	`,
})
AlignBaseline.args = {
	spacing: 'base',
	align: 'baseline',
	justify: 'start',
}
