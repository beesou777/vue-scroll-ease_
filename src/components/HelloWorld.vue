<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1 style="height: 100vh" v-scroll-ease:right>{{ msg }}</h1>

  <div class="card reveal-left" >
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p v-scroll-ease:right>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p v-scroll-ease:left>
     more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p v-scroll-ease  class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p v-scroll-ease style="height: 100vh">sde</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
