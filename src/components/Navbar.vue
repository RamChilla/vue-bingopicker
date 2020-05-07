<template>
  <v-app-bar app flat dense color="transparent">
    <v-toolbar-title class="font-weight-light" style="letter-spacing: 2px;">{{ appName }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- help menu -->
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      :nudge-bottom="15"
      offset-x
      offset-y
      light
    >
      <template v-slot:activator="{ on }">
        <v-btn small icon v-on="on" class="mr-1">
          <v-icon>help_outline</v-icon>
        </v-btn>
      </template>

      <v-card max-width="300px">
        <v-list>

          <v-list-item>
            <v-list-item-avatar color="primary">
              <v-icon x-large class="white--text">help_outline</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light display-1">{{ appName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content v-html="aboutText" class="subtitle-1"></v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content v-html="aboutText2" class="subtitle-2"></v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text small color="blue-grey lighten-1" :href="ghLink">
            <v-icon small left>open_in_new</v-icon>
            <span>Github</span> 
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="info" @click="menu = false">
            <v-icon left>thumb_up</v-icon> 
            <span>Ok, Cool</span>
          </v-btn>
          
        </v-card-actions>
        
      </v-card>
    </v-menu>

    <!--Dropdown Menu-->
    <v-menu offset-y transition="scroll-y-transition">
      <template v-slot:activator="{on}">
        <v-btn v-on="on" text>
          <v-icon>settings</v-icon>
          <v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <v-list light>
        <v-btn text color="pink" @click="$root.$emit('onResetBingo')">
          <v-icon>loop</v-icon>
          <span class="ml-4 text-lowercase">Reset {{appName}}</span>
        </v-btn>
      </v-list>
    </v-menu>
    
  </v-app-bar>
</template>

<script>
export default {
  props: ['appName'],
  data() {
    return {
      showHelp: false,
      menu: false,
      ghLink: 'https://github.com/ramchilla/vue-bingopicker',
      aboutText: 'A bingo number picker made with Vue.js during the Covid-19 pandemic.',
      aboutText2: `My girlfriend planned a bingo style game for us to play 
              but didn't have a bingo ball picker.
              Since I'm just learning Vue.js and Vuetify, 
              I figured this would be a good opportunity to use&nbsp;it.`
    };
  }
};
</script>