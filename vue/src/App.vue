<template>
  <div id="app">
    <lm-vueheader></lm-vueheader>
    <router-view></router-view>
  </div>
</template>

<script>
import LmVueheader from "./components/LmVueheader";
export default {
  name: 'App',
  components: {LmVueheader}
}
</script>

<style>

</style>
