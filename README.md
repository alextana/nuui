# NuUI

A modern Vue 3 UI component library built with Tailwind CSS and TypeScript. Features beautiful animations, comprehensive accessibility support, and flexible theming.

## Installation

```bash
# Install the package
npm install nuui
# or
pnpm add nuui
# or
yarn add nuui
```

### Prerequisites

This library requires:
- **Vue 3.3+**
- **Tailwind CSS 3.0+**
- **Node.js 18+**

Make sure you have Tailwind CSS configured in your project as NuUI components rely on Tailwind classes for styling.

## Usage

### Import All Components

```vue
<template>
  <div>
    <!-- Button component -->
    <Button variant="primary" size="md">
      Click me
    </Button>
    
    <!-- Tag component -->
    <Tag variant="success" size="sm">
      New Feature
    </Tag>
    
    <!-- Tabs component -->
    <Tabs v-model="activeTab" variant="default">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
      </TabList>
      <TabPanel value="tab1">Content 1</TabPanel>
      <TabPanel value="tab2">Content 2</TabPanel>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Tag, Tabs, TabList, Tab, TabPanel } from 'nuui'
import 'nuui/style.css'

const activeTab = ref('tab1')
</script>
```

### Import Individual Components

```vue
<template>
  <div>
    <Button variant="primary" size="md">
      Click me
    </Button>
  </div>
</template>

<script setup>
import Button from 'nuui/button'
import 'nuui/style.css'
</script>
```

```vue
<template>
  <div>
    <Tag variant="warning" size="md">
      Important
    </Tag>
  </div>
</template>

<script setup>
import Tag from 'nuui/tag'
import 'nuui/style.css'
</script>
```

```vue
<template>
  <div>
    <Tabs v-model="activeTab">
      <TabList>
        <Tab value="home">Home</Tab>
        <Tab value="about">About</Tab>
      </TabList>
      <TabPanel value="home">Home content</TabPanel>
      <TabPanel value="about">About content</TabPanel>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tabs, TabList, Tab, TabPanel } from 'nuui/tabs'
import 'nuui/style.css'

const activeTab = ref('home')
</script>
```

### Benefits of Individual Imports

- **Smaller Bundle Size**: Only import the components you need
- **Better Tree Shaking**: Unused components are automatically excluded
- **Faster Build Times**: Reduced dependency graph for individual components
- **Cleaner Code**: Explicit imports make dependencies clear

### Import Themes (Optional)

```javascript
import { 
  buttonTheme, 
  tagTheme,
  tabsTheme,
  mergeButtonTheme, 
  mergeTagTheme,
  mergeTabsTheme 
} from 'nuui'

// Customize themes
const customButtonTheme = mergeButtonTheme({
  root: {
    variants: {
      custom: 'bg-purple-600 text-white hover:bg-purple-700'
    }
  }
})

const customTabsTheme = mergeTabsTheme({
  tabList: {
    variants: {
      custom: 'bg-gray-100 rounded-lg p-1'
    }
  }
})
```

## Components

### Button
- **Variants**: primary, secondary, tertiary, danger, success, warning
- **Sizes**: xs, sm, md, lg, xl
- **Features**: Loading states, icon support, disabled states, click animations, ripple effects
- **Accessibility**: Full keyboard navigation, ARIA attributes, screen reader support

### Tag
- **Variants**: default, success, info, warning, danger, pending
- **Sizes**: xs, sm, md, lg, xl
- **Features**: Clickable/static modes, icon support, accessibility

### Tabs
- **Variants**: default, pills, underline, enclosed
- **Sizes**: sm, md, lg
- **Orientations**: horizontal, vertical
- **Features**: Keyboard navigation (arrow keys, Home, End), smooth animations, lazy loading, customizable transitions
- **Components**: `Tabs` (container), `TabList` (tab navigation), `Tab` (individual tab), `TabPanel` (content panel)
- **Accessibility**: Full ARIA support, focus management, screen reader announcements

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Storybook
pnpm storybook

# Build library
pnpm build:lib

# Run tests
pnpm test
```

## TypeScript Support

This library is built with TypeScript and includes full type definitions. All components, themes, and utilities are fully typed.

## License

MIT
