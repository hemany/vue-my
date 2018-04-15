<template>
  <div id="app">
    <div class="container-fluid scr-header">
      <div class="container main-header">
          <div class="row main-head">
            <div class="col-xs-4">
              <span class="scr-logo">Scr</span>
            </div>
            <div class="col-xs-8 scr-link text-right">
              <router-link to="/index" @click.native="headeline">index</router-link>
              <router-link to="/about">about</router-link>
              <router-link to="/mirth">mirth</router-link>
            </div>
          </div>
      </div>
    </div>
     <transition-group enter-active-class='bounceInDown animated' leave-active-class='fadeOutRightBig animated'>
      <router-view :key='1'></router-view>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:mapGetters([
      "scrs"
    ]),
  methods:mapActions([
      'headeline'
    ]),
  mounted(){
  }
}
</script>

<style>
  body{
    min-width: 1200px;
    overflow-x:hidden;
  }
  .scr-header{
    position: fixed;
    top: 0;
    left:0;
    height: 40px;
    background: #000;
    width: 100%;
  }
  .main-header{
    height: 40px;
  }
  .main-head{
    height: 40px;
  }
  .scr-link a{
    font-size:20px;
    margin-left: 10px;
    margin-right: 10px;
    color: #fff;
    display: inline-block;
    width:60px;
    height:30px;
    text-align: center;
    margin-top: 5px;
  }
  .router-link-active{
    background:rgb(54,54,54);
    border-radius: 3px;
    transition: .35s;
  }
  .scr-logo{
    line-height: 40px;
    color: #fff;
    font-size: 20px;
  }
  .banner{
    width:100%;
    height: 40px;
  }
  .banner img{
    width: 100%;
    height:100%;
  }
</style>
