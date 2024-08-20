# Browser Support

One of WXT's main goals is to support all major browser. This means Chrome, Chromium (edge, opera, etc), Safari, and Firefox.

WXT also support both MV2 and MV3 because on Safari and Firefox, MV2 provides a better UX and access to MV2-only APIs.

## Target Browsers

To create versions of your extension targetting a specific browser, use the `-b` CLI flag.

```sh
wxt             # Target's Chrome by default
wxt -b chrome   # Target's Chrome
wxt -b firefox  # Target's Firefox
wxt -b custom   # Custom target
```

Targetting a browser has several affects:

1. During development, when passing `firefox`, WXT will automatically open Firefox with the extension installed. For all other browsers, it will open Chrome/Chromium
2. Changes build-time constants provided by WXT:
   - `import.meta.env.BROWSER`: A string, the target browser, equal to the `-b` flag
   - `import.meta.env.CHROME`: A boolean equivalent to `import.meta.env.BROWSER === "chrome"`
   - `import.meta.env.FIREFOX`: A boolean equivalent to `import.meta.env.BROWSER === "firefox"`
   - `import.meta.env.EDGE`: A boolean equivalent to `import.meta.env.BROWSER === "edge"`
   - `import.meta.env.SAFARI`: A boolean equivalent to `import.meta.env.BROWSER === "safari"`
   - `import.meta.env.OPERA`: A boolean equivalent to `import.meta.env.BROWSER === "opera"`

## Target Manfifest Version

To target specific manifest versions, use the `--mv2` or `--mv3` CLI flags.

:::tip Default Manifest Version
By default, WXT will target MV2 for Safari and Firefox and MV3 for all other browers.
:::

To get the target manifest version at runtime, use the built-time constant provided by WXT:

- `import.meta.env.MANIFEST_VERSION`: A number, either `2` or `3`
