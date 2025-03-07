<script>
export default {

  methods: {
    reloadPage(){
      window.location.reload()
    }
    },
  props: {
    chords: {
      type: String
    },
    chordsname:{
      type: String,
      required:false,
      // default:""
      // validator: function(value){
      //   return value && value.length > 0
      // },


    },
    feedback: {
      type: String
    },
    color: {
      type: String
    },
    displayAgainBtn: {
      type: Boolean
    }
  }
}
</script>


<template>
  <div class="questionContainer" :style="{ backgroundColor: color }">
    <p>{{ feedback }}</p>
    <p v-if="chordsname !== null">Play chord: {{ chordsname }}</p>
    <p v-if="!displayAgainBtn" >Next: Press {{ chords }}</p>
    <p v-if="displayAgainBtn" >Try another lesson?</p>
    <div class="navButtons" >
    <BButton @click="$router.push({path: '/'})"
     variant="outline-secondary">Home<i class="bi bi-box-arrow-left"></i></BButton>
    <BButton v-if="displayAgainBtn" @click="reloadPage"  variant="outline-secondary">Try again <i class="bi bi-arrow-counterclockwise"></i></BButton>
    <BButton @click="$router.push({path: '/lessons'})" variant="outline-secondary">Lessons <i class="bi bi-forward"></i></BButton>
  </div>
  </div>
</template>


<style scoped>
.questionContainer {
  /* background-color: #474554; */
  background-color: #f5f5f5;
  color: black;
  max-width: 100%;
  width: 50%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
}

p {
  text-align: center;
  padding: 10px;
}

button {
  background-color: #00b5c0;
  color: white;
  display: flex;
  flex-direction: column;
  border: none;
  font-size: small;
  justify-content: space-evenly;
  margin: 5px;
}

.navButtons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
