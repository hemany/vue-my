<template>
  <div class="scr-container wanter-body">
    <div class="row">
        <div class="col-xs-10">
          <form>
            <div class="form-group">
                <input class="form-control" placeholder="请输入查询的城市" type="text" v-model="msg">
            </div>
          </form>
        </div>
        <div class="col-xs-1">
          <input type="button" class="btn btn-default btn-primary" @click="city(msg)" value="搜索">
        </div>
    </div>
    <template v-if="weather!=''">
           <h1>{{weather.result.city}}</h1>
          <p>详细天气预报</p>
          <div class="clearfix zong">
            <h3 class="pull-left">{{weather.result.week}}  {{weather.result.date}}</h3>
            <h3 class="pull-left">今日风向：{{weather.result.winddirect}}{{weather.result.windpower}}</h3>
            <h3 class="pull-left">大气压{{weather.result.pressure}}</h3>
          </div>

          <ul class="ul">
            <li v-for="i in weather.result.index">
              <span class="keys">指数:</span>
              <span>{{i.iname}}</span>
              <span class="keys">建议:</span>
              <span>{{i.ivalue}}</span>
              <span class="keys">活动建议:</span>
              <span>{{i.detail}}</span>
            </li>
          </ul>
    </template>
    <h2 class="text-right"><input type="button" class="btn btn-default btn-danger" value="隐藏吧！！" @click="hide"></h2>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'app',
    data () {
      return {
        msg:''
      }
    },
    computed:mapGetters([
        "weather"
      ]),
    methods:mapActions([
        "city","hide"
      ])
    }
</script>
<style>
  .wanter-body{
    width:860px;
    margin: 0 auto;
    height: 600px;
    overflow: auto;
    overflow-x:hidden;
  }
  .zong h3{
    margin-left: 10px;
  }
  .ul{
    padding-left: 10px;
  }
  .uls{
    overflow: auto;
  }
  .ul li{
    width: 100%;
    background-color:rgb(247,247,249);
    color:rgb(185,75,81);
    margin-top:20px;
    box-sizing: border-box;
    padding: 6px;
  }
  .keys{
    margin-right: 10px;
  }
</style>