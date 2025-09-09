// Tag Theme Configuration
// Organized by component sections for easy customization

export const defaultTagTheme = {
  root: {
    base: 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative',
    variants: {
      default: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-400 active:bg-gray-200 active:shadow-inner active:shadow-gray-400/60 border border-transparent',
      success: 'bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-400 active:bg-green-200 active:shadow-inner active:shadow-green-400/60 border border-transparent',
      info: 'bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-400 active:bg-blue-200 active:shadow-inner active:shadow-blue-400/60 border border-transparent',
      warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 focus:ring-yellow-400 active:bg-yellow-200 active:shadow-inner active:shadow-yellow-400/60 border border-transparent',
      danger: 'bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-400 active:bg-red-200 active:shadow-inner active:shadow-red-400/60 border border-transparent',
      pending: 'bg-orange-100 text-orange-700 hover:bg-orange-200 focus:ring-orange-400 active:bg-orange-200 active:shadow-inner active:shadow-orange-400/60 border border-transparent'
    },
    sizes: {
      xs: 'px-2 py-0.5 text-xs',
      sm: 'px-2.5 py-1 text-sm',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
      xl: 'px-5 py-2.5 text-lg'
    },

  },
  content: {
    base: 'flex items-center gap-1.5'
  },
  icon: {
    base: 'flex-shrink-0',
    sizes: {
      xs: 'w-3 h-3',
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6'
    }
  },
  // Non-clickable variants (no hover states)
  static: {
    variants: {
      default: 'bg-gray-100 text-gray-700 border border-transparent',
      success: 'bg-green-100 text-green-700 border border-transparent',
      info: 'bg-blue-100 text-blue-700 border border-transparent',
      warning: 'bg-yellow-100 text-yellow-700 border border-transparent',
      danger: 'bg-red-100 text-red-700 border border-transparent',
      pending: 'bg-orange-100 text-orange-700 border border-transparent'
    }
  }
};

// Legacy export for backward compatibility
export const tagTheme = defaultTagTheme;

// TypeScript types
export interface TagTheme {
  root?: {
    base?: string;
    variants?: {
      default?: string;
      success?: string;
      info?: string;
      warning?: string;
      danger?: string;
      pending?: string;
    };
    sizes?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    };

  };
  content?: {
    base?: string;
  };
  icon?: {
    base?: string;
    sizes?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    };
  };
  static?: {
    variants?: {
      default?: string;
      success?: string;
      info?: string;
      warning?: string;
      danger?: string;
      pending?: string;
    };
  };
}

// Utility function to merge custom theme with default theme
export function mergeTagTheme(customTheme?: TagTheme): typeof defaultTagTheme {
  if (!customTheme) return defaultTagTheme;

  return {
    root: {
      base: customTheme.root?.base ?? defaultTagTheme.root.base,
      variants: {
        ...defaultTagTheme.root.variants,
        ...customTheme.root?.variants
      },
      sizes: {
        ...defaultTagTheme.root.sizes,
        ...customTheme.root?.sizes
      },

    },
    content: {
      base: customTheme.content?.base ?? defaultTagTheme.content.base
    },
    icon: {
      base: customTheme.icon?.base ?? defaultTagTheme.icon.base,
      sizes: {
        ...defaultTagTheme.icon.sizes,
        ...customTheme.icon?.sizes
      }
    },
    static: {
      variants: {
        ...defaultTagTheme.static.variants,
        ...customTheme.static?.variants
      }
    }
  };
}

// Export types
export type TagVariant = 'default' | 'success' | 'info' | 'warning' | 'danger' | 'pending';
export type TagSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';