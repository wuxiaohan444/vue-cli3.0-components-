<template>
    <div class="index">
        <headInfo :content="three"></headInfo>
        <son v-on:delivery-me="listen" :text="two"></son>
        <h1>{{one}}</h1>
    </div>
</template>

<script>
    import headInfo from "../components/headerInfo";
    import son from "../components/son";


    export default {
        name: "index",
        components: {son,headInfo},
        data: function () {
            return {
                one: '',
                two:'个人中心',
                three:'头部信息'
            }
        },
        methods: {
            listen: function (a) {
                this.one = a;
            }
        }
    }
</script>

<style scoped>

</style>