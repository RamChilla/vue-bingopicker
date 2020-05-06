<template>
  <div class="home" >
    <v-container fluid class="text-center">
      
      <CurrentBingoNumber 
        :currentNumber="currentBingoNumber" 
        :percentageValue="percentageSelected"
        :numberOfBalls="bingoPool.length"
        @onBingoClick="pickBingoNumber" 
        :showLoader="showLoader" 
      />

      <v-btn :disabled="showLoader" v-show="pickNumberButton" class="mb-6" color="info" x-large @click="pickBingoNumber">
        <v-icon>announcement</v-icon>
        <span class="ml-4 text-lowercase">Pick Number</span>
      </v-btn>

      <v-btn v-show="!pickNumberButton" class="mb-6" color="pink" x-large @click="resetBingoPicker">
        <v-icon>loop</v-icon>
        <span class="ml-4 text-lowercase">Reset Bingo</span>
      </v-btn>

      <v-row v-for="(bingoset, index) in bingoViewPool" :key="index">
        <v-col v-for="(bingo, idx) in bingoset" :key="idx" 
          :class="`text-center ${bingo.isSelected ? '':''}`">
          
          <v-expand-transition leave-absolute duration="1000">
            <p v-show="bingo.isSelected" class="mb-0 font-weight-black pink--text">{{bingo.value}}</p>
          </v-expand-transition>
          <v-expand-transition leave-absolute duration="2000">
            <p v-show="!bingo.isSelected" class="mb-0 primary--text">{{bingo.value}}</p>
          </v-expand-transition>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentBingoNumber from "@/components/CurrentBingoNumber.vue";

export default {
  name: "Home",
  components: { CurrentBingoNumber },

  data() {
    return {
      bingoLetters: ["B", "I", "N", "G", "O"],
      bingoNumberRange: [...Array(76).keys()],
      currentBingoNumber: " ",
      bingoPool: [],
      bingoSelected: [],
      bingoViewPool: {
        B: {},
        I: {},
        N: {},
        G: {},
        O: {},
      },
      pickNumberButton: true,
      showLoader: false
    };
  },

  methods: {
    pickBingoNumber() {
      if (this.bingoPool.length > 0 && !this.showLoader) {
        this.showLoader = !this.showLoader;

        setTimeout(() => {
          //select from the available pool
          const currentSelect = this._selectRandom(this.bingoPool);
          this.currentBingoNumber = currentSelect.value;
          this.bingoSelected.push(currentSelect.value);

          //update selected balls view
          const letter = currentSelect.value.charAt(0);
          const formattedKey = currentSelect.value.replace(" ", "");
          this.bingoViewPool[letter][formattedKey].isSelected = true;

          //remove from pool
          this.$delete(this.bingoPool, currentSelect.selectedIndex);
          this.showLoader = !this.showLoader;

          //no more numbers in the pool
          if(this.bingoPool.length === 0) {
            this.pickNumberButton = false;
          }
        }, 1320)

      }
    },

    _selectRandom: function(set) {
      const selectedIndex = this._getRandomIndex(0, set.length);
      return {
        value: set[selectedIndex],
        selectedIndex: selectedIndex
      }
    },

    _getRandomIndex: function(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    resetBingoPicker: function() {
      this.currentBingoNumber = " ";
      this.bingoPool = [];
      this.bingoSelected = [];
      this.pickNumberButton = true;

      let letterIndex = 0;
      this.bingoNumberRange.forEach(value => {

        if (value < 16) {
          letterIndex = 0;
        } else if (value < 31) {
          letterIndex = 1;
        } else if (value < 46) {
          letterIndex = 2;
        } else if (value < 61) {
          letterIndex = 3;
        } else if (value < 76) {
          letterIndex = 4;
        }

        let newValue = `${this.bingoLetters[letterIndex]} ${value.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false
          })}`;

        this.bingoPool.push(newValue);

        let formattedValueKey = newValue.replace(" ", "");
        this.bingoViewPool[this.bingoLetters[letterIndex]][formattedValueKey] = {
          value: newValue,
          isSelected: false
        };

      });
    }
  },

  created() {
    this.bingoNumberRange.shift();
    this.resetBingoPicker();
  },

  computed: {
    percentageSelected() {
      return (this.bingoSelected.length / this.bingoNumberRange.length) *100;
    }
  },

  mounted() {
    this.$root.$on('onResetBingo', this.resetBingoPicker);
  },

};
</script>
