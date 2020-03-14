<template>
    <footer>
        <router-link to="/a">电影</router-link>
        <router-link to="/b">音乐</router-link>
        <router-link to="/c">书籍</router-link>
        <router-link to="">图片</router-link>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    footer{
        height: 1rem;
        background: red;
        line-height: 1rem;
        position: fixed;
        bottom:0;
        width: 100%;
        color: white;
        display: flex;
        a{
            flex-grow: 1;
            color: #000;
            cursor: pointer;
        }
        .router-link-active{
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }
    }

</style>
