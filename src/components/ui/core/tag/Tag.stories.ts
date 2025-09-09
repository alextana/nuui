import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { markRaw } from 'vue';
import Tag from './Tag.vue';

// Define icons as inline SVG components
const CheckIcon = markRaw({
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`
});

const XMarkIcon = markRaw({
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`
});

const ClockIcon = markRaw({
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
});

const InformationCircleIcon = markRaw({
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
});

const ExclamationTriangleIcon = markRaw({
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>`
});

const ExclamationCircleIcon = markRaw({
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
});

const meta: Meta<typeof Tag> = {
  title: 'UI/Misc/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile tag component with multiple variants, sizes, and optional clickability.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'info', 'warning', 'danger', 'pending'],
      description: 'The visual variant of the tag'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the tag'
    },
    label: {
      control: { type: 'text' },
      description: 'The text content of the tag'
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Whether the tag is clickable'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the tag is disabled (only applies to clickable tags)'
    },
    pressed: {
      control: { type: 'boolean' },
      description: 'Whether the tag appears pressed (only applies to clickable tags)'
    },
    iconLeft: {
      control: { type: 'select' },
      options: ['', 'CheckIcon', 'XMarkIcon', 'ClockIcon', 'InformationCircleIcon', 'ExclamationTriangleIcon', 'ExclamationCircleIcon'],
      description: 'Icon to display on the left side of the tag'
    },
    iconRight: {
      control: { type: 'select' },
      options: ['', 'CheckIcon', 'XMarkIcon', 'ClockIcon', 'InformationCircleIcon', 'ExclamationTriangleIcon', 'ExclamationCircleIcon'],
      description: 'Icon to display on the right side of the tag'
    },
    customClasses: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply'
    }
  },
  args: {
    variant: 'default',
    size: 'sm',
    label: 'Tag',
    clickable: false,
    disabled: false,
    pressed: false,
    iconLeft: '',
    iconRight: '',
    customClasses: ''
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to get icon component from string name
const getIconComponent = (iconName: any) => {
  if (!iconName || typeof iconName !== 'string') return undefined;
  const iconMap: Record<string, any> = {
    CheckIcon,
    XMarkIcon,
    ClockIcon,
    InformationCircleIcon,
    ExclamationTriangleIcon,
    ExclamationCircleIcon
  };
  return iconMap[iconName];
};

// Basic Examples
export const Default: Story = {
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    label: 'Default Tag'
  }
};

export const Success: Story = {
  tags: ['!dev'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    variant: 'success',
    label: 'Success'
  }
};

export const Info: Story = {
  tags: ['!dev'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    variant: 'info',
    label: 'Information'
  }
};

export const Warning: Story = {
  tags: ['!dev'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    variant: 'warning',
    label: 'Warning'
  }
};

export const Danger: Story = {
  tags: ['!dev'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    variant: 'danger',
    label: 'Danger'
  }
};

export const Pending: Story = {
  tags: ['!dev'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    variant: 'pending',
    label: 'Pending'
  }
};

// Size Variations
export const Sizes: Story = {
  tags: ['!dev'],
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex items-center gap-4">
        <Tag variant="info" size="xs" label="Extra Small" />
        <Tag variant="info" size="sm" label="Small" />
        <Tag variant="info" size="md" label="Medium" />
        <Tag variant="info" size="lg" label="Large" />
        <Tag variant="info" size="xl" label="Extra Large" />
      </div>
    `
  })
};

