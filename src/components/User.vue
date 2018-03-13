<template>
  <div id="user">
    <div class="userInfo">
      <div class="user_card">
        <router-link :to="'/note/' + notes[0].id">
          <div class="back">
            <i class="iconfont icon-fanhui"></i>
          </div>
        </router-link>
        <div class="user_card__bg">
          <img :src="notes[0].userBg" alt="">
          <div class="bg_mask"></div>
        </div>
        <div class="user_card__center">
          <div class="avatar">
            <img :src="notes[0].headPortrait" alt="">
          </div>
          <p class="user_name">{{notes[0].userName}}</p>
          <div class="user_about">
            <div class="follows">
              <p class="follow_num">{{notes[0].following}}</p>
              <div class="follow_text">关注</div>
            </div>
            <div class="fans">
              <p class="fans_num">{{notes[0].fans}}</p>
              <p class="fans_text">粉丝</p>
            </div>
            <div class="liked">
              <p class="liked_num">{{notes[0].likedCollection}}</p>
              <p class="liked_text">赞与收藏</p>
            </div>
          </div>
        </div>
      </div>
      <div class="user_moreInfo">
        <div class="followBtn" v-if="!unFollow" @click="following(notes[0].userName)">关注</div>
        <div class="cancleBtn" v-if="unFollow" @click="following(notes[0].userName)">取消关注</div>
        <p class="userLocation">
          <span class="location">{{notes[0].location}}</span>
          <span class="level">等级：{{notes[0].level}}</span>
          <img :src="notes[0].userNameIcon" class="userName-icon" alt="">
        </p>
        <div class="userIntroduce">{{notes[0].introduce}}</div>
      </div>
      <div class="tab_detail">
        <div class="note-box">
      <div class="note-view">
          <div class="note" v-for="note in leftNotes" :key="note.id">
            <router-link v-bind:to="'/note/' + note.id">
              <div class="note_info">
                <img class="note_info__cover" :src="note.image[0].img" alt="">
                <p class="note_info__title">{{note.title}}</p>
              </div>
              <div class="note_author">
                <div class="author_info">
                  <div class="photo">
                    <img :src="note.headPortrait" alt="">
                  </div>
                  <span class="name">{{note.userName}}</span>
                </div>
                <div class="like">
                  <span>{{note.like}}</span>
                </div>
              </div>
            </router-link>
          </div>
      </div>
      <div class="note-view">
        <div class="note" v-for="note in rightNotes" :key="note.id">
          <router-link v-bind:to="'/note/' + note.id">
            <div class="note_info">
              <img class="note_info__cover" :src="note.image[0].img" alt="">
              <p class="note_info__title">{{note.title}}</p>
            </div>
            <div class="note_author">
              <div class="author_info">
                <div class="photo">
                  <img :src="note.headPortrait" alt="">
                </div>
                <span class="name">{{note.userName}}</span>
              </div>
              <div class="like">
                <span>{{note.like}}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: "user",
  data() {
    return {
      notes: [],
      userName: this.$route.params.userName,
      id: 0,
      // unFollowing: false
      // unFollow: false
    }
  },
  methods:{
    ...mapActions([
      "following"
    ])
  },
  created() {
    var that = this;
    axios.get('https://www.easy-mock.com/mock/5aa1e2e4edefdc232c585994/getInfo/data')
    .then(function(data) {
      var notesArray = data.data.data.noteDetails;
      that.notes = notesArray.filter(note => {
        return note.userName === that.userName
      })
    });
  },
  computed: {
    leftNotes() {
      return this.notes.filter((note) => {
        return note.page === "left";
      })
    },
    rightNotes() {
      return this.notes.filter((note) => {
        return note.page === "right";
      })
    },
    unFollow(){
      //获取store中的关注列表
      var followLists = this.$store.getters.unFollow;
      console.log(followLists)
      // 获取当前主页是否关注的关注列表
      var result = followLists.filter(followList => {
        return this.userName === followList.userName
      })
      return result[0].isFollow;
    },
    // ...mapGetters(["unFollow"])
  }
}
</script>

