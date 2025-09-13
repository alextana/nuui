/**
 * Spacing Design Tokens
 * Consistent spacing values used throughout the application
 * Based on a 4px base unit with semantic naming
 */

/**
 * Base spacing unit (4px)
 * All spacing values are multiples of this base unit
 */
export const BASE_UNIT = 4

/**
 * Spacing scale following 8pt grid system
 * Values are in pixels and correspond to Tailwind spacing classes
 */
export const SPACING_SCALE = {
	// No spacing
	none: 0,

	// Micro spacing (1-2px)
	px: 1,

	// Extra small spacing (2-8px)
	xs: 2, // 0.5 in Tailwind
	sm: 4, // 1 in Tailwind

	// Small spacing (8-16px)
	base: 8, // 2 in Tailwind
	md: 12, // 3 in Tailwind

	// Medium spacing (16-32px)
	lg: 16, // 4 in Tailwind
	xl: 20, // 5 in Tailwind
	'2xl': 24, // 6 in Tailwind

	// Large spacing (32-64px)
	'3xl': 32, // 8 in Tailwind
	'4xl': 40, // 10 in Tailwind
	'5xl': 48, // 12 in Tailwind

	// Extra large spacing (64px+)
	'6xl': 64, // 16 in Tailwind
	'7xl': 80, // 20 in Tailwind
	'8xl': 96, // 24 in Tailwind
	'9xl': 128, // 32 in Tailwind
	'10xl': 160, // 40 in Tailwind
}

/**
 * Semantic spacing tokens for specific use cases
 * These provide meaning and context to spacing decisions
 */
export const SEMANTIC_SPACING = {
	// Component internal spacing
	component: {
		padding: {
			tight: SPACING_SCALE.xs, // 2px - Very tight padding
			compact: SPACING_SCALE.sm, // 4px - Compact padding
			comfortable: SPACING_SCALE.base, // 8px - Standard padding
			loose: SPACING_SCALE.md, // 12px - Loose padding
			spacious: SPACING_SCALE.lg, // 16px - Very spacious padding
		},
		gap: {
			tight: SPACING_SCALE.xs, // 2px - Tight gaps
			compact: SPACING_SCALE.sm, // 4px - Compact gaps
			comfortable: SPACING_SCALE.base, // 8px - Standard gaps
			loose: SPACING_SCALE.md, // 12px - Loose gaps
			spacious: SPACING_SCALE.lg, // 16px - Spacious gaps
		},
	},

	// Layout spacing
	layout: {
		section: SPACING_SCALE['3xl'], // 32px - Between major sections
		container: SPACING_SCALE.lg, // 16px - Container padding
		grid: SPACING_SCALE.xl, // 20px - Grid gaps
		card: SPACING_SCALE.lg, // 16px - Card spacing
	},

	// Typography spacing
	typography: {
		paragraph: SPACING_SCALE.base, // 8px - Between paragraphs
		heading: SPACING_SCALE.md, // 12px - Below headings
		list: SPACING_SCALE.xs, // 2px - Between list items
	},

	// Interactive elements
	interactive: {
		button: SPACING_SCALE.base, // 8px - Button padding
		input: SPACING_SCALE.base, // 8px - Input padding
		form: SPACING_SCALE.lg, // 16px - Between form fields
	},
}

/**
 * Tailwind class mapping for spacing tokens
 * Maps our semantic tokens to Tailwind utility classes
 */
export const TAILWIND_SPACING = {
	none: '0',
	px: 'px',
	xs: '0.5',
	sm: '1',
	base: '2',
	md: '3',
	lg: '4',
	xl: '5',
	'2xl': '6',
	'3xl': '8',
	'4xl': '10',
	'5xl': '12',
	'6xl': '16',
	'7xl': '20',
	'8xl': '24',
	'9xl': '32',
	'10xl': '40',
}

/**
 * Complete class mappings for width utilities
 */
