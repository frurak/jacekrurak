/* eslint-disable prettier/prettier */
<template>
  <div class="slider_container">
    <div class="slider_content">
      <div class="content_text">
        <div class="text_line first_line">
          <div class="text_header">Muzyka</div>
          <div class="subfont_text"><p class="subfont">Sfer</p></div>
        </div>
        <div class="text_line second_line">Dialog Duszy i Ciała</div>
      </div>
      <ButtonBig class="content_btn" btntxt="Czytaj więcej" />
    </div>
    <div class="slider_previous" @click="prev_slide()">
      <img class="slider_arrow" src="@/assets/Arrow.svg" />
    </div>
    <div class="slider_next" @click="next_slide()">
      <img
        class="slider_arrow"
        src="@/assets/Arrow.svg"
        style="transform: rotate(180deg);"
      />
    </div>
  </div>
</template>

<script>
import ButtonBig from "@/components/ButtonBig.vue";

export default {
  components: {
    ButtonBig
  },
  data() {
    return {
      headers: [
        {
          header1: "Muzyka",
          header2: "Sfer",
          subheader: "Dialog Duszy i Ciała"
        },
        {
          header1: "Pierwszy",
          header2: "Autorski",
          subheader: `Album "Przebudzenie"`
        },
        {
          header1: "Rav Vast",
          header2: "Drum,",
          subheader: "Handpan"
        }
      ],
      slider: 0,
      timer: undefined
    };
  },
  methods: {
    next_slide() {
      const content = document.querySelector(".slider_content");
      const header1 = document.querySelector(".content_text .text_header");
      const header2 = document.querySelector(".content_text .subfont");
      const header3 = document.querySelector(".content_text .second_line");

      clearInterval(this.timer);

      if (this.slider !== 2) {
        this.slider++;
      } else {
        this.slider = 0;
      }

      setTimeout(() => {
        content.classList.remove("slider_content-prev-left");
        content.classList.remove("slider_content-prev-right");
        content.classList.remove("slider_content-next-right");
        content.classList.add("slider_content-next-left");

        setTimeout(() => {
          header1.innerText = this.headers[this.slider].header1;
          header2.innerText = this.headers[this.slider].header2;
          header3.innerText = this.headers[this.slider].subheader;
        }, 300);

        setTimeout(() => {
          content.classList.remove("slider_content-next-left");
          content.classList.add("slider_content-next-right");
        }, 300);
      }, 100);

      this.timer = setInterval(() => {
        if (this.slider !== 2) {
          this.slider++;
        } else {
          this.slider = 0;
        }

        content.classList.remove("slider_content-prev-left");
        content.classList.remove("slider_content-prev-right");
        content.classList.remove("slider_content-next-right");
        content.classList.add("slider_content-next-left");

        setTimeout(() => {
          header1.innerText = this.headers[this.slider].header1;
          header2.innerText = this.headers[this.slider].header2;
          header3.innerText = this.headers[this.slider].subheader;
        }, 300);

        setTimeout(() => {
          content.classList.remove("slider_content-next-left");
          content.classList.add("slider_content-next-right");
        }, 300);
      }, 6000);
    },
    prev_slide() {
      const content = document.querySelector(".slider_content");
      const header1 = document.querySelector(".content_text .text_header");
      const header2 = document.querySelector(".content_text .subfont");
      const header3 = document.querySelector(".content_text .second_line");

      clearInterval(this.timer);

      if (this.slider !== 0) {
        this.slider--;
      } else {
        this.slider = 2;
      }

      setTimeout(() => {
        content.classList.remove("slider_content-next-left");
        content.classList.remove("slider_content-next-right");
        content.classList.remove("slider_content-prev-right");
        content.classList.add("slider_content-prev-left");

        setTimeout(() => {
          header1.innerText = this.headers[this.slider].header1;
          header2.innerText = this.headers[this.slider].header2;
          header3.innerText = this.headers[this.slider].subheader;
        }, 300);

        setTimeout(() => {
          content.classList.remove("slider_content-prev-left");
          content.classList.add("slider_content-prev-right");
        }, 300);
      }, 100);

      this.timer = setInterval(() => {
        if (this.slider !== 2) {
          this.slider++;
        } else {
          this.slider = 0;
        }

        content.classList.remove("slider_content-prev-left");
        content.classList.remove("slider_content-prev-right");
        content.classList.remove("slider_content-next-right");
        content.classList.add("slider_content-next-left");

        setTimeout(() => {
          header1.innerText = this.headers[this.slider].header1;
          header2.innerText = this.headers[this.slider].header2;
          header3.innerText = this.headers[this.slider].subheader;
        }, 300);

        setTimeout(() => {
          content.classList.remove("slider_content-next-left");
          content.classList.add("slider_content-next-right");
        }, 300);
      }, 6000);
    }
  },
  mounted() {
    const content = document.querySelector(".slider_content");
    const header1 = document.querySelector(".content_text .text_header");
    const header2 = document.querySelector(".content_text .subfont");
    const header3 = document.querySelector(".content_text .second_line");

    this.timer = setInterval(() => {
      if (this.slider !== 2) {
        this.slider++;
      } else {
        this.slider = 0;
      }

      content.classList.remove("slider_content-prev-left");
      content.classList.remove("slider_content-prev-right");
      content.classList.remove("slider_content-next-right");
      content.classList.add("slider_content-next-left");

      setTimeout(() => {
        header1.innerText = this.headers[this.slider].header1;
        header2.innerText = this.headers[this.slider].header2;
        header3.innerText = this.headers[this.slider].subheader;
      }, 300);

      setTimeout(() => {
        content.classList.remove("slider_content-next-left");
        content.classList.add("slider_content-next-right");
      }, 300);
    }, 6000);
  }
};
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
  max-width: 2000px;
  margin: 0 auto;
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
      .text_header {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 800;
        font-size: 3.2rem;
        line-height: 4.4rem;
      }
      .first_line {
        position: relative;
        .subfont_text {
          position: absolute;
          top: -30%;
          left: 110%;
          @include flex(center, center);
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
              width: 100px;
              background-position: center;
              position: absolute;
              left: 0;
              bottom: 10%;
            }
          }
        }
      }
      .second_line {
        margin-bottom: 1.3rem;
        font-family: "Red Hat Display", sans-serif;
        font-weight: 800;
        font-size: 3.2rem;
        line-height: 4.4rem;
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
      transition: 0.15s ease-in-out;
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
      transition: 0.15s ease-in-out;
    }
  }
}

.slider_content-next-right {
  animation: sliderFromRight 0.6s ease-in-out both;
}

@keyframes sliderFromRight {
  0% {
    transform: translateX(150%);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.slider_content-next-left {
  animation: sliderToLeft 0.35s ease-in-out both;
}

@keyframes sliderToLeft {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(-150%);
    opacity: 0;
  }
}

.slider_content-prev-left {
  animation: sliderToRight 0.35s ease-in-out both;
}

@keyframes sliderToRight {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(150%);
    opacity: 0;
  }
}

.slider_content-prev-right {
  animation: sliderFromLeft 0.6s ease-in-out both;
}

@keyframes sliderFromLeft {
  0% {
    transform: translateX(-150%);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>
