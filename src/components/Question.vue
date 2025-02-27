<script>
export default{
  data(){
    return{
      // questions:[
      // {question:"Press key C",Ckey:"0"},
      // {question:"Press key C#",Csharp:"1"},
      // {question:"Press key D",Dkey:"2"},
      // {question:"Press key D#",Dsharp:"3"},
      // {question:"Press key E",Ekey:"4"},
      // {question:"Press key F",Fkey:"5"},
      // {question:"Press key F#",Fsharp:"6"},
      // {question:"Press key G",Gkey:"7"},
      // {question:"Press key G#",Gsharp:"8"},
      // {question:"Press key A",Akey:"9"},
      // {question:"Press key A#",Asharp:"10"},
      // {question:"Press key B",Bkey:"11"},],  
    }
  },
}
</script>


<template>
<div class="questionContainer">
<p>{{}}</p>
<p>{{}}</p>
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
