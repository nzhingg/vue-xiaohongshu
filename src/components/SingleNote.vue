<template>
  <div id="single-note">
    <div class="top">
      <router-link to="/">
        <div class="back">
          <i class="iconfont icon-fanhui"></i>
        </div>
      </router-link>
      <swiper :options="swiperOption" class="slides">
        <swiper-slide v-for="image in note[0].image" :key="image" class="slide">
          <img :src="image.img" alt="">
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    </div>
    <div class="aaa">
    <div class="center">
      <div class="center_user"> 
        <router-link v-bind:to="'/user/' + note[0].userName">
          <div class="user_head">
            <img :src="note[0].headPortrait" alt="">
          </div>
          <div class="user_userName">
            {{note[0].userName}}
            <img :src="note[0].userNameIcon" class="userName-icon" alt="">
          </div>
        </router-link>
        <button class="follow" v-if="!unFollow" @click="following(note[0].userName)">+关注</button>
        <button class="followed" v-if="unFollow" @click="following(note[0].userName)">已关注</button>
      </div>
      <div class="center_noteContent">
        <div class="noteContent_title">{{note[0].title}}</div>
        <div class="noteContent_Text">{{note[0].article}}</div>
        <div class="noteContent_publishTime">{{note[0].publishTime}}</div>
        <div class="noteContent_collectionNum">&nbsp;&nbsp;&nbsp;{{note[0].collectionNum}}次收藏</div>
        <div class="noteContent_praiseTime">{{note[0].like}}次赞</div>
      </div>
    </div>
    </div>
    <div class="bottom">
      <div class="bottom_top">
        <div class="top_noteComment">笔记评论</div>
        <div class="top_noteCommentNumber">共{{note[0].commentNum}}条评论></div>
      </div>
      <input type="text" placeholder="矜持点赞也可以，知音难觅聊一句">
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name:"single-note",
  data(){
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      id:this.$route.params.id,
      note:[]
    }
  },
  methods:{
    ...mapActions([
      "following"
    ])
  },
  computed: {
    unFollow(){
      //获取store中的关注列表
      var followLists = this.$store.getters.unFollow;
      // 获取当前主页是否关注的关注列表
      var result = followLists.filter(followList => {
        return this.id === followList.id
      })
      return result[0].isFollow;
    },
  },
  created(){
    var that = this;
    // 根据路由中返回的id值来筛选当前页面的数据
    axios.get("https://www.easy-mock.com/mock/5aa1e2e4edefdc232c585994/getInfo/data")
      .then(function(data) {
      var notes = data.data.data.noteDetails;
      that.note = notes.filter((note) => {
        return note.id === that.id;
      })
    });
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style scoped>
#single-note{
  width: 100%;
  height: 100%;
}
.top{
  width: 100%;
  height: 100%;
}
.back{
  width: .586667rem /* 44/75 */;
  height: .506667rem /* 38/75 */;
  position: fixed;
  top: 1.173333rem /* 88/75 */;
  left: .373333rem /* 28/75 */;
  z-index: 5;
}
.back i{
  color: #FFF;
}
.slide img{
  width:100%;
  height: 100%;
}
.center{
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
}
.center:after{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .266667rem /* 20/75 */;
  background-color: #F5F8FA;
}
.center_user{
  width: 10rem;
  height: 1.68rem /* 126/75 */;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: violet; */
  position: relative;
}
.center_user:after{
  content: "";
  position: absolute;
  left: .346667rem /* 26/75 */;
  right: .346667rem /* 26/75 */;
  bottom: 0;
  height: .013333rem /* 1/75 */;
  border-bottom: .013333rem /* 1/75 */ solid #F0F0F0;
  /* 1px在手机上太粗 */
  transform: scaleY(0.5);
}
.center_user a{
  color: #000;
}
.user_head{
  float: left;
  display: inline-block;
  margin-left: .453333rem /* 34/75 */;
  margin-right: .293333rem /* 22/75 */;
}
.user_head img{
  width: 1.146667rem /* 86/75 */;
  height: 1.146667rem /* 86/75 */;
  border-radius: 100%;
}
.user_userName{
  width: 6rem;
  font-size: .426667rem /* 32/75 */;
  margin-top: .266667rem /* 20/75 */;
  top: 50%;
}
.userName-icon{
  display: inline-block;
  width: .4rem /* 30/75 */;
  height: .4rem /* 30/75 */;
}
.follow{
  width: 2.026667rem /* 152/75 */;
  height: .773333rem /* 58/75 */;
  float: right;
  margin-left: 1.4rem;
  font-size: .32rem /* 24/75 */;
  border: 1px solid #FF7F8E;
  color: #FF7F8E;
  background: white;
  border-radius: .2rem /* 15/75 */;
}
.followed{
  width: 2.026667rem /* 152/75 */;
  height: .773333rem /* 58/75 */;
  float: right;
  margin-left: 1.4rem;
  font-size: .32rem /* 24/75 */;
  border: 1px solid #CCCCCC;
  color: #CCCCCC;
  background: white;
  border-radius: .2rem /* 15/75 */;
}
.center_noteContent{
  width: 9.253333rem /* 694/75 */;
  height: 100%;
  margin-left: .373333rem /* 28/75 */;
  margin-right: .373333rem /* 28/75 */;
}
.noteContent_title{
  font-size: .426667rem /* 32/75 */;
  margin-top: .32rem /* 24/75 */;
  margin-bottom: .32rem /* 24/75 */;
  font-weight: 600;
  letter-spacing: .053333rem /* 4/75 */;
}
.noteContent_Text{
  font-size: .346667rem /* 26/75 */;
  line-height: 170%;
  letter-spacing: .026667rem /* 2/75 */;
}
.noteContent_publishTime,.noteContent_collectionNum,.noteContent_praiseTime{
  display: inline-block;
  color: #A7A7A7;
  font-size: .293333rem /* 22/75 */;
}
.noteContent_publishTime{
  margin-top: .8rem /* 60/75 */;
  margin-right: 3.466667rem /* 260/75 */;
  margin-bottom: .64rem /* 48/75 */;
}
.noteContent_collectionNum,.noteContent_praiseTime{
  float: right;
  margin-top: .8rem /* 60/75 */;
}
.bottom_top{
  width: 100%;
  height: 1.306667rem /* 98/75 */;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: violet; */
  position: relative;
}
.bottom_top:after{
  content: "";
  position: absolute;
  left: .293333rem /* 22/75 */;
  right: 0;
  bottom: 0;
  height: .013333rem /* 1/75 */;
  border-bottom: 1px solid #F0F0F0;
  transform: scaleY(0.5);
}
.top_noteComment{
  display: inline-block;
  margin-left: .64rem /* 48/75 */;
  margin-right: 5.066667rem /* 380/75 */;
  font-size: .346667rem /* 26/75 */;
  font-weight: 300;
  position: relative;
}
.top_noteComment::before{
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -.32rem /* 24/75 */;
  width: .053333rem /* 4/75 */;
  background-color: #FF0C29;
}
.top_noteCommentNumber{
  font-size: .346667rem /* 26/75 */;
  color: #939393;
}
.bottom input{
  width: 9.2rem /* 690/75 */;
  height: .986667rem /* 74/75 */;
  margin-left: .2rem /* 15/75 */;
  background-color: #F5F8FA;
  border: none;
  border-radius: .133333rem /* 10/75 */;
  padding-left: .426667rem /* 32/75 */;
}
</style>