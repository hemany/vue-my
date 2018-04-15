<template>
  <div class="headline-header">
    {{msg}}
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  data () {
    return {
      msg: '欢迎来到赫曼曼的空间'
    }
  },
  computed:mapGetters([
      "headelines"
    ]),
  methods:mapActions([
      'headeline'
    ])
}
</script>
<style>
  .headline-header{
    width:100%;
    margin-top:60px;
    background: #000;
    height: 60px;
    border-radius: 20px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
    letter-spacing:30px;
  }
</style>