<template>
  <div>
    <template v-for="fileData in fileSetData">
      <file :fileData="fileData"></file>
    </template>
  </div>
</template>

<script>
import File from './File'

export default {
  name: 'FileSet',
  data: function () {
    return {
      fileSetData: null
    }
  },
  created: function () {
    let client = new OSS.Wrapper({
      region: 'oss-cn-qingdao',
      accessKeyId: 'LTAISBEyY5TsYnll',
      accessKeySecret: 'qSF7aMciE5tSqBaQjyIUhMPqFdDeAG',
      bucket: 'tgs-pan'
    });
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
