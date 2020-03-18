<template>
    <footer :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" 
            :key="index" 
            :to="obj.path"
            @click.native="change(obj)"
        >
            {{obj.title}}
        </router-link> 
    </footer>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    data(){
        return {
            menu:[
                {
                    path:'/movie',
                    title:'电影',
                    color:'red'
                },
                {
                    path:'/music',
                    title:'音乐',
                    color:'green'
                },
                {
                    path:'/book',
                    title:'图书',
                    color:'pink'
                },
                {
                    path:'/photo',
                    title:'图片',
                    color:'blue'
                }
            ]
        }
    },
    methods:{
        ...mapMutations(['change'])
    },
    created(){
        // console.log( this.$route.path);
        this.menu.forEach((obj)=>{
            // 如果当前路径 跟menu中的某个匹配  
            if(this.$route.path.includes(obj.path)){ //   this.$route.pat :/music-list 包含 /music 
                this.change(obj);
            }
        })
    }

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
        text-align: center;
        a{
            flex-grow: 1;
            color: #000;
            cursor: pointer;
            outline: none;
        }
        .router-link-active{
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }
    }

</style>
