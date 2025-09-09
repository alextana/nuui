import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Text } from './index'

const meta: Meta<typeof Text> = {
  title: 'UI/Input/Text',
  component: Text,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible text component for typography with various semantic elements, variants, and styling options.'
      }
    }
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em', 'small', 'mark', 'del', 'ins', 'sub', 'sup', 'code', 'kbd', 'samp', 'var', 'time', 'abbr', 'dfn', 'q', 'cite', 'blockquote', 'pre', 'address', 'dt', 'dd', 'legend'],
      description: 'The HTML element to render'
    },
    variant: {
      control: 'select',
      options: ['heading3xl', 'heading2xl', 'headingXl', 'headingLg', 'headingMd', 'headingSm', 'headingXs', 'bodyLg', 'bodyMd', 'bodySm', 'bodyXs'],
      description: 'Typography variant'
    },
    tone: {
      control: 'select',
      options: ['base', 'subdued', 'disabled', 'success', 'critical', 'caution', 'inherit', 'text-inverse', 'text-inverse-secondary'],
      description: 'Text tone/color'
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end', 'justify'],
      description: 'Text alignment'
    },
    fontWeight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Font weight override'
    },
    textDecorationLine: {
      control: 'select',
      options: ['line-through'],
      description: 'Text decoration'
    },
    children: {
      control: 'text',
      description: 'Text content'
    },
    breakWord: {
      control: 'boolean',
      description: 'Prevent text from overflowing'
    },
    truncate: {
      control: 'boolean',
      description: 'Truncate text with ellipsis'
    },
    numeric: {
      control: 'boolean',
      description: 'Use monospace font for numeric content'
    },
    visuallyHidden: {
      control: 'boolean',
      description: 'Visually hide the text (for screen readers)'
    }
  }
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'This is default body text'
  }
}

export const Headings: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-4">
        <Text variant="heading3xl" as="h1">Heading 3XL (h1)</Text>
        <Text variant="heading2xl" as="h2">Heading 2XL (h2)</Text>
        <Text variant="headingXl" as="h3">Heading XL (h3)</Text>
        <Text variant="headingLg" as="h4">Heading Large (h4)</Text>
        <Text variant="headingMd" as="h5">Heading Medium (h5)</Text>
        <Text variant="headingSm" as="h6">Heading Small (h6)</Text>
        <Text variant="headingXs" as="h6">Heading XS (h6)</Text>
      </div>
    `
  })
}

export const BodyText: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-4">
        <Text variant="bodyLg">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text variant="bodyMd">Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text variant="bodySm">Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text variant="bodyXs">Body XS - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </div>
    `
  })
}

export const Tones: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text tone="base">Base tone text</Text>
        <Text tone="subdued">Subdued tone text</Text>
        <Text tone="disabled">Disabled tone text</Text>
        <Text tone="success">Success tone text</Text>
        <Text tone="critical">Critical tone text</Text>
        <Text tone="caution">Caution tone text</Text>
      </div>
    `
  })
}

export const Alignments: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-4 w-full">
        <Text alignment="start">Left aligned text</Text>
        <Text alignment="center">Center aligned text</Text>
        <Text alignment="end">Right aligned text</Text>
        <Text alignment="justify">Justified text that spans multiple lines to demonstrate the justify alignment behavior with longer content.</Text>
      </div>
    `
  })
}

export const FontWeights: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text fontWeight="regular">Regular font weight</Text>
        <Text fontWeight="medium">Medium font weight</Text>
        <Text fontWeight="semibold">Semibold font weight</Text>
        <Text fontWeight="bold">Bold font weight</Text>
      </div>
    `
  })
}

export const Utilities: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-4 max-w-xs">
        <div>
          <Text class="text-sm text-gray-600 mb-1">Break Word:</Text>
          <Text breakWord>Thisisaverylongwordthatwillbreakacrossmultiplelines</Text>
        </div>
        <div>
          <Text class="text-sm text-gray-600 mb-1">Truncate:</Text>
          <Text truncate>This is a very long text that will be truncated with ellipsis</Text>
        </div>
        <div>
          <Text class="text-sm text-gray-600 mb-1">Numeric (monospace):</Text>
          <Text numeric>1234567890 $1,234.56</Text>
        </div>
        <div>
          <Text class="text-sm text-gray-600 mb-1">Line Through:</Text>
          <Text textDecorationLine="line-through">Strikethrough text</Text>
        </div>
      </div>
    `
  })
}

export const SemanticElements: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text as="strong">Strong text (strong element)</Text>
        <Text as="em">Emphasized text (em element)</Text>
        <Text as="code" class="bg-gray-100 px-1 rounded">Code text (code element)</Text>
        <Text as="kbd" class="bg-gray-200 px-1 rounded border">Keyboard input (kbd element)</Text>
        <Text as="mark" class="bg-yellow-200">Highlighted text (mark element)</Text>
        <Text as="small">Small text (small element)</Text>
        <Text as="del">Deleted text (del element)</Text>
        <Text as="ins">Inserted text (ins element)</Text>
      </div>
    `
  })
}

export const CustomTheme: Story = {
  args: {
    children: 'Custom themed text',
    variant: 'headingLg',
    theme: {
      root: {
        variants: {
          headingLg: 'text-2xl font-black text-purple-600'
        }
      }
    }
  }
}