export const WIDTH_CLASSES = {
	auto: '',
	full: 'w-full',
	fit: 'w-fit',
	min: 'w-min',
	max: 'w-max',
	// Specific widths
	0: 'w-0',
	1: 'w-1',
	2: 'w-2',
	3: 'w-3',
	4: 'w-4',
	5: 'w-5',
	6: 'w-6',
	8: 'w-8',
	10: 'w-10',
	12: 'w-12',
	16: 'w-16',
	20: 'w-20',
	24: 'w-24',
	32: 'w-32',
	40: 'w-40',
	48: 'w-48',
	56: 'w-56',
	64: 'w-64',
	72: 'w-72',
	80: 'w-80',
	96: 'w-96',
}

/**
 * Complete class mappings for height utilities
 */
export const HEIGHT_CLASSES = {
	auto: '',
	full: 'h-full',
	fit: 'h-fit',
	min: 'h-min',
	max: 'h-max',
	screen: 'h-screen',
	// Specific heights
	0: 'h-0',
	1: 'h-1',
	2: 'h-2',
	3: 'h-3',
	4: 'h-4',
	5: 'h-5',
	6: 'h-6',
	8: 'h-8',
	10: 'h-10',
	12: 'h-12',
	16: 'h-16',
	20: 'h-20',
	24: 'h-24',
	32: 'h-32',
	40: 'h-40',
	48: 'h-48',
	56: 'h-56',
	64: 'h-64',
	72: 'h-72',
	80: 'h-80',
	96: 'h-96',
}

/**
 * Complete class mappings for padding utilities
 */
export const PADDING_CLASSES = {
	0: '',
	0.5: 'p-0.5',
	1: 'p-1',
	1.5: 'p-1.5',
	2: 'p-2',
	2.5: 'p-2.5',
	3: 'p-3',
	3.5: 'p-3.5',
	4: 'p-4',
	5: 'p-5',
	6: 'p-6',
	7: 'p-7',
	8: 'p-8',
	9: 'p-9',
	10: 'p-10',
	11: 'p-11',
	12: 'p-12',
	14: 'p-14',
	16: 'p-16',
	20: 'p-20',
	24: 'p-24',
	28: 'p-28',
	32: 'p-32',
	36: 'p-36',
	40: 'p-40',
	44: 'p-44',
	48: 'p-48',
	52: 'p-52',
	56: 'p-56',
	60: 'p-60',
	64: 'p-64',
	72: 'p-72',
	80: 'p-80',
	96: 'p-96',
}

/**
 * Static class mappings for all spacing combinations
 * This ensures Tailwind can detect all classes during build
 */
