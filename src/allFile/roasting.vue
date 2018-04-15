<template>
<div class="inbox" >
    <transition-group enter-active-class='zoomInDown animated' leave-active-class='zoomOutDown animated'>
        <div class="text-center roasting" :key="2" v-for="(val,ind) in content" v-show="ind==index" >
          <h1>{{val.title}}</h1>
          <p>{{val.content}}</p>
        </div>
    </transition-group>
</div>
</template>
<script>
  export default{
      data(){
        return {
          index:0,
          content:[
          {title:"web工程师",content:"hello! 我是一名web前端工程师，主要致力于丰富互联网的Web开发，通过技术改善用户体验"},
          {title:"关于程序员",content:'程序员并非是高冷的一个群体，他们热爱技术，忠于生活'},
          {title:"编程真的很有意思",content:"编程为我打开了一座新世界的大门，一行行代码为我们创造了一个个世界"}]
        }
      },
      mounted(){
        setInterval(function(){
          this.index++
          if(this.index>this.content.length-1){
            this.index=0
          }
        }.bind(this),2500)
      }
  }
</script>
<style>
    .roasting{
    width:800px;
    position: absolute;
    top: 0;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .roasting p {
    font-size: 20px;
  }
  .inbox{
    width:800px;
     margin: 0 auto;
    position: relative;
  }
</style>