// All Variants
export const AllVariants: Story = {
  tags: ['!dev'],
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex flex-wrap gap-3">
        <Tag variant="default" label="Default" />
        <Tag variant="success" label="Success" />
        <Tag variant="info" label="Info" />
        <Tag variant="warning" label="Warning" />
        <Tag variant="danger" label="Danger" />
        <Tag variant="pending" label="Pending" />
      </div>
    `
  })
};

// With Icons
export const WithIcons: Story = {
  tags: ['!dev'],
  render: () => ({
    components: { Tag },
    setup() {
      return {
        CheckIcon,
        XMarkIcon,
        ClockIcon,
        InformationCircleIcon,
        ExclamationTriangleIcon,
        ExclamationCircleIcon
      };
    },
    template: `
      <div class="flex flex-wrap gap-3">
        <Tag variant="success" label="Completed" :icon-left="CheckIcon" />
        <Tag variant="danger" label="Failed" :icon-left="XMarkIcon" />
        <Tag variant="pending" label="In Progress" :icon-left="ClockIcon" />
        <Tag variant="info" label="Info" :icon-left="InformationCircleIcon" />
        <Tag variant="warning" label="Warning" :icon-left="ExclamationTriangleIcon" />
        <Tag variant="danger" label="Error" :icon-left="ExclamationCircleIcon" />
      </div>
    `
  })
};

// Example stories using args for icons
export const WithLeftIcon: Story = {
  tags: ['!dev'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    variant: 'success',
    label: 'Success',
    iconLeft: 'CheckIcon'
  }
};

export const WithRightIcon: Story = {
  tags: ['!dev'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    variant: 'danger',
    label: 'Remove',
    iconRight: 'XMarkIcon',
    clickable: true
  }
};

export const WithBothIcons: Story = {
  tags: ['!dev'],
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args,
        iconLeft: getIconComponent(args.iconLeft),
        iconRight: getIconComponent(args.iconRight)
      };
    },
    template: `<Tag v-bind="args" :icon-left="iconLeft" :icon-right="iconRight" />`
  }),
  args: {
    variant: 'info',
    label: 'Processing',
    iconLeft: 'ClockIcon',
    iconRight: 'XMarkIcon',
    clickable: true
  }
};

// Clickable Tags
export const Clickable: Story = {
  tags: ['!dev'],
  render: () => ({
    components: { Tag },
    data(): { clickCount: number } {
      return {
        clickCount: 0
      }
    },
    methods: {
      handleClick(): void {
        this.clickCount++;
      }
    },
    template: `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-3">
          <Tag variant="default" label="Click me" clickable @click="handleClick" />
          <Tag variant="success" label="Success" clickable @click="handleClick" />
          <Tag variant="info" label="Info" clickable @click="handleClick" />
          <Tag variant="warning" label="Warning" clickable @click="handleClick" />
          <Tag variant="danger" label="Danger" clickable @click="handleClick" />
          <Tag variant="pending" label="Pending" clickable @click="handleClick" />
        </div>
        <p class="text-sm text-gray-600">Clicked {{ clickCount }} times</p>
      </div>
    `
  })
};

// Disabled State
export const Disabled: Story = {
  tags: ['!dev'],
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex flex-wrap gap-3">
        <Tag variant="default" label="Disabled" clickable disabled />
        <Tag variant="success" label="Disabled" clickable disabled />
        <Tag variant="info" label="Disabled" clickable disabled />
        <Tag variant="warning" label="Disabled" clickable disabled />
        <Tag variant="danger" label="Disabled" clickable disabled />
        <Tag variant="pending" label="Disabled" clickable disabled />
      </div>
    `
  })
};

// Custom Theme
export const CustomTheme: Story = {
  tags: ['!dev'],
  args: {
    variant: 'success',
    label: 'Custom Theme',
    theme: {
      root: {
        base: 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative transform hover:scale-105 rounded-2xl',
        variants: {
          success: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600 focus:ring-green-500 border border-transparent shadow-lg'
        }
      },
      content: {
        base: 'tracking-wide'
      }
    }
  }
};

// Status Tags Example
export const StatusTags: Story = {
  tags: ['!dev'],
  render: () => ({
    components: { Tag },
    setup() {
      return {
        CheckIcon,
        XMarkIcon,
        ClockIcon
      };
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">Order Status</h3>
          <div class="flex gap-2">
            <Tag variant="pending" label="Processing" :icon-left="ClockIcon" size="sm" />
            <Tag variant="info" label="Shipped" size="sm" />
            <Tag variant="success" label="Delivered" :icon-left="CheckIcon" size="sm" />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">Task Status</h3>
          <div class="flex gap-2">
            <Tag variant="default" label="Todo" size="sm" />
            <Tag variant="warning" label="In Review" size="sm" />
            <Tag variant="success" label="Done" :icon-left="CheckIcon" size="sm" />
            <Tag variant="danger" label="Blocked" :icon-left="XMarkIcon" size="sm" />
          </div>
        </div>
      </div>
    `
  })
};

// Interactive Filter Tags
export const FilterTags: Story = {
  tags: ['!dev'],
  render: () => ({
    components: { Tag },
    setup() {
      return {
        XMarkIcon
      };
    },
    data(): { selectedTags: string[] } {
      return {
        selectedTags: ['JavaScript', 'Vue.js']
      }
    },
    methods: {
      removeTag(tag: string): void {
        this.selectedTags = this.selectedTags.filter((t: string) => t !== tag);
      }
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">Selected Filters</h3>
          <div class="flex flex-wrap gap-2">
            <Tag
              v-for="tag in selectedTags"
              :key="tag"
              variant="info"
              :label="tag"
              :icon-right="XMarkIcon"
              clickable
              size="sm"
              @click="removeTag(tag)"
            />
          </div>
          <p v-if="selectedTags.length === 0" class="text-sm text-gray-500 mt-2">No filters selected</p>
        </div>
      </div>
    `
  })
};