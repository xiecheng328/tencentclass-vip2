<template>
    <div>
        <img v-for="obj in musicList" 
            :key="obj.id" 
            :src="obj.bg"  
            @click="goList(obj.id)"
        alt="">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                musicList:[]
            }
        },
        created(){
            axios.get('data/musiclist.json')
            .then((res)=>{
                this.musicList = res.data.albums;
            }).catch((res)=>{
                console.log(res)
            })
        },
        methods:{
            goList(id){
                // 跳转到music-list页
                this.$router.push({path:'/music-list',query:{id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width:50%;
    }
</style>