<script>
import Pjano from './Pjano.vue';
import Questions from './Questions.vue';
import Info from './Info.vue';

export default{
  components: {
    Pjano,
    Questions,
    Info

  },

   data(){
    return{
      clickedNote : [],
      answer: [],
      result: null,
      questions: [],
      currentQuestion: {}
    }
  },

  methods:{
    emittedTone(value){
      this.clickedNote.push(value)
    console.log("du tryckte på:", value)}
  },
//   rightWrongAnswer(){
//       this.answer.push(value)

// }
}
</script>

<template>
  hej
  <Pjano @playTone="emittedTone"/>
  <Questions @nextQuestion="currentQuestion"/>
  <Info/>
</template>
