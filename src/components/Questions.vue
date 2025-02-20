<script>
export default{
  data(){
    return{questions:[
      {question:"Press key C",answer:"C"},
      {question:"Press key C#",answer:"C#"},
      {question:"Press key D",answer:"D"},
      {question:"Press key D#",answer:"D#"},
      {question:"Press key E",answer:"E"},
      {question:"Press key F",answer:"F"},
      {question:"Press key F#",answer:"F#"},
      {question:"Press key G",answer:"G"},
      {question:"Press key G#",answer:"G#"},
      {question:"Press key A",answer:"A"},
      {question:"Press key A#",answer:"A#"},
      {question:"Press key B",answer:"B"},],
      showQuestion: 'Question',
      i: 0
}
  },
  created(){
    // this.oneQuestion = this.questions[4].question
  },
  methods:{
    nextQuestion(){
        if(this.i < this.questions.length){
          this.showQuestion = this.questions[this.i].question
        this.i++
        }
        else {
          this.showQuestion = 'Done'
        }

    }
  }
}


</script>


<template>
  <div class="questionContainer">
<p>{{ showQuestion }}</p>
<button @click="nextQuestion()">Next Question</button>
</div>
</template>


<style scoped>

.questionContainer{
  background-color: #474554;
  color: white;
  width: 15rem;
}
p {
  text-align: center;
  padding: 10px;
}
button{
background-color: #4745541f;
color: white;
}
</style>
