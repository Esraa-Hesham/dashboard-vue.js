<template>
  <div class="home">
    <app-header />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <app-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AppHeader from "../components/Global/AppHeader.vue";
import AppFooter from "../components/Global/AppFooter.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    AppHeader,
    AppFooter,
  },
};
</script>