<style scoped>
.userInfo{
  position: relative;
}
.user_card{
  position: relative;
  width: 10rem;
  height: 8rem /* 600/75 */;
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
.user_card__bg{
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 10rem;
  height: 8rem
}
.user_card__bg img{
  width: 10rem;
  height: 8rem;
}
.bg_mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
}
.user_card__center{
  height: auto;
  margin: 0 auto;
  position: absolute;
  top: 1.573333rem /* 118/75 */;
  /* transform: translate3d(-50%,-50%,0); */
  z-index: 9;
}
.avatar{
  width: 2.186667rem /* 164/75 */;
  height: 2.186667rem /* 164/75 */;
  margin: 0 auto;
}
.avatar img{
  width: 2.186667rem /* 164/75 */;
  height: 2.186667rem /* 164/75 */;
  border-radius: 100%;
  border: .04rem solid #fff!important;
}
.user_name{
  display: block;
  text-align: center;
  width: 10rem;
  color: #FFF;
  margin-top: .56rem /* 42/75 */;
  font-size: .453333rem /* 34/75 */;
}
.user_about{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* position: relative; */
  margin-top: 1.066667rem /* 80/75 */;
}
.follows, .fans, .liked{
  width: 2.3rem;
  height: auto;
  font-size: .4rem /* 30/75 */;
  color: #fff;
  letter-spacing: .0126rem;
  line-height: .533333rem /* 40/75 */;
  text-shadow: 0.01rem 0.01rem 0.02rem rgba(0,0,0,.3);
  text-align: center;
  overflow: hidden;
  position: relative;
  /* position: absolute; */
}
.follows:after, .fans:after{
  content: "";
  position: absolute;
  top: .186667rem /* 14/75 */;
  bottom: .24rem /* 18/75 */;
  right: 0;
  width: .013333rem /* 1/75 */;
  border-right: .013333rem /* 1/75 */ solid #FFF;
  transform: scaleX(0.5);
}
.user_moreInfo{
  position: relative;
  /* background-color: violet; */
  overflow: hidden;
  padding: .4rem 0;
}
.user_moreInfo:after{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid #E0E0E0;
  height: .013333rem /* 1/75 */;
}
.followBtn{
  width: 3.573333rem /* 268/75 */;
  height: .666667rem /* 50/75 */;
  background: #ff2741;
  padding-top: .08rem /* 6/75 */;
  border-radius: .08rem;
  font-size: .3rem;
  color: #fff;
  line-height: .6rem;
  text-align: center;
  margin: 0 auto;
}
.cancleBtn{
  width: 3.573333rem /* 268/75 */;
  height: .666667rem /* 50/75 */;
  background: #FFF;
  padding-top: .08rem /* 6/75 */;
  border-radius: .08rem;
  border: .026667rem /* 2/75 */ solid #5B92E0;
  font-size: .3rem;
  color: #5B92E0;
  line-height: .6rem;
  text-align: center;
  margin: 0 auto;
}
.userLocation{
  font-size: .26rem;
  color: #5A5A5A;
  line-height: .3rem;
  text-align: center;
  margin: .266667rem /* 20/75 */ 0;
  margin-bottom: .586667rem /* 44/75 */;
}
.location{
  position: relative;
  margin-right: .32rem /* 24/75 */;
}
.location:after{
  content: "";
  position: absolute;
  top: .053333rem /* 4/75 */;
  bottom: .053333rem /* 4/75 */;
  right: -.32rem /* 24/75 */;
  width: .013333rem /* 1/75 */;
  border-right: .013333rem /* 1/75 */ solid #5A5A5A;
  transform: scaleX(0.5);
}
.level{
  margin-left: .32rem /* 24/75 */;
}
.userName-icon{
  width: .4rem /* 30/75 */;
  height: .4rem /* 30/75 */;
}
.userIntroduce{
  font-size: .26rem;
  color: #666;
  line-height: .5rem;
  margin: auto .3rem 0;
  position: relative;
}
.userIntroduce::before{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -0.3rem;
  border-bottom: 1px solid #E0E0E0;
  height: .013333rem /* 1/75 */;
}
.tab_detail{
  width: 100%;
  height: 300px;
  /* background-color: violet; */
}

.note-box{
  width: 10rem;
  margin: 0 auto;
  overflow-x: auto;
  padding-top: .133333rem /* 10/75 */;
}
.note-view{
  width: 4.533333rem /* 340/75 */;
  float: left;
  margin: .08rem /* 6/75 */ .213333rem /* 16/75 */;
}
.note{
  background-color: #fff;
  width: 4.533333rem /* 340/75 */;
  margin: 0  .053333rem /* 4/75 */ .24rem /* 18/75 */;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  border-radius: .16rem /* 12/75 */;
  position: relative;
  text-decoration: none;
  cursor: pointer;
}
.note-info{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
}
.note_info__cover{
  width: 4.533333rem /* 340/75 */;
  border-top-left-radius: .213333rem /* 16/75 */;
  border-top-right-radius: .213333rem /* 16/75 */;
}
.note_info__title{
  font-size: .32rem /* 24/75 */;
  overflow: initial;
  white-space: normal;
  font-weight: 400;
  margin: .266667rem /* 20/75 */ .266667rem /* 20/75 */;
  overflow: hidden;
}
.note_author{
  padding: 0 .266667rem /* 20/75 */ .346667rem /* 26/75 */;
  display: flex;
  align-items: center;
}
.author_info{
  flex: 1;
}
.photo{
  position: relative;
  display: block;
  float: left;
}
.photo img{
  width: .746667rem /* 56/75 */;
  height: .746667rem /* 56/75 */;
  border-radius: 50%;
  display: inline-block;
}
.name{
  display: block;
  float: left;
  margin-left: 10px;
  line-height: 31px;
  color: #616161;
  font-weight: 350;
}
.like{
  color: #8F8F8F;
}
</style>
