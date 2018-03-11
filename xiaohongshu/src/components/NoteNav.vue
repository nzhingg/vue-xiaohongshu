<template>
  <div id="note-nav">
    <div class="nav">
      <swiper :options="swiperOption">
        <swiper-slide class="nav_item">推荐</swiper-slide>
        <swiper-slide class="nav_item">附近</swiper-slide>
        <swiper-slide class="nav_item">视频</swiper-slide>
        <swiper-slide class="nav_item">时尚</swiper-slide>
        <swiper-slide class="nav_item">护肤</swiper-slide>
        <swiper-slide class="nav_item">彩妆</swiper-slide>
        <swiper-slide class="nav_item">美食</swiper-slide>
        <swiper-slide class="nav_item">旅行</swiper-slide>
        <swiper-slide class="nav_item">影视</swiper-slide>
        <swiper-slide class="nav_item">读书</swiper-slide>
        <swiper-slide class="nav_item">健身</swiper-slide>
        <swiper-slide class="nav_item">明星</swiper-slide>
        <swiper-slide class="nav_item">家居</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "note-nav",
  data() {
    return {
      swiperOption: {
        slidesPerView : 5,
          spaceBetween : 10,
          slideToClickedSlide: true,
          direction : 'horizontal',
      }
    }
  }
}

</script>

<style scoped>
#note-nav{
  position: fixed;
  top: 2.613333rem /* 196/75 */;
  background: #FFF;
  z-index: 9;
}
.nav{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: .986667rem /* 74/75 */;
  /* background-color: violet; */
}
.nav_item{
  display: inline-block;
  font-size: .4rem /* 30/75 */;
  color: #919191;
  width: .48rem /* 36/75 */;
  text-align: center;
}
.note_box{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: .266667rem /* 20/75 */;
  background-color: #F5F8FA;
}
</style>