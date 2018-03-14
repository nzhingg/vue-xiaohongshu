<template>
  <div id="shop">
    <NoteHead />
    <div class="empty">暂时未开发</div>
  </div>
</template>

<script>
import NoteHead from './NoteHead'

export default {
  name: "shop",
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
  margin-top: 4rem /* 300/75 */;
  text-align: center;
}
</style>
