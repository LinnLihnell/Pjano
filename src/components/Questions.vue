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
      i: 0,

      currentQuestion: []

}
  },
  created(){
    this.oneQuestion = this.questions[0].question
  },
  methods:{
    nextQuestion(){
        if(this.i < this.questions.length){
          this.showQuestion = this.questions[this.i].question
          this.currentQuestion.push(this.questions[this.i])
          this.i++
          this.$emit('currentQuestion')
          console.log(this.currentQuestion)
        }
        else {
          this.showQuestion = 'Done'
        }

    },
    currentQuestion(){
    this.$emit('currentQuestion')

      }
    }


  }


</script>

props: ['currentQuestion'],
<template>
  <div class="questionContainer">
  <p>{{ showQuestion }}</p>
<p>Du tryckte på: {{ answer ? 'Rätt' : 'Fel' }}</p>
<button @click="nextQuestion()">Next Question</button>
</div>
</template>


<style scoped>

.questionContainer{
  background-color: #474554;
  color: white;
  width: 15rem;
  margin: auto;
  margin-bottom: 10px;
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
