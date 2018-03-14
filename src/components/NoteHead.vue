<template>
    <div id="note-head">
      <div class="content">
        <div class="menu-list">
          <router-link to="/follow" exact><div class="list1">关注</div></router-link>
          <router-link to="/" exact><div class="list2">发现</div></router-link>
          <router-link to="/shop" exact><div class="list3">商城</div></router-link>
        </div>
        <input type="text" placeholder="搜索笔记，商城和用户" v-model="search" @keyup.enter="searchText">
      </div>
    </div>
</template>

<script>
export default{
  name:"note-head",
  data() {
    return {
      search:""
    }
  },
  methods:{
    searchText(){
      this.$emit("searchNotes",this.search);
    }
  }
}
</script>

<style>
#note-head{
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 9;
}
.content{
  position: relative;
  height: 2.626667rem /* 197/75 */
}
#note-head::after{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .013333rem /* 1/75 */;
  border-bottom: 1px solid #E5E5E5;
  transform: scaleY(0.5);
  z-index: 9;
}
.menu-list{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 1.52rem /* 114/75 */;
}
.list1,.list2,.list3{
  display: inline-block;
  font-size: .426667rem /* 32/75 */;
  color: #BFBFBF;
  width: 1.866667rem /* 140/75 */;
  text-align: center;
}
input{
  width: 9.146667rem /* 686/75 */;
  height: .826667rem /* 62/75 */;
  background-color: #F5F5F5;
  font-size: .4rem /* 30/75 */;
  color: #838383;
  border-radius: .666667rem /* 50/75 */;
  border: none;
  margin-left: .266667rem /* 20/75 */;
  padding-left: .4rem /* 30/75 */;
  letter-spacing: .026667rem /* 2/75 */;
}
.router-link-active{
  position: relative;
}
.router-link-active:after{
  content:"";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -.16rem /* 12/75 */;
  height: .08rem /* 6/75 */;
  background-color: #FF2640;
}
</style>