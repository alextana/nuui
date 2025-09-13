import VStack from '../VStack.vue'

export default {
	title: 'Layout/VStack',
	component: VStack,
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
			options: ['start', 'center', 'end', 'stretch'],
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
	},
}

const Template = (args) => ({
	components: { VStack },
	setup() {
		return { args }
	},
	template: `
		<VStack v-bind="args" class="border border-gray-300 min-h-[200px]">
			<div class="bg-blue-500 text-white p-4 rounded">Item 1</div>
			<div class="bg-green-500 text-white p-4 rounded">Item 2</div>
			<div class="bg-red-500 text-white p-4 rounded">Item 3</div>
		</VStack>
	`,
})

export const Default = Template.bind({})
Default.args = {
	spacing: 'base',
	align: 'stretch',
	justify: 'start',
}

export const Centered = Template.bind({})
Centered.args = {
	spacing: '2xl',
	align: 'center',
	justify: 'center',
	height: 'screen',
}

export const SpaceBetween = Template.bind({})
SpaceBetween.args = {
	spacing: 'none',
	align: 'stretch',
	justify: 'between',
	height: '96',
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
	align: 'start',
	justify: 'start',
}

export const WideSpacing = Template.bind({})
WideSpacing.args = {
	spacing: '5xl',
	align: 'center',
	justify: 'start',
}
