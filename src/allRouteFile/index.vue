<template>
  <div class="this-index">
    <transition-group enter-active-class='bounceInDown animated' leave-active-class='fadeOutRightBig animated'>
        <div class="index-my clearfix" v-show="show" :key="1">
            <div class="my-title">
              <img src="./../assets/my.jpg">
            </div>
            <h2 class="text-center title-i">hello! world</h2>
            <roasting></roasting>
           <div class="text-center btn-about">
              <button class="btn btn-default btn-primary">
                <router-link class=" btn-about" to="/about">about</router-link>
              </button>
            </div>
          </div>
    </transition-group>
  </div>
</template>
<script>
import roasting from './../allFile/roasting.vue'
  export default{
    data(){
      return {
          show:false,
      }
    },
    methods:{
    },
    mounted(){
      this.show=true
    },
    components:{
        roasting
    }
  }
</script>
<style>
  .this-index{
    width: 100%;
    height: 100vh;
    background: url("./../assets/bg.jpg") no-repeat;
    background-size: cover;
    overflow:hidden;
  }
  .index-my{
    width:100%;
    height:100vh;
    background-color: rgba(0,0,0,0.3)
  }
  .title-i{
    color: #fff;
    margin-top:30px;
  }
  .my-title{
    position:relative;
    width:130px;
    height:130px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top:170px;
    transition: .35s;
    box-shadow:0px 0px 10px 3px #fff;
  }
  .my-title:after{
    content:'';
    position: absolute;
    width:140px;
    height:140px;
    top: -5px;
    left: -5px;
    border-radius:50%;
    box-shadow:0px 0px 10px 3px #fff;
    display: block;
    border-radius: 50%;
  }
  .my-title:before{
    content:'';
    position: absolute;
    width:150px;
    height:150px;
    top: -10px;
    left: -10px;
    border-radius:50%;
    box-shadow:0px 0px 10px 3px #fff;
    display: block;
    border-radius: 50%;
  }
  .my-title:hover{
    box-shadow:0px 0px 12px 5px #fff;
  }
  .my-title img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .btn-about{
    color: #fff;
    margin-top: 170px;
  }
</style>