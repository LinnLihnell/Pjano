<script>
export default {
  methods: {
    reloadPage() {
      window.location.reload()
    }
  },
  props: {
    chords: {
      type: String
    },
    chordsname: {
      type: String,
      required: false,

    },
    feedback: {
      type: String
    },
    result:{
      type: Array
    },
    color: {
      type: String
    },
    displayAgainBtn: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="questionContainer" :style="{ backgroundColor: color }">
    <div class="textContainer">
      <p>{{ feedback }}</p>
      <p v-if="chordsname !== null">Play chord: {{ chordsname }}</p>
      <p v-if="!displayAgainBtn">Next: Press {{ chords }}</p>
      <p v-if="displayAgainBtn">Try another lesson?</p>
      <p v-if="displayAgainBtn"> {{ result[0] }}</p>
    </div>
    <div class="navButtons">
      <BButton @click="$router.push({ path: '/' })" variant="outline-secondary">Home<i class="bi bi-box-arrow-left"></i>
      </BButton>
      <BButton v-if="displayAgainBtn" @click="reloadPage" variant="outline-secondary">Try again <i
          class="bi bi-arrow-counterclockwise"></i></BButton>
      <BButton @click="$router.push({ path: '/lessons' })" variant="outline-secondary">Lessons <i
          class="bi bi-forward"></i></BButton>
    </div>
  </div>
</template>

<style scoped>
.questionContainer {
  background-color: #f5f5f5;
  color: black;
  max-width: 100%;
  width: 50%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.textContainer {
  width: 100%;
}

p {
  text-align: center;
  padding: 0 10px;
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

.navButtons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 1000px) {
  .questionContainer {
    margin: 10px 0 10px 10px;
  }

  .textContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

@media (max-width: 1000px) and (max-height: 600px) {
  .questionContainer {
    margin: 5px 0 5px 10px;
  }
}

@media (max-width: 400px) {
  .questionContainer {
    margin: 2px 0 0 10px;
  }
}
</style>
