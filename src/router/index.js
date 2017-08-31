import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Button from '@/components/Button'
import Indicator from '@/components/Indicator'
import Loadmore from '@/components/Loadmore'
import InfiniteScroll from '@/components/InfiniteScroll'
import MessageBox from '@/components/MessageBox'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/home', name: 'Home', component: Home},
    {path: '/button', name: 'Button', component: Button},
    {path: '/indicator', name: 'Indicator', component: Indicator},
    {path: '/loadmore', name: 'Loadmore', component: Loadmore},
    {path: '/infiniteScroll', name: 'Infinitescroll', component: InfiniteScroll},
    {path: '/messageBox', name: 'MessageBox', component: MessageBox}
  ]
})
