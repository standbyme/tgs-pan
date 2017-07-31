<template>
    <div class="container">
        <Progress class="progress" :percent="100" :stroke-width="50"></Progress>
        <a :href="url">{{filename}}</a>
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
a {
    position: absolute;
    color: black;
    font-size: xx-large;
}

.progress {
    position: absolute;
}

.container {
    position: relative;
    display: flex;
    justify-content: center;
}
</style>
