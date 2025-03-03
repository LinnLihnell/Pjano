<script>
import Question from './Question.vue';
import { inject } from "vue";

export default {
  components: {
    Question
  },
  data() {
    return {
      playSound: inject("playSound"),
      currentQuestion: []
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
      console.log('fråga mottagen')
    }

  }
}
</script>

<template>
  <div id="piano">
    <div class="key white" style="margin-left: 0" @pointerdown="playTone($event, 'C')"></div>
    <div class="key black" @pointerdown="playTone($event, 'C#')"></div>
    <div class="key white" @pointerdown="playTone($event, 'D')"></div>
    <div class="key black" @pointerdown="playTone($event, 'D#')"></div>
    <div class="key white" @pointerdown="playTone($event, 'E')"></div>
    <div class="key white" style="margin-left: 0" @pointerdown="playTone($event, 'F')"></div>
    <div class="key black" @pointerdown="playTone($event, 'F#')"></div>
    <div class="key white" @pointerdown="playTone($event, 'G')"></div>
    <div class="key black" @pointerdown="playTone($event, 'G#')"></div>
    <div class="key white" @pointerdown="playTone($event, 'A')"></div>
    <div class="key black" @pointerdown="playTone($event, 'A#')"></div>
    <div class="key white" @pointerdown="playTone($event, 'B')"></div>
  </div>
</template>

<style scoped>
#piano {
  display: flex;
  position: relative;
}

.key {
  width: 4em;
  height: 14em;
  border: 1px solid #000;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: -1.5em;
}

.white {
  background-color: #fff;
  z-index: 1;
}

.white:hover {
  background-color: lightgray;
}

.black {
  background-color: #000;
  width: 3em;
  height: 8em;
  z-index: 2
}

.black:hover {
  background-color: rgb(60, 60, 60);
}
</style>
