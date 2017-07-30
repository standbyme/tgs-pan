<template>
    <div>
        <Progress :percent="100"></Progress>
    </div>
</template>

<script>
export default {
    name: 'LinkProgress',
    data() {
        return {
            test:`That's OK`
        }
    }
}
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
