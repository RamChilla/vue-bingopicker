<template>
  <v-app :style="{background: $vuetify.theme.themes['light'].background}">
    
    <Navbar :appName="appName" />

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    appName: 'drinko bingo'
  }),
};
</script>
