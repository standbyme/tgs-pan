<template>
    <div id="app">
        <Row>
            <Col>
            <UploadAndList></UploadAndList>
            </Col>
        </Row>
        <Row>
            <Col span="16" offset="4">
            <Row>
                <Col>
                <FileSet></FileSet>
                </Col>
            </Row>
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
