<template>
  <div class="homepage_container">
    <Navigation />
    <HomePageSlider />
    <HomePageBanners />
    <HomePageArticleOne />
    <HomePageSounds />
    <HomePageAlbum />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import HomePageSlider from "@/components/HomePageSlider.vue";
import HomePageBanners from "@/components/HomePageBanners.vue";
import HomePageArticleOne from "@/components/HomePageArticleOne.vue";
import HomePageSounds from "@/components/HomePageSounds.vue";
import HomePageAlbum from "@/components/HomePageAlbum.vue";

export default {
  components: {
    Navigation,
    HomePageSlider,
    HomePageBanners,
    HomePageArticleOne,
    HomePageSounds,
    HomePageAlbum
  }
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}

.homepage_container {
  max-width: 2000px;
}
</style>
