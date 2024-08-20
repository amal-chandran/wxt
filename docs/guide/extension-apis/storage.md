# Storage

[Chrome Docs](https://developer.chrome.com/docs/extensions/reference/api/storage) • [Firefox Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)

You can use the vanilla APIs (see docs above), use [WXT's built-in storage API](/storage), or install a package from NPM.

Some popular NPM packages that support all browsers and work with WXT:

- [`webext-storage`](https://www.npmjs.com/package/webext-storage) - A more usable typed storage API for Web Extensions
- [`@webext-core/storage`](https://www.npmjs.com/package/@webext-core/storage) - A type-safe, localStorage-esk wrapper around the web extension storage APIs

My recommendation? If you're already using something, keep using it. If you're looking for a new API or are starting a new project, use the [built-in `wxt/storage`](/storage).
