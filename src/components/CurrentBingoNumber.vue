<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <!-- <h1 class="display-4 font-weight-light mb-3">{{ msg }}</h1> -->

        <v-progress-circular v-ripple
          class="display-4"
          rotate="0"
          size="300"
          width="8"
          :value="value"
          color="teal"
          :indeterminate="indeterminate" 
          style="border-radius: 50%;" 
          @click="onBingoClick"
        >
          <span>{{msg}}</span>
        </v-progress-circular>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CurrentBingoNumber",
  props: ["msg", "value", "indeterminate"],
  data: () => ({
    
  }),
  methods: {
    onBingoClick() {
      this.$emit('onBingoClick')
    }
  }
};
</script>

<style lang="scss">
$progress-circular-underlay-stroke: #2B364A;
.v-progress-circular__underlay {
  stroke: $progress-circular-underlay-stroke;
}
</style>