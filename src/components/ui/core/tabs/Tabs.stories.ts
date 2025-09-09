import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Tabs from './Tabs.vue'
import TabGroup from './TabGroup.vue'
import TabList from './TabList.vue'
import Tab from './Tab.vue'
import TabPanel from './TabPanel.vue'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Misc/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible tabs component system that supports various styles and layouts. Tabs can be used together or separately for maximum flexibility.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline', 'cards']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical']
    },
    modelValue: {
      control: { type: 'text' }
    },
    showPanels: {
      control: { type: 'boolean' }
    },
    lazy: {
      control: { type: 'boolean' }
    },
    animated: {
      control: { type: 'boolean' }
    }
  }
}

export default meta
type Story = StoryObj<typeof Tabs>

const sampleTabs = [
  {
    value: 'overview',
    label: 'Overview',
    panelContent: '<h3 class="text-lg font-semibold mb-2">Overview</h3><p>This is the overview panel content. It provides a general introduction to the topic.</p>'
  },
  {
    value: 'details',
    label: 'Details',
    panelContent: '<h3 class="text-lg font-semibold mb-2">Details</h3><p>Here you can find detailed information about the selected item.</p>'
  },
  {
    value: 'settings',
    label: 'Settings',
    panelContent: '<h3 class="text-lg font-semibold mb-2">Settings</h3><p>Configure your preferences and options here.</p>'
  },
  {
    value: 'help',
    label: 'Help',
    disabled: true,
    panelContent: '<h3 class="text-lg font-semibold mb-2">Help</h3><p>Get assistance and support information.</p>'
  }
]

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    defaultValue: 'overview',
    variant: 'default',
    size: 'md'
  }
}

export const Pills: Story = {
  args: {
    tabs: sampleTabs,
    defaultValue: 'overview',
    variant: 'pills',
    size: 'md'
  }
}

export const Underline: Story = {
  args: {
    tabs: sampleTabs,
    defaultValue: 'overview',
    variant: 'underline',
    size: 'md'
  }
}

export const Cards: Story = {
  args: {
    tabs: sampleTabs,
    defaultValue: 'overview',
    variant: 'cards',
    size: 'md'
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      return {
        smallTabs: sampleTabs.slice(0, 3),
        mediumTabs: sampleTabs.slice(0, 3),
        largeTabs: sampleTabs.slice(0, 3)
      }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-4">Small</h3>
          <Tabs :tabs="smallTabs" size="sm" default-value="overview" />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-4">Medium</h3>
          <Tabs :tabs="mediumTabs" size="md" default-value="overview" />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-4">Large</h3>
          <Tabs :tabs="largeTabs" size="lg" default-value="overview" />
        </div>
      </div>
    `
  })
}

export const WithIcons: Story = {
  args: {
    tabs: [
      {
        value: 'home',
        label: 'Home',
        panelContent: '<p>Welcome to the home page!</p>'
      },
      {
        value: 'profile',
        label: 'Profile',
        panelContent: '<p>Manage your profile settings.</p>'
      },
      {
        value: 'notifications',
        label: 'Notifications',
        badge: '3',
        panelContent: '<p>You have 3 new notifications.</p>'
      }
    ],
    defaultValue: 'home',
    variant: 'default',
    size: 'md'
  }
}

export const Vertical: Story = {
  args: {
    tabs: sampleTabs.slice(0, 3),
    defaultValue: 'overview',
    variant: 'default',
    size: 'md',
    orientation: 'vertical'
  }
}

export const LazyLoading: Story = {
  args: {
    tabs: [
      {
        value: 'tab1',
        label: 'Tab 1',
        panelContent: '<p>This content loads immediately.</p>'
      },
      {
        value: 'tab2',
        label: 'Tab 2',
        panelContent: '<p>This content loads only when the tab is first clicked (lazy loading).</p>'
      },
      {
        value: 'tab3',
        label: 'Tab 3',
        panelContent: '<p>This content also loads lazily.</p>'
      }
    ],
    defaultValue: 'tab1',
    variant: 'default',
    size: 'md',
    lazy: true
  }
}

export const Controlled: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('overview')

      const handleTabChange = (value: string) => {
        console.log('Tab changed to:', value)
        activeTab.value = value
      }

      const switchToDetails = () => {
        activeTab.value = 'details'
      }

      return {
        activeTab,
        sampleTabs,
        handleTabChange,
        switchToDetails
      }
    },
    template: `
      <div class="space-y-4">
        <div>
          <button
            @click="switchToDetails"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Switch to Details Tab
          </button>
          <p class="text-sm text-gray-600 mt-2">Active tab: {{ activeTab }}</p>
        </div>
        <Tabs
          v-model="activeTab"
          :tabs="sampleTabs"
          @change="handleTabChange"
        />
      </div>
    `
  })
}

export const SeparateComponents: Story = {
  render: () => ({
    components: { TabGroup, TabList, Tab, TabPanel },
    setup() {
      const activeTab = ref('overview')
      return { activeTab }
    },
    template: `
      <TabGroup v-model="activeTab" default-value="overview" variant="pills">
        <template #default="{ activeTab: currentTab, setActiveTab, variant, size, orientation, theme, animated, hasBeenActive, navigationDirection }">
          <TabList
            :variant="variant"
            :size="size"
            :orientation="orientation"
            :theme="theme"
            :animated="animated"
            :active-tab="currentTab"
            :set-active-tab="setActiveTab"
            class="mb-6"
          >
            <Tab
              value="overview"
              label="Overview"
              :active-tab="currentTab"
              :variant="variant"
              :size="size"
              :orientation="orientation"
              :theme="theme"
              :animated="animated"
              :set-active-tab="setActiveTab"
            />
            <Tab
              value="details"
              label="Details"
              :active-tab="currentTab"
              :variant="variant"
              :size="size"
              :orientation="orientation"
              :theme="theme"
              :animated="animated"
              :set-active-tab="setActiveTab"
            />
            <Tab
              value="settings"
              label="Settings"
              :active-tab="currentTab"
              :variant="variant"
              :size="size"
              :orientation="orientation"
              :theme="theme"
              :animated="animated"
              :set-active-tab="setActiveTab"
            />
          </TabList>

          <div class="mt-4">
            <TabPanel
              value="overview"
              :active-tab="currentTab"
              :variant="variant"
              :size="size"
              :orientation="orientation"
              :theme="theme"
              :animated="animated"
              :has-been-active="hasBeenActive.has('overview')"
              :navigation-direction="navigationDirection"
            >
              <h3 class="text-lg font-semibold mb-2">Overview Panel</h3>
              <p>This demonstrates using the tab components separately for more control over layout.</p>
            </TabPanel>

            <TabPanel
              value="details"
              :active-tab="currentTab"
              :variant="variant"
              :size="size"
              :orientation="orientation"
              :theme="theme"
              :animated="animated"
              :has-been-active="hasBeenActive.has('details')"
              :navigation-direction="navigationDirection"
            >
              <h3 class="text-lg font-semibold mb-2">Details Panel</h3>
              <p>You can place panels anywhere in your layout, not just directly after the tabs.</p>
            </TabPanel>

            <TabPanel
              value="settings"
              :active-tab="currentTab"
              :variant="variant"
              :size="size"
              :orientation="orientation"
              :theme="theme"
              :animated="animated"
              :has-been-active="hasBeenActive.has('settings')"
              :navigation-direction="navigationDirection"
            >
              <h3 class="text-lg font-semibold mb-2">Settings Panel</h3>
              <p>This gives you maximum flexibility in your component structure.</p>
            </TabPanel>
          </div>
        </template>
      </TabGroup>
    `
  })
}

export const AnimationControl: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const animatedTabs = sampleTabs.slice(0, 3)
      return {
        animatedTabs
      }
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-4">With Animations (Default)</h3>
          <p class="text-xs text-gray-500 mb-4">Hover effects, ripples, and smooth transitions are enabled</p>
          <Tabs :tabs="animatedTabs" :animated="true" default-value="overview" variant="pills" />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-4">Without Animations</h3>
          <p class="text-xs text-gray-500 mb-4">All animations are disabled for reduced motion or performance</p>
          <Tabs :tabs="animatedTabs" :animated="false" default-value="overview" variant="pills" />
        </div>
      </div>
    `
  })
}

export const CustomStyling: Story = {
  args: {
    tabs: sampleTabs.slice(0, 3),
    defaultValue: 'overview',
    variant: 'default',
    size: 'md',
    customClasses: 'bg-gray-50 p-4 rounded-lg',
    tabListClasses: 'bg-white rounded-md shadow-sm',
    panelsContainerClasses: 'bg-white p-4 rounded-md shadow-sm mt-4'
  }
}