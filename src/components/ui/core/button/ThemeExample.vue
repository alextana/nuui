<template>
  <div class="p-8 space-y-6">
    <h2 class="text-2xl font-bold mb-4">Button Theme Customization Examples</h2>

    <!-- Default Button -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">Default Theme</h3>
      <Button variant="primary" label="Default Button" />
    </div>

    <!-- Custom Gradient Theme -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">Custom Gradient Theme</h3>
      <Button
        variant="primary"
        label="Gradient Button"
        :theme="gradientTheme"
      />
    </div>

    <!-- Minimal Theme -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">Minimal Theme</h3>
      <Button
        variant="primary"
        label="Minimal Button"
        :theme="minimalTheme"
      />
    </div>

    <!-- Custom Icon Theme -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">Custom Icon Theme</h3>
      <Button
        variant="primary"
        label="Icon Button"
        :left-icon="PlusIcon"
        :theme="iconTheme"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import Button from './Button.vue'
import type { ButtonTheme } from './theme'

const PlusIcon = markRaw({
  template: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>`
})

// Custom gradient theme
const gradientTheme: ButtonTheme = {
  root: {
    base: 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative transform hover:scale-105',
    variants: {
      primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 focus:ring-purple-500 border border-transparent shadow-lg'
    },
    rounded: {
      md: 'rounded-2xl'
    }
  },
  content: {
    base: 'tracking-wide'
  }
}

// Minimal theme
const minimalTheme: ButtonTheme = {
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

// Custom icon theme
const iconTheme: ButtonTheme = {
  root: {
    variants: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent shadow-md'
    }
  },
  icon: {
    base: 'drop-shadow-md filter brightness-110'
  }
}
</script>