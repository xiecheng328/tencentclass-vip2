<template>
    <div>
        <!-- 音乐列表{{$route.query.id}} -->
        <Aplayer v-if="isShow"
            autoplay
            :music="musicData[0]"    
            :list="musicData"
            showLrc
        />
    </div>
</template>

<script>
    // ES6
    import Aplayer from 'vue-aplayer'
    import axios from 'axios'

    export default {
        data(){
            return {
                musicData:[],
                isShow:false
            }
        },
        components:{
            Aplayer
        },
        created(){
            axios.get('data/musicdata.json')
            .then((res)=>{
                this.musicData = res.data.musicData;
                this.isShow = true;
            }).catch((res)=>{
                console.log(res);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>