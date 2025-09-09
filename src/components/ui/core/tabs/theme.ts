export const defaultTabsTheme = {
  tabList: {
    base: `
      flex
      bg-white
    `,
    variants: {
      default: 'border-b border-gray-200',
      pills: 'border-none bg-gray-100 rounded-lg p-1',
      underline: 'border-b-2 border-gray-200',
      cards: 'border-b border-gray-200 bg-gray-50'
    },
    sizes: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    }
  },
  tab: {
    base: `
      inline-flex items-center justify-center px-4 py-2 font-medium
      transition-all duration-200 cursor-pointer
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    variants: {
      default: {
        inactive: 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300',
        active: 'text-blue-600 border-b-2 border-blue-600'
      },
      pills: {
        inactive: 'text-gray-600 hover:text-gray-900 rounded-md hover:bg-white/50',
        active: 'text-blue-600 bg-white rounded-md shadow-sm'
      },
      underline: {
        inactive: 'text-gray-500 hover:text-gray-700',
        active: 'text-blue-600'
      },
      cards: {
        inactive: 'text-gray-500 hover:text-gray-700 border-b border-transparent hover:border-gray-300 bg-transparent',
        active: 'text-blue-600 border-b border-blue-600 bg-white -mb-px'
      }
    },
    sizes: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }
  },
  tabPanel: {
    base: `
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
    `,
    variants: {
      default: 'pt-6 px-6 pb-4',
      pills: 'pt-6 px-6 pb-4',
      underline: 'pt-6 px-6 pb-4',
      cards: 'pt-6 px-6 pb-6 bg-white border-l border-r border-b border-gray-200 rounded-b-lg'
    }
  }
}

export const tabsTheme = {
  tabList: {
    base: defaultTabsTheme.tabList.base,
    variants: defaultTabsTheme.tabList.variants,
    sizes: defaultTabsTheme.tabList.sizes
  },
  tab: {
    base: defaultTabsTheme.tab.base,
    variants: defaultTabsTheme.tab.variants,
    sizes: defaultTabsTheme.tab.sizes
  },
  tabPanel: {
    base: defaultTabsTheme.tabPanel.base,
    variants: defaultTabsTheme.tabPanel.variants
  }
}

export type TabsTheme = {
  tabList?: {
    base?: string
    variants?: Partial<typeof defaultTabsTheme.tabList.variants>
    sizes?: Partial<typeof defaultTabsTheme.tabList.sizes>
  }
  tab?: {
    base?: string
    variants?: Partial<typeof defaultTabsTheme.tab.variants>
    sizes?: Partial<typeof defaultTabsTheme.tab.sizes>
  }
  tabPanel?: {
    base?: string
    variants?: Partial<typeof defaultTabsTheme.tabPanel.variants>
  }
}

export type TabsVariant = keyof typeof tabsTheme.tabList.variants
export type TabsSize = keyof typeof tabsTheme.tabList.sizes

export function mergeTabsTheme(customTheme?: TabsTheme) {
  if (!customTheme) return defaultTabsTheme

  return {
    tabList: {
      base: customTheme.tabList?.base ?? defaultTabsTheme.tabList.base,
      variants: { ...defaultTabsTheme.tabList.variants, ...customTheme.tabList?.variants },
      sizes: { ...defaultTabsTheme.tabList.sizes, ...customTheme.tabList?.sizes }
    },
    tab: {
      base: customTheme.tab?.base ?? defaultTabsTheme.tab.base,
      variants: { ...defaultTabsTheme.tab.variants, ...customTheme.tab?.variants },
      sizes: { ...defaultTabsTheme.tab.sizes, ...customTheme.tab?.sizes }
    },
    tabPanel: {
      base: customTheme.tabPanel?.base ?? defaultTabsTheme.tabPanel.base,
      variants: { ...defaultTabsTheme.tabPanel.variants, ...customTheme.tabPanel?.variants }
    }
  }
}