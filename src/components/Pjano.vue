<script>
export default{
  data(){
    return {
      keys: [
      {pianoKey: 'C'},
      {pianoKey: 'C#'},
      {pianoKey: 'D'},
      {pianoKey: 'D#'},
      {pianoKey: 'E'},
      {pianoKey: 'F'},
      {pianoKey: 'F#'},
      {pianoKey: 'G'},
      {pianoKey: 'G#'},
      {pianoKey: 'A'},
      {pianoKey: 'A#'},
      {pianoKey: 'B'}]
    }
  },

  methods: {
    playTone(value){
      let output = this.keys.filter(keys => keys.pianoKey == value);
      for (let i = 0; i < output.length; i++){
        let audio = new Audio('../assets/sounds/test.mp3')
        audio.play()
        console.log(output[i].pianoKey)
      }
    },
  }
}
</script>

<template>
  <div id="piano">
    <div class="key white" @click="playTone('C')"></div>
    <div class="key black" @click="playTone('C#')"></div>
    <div class="key white" @click="playTone('D')"></div>
    <div class="key black" @click="playTone('D#')"></div>
    <div class="key white" @click="playTone('E')"></div>
    <div class="key white" @click="playTone('F')"></div>
    <div class="key black" @click="playTone('F#')"></div>
    <div class="key white" @click="playTone('G')"></div>
    <div class="key black" @click="playTone('G#')"></div>
    <div class="key white" @click="playTone('A')"></div>
    <div class="key black" @click="playTone('A#')"></div>
    <div class="key white" @click="playTone('B')"></div>
  </div>
</template>

<style>
body{
  /* display: flex; */
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
}
#piano{
  display: flex;
  position: relative;
}

.key{
  width: 40px;
  height: 200px;
  border: 1px solid #000;
  box-sizing: border-box;
  cursor:pointer;
}
.white{
  background-color: #fff;
  z-index: 1;
  margin: 0px;
}
.black{
  background-color: #000;
  width: 30px;
  height: 120px;
  position: relative;
  margin-left: -15px;
  z-index: 2
}

</style>
