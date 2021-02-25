<template>
  <div class="ravvast_route_container">
    <Navigation />
    <RavvastTopBanner />
    <RavvastDescription />
    <RavvastCustom />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import RavvastTopBanner from "@/components/RavvastTopBanner.vue";
import RavvastDescription from "@/components/RavvastDescription.vue";
import RavvastCustom from "@/components/RavvastCustom.vue";

export default {
  components: {
    Navigation,
    Footer,
    RavvastTopBanner,
    RavvastDescription,
    RavvastCustom
  }
};
</script>

<style lang="scss"></style>
