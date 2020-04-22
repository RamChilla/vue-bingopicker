<template>
  <v-row class="text-center">
    <v-col class="mb-4">
      <!-- <h1 class="display-4 font-weight-light mb-3">{{ msg }}</h1> -->

      <v-progress-circular v-ripple
        class="display-3"
        rotate="0"
        size="256"
        width="8"
        :value="percentageValue"
        color="teal"
        :indeterminate="indeterminate" 
        style="border-radius: 50%; position: relative" 
        @click="$emit('onBingoClick')"
      >
      
        <div class="number-labels">
          <p class="mb-1 pb-2" style="z-index: 9;">{{currentNumber}}</p>
          <p class="title mb-0">
            <span class="subtitle-2" v-show="showPreviousLabel">Previous: </span> 
            <span v-html="previousNumber"></span>
          </p>
        </div>
        
        <v-overlay
          absolute
          :value="overlay"
          style="border-radius:50%;"
          zIndex="0"
          color: primary
        >
          <canvas id="canvas" style="border-radius: 50%"></canvas>
        </v-overlay>

      </v-progress-circular>
      
      
    </v-col>
  </v-row>
</template>

<script>
// import balls from "@/assets/animatedBalls.js"
export default {
  name: "CurrentBingoNumber",
  props: [
    "currentNumber", 
    "percentageValue", 
    "numberOfBalls"
  ],
  data: () => ({
    overlay: false,
    indeterminate: false,
    previousNumber: "&nbsp;",
    showPreviousLabel: false
  }),
  mounted() {
    //balls(this.numberOfBalls)
  },
  watch: {
    // numberOfBalls: function(newvalue) {
    //   // balls(newvalue)
    // },
    currentNumber: function(newvalue, oldvalue) {
      console.log(newvalue)
      if (newvalue === " " || oldvalue === " ") {
        this.previousNumber = "&nbsp;";
        this.showPreviousLabel = false;
      }
      else {
        this.previousNumber = oldvalue;
        this.showPreviousLabel = true;
      }
    }
  }
};
</script>

<style lang="scss">
$progress-circular-underlay-stroke: #2B364A;
.v-progress-circular__underlay {
  stroke: $progress-circular-underlay-stroke;
}
.number-labels p:first-of-type {
  border-bottom: 2px solid $progress-circular-underlay-stroke;
}
</style>