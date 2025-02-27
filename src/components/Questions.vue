<script>
export default{
  data(){
    return{questions:[
      {question:"Press key C",C:"0"},
      {question:"Press key C#",Csharp:"1"},
      {question:"Press key D",D:"2"},
      {question:"Press key D#",Dsharp:"3"},
      {question:"Press key E",E:"4"},
      {question:"Press key F",F:"5"},
      {question:"Press key F#",Fsharp:"6"},
      {question:"Press key G",G:"7"},
      {question:"Press key G#",Gsharp:"8"},
      {question:"Press key A",A:"9"},
      {question:"Press key A#",Asharp:"10"},
      {question:"Press key B",B:"11"},],  
    }
  },
}
</script>


<template>
  <div class="questionContainer">
<p>{{this.questions[this.Csharp.value].question  }}</p>
<p>Du tryckte på: {{  }}</p>
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
