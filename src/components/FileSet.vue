<template>
  <div>
    <file v-for="(fileData,id) in fileSetData" :key="id" :fileData="fileData"></file>
  </div>
</template>

<script>
import File from './File'
import { client } from '../service/OSS'

export default {
  name: 'FileSet',
  data: function () {
    return {
      fileSetData: null
    }
  },
  created: function () {
    client.list({
    }).then((result) => {
      this.fileSetData = result.objects
    }).catch((err) => {
      console.log(err);
    });
  },

  components: {
    file: File
  }
}
</script>
