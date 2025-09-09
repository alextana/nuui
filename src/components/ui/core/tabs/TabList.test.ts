import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TabList from './TabList.vue'

describe('TabList', () => {
  const createWrapper = (props = {}, slots = {}) => {
    return mount(TabList, {
      props: {
        activeTab: 'tab1',
        setActiveTab: () => {},
        variant: 'default',
        size: 'md',
        orientation: 'horizontal',
        ...props
      },
      slots: {
        default: '<div class="test-tab">Tab Content</div>',
        ...slots
      }
    })
  }

  describe('Basic Rendering', () => {
    it('renders correctly with default props', () => {
      const wrapper = createWrapper()

      expect(wrapper.find('[role="tablist"]').exists()).toBe(true)
      expect(wrapper.text()).toBe('Tab Content')
    })

    it('renders slot content', () => {
      const wrapper = createWrapper({}, {
        default: '<div class="custom-content">Custom Tab Content</div>'
      })

      expect(wrapper.find('.custom-content').exists()).toBe(true)
      expect(wrapper.text()).toBe('Custom Tab Content')
    })
  })

  describe('Variants', () => {
    it('applies default variant classes', () => {
      const wrapper = createWrapper({ variant: 'default' })
      expect(wrapper.classes()).toContain('border-b')
      expect(wrapper.classes()).toContain('border-gray-200')
    })

    it('applies pills variant classes', () => {
      const wrapper = createWrapper({ variant: 'pills' })
      expect(wrapper.classes()).toContain('bg-gray-100')
      expect(wrapper.classes()).toContain('rounded-lg')
      expect(wrapper.classes()).toContain('p-1')
    })

    it('applies underline variant classes', () => {
      const wrapper = createWrapper({ variant: 'underline' })
      expect(wrapper.classes()).toContain('border-b-2')
      expect(wrapper.classes()).toContain('border-gray-200')
    })

    it('applies cards variant classes', () => {
      const wrapper = createWrapper({ variant: 'cards' })
      expect(wrapper.classes()).toContain('border-b')
      expect(wrapper.classes()).toContain('border-gray-200')
      expect(wrapper.classes()).toContain('bg-gray-50')
    })
  })

  describe('Sizes', () => {
    it('applies small size classes', () => {
      const wrapper = createWrapper({ size: 'sm' })
      expect(wrapper.classes()).toContain('text-sm')
    })

    it('applies medium size classes', () => {
      const wrapper = createWrapper({ size: 'md' })
      expect(wrapper.classes()).toContain('text-base')
    })

    it('applies large size classes', () => {
      const wrapper = createWrapper({ size: 'lg' })
      expect(wrapper.classes()).toContain('text-lg')
    })
  })

  describe('Orientation', () => {
    it('applies horizontal orientation classes', () => {
      const wrapper = createWrapper({ orientation: 'horizontal' })
      expect(wrapper.attributes('aria-orientation')).toBe('horizontal')
      // Horizontal is default, no additional classes needed
    })

    it('applies vertical orientation classes', () => {
      const wrapper = createWrapper({ orientation: 'vertical' })
      expect(wrapper.classes()).toContain('flex-col')
      expect(wrapper.classes()).toContain('border-r')
      expect(wrapper.classes()).toContain('border-b-0')
      expect(wrapper.attributes('aria-orientation')).toBe('vertical')
    })
  })

  describe('Custom Classes', () => {
    it('applies custom classes', () => {
      const wrapper = createWrapper({ customClasses: 'custom-tablist-class' })
      expect(wrapper.classes()).toContain('custom-tablist-class')
    })
  })

  describe('Theme', () => {
    it('uses default theme when no custom theme provided', () => {
      const wrapper = createWrapper()
      // Check that default classes are applied
      expect(wrapper.classes()).toContain('flex')
    })

    it('merges custom theme with default theme', () => {
      const customTheme = {
        tabList: {
          base: 'custom-base-class',
          variants: {
            default: 'custom-variant-class'
          },
          sizes: {
            md: 'custom-size-class'
          }
        }
      }

      const wrapper = createWrapper({ theme: customTheme })
      expect(wrapper.classes()).toContain('custom-base-class')
      expect(wrapper.classes()).toContain('custom-variant-class')
      expect(wrapper.classes()).toContain('custom-size-class')
    })
  })

  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      const wrapper = createWrapper()

      expect(wrapper.attributes('role')).toBe('tablist')
      expect(wrapper.attributes('aria-orientation')).toBeDefined()
    })

    it('sets correct aria-orientation for horizontal', () => {
      const wrapper = createWrapper({ orientation: 'horizontal' })
      expect(wrapper.attributes('aria-orientation')).toBe('horizontal')
    })

    it('sets correct aria-orientation for vertical', () => {
      const wrapper = createWrapper({ orientation: 'vertical' })
      expect(wrapper.attributes('aria-orientation')).toBe('vertical')
    })
  })

  describe('Context Provision', () => {
    it('provides context to child components', () => {
      // This is tested indirectly through the Tab component tests
      // The TabList provides variant, size, orientation, and theme context
      const wrapper = createWrapper({
        variant: 'pills',
        size: 'lg',
        orientation: 'vertical'
      })

      // Verify the component renders without errors
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Element Type', () => {
    it('renders as a div element', () => {
      const wrapper = createWrapper()
      expect(wrapper.element.tagName).toBe('DIV')
    })
  })

  describe('Class Composition', () => {
    it('combines all classes correctly', () => {
      const wrapper = createWrapper({
        variant: 'pills',
        size: 'lg',
        orientation: 'vertical',
        customClasses: 'my-custom-class'
      })

      const classes = wrapper.classes()

      // Base classes from theme
      expect(classes).toContain('flex')

      // Variant classes (pills)
      expect(classes).toContain('border-none')
      expect(classes).toContain('bg-gray-100')
      expect(classes).toContain('rounded-lg')
      expect(classes).toContain('p-1')

      // Size classes
      expect(classes).toContain('text-lg')

      // Orientation classes (vertical)
      expect(classes).toContain('flex-col')
      expect(classes).toContain('border-r')
      expect(classes).toContain('border-b-0')

      // Custom classes
      expect(classes).toContain('my-custom-class')
    })
  })
})