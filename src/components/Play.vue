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
      lesson: lessonsData.lessons[0]
      // answer: [],
      // result: null,
      // questions: [],
      // currentQuestion: {}
    }
  },

  created(){
    console.log(lessonsData)
    console.log(lessonsData.lessons[3].chords[0])
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
  <!-- <Questions @nextQuestion="currentQuestion"/> -->
</template>
