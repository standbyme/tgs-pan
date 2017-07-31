<template>
    <div id="app">
        <Row>
            <Col span="12">
            <FileSet></FileSet>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <LinkProgress filename="20170618222418.csv" percent="40"></LinkProgress>
            </Col>
        </Row>
        <Row>
            <Col span="12">
            <LinkProgress filename="2017.csv" percent="60"></LinkProgress>
            </Col>
        </Row>
    
    </div>
</template>

<script>
import LinkProgress from './components/LinkProgress'
import FileSet from './components/FileSet'

export default {
    name: 'app',
    components: {
        FileSet,
        LinkProgress
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
