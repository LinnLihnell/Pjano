<script>
export default{
  data(){
    return{questions:[
      {question:"press key C",answer:"C"},
      {question:"press key C#",answer:"C#"},
      {question:"press key D",answer:"D"},
      {question:"press key D#",answer:"D#"},
      {question:"press key E",answer:"E"},
      {question:"press key F",answer:"F"},
      {question:"press key F#",answer:"F#"},
      {question:"press key G",answer:"G"},
      {question:"press key G#",answer:"G#"},
      {question:"press key A",answer:"A"},
      {question:"press key A#",answer:"A#"},
      {question:"press key B",answer:"B"},]}
  }
}

</script>


<template>
<p v-for="x in questions.question"></p>
</template>


<style></style>