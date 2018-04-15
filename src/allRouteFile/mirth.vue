<template>
  <div class="container-pluid dex-main">
    <div class="MontanaState" v-show="montana"></div>
    <div class="MontanaState" v-show="searchs"></div>
    <div class="MontanaState" v-show="skys"></div>
    <transition-group enter-active-class='bounceInDown animated' leave-active-class='fadeOutRightBig animated'>
       <div class="jock" :key='1' v-show="montana">
          <joke></joke>
       </div>
    </transition-group>
    <transition-group enter-active-class='bounceInDown animated' leave-active-class='fadeOutRightBig animated'>
       <div class="scrrch" :key='1' v-show="searchs">
        <ipnode></ipnode>
       </div>
    </transition-group>
    <transition-group enter-active-class='bounceInDown animated' leave-active-class='fadeOutRightBig animated'>
       <div class="skys" :key='1' v-show="skys">
          <mysky></mysky>
       </div>
    </transition-group>
    <div class="container scrs">
        <headeline></headeline>
        <div class="row main-oneNode">
            <div class="main-le col-xs-6">
              <mainL></mainL>
            </div>
            <div class="main-ri col-xs-5 col-xs-offset-1">
              <div class="joke" @click="joke">
                <img src="./../assets/joke.jpg" alt="">
              </div>
            </div>
        </div>
        <div class="container-pluid scrss">
            <div class="row main-oneNode clearfix">
            <div class="search col-xs-2" @click="search">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            </div>
              <div class=" sky col-xs-2 col-xs-offset-1" @click="sky">
                <span class="glyphicon glyphicon-tint"></span>
              </div>
            </div>
        </div>
        </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import headeline from './../allFile/headline.vue'
import mainL from './../allFile/main-le.vue'
import joke from "./../allFile/joke.vue"
import ipnode from "./../allFile/ipNode.vue"
import mysky from "./../allFile/sky.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:mapGetters([
      "scrs","headelines",'montana','searchs','skys'
    ]),
  methods:mapActions([
      'headeline',"joke","search","sky"
    ]),
  components:{
    headeline,mainL,joke,ipnode,mysky
  }
}
</script>
<style>
  .scrs{
    height: 100vh;
  }
  .scrss{
    box-sizing: border-box;
  }
  .dex-main{
    background: url("./../assets/bg2.jpg") no-repeat;
    background-size: cover;
  }
  .main-oneNode{
    margin-top: 20px;
  }
  .joke{
    width:100%;
    height:300px;
    border-radius:20px;
    overflow: hidden;
    z-index: 1;
  }
  .joke img{
    width: 100%;
    height: 100%;
  }
  .jock{
    position: fixed;
    top:30px;
    width:1100px;
    height:700px;
    z-index: 2;
    background-color: #fff;
    left: 50%;
    margin-left: -550px;
    border-radius: 30px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px;
  }
  .search{
    height:150px;
    border-radius:30px;
    color: #fff;
    font-size: 60px;
    text-align: center;
    line-height: 150px;
    background-color: #fff;
    background: url("./../assets/icon1.jpg") no-repeat;
    background-size: cover;
  }
  .sky{
    height:150px;
    border-radius:30px;
    color: #fff;
    font-size: 60px;
    text-align: center;
    line-height: 150px;
    background-color: #fff;
    background: url("./../assets/icon3.jpg") no-repeat;
    background-size: cover;
  }
  .searcho{
    padding: 0;
    margin: 0;
  }
  .scrrch{
    width:800px;
    height:250px;
    position: fixed;
    top:20px;
    left: 50%;
    margin-left: -400px;
    z-index: 3;
    background: #fff;
    border-radius: 20px;
  }
  .skys{
    position: fixed;
    width:900px;
    height: 700px;
    background: #fff;
    top:20px;
    margin-left: -450px;
    left: 50%;
    z-index:2;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
  }
  .MontanaState{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.4);
    z-index: 1;
  }
</style>