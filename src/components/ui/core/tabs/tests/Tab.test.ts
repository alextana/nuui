import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { markRaw } from 'vue'
import Tab from '../Tab.vue'

// Mock icon component
const MockIcon = markRaw({
  template: '<svg class="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
})

describe('Tab', () => {
  const mockSetActiveTab = vi.fn()
  const mockRegisterTab = vi.fn()
  const mockUnregisterTab = vi.fn()

  const defaultProps = {
  value: 'tab1',
  activeTab: 'tab1',
  setActiveTab: mockSetActiveTab,
  variant: 'default' as const,
  size: 'md' as const,
  orientation: 'horizontal' as const,
  animated: true,
  registerTab: mockRegisterTab,
  unregisterTab: mockUnregisterTab
}

  const createWrapper = (props = {}, activeTab = 'tab1') => {
    return mount(Tab, {
      props: {
        ...defaultProps,
        activeTab,
        label: 'Test Tab',
        ...props
      }
    })
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Basic Rendering', () => {
    it('renders correctly with basic props', () => {
      const wrapper = createWrapper()

      expect(wrapper.find('[role="tab"]').exists()).toBe(true)
      expect(wrapper.text()).toBe('Test Tab')
      expect(wrapper.attributes('id')).toBe('tab-tab1')
      expect(wrapper.attributes('aria-controls')).toBe('panel-tab1')
    })

    it('renders with custom label', () => {
      const wrapper = createWrapper({ label: 'Custom Label' })
      expect(wrapper.text()).toBe('Custom Label')
    })

    it('renders slot content when provided', () => {
      const wrapper = mount(Tab, {
        props: defaultProps,
        slots: {
          default: 'Slot Content'
        }
      })

      expect(wrapper.text()).toBe('Slot Content')
    })
  })

  describe('Active State', () => {
    it('applies active classes when tab is active', () => {
      const wrapper = createWrapper({}, 'tab1')
      expect(wrapper.attributes('aria-selected')).toBe('true')
      expect(wrapper.attributes('tabindex')).toBe('0')
    })

    it('applies inactive classes when tab is not active', () => {
      const wrapper = createWrapper({}, 'other-tab')
      expect(wrapper.attributes('aria-selected')).toBe('false')
      expect(wrapper.attributes('tabindex')).toBe('-1')
    })
  })

  describe('Disabled State', () => {
    it('applies disabled classes when disabled', () => {
      const wrapper = createWrapper({ disabled: true })
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('does not call setActiveTab when disabled and clicked', async () => {
      const wrapper = createWrapper({ disabled: true })
      await wrapper.trigger('click')
      expect(mockSetActiveTab).not.toHaveBeenCalled()
    })
  })

  describe('Click Handling', () => {
    it('calls setActiveTab when clicked', async () => {
      const wrapper = createWrapper()
      await wrapper.trigger('click')
      expect(mockSetActiveTab).toHaveBeenCalledWith('tab1')
    })

    it('emits click event when clicked', async () => {
      const wrapper = createWrapper()
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeTruthy()
    })
  })

  describe('Keyboard Handling', () => {
    it('handles Enter key press', async () => {
      const wrapper = createWrapper()
      await wrapper.trigger('keydown', { key: 'Enter' })
      expect(mockSetActiveTab).toHaveBeenCalledWith('tab1')
    })

    it('handles Space key press', async () => {
      const wrapper = createWrapper()
      await wrapper.trigger('keydown', { key: ' ' })
      expect(mockSetActiveTab).toHaveBeenCalledWith('tab1')
    })

    it('emits keydown event', async () => {
      const wrapper = createWrapper()
      await wrapper.trigger('keydown', { key: 'Enter' })
      expect(wrapper.emitted('keydown')).toBeTruthy()
    })
  })

  describe('Icons', () => {
    it('renders left icon when provided', () => {
      const wrapper = createWrapper({ leftIcon: MockIcon })
      expect(wrapper.find('svg').exists()).toBe(true)
    })

    it('renders right icon when provided', () => {
      const wrapper = createWrapper({ rightIcon: MockIcon })
      expect(wrapper.find('svg').exists()).toBe(true)
    })

    it('renders both icons when provided', () => {
      const wrapper = createWrapper({ leftIcon: MockIcon, rightIcon: MockIcon })
      expect(wrapper.findAll('svg')).toHaveLength(2)
    })
  })

  describe('Badge', () => {
    it('renders badge when provided', () => {
      const wrapper = createWrapper({ badge: '5' })
      expect(wrapper.text()).toContain('5')
    })

    it('renders badge slot when provided', () => {
      const wrapper = mount(Tab, {
        props: defaultProps,
        slots: {
          badge: 'Custom Badge'
        }
      })
      expect(wrapper.text()).toContain('Custom Badge')
    })
  })

  describe('Custom Classes', () => {
    it('applies custom classes', () => {
      const wrapper = createWrapper({ customClasses: 'custom-class' })
      expect(wrapper.classes()).toContain('custom-class')
    })
  })

  describe('Orientation', () => {
    it('applies vertical orientation classes', () => {
      const wrapper = createWrapper({ orientation: 'vertical' })
      // Check that border classes are modified for vertical orientation
      expect(wrapper.html()).toContain('border-l')
    })
  })

  describe('Registration', () => {
    it('calls registerTab on mount', () => {
      createWrapper()
      expect(mockRegisterTab).toHaveBeenCalledWith('tab1', expect.any(String))
    })

    it('calls unregisterTab on unmount', () => {
      const wrapper = createWrapper()
      wrapper.unmount()
      expect(mockUnregisterTab).toHaveBeenCalledWith('tab1')
    })
  })
})