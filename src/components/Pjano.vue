<script>
import Question from './Question.vue';
export default {
  components: {
    Question
  },
  data() {
    return {
      keys: [
        { pianoKey: 'C', sound: '../assets/sounds/C3.mp3' },
        { pianoKey: 'C#', sound: '../assets/sounds/Csharp3.mp3' },
        { pianoKey: 'D', sound: '../assets/sounds/D3.mp3' },
        { pianoKey: 'D#', sound: '../assets/sounds/Dsharp3.mp3' },
        { pianoKey: 'E', sound: '../assets/sounds/E3.mp3' },
        { pianoKey: 'F', sound: '../assets/sounds/F3.mp3' },
        { pianoKey: 'F#', sound: '../assets/sounds/Fsharp3.mp3' },
        { pianoKey: 'G', sound: '../assets/sounds/G3.mp3' },
        { pianoKey: 'G#', sound: '../assets/sounds/Gsharp3.mp3' },
        { pianoKey: 'A', sound: '../assets/sounds/A3.mp3' },
        { pianoKey: 'A#', sound: '../assets/sounds/Asharp3.mp3' },
        { pianoKey: 'B', sound: '../assets/sounds/B3.mp3' }],

      currentQuestion: []
    }
  },

  methods: {
    playTone(event, value) {
      event.preventDefault();
      let output = this.keys.find(keys => keys.pianoKey == value);
      let audio = new Audio(output.sound)
      audio.play()
      console.log(output.pianoKey)
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
