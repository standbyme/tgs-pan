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

<style scoped>
a {
  font-size:200%;
}
</style>
