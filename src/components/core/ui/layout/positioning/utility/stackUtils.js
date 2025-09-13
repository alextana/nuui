/**
 * Shared utilities for Stack components (HStack and VStack)
 */

/**
 * Helper function to add conditional classes
 * @param {Array} classes - Array to push classes to
 * @param {*} propValue - The prop value to check
 * @param {*} defaultValue - The default value to compare against
 * @param {Function} classGetter - Function to get the class
 */
export const addConditionalClass = (classes, propValue, defaultValue, classGetter) => {
	if (propValue !== defaultValue) {
		const className = classGetter(propValue)
		if (className) {
			classes.push(className)
		}
	}
}

/**
 * Cross-axis alignment mapping for flexbox items
 */
export const alignMap = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
	baseline: 'items-baseline',
}

/**
 * Main-axis alignment mapping for flexbox justify
 */
export const justifyMap = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly',
}

/**
 * Validator for alignment values
 */
export const alignValidator = (value, includeBaseline = false) => {
	const baseOptions = ['start', 'center', 'end', 'stretch']
	const options = includeBaseline ? [...baseOptions, 'baseline'] : baseOptions
	return options.includes(value)
}

/**
 * Validator for justify values
 */
export const justifyValidator = (value) => {
	return ['start', 'center', 'end', 'between', 'around', 'evenly'].includes(value)
}

/**
 * Validator for padding values (Tailwind spacing scale)
 */
export const paddingValidator = (value) => {
	return /^(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)$/.test(
		value
	)
}
