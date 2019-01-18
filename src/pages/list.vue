<template>
    <div class="list">
        <headInfo :content="one"></headInfo>
        <son :text="two"></son>
    </div>

</template>

<script>
    import headInfo from "../components/headerInfo";
    import son from "../components/son";
    export default {
        name: "list",
        components:{headInfo,son},
        data(){
            return{
                one:'列表页',
                two:"你呀"
            }
        }
    }
</script>

<style scoped>

</style>