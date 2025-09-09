import { nextTick, type Ref } from 'vue'

export interface UseTabKeyboardNavigationOptions {
  orientation: Ref<'horizontal' | 'vertical'>
  setActiveTab: (value: string) => void
}

type NavigationKey = 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown' | 'Home' | 'End'

const NAVIGATION_KEYS: NavigationKey[] = [
  'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'
]

export function useTabKeyboardNavigation({
  orientation,
  setActiveTab
}: UseTabKeyboardNavigationOptions) {
  
  const getNextIndex = (
    currentIndex: number,
    tabCount: number,
    key: NavigationKey,
    isHorizontal: boolean
  ): number => {
    switch (key) {
      case 'Home':
        return 0
      case 'End':
        return tabCount - 1
      case 'ArrowLeft':
        return isHorizontal 
          ? (currentIndex > 0 ? currentIndex - 1 : tabCount - 1)
          : currentIndex
      case 'ArrowRight':
        return isHorizontal 
          ? (currentIndex < tabCount - 1 ? currentIndex + 1 : 0)
          : currentIndex
      case 'ArrowUp':
        return !isHorizontal 
          ? (currentIndex > 0 ? currentIndex - 1 : tabCount - 1)
          : currentIndex
      case 'ArrowDown':
        return !isHorizontal 
          ? (currentIndex < tabCount - 1 ? currentIndex + 1 : 0)
          : currentIndex
      default:
        return currentIndex
    }
  }

  const handleKeydown = async (event: KeyboardEvent) => {
    const { key } = event

    if (!NAVIGATION_KEYS.includes(key as NavigationKey)) {
      return
    }

    event.preventDefault()
    await nextTick()

    const currentTarget = event.currentTarget as HTMLElement
    if (!currentTarget) return

    const tabElements = Array.from(
      currentTarget.querySelectorAll('[role="tab"]:not([disabled])') as NodeListOf<HTMLElement>
    )

    if (tabElements.length === 0) return

    const currentIndex = tabElements.findIndex(
      tab => tab.getAttribute('aria-selected') === 'true'
    )
    
    const isHorizontal = orientation.value === 'horizontal'
    const nextIndex = getNextIndex(
      currentIndex,
      tabElements.length,
      key as NavigationKey,
      isHorizontal
    )

    // Focus and activate the next tab if index changed
    if (nextIndex !== currentIndex && tabElements[nextIndex]) {
      const nextTab = tabElements[nextIndex]
      const tabValue = nextTab.getAttribute('id')?.replace('tab-', '') || ''

      nextTab.focus()
      if (tabValue) {
        setActiveTab(tabValue)
      }
    }
  }

  return {
    handleKeydown
  }
}