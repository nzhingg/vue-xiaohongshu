<template>
  <div id="follow">
    <NoteHead />
    <div class="empty" v-if="haveFollow">
      没有关注任何作者哦！！快去关注吧
    </div>
    <div class="followed" v-if="!haveFollow" v-for="note in notes" :key="note.id">
      <router-link :to="'/note/' + note.id">
        <div class="following_user">
          <div class="following_info">
            <div class="avatar">
              <img :src="note.headPortrait" alt="">
            </div>
            <span class="userName">{{note.userName}}</span>
          </div>
          <div class="covers">
            <img :src="note.image[0].img" alt="">
            <img :src="note.image[1].img" alt="1">
            <img :src="note.image[2].img" alt="1">
          </div>
          <div class="title">{{note.title}}</div>
          <div class="article">{{note.article}}</div>
        </div>
      </router-link>
      <div class="bottom">
        <div class="like">
          <i class="iconfont icon-aixin"></i>
          <span class="likeNum">{{note.like}}</span>
        </div>
        <div class="comment">
          <i class="iconfont icon-informatiom_"></i>
          <span class="commentNum">{{note.commentNum}}</span>
        </div>
        <div class="collection">
          <i class="iconfont icon-shoucang"></i>
          <span class="collectionNum">{{note.collectionNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NoteHead from './NoteHead'

export default {
  name: "follow",
  data(){
    return {
      notes: []
    }
  },
  created(){
    var followLists = this.$store.getters.unFollow;
    // 获取当前作者的信息
    var Lists = followLists.filter(followList => {
      return followList.isFollow;
    })
    console.log(Lists);
    var searchText = this.$store.getters.searchContent;
    var that = this;
    axios.get('https://www.easy-mock.com/mock/5aa1e2e4edefdc232c585994/getInfo/data')
    .then(function(data) {
      // 获取笔记信息
      var notesLists = data.data.data.noteDetails;
      // 根据是否关注isFollow来获取已关注作者的信息
      Lists.filter(list => {
        for(var i = 0;i< notesLists.length; i++) {
          if(list.userName === notesLists[i].userName) {
            if(searchText) {
              
            }else {
              that.notes.push(notesLists[i]);
            }
          }
        }
      })
    });
  },
  computed: {
    haveFollow(){
      // 判断列表中是否有数据，如果没有数据 则提示关注笔记作业
      if(this.notes.length > 0){
        return false
      }else {
        return true
      }
    }
  },
  components: {
    NoteHead,
  }
}
</script>

<style scoped>
.empty{
  width: 10rem;
  position: relative;
  top: 2.613333rem /* 196/75 */;
  background-color: #FFF;
  font-size: .533333rem /* 40/75 */;
  color: #FF2640;
  font-weight: 1000;
  text-align: center;
}
#follow{
  background-color: #F5F8FA;
}
.followed{
  width: 10rem;
  position: relative;
  top: 2.613333rem /* 196/75 */;
  background: #FFF;
  margin-bottom: .293333rem /* 22/75 */;
}
.following_user{
  height: 100%;
  padding: 0 .4rem /* 30/75 */ .64rem /* 48/75 */ .4rem /* 30/75 */;
  position: relative;
}
.following_user::after{
  content: "";
  position: absolute;
  left: .4rem /* 30/75 */;
  right: .4rem /* 30/75 */;
  bottom: 0;
  height: .013333rem /* 1/75 */;
  border-bottom: .013333rem /* 1/75 */ solid #ECECEC;
}
.following_info{
  height: 1.6rem /* 120/75 */;
  display: flex;
  align-items: center;
}
.avatar{
  width: .933333rem /* 70/75 */;
  height: .933333rem /* 70/75 */;
  display: inline-block;
}
.avatar img{
  width: .933333rem /* 70/75 */;
  height: .933333rem /* 70/75 */;
  border-radius: 100%;
}
.userName{
  /* display: inline-block; */
  margin-left: .32rem /* 24/75 */;
  font-size: .426667rem /* 32/75 */;
  font-weight: 500;
  color: #000;
}
.covers{
  width: 100%;
  height: 2.986667rem /* 224/75 */;
}
.covers img {
  width: 2.986667rem /* 224/75 */;
  height: 2.986667rem /* 224/75 */;
}
.title{
  margin: .506667rem /* 38/75 */ 0 .293333rem /* 22/75 */;
  font-size: .426667rem /* 32/75 */;
  color: #000;
  font-weight: 800;
}
.article{
  font-size: .4rem /* 30/75 */;
  color: #666666;
  font-weight: 500;
}
.bottom{
  margin: 0 .4rem /* 30/75 */;
  /* background: violet; */
  height: 1.12rem /* 84/75 */;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.like, .comment, .collection{
  width: 2.933333rem /* 220/75 */;
  text-align: center;
}
.bottom i{
  color: #A0A0A0;
  font-size: .506667rem /* 38/75 */;
}
.bottom span{
  color: #000;
  font-size: .32rem /* 24/75 */;
}
</style>
