<template>
  <div class="slider_container">
      <div class="slider_content">
          <div class="content_text">
              <div class="text_line first_line">
                  Muzyka
                  <div class="subfont_text"><p class="subfont">sfer</p></div>
              </div>
              <div class="text_line second_line">Dialog Duszy i Ciała</div>
          </div>
          <ButtonBig class="content_btn" btntxt="Czytaj więcej"/>
      </div>
      <div class="slider_previous"><img class="slider_arrow" src="@/assets/Arrow.svg" /></div>
      <div class="slider_next"><img class="slider_arrow" src="@/assets/Arrow.svg" style="transform: rotate(180deg);" /></div>
  </div>
</template>

<script>
import ButtonBig from '@/components/ButtonBig.vue';

export default {
    components: {
        ButtonBig
    }
}
</script>

<style lang="scss">
@mixin flex($al, $ju) {
    display: flex;
    align-items: $al;
    justify-content: $ju;
}

.slider_container {
    width: 100vw;
    height: 50vh;
    padding: 0 5vw;
    @include flex(center, center);
    position: relative;
    margin-top: 20vh;
    .slider_content {
        width: 37vw;
        height: 100%;
        @include flex(flex-start, center);
        flex-direction: column;
        .content_text {
            @include flex(flex-start, flex-start);
            flex-direction: column;
            width: auto;
            height: auto;
            position: relative;
            .text_line {
                font-family: 'Red Hat Display', sans-serif;
                font-weight: 800;
                font-size: 3.2rem;
                line-height: 4.4rem;
            }
            .first_line {
                position: relative;
                .subfont_text {
                    position: absolute;
                    top: -10%;
                    left: 110%;
                    @include flex(center, center);
                    .subfont {
                        font-family: 'Shadows Into Light', cursive;
                        font-weight: 100;
                        font-size: 4rem;
                        position: relative;
                        &::after {
                            content: '';
                            background: url("../assets/subtxt-path.svg") no-repeat;
                            display: block;
                            height: 20px;
                            width: 100px;
                            background-position: center;
                            position: absolute;
                            left: 0;
                            bottom: -10%;
                        }
                    }
                }
            }
            .second_line {
                margin-bottom: 1.3rem;
            }
        }
    }
    .slider_previous {
        z-index: 200;
        height: 40px;
        width: 40px;
        background: #000;
        border-radius: 5px;
        @include flex(center, center);
        cursor: pointer;
        position: absolute;
        left: 5vw;
        top: 50%;
        transform: translateY(-50%);
        .slider_arrow {
            width: 8px;
            height: auto;
            transform: translateX(-8%);
            
        }
        &:hover {
            box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.3);
            transition: 0.15s ease-in-out
        }
    }
    .slider_next {
        z-index: 200;
        height: 40px;
        width: 40px;
        background: #000;
        border-radius: 5px;
        @include flex(center, center);
        cursor: pointer;
        position: absolute;
        right: 5vw;
        top: 50%;
        transform: translateY(-50%);
        .slider_arrow {
            width: 8px;
            height: auto;
            transform: translateX(-8%);
            
        }
        &:hover {
            box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.3);
            transition: 0.15s ease-in-out
        }
    }
}
</style>