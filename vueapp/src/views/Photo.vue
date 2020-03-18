<template>
    <div>
        <img v-for="(obj,index) in photodata" 
            :key="index" 
            :src="obj.src" 
            @click="showImg(index)"
            alt="">
        <!-- 遮罩层 大图 -->
        <v-touch 
            class="bigImg"
            v-show="isShow" 
            @swipeleft="left()"
            @swiperight="right()"
            @click.native="isShow = false"
            :style="{backgroundImage:url}"
        ></v-touch>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueTouch from 'vue-touch'
    Vue.use(VueTouch, {name: 'v-touch'})

    import axios from 'axios'
    export default {
        data(){
            return {
                photodata:[],
                isShow:false,
                iNow:0 //记录当前显示图片的索引
            }
        },
        computed:{
            // backgound-image:url('xx.jpg');
            url(){
                let url = '';
                if(this.photodata.length>0){
                    url = `url(${this.photodata[this.iNow].src})`;
                }
                return url;
            }
        },
        created(){
            axios.get("/data/photodata.json")
            .then((res)=>{
                this.photodata = res.data.photoData;
            }).catch((res)=>{
                console.log(res)
            })
        },
        methods:{
            showImg(index){
                this.isShow = true;
                this.iNow = index;
            },
            left(){
                // 左滑 显示下一张图
                this.iNow++;
                if(this.iNow > this.photodata.length-1){
                    this.iNow = 0;
                }
            },
            right(){
                this.iNow--;
                if(this.iNow <0){
                    this.iNow = this.photodata.length-1;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width:50%;
    }
    .bigImg{
        position: fixed;
        left:0px;
        top:1rem;
        bottom: 1rem;
        right: 0px;
        background: #000 center center no-repeat;
        background-size:contain;
    }
</style>