# UI Components

Reusable Vue3 UI components using TailwindCSS.

## Installation

### In your project

```bash
yarn add git+https://git@github.com/geonativefr/ui-components
```

### For development

```bash
git clone git+ssh://git@github.com:geonativefr/ui-components.git
cd ui-components
yarn install
```

## HMR

Play with `examles/App.vue` and watch for changes:

```bash
yarn dev
```

### Within your project

```bash
yarn link # Do this once, will register your local copy of ui-components as a local repository
yarn build -w
```

Then, inside your project:

```bash
yarn link @geonative/ui-components # Will override your node_modules dependency to use your local copy
yarn dev --force # Will watch for changes in your project + in ui-components
yarn unlink @geonative/ui-components # Once you're done
```
