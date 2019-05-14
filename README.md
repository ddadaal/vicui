# VicUI

A component-based UI Library built from ground up.

**UNDER EARLY DEVELOPMENT**

## Installation

`yarn add vicui`

## Features

- **[PostCSS](https://postcss.org/)** with **[nesting](https://github.com/postcss/postcss-nested)** support
- Expose **[CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)** for easy customization and extension
- Default **light & dark** themes provided
- **React** wrapper components written in **TypeScript**
- Supercharged with [styled-system](https://styled-system.com)

## Use

Not compatible with CSS Modules! CSS-in-js is recommended.

1. Setup your project to support css
2. `import "vicui/dist/vicui.css";` somewhere in your project
3. Import React components like `import { Button, Input } from "vicui";`

## Preview

```shell

# Build bundle and css
yarn build

```

## Todo List

- [x] Button
- [x] Card
- [x] Tag
- [x] Dropdown
- [ ] Layout
- [x] Input

## License

MIT