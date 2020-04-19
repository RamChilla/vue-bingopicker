<template>
  <v-app-bar app flat dense color="secondary">
    <v-toolbar-title class="font-weight-light" style="letter-spacing: 2px;">drinko</v-toolbar-title>

    <v-spacer></v-spacer>

    <!--Dropdown Menu-->
      <v-menu dense offset-y transition="scroll-y-transition">
        <template v-slot:activator="{on}">
          <v-btn v-on="on" text>
            <v-icon>settings</v-icon>
            <v-icon>expand_more</v-icon>
          </v-btn>
        </template>
        <v-list light>
          <v-btn text color="pink" @click="$root.$emit('onResetBingo')">
            <v-icon>loop</v-icon>
            <span class="ml-4 font-weight-bold">Reset drinko</span>
          </v-btn>
        </v-list>
      </v-menu>

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>