<template>
  <v-app :style="{ background: $vuetify.theme.themes['light'].background }">
    <Navbar :appName="appName" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    appName: "bingo picker",
  }),
};
</script>
