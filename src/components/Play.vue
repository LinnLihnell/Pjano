<script>
import Pjano from './Pjano.vue';
import Question from './Question.vue';
import Info from './Info.vue';
import lessonsData from '../../assets/Lessones.json';

export default{
  components: {
    Pjano,
    Question,
    Info

  },

   data(){
    return{
      clickedNote : [],
      lesson: lessonsData.lessons[0].chords[0][0],
      answer: ''
    }
  },

  created(){
    console.log(lessonsData)
    console.log(lessonsData.lessons[0].chords[0])
  },


  methods:{
    emittedTone(value){
      this.clickedNote.push(value)
    console.log("du tryckte på:", value)
    if (value === this.lesson){
      console.log("rätt")
      this.answer = 'Bra jobbat'
     } else {
      console.log("fel")
      this.answer = 'försök igen'
     }
  }
  },

}
</script>

<template>
  <Pjano @playTone="emittedTone"/>
   <Question :chords="lesson" :feedback="answer"/>
   <Info/>
</template>
