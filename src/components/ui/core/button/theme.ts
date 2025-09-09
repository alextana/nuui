export const defaultButtonTheme = {
  root: {
    base: `
      inline-flex items-center justify-center font-medium transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      active:transform active:scale-[0.98]
      relative
    `,
    variants: {
      primary: `
        bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500
        border border-transparent
        active:bg-blue-800 active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]
      `,
      secondary: `
        bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500
        border border-gray-300 hover:border-gray-400
        active:bg-gray-300 active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)]
      `,
      tertiary: `
        bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500
        border border-transparent hover:border-blue-200
        active:bg-blue-100 active:shadow-[inset_0_4px_8px_rgba(59,130,246,0.2)]
      `,
      danger: `
        bg-red-600 text-white hover:bg-red-700 focus:ring-red-500
        border border-transparent
        active:bg-red-800 active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]
      `,
      success: `
        bg-green-600 text-white hover:bg-green-700 focus:ring-green-500
        border border-transparent
        active:bg-green-800 active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]
      `,
      warning: `
        bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500
        border border-transparent
        active:bg-yellow-700 active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]
      `
    },
    sizes: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg'
    },
    iconOnlySizes: {
      xs: 'p-1',
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3',
      xl: 'p-4'
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full'
    }
  },
  icon: {
    base: '',
    sizes: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6'
    }
  },
  content: {
    base: ''
  },
  loading: {
    base: 'animate-spin',
    sizes: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6'
    }
  }
}

// Legacy export for backward compatibility
export const buttonTheme = {
  base: defaultButtonTheme.root.base,
  variants: defaultButtonTheme.root.variants,
  sizes: defaultButtonTheme.root.sizes,
  iconOnlySizes: defaultButtonTheme.root.iconOnlySizes,
  iconSizes: defaultButtonTheme.icon.sizes,
  rounded: defaultButtonTheme.root.rounded,
  loading: {
    spinner: defaultButtonTheme.loading.base,
    sizes: defaultButtonTheme.loading.sizes
  }
}

// Theme types
export type ButtonTheme = {
  root?: {
    base?: string
    variants?: Partial<typeof defaultButtonTheme.root.variants>
    sizes?: Partial<typeof defaultButtonTheme.root.sizes>
    iconOnlySizes?: Partial<typeof defaultButtonTheme.root.iconOnlySizes>
    rounded?: Partial<typeof defaultButtonTheme.root.rounded>
  }
  icon?: {
    base?: string
    sizes?: Partial<typeof defaultButtonTheme.icon.sizes>
  }
  content?: {
    base?: string
  }
  loading?: {
    base?: string
    sizes?: Partial<typeof defaultButtonTheme.loading.sizes>
  }
}

export type ButtonVariant = keyof typeof buttonTheme.variants
export type ButtonSize = keyof typeof buttonTheme.sizes
export type ButtonRounded = keyof typeof buttonTheme.rounded

// Utility function to merge custom theme with default theme
export function mergeButtonTheme(customTheme?: ButtonTheme) {
  if (!customTheme) return defaultButtonTheme

  return {
    root: {
      base: customTheme.root?.base ?? defaultButtonTheme.root.base,
      variants: { ...defaultButtonTheme.root.variants, ...customTheme.root?.variants },
      sizes: { ...defaultButtonTheme.root.sizes, ...customTheme.root?.sizes },
      iconOnlySizes: { ...defaultButtonTheme.root.iconOnlySizes, ...customTheme.root?.iconOnlySizes },
      rounded: { ...defaultButtonTheme.root.rounded, ...customTheme.root?.rounded }
    },
    icon: {
      base: customTheme.icon?.base ?? defaultButtonTheme.icon.base,
      sizes: { ...defaultButtonTheme.icon.sizes, ...customTheme.icon?.sizes }
    },
    content: {
      base: customTheme.content?.base ?? defaultButtonTheme.content.base
    },
    loading: {
      base: customTheme.loading?.base ?? defaultButtonTheme.loading.base,
      sizes: { ...defaultButtonTheme.loading.sizes, ...customTheme.loading?.sizes }
    }
  }
}