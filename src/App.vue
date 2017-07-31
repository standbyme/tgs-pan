<template>
    <div id="app">
        <Row>
            <Col span="12">
            <FileSet></FileSet>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <UploadAndList></UploadAndList>
            </Col>
        </Row>
    </div>
</template>

<script>
import UploadAndList from './components/UploadAndList'
import FileSet from './components/FileSet'

export default {
    name: 'app',
    components: {
        UploadAndList,
        FileSet
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
