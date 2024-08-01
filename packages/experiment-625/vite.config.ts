import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import styleX from 'vite-plugin-stylex';

// Check if it's a library build
const isLibraryBuild = process.env.VITE_BUILD_LIBRARY === 'true';
// @ts-expect-error - TS does not like the terary. 
export default defineConfig(() => ({
  plugins: [
    react(), // Use the React plugin for JSX transformation and React fast refresh
    dts({
      // Configuration options for vite-plugin-dts
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: [
        '**/*.stories.tsx',
        '**/*.test.tsx',
        './src/App.tsx',
        './src/ArchivedApp.tsx',
        './src/Main.tsx',
        // Add more specific paths or patterns as needed
      ],
      outDir: './dist/types',
      staticImport: true,
    }),
    ...(isLibraryBuild
      ? []
      : [
          styleX({
            libraries: [
              '@bmcwebdev/stitch-tokens',
              '@bmcwebdev/style-tokens',
            ],
          }),
        ]), // Only use stylexPlugin when not building
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: './src/index.ts', // Your library's entry point
      name: 'experiment-625', // A name for your library, used in UMD builds
      fileName: (format) => `experiment-625.${format}.js`, // Naming pattern for output files
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-aria-components',
        '@stylexjs/stylex',
        'vite-plugin-stylex',
        '@bmcwebdev/stitch-tokens/colors.stylex',
        '@bmcwebdev/stitch-tokens/fonts.stylex',
        '@bmcwebdev/stitch-tokens/sizes.stylex',
        '@bmcwebdev/stitch-tokens/layoutTokens.stylex',
        '@bmcwebdev/style-tokens/colors.stylex',
        '@bmcwebdev/style-tokens/fonts.stylex',
        '@bmcwebdev/style-tokens/sizes.stylex',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-aria-components': 'ReactAriaComponents',
          '@stylexjs/stylex': 'Stylex',
          'vite-plugin-stylex': 'StylexPlugin',
        },
      },
    },
    sourcemap: true, // Optional: Enable source map generation for debugging
    esbuild: {
      target: 'esnext',
    },
  },
}));
