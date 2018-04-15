<template>
  <div class="ip">
    <h1 class="text-center">您的IP地址为：{{ipNode}}</h1>
    <h2 class="text-right">
      <input type="button" class="btn btn-default btn-danger" @click="hide" value="隐藏吧！！">
    </h2>
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
        'ipNode'
      ]),
    methods:mapActions([
        'hide'
      ])
    }
  </script>
<style>
  .ip h1{
    line-height: 4;
  }
  .ip input{
    margin-right: 30px;
  }
</style>