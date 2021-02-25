<template>
  <div class="listenmore_container">
    <div class="listenmore_header">Słuchaj więcej na:</div>
    <div class="listenmore_socials">
      <a
        class="on_source on_facebook"
        href="https://www.facebook.com/jacekrurak"
        target="_blank"
      >
        <img src="@/assets/fb.png" />
        <div class="on_facebook_txt">Facebooku</div>
      </a>
      <a
        class="on_source on_youtube"
        href="https://www.youtube.com/channel/UC33lZYtV5wpsHsx4cyn8jrA"
        target="_blank"
      >
        <img src="@/assets/yt.png" />
        <div class="on_youtube_txt">Youtube</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListenMoreOn"
};
</script>

<style lang="scss">
$border: #d1d1d1;
@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.listenmore_container {
  width: 100%;
  height: auto;
  margin-top: 10vh;
  @include flex(center, flex-start);
  flex-direction: column;
  max-width: 2000px;
  margin: 0 auto;
  .listenmore_header {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 900;
    font-size: 1.8rem;
    margin-bottom: 5vh;
  }
  .listenmore_socials {
    @include flex(center, center);
    flex-direction: row;
    .on_source {
      width: 500px;
      height: 80px;
      background: #fff;
      margin: 0 10px;
      border: 1px solid $border;
      border-radius: 100px;
      @include flex(center, center);
      flex-direction: row;
      text-decoration: none;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 900;
      font-size: 1.5rem;
      img {
        width: 8%;
      }
      &:hover {
        box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.15);
        transition: 0.15s ease-in-out;
      }
    }
    .on_facebook {
      .on_facebook_txt {
        color: #3a5499;
      }
    }
    .on_youtube {
      img {
        margin-right: 8px;
      }
      .on_youtube_txt {
        color: #fc0000;
      }
    }
  }
}
</style>
