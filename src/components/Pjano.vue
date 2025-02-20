<script>
export default{
  data(){
    return {
      keys: [
      {pianoKey: 'C', sound: '../assets/sounds/C3.mp3'},
      {pianoKey: 'C#', sound: '../assets/sounds/Csharp3.mp3'},
      {pianoKey: 'D', sound: '../assets/sounds/D3.mp3'},
      {pianoKey: 'D#', sound: '../assets/sounds/Dsharp3.mp3'},
      {pianoKey: 'E', sound: '../assets/sounds/E3.mp3'},
      {pianoKey: 'F', sound: '../assets/sounds/F3.mp3'},
      {pianoKey: 'F#', sound: '../assets/sounds/Fsharp3.mp3'},
      {pianoKey: 'G', sound: '../assets/sounds/G3.mp3'},
      {pianoKey: 'G#', sound: '../assets/sounds/Gsharp3.mp3'},
      {pianoKey: 'A', sound: '../assets/sounds/A3.mp3'},
      {pianoKey: 'A#', sound: '../assets/sounds/Asharp3.mp3'},
      {pianoKey: 'B', sound: '../assets/sounds/B3.mp3'}]
    }
  },

  methods: {
    playTone(value){
      let output = this.keys.filter(keys => keys.pianoKey == value);
      for (let i = 0; i < output.length; i++){
        let audio = new Audio(output[i].sound)
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

<style scoped>
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
