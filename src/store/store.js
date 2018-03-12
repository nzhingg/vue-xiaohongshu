import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    // isLike: false, //是否点赞
    // liked:[], //喜欢的笔记
    // 关注列表
    likeUsers:[
      {userName:"范冰冰", id:"1", isFollow:false},
      {userName:"王纸病", id:"2", sFollow:false},
      {userName:"Teresaniu", id:"3", isFollow:false},
      {userName:"_王banana", id:"4", isFollow:false},
      {userName:"其斤小小", id:"5", isFollow:false},
      {userName:"欧阳娜娜", id:"6", isFollow:false},
      {userName:"迪拜奶奶", id:"7", isFollow:false},
      {userName:"-蔡娇娇", id:"8", isFollow:false},
      {userName:"luo_xiannv🐇", id:"9", isFollow:false},
      {userName:"侃烃", id:"10", isFollow:false},
      {userName:"家居薯", id:"11", isFollow:false},
      {userName:"周洁琼", id:"12", isFollow:false},
      {userName:"V叶啦啦", id:"13", isFollow:false},
      {userName:"小A家的团", id:"14", isFollow:false},
      {userName:"谭巧子", id:"15", visFollow:false}
    ],
    likeNotes:[
      {userName:"范冰冰", id:"1", isLike:false},
      {userName:"王纸病", id:"2", isLike:false},
      {userName:"Teresaniu", id:"3", isLike:false},
      {userName:"_王banana", id:"4", isLike:false},
      {userName:"其斤小小", id:"5", isLike:false},
      {userName:"欧阳娜娜", id:"6", isLike:false},
      {userName:"迪拜奶奶", id:"7", isLike:false},
      {userName:"-蔡娇娇", id:"8", isLike:false},
      {userName:"luo_xiannv🐇", id:"9", isLike:false},
      {userName:"侃烃", id:"10", isLike:false},
      {userName:"家居薯", id:"11", isLike:false},
      {userName:"周洁琼", id:"12", isLike:false},
      {userName:"V叶啦啦", id:"13", isLike:false},
      {userName:"小A家的团", id:"14", isLike:false},
      {userName:"谭巧子", id:"15", isLike:false}
    ]
  },
  getters:{
    unFollow(state){
      return state.likeUsers;
    },
    unLike(state){
      return state.likeNotes;
    }
  },
  mutations:{
    following: (state,payload) => {
      var followLists = state.likeUsers.map(likeUser => {
        if(likeUser.userName === payload){
          likeUser.isFollow = !likeUser.isFollow;
        }
      })
    },
    isLiked: (state,payload) => {
      var likeLists = state.likeNotes.map(likeNote => {
        if(likeNote.id === payload){
          likeNote.isLike = !likeNote.isLike;
          // return likeNote.isLike;
        }
      })
      // return likeLists;
    }
  },
  actions:{
    following:(context,payload) => {
      context.commit("following",payload)
    },
    isLiked:(context,payload) => {
      context.commit("isLiked",payload)
    }
  }
})
