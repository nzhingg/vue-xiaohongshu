import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    isFollow: false, //是否关注
    isLike: false, //是否点赞
    liked:[] //喜欢的笔记
  },
  getters:{
    unFollow(state){
      // if(localStorage.getItem("isFollow")){
      //   return localStorage.getItem("isFollow")
      // } else {
      //   return state.isFollow;
      // }
      return state.isFollow;
    }
  },
  mutations:{
    following: (state) => {
      state.isFollow = !state.isFollow;
      // localStorage.setItem("isFollow",state.isFollow);
    }
  },
  actions:{
    following:(context) => {
      context.commit("following")
    }
  }
})
