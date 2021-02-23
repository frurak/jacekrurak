<template>
  <div class="hp_sounds_container">
    <div class="sounds_header">
      Wybrane
      <div class="subfont_text"><p class="subfont">melodie</p></div>
    </div>
    <div class="sounds_players_container">
      <SoundPlayer />
    </div>
  </div>
</template>

<script>
import SoundPlayer from "@/components/SoundPlayer.vue";

export default {
  name: "HomePageSounds",
  components: {
    SoundPlayer
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

.hp_sounds_container {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 5vw 10vh 5vw;
  .sounds_header {
    width: 100%;
    height: auto;
    @include flex(center, flex-start);
    font-family: "Red Hat Display", sans-serif;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 4.4rem;
    margin-bottom: 10vh;
    .subfont_text {
      @include flex(center, center);
      margin-left: 15px;
      .subfont {
        font-family: "Shadows Into Light", cursive;
        font-weight: 100;
        font-size: 4rem;
        position: relative;
        &::after {
          content: "";
          background: url("../assets/subtxt-path.svg") no-repeat;
          display: block;
          height: 20px;
          width: 150px;
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
