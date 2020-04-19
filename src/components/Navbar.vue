<template>
  <v-app-bar app flat dense color="secondary">
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
        <v-btn small icon v-on="on">
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
          <v-spacer></v-spacer>
          <v-btn depressed color="info" @click="menu = false">
            <v-icon left>thumb_up</v-icon> 
            <span>Okay</span>
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
          <span class="ml-4 text-lowercase">Reset drinko</span>
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
      aboutText: 'A bingo number picker made during the Covid-19 pandemic.',
      aboutText2: `My girlfriend planned a bingo style game for us to play 
              but didn't have a the ball picker.
              Since I'm just learning Vue.js and Vuetify, 
              I figured this would be a good opportunity to learn&nbsp;it.`
    };
  }
};
</script>