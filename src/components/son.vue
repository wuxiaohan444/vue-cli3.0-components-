<template>
    <div class="son">
        <h1>{{text}}</h1>
        <label>
            <input type="text" v-model="test" @input="delivery">
        </label>
    </div>
</template>

<script>
    export default {
        name: "son",
        data(){
            return {
                test:''
            }
        },
        methods:{
            delivery:function () {
                this.$emit("delivery-me",this.test)
            }
        },
        props:{text:String}
    }
</script>

<style scoped>

</style>