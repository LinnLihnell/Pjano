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
      currentQuestion: [],
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
    <div class="key white" style="margin-left: 0" @pointerdown="playTone($event, 'C')">
      <p v-show="checked" class="showNotes">C</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'C#')">
      <p v-show="checked" class="showNotes showBlack">C#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'D')">
      <p v-show="checked" class="showNotes">D</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'D#')">
      <p v-show="checked" class="showNotes showBlack">D#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'E')">
      <p v-show="checked" class="showNotes">E</p>
    </div>
    <div class="key white" style="margin-left: 0" @pointerdown="playTone($event, 'F')">
      <p v-show="checked" class="showNotes">F</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'F#')">
      <p v-show="checked" class="showNotes showBlack">F#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'G')">
      <p v-show="checked" class="showNotes">G</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'G#')">
      <p v-show="checked" class="showNotes showBlack">G#</p>
    </div>
    <div class="key white" @pointerdown="playTone($event, 'A')">
      <p v-show="checked" class="showNotes">A</p>
    </div>
    <div class="key black" @pointerdown="playTone($event, 'A#')">
      <p v-show="checked" class="showNotes showBlack">A#</p>
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
}

.showNotes {
  display: flex;
  font-size: 20px;
}

.showBlack {
  color: white;
}

.key {
  width: 4em;
  height: 14em;
  border: 1px solid #000;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: -1.5em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
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