export const SPACING_CLASS_MAP = {
	// Gap classes
	gap: {
		none: 'gap-0',
		px: 'gap-px',
		xs: 'gap-0.5',
		sm: 'gap-1',
		base: 'gap-2',
		md: 'gap-3',
		lg: 'gap-4',
		xl: 'gap-5',
		'2xl': 'gap-6',
		'3xl': 'gap-8',
		'4xl': 'gap-10',
		'5xl': 'gap-12',
		'6xl': 'gap-16',
		'7xl': 'gap-20',
		'8xl': 'gap-24',
		'9xl': 'gap-32',
		'10xl': 'gap-40',
	},
	// Padding classes
	p: {
		none: 'p-0',
		px: 'p-px',
		xs: 'p-0.5',
		sm: 'p-1',
		base: 'p-2',
		md: 'p-3',
		lg: 'p-4',
		xl: 'p-5',
		'2xl': 'p-6',
		'3xl': 'p-8',
		'4xl': 'p-10',
		'5xl': 'p-12',
		'6xl': 'p-16',
		'7xl': 'p-20',
		'8xl': 'p-24',
		'9xl': 'p-32',
		'10xl': 'p-40',
	},
	// Padding X classes
	px: {
		none: 'px-0',
		px: 'px-px',
		xs: 'px-0.5',
		sm: 'px-1',
		base: 'px-2',
		md: 'px-3',
		lg: 'px-4',
		xl: 'px-5',
		'2xl': 'px-6',
		'3xl': 'px-8',
		'4xl': 'px-10',
		'5xl': 'px-12',
		'6xl': 'px-16',
		'7xl': 'px-20',
		'8xl': 'px-24',
		'9xl': 'px-32',
		'10xl': 'px-40',
	},
	// Padding Y classes
	py: {
		none: 'py-0',
		px: 'py-px',
		xs: 'py-0.5',
		sm: 'py-1',
		base: 'py-2',
		md: 'py-3',
		lg: 'py-4',
		xl: 'py-5',
		'2xl': 'py-6',
		'3xl': 'py-8',
		'4xl': 'py-10',
		'5xl': 'py-12',
		'6xl': 'py-16',
		'7xl': 'py-20',
		'8xl': 'py-24',
		'9xl': 'py-32',
		'10xl': 'py-40',
	},
	// Padding Top classes
	pt: {
		none: 'pt-0',
		px: 'pt-px',
		xs: 'pt-0.5',
		sm: 'pt-1',
		base: 'pt-2',
		md: 'pt-3',
		lg: 'pt-4',
		xl: 'pt-5',
		'2xl': 'pt-6',
		'3xl': 'pt-8',
		'4xl': 'pt-10',
		'5xl': 'pt-12',
		'6xl': 'pt-16',
		'7xl': 'pt-20',
		'8xl': 'pt-24',
		'9xl': 'pt-32',
		'10xl': 'pt-40',
	},
	// Padding Right classes
	pr: {
		none: 'pr-0',
		px: 'pr-px',
		xs: 'pr-0.5',
		sm: 'pr-1',
		base: 'pr-2',
		md: 'pr-3',
		lg: 'pr-4',
		xl: 'pr-5',
		'2xl': 'pr-6',
		'3xl': 'pr-8',
		'4xl': 'pr-10',
		'5xl': 'pr-12',
		'6xl': 'pr-16',
		'7xl': 'pr-20',
		'8xl': 'pr-24',
		'9xl': 'pr-32',
		'10xl': 'pr-40',
	},
	// Padding Bottom classes
	pb: {
		none: 'pb-0',
		px: 'pb-px',
		xs: 'pb-0.5',
		sm: 'pb-1',
		base: 'pb-2',
		md: 'pb-3',
		lg: 'pb-4',
		xl: 'pb-5',
		'2xl': 'pb-6',
		'3xl': 'pb-8',
		'4xl': 'pb-10',
		'5xl': 'pb-12',
		'6xl': 'pb-16',
		'7xl': 'pb-20',
		'8xl': 'pb-24',
		'9xl': 'pb-32',
		'10xl': 'pb-40',
	},
	// Padding Left classes
	pl: {
		none: 'pl-0',
		px: 'pl-px',
		xs: 'pl-0.5',
		sm: 'pl-1',
		base: 'pl-2',
		md: 'pl-3',
		lg: 'pl-4',
		xl: 'pl-5',
		'2xl': 'pl-6',
		'3xl': 'pl-8',
		'4xl': 'pl-10',
		'5xl': 'pl-12',
		'6xl': 'pl-16',
		'7xl': 'pl-20',
		'8xl': 'pl-24',
		'9xl': 'pl-32',
		'10xl': 'pl-40',
	},
	// Margin classes
	m: {
		none: 'm-0',
		px: 'm-px',
		xs: 'm-0.5',
		sm: 'm-1',
		base: 'm-2',
		md: 'm-3',
		lg: 'm-4',
		xl: 'm-5',
		'2xl': 'm-6',
		'3xl': 'm-8',
		'4xl': 'm-10',
		'5xl': 'm-12',
		'6xl': 'm-16',
		'7xl': 'm-20',
		'8xl': 'm-24',
		'9xl': 'm-32',
		'10xl': 'm-40',
	},
	// Margin X classes
	mx: {
		none: 'mx-0',
		px: 'mx-px',
		xs: 'mx-0.5',
		sm: 'mx-1',
		base: 'mx-2',
		md: 'mx-3',
		lg: 'mx-4',
		xl: 'mx-5',
		'2xl': 'mx-6',
		'3xl': 'mx-8',
		'4xl': 'mx-10',
		'5xl': 'mx-12',
		'6xl': 'mx-16',
		'7xl': 'mx-20',
		'8xl': 'mx-24',
		'9xl': 'mx-32',
		'10xl': 'mx-40',
	},
	// Margin Y classes
	my: {
		none: 'my-0',
		px: 'my-px',
		xs: 'my-0.5',
		sm: 'my-1',
		base: 'my-2',
		md: 'my-3',
		lg: 'my-4',
		xl: 'my-5',
		'2xl': 'my-6',
		'3xl': 'my-8',
		'4xl': 'my-10',
		'5xl': 'my-12',
		'6xl': 'my-16',
		'7xl': 'my-20',
		'8xl': 'my-24',
		'9xl': 'my-32',
		'10xl': 'my-40',
	},
	// Margin Top classes
	mt: {
		none: 'mt-0',
		px: 'mt-px',
		xs: 'mt-0.5',
		sm: 'mt-1',
		base: 'mt-2',
		md: 'mt-3',
		lg: 'mt-4',
		xl: 'mt-5',
		'2xl': 'mt-6',
		'3xl': 'mt-8',
		'4xl': 'mt-10',
		'5xl': 'mt-12',
		'6xl': 'mt-16',
		'7xl': 'mt-20',
		'8xl': 'mt-24',
		'9xl': 'mt-32',
		'10xl': 'mt-40',
	},
	// Margin Right classes
	mr: {
		none: 'mr-0',
		px: 'mr-px',
		xs: 'mr-0.5',
		sm: 'mr-1',
		base: 'mr-2',
		md: 'mr-3',
		lg: 'mr-4',
		xl: 'mr-5',
		'2xl': 'mr-6',
		'3xl': 'mr-8',
		'4xl': 'mr-10',
		'5xl': 'mr-12',
		'6xl': 'mr-16',
		'7xl': 'mr-20',
		'8xl': 'mr-24',
		'9xl': 'mr-32',
		'10xl': 'mr-40',
	},
	// Margin Bottom classes
	mb: {
		none: 'mb-0',
		px: 'mb-px',
		xs: 'mb-0.5',
		sm: 'mb-1',
		base: 'mb-2',
		md: 'mb-3',
		lg: 'mb-4',
		xl: 'mb-5',
		'2xl': 'mb-6',
		'3xl': 'mb-8',
		'4xl': 'mb-10',
		'5xl': 'mb-12',
		'6xl': 'mb-16',
		'7xl': 'mb-20',
		'8xl': 'mb-24',
		'9xl': 'mb-32',
		'10xl': 'mb-40',
	},
	// Margin Left classes
	ml: {
		none: 'ml-0',
		px: 'ml-px',
		xs: 'ml-0.5',
		sm: 'ml-1',
		base: 'ml-2',
		md: 'ml-3',
		lg: 'ml-4',
		xl: 'ml-5',
		'2xl': 'ml-6',
		'3xl': 'ml-8',
		'4xl': 'ml-10',
		'5xl': 'ml-12',
		'6xl': 'ml-16',
		'7xl': 'ml-20',
		'8xl': 'ml-24',
		'9xl': 'ml-32',
		'10xl': 'ml-40',
	},
}

/**
 * Helper function to get spacing class using static mappings
 * @param {string} token - Spacing token key
 * @param {string} type - Type of spacing (gap, p, m, etc.)
 * @returns {string} Tailwind class
 */
export function getSpacingClass(token, type = 'gap') {
	const typeMap = SPACING_CLASS_MAP[type]
	if (!typeMap || !typeMap[token]) {
		return type === 'gap' ? 'gap-0' : `${type}-0`
	}
	return typeMap[token]
}

/**
 * Helper function to get width class
 * @param {string} width - Width value
 * @returns {string} Tailwind width class
 */
export function getWidthClass(width) {
	return WIDTH_CLASSES[width] || ''
}

/**
 * Helper function to get height class
 * @param {string} height - Height value
 * @returns {string} Tailwind height class
 */
export function getHeightClass(height) {
	return HEIGHT_CLASSES[height] || ''
}

/**
 * Helper function to get padding class
 * @param {string} padding - Padding value
 * @returns {string} Tailwind padding class
 */
export function getPaddingClass(padding) {
	return PADDING_CLASSES[padding] || ''
}

/**
 * Helper function to get pixel value for spacing token
 * @param {string} token - Spacing token key
 * @returns {number} Pixel value
 */
export function getSpacingValue(token) {
	const value = SPACING_SCALE[token]
	if (value === undefined) {
		return 0
	}
	return value
}

/**
 * Available spacing token keys for validation
 */
export const SPACING_TOKENS = Object.keys(SPACING_SCALE)

/**
 * Default spacing token for components
 */
export const DEFAULT_SPACING = 'base'
