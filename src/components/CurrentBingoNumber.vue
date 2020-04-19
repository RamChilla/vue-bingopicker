<template>
  
    <v-row class="text-center">
      <v-col class="mb-4">
        <!-- <h1 class="display-4 font-weight-light mb-3">{{ msg }}</h1> -->

        <v-progress-circular v-ripple
          class="display-3"
          rotate="0"
          size="256"
          width="8"
          :value="value"
          color="teal"
          :indeterminate="indeterminate" 
          style="border-radius: 50%;" 
          @click="$emit('onBingoClick')"
        >
          <span>{{msg}}</span>
        </v-progress-circular>

      </v-col>
    </v-row>
  
</template>

<script>
export default {
  name: "CurrentBingoNumber",
  props: ["msg", "value", "indeterminate"],
  data: () => ({
    
  })
};
</script>

<style lang="scss">
$progress-circular-underlay-stroke: #2B364A;
.v-progress-circular__underlay {
  stroke: $progress-circular-underlay-stroke;
}
</style>