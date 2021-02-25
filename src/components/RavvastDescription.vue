<template>
  <div class="ravvast_page_description">
    <h3>
      Rav vast drum powstał w 2013 roku w Rosji. Młody, rosyjski inżynier
      mieszkający w Perm - Andrey Remyannikov - zafascynowany dźwiękiem handpana
      postanowił stworzyć swój własny instrument. Tak naprawdę rav vast swoją
      światową premierę miał dopiero wtedy 2015 roku. Jest więc bardzo młodym
      instrumentem. Zasada gry na nim jestem taka sama jak na Handpanie ma
      jednak bardziej hipnotyzujący, spokojny, medytacyjny, mistyczny dźwięk. Z
      tego powodu nazywany jest spacedrum lub bębnem UFO.
    </h3>
  </div>
</template>

<script>
export default {
  name: "RavvastDescription"
};
</script>

<style lang="scss">
$border: #d1d1d1;
@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.ravvast_page_description {
  height: auto;
  width: 100vw;
  padding: 10vh 14vw;
  @include flex(center, center);
  border-bottom: 1px solid $border;
  max-width: 2000px;
  margin: 0 auto;
  h3 {
    font-size: 1.1rem;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    text-align: justify;
  }
}
</style>
