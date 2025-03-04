<script>
export default {
  data() {
    return {
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
  props: {
    chords: {
      type: String
    },
    feedback: {
      type: String
    },
    color: {
      type: String
    }
  }
}
</script>


<template>
  <div class="questionContainer" :style="{ backgroundColor: color }">
    <p>{{ feedback }}</p>
    <p>Next: Press {{ chords }}</p>

  </div>
</template>


<style scoped>
.questionContainer {
  background-color: #474554;
  color: white;
  width: 15rem;
  max-width: 100%;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 20px;
}

p {
  text-align: center;
  padding: 10px;
}

button {
  background-color: #4745541f;
  color: white;
}
</style>
