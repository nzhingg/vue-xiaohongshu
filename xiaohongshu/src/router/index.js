import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import AllNote from '../components/AllNote'
import NoteHead from '../components/NoteHead'
import Follow from '../components/Follow'
import Shop from '../components/Shop'
import SingleNote from '../components/SingleNote'
import User from '../components/User'


export default new Router({
  routes:[
    {path: '/',component: AllNote},
    {path: '/note/:id',component: SingleNote},
    {path: '/follow',component: Follow},
    {path: '/shop',component: Shop},
    {path: '/user/:userName',component: User}
  ],
  mode: 'history'
})