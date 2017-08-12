<template>
    <div>
        <Upload class="upload" action="http://tgs-pan.oss-cn-qingdao.aliyuncs.com" ref="upload" :before-upload="handleBeforeUpload" :data="multipart_params" :show-upload-list="false" multiple>
            <Button type="primary" long>Upload</Button>
        </Upload>
        <Row>
            <Col span="16" offset="4">
                <LinkProgress v-for="(file,id) in uploadList" :key="id" :filename="file.name" :percent="file.percentage"></LinkProgress>
            </Col>
        </Row>
    
    </div>
</template>

<script>
import LinkProgress from './LinkProgress'
import {
    OSSAccessKeyId,
    OSSAccessKeySecret,
    client
} from '../service/OSS'
let Base64 = require('js-base64').Base64

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
        handleBeforeUpload(file) {
            file.url = `http://tgs-pan.oss-cn-qingdao.aliyuncs.com/` + file.name
        }
    },
    mounted() {
        this.uploadList = this.$refs.upload.fileList;
    }
}
</script>

<<style scoped>
.upload{
    margin-bottom: 2%;
}
</style>
