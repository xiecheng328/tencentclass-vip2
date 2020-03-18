<template>
   <header :style="{background:$store.state.color}">
       <span @click="goHome()">首页</span>
       {{$store.state.title}}
   </header>
</template>

<script>
export default {
    methods:{
        goHome(){
            // 路径跳转首页
            this.$router.push('/movie');
            // 触发mutations 中的change方法修改state中存的color和title
            this.$store.commit('change',{color:'red',title:'电影'});
        }
    }
}
</script>
<style lang="scss" scoped>
    header{
        height: 1rem;
        background: red;
        line-height: 1rem;
        text-align: center;
        position: fixed;
        top:0;
        width: 100%;
        color: white;
    }
    span{
        position: absolute;
        left: 0.1rem;
        top:50%;
        transform: translateY(-50%);
    }


</style>
