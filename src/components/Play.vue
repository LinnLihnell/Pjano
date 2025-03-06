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
      i: 0,
      x: 0,
      backgroundColor: '#474554',
      conter:0,
      show:"none",

    }
  },

  created() {
    console.log(this.$route.params.id)
    console.log(lessonsData)
    console.log(lessonsData.lessons[this.$route.params.id - 1].chords[this.i])
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
         this.backgroundColor='#474554'
        } else {
        console.log("fel")
        this.answer = 'Try again'
        this.backgroundColor='red'
        this.conter= this.conter + 1
        }
    },
    nextLesson(){
    if(this.x < lessonsData.lessons[this.$route.params.id - 1].chords.length){

    if(this.i < lessonsData.lessons[this.$route.params.id - 1].chords[this.x].length){
      this.i++
      this.note = lessonsData.lessons[this.$route.params.id - 1].chords[this.x][this.i]
      // this.x = this.chords[this.x]
    } else {
      this.answer = 'Klart'
      this.show = "inline"
    }

    }
  }
  },
}
</script>

<template>
  <Question :chords="note" :feedback="answer" :color="backgroundColor"/>
  <Pjano @playTone="emittedTone" />
  <Info />
  <div :style="{display: show}">{{conter}}</div>
</template>
