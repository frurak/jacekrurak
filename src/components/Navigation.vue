<template>
  <div class="navigation_container">
      <div class="logo_container">
          <div class="logo_icons">
              <div class="icon J">J</div>
              <div class="icon R">R</div>
          </div>
          <div class="logo_text">rav&nbsp;vast&nbsp;|&nbsp;handpan</div>
      </div>
      <ul class="nav_links">
        <li class="nav_link"><router-link to="/">Strona&nbsp;główna</router-link></li>
        <li class="nav_link"><router-link to="/about">Album</router-link></li>
        <li class="nav_link"><router-link to="/about">Rav&nbsp;Vast&nbsp;Drum</router-link></li>
        <li class="nav_link"><router-link to="/about">Handpan</router-link></li>
        <li class="nav_link"><router-link to="/about">O&nbsp;mnie</router-link></li>
      </ul>
      <ButtonBig btntxt="Skontaktuj się"/>
  </div>
  
</template>

<script>
import ButtonBig from '@/components/ButtonBig.vue';

export default {
  name: 'Navigation',
  components: {
    ButtonBig
  }
}
</script>

<style lang="scss">
$border: #D1D1D1;
@mixin flex($al, $ju) {
    display: flex;
    align-items: $al;
    justify-content: $ju;
}

.navigation_container {
    width: 100vw;
    height: 20vh;
    background: #fff;
    border-bottom: 1px solid $border;
    padding: 0 5vw;
    @include flex(center, space-between);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    .logo_container {
        height: 80px;
        min-width: 150px;
        width: auto;
        @include flex(center, center);
        flex-direction: column;
        .logo_icons {
            height: 100%;
            width: 100%;
            @include flex(center, center);
            flex-direction: row;
            .J {
                background: #000;
                color: #fff;
                width: 35px;
                height: 35px;
                border-radius: 5px;
                @include flex(center, center);
                margin: 0 2px;
                transform: translateY(10%);
            }
            .R {
                background: #000;
                color: #fff;
                width: 35px;
                height: 35px;
                border-radius: 5px;
                @include flex(center, center);
                margin: 0 2px;
                transform: translateY(-10%);
            }
        }
        .logo_text {
            font-size: 1.1rem;
            font-weight: 100;
        }
    }
    .nav_links {
        @include flex(center, center);
        .nav_link {
            list-style: none;
            text-decoration: none;
            margin: 0 20px;
            text-transform: uppercase;
            position: relative;
            font-weight: 100;
            &::after {
                content: '';
                display: block;
                width: calc(0%);
                height: 2px;
                background: #000;
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translate(-50%,0%);
            }
            &:hover::after {
                width: calc(100%);
                transition: 0.15s ease-in-out;
            }
        }
        a {
            text-decoration: none;
        }
    }
}

</style>