<template>
  <div class="home">
    <div class="">
      <slider />
      <our-staff />
      <about-us />
    </div>
  </div>
</template>

<script>
import AboutUs from "../components/HomePage/AboutUs.vue";
import OurStaff from "../components/HomePage/OurStaff.vue";
import Slider from "../components/HomePage/slider.vue";

export default {
  name: "Home",
  components: { Slider, OurStaff, AboutUs },
};
</script>
