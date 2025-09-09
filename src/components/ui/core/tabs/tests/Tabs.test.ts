import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Tabs from '../Tabs.vue'

const sampleTabs = [
  {
    value: 'tab1',
    label: 'Tab 1',
    panelContent: '<p>Content 1</p>'
  },
  {
    value: 'tab2',
    label: 'Tab 2',
    panelContent: '<p>Content 2</p>'
  },
  {
    value: 'tab3',
    label: 'Tab 3',
    disabled: true,
    panelContent: '<p>Content 3</p>'
  }
]

describe('Tabs', () => {
  describe('Basic Functionality', () => {
    it('renders correctly with default props', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      expect(wrapper.find('[role="tablist"]').exists()).toBe(true)
      expect(wrapper.findAll('[role="tab"]')).toHaveLength(3)
      expect(wrapper.findAll('[role="tabpanel"]')).toHaveLength(3)
    })

    it('sets the correct default active tab', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab2'
        }
      })

      const activeTab = wrapper.find('[aria-selected="true"]')
      expect(activeTab.text()).toBe('Tab 2')
    })

    it('shows only the active panel', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      const panels = wrapper.findAll('[role="tabpanel"]')
      const visiblePanels = panels.filter(panel => panel.isVisible())
      expect(visiblePanels).toHaveLength(1)
      expect(visiblePanels[0].attributes('id')).toBe('panel-tab1')
    })
  })

  describe('Variants', () => {
    it('applies default variant classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          variant: 'default',
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.classes()).toContain('border-gray-200')
    })

    it('applies pills variant classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          variant: 'pills',
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.classes()).toContain('bg-gray-100')
      expect(tabList.classes()).toContain('rounded-lg')
    })

    it('applies underline variant classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          variant: 'underline',
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.classes()).toContain('border-b-2')
    })

    it('applies cards variant classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          variant: 'cards',
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.classes()).toContain('bg-gray-50')
    })
  })

  describe('Sizes', () => {
    it('applies small size classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          size: 'sm',
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.classes()).toContain('text-sm')
    })

    it('applies medium size classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          size: 'md',
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.classes()).toContain('text-base')
    })

    it('applies large size classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          size: 'lg',
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.classes()).toContain('text-lg')
    })
  })

  describe('Orientation', () => {
    it('applies horizontal orientation by default', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.attributes('aria-orientation')).toBe('horizontal')
    })

    it('applies vertical orientation classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          orientation: 'vertical',
          defaultValue: 'tab1'
        }
      })

      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.attributes('aria-orientation')).toBe('vertical')
      expect(tabList.classes()).toContain('flex-col')
    })
  })

  describe('Interactions', () => {
    it('switches tabs when clicked', async () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      const tab2 = wrapper.findAll('[role="tab"]')[1]
      await tab2.trigger('click')
      await nextTick()

      expect(tab2.attributes('aria-selected')).toBe('true')
      const activePanel = wrapper.find('[role="tabpanel"][id="panel-tab2"]')
      expect(activePanel.isVisible()).toBe(true)
    })

    it('does not switch to disabled tabs', async () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      const disabledTab = wrapper.findAll('[role="tab"]')[2]
      await disabledTab.trigger('click')
      await nextTick()

      expect(disabledTab.attributes('aria-selected')).toBe('false')
      const tab1 = wrapper.findAll('[role="tab"]')[0]
      expect(tab1.attributes('aria-selected')).toBe('true')
    })

    it('emits change event when tab is switched', async () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      const tab2 = wrapper.findAll('[role="tab"]')[1]
      await tab2.trigger('click')

      expect(wrapper.emitted('change')).toBeTruthy()
      expect(wrapper.emitted('change')?.[0]).toEqual(['tab2'])
    })

    it('emits tabClick event when tab is clicked', async () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      const tab2 = wrapper.findAll('[role="tab"]')[1]
      await tab2.trigger('click')

      expect(wrapper.emitted('tabClick')).toBeTruthy()
      const emittedEvent = wrapper.emitted('tabClick')?.[0]
      expect(emittedEvent?.[0]).toEqual(sampleTabs[1])
    })
  })

  describe('v-model Support', () => {
    it('supports v-model for active tab', async () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          modelValue: 'tab2'
        }
      })

      const activeTab = wrapper.find('[aria-selected="true"]')
      expect(activeTab.text()).toBe('Tab 2')

      const tab1 = wrapper.findAll('[role="tab"]')[0]
      await tab1.trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['tab1'])
    })
  })

  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      // TabList
      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.exists()).toBe(true)

      // Tabs
      const tabs = wrapper.findAll('[role="tab"]')
      tabs.forEach((tab, index) => {
        expect(tab.attributes('id')).toBe(`tab-${sampleTabs[index].value}`)
        expect(tab.attributes('aria-controls')).toBe(`panel-${sampleTabs[index].value}`)
        expect(tab.attributes('aria-selected')).toBeDefined()
      })

      // Panels
      const panels = wrapper.findAll('[role="tabpanel"]')
      panels.forEach((panel, index) => {
        expect(panel.attributes('id')).toBe(`panel-${sampleTabs[index].value}`)
        expect(panel.attributes('aria-labelledby')).toBe(`tab-${sampleTabs[index].value}`)
      })
    })

    it('manages tabindex correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      const tabs = wrapper.findAll('[role="tab"]')
      expect(tabs[0].attributes('tabindex')).toBe('0') // Active tab
      expect(tabs[1].attributes('tabindex')).toBe('-1') // Inactive tab
      expect(tabs[2].attributes('tabindex')).toBe('-1') // Disabled tab
    })
  })

  describe('Custom Classes', () => {
    it('applies custom classes correctly', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1',
          customClasses: 'custom-tabs',
          tabListClasses: 'custom-tab-list',
          panelsContainerClasses: 'custom-panels'
        }
      })

      expect(wrapper.classes()).toContain('custom-tabs')
      const tabList = wrapper.find('[role="tablist"]')
      expect(tabList.classes()).toContain('custom-tab-list')
    })
  })

  describe('Lazy Loading', () => {
    it('renders all panels when lazy is false', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1',
          lazy: false
        }
      })

      const panels = wrapper.findAll('[role="tabpanel"]')
      expect(panels).toHaveLength(3)
    })

    it('supports lazy loading of panels', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1',
          lazy: true
        }
      })

      // With lazy loading, only the active panel should be rendered initially
      const panels = wrapper.findAll('[role="tabpanel"]')
      expect(panels).toHaveLength(1) // Only the active panel (tab1) should be rendered
    })
  })

  describe('Show/Hide Panels', () => {
    it('shows panels by default', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1'
        }
      })

      expect(wrapper.findAll('[role="tabpanel"]')).toHaveLength(3)
    })

    it('hides panels when showPanels is false', () => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          defaultValue: 'tab1',
          showPanels: false
        }
      })

      expect(wrapper.findAll('[role="tabpanel"]')).toHaveLength(0)
    })
  })

  describe('Badges and Icons', () => {
    it('renders tabs with badges', () => {
      const tabsWithBadges = [
        {
          value: 'notifications',
          label: 'Notifications',
          badge: '5',
          panelContent: '<p>Notifications content</p>'
        }
      ]

      const wrapper = mount(Tabs, {
        props: {
          tabs: tabsWithBadges,
          defaultValue: 'notifications'
        }
      })

      const badge = wrapper.find('.bg-gray-100')
      expect(badge.exists()).toBe(true)
      expect(badge.text()).toBe('5')
    })
  })
})