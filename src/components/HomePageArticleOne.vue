/* eslint-disable prettier/prettier */
<template>
  <div class="hp_article_one_container">
    <div class="article_one_photo_container">
      <img src="@/assets/article_one_photo.jpg" class="article_one_photo" />
    </div>
    <div class="article_one_text_container">
      <div class="article_one_text_header">
        Muzyczna
        <div class="article_one_text_subheader">
          <p class="subfont">podróz</p>
        </div>
      </div>
      <p class="article_one_text">
        Jestem muzykiem, altowiolistą, skrzypkiem. Od wielu lat pracuję w
        orkiestrze Teatru Wielkiego w Łodzi. Prawdę mówiąc wydawało mi się od
        jakiegoś czasu, że w moim świecie muzycznym już nic nowego mnie nie
        spotka. Jednak w roku 2019 zobaczyłem i usłyszałem po raz pierwszy
        instrument, który wywrócił do góry nogami moje muzyczne życie.
      </p>
      <ButtonBig btntxt="Czytaj więcej" />
    </div>
  </div>
</template>

<script>
import ButtonBig from "@/components/ButtonBig.vue";

export default {
  name: "HomePageArticleOne",
  components: {
    ButtonBig
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

.hp_article_one_container {
  width: 100vw;
  padding: 10vh 5vw 10vh 5vw;
  height: 80vh;
  @include flex(flex-start, space-between);
  border-bottom: 1px solid $border;
  .article_one_photo_container {
    width: 49%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 8px 15px 25px rgba(0, 0, 0, 0.2);
    border: 3px solid rgba(255, 255, 255, 1);
    @include flex(center, center);
    overflow: hidden;
    .article_one_photo {
      height: auto;
      width: 100%;
    }
  }
  .article_one_text_container {
    width: 49%;
    height: 100%;
    @include flex(flex-start, flex-start);
    flex-direction: column;
    .article_one_text_header {
      @include flex(center, flex-start);
      margin-bottom: 2.6rem;
      margin-top: 2.6rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 800;
      font-size: 3.2rem;
      line-height: 4.4rem;
      .subfont {
        font-family: "Shadows Into Light", cursive;
        font-weight: 100;
        font-size: 4rem;
        position: relative;
        margin-left: 15px;
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 20px;
          right: 20px;
          width: 5px;
          height: 5px;
          background: #000;
          border-radius: 50%;
        }
      }
    }
    .article_one_text {
      font-size: 1.1rem;
      line-height: 1.5rem;
      margin-bottom: 2.6rem;
      letter-spacing: 0.5px;
    }
  }
}
</style>
