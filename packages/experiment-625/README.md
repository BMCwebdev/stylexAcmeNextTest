# Experiment 625

Will need to break this up into Consumer and Maintainer sections.

Just a temporary `readme` file until more finalization.
In the meantime, to check out what is here so far...

#### [AWS Storybook](https://main.d2txqofa7g657p.amplifyapp.com/)

#### [GitHub Storybook](https://release-candidate.d2txqofa7g657p.amplifyapp.com)

- run `npm ci`
- run `npm run storybook` to see all the components.
- run `npm run dev` to start the Vite app and playground. You can edit the App.tsx file to experiment.

If you want to install this library in another app you will need to install the following in your App

- `npm install @brianAcme/stitch`
- `npm install @brianAcme/stitch-tokens`
- `npm install @brianAcme/style-tokens`
- `npm install react-aria-components`
- `npm install @stylexjs/stylex`
  - You will need a compliler for stylex. Vist their [installation page](https://stylexjs.com/docs/learn/installation/) for more information and eslint installation.
  - For Vite apps, install this: `npm install vite-plugin-stylex@0.7.0` (as of March 26 2024)

This stack so far is

- NPM
- Node
- Vite
- TypeScript
- React
- React Aria Components
- Storybook
- TypeScript (interrum CSS choice)
- SWC
- StyleX

Some To-Dos:

- Beef up the ESLint. See below.
- ~~Decide if React Aria Components will be exported as RAC (current), or if it should be a peer dependency.~~
- ~~Onboad a CSS framework.~~
  - ~~Also consider if it should be peer dependency or not.~~
  - Assuming it is not Tailwind, convert current Tailwind styles.
- Implement UX Desgin System tokens, patterns, contracts.
- ~~Onboard a testing framework.~~
- we will want to make the library build and storybook static build gitignored and move that build process and deployment over to some CI/CD.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
