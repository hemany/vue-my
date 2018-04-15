import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
console.log(axios)
const state={
  scrs:2,
  headelines:false,
  montana:false,
  dataMsg:'',
  searchs:false,
  ipNode:"",
  skys:false,
  city:"",
  weather:""
}
const getters={
  scrs(state){
    return state.scrs
  },
  headelines(state){
    return state.headelines
  },
  dataMsg(state){
    return state.dataMsg
  },
  montana(state){
    return state.montana
  },
  searchs(state){
    return state.searchs
  },
  ipNode(state){
    return state.ipNode
  },
  skys(state){
    return state.skys
  },
  weather(state){
    return state.weather
  },
  city(state){
    return state.city
  }
}
const mutations={
  index:function(){
    state.headelines=true
  },
  joke:function(){
    axios.get('https://bird.ioliu.cn/joke/rand?type=text').then((data)=>{
        if(data.data.status.message=="超过每日可允许请求次数!"){
           state.dataMsg={"data":[{"content":"亲！请明天再来吧！还有更好的内容等着你呢！！！","hashId":"86218AB6371B130BC146050D9F82526A","unixtime":"1423965725"}]}
        }else{
             state.dataMsg=data.data
        }
        state.montana=true
      },()=>{
      console.log("失败")
    })
  },
  hide:function(){
    state.montana=false
    state.searchs=false
    state.skys=false
    state.city=""
    state.weather=""
  },
  search:function(){
    axios.get('https://bird.ioliu.cn/ip').then((data)=>{
        if(data.data.status.message=="超过每日可允许请求次数!"){
           state.ipNode={"data":[{"content":"亲！请明天再来吧！还有更好的内容等着你呢！！！","hashId":"86218AB6371B130BC146050D9F82526A","unixtime":"1423965725"}]}
        }else{
          console.log(data.data.data)
             state.ipNode=data.data.data.ip
        }
        state.searchs=true
      },()=>{
      console.log("失败")
    })
  },
  sky:function(){
    state.skys=true
  },
  city:function(){
    axios.get('https://bird.ioliu.cn/weather',{
      params:{
          city:state.city
        }
    }).then((data)=>{
        console.log(data)
        state.weather=data.data
      },()=>{
      console.log("失败")
    })
  }
}
const actions={
  headeline({commit}){
    commit('index')
  },
  joke({commit}){
    commit('joke')
  },
  hide({commit}){
    commit('hide')
  },
  search({commit}){
    commit("search")
  },
  sky({commit}){
    commit("sky")
  },
  city({commit},val){
    state.city=val
    commit("city")
  }
}
export default new Vuex.Store({
  state,getters,mutations,actions
})