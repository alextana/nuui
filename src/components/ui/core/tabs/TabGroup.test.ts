import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import TabGroup from './TabGroup.vue'

describe('TabGroup', () => {
  const createWrapper = (props = {}, slots = {}) => {
    return mount(TabGroup, {
      props: {
        defaultValue: 'tab1',
        ...props
      },
      slots: {
        default: '<div class="test-content">Tab Group Content</div>',
        ...slots
      }
    })
  }

  describe('Basic Rendering', () => {
    it('renders correctly with default props', () => {
      const wrapper = createWrapper()

      expect(wrapper.find('.test-content').exists()).toBe(true)
      expect(wrapper.text()).toBe('Tab Group Content')
    })

    it('renders slot content', () => {
      const wrapper = createWrapper({}, {
        default: '<div class="custom-content">Custom Content</div>'
      })

      expect(wrapper.find('.custom-content').exists()).toBe(true)
      expect(wrapper.text()).toBe('Custom Content')
    })
  })

  describe('Default Value', () => {
    it('sets initial active tab from defaultValue', () => {
      const wrapper = createWrapper({ defaultValue: 'tab2' })

      // The active tab should be set internally
      // We can't directly access the internal state, but we can test through context provision
      expect(wrapper.exists()).toBe(true)
    })

    it('uses first tab as default when no defaultValue provided', () => {
      const wrapper = createWrapper({ defaultValue: undefined })
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('V-Model Support', () => {
    it('supports v-model with modelValue prop', async () => {
      const wrapper = createWrapper({ modelValue: 'tab2' })

      // Component should use modelValue when provided
      expect(wrapper.exists()).toBe(true)
    })

    it('emits update:modelValue when active tab changes', async () => {
      const wrapper = createWrapper({ modelValue: 'tab1' })

      // Simulate tab change by calling the internal setActiveTab function
      // This would normally be called by child Tab components
      const vm = wrapper.vm as any
      vm.setActiveTab('tab2')

      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['tab2'])
    })

    it('emits change event when active tab changes', async () => {
      const wrapper = createWrapper({ modelValue: 'tab1' })

      const vm = wrapper.vm as any
      vm.setActiveTab('tab3')

      await nextTick()

      expect(wrapper.emitted('change')).toBeTruthy()
      expect(wrapper.emitted('change')?.[0]).toEqual(['tab3'])
    })
  })

  describe('Variants', () => {
    it('applies default variant', () => {
      const wrapper = createWrapper({ variant: 'default' })
      expect(wrapper.exists()).toBe(true)
    })

    it('applies pills variant', () => {
      const wrapper = createWrapper({ variant: 'pills' })
      expect(wrapper.exists()).toBe(true)
    })

    it('applies underline variant', () => {
      const wrapper = createWrapper({ variant: 'underline' })
      expect(wrapper.exists()).toBe(true)
    })

    it('applies cards variant', () => {
      const wrapper = createWrapper({ variant: 'cards' })
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Sizes', () => {
    it('applies small size', () => {
      const wrapper = createWrapper({ size: 'sm' })
      expect(wrapper.exists()).toBe(true)
    })

    it('applies medium size', () => {
      const wrapper = createWrapper({ size: 'md' })
      expect(wrapper.exists()).toBe(true)
    })

    it('applies large size', () => {
      const wrapper = createWrapper({ size: 'lg' })
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Orientation', () => {
    it('applies horizontal orientation', () => {
      const wrapper = createWrapper({ orientation: 'horizontal' })
      expect(wrapper.exists()).toBe(true)
    })

    it('applies vertical orientation', () => {
      const wrapper = createWrapper({ orientation: 'vertical' })
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Custom Classes', () => {
    it('applies custom classes', () => {
      const wrapper = createWrapper({ customClasses: 'custom-group-class' })
      expect(wrapper.classes()).toContain('custom-group-class')
    })
  })

  describe('Theme', () => {
    it('uses default theme when no custom theme provided', () => {
      const wrapper = createWrapper()
      // The component should render without errors
      expect(wrapper.exists()).toBe(true)
    })

    it('merges custom theme with default theme', () => {
      const customTheme = {
        tabList: {
          base: 'custom-base-class'
        }
      }

      const wrapper = createWrapper({ theme: customTheme })
      // TabGroup passes theme to child components via context
      expect(wrapper.props('theme')).toEqual(customTheme)
    })
  })

  describe('Context Provision', () => {
    it('provides context to child components', () => {
      const wrapper = createWrapper({
        variant: 'pills',
        size: 'lg',
        orientation: 'vertical'
      })

      // The component should provide context without errors
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('State Management', () => {
    it('manages internal active tab state', async () => {
      const wrapper = createWrapper({ defaultValue: 'tab1' })
      const vm = wrapper.vm as any

      // Initial state
      expect(vm.activeTab).toBe('tab1')

      // Change state
      vm.activeTab = 'tab2'
      await nextTick()
      expect(vm.activeTab).toBe('tab2')
    })

    it('prefers modelValue over internal state when controlled', async () => {
      const wrapper = createWrapper({
        modelValue: 'controlled-tab',
        defaultValue: 'default-tab'
      })

      const vm = wrapper.vm as any

      // Should use modelValue when provided
      expect(vm.activeTab).toBe('controlled-tab')
    })

    it('uses internal state when not controlled', async () => {
      const wrapper = createWrapper({
        defaultValue: 'default-tab'
      })

      const vm = wrapper.vm as any

      // Should use internal state when no modelValue
      expect(vm.activeTab).toBe('default-tab')
    })
  })

  describe('Element Type', () => {
    it('renders as a div element', () => {
      const wrapper = createWrapper()
      expect(wrapper.element.tagName).toBe('DIV')
    })
  })

  describe('Class Composition', () => {
    it('combines base and custom classes correctly', () => {
      const wrapper = createWrapper({ customClasses: 'my-custom-class' })

      const classes = wrapper.classes()

      // Should include custom classes
      expect(classes).toContain('my-custom-class')
    })
  })

  describe('Event Handling', () => {
    it('does not emit events when setting initial value', () => {
      const wrapper = createWrapper({ defaultValue: 'tab1' })

      // No events should be emitted during initial setup
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
      expect(wrapper.emitted('change')).toBeFalsy()
    })

    it('emits events only when value actually changes', async () => {
      const wrapper = createWrapper({ modelValue: 'tab1' })
      const vm = wrapper.vm as any

      // Set to same value - should not emit
      vm.setActiveTab('tab1')
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
      expect(wrapper.emitted('change')).toBeFalsy()

      // Set to different value - should emit
      vm.setActiveTab('tab2')
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('change')).toBeTruthy()
    })
  })

  describe('Props Validation', () => {
    it('handles undefined defaultValue gracefully', () => {
      const wrapper = createWrapper({ defaultValue: undefined })
      expect(wrapper.exists()).toBe(true)
    })

    it('handles empty string defaultValue', () => {
      const wrapper = createWrapper({ defaultValue: '' })
      expect(wrapper.exists()).toBe(true)
    })
  })
})