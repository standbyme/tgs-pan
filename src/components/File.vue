<template>
  <div>

    <a :href="link" target="_blank">{{filename}}</a>
  </div>
</template>

<script>
export default {
  name: 'file',
  props: ['fileData'],
  data: function () {
    let filename = this.fileData.name
    let link = this.fileData.url
    return {
      filename,
      link
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-size:200%;
}
</style>
