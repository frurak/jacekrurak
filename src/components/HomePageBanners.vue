<template>
  <div class="hp_banners_container">
    <div
      v-for="(photo, index) in photos"
      :key="photo"
      class="banner_box"
      :class="
        index === 0
          ? 'box1'
          : index === 1
          ? 'box2'
          : index === 2
          ? 'box3'
          : 'box4'
      "
      @mouseover="scalePhoto(index)"
    >
      <img :src="renderPhoto(index)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [1, 2, 3, 4]
    };
  },
  methods: {
    renderPhoto(index) {
      return require(`@/assets/foto${index + 1}.jpg`);
    }
  }
};
</script>

<style lang="scss">
$border: #d1d1d1;
@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.hp_banners_container {
  width: 100vw;
  min-height: 70vh;
  height: auto;
  padding: 5vh 5vw 10vh 5vw;
  @include flex(flex-start, space-between);
  overflow-x: hidden;
  border-bottom: 1px solid $border;
  .banner_box {
    width: 24%;
    height: 500px;
    background: rgb(184, 184, 184);
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    box-shadow: 8px 15px 25px rgba(0, 0, 0, 0.2);
    border: 3px solid rgba(255, 255, 255, 1);
    img {
      height: 100%;
      width: auto;
    }
  }
  .box1 {
    margin-top: 50px;
    img {
      transform: translateX(-25%);
    }
  }
  .box2 {
    img {
      transform: translateX(-29%) scale(1.15);
    }
  }
  .box3 {
    margin-top: 100px;
    img {
      transform: translateX(-10%);
    }
  }
  .box4 {
    margin-top: 50px;
    img {
      transform: translateX(-25%);
    }
  }
}
</style>
