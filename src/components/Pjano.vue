<script>
export default{
  data(){
    return {key: {C: 'C',
      Csharp: 'C#',
      D: 'D'
     }
    }
  },

  methods: {
    playTone(value){
      if (value === this.key.C) {
        console.log(this.key.C)
      }
    }
  }
}
</script>

<template>
  <div id="piano">
    <div class="key white" @click="playTone('C')"></div>
    <div class="key black" @click="playTone('Csharp')"></div>
    <div class="key white" @click="playTone('D')"></div>
    <div class="key black" @click="playTone('Dsharp')"></div>
    <div class="key white" @click="playTone('E')"></div>
    <div class="key white" @click="playTone('F')"></div>
    <div class="key black" @click="playTone('Fsharp')"></div>
    <div class="key white" @click="playTone('G')"></div>
    <div class="key black" @click="playTone('Gsharp')"></div>
    <div class="key white" @click="playTone('A')"></div>
    <div class="key black" @click="playTone('Asharp')"></div>
    <div class="key white" @click="playTone('B')"></div>
  </div>
</template>

<style>
body{
  display: flex;
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
  cursor: pointer;
}
.white{
  background-color: #fff;
  z-index: 1
}
.black{
  background-color: #000;
  width: 30px;
  height: 120px;
  position:relative;
  margin-left: -15px;
  z-index: 2
}

</style>
