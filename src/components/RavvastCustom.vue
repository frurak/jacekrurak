<template>
  <div class="ravvast_page_custom_sounds_container">
    <div class="custom_sounds_header">
      Skomponuj własny
      <div class="subfont_text"><p class="subfont">utwór</p></div>
    </div>
    <div class="custom_sounds_description">
      Poszczególne kształty ("pady") odpowiadają za wydobycie unikalnych
      dźwięków. <br />Stwórz własną melodię klikając w poszczególne dźwięki.
    </div>
    <RavvastPlay />
  </div>
</template>

<script>
import RavvastPlay from "@/components/RavvastPlay.vue";

export default {
  name: "RavvastCustom",
  components: {
    RavvastPlay
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

.ravvast_page_custom_sounds_container {
  width: 100vw;
  min-height: 50vh;
  padding: 10vh 5vw;
  max-width: 2000px;
  margin: 0 auto;
  .custom_sounds_header {
    width: 100%;
    height: auto;
    @include flex(center, flex-start);
    font-family: "Red Hat Display", sans-serif;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 4.4rem;
    margin-bottom: 2.6rem;
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
          width: 130px;
          background-position: center;
          position: absolute;
          left: 0;
          bottom: -15%;
        }
      }
    }
  }
  .custom_sounds_description {
    font-size: 1.1rem;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
    margin-bottom: 10vh;
  }
}
</style>
