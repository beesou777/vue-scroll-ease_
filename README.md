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

| **Option**    | **Description**                                                                                   | **Example Value**                | **Notes**                                                  |
|---------------|---------------------------------------------------------------------------------------------------|---------------------------------|------------------------------------------------------------|
| **from**      | Specifies the starting position for the animation based on the direction. Automatically handled based on the chosen direction. | `200`                           | Determines how far the element should move from its initial position. |
| **direction** | Defines the direction of the animation.                                                           | `'left'`, `'right'`, `'top'`, `'bottom'`, `'left-top'`, `'right-top'`, `'left-bottom'`, `'right-bottom'` | Indicates the direction from which the element will animate into view. |
| **rotate**    | Adds rotation to the element. Accepts both positive and negative degree values.                   | `90`, `-90`                     | Defines the rotation angle in degrees.                                |
| **delay**     | Sets the delay before the animation starts (in milliseconds).                                      | `200`                           | Specifies how long to wait before the animation begins.               |
| **duration**  | Specifies the length of the animation in seconds.                                                   | `1`, `2.5`                      | Controls how long the animation lasts.                                  |

#### Examples

| **Option**    | **Example**          | **Result**                                      |
|---------------|----------------------|-------------------------------------------------|
| **from**      | `from: 100`          | The element starts 100px from its final position. |
| **direction** | `direction: 'top'`   | The element will animate from the top into view. |
| **rotate**    | `rotate: 45`         | The element will rotate 45 degrees during the animation. |
| **delay**     | `delay: 300`         | The animation will start after 300 milliseconds. |
| **duration**  | `duration: 2`        | The animation will last for 2 seconds.          |


### Key Features

- **Scroll Reveal Ease**: Easily apply scroll-triggered reveal animations to elements.

- **Customizable Directions**: Animate elements from various directions (`top`, `bottom`, `left`, `right`, `left-top`, `right-top`, `left-bottom`, `right-bottom`) with a simple directive.

- **Rotation**: Add rotation to elements by specifying the `rotate` value in degrees.

- **Delay**: Introduce a delay before the animation starts using the `delay` option.

- **Duration**: Control the length of the animation with the `duration` option.

- **Automatic Cleanup**: Automatically removes event listeners when elements are unmounted, preventing memory leaks.

- **Lightweight and Fast**: Minimal footprint ensures smooth and fast animations without performance degradation.

- **Easy Integration**: Quick to set up in any Vue 3 project, with flexible options for customization.

- **TypeScript Support**: The current version of `vue-scroll-ease` includes full TypeScript support.



## Changelog

For detailed changes and updates, please see the [CHANGELOG](https://github.com/bishwa-shah/vue-scroll-ease/blob/main/CHANGELOG.md).

## Issue
To Create Issue ,please see this [ISSUE](https://github.com/bishwa-shah/vue-scroll-ease/issues)


![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)
