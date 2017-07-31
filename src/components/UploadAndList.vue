<template>
    <div>
        <Upload action="http://tgs-pan.oss-cn-qingdao.aliyuncs.com" :on-progress="handleProgress" :data="multipart_params" :on-success="handleSuccess" :show-upload-list="false">
            <Button type="success" long>Upload</Button>
        </Upload>
        <div v-for="file in uploadList">
            <LinkProgress filename="file.name" :percent="60"></LinkProgress>
        </div>
    </div>
</template>

<script>
import LinkProgress from './LinkProgress'

let Base64 = require('js-base64').Base64

let OSSAccessKeyId = 'LTAISBEyY5TsYnll'
let OSSAccessKeySecret = 'qSF7aMciE5tSqBaQjyIUhMPqFdDeAG'

let client = new OSS.Wrapper({
    region: 'oss-cn-qingdao',
    accessKeyId: OSSAccessKeyId,
    accessKeySecret: OSSAccessKeySecret,
    bucket: 'tgs-pan'
});
let raw_policy =
    `
        {
            "expiration": "2060-12-01T12:00:00.000Z",
            "conditions":
            [
                ["content-length-range", 0, 4294967296]
            ]
        }
    `
let policy = Base64.encode(raw_policy);
let signature = client.signature(policy);

let multipart_params =
    {
        policy,
        OSSAccessKeyId,
        signature,
        key: '${filename}',
    }
export default {
    name: 'UploadAndList',
    components: {
        LinkProgress
    },
    data: function () {
        return {
            multipart_params,
            uploadList: []
        }
    },
    methods: {
        handleSuccess(response, file, fileList) {
            console.log(this.uploadList)
        },
        handleProgress(event, file, fileList) {
            file.url = `http://tgs-pan.oss-cn-qingdao.aliyuncs.com/`+file.name
            this.uploadList.push(file)
        }
    }
}
</script>


<style scoped>

</style>