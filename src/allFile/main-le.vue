<template>
  <div class="my-name">
      <h2 class="text-center">{{word}}</h2>
      <h3>{{msg}}</h3>
      <p>{{content}}</p>
      <p>{{one}}</p>
      <p>{{two}}</p>
      <h5 class="text-right">{{three}}</h5>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        word:"Hello world!",
        msg:"hello  I'm 赫曼曼",
        content:"你们好！这是关于我的个人主页，在这里面有我搜集的一些好玩的东西",
        one:"我是一名web前端开发工程师,俗称的程序猿",
        two:"我非常希望你们可以在我的主页发现一些好玩的东西可以帮助到你们",
        three:"非常感谢！！以梦想为名"
      }
    }
  }
</script>
<style>
  .my-name{
    width: 100%;
    height:300px;
    background-color: #2f7fef;
    border-radius:20px;
    color: #fff;
    box-sizing: border-box;
    padding:10px;
    overflow: hidden;
  }
</style>