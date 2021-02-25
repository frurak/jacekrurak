<template>
  <div class="ravvast_banner_container">
    <img src="@/assets/ravvast-top.png" alt="Ravvast drum Jacek Rurak" />
    <div class="ravvast_header">
      Ravvast
      <div class="subfont_text"><p class="subfont">drum</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RavvastTopBanner"
};
</script>

<style lang="scss">
$border: #d1d1d1;
@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.ravvast_banner_container {
  height: 50vh;
  width: 100vw;
  max-width: 2000px;
  margin: 0 auto;
  margin-top: 20vh;
  padding: 0 14vw;
  background: #060608;
  overflow: hidden;
  position: relative;
  img {
    width: 45%;
    position: absolute;
    right: 53%;
    top: 0;
    transform: translateY(-8%);
  }
  .ravvast_header {
    height: auto;
    @include flex(center, flex-start);
    font-family: "Red Hat Display", sans-serif;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 4.4rem;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    .subfont_text {
      @include flex(center, center);
      margin-left: 15px;
      .subfont {
        font-family: "Shadows Into Light", cursive;
        font-weight: 100;
        font-size: 4rem;
        position: relative;
        color: #fff;
        &::after {
          content: "";
          background: url("../assets/subtxt-path-wht.svg") no-repeat;
          display: block;
          height: 20px;
          width: 120px;
          background-position: center;
          position: absolute;
          left: 0;
          bottom: -15%;
        }
      }
    }
  }
}
</style>
