<template>
    <div>
        <Progress class="progress" :percent="100" :stroke-width="50"></Progress>
        <a href="http://www.baidu.com/">123123123</a>
    </div>
</template>

<script>
export default {
    name: 'LinkProgress',
    data() {
        return {
            test: `That's OK`
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
</style>
