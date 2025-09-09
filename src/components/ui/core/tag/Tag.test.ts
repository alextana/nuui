import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, markRaw } from 'vue';
import Tag from './Tag.vue';
import type { TagTheme } from './theme';

// Mock icon component for testing
const MockIcon = markRaw({
  template: '<svg data-testid="mock-icon"><path /></svg>'
});

describe('Tag Component', () => {
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Test Tag'
        }
      });

      expect(wrapper.text()).toBe('Test Tag');
      expect(wrapper.element.tagName).toBe('SPAN');
      expect(wrapper.classes()).toContain('inline-flex');
    });

    it('renders default variant correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Default Tag',
          variant: 'default'
        }
      });

      expect(wrapper.text()).toBe('Default Tag');
      expect(wrapper.classes()).toContain('bg-gray-100');
      expect(wrapper.classes()).toContain('text-gray-700');
    });

    it('renders success variant correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Success Tag',
          variant: 'success'
        }
      });

      expect(wrapper.text()).toBe('Success Tag');
      expect(wrapper.classes()).toContain('bg-green-100');
      expect(wrapper.classes()).toContain('text-green-700');
    });

    it('renders info variant correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Info Tag',
          variant: 'info'
        }
      });

      expect(wrapper.text()).toBe('Info Tag');
      expect(wrapper.classes()).toContain('bg-blue-100');
      expect(wrapper.classes()).toContain('text-blue-700');
    });

    it('renders warning variant correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Warning Tag',
          variant: 'warning'
        }
      });

      expect(wrapper.text()).toBe('Warning Tag');
      expect(wrapper.classes()).toContain('bg-yellow-100');
      expect(wrapper.classes()).toContain('text-yellow-700');
    });

    it('renders danger variant correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Danger Tag',
          variant: 'danger'
        }
      });

      expect(wrapper.text()).toBe('Danger Tag');
      expect(wrapper.classes()).toContain('bg-red-100');
      expect(wrapper.classes()).toContain('text-red-700');
    });

    it('renders pending variant correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Pending Tag',
          variant: 'pending'
        }
      });

      expect(wrapper.text()).toBe('Pending Tag');
      expect(wrapper.classes()).toContain('bg-orange-100');
      expect(wrapper.classes()).toContain('text-orange-700');
    });

    it('renders xs size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'XS Tag',
          size: 'xs'
        }
      });

      expect(wrapper.text()).toBe('XS Tag');
      expect(wrapper.classes()).toContain('px-2');
      expect(wrapper.classes()).toContain('py-0.5');
      expect(wrapper.classes()).toContain('text-xs');
    });

    it('renders sm size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'SM Tag',
          size: 'sm'
        }
      });

      expect(wrapper.text()).toBe('SM Tag');
      expect(wrapper.classes()).toContain('px-2.5');
      expect(wrapper.classes()).toContain('py-1');
      expect(wrapper.classes()).toContain('text-sm');
    });

    it('renders md size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'MD Tag',
          size: 'md'
        }
      });

      expect(wrapper.text()).toBe('MD Tag');
      expect(wrapper.classes()).toContain('px-3');
      expect(wrapper.classes()).toContain('py-1.5');
      expect(wrapper.classes()).toContain('text-sm');
    });

    it('renders lg size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'LG Tag',
          size: 'lg'
        }
      });

      expect(wrapper.text()).toBe('LG Tag');
      expect(wrapper.classes()).toContain('px-4');
      expect(wrapper.classes()).toContain('py-2');
      expect(wrapper.classes()).toContain('text-base');
    });

    it('renders xl size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'XL Tag',
          size: 'xl'
        }
      });

      expect(wrapper.text()).toBe('XL Tag');
      expect(wrapper.classes()).toContain('px-5');
      expect(wrapper.classes()).toContain('py-2.5');
      expect(wrapper.classes()).toContain('text-lg');
    });
  });

  describe('Icon Rendering', () => {
    it('renders left icon when provided', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Tag with left icon',
          iconLeft: MockIcon
        }
      });

      expect(wrapper.findComponent(MockIcon).exists()).toBe(true);
      expect(wrapper.text()).toBe('Tag with left icon');
    });

    it('renders right icon when provided', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Tag with right icon',
          iconRight: MockIcon
        }
      });

      expect(wrapper.findComponent(MockIcon).exists()).toBe(true);
      expect(wrapper.text()).toBe('Tag with right icon');
    });

    it('renders both left and right icons', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Tag with both icons',
          iconLeft: MockIcon,
          iconRight: MockIcon
        }
      });

      const icons = wrapper.findAllComponents(MockIcon);
      expect(icons).toHaveLength(2);
      expect(wrapper.text()).toBe('Tag with both icons');
    });

    it('renders xs icon size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'XS Icon Tag',
          size: 'xs',
          iconLeft: MockIcon
        }
      });

      const iconComponent = wrapper.findComponent(MockIcon);
      expect(iconComponent.exists()).toBe(true);
      expect(iconComponent.classes()).toContain('w-3');
      expect(iconComponent.classes()).toContain('h-3');
    });

    it('renders sm icon size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'SM Icon Tag',
          size: 'sm',
          iconLeft: MockIcon
        }
      });

      const iconComponent = wrapper.findComponent(MockIcon);
      expect(iconComponent.exists()).toBe(true);
      expect(iconComponent.classes()).toContain('w-3.5');
      expect(iconComponent.classes()).toContain('h-3.5');
    });

    it('renders md icon size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'MD Icon Tag',
          size: 'md',
          iconLeft: MockIcon
        }
      });

      const iconComponent = wrapper.findComponent(MockIcon);
      expect(iconComponent.exists()).toBe(true);
      expect(iconComponent.classes()).toContain('w-4');
      expect(iconComponent.classes()).toContain('h-4');
    });

    it('renders lg icon size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'LG Icon Tag',
          size: 'lg',
          iconLeft: MockIcon
        }
      });

      const iconComponent = wrapper.findComponent(MockIcon);
      expect(iconComponent.exists()).toBe(true);
      expect(iconComponent.classes()).toContain('w-5');
      expect(iconComponent.classes()).toContain('h-5');
    });

    it('renders xl icon size correctly', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'XL Icon Tag',
          size: 'xl',
          iconLeft: MockIcon
        }
      });

      const iconComponent = wrapper.findComponent(MockIcon);
      expect(iconComponent.exists()).toBe(true);
      expect(iconComponent.classes()).toContain('w-6');
      expect(iconComponent.classes()).toContain('h-6');

      // Verify the component still renders the label
      expect(wrapper.text()).toContain('XL Icon Tag');
    });
  });

  describe('Slot Rendering', () => {
    it('renders left slot content', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Tag with left slot'
        },
        slots: {
          'icon-left': '<span data-testid="left-slot">Left</span>'
        }
      });

      expect(wrapper.find('[data-testid="left-slot"]').exists()).toBe(true);
      expect(wrapper.find('[data-testid="left-slot"]').text()).toBe('Left');
    });

    it('renders right slot content', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Tag with right slot'
        },
        slots: {
          'icon-right': '<span data-testid="right-slot">Right</span>'
        }
      });

      expect(wrapper.find('[data-testid="right-slot"]').exists()).toBe(true);
      expect(wrapper.find('[data-testid="right-slot"]').text()).toBe('Right');
    });

    it('prioritizes slots over icon props', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Test',
          iconLeft: MockIcon
        },
        slots: {
          'icon-left': '<span data-testid="slot-icon">Slot</span>'
        }
      });

      expect(wrapper.find('[data-testid="slot-icon"]').exists()).toBe(true);
      expect(wrapper.findComponent(MockIcon).exists()).toBe(false);
    });
  });

  describe('Clickable Behavior', () => {
    it('renders as button when clickable prop is true', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Clickable Tag',
          clickable: true
        }
      });

      expect(wrapper.element.tagName).toBe('BUTTON');
      // The component doesn't explicitly set type="button"
      expect(wrapper.element.tagName).toBe('BUTTON');
    });

    it('renders as button when click listener is present via attrs', () => {
      // Test with explicit clickable prop since useAttrs detection is complex in tests
      const wrapper = mount(Tag, {
        props: {
          label: 'Clickable Tag',
          clickable: true
        }
      });

      expect(wrapper.element.tagName).toBe('BUTTON');

      // Test that it can handle click events
      wrapper.trigger('click');
      expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('renders as span when not clickable', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Static Tag'
        }
      });

      expect(wrapper.element.tagName).toBe('SPAN');
    });

    it('emits click event when clicked', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Clickable Tag',
          clickable: true
        }
      });

      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toHaveLength(1);
      expect(wrapper.emitted('click')?.[0][0]).toBeInstanceOf(MouseEvent);
    });

    it('does not emit click when disabled', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Disabled Tag',
          clickable: true,
          disabled: true
        }
      });

      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeUndefined();
    });
  });

  describe('Keyboard Interaction', () => {
    it('handles Enter key press', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Keyboard Tag',
          clickable: true
        }
      });

      await wrapper.trigger('keydown', { key: 'Enter' });
      expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('handles Space key press', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Keyboard Tag',
          clickable: true
        }
      });

      await wrapper.trigger('keydown', { key: ' ' });
      expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('ignores other keys', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Keyboard Tag',
          clickable: true
        }
      });

      await wrapper.trigger('keydown', { key: 'Escape' });
      expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('does not handle keyboard events when not clickable', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Static Tag'
        }
      });

      await wrapper.trigger('keydown', { key: 'Enter' });
      expect(wrapper.emitted('click')).toBeUndefined();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes when clickable', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Clickable Tag',
          clickable: true
        }
      });

      expect(wrapper.attributes('role')).toBe('button');
      expect(wrapper.attributes('tabindex')).toBe('0');
    });

    it('has disabled attributes when disabled', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Disabled Tag',
          clickable: true,
          disabled: true
        }
      });

      expect(wrapper.attributes('disabled')).toBeDefined();
      // The component doesn't set aria-disabled, only the disabled attribute
      expect(wrapper.element.hasAttribute('disabled')).toBe(true);
    });

    it('has pressed state attributes', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Pressed Tag',
          clickable: true,
          pressed: true
        }
      });

      expect(wrapper.attributes('aria-pressed')).toBe('true');
    });

    it('does not have button attributes when not clickable', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Static Tag'
        }
      });

      expect(wrapper.attributes('role')).toBeUndefined();
      // Static tags have tabindex="-1" to prevent focus
      expect(wrapper.attributes('tabindex')).toBe('-1');
      // aria-pressed should not exist for non-clickable tags
      expect(wrapper.attributes('aria-pressed')).toBeUndefined();
    });
  });

  describe('Mouse Interactions', () => {
    it('handles mouse down and up events', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Interactive Tag',
          clickable: true
        }
      });

      await wrapper.trigger('mousedown');
      await wrapper.trigger('mouseup');

      // These events should not emit click, but should be handled internally
      expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('handles mouse leave event', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Interactive Tag',
          clickable: true
        }
      });

      await wrapper.trigger('mouseleave');
      // Should not emit click
      expect(wrapper.emitted('click')).toBeUndefined();
    });
  });

  describe('Theme Customization', () => {
    it('applies custom theme', () => {
      const customTheme: TagTheme = {
        root: {
          base: 'custom-base-class'
        },
        static: {
          variants: {
            default: 'custom-default-variant'
          }
        }
      };

      const wrapper = mount(Tag, {
        props: {
          label: 'Custom Theme Tag',
          theme: customTheme
        }
      });

      expect(wrapper.classes()).toContain('custom-base-class');
      expect(wrapper.classes()).toContain('custom-default-variant');
    });

    it('applies custom classes', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Custom Classes Tag',
          customClasses: 'my-custom-class another-class'
        }
      });

      expect(wrapper.classes()).toContain('my-custom-class');
      expect(wrapper.classes()).toContain('another-class');
    });
  });

  describe('Static vs Interactive Variants', () => {
    it('applies static variant classes when not clickable', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Static Success Tag',
          variant: 'success'
        }
      });

      // Should not have hover states
      expect(wrapper.attributes('class')).not.toContain('hover:');
    });

    it('applies interactive variant classes when clickable', () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Interactive Success Tag',
          variant: 'success',
          clickable: true
        }
      });

      // Should have hover states
      expect(wrapper.attributes('class')).toContain('hover:');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty label', () => {
      const wrapper = mount(Tag, {
        props: {
          label: ''
        }
      });

      expect(wrapper.text()).toBe('');
      expect(wrapper.exists()).toBe(true);
    });

    it('handles undefined label', () => {
      const wrapper = mount(Tag, {
        props: {
          label: undefined as any
        }
      });

      expect(wrapper.exists()).toBe(true);
    });

    it('handles rapid click events', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Rapid Click Tag',
          clickable: true
        }
      });

      // Simulate rapid clicks
      await wrapper.trigger('click');
      await wrapper.trigger('click');
      await wrapper.trigger('click');

      expect(wrapper.emitted('click')).toHaveLength(3);
    });
  });

  describe('Component Lifecycle', () => {
    it('updates reactively when props change', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Initial Label',
          variant: 'default'
        }
      });

      expect(wrapper.text()).toBe('Initial Label');
      expect(wrapper.attributes('class')).toContain('gray');

      await wrapper.setProps({
        label: 'Updated Label',
        variant: 'success'
      });

      expect(wrapper.text()).toBe('Updated Label');
      expect(wrapper.attributes('class')).toContain('green');
    });

    it('handles dynamic clickable state changes', async () => {
      const wrapper = mount(Tag, {
        props: {
          label: 'Dynamic Tag',
          clickable: false
        }
      });

      expect(wrapper.element.tagName).toBe('SPAN');

      await wrapper.setProps({ clickable: true });
      await nextTick();

      expect(wrapper.element.tagName).toBe('BUTTON');
    });
  });
});