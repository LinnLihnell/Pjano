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
      note: lessonsData.lessons[0].chords[0][0],
      answer: '',
      lessonID: this.$route.params.id,
      user: User.loadFromLocalStorage(),
      noteIndex: 0,
      backgroundColor: '#474554',
      conter:0,
      fel:"none",
    }
  },

  created() {
    console.log(lessonsData)
    console.log(lessonsData.lessons[0].chords[0])
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
    if(this.noteIndex < lessonsData.lessons[0].   chords.length - 1){
      this.noteIndex++
      this.note = lessonsData.lessons[0].chords[this.noteIndex][0]
    } else {
      this.answer = 'Klart'
      this.fel = "inline"
    }
  },
  },
}
</script>

<template>
  <Question :chords="note" :feedback="answer" :color="backgroundColor"/>
  <Pjano @playTone="emittedTone" />
  <Info />
  <div :style="{display: fel}">{{conter}}</div>
</template>
