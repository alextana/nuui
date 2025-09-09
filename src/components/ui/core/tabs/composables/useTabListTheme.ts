import { computed, type Ref } from 'vue'
import { twMerge } from 'tailwind-merge'
import { mergeTabsTheme, type TabsVariant, type TabsSize, type TabsTheme } from '../theme'

export interface UseTabListThemeOptions {
  variant: Ref<TabsVariant>
  size: Ref<TabsSize>
  orientation: Ref<'horizontal' | 'vertical'>
  customClasses: Ref<string>
  theme?: Ref<TabsTheme | undefined>
}

export function useTabListTheme({
  variant,
  size,
  orientation,
  customClasses,
  theme
}: UseTabListThemeOptions) {

  const mergedTheme = computed(() => mergeTabsTheme(theme?.value))

  const tabListClasses = computed(() => {
    const themeConfig = mergedTheme.value
    const orientationClass = orientation.value === 'vertical'
      ? 'flex-col border-r border-b-0'
      : ''

    return twMerge(
      themeConfig.tabList.base,
      themeConfig.tabList.variants[variant.value],
      themeConfig.tabList.sizes[size.value],
      orientationClass,
      'relative',
      customClasses.value
    )
  })

  return {
    mergedTheme,
    tabListClasses
  }
}