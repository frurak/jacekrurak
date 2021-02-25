<template>
  <div class="ravvast_play_container">
    <div class="ravvast_image_container">
      <img src="@/assets/Ravvast.png" alt="Graj na Ravvast Drum" />
      <div class="pan_desc desc1">A4</div>
      <div class="pan_desc desc2">F#4</div>
      <div class="pan_desc desc3">D4</div>
      <div class="pan_desc desc4">B3</div>
      <div class="pan_desc desc5">G3</div>
      <div class="pan_desc desc6">A3</div>
      <div class="pan_desc desc7">C#4</div>
      <div class="pan_desc desc8">E4</div>
      <div class="pan_desc desc9">D3</div>

      <div class="pan_item item1" @click="playA4()"></div>
      <div class="pan_item item2" @click="playFis4()"></div>
      <div class="pan_item item3" @click="playD4()"></div>
      <div class="pan_item item4" @click="playB3()"></div>
      <div class="pan_item item5" @click="playG3()"></div>
      <div class="pan_item item6" @click="playA3()"></div>
      <div class="pan_item item7" @click="playCis4()"></div>
      <div class="pan_item item8" @click="playE4()"></div>
      <div class="pan_item item9" @click="playD3()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RavvastPlay",
  data() {
    return {
      audio: document.createElement("audio")
    }
  },
  methods: {
    playA4() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/A4.mp3");
      this.audio.play();
    },
    playFis4() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/Fis4.mp3");
      this.audio.play();
    },
    playD4() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/D4.mp3");
      this.audio.play();
    },
    playB3() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/B3.mp3");
      this.audio.play();
    },
    playG3() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/G3.mp3");
      this.audio.play();
    },
    playA3() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/A3.mp3");
      this.audio.play();
    },
    playCis4() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/Cis4.mp3");
      this.audio.play();
    },
    playE4() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/E4.mp3");
      this.audio.play();
    },
    playD3() {
      this.audio.pause();
      this.audio.src = require("@/assets/sounds/D3.mp3");
      this.audio.play();
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

.ravvast_play_container {
  width: 100%;
  height: auto;
  @include flex(flex-start, center);
  .ravvast_image_container {
    width: auto;
    height: auto;
    @include flex(center, center);
    position: relative;
    img {
      width: 50%;
    }
  }
  .pan_desc {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 900;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: 2px solid #fff;
    background: #ff9148;
    @include flex(center, center);
    position: absolute;
  }
  .desc1 {
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
  }
  .desc2 {
    right: 30%;
    top: 15%;
  }
  .desc3 {
    right: 25%;
    top: 50%;
    transform: translateY(-50%);
  }
  .desc4 {
    right: 30%;
    bottom: 15%;
  }
  .desc5 {
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
  }
  .desc6 {
    left: 30%;
    bottom: 15%;
  }
  .desc7 {
    left: 25%;
    top: 50%;
    transform: translateY(-50%);
  }
  .desc8 {
    left: 30%;
    top: 15%;
  }
  .desc9 {
    left: 50%;
    top: 38%;
  }
  .pan_item {
    width: 200px;
    height: 200px;
    background: rgb(255, 255, 255);
    margin: 2px;
    position: absolute;
    clip-path: polygon(26% 0, 75% 0, 100% 100%, 0% 100%);
    cursor: pointer;
    opacity: 0;
  }
  .item1 {
    left: 50%;
    top: 3%;
    transform: translateX(-50%) rotate(180deg);
  }
  .item2 {
    right: 31%;
    top: 13%;
    transform: rotate(-135deg);
  }
  .item3 {
    right: 27%;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
  }
  .item4 {
    right: 31%;
    bottom: 12%;
    transform: rotate(-45deg);
  }
  .item5 {
    left: 50%;
    bottom: 3%;
    transform: translateX(-50%);
  }
  .item6 {
    left: 31%;
    bottom: 12%;
    transform: rotate(45deg);
  }
  .item7 {
    left: 27%;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
  }
  .item8 {
    left: 31%;
    top: 13%;
    transform: rotate(135deg);
  }
  .item9 {
    clip-path: none;
    border-radius: 100px;
    width: 230px;
    height: 230px;
  }
}
</style>
