<template>
  <router-view />
</template>

<script>
</script>

<style lang="scss">
@mixin flex($al, $ju) {
    display: flex;
    align-items: $al;
    justify-content: $ju;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Mukta', sans-serif;
  color: #000;
}
</style>
