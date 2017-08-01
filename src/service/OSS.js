const OSSAccessKeyId = 'LTAISBEyY5TsYnll'
const OSSAccessKeySecret = 'qSF7aMciE5tSqBaQjyIUhMPqFdDeAG'

const client = new OSS.Wrapper({
    region: 'oss-cn-qingdao',
    accessKeyId: OSSAccessKeyId,
    accessKeySecret: OSSAccessKeySecret,
    bucket: 'tgs-pan'
})

export {
    OSSAccessKeyId,
    OSSAccessKeySecret,
    client
}