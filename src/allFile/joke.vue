<template>
  <div>
    <div>
      <h2 class="pull-left">笑话大全</h2>
      <h2 class="pull-right"><input type="button" class="btn btn-default btn-danger" value="隐藏吧！！" @click="hide"></h2>
    </div>
    <ul class="clearfix main-ul">
      <li class="pull-left" v-for="i in dataMsg.data">
        {{i.content}}
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'app',
    data () {
      return {

      }
    },
    computed:mapGetters([
        'montana','dataMsg'
      ]),
    methods:mapActions([
        "joke",'hide'
      ]),
    }
</script>
<style>
  *{
    list-style: none;
  }
  .main-ul{
    width: 100%;
    height: 600px;
    overflow: auto;
  }
  .main-ul li{
    width: 100%;
    background-color:rgb(247,247,249);
    color:rgb(185,75,81);
    margin-top: 29px;
    box-sizing: border-box;
    padding: 6px;
  }
</style>