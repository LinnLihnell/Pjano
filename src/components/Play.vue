<script>
import Pjano from './Pjano.vue';
import Question from './Question.vue';
import Info from './Info.vue';
import lessonsData from '../../assets/Lessones.json';
import User from '../models/User';
import Conter from './Conter.vue';

export default {
  components: {
    Pjano,
    Question,
    Info,
    Conter

  },

  data() {
    return {
      clickedNote: [],
      lessonID: this.$route.params.id,
      note: lessonsData.lessons[this.$route.params.id - 1].chords[0][0],
      chordName: lessonsData.lessons[this.$route.params.id - 1].chordname
      ? lessonsData.lessons[this.$route.params.id -1].chordname[0]
      : null,
      answer: '',
      user: User.loadFromLocalStorage(),
      i: 1,
      x: 0,
      backgroundColor: '#f5f5f5',
      checked: false,
      tryAgainBtn: null
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
        this.backgroundColor = '#f5f5f5'
      } else {
        console.log("fel")
        this.answer = 'Try again'
        this.backgroundColor = 'red'
      }
    },
    // nextLesson(){
    //   const lesson= lessonsData.lessons[this.$route.params.id -1]

    //   if (lesson.chordname && lesson.chordname[this.x]){
    //     this.chordName = lesson.chordname[this.x]
    //   } else{
    //     this.chordName = null
    //   }
    //   if(this.x<lesson.chords.length){
    //     if(this.i<lesson.chords[this.x].length){
    //       this.note = lesson.chords[this.x][this.i]
    //       this.i++
    //     } else {
    //       this.i =0
    //       this.x++
    //       if(lesson.chordname && lesson.chordname[this.x]){
    //         this.chordName = lesson.chordname[this.x]
    //       } else {
    //         this.chordName =null
    //       }
    //       // this.chordName = lesson.chordname[this.x]
    //       // lessonsData.lessons[this.$route.params.id - 1].chordname[this.x]
    //       if(this.x >= lesson.chords.length){
    //         this.note = lesson.chords[this.x][this.i]
    //         this.i++
    //       } else {
    //         this.answer = 'Lesson finished'
    //         this.tryAgainBtn = true
    //         // this.chordName=null
    //       }
    //     }
    //   }
    // }
    nextLesson() {{
      if (this.x < lessonsData.lessons[this.$route.params.id - 1].chords.length) {
        if( this.chordName !== null){this.chordName = lessonsData.lessons[this.$route.params.id - 1].chordname[this.x]}


        if (this.i < lessonsData.lessons[this.$route.params.id - 1].chords[this.x].length) {
          this.note = lessonsData.lessons[this.$route.params.id - 1].chords[this.x][this.i]
          this.i++

        } else {
          this.i = 0
          this.x++
          if( this.chordName !== null){this.chordName = lessonsData.lessons[this.$route.params.id - 1].chordname[this.x]}

          if (this.x >= lessonsData.lessons[this.$route.params.id - 1].chords.length) {
            this.answer = 'Lesson finished'
            this.tryAgainBtn = true
            this.chordName=null


          }
          else {
            this.note = lessonsData.lessons[this.$route.params.id - 1].chords[this.x][this.i]
            this.i++
          }
        }

      }
    }}
  },
}
</script>

<template>
  <div class="play-container">
    <Conter :chord="note" :feedback="answer"/>
    <Question :chords="note" :chordsname="chordName":feedback="answer" :color="backgroundColor"
    :displayAgainBtn="tryAgainBtn" />
    <b-form-checkbox v-model="checked" name="check-button" switch>
      Show notes
    </b-form-checkbox>

    <Pjano :checked="checked" @playTone="emittedTone" />


    <Info />
  </div>
</template>

<style scoped>
.play-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.check-button {
  display: flex;
  justify-content: center;
}

.showNotes {
  display: flex;
  font-size: 20px;
}

.showBlack {
  display: flex;
  font-size: 20px;
  color: white
}

.form-check {
  margin: auto;
  margin-bottom: 10px;
}




</style>
