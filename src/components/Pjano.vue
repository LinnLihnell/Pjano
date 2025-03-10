<script>
import Question from './Question.vue';
import { inject } from "vue";

export default {
  components: {
    Question
  },

  props: {
    checked: {
      type: Boolean,
      required: true
    },
  },


  data() {
    return {
      playSound: inject("playSound"),
      currentQuestion: [],
      whiteKeySize: 0,
      blackKeySize: 0,
      blackKeyMargin: 0,
      whiteKeySizeHeight: 0,
      blackKeySizeHeight: 0
    }
  },

  methods: {
    playTone(event, value) {
      event.preventDefault();
      if (this.playSound) {
        this.playSound(value);
      }
      this.$emit('playTone', value)
    },
    
    emittedQuestion(question) {
      this.currentQuestion.push(question)
    },

    calculateKeysSize() {
      this.screenWidth = window.innerWidth < 1000 ? window.innerWidth : 1000;
      this.whiteKeySize = this.screenWidth / 7;
      this.blackKeySize = this.whiteKeySize / 2;
      this.blackKeyMargin = - this.blackKeySize / 2;
      this.screenHeight = window.innerHeight > this.screenWidth * 0.55 ? this.screenWidth * 0.55 : window.innerHeight;
      this.whiteKeySizeHeight = this.screenHeight * 0.6;
      this.blackKeySizeHeight = this.whiteKeySizeHeight * 0.55;
    }
  },
  mounted() {
    window.addEventListener('resize', this.calculateKeysSize);
    this.calculateKeysSize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateKeysSize);
  }
}
</script>

<template>
  <div id="piano" @touchmove.prevent>
    <div class="key white" style="margin-left: 0" @pointerdown="playTone($event, 'C')">
      <p v-show="checked" class="showNotes">C</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'C#')">
      <p v-show="checked" :style="{ color: 'white' }">C#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'D')">
      <p v-show="checked" class="showNotes">D</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'D#')">
      <p v-show="checked" :style="{ color: 'white' }">D#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'E')">
      <p v-show="checked" class="showNotes">E</p>
    </div>
    <div class="key white" style="margin-left: 0" @pointerdown="playTone($event, 'F')">
      <p v-show="checked" class="showNotes">F</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'F#')">
      <p v-show="checked" :style="{ color: 'white' }">F#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'G')">
      <p v-show="checked" class="showNotes">G</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'G#')">
      <p v-show="checked" :style="{ color: 'white' }">G#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'A')">
      <p v-show="checked" class="showNotes">A</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'A#')">
      <p v-show="checked" :style="{ color: 'white' }">A#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'B')">
      <p v-show="checked" class="showNotes">B</p>
    </div>
  </div>
</template>

<style scoped>
#piano {
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}


.key {
  border: 1px solid #000;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.white {
  background-color: #fff;
  width: v-bind(whiteKeySize + 'px');
  height: v-bind(whiteKeySizeHeight + 'px');
  margin-left: v-bind(blackKeyMargin + 'px');
  z-index: 1;
}

.white:hover {
  background-color: lightgray;
}

.black {
  background-color: #000;
  width: v-bind(blackKeySize + 'px');
  height: v-bind(blackKeySizeHeight + 'px');
  margin-left: v-bind(blackKeyMargin + 'px');
  z-index: 2
}

.black:hover {
  background-color: rgb(60, 60, 60);
}
</style>
