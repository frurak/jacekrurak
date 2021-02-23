<template>
  <div class="hp_offer_container">
    <div class="offer_header">
      Zaplanuj
      <div class="subfont_text">
        <img src="@/assets/oprawa.svg" />
      </div>
    </div>
    <div class="offer_items_container">
      <div class="offer_item">
        <div class="item_header">
          <div class="header_icon">
            <img src="@/assets/music-vector.svg" />
          </div>
          <div class="header_text">Koncerty</div>
        </div>
        <div class="item_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sodales mi eu sapien ultrices, nec venenatis neque cursus. Sed
          accumsan venenatis dolor, non consectetur mauris rhoncus ac. Nullam
          vel molestie justo.
        </div>
      </div>

      <div class="offer_item">
        <div class="item_header">
          <div class="header_icon">
            <img src="@/assets/chat-vector.svg" id="chat" />
          </div>
          <div class="header_text">Spotkania przy muzyce</div>
        </div>
        <div class="item_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sodales mi eu sapien ultrices, nec venenatis neque cursus. Sed
          accumsan venenatis dolor, non consectetur mauris rhoncus ac. Nullam
          vel molestie justo.
        </div>
      </div>

      <div class="offer_item">
        <div class="item_header">
          <div class="header_icon">
            <img src="@/assets/silh-vector.svg" />
          </div>
          <div class="header_text">Medytacje w klubach<br />jogi</div>
        </div>
        <div class="item_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sodales mi eu sapien ultrices, nec venenatis neque cursus. Sed
          accumsan venenatis dolor, non consectetur mauris rhoncus ac. Nullam
          vel molestie justo.
        </div>
      </div>

      <div class="offer_item">
        <div class="item_header">
          <div class="header_icon">
            <img src="@/assets/bag-vector.svg" />
          </div>
          <div class="header_text">Spotkania biznesowe</div>
        </div>
        <div class="item_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sodales mi eu sapien ultrices, nec venenatis neque cursus. Sed
          accumsan venenatis dolor, non consectetur mauris rhoncus ac. Nullam
          vel molestie justo.
        </div>
      </div>

      <div class="offer_item">
        <div class="item_header">
          <div class="header_icon">
            <img src="@/assets/leaf-vector.svg" id="leaf" />
          </div>
          <div class="header_text">Sesje<br />muzykoterapeutyczne</div>
        </div>
        <div class="item_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sodales mi eu sapien ultrices, nec venenatis neque cursus. Sed
          accumsan venenatis dolor, non consectetur mauris rhoncus ac. Nullam
          vel molestie justo.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageOffer"
};
</script>

<style lang="scss">
$border: #d1d1d1;
@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.hp_offer_container {
  min-height: 100vh;
  width: 100vw;
  padding: 10vh 5vw;
  @include flex(center, center);
  flex-direction: column;
  .offer_header {
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
      margin-left: 20px;
      position: relative;
      width: 450px;
      height: 80px;
      img {
        position: absolute;
        top: 25%;
        left: 0;
        width: 100%;
      }
    }
  }
  .offer_items_container {
    width: 100%;
    min-height: 70vh;
    padding: 0 9vw;
    @include flex(flex-start, flex-start);
    flex-wrap: wrap;
    .offer_item {
      width: 50%;
      min-height: 200px;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      margin-bottom: 10vh;
      .item_header {
        width: 100%;
        @include flex(center, flex-start);
        flex-direction: row;
        margin-bottom: 35px;
        .header_icon {
          width: 120px;
          height: 120px;
          background: #000;
          border-radius: 15px;
          @include flex(center, center);
          img {
            width: 35%;
          }
          #chat {
            width: 40%;
          }
          #leaf {
            width: 42%;
          }
        }
        .header_text {
          margin-left: 35px;
          font-family: "Red Hat Display", sans-serif;
          font-weight: 900;
          font-size: 1.8rem;
        }
      }
      .item_description {
        font-size: 1.1rem;
        line-height: 1.5rem;
        letter-spacing: 0.5px;
        padding-right: 15%;
      }
    }
  }
}
</style>
