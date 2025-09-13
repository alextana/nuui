import { computed, ref } from 'vue'
import { useMouse } from '@vueuse/core'

// Global shared mouse state
const { x: globalMouseX, y: globalMouseY } = useMouse()
const registeredElements = ref(new Set())

// Global function to calculate styles for any element
function calculateDynamicStyles(elementRef, options = {}) {
	const {
		borderRadius = '9999px !important',
		shadowIntensity = 3,
		shadowIntensity2 = 1.5,
		defaultStyles = {
			'--gradient-angle': '45deg',
			'--shadow-x': '0px',
			'--shadow-y': '-2px',
			'--shadow-x2': '0px',
			'--shadow-y2': '-1px',
		},
	} = options

	if (!elementRef.value) {
		return {
			borderRadius,
			...defaultStyles,
		}
	}

	const rect = elementRef.value.getBoundingClientRect()
	// Convert element viewport position to page coordinates
	const centerX = rect.left + rect.width / 2 + window.pageXOffset
	const centerY = rect.top + rect.height / 2 + window.pageYOffset

	// useMouse() provides page coordinates by default, so no conversion needed
	const deltaX = globalMouseX.value - centerX
	const deltaY = globalMouseY.value - centerY
	const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

	// Calculate shadow offset based on mouse position (inverted for light source effect)
	const shadowX = Math.cos((angle * Math.PI) / 180) * shadowIntensity
	const shadowY = Math.sin((angle * Math.PI) / 180) * shadowIntensity

	// Calculate opposite rotation for second shadow (smaller, brighter)
	const oppositeAngle = angle + 180
	const shadowX2 = Math.cos((oppositeAngle * Math.PI) / 180) * shadowIntensity2
	const shadowY2 = Math.sin((oppositeAngle * Math.PI) / 180) * shadowIntensity2

	return {
		borderRadius,
		'--gradient-angle': `${angle + 180}deg`,
		'--shadow-x': `${-shadowX}px`,
		'--shadow-y': `${-shadowY}px`,
		'--shadow-x2': `${-shadowX2}px`,
		'--shadow-y2': `${-shadowY2}px`,
	}
}

export function useMouseDynamicStyles(elementRef, options = {}) {
	// Register this element for global updates
	registeredElements.value.add(elementRef)

	const dynamicStyles = computed(() => {
		return calculateDynamicStyles(elementRef, options)
	})

	return {
		dynamicStyles,
	}
}
