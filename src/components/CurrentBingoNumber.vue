<template>
  <v-row class="text-center">
    <v-col class="mb-4">
      
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
      
        <v-scale-transition origin="center">
          <div v-show="!showLoader" class="number-labels" style="z-index: 2;">
            <p v-show="currentNumber != ' '" class="mb-1 pb-2">{{currentNumber}}</p>
            <p class="title mb-0">
              <span class="subtitle-2" v-show="showPreviousLabel">Previous: </span> 
              <span v-html="previousNumber"></span>
            </p>
          </div>
        </v-scale-transition>

        <v-overlay
          absolute
          :value="showLoader"
          style="border-radius:50%;"
          zIndex="1"
          color="transparent"
        >
          <vue-loaders name="semi-circle-spin" color="#7375A5" scale="6"></vue-loaders>
        </v-overlay>

      </v-progress-circular>
      
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CurrentBingoNumber",
  props: [
    "currentNumber", 
    "percentageValue", 
    "numberOfBalls",
    "showLoader"
  ],
  data: () => ({
    overlay: true,
    indeterminate: false,
    previousNumber: "&nbsp;",
    showPreviousLabel: false
  }),
  watch: {
    currentNumber: function(newvalue, oldvalue) {
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