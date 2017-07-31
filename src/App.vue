<template>
  <div id="app">
    <Row>
        <Col span="12">
        <LinkProgress filename="20170618222418.csv"></LinkProgress>
        </Col>
    </Row>
    
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
  color: #2c3e50;
}
</style>
