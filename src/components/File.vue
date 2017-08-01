<template>
  <div>
    <a :href="url" target="_blank">{{filename}}</a>
  </div>
</template>

<script>
export default {
  name: 'file',
  props: ['fileData'],
  data: function () {
    let filename = this.fileData.name
    let url = this.fileData.url
    return {
      filename,
      url
    }
  }
}
</script>

<style scoped>
a {
  font-size:200%;
}
</style>
