# Vite

WXT uses [Vite](https://vitejs.dev/) under the hood to bundle your extension. As such, all of [Vite's features](https://vitejs.dev/guide/features.html) are available when using WXT.

WXT orchastrates several different Vite builds to bundle your extension. For more info, read [How WXT Works](/guide/resources/how-wxt-works).

## Change Vite Config

You can change Vite's config via the `wxt.config.ts` file:

```ts
// wxt.config.ts
export default defineConfig({
  vite: () => ({
    // Override config here, same as `defineConfig({ ... })`
    // inside vite.config.ts files
  }),
});
```

## Add Vite Plugins

To add a plugin, install it and add it to the config:

```ts
// wxt.config.ts
export default defineConfig({
  vite: () => ({
    plugisn: [
      // ...
    ],
  }),
});
```

:::warning
Due to the way WXT orchestrates Vite builds, some plugins may not work as expected. Search [GitHub issues](https://github.com/wxt-dev/wxt/issues?q=is%3Aissue+label%3A%22vite+plugin%22) if you run into issues with a specific plugin.

If an issue doesn't exist for your plugin, please [open a new one](https://github.com/wxt-dev/wxt/issues/new/choose)!
:::
