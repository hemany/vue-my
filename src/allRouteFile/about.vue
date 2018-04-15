<template>
  <div class="about-main clearfix">
    <div class="container-pluid">
      <div class="row row-main">
          <div class="about col-xs-4 col-xs-offset-1">
            <h2>{{title}}</h2>
            <p>{{content}}</p>
            <p>{{contens}}</p>
            <p>联系方式:<br>{{qq}} <br> {{phone}} <br> {{email}}</p>
         </div>
         <div class="col-xs-5 col-xs-offset-1">
            <h2>My skill</h2>
            <echarts></echarts>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from './../allFile/skill.vue'
  export default{
    data(){
      return {
          title:"hello！我叫赫曼曼",
          content:"我是一名web前端开发工程师,今年23岁,位于北京,今后的职业规划是朝着全栈发展的，在公司中我主要负责公司网站前端的维护及部分效果展示，负责前端页面数据化图表展示效果，与后台人员配合进行数据交互，我会利用node.js搭建后台服务的架构",
          contens:"在这个网站中，我进行了一些粗略的设计，这是基于vue脚手架进行开发的网站，使用了最近流行SPA应用，以及组件化开发的思想",
          qq:"qq：446743219",
          phone:"电话：13681395120",
          email:"邮箱：446743219@qq.com"
      }
    },
    components:{
      echarts
    }
  }
</script>
<style>
  .about-main{
    width:100%;
    height: 100vh;
    overflow: hidden;
    background:url("./../assets/about1.jpg") no-repeat;
    background-size:cover;
  }
  .about{
    height: 600px;
    background: rgba(0,0,0,0.3);
    border-radius: 20px;
    color:#fff;
  }
  .row-main{
    margin-top: 60px;
  }
  .row-main p{
    margin-top: 10px;
    font-size: 18px;
    line-height: 2;
  }
</style>