import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { markRaw } from 'vue';
import Button from '../Button.vue';
import type { ButtonTheme } from '../theme';

// Mock icon component for testing
const MockIcon = markRaw({
  template: '<svg data-testid="mock-icon"><path /></svg>'
});

describe('Button Component', () => {
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const wrapper = mount(Button);

      expect(wrapper.element.tagName).toBe('BUTTON');
      expect(wrapper.attributes('type')).toBe('button');
      expect(wrapper.classes()).toContain('inline-flex');
    });

    it('renders with label prop', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Test Button'
        }
      });

      expect(wrapper.text()).toBe('Test Button');
    });

    it('renders with slot content', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Slot Content'
        }
      });

      expect(wrapper.text()).toBe('Slot Content');
    });

    it('prioritizes slot content over label prop', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Label Text'
        },
        slots: {
          default: 'Slot Text'
        }
      });

      expect(wrapper.text()).toBe('Slot Text');
    });
  });

  describe('Variants', () => {
    it('renders primary variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Primary Button',
          variant: 'primary'
        }
      });

      expect(wrapper.text()).toBe('Primary Button');
      expect(wrapper.classes()).toContain('bg-blue-600');
      expect(wrapper.classes()).toContain('text-white');
      expect(wrapper.classes()).toContain('border-transparent');
    });

    it('renders secondary variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Secondary Button',
          variant: 'secondary',
        },
      });

      expect(wrapper.text()).toBe('Secondary Button');
      expect(wrapper.classes()).toContain('bg-gray-100');
      expect(wrapper.classes()).toContain('text-gray-900');
    });

    it('renders tertiary variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Tertiary Button',
          variant: 'tertiary',
        },
      });

      expect(wrapper.text()).toBe('Tertiary Button');
      expect(wrapper.classes()).toContain('bg-transparent');
      expect(wrapper.classes()).toContain('text-blue-600');
    });

    it('renders danger variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Danger Button',
          variant: 'danger'
        }
      });

      expect(wrapper.text()).toBe('Danger Button');
      expect(wrapper.classes()).toContain('bg-red-600');
      expect(wrapper.classes()).toContain('text-white');
    });

    it('renders success variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Success Button',
          variant: 'success'
        }
      });

      expect(wrapper.text()).toBe('Success Button');
      expect(wrapper.classes()).toContain('bg-green-600');
      expect(wrapper.classes()).toContain('text-white');
    });

    it('renders warning variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Warning Button',
          variant: 'warning',
        },
      });

      expect(wrapper.text()).toBe('Warning Button');
      expect(wrapper.classes()).toContain('bg-yellow-500');
      expect(wrapper.classes()).toContain('text-white');
    });
  });

  describe('Sizes', () => {
    it('renders xs size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'XS Button',
          size: 'xs',
        },
      });

      expect(wrapper.text()).toBe('XS Button');
      expect(wrapper.classes()).toContain('px-2');
      expect(wrapper.classes()).toContain('py-1');
      expect(wrapper.classes()).toContain('text-xs');
    });

    it('renders sm size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'SM Button',
          size: 'sm',
        },
      });

      expect(wrapper.text()).toBe('SM Button');
      expect(wrapper.classes()).toContain('px-3');
      expect(wrapper.classes()).toContain('py-1.5');
      expect(wrapper.classes()).toContain('text-sm');
    });

    it('renders md size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'MD Button',
          size: 'md',
        },
      });

      expect(wrapper.text()).toBe('MD Button');
      expect(wrapper.classes()).toContain('px-4');
      expect(wrapper.classes()).toContain('py-2');
      expect(wrapper.classes()).toContain('text-sm');
    });

    it('renders lg size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'LG Button',
          size: 'lg',
        },
      });

      expect(wrapper.text()).toBe('LG Button');
      expect(wrapper.classes()).toContain('px-6');
      expect(wrapper.classes()).toContain('py-3');
      expect(wrapper.classes()).toContain('text-base');
    });

    it('renders xl size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'XL Button',
          size: 'xl',
        },
      });

      expect(wrapper.text()).toBe('XL Button');
      expect(wrapper.classes()).toContain('px-8');
      expect(wrapper.classes()).toContain('py-4');
      expect(wrapper.classes()).toContain('text-lg');
    });
  });

  describe('Icon Only Sizes', () => {
    it('renders xs icon-only size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          leftIcon: MockIcon,
          size: 'xs',
          iconOnly: true,
        },
      });

      expect(wrapper.classes()).toContain('p-1');
    });

    it('renders sm icon-only size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          leftIcon: MockIcon,
          size: 'sm',
          iconOnly: true,
        },
      });

      expect(wrapper.classes()).toContain('p-1.5');
    });

    it('renders md icon-only size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          leftIcon: MockIcon,
          size: 'md',
          iconOnly: true,
        },
      });

      expect(wrapper.classes()).toContain('p-2');
    });

    it('renders lg icon-only size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          leftIcon: MockIcon,
          size: 'lg',
          iconOnly: true,
        },
      });

      expect(wrapper.classes()).toContain('p-3');
    });

    it('renders xl icon-only size correctly', () => {
      const wrapper = mount(Button, {
        props: {
          leftIcon: MockIcon,
          size: 'xl',
          iconOnly: true,
        },
      });

      expect(wrapper.classes()).toContain('p-4');
    });
  });

  describe('Rounded Variants', () => {
    it('renders none rounded variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'No Rounded Button',
          rounded: 'none',
        },
      });

      expect(wrapper.text()).toBe('No Rounded Button');
      expect(wrapper.classes()).toContain('rounded-none');
    });

    it('renders sm rounded variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'SM Rounded Button',
          rounded: 'sm',
        },
      });

      expect(wrapper.text()).toBe('SM Rounded Button');
      expect(wrapper.classes()).toContain('rounded-sm');
    });

    it('renders md rounded variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'MD Rounded Button',
          rounded: 'md',
        },
      });

      expect(wrapper.text()).toBe('MD Rounded Button');
      expect(wrapper.classes()).toContain('rounded-md');
    });

    it('renders lg rounded variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'LG Rounded Button',
          rounded: 'lg',
        },
      });

      expect(wrapper.text()).toBe('LG Rounded Button');
      expect(wrapper.classes()).toContain('rounded-lg');
    });

    it('renders full rounded variant correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Full Rounded Button',
          rounded: 'full',
        },
      });

      expect(wrapper.text()).toBe('Full Rounded Button');
      expect(wrapper.classes()).toContain('rounded-full');
    });
  });

  describe('Button Types', () => {
    const types = ['button', 'submit', 'reset'] as const;

    types.forEach(type => {
      it(`renders with type="${type}"`, () => {
        const wrapper = mount(Button, {
          props: {
            label: 'Test Button',
            type
          }
        });

        expect(wrapper.attributes('type')).toBe(type);
      });
    });
  });

  describe('States', () => {
    it('renders disabled state correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Disabled Button',
          disabled: true
        }
      });

      expect(wrapper.attributes('disabled')).toBeDefined();
      expect(wrapper.classes()).toContain('disabled:opacity-50');
    });

    it('renders loading state correctly', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Loading Button',
          loading: true
        }
      });

      const spinner = wrapper.find('svg');
      expect(spinner.exists()).toBe(true);
      expect(spinner.classes()).toContain('animate-spin');
    });

    it('hides content when loading', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Loading Button',
          loading: true
        }
      });

      const contentSpan = wrapper.find('span:not([class*="absolute"])');
      expect(contentSpan.classes()).toContain('opacity-0');
    });
  });

  describe('Icons', () => {
    it('renders left icon from prop', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Button with Icon',
          leftIcon: MockIcon
        }
      });

      const icon = wrapper.find('[data-testid="mock-icon"]');
      expect(icon.exists()).toBe(true);
    });

    it('renders right icon from prop', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Button with Icon',
          rightIcon: MockIcon
        }
      });

      const icon = wrapper.find('[data-testid="mock-icon"]');
      expect(icon.exists()).toBe(true);
    });

    it('renders left icon from slot', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Button with Icon'
        },
        slots: {
          iconLeft: '<span data-testid="left-icon">←</span>'
        }
      });

      const icon = wrapper.find('[data-testid="left-icon"]');
      expect(icon.exists()).toBe(true);
    });

    it('renders right icon from slot', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Button with Icon'
        },
        slots: {
          iconRight: '<span data-testid="right-icon">→</span>'
        }
      });

      const icon = wrapper.find('[data-testid="right-icon"]');
      expect(icon.exists()).toBe(true);
    });

    it('prioritizes slot over prop for left icon', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Button with Icon',
          leftIcon: MockIcon
        },
        slots: {
          iconLeft: '<span data-testid="slot-icon">←</span>'
        }
      });

      const slotIcon = wrapper.find('[data-testid="slot-icon"]');
      const propIcon = wrapper.find('[data-testid="mock-icon"]');

      expect(slotIcon.exists()).toBe(true);
      expect(propIcon.exists()).toBe(false);
    });

    it('applies correct margin classes for left icon with content', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Button with Icon',
          leftIcon: MockIcon
        }
      });

      const iconSpan = wrapper.find('span').element;
      expect(iconSpan.className).toContain('mr-2');
    });

    it('applies correct margin classes for right icon with content', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Button with Icon',
          rightIcon: MockIcon
        }
      });

      const iconSpans = wrapper.findAll('span');
      const rightIconSpan = iconSpans[iconSpans.length - 1];
      expect(rightIconSpan.element.className).toContain('ml-2');
    });
  });

  describe('Icon Only Mode', () => {
    it('renders in icon-only mode', () => {
      const wrapper = mount(Button, {
        props: {
          leftIcon: MockIcon,
          iconOnly: true
        }
      });

      const icon = wrapper.find('[data-testid="mock-icon"]');
      expect(icon.exists()).toBe(true);

      // Should not have margin classes in icon-only mode
      const iconSpan = wrapper.find('span').element;
      expect(iconSpan.className).not.toContain('mr-2');
    });

    it('applies icon-only size classes', () => {
      const wrapper = mount(Button, {
        props: {
          leftIcon: MockIcon,
          iconOnly: true,
          size: 'lg'
        }
      });

      expect(wrapper.attributes('class')).toBeTruthy();
    });
  });

  describe('Full Width', () => {
    it('applies full width class', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Full Width Button',
          fullWidth: true
        }
      });

      expect(wrapper.classes()).toContain('w-full');
    });
  });

  describe('Custom Classes', () => {
    it('applies custom classes', () => {
      const customClass = 'custom-button-class';
      const wrapper = mount(Button, {
        props: {
          label: 'Custom Button',
          customClasses: customClass
        }
      });

      expect(wrapper.classes()).toContain(customClass);
    });
  });

  describe('Click Events', () => {
    it('emits click event when clicked', async () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Clickable Button'
        }
      });

      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeTruthy();
      expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('does not emit click when disabled', async () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Disabled Button',
          disabled: true
        }
      });

      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeFalsy();
    });

    it('does not emit click when loading', async () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Loading Button',
          loading: true
        }
      });

      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeFalsy();
    });

    it('passes mouse event to click handler', async () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Event Button'
        }
      });

      await wrapper.trigger('click');
      const clickEvents = wrapper.emitted('click') as MouseEvent[][];
      expect(clickEvents[0][0]).toBeInstanceOf(MouseEvent);
    });
  });

  describe('Haptic Feedback', () => {
    it('calls vibrate when haptic is enabled', async () => {
      const vibrateSpy = vi.fn();
      Object.defineProperty(navigator, 'vibrate', {
        value: vibrateSpy,
        writable: true,
        configurable: true,
      });

      const wrapper = mount(Button, {
        props: {
          haptic: true,
        },
      });

      await wrapper.find('button').trigger('click');
      expect(vibrateSpy).toHaveBeenCalledWith(50);
    });

    it('handles missing vibrate API gracefully', async () => {
      // Mock navigator without vibrate
      const originalVibrate = navigator.vibrate;
      Object.defineProperty(navigator, 'vibrate', {
        value: undefined,
        writable: true,
        configurable: true,
      });

      const wrapper = mount(Button, {
        props: {
          haptic: true,
        },
      });

      // Should not throw an error
      await expect(wrapper.find('button').trigger('click')).resolves.not.toThrow();

      // Restore original vibrate
      Object.defineProperty(navigator, 'vibrate', {
        value: originalVibrate,
        writable: true,
        configurable: true,
      });
    });
  });

  describe('Theme Customization', () => {
    it('applies custom theme', () => {
      const customTheme: ButtonTheme = {
        root: {
          base: 'custom-base-class',
          variants: {
            primary: 'custom-primary-class'
          }
        }
      };

      const wrapper = mount(Button, {
        props: {
          label: 'Custom Theme Button',
          theme: customTheme
        }
      });

      expect(wrapper.classes()).toContain('custom-base-class');
      expect(wrapper.classes()).toContain('custom-primary-class');
    });

    it('merges custom theme with default theme', () => {
      const customTheme: ButtonTheme = {
        root: {
          variants: {
            primary: 'custom-primary-override'
          }
        }
      };

      const wrapper = mount(Button, {
        props: {
          label: 'Merged Theme Button',
          theme: customTheme,
          variant: 'primary'
        }
      });

      // Should have both default base classes and custom variant
      expect(wrapper.classes()).toContain('inline-flex');
      expect(wrapper.classes()).toContain('custom-primary-override');
    });
  });

  describe('Loading Spinner Sizes', () => {
    it('renders correct spinner size for xs', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Loading Button',
          loading: true,
          size: 'xs'
        }
      });

      const spinner = wrapper.find('svg');
      expect(spinner.exists()).toBe(true);
      expect(spinner.classes()).toContain('w-3');
      expect(spinner.classes()).toContain('h-3');
    });

    it('renders correct spinner size for sm', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Loading Button',
          loading: true,
          size: 'sm'
        }
      });

      const spinner = wrapper.find('svg');
      expect(spinner.exists()).toBe(true);
      expect(spinner.classes()).toContain('w-4');
      expect(spinner.classes()).toContain('h-4');
    });

    it('renders correct spinner size for md', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Loading Button',
          loading: true,
          size: 'md'
        }
      });

      const spinner = wrapper.find('svg');
      expect(spinner.exists()).toBe(true);
      expect(spinner.classes()).toContain('w-4');
      expect(spinner.classes()).toContain('h-4');
    });

    it('renders correct spinner size for lg', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Loading Button',
          loading: true,
          size: 'lg'
        }
      });

      const spinner = wrapper.find('svg');
      expect(spinner.exists()).toBe(true);
      expect(spinner.classes()).toContain('w-5');
      expect(spinner.classes()).toContain('h-5');
    });

    it('renders correct spinner size for xl', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Loading Button',
          loading: true,
          size: 'xl'
        }
      });

      const spinner = wrapper.find('svg');
      expect(spinner.exists()).toBe(true);
      expect(spinner.classes()).toContain('w-6');
      expect(spinner.classes()).toContain('h-6');
    });
  });

  describe('Icon Sizes', () => {
    it('renders correct icon size for xs', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Icon Button',
          leftIcon: MockIcon,
          size: 'xs'
        }
      });

      const iconWrapper = wrapper.find('span:first-child');
      expect(iconWrapper.exists()).toBe(true);
      expect(iconWrapper.classes()).toContain('w-3');
      expect(iconWrapper.classes()).toContain('h-3');
    });

    it('renders correct icon size for sm', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Icon Button',
          leftIcon: MockIcon,
          size: 'sm'
        }
      });

      const iconWrapper = wrapper.find('span:first-child');
      expect(iconWrapper.exists()).toBe(true);
      expect(iconWrapper.classes()).toContain('w-4');
      expect(iconWrapper.classes()).toContain('h-4');
    });

    it('renders correct icon size for md', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Icon Button',
          leftIcon: MockIcon,
          size: 'md'
        }
      });

      const iconWrapper = wrapper.find('span:first-child');
      expect(iconWrapper.exists()).toBe(true);
      expect(iconWrapper.classes()).toContain('w-4');
      expect(iconWrapper.classes()).toContain('h-4');
    });

    it('renders correct icon size for lg', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Icon Button',
          leftIcon: MockIcon,
          size: 'lg'
        }
      });

      const iconWrapper = wrapper.find('span:first-child');
      expect(iconWrapper.exists()).toBe(true);
      expect(iconWrapper.classes()).toContain('w-5');
      expect(iconWrapper.classes()).toContain('h-5');
    });

    it('renders correct icon size for xl', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Icon Button',
          leftIcon: MockIcon,
          size: 'xl'
        }
      });

      const iconWrapper = wrapper.find('span:first-child');
      expect(iconWrapper.exists()).toBe(true);
      expect(iconWrapper.classes()).toContain('w-6');
      expect(iconWrapper.classes()).toContain('h-6');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty label gracefully', () => {
      const wrapper = mount(Button, {
        props: {
          label: ''
        }
      });

      expect(wrapper.text()).toBe('');
    });

    it('handles undefined label gracefully', () => {
      const wrapper = mount(Button);
      expect(wrapper.text()).toBe('');
    });

    it('handles both icons and loading state', () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Complex Button',
          leftIcon: MockIcon,
          rightIcon: MockIcon,
          loading: true
        }
      });

      const spinner = wrapper.find('svg');
      expect(spinner.exists()).toBe(true);
    });

    it('handles rapid click events', async () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Rapid Click Button'
        }
      });

      await wrapper.trigger('click');
      await wrapper.trigger('click');
      await wrapper.trigger('click');

      expect(wrapper.emitted('click')).toHaveLength(3);
    });
  });

  describe('Component Lifecycle', () => {
    it('updates reactively when props change', async () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Initial Label',
          variant: 'primary'
        }
      });

      expect(wrapper.text()).toBe('Initial Label');

      await wrapper.setProps({
        label: 'Updated Label',
        variant: 'secondary'
      });

      expect(wrapper.text()).toBe('Updated Label');
    });

    it('handles dynamic loading state changes', async () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Dynamic Button',
          loading: false
        }
      });

      expect(wrapper.find('svg').exists()).toBe(false);

      await wrapper.setProps({ loading: true });
      expect(wrapper.find('svg').exists()).toBe(true);

      await wrapper.setProps({ loading: false });
      expect(wrapper.find('svg').exists()).toBe(false);
    });

    it('handles dynamic disabled state changes', async () => {
      const wrapper = mount(Button, {
        props: {
          label: 'Dynamic Button',
          disabled: false
        }
      });

      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toHaveLength(1);

      await wrapper.setProps({ disabled: true });
      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toHaveLength(1); // Should not increase
    });
  });
});