# vue-scroll-Effect

`vue-scroll-effect` is a Vue 3 directive designed to add smooth reveal animations to your elements as they scroll into view. It's a lightweight and easy-to-use solution for adding scroll-triggered animations to your Vue.js applications . As of now it does not support typescript we are working on it .

## Installation

You can install `vue-scroll-effect` via npm:

```bash
npm install vue-scroll-effect

```

## Usage

### Registering the Directive

First, register the `vue-scroll-effect` directive in your Vue app:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueScrollEffect from 'vue-scroll-effect';

const app = createApp(App);
app.use(VueScrollEffect)
app.mount('#app');
```

### Applying the Directive

Once registered, you can use the `v-scroll-effect` directive in your components to add scroll animations:

```vue
<template>
  <div v-scroll-effect>
    <!-- Your content here -->
  </div>
   <div v-scroll-effect:left>
    <!-- Your content here -->
  </div>
  <div v-scroll-effect:right>
    <!-- Your content here -->
  </div>
</template>
```
