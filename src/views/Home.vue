<template>
  <div class="homepage_container">
    <Navigation />
    <HomePageSlider />
    <HomePageBanners />
    <HomePageArticleOne />
    <HomePageSounds />
    <HomePageAlbum />
    <HomePageOffer />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import HomePageSlider from "@/components/HomePageSlider.vue";
import HomePageBanners from "@/components/HomePageBanners.vue";
import HomePageArticleOne from "@/components/HomePageArticleOne.vue";
import HomePageSounds from "@/components/HomePageSounds.vue";
import HomePageAlbum from "@/components/HomePageAlbum.vue";
import HomePageOffer from "@/components/HomePageOffer.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navigation,
    HomePageSlider,
    HomePageBanners,
    HomePageArticleOne,
    HomePageSounds,
    HomePageAlbum,
    HomePageOffer,
    Footer
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
