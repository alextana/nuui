# NuUI

A modern Vue 3 UI component library built with Tailwind CSS.

## Installation

```bash
# Install the package
npm install nuui
# or
pnpm add nuui
# or
yarn add nuui

# Install peer dependencies (required)
npm install tailwindcss @tailwindcss/vite vue
# or
pnpm add tailwindcss @tailwindcss/vite vue
# or
yarn add tailwindcss @tailwindcss/vite vue
```

### Prerequisites

This library requires:
- **Vue 3.5+**
- **Tailwind CSS 4.1+** 
- **@tailwindcss/vite 4.1+**

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
    <Tag variant="primary" size="sm">
      New
    </Tag>
  </div>
</template>

<script setup>
import { Button, Tag } from 'nuui';
import 'nuui/style.css';
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
import Button from 'nuui/button';
import 'nuui/style.css';
</script>
```

```vue
<template>
  <div>
    <Tag variant="primary" size="sm">
      New
    </Tag>
  </div>
</template>

<script setup>
import Tag from 'nuui/tag';
import 'nuui/style.css';
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
  mergeButtonTheme, 
  mergeTagTheme 
} from 'nuui'

// Customize themes
const customButtonTheme = mergeButtonTheme({
  root: {
    variants: {
      custom: 'bg-purple-600 text-white hover:bg-purple-700'
    }
  }
})
```

## Components

### Button
- **Variants**: primary, secondary, tertiary, danger, success, warning
- **Sizes**: xs, sm, md, lg, xl
- **Features**: Loading states, icon support, disabled states

### Tag
- **Variants**: default, success, info, warning, danger, pending
- **Sizes**: xs, sm, md, lg, xl
- **Features**: Clickable/static modes, icon support, accessibility

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
