<template>
    <div class="container">
        <Progress :percent="percent" :stroke-width="26" hide-info></Progress>
        <a class="link" :href="url" target="_blank">{{filename}}</a>
    </div>
</template>

<script>
export default {
    name: 'LinkProgress',
    props: ['filename', 'percent'],
    data() {
        return {
            url: `http://tgs-pan.oss-cn-qingdao.aliyuncs.com/${this.filename}`
        }
    }
}
</script>

<style scoped>
.link {
    position: absolute;
    color: white;
    font-size: x-large;
}


.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1%;
}
</style>
