import ScreenView from '../ScreenView.vue'

export default {
	title: 'Core/UI/Layout/ScreenView',
	component: ScreenView,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'A full-screen animated container component with motion effects. Perfect for splash screens, overlays, or full-screen layouts.',
			},
		},
	},
	argTypes: {
		default: {
			control: { type: 'text' },
			description: 'Content to display inside the screen view',
		},
	},
}

// Default story
export const Default = {
	render: (args) => ({
		components: { ScreenView },
		setup() {
			return { args }
		},
		template: `
			<ScreenView>
				<div class="flex items-center justify-center h-full text-white text-2xl font-bold">
					Welcome to ScreenView
				</div>
			</ScreenView>
		`,
	}),
}

// With centered content
export const CenteredContent = {
	render: () => ({
		components: { ScreenView },
		template: `
			<ScreenView>
				<div class="flex flex-col items-center justify-center h-full text-white space-y-6">
					<h1 class="text-4xl font-bold">Full Screen Layout</h1>
					<p class="text-lg opacity-80">This is a centered content example</p>
					<button class="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
						Get Started
					</button>
				</div>
			</ScreenView>
		`,
	}),
}

// Loading screen example
export const LoadingScreen = {
	render: () => ({
		components: { ScreenView },
		template: `
			<ScreenView>
				<div class="flex flex-col items-center justify-center h-full text-white space-y-4">
					<div class="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
					<p class="text-xl">Loading...</p>
				</div>
			</ScreenView>
		`,
	}),
}

// Error screen example
export const ErrorScreen = {
	render: () => ({
		components: { ScreenView },
		template: `
			<ScreenView class="bg-black">
				<div class="flex flex-col items-center justify-center h-full text-white space-y-6">
					<div class="text-6xl mb-4">⚠️</div>
					<h1 class="text-3xl font-bold text-red-400">Something went wrong</h1>
					<p class="text-lg opacity-80 text-center max-w-md">
						We encountered an error while loading the content. Please try again.
					</p>
					<button class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
						Try Again
					</button>
				</div>
			</ScreenView>
		`,
	}),
}

// Dashboard layout example
export const DashboardLayout = {
	render: () => ({
		components: { ScreenView },
		template: `
			<ScreenView>
				<div class="h-full flex flex-col text-white">
					<!-- Header -->
					<header class="bg-gray-900 p-4 border-b border-gray-700">
						<h1 class="text-2xl font-bold">Dashboard</h1>
					</header>

					<!-- Main content -->
					<main class="flex-1 p-6 overflow-auto">
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div class="bg-gray-800 p-6 rounded-lg">
								<h3 class="text-lg font-semibold mb-2">Card 1</h3>
								<p class="opacity-80">Some content here</p>
							</div>
							<div class="bg-gray-800 p-6 rounded-lg">
								<h3 class="text-lg font-semibold mb-2">Card 2</h3>
								<p class="opacity-80">Some content here</p>
							</div>
							<div class="bg-gray-800 p-6 rounded-lg">
								<h3 class="text-lg font-semibold mb-2">Card 3</h3>
								<p class="opacity-80">Some content here</p>
							</div>
						</div>
					</main>
				</div>
			</ScreenView>
		`,
	}),
}

// Modal overlay example
export const ModalOverlay = {
	render: () => ({
		components: { ScreenView },
		template: `
			<ScreenView>
				<div class="flex items-center justify-center h-full bg-black bg-opacity-50">
					<div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-black">
						<h2 class="text-2xl font-bold mb-4">Modal Title</h2>
						<p class="mb-6 text-gray-600">
							This is an example of using ScreenView as a modal overlay background.
						</p>
						<div class="flex justify-end space-x-3">
							<button class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
								Cancel
							</button>
							<button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
								Confirm
							</button>
						</div>
					</div>
				</div>
			</ScreenView>
		`,
	}),
}
