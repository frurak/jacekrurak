<template>
  <div class="footer_container">
    <div class="footer_top">
      <div class="footer_header">Skontaktuj się<br />ze mną</div>
      <div class="footer_info">
        <div class="info_container">
          <p class="info_header">Adres mailowy</p>
          <p class="info">jacekrurak@o2.pl</p>
        </div>
        <div class="info_container">
          <p class="info_header">Telefon</p>
          <p class="info">+48 608 450 332</p>
        </div>
        <div class="info_container">
          <div class="info_header">Social Media</div>
          <div class="socials_icons">
            <img class="fb" src="@/assets/fb-wht.png" />
            <img class="yt" src="@/assets/yt-wht.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      Copyrights &copy; 2020
      <p class="webmaster">Projekt i wdrożenie - <a href="https://www.linkedin.com/in/filip-rurak-6a7685169/" target="_blank">Filip Rurak</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
$border: #d1d1d1;
@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.footer_container {
  min-height: 60vh;
  width: 100vw;
  padding: 10vh 5vw 5vh 5vw;
  background: #000;
  @include flex(center, space-between);
  flex-direction: column;
  position: relative;
  .footer_top {
    width: 100%;
    height: auto;
    @include flex(flex-start, center);
    flex-direction: row;
    .footer_header {
      font-family: "Red Hat Display", sans-serif;
      font-weight: 800;
      font-size: 3.2rem;
      line-height: 4.4rem;
      color: #fff;
      width: 50%;
    }
    .footer_info {
      width: 50%;
      height: auto;
      @include flex(flex-start, space-between);
      .info_container {
        @include flex(flex-start, flex-start);
        flex-direction: column;
        .info_header {
          color: #fff;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 900;
          font-size: 1.8rem;
          margin-bottom: 2.6vh;
        }
        .info {
          color: #fff;
          cursor: pointer;
        }
        .socials_icons {
          @include flex(flex-start, flex-start);
          flex-direction: row;
          img {
            width: 40px;
            cursor: pointer;
          }
          .yt {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .footer_bottom {
    width: 100%;
    height: auto;
    color: #fff;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 900;
    @include flex(center, flex-end);
    flex-direction: row;
    z-index: 1;
    .webmaster {
      font-family: "Mukta", sans-serif;
      font-weight: 400;
      margin-left: 20px;
      color: #fff;
      a {
        color: #ff9148;
      }
    }
  }
  &::after {
    content: "";
    background: url("../assets/custom-line.svg") no-repeat;
    display: block;
    height: 300px;
    width: 100vw;
    background-position: center;
    position: absolute;
    left: 0;
    bottom: 0%;
    z-index: 0;
  }
}
</style>
