import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TabPanel from './TabPanel.vue'

describe('TabPanel', () => {
  const defaultProps = {
    value: 'panel1',
    activeTab: 'panel1',
    hasBeenActive: true,
    navigationDirection: 'forward' as const,
    animated: true,
    lazy: false
  }

  const createWrapper = (props = {}, activeTab = 'panel1') => {
    return mount(TabPanel, {
      props: {
        ...defaultProps,
        activeTab,
        ...props
      },
      slots: {
        default: 'Panel Content'
      }
    })
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Basic Rendering', () => {
    it('renders correctly with basic props', () => {
      const wrapper = createWrapper()
      
      expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
      expect(wrapper.text()).toBe('Panel Content')
      expect(wrapper.attributes('id')).toBe('panel-panel1')
      expect(wrapper.attributes('aria-labelledby')).toBe('tab-panel1')
    })

    it('renders slot content when provided', () => {
      const wrapper = mount(TabPanel, {
        props: defaultProps,
        slots: {
          default: 'Custom Panel Content'
        }
      })
      
      expect(wrapper.text()).toBe('Custom Panel Content')
    })
  })

  describe('Active State', () => {
    it('shows content when panel is active', () => {
      const wrapper = createWrapper({}, 'panel1')
      expect(wrapper.isVisible()).toBe(true)
      expect(wrapper.text()).toBe('Panel Content')
    })

    it('hides content when panel is not active', () => {
      const wrapper = createWrapper({}, 'other-panel')
      // Panel should render but be hidden when not active and not lazy
      expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
      expect(wrapper.isVisible()).toBe(false)
    })
  })

  describe('Lazy Loading', () => {
    it('renders content immediately when lazy is false', () => {
      const wrapper = createWrapper({ lazy: false, hasBeenActive: false }, 'other-panel')
      // When lazy is false, panel should render but be hidden
      expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
      expect(wrapper.isVisible()).toBe(false)
    })

    it('does not render content when lazy is true and never been active', () => {
      const wrapper = createWrapper({ lazy: true, hasBeenActive: false }, 'other-panel')
      expect(wrapper.find('[role="tabpanel"]').exists()).toBe(false)
    })

    it('renders content when lazy is true and has been active', () => {
      const wrapper = createWrapper({ lazy: true, hasBeenActive: true }, 'other-panel')
      // Should render but be hidden since not active
      expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
      expect(wrapper.isVisible()).toBe(false)
    })

    it('renders content when lazy is true and currently active', () => {
      const wrapper = createWrapper({ lazy: true, hasBeenActive: false }, 'panel1')
      expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
      expect(wrapper.text()).toBe('Panel Content')
    })
  })

  describe('Animations', () => {
    it('applies transition when animated is true', () => {
      const wrapper = createWrapper({ animated: true })
      // Check that transition component exists when animated
      expect(wrapper.find('transition-stub').exists()).toBe(true)
    })

    it('does not apply transition when animated is false', () => {
      const wrapper = createWrapper({ animated: false })
      expect(wrapper.find('.transition-all').exists()).toBe(false)
    })

    it('uses correct transition name for forward navigation', () => {
       const wrapper = createWrapper({ navigationDirection: 'forward' })
       // Check that the transition component has the correct name
       expect(wrapper.html()).toContain('slide-left')
     })

     it('uses correct transition name for backward navigation', () => {
        const wrapper = createWrapper({ navigationDirection: 'backward' })
        // Check that the transition component has the correct name
        expect(wrapper.html()).toContain('slide-right')
      })
   })

  describe('Custom Classes', () => {
     it('applies custom classes', () => {
       const wrapper = createWrapper({ customClasses: 'custom-panel-class' })
       expect(wrapper.classes()).toContain('custom-panel-class')
     })
   })

  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      const wrapper = createWrapper()
      
      expect(wrapper.attributes('role')).toBe('tabpanel')
      expect(wrapper.attributes('id')).toBe('panel-panel1')
      expect(wrapper.attributes('aria-labelledby')).toBe('tab-panel1')
    })

    it('has correct tabindex', () => {
      const wrapper = createWrapper()
      expect(wrapper.attributes('tabindex')).toBe('0')
    })
  })

  describe('Content Rendering Logic', () => {
     it('renders when active and not lazy', () => {
       const wrapper = createWrapper({ lazy: false }, 'panel1')
       expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
       expect(wrapper.isVisible()).toBe(true)
     })

     it('renders when active and lazy', () => {
       const wrapper = createWrapper({ lazy: true }, 'panel1')
       expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
       expect(wrapper.isVisible()).toBe(true)
     })

     it('renders when not active, not lazy, and has been active', () => {
       const wrapper = createWrapper({ lazy: false, hasBeenActive: true }, 'other-panel')
       expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
       expect(wrapper.isVisible()).toBe(false)
     })

     it('renders when not active, lazy, and has been active', () => {
       const wrapper = createWrapper({ lazy: true, hasBeenActive: true }, 'other-panel')
       expect(wrapper.find('[role="tabpanel"]').exists()).toBe(true)
       expect(wrapper.isVisible()).toBe(false)
     })

     it('does not render when not active, lazy, and never been active', () => {
       const wrapper = createWrapper({ lazy: true, hasBeenActive: false }, 'other-panel')
       expect(wrapper.find('[role="tabpanel"]').exists()).toBe(false)
     })
   })
})