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
      clickedNote : {}
    }
  },
  methods:{
    emittedTone(value){
      this.clickedNote.push(value)
    console.log("du tryckte på:")}
  },
  rightWrongAnswer(clickedNote){
      if(this.question === this.answer){
      console.log(clickedNote)
    }
}
}

</script>

<template>
  hej
  <Pjano @playTone="emittedTone"/>
  <Questions/>
  <Info/>
</template>
