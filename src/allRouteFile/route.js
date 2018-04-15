import index from './index.vue'
import mirth from './mirth.vue'
import about from './about.vue'

export default{
  routes:[
    {path:'/index',component:index},
    {path:'/mirth',component:mirth},
    {path:'/about',component:about},
    {path:'*',redirect:"/index"}
  ]
}