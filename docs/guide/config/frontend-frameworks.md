# Frontend Frameworks

## Built-in Modules

WXT has preconfigured modules for the most popular frontend frameworks:

- [`@wxt-dev/module-react`](https://github.com/wxt-dev/wxt/tree/main/packages/module-react)
- [`@wxt-dev/module-vue`](https://github.com/wxt-dev/wxt/tree/main/packages/module-vue)
- [`@wxt-dev/module-svelte`](https://github.com/wxt-dev/wxt/tree/main/packages/module-svelte)
- [`@wxt-dev/module-solid`](https://github.com/wxt-dev/wxt/tree/main/packages/module-solid)

Install the module for your framework, then add it to your config:

:::code-group

```ts [React]
import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
});
```

```ts [Vue]
import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
});
```

```ts [Svelte]
import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-svelte'],
});
```

```ts [Solid]
import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-solid'],
});
```

:::

## Adding Vite Plugins

If your framework doesn't have an official WXT module, no worries! WXT supports any framework with a Vite plugin.

Just add the Vite plugin to your config and you're good to go! Use the framework in HTML pages or content scripts and it will just work 👍

```ts
import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';

export default defineConfig({
  vite: () => ({
    plugins: [react()],
  }),
});
```

The WXT modules just simplify the configuration and add auto-imports. They're not much different than the above.

## Multiple Apps

Since web extensions usually contain multiple UIs accross multiple entrypoints (popup, options, changelog, side panel, content scripts, etc), you'll need to create individual app instances, one per entyrypoint.

Usually, this means each entrypoint should be a directory with it's own files inside it. Here's the reecommended folder structure:

```
<root>/
├─ assets/  <------------------ Put shared assets here
│  ├─ style.css  <------------- Like styles all your pages share
│  └─ ...
├─ components/  <-------------- Put shared components here
│  └─ ...
└─ entrypoints/
   ├─ popup/  <--------------- Use a folder with an index.html file in it
   │  ├─ index.html
   │  ├─ main.tsx  <---------- Create and mount your app here
   │  ├─ style.css  <--------- Have some global styles to apply?
   │  └─ ... <---------------- Rest of the files can be named whatever
   └─ options/
      ├─ pages/  <------------ A good place to put your router pages
      │  ├─ [id]/
      │  │   └ details.tsx
      │  ├─ index.tsx
      │  └─...
      ├─ index.html
      ├─ App.vue
      ├─ main.ts
      ├─ style.css
      └─ router.ts
```

You don't have to follow this folder structure. If you want to put popup components inside `entrypoints/popup/components`, you can!

## Configuring Routers

All frameworks come with routers for building a multi-page app using the URL's path... But web extensions don't work like this. Since HTML files are static, `chrome-extension://{id}/popup.html`, there's no way to change the entire path for routing.

Instead, you need to configure the router to run in "hash" mode, where the routing information is apart of the URL's hash, not the path (ie: `popup.html#/` and `popup.html#/account/settings`).

Refer to your router's docs for information about hash mode and how to enable it. Here's a non-extensive list of a few popular routers:

- [`react-router`](https://reactrouter.com/en/main/routers/create-hash-router)
- [`vue-router`](https://router.vuejs.org/guide/essentials/history-mode.html#Hash-Mode)
- [`svelte-spa-router`](https://www.npmjs.com/package/svelte-spa-router#hash-based-routing)
- [`solid-router`](https://github.com/solidjs/solid-router?tab=readme-ov-file#hash-mode-router)
