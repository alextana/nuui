/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// https://vite.dev/config/
import path from 'path';
import { fileURLToPath, URL } from 'url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => ({
  build: mode === 'lib' ? {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        button: path.resolve(__dirname, 'src/components/ui/core/button/index.ts'),
        tag: path.resolve(__dirname, 'src/components/ui/core/tag/index.ts'),
        tabs: path.resolve(__dirname, 'src/components/ui/core/tabs/index.ts')
      },
      name: 'NuUI',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'tailwindcss', '@tailwindcss/vite'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  } : undefined,
  define: mode === 'lib' ? {
    'process.env.NODE_ENV': '"production"'
  } : undefined,
  plugins: [
    vue(), 
    tailwindcss(),
    ...(mode === 'lib' ? [dts({ 
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.ts', 'src/**/*.test.ts']
    })] : [])
  ],
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(__dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }, {
      // Unit tests configuration
      plugins: [vue()],
      test: {
        name: 'unit',
        environment: 'jsdom',
        globals: true
      }
    }]
  }
}));