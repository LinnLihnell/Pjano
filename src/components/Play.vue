<script>
import Pjano from './Pjano.vue';
import Question from './Question.vue';
import Info from './Info.vue';
import lessonsData from '../../assets/Lessones.json';
import User from '../models/User';

export default {
  components: {
    Pjano,
    Question,
    Info

  },

  data() {
    return {
      clickedNote: [],
      lessonID: this.$route.params.id,
      note: lessonsData.lessons[this.$route.params.id - 1].chords[0][0],
      answer: '',
      user: User.loadFromLocalStorage(),
      i: 1,
      x: 0,
      backgroundColor: '#474554',
      conter: 0,
      fel: "none",
      checked: false,

    }
  },

  created() {
    console.log(this.$route.params.id)
    console.log(lessonsData)
    console.log(lessonsData.lessons[this.$route.params.id - 1].chords[this.i - 1])
    if (this.user.progress[this.lessonID] !== undefined) {
      this.user.progress[this.lessonID] += 25;
    }
    else {
      this.user.progress[this.lessonID] = 0;
    }
    this.user.saveToLocalStorage();
  },

  methods: {
    emittedTone(value) {
      this.clickedNote.push(value)
      console.log("du tryckte på:", value)
      if (value === this.note) {
        console.log("rätt")
        this.answer = 'Well done!'
        this.nextLesson()
        this.backgroundColor = '#474554'
      } else {
        console.log("fel")
        this.answer = 'Try again'
        this.backgroundColor = 'red'
        this.conter = this.conter + 1
      }
    },
    nextLesson() {
      if (this.x < lessonsData.lessons[this.$route.params.id - 1].chords.length) {

        if (this.i < lessonsData.lessons[this.$route.params.id - 1].chords[this.x].length) {
          if (this.i === 0 && this.x === 0) {

          }
          this.note = lessonsData.lessons[this.$route.params.id - 1].chords[this.x][this.i]
          this.i++
          // this.x = this.chords[this.x]
        } else {
          this.i = 0
          this.x++
          if (this.x >= lessonsData.lessons[this.$route.params.id - 1].chords.length) {
            this.answer = 'Klart'
            this.fel = "inline"

          }
          else {
            this.note = lessonsData.lessons[this.$route.params.id - 1].chords[this.x][this.i]
            this.i++
          }
        }

      }
    }
  },
}
</script>

<template>
  <div class="play-container">
    <Pjano @playTone="emittedTone" />
    <Question :chords="note" :feedback="answer" :color="backgroundColor" />
    <b-form-checkbox v-model="checked" name="check-button" switch>
      Show notes <b>{{ checked }}</b>
    </b-form-checkbox>
    <div :style="{ display: fel }">{{ conter }}</div>
    <Info />
  </div>
</template>

<style scoped>
.play-container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
</style>
