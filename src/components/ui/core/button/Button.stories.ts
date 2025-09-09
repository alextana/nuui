import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { markRaw } from 'vue';
import Button from './Button.vue';
import ThemeExample from './ThemeExample.vue';

const PlusIcon = markRaw({
  template: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>`
});

const SearchIcon = markRaw({
  template: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`
});

const HeartIcon = markRaw({
  template: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`
});

const DownloadIcon = markRaw({
  template: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>`
});

const meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full']
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    customClasses: { control: 'text' }
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story (visible in sidebar)
export const Default: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

// All other stories hidden from sidebar with !dev tag
export const Primary: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  tags: ['!dev'],
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  tags: ['!dev'],
  args: {
    variant: 'tertiary',
    label: 'Tertiary Button',
  },
};

export const Danger: Story = {
  tags: ['!dev'],
  args: {
    variant: 'danger',
    label: 'Danger Button',
  },
};

export const Success: Story = {
  tags: ['!dev'],
  args: {
    variant: 'success',
    label: 'Success Button',
  },
};

export const Warning: Story = {
  tags: ['!dev'],
  args: {
    variant: 'warning',
    label: 'Warning Button',
  },
};

export const ExtraSmall: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    size: 'xs',
    label: 'Extra Small',
  },
};

export const Small: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    size: 'sm',
    label: 'Small',
  },
};

export const Medium: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Medium',
  },
};

export const Large: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    size: 'lg',
    label: 'Large',
  },
};

export const ExtraLarge: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    size: 'xl',
    label: 'Extra Large',
  },
};

export const WithLeftIcon: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Add Item',
    leftIcon: PlusIcon,
  },
};

export const WithRightIcon: Story = {
  tags: ['!dev'],
  args: {
    variant: 'secondary',
    label: 'Download',
    rightIcon: DownloadIcon,
  },
};

export const WithBothIcons: Story = {
  tags: ['!dev'],
  args: {
    variant: 'tertiary',
    label: 'Search',
    leftIcon: SearchIcon,
    rightIcon: DownloadIcon,
  },
};

export const IconOnly: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    leftIcon: HeartIcon,
    iconOnly: true,
  },
};

export const IconOnlyRounded: Story = {
  tags: ['!dev'],
  args: {
    variant: 'secondary',
    leftIcon: PlusIcon,
    iconOnly: true,
    rounded: 'full',
  },
};

export const Disabled: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Loading...',
    loading: true,
  },
};

export const LoadingWithIcon: Story = {
  tags: ['!dev'],
  args: {
    variant: 'success',
    label: 'Submitting',
    leftIcon: PlusIcon,
    loading: true,
  },
};

export const FullWidth: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Full Width Button',
    fullWidth: true,
  },
};

export const RoundedNone: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'No Rounded',
    rounded: 'none',
  },
};

export const RoundedSmall: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Small Rounded',
    rounded: 'sm',
  },
};

export const RoundedLarge: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Large Rounded',
    rounded: 'lg',
  },
};

export const RoundedFull: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Fully Rounded',
    rounded: 'full',
  },
};

export const CustomStyling: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Custom Styled',
    customClasses: 'shadow-lg transform hover:scale-105 transition-transform',
  },
};

export const WithSlotIcons: Story = {
  tags: ['!dev'],
  args: {
    variant: 'secondary',
    label: 'Slot Icons',
  },
  render: (args) => ({
    components: { Button, PlusIcon, SearchIcon },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <template #iconLeft>
          <PlusIcon />
        </template>
        {{ args.label }}
        <template #iconRight>
          <SearchIcon />
        </template>
      </Button>
    `,
  }),
};

export const CustomTheme: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Custom Theme',
    theme: {
      root: {
        base: 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative transform hover:scale-105',
        variants: {
          primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 focus:ring-purple-500 border border-transparent shadow-lg'
        },
        rounded: {
          md: 'rounded-2xl'
        }
      },
      icon: {
        base: 'drop-shadow-sm'
      },
      content: {
        base: 'tracking-wide'
      }
    }
  },
};

export const MinimalTheme: Story = {
  tags: ['!dev'],
  args: {
    variant: 'primary',
    label: 'Minimal Theme',
    theme: {
      root: {
        base: 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed relative',
        variants: {
          primary: 'bg-black text-white hover:bg-gray-800 border border-black'
        },
        rounded: {
          md: 'rounded-none'
        }
      }
    }
  },
};

export const ThemeExamples: Story = {
  tags: ['!dev'],
  render: () => ({
    components: { ThemeExample },
    template: '<ThemeExample />'
  })
};

// Export components for use in MDX
