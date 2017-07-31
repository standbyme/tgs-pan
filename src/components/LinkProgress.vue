<template>
    <div class="container">
        <Progress :percent="100" :stroke-width="50"></Progress>
        <a class="link" :href="url">{{filename}}</a>
    </div>
</template>

<script>
export default {
    name: 'LinkProgress',
    props: ['filename'],
    data() {
        return {
            test: `That's OK`,
            url: `http://tgs-pan.oss-cn-qingdao.aliyuncs.com/${this.filename}`
        }
    }
}
</script>

<style scoped>
.link {
    position: absolute;
    color: black;
    font-size: xx-large;
}


.container {
    position: relative;
    display: flex;
    justify-content: center;
}
</style>
