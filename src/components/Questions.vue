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
  },
  methods:{
    shuffleQuestion(array){
      for(let i = array -1; i > 0; i--){
      let random = Math.floor(Math.random()* i)
      let temp = array[i]
      vue.set(array, i, array[random])
      vue.set(array, random, temp);
      }
    }
  }
}

</script>


<template>
<p>{{ questions }}</p>
</template>


<style></style>
