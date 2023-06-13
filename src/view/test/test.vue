<template>
    <h1>123</h1>
    <el-button @click="show = !show">TickMe</el-button>
    <br />
    <div v-show="show">
        <test-2></test-2>
    </div>
</template>

<script>
import test2 from './test2.vue'
export default{
    data(){
        return{
            show: rtue
        }
    },
    components: { 'test-2': test2 },
    methods:{
    }
}
</script>