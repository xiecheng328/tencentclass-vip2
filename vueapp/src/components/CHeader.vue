<template>
   <header :style="{background:$store.state.color}">
       <span>首页</span>
       {{$store.state.title}}
   </header>
</template>

<script>
export default {

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
