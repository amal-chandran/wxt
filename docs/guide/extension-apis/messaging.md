# Messaging

The vanilla APIs for sending messages are difficult to use. Instead of using the APIs directly, it's recommended to install an NPM package that wraps around the vanilla APIs, making it much easier to use.

Here are some popular messaging libraries that support all browsers and work with WXT:

- [`trpc-chrome`](https://www.npmjs.com/package/trpc-chrome) - [tRPC](https://trpc.io/) adapter for Web Extensions.
- [`webext-bridge`](https://www.npmjs.com/package/webext-bridge) - Messaging in WebExtensions made super easy. Out of the box.
- [`@webext-core/messaging`](https://www.npmjs.com/package/@webext-core/messaging) - Light weight, type-safe wrapper around the web extension messaging APIs
- [`@webext-core/proxy-service`](https://www.npmjs.com/package/@webext-core/proxy-service) - A type-safe wrapper around the web extension messaging APIs that lets you call a function from anywhere, but execute it in the background.

If you would like to use the vanilla APIs, you're welcome to! Checkout [Chrome](https://developer.chrome.com/docs/extensions/develop/concepts/messaging) and [Mozilla](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts)'s docs to learn how to use them.
