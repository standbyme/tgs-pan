<template>
  <div id="app">
    <LinkProgress></LinkProgress>
  </div>
</template>

<script>
import LinkProgress from './components/LinkProgress'

export default {
  name: 'app',
  components: {
    LinkProgress
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
