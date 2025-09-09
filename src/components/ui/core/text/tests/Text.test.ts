import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Text } from '../index'

describe('Text', () => {
  it('renders with default props', () => {
    const wrapper = mount(Text, {
      props: {
        children: 'Hello World'
      }
    })

    expect(wrapper.text()).toBe('Hello World')
    expect(wrapper.element.tagName).toBe('P')
  })

  it('renders with custom element', () => {
    const wrapper = mount(Text, {
      props: {
        as: 'h1',
        children: 'Heading'
      }
    })

    expect(wrapper.element.tagName).toBe('H1')
    expect(wrapper.text()).toBe('Heading')
  })

  it('renders with slot content', () => {
    const wrapper = mount(Text, {
      slots: {
        default: 'Slot content'
      }
    })

    expect(wrapper.text()).toBe('Slot content')
  })

  it('applies variant classes', () => {
    const wrapper = mount(Text, {
      props: {
        variant: 'headingLg',
        children: 'Large heading'
      }
    })

    expect(wrapper.classes()).toContain('text-xl')
    expect(wrapper.classes()).toContain('font-semibold')
  })

  it('applies tone classes', () => {
    const wrapper = mount(Text, {
      props: {
        tone: 'critical',
        children: 'Error message'
      }
    })

    expect(wrapper.classes()).toContain('text-red-600')
  })

  it('applies alignment classes', () => {
    const wrapper = mount(Text, {
      props: {
        alignment: 'center',
        children: 'Centered text'
      }
    })

    expect(wrapper.classes()).toContain('text-center')
  })

  it('applies font weight classes', () => {
    const wrapper = mount(Text, {
      props: {
        fontWeight: 'bold',
        children: 'Bold text'
      }
    })

    expect(wrapper.classes()).toContain('font-bold')
  })

  it('applies decoration classes', () => {
    const wrapper = mount(Text, {
      props: {
        textDecorationLine: 'line-through',
        children: 'Strikethrough text'
      }
    })

    expect(wrapper.classes()).toContain('line-through')
  })

  it('applies utility classes', () => {
    const wrapper = mount(Text, {
      props: {
        breakWord: true,
        truncate: true,
        numeric: true,
        children: 'Utility text'
      }
    })

    expect(wrapper.classes()).toContain('break-words')
    expect(wrapper.classes()).toContain('truncate')
    expect(wrapper.classes()).toContain('font-mono')
    expect(wrapper.classes()).toContain('tabular-nums')
  })

  it('applies visually hidden class', () => {
    const wrapper = mount(Text, {
      props: {
        visuallyHidden: true,
        children: 'Hidden text'
      }
    })

    expect(wrapper.classes()).toContain('sr-only')
  })

  it('applies custom classes', () => {
    const wrapper = mount(Text, {
      props: {
        customClasses: 'custom-class another-class',
        children: 'Custom styled text'
      }
    })

    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.classes()).toContain('another-class')
  })

  it('sets id attribute', () => {
    const wrapper = mount(Text, {
      props: {
        id: 'test-id',
        children: 'Text with ID'
      }
    })

    expect(wrapper.attributes('id')).toBe('test-id')
  })

  it('works with different semantic elements', () => {
    const elements = ['span', 'div', 'h1', 'h2', 'h3', 'strong', 'em', 'code'] as const

    elements.forEach(element => {
      const wrapper = mount(Text, {
        props: {
          as: element,
          children: `${element} content`
        }
      })

      expect(wrapper.element.tagName).toBe(element.toUpperCase())
    })
  })

  it('merges custom theme', () => {
    const customTheme = {
      root: {
        base: 'custom-base-class',
        variants: {
          bodyMd: 'custom-variant-class font-black'
        }
      }
    }

    const wrapper = mount(Text, {
      props: {
        theme: customTheme,
        variant: 'bodyMd',
        children: 'Custom themed text'
      }
    })

    expect(wrapper.classes()).toContain('custom-base-class')
    expect(wrapper.classes()).toContain('custom-variant-class')
    expect(wrapper.classes()).toContain('font-black')
  })
})