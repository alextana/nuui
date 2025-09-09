export const defaultTextTheme = {
  root: {
    base: 'text-gray-900',
    variants: {
      // Heading variants
      heading3xl: 'text-4xl font-bold leading-tight', // 36px
      heading2xl: 'text-3xl font-bold leading-tight', // 30px
      headingXl: 'text-2xl font-bold leading-tight', // 24px
      headingLg: 'text-xl font-semibold leading-normal', // 20px
      headingMd: 'text-lg font-semibold leading-normal', // 18px
      headingSm: 'text-base font-semibold leading-normal', // 16px
      headingXs: 'text-sm font-semibold leading-normal', // 14px
      
      // Body variants
      bodyLg: 'text-lg font-normal leading-relaxed', // 18px
      bodyMd: 'text-base font-normal leading-relaxed', // 16px
      bodySm: 'text-sm font-normal leading-normal', // 14px
      bodyXs: 'text-xs font-normal leading-normal' // 12px
    },
    tones: {
      base: 'text-gray-900',
      subdued: 'text-gray-600',
      disabled: 'text-gray-400',
      success: 'text-green-600',
      critical: 'text-red-600',
      caution: 'text-yellow-600',
      inherit: 'text-inherit',
      'text-inverse': 'text-white',
      'text-inverse-secondary': 'text-gray-200'
    },
    alignments: {
      start: 'text-left',
      center: 'text-center',
      end: 'text-right',
      justify: 'text-justify'
    },
    fontWeights: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    },
    decorations: {
      'line-through': 'line-through'
    }
  }
}

// Legacy export for backward compatibility
export const textTheme = defaultTextTheme

// TypeScript types
export interface TextTheme {
  root?: {
    base?: string
    variants?: Partial<typeof defaultTextTheme.root.variants>
    tones?: Partial<typeof defaultTextTheme.root.tones>
    alignments?: Partial<typeof defaultTextTheme.root.alignments>
    fontWeights?: Partial<typeof defaultTextTheme.root.fontWeights>
    decorations?: Partial<typeof defaultTextTheme.root.decorations>
  }
}

export type TextVariant = keyof typeof defaultTextTheme.root.variants
export type TextTone = keyof typeof defaultTextTheme.root.tones
export type TextAlignment = keyof typeof defaultTextTheme.root.alignments
export type TextFontWeight = keyof typeof defaultTextTheme.root.fontWeights
export type TextDecoration = keyof typeof defaultTextTheme.root.decorations

// Merge function for custom themes
export function mergeTextTheme(customTheme?: TextTheme): typeof defaultTextTheme {
  if (!customTheme) return defaultTextTheme

  return {
    root: {
      base: customTheme.root?.base ?? defaultTextTheme.root.base,
      variants: {
        ...defaultTextTheme.root.variants,
        ...customTheme.root?.variants
      },
      tones: {
        ...defaultTextTheme.root.tones,
        ...customTheme.root?.tones
      },
      alignments: {
        ...defaultTextTheme.root.alignments,
        ...customTheme.root?.alignments
      },
      fontWeights: {
        ...defaultTextTheme.root.fontWeights,
        ...customTheme.root?.fontWeights
      },
      decorations: {
        ...defaultTextTheme.root.decorations,
        ...customTheme.root?.decorations
      }
    }
  }
}