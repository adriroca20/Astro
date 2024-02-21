 <div align="center">

# Awesome Tailwind Animations

Get your animations easily done with only Tailwind CSS classes.

Visit the [website](https://tailwindcss-animations.vercel.app/) to get more information.
</div>
  
## Installation :book:

#### Package install

> Install the package with your favorite package manager:

- npm
```bash
npm install @adrian_rocafull/tailwind-animations
```
- pnpm
```bash
pnpm install @adrian_rocafull/tailwind-animations
```
- yarn
```bash
yarn add @adrian_rocafull/tailwind-animations
```

#### Plugin Implementation
> Use the plugin in your Tailwind CSS project:

```js
// tailwind.config.mjs
import animations from '@midudev/tailwind-animations'

export default {
  // rest of the options
  plugins: [
    animations
  ],
}
```

## Usage :gear:

#### Example

> Here are some simple examples of how to use this plugin and its animations:

```html
<div class="animate-fade-in">
  Fade in box
</div>

<div class="animate-slide-in-bottom animate-delay-300 animate-duration-slow">
  Slow animation after 300ms to slide in from bottom
</div>
```