import { ref, computed, nextTick, type Ref } from 'vue'
import { twMerge } from 'tailwind-merge'
import type { TabsVariant } from '../theme'

export interface UseTabIndicatorOptions {
  variant: Ref<TabsVariant>
  orientation: Ref<'horizontal' | 'vertical'>
  animated: Ref<boolean>
}

export function useTabIndicator({
  variant,
  orientation,
  animated,
}: UseTabIndicatorOptions) {
  const indicatorStyle = ref({})
  const showIndicator = ref(false)

  const indicatorClasses = computed(() => {
    const baseClasses = animated.value
      ? 'absolute transition-all duration-300 ease-in-out pointer-events-none'
      : 'absolute pointer-events-none'

    if (variant.value === 'underline') {
      return twMerge(
        baseClasses,
        'bg-blue-600',
        orientation.value === 'vertical' ? 'left-0 w-1 h-auto' : 'bottom-0 h-1'
      )
    }

    return twMerge(
      baseClasses,
      'bg-primary/10 rounded-md backdrop-blur-sm'
    )
  })

  const updateIndicator = async (tabListElement: HTMLElement | null) => {
    await nextTick()

    if (!tabListElement) {
      showIndicator.value = false
      return
    }

    const activeTabElement = tabListElement.querySelector(
      '[role="tab"][aria-selected="true"]'
    ) as HTMLElement

    if (!activeTabElement) {
      showIndicator.value = false
      return
    }

    const tabListRect = tabListElement.getBoundingClientRect()
    const activeTabRect = activeTabElement.getBoundingClientRect()

    const left = activeTabRect.left - tabListRect.left
    const top = activeTabRect.top - tabListRect.top
    const width = activeTabRect.width
    const height = activeTabRect.height

    if (variant.value === 'underline') {
      if (orientation.value === 'vertical') {
        indicatorStyle.value = {
          top: `${top}px`,
          left: '0px',
          width: '6px',
          height: `${height}px`
        }
      } else {
        indicatorStyle.value = {
          left: `${left}px`,
          bottom: '0px',
          width: `${width}px`,
          height: '4px'
        }
      }
    } else {
      indicatorStyle.value = {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`
      }
    }

    showIndicator.value = true
  }

  return {
    indicatorStyle,
    showIndicator,
    indicatorClasses,
    updateIndicator
  }
}