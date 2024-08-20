# Basic Usage

To access the extension APIs, you should use the `browser` auto-import, or import `browser` from `wxt/browser`.

```ts
console.log(browser.runtime.id);
```

For the most part, you can use extension APIs as described in Chrome and Mozilla's docs. The main difference with between WXT and Chrome's usage is you use the `browser` variable instead of `chrome`.

## Webextension Polyfill

> Since `v0.1.0`

By default, WXT uses the [`webextension-polyfill` by Mozilla](https://www.npmjs.com/package/webextension-polyfill) to make the extension API consistent between browsers.

:::info
After the release of MV3 and Chrome's official deprecation of MV2 in June 2024, the polyfill isn't really doing anything useful anymore.

Instead, it's recommended to exclude the polyfill by setting `extensionApi: "chrome"` in your `wxt.config.ts` file. Read more about this in the next section.
:::

To access types, you should import the relevant namespace from `wxt/browser`:

```ts
import { Runtime } from 'wxt/browser';

function handleMessage(message: any, sender: Runtime.Sender) {
  // ...
}
```

## Use Built-in Globals

> Since `v0.19.0`

WXT also supports excluding the polyfill and using the `chrome` or `browser` global provided by the browsers:

```ts
// wxt.config.ts
export default defineConfig({
  extensionApi: 'chrome',
});
```

This will change `wxt/browser` to look like this:

<<< @/../packages/wxt/src/browser/chrome.ts#snippet

To access types, they are available on the `browser` object itself:

```ts
function handleMessage(message: any, sender: browser.runtime.Sender) {
  // ...
}
```
