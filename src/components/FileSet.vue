<template>
  <div>
    <template v-for="fileData in fileSetData">
      <file :fileData="fileData"></file>
    </template>
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
      'max-keys': 10
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
