# vue-scroll-ease

`vue-scroll-ease` is a Vue 3 directive designed to add smooth reveal animations to your elements as they scroll into view. It's a lightweight and easy-to-use solution for adding scroll-triggered animations to your Vue.js applications.

## Installation

You can install `vue-scroll-ease` via npm:

```bash
npm install vue-scroll-ease

```

## Usage

First, register the `vue-scroll-ease` directive in your Vue app:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueScrollEase from 'vue-scroll-ease';
createApp(App).use(VueScrollEase).mount('#app');
```

### USAGE

Once registered, you can use the `v-scroll-ease` directive in your components to add scroll animations:

```vue
<template>
  <div v-scroll-ease="{from:200,direction:'left',rotate:360,delay:200}"></div>
</template>
```


### Directive Options

- **from**: Specifies the starting position for the animation based on the direction. No need to give a negative value as it is automatically handled based on the direction.

- **direction**: Defines the direction of the animation. Possible values are:
  - `'left'`
  - `'right'`
  - `'top'`
  - `'bottom'` (default, no need to specify)

- **rotate**: Adds rotation to the element. Accepts both positive and negative degree values (e.g., `rotate: 90` or `rotate: -90`).

- **delay**: Sets the delay (in milliseconds) before the animation starts.


### Key Features

- **Scroll Reveal Ease**: Easily apply scroll-triggered reveal animations to elements.

- **Customizable Directions**: Animate elements from various directions (`top`, `bottom`, `left`, `right`) with a simple directive.

- **Rotation**: Add rotation to elements by specifying the `rotate` value in degrees.

- **Delay**: Introduce a delay before the animation starts using the `delay` option.

- **Automatic Cleanup**: Automatically removes event listeners when elements are unmounted, preventing memory leaks.

- **Lightweight and Fast**: Minimal footprint ensures smooth and fast animations without performance degradation.

- **Easy Integration**: Quick to set up in any Vue 3 project, with flexible options for customization.

### Known Limitations

- **No TypeScript Support**: The current version of `vue-scroll-ease` does not have TypeScript support.


![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)
