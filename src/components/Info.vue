<script>
import { BButton } from 'bootstrap-vue-next';

export default{
  data (){
    return {
      showInfo: "true",
      currentIndex: 0,
      facts:[
        {header:"First Look at the Piano Keyboard", text:"As you first look at the piano keyboard, it looks like there are lots and lots of notes to learn. Not so! You only need to learn 12 notes. The shaded area on the keyboard in the image shows the 12 notes you will need to learn. Notes on a piano are grouped in sets of 12 notes. ", picture: '../assets/pianoimg/piano1.png'},

        {header:"C notes", text:"Here are more “C” notes. See how they are all located next to two black notes? Good job. . . you have learned where “C” is on the piano. This is a big step because you will always need to locate “C” before you begin to play a song on the piano.", picture: '../assets/pianoimg/piano2.png'},

        {header:"Learning About Octaves", text:"This spacing of 12 half steps (includes white and black notes) on the keyboard is called an Octave.", picture: '../assets/pianoimg/piano3.png'},

        {header:"Learning About Black Keys", text:"The notes on a piano are divided into Half Steps. Any time you are moving from one key to the next (which includes the black keys), you are moving 1 half step.", picture: '../assets/pianoimg/piano4.png'},

        {header:"Learning About Sharps", text:"The word Sharp is like shorthand in typing. It's a short hand way of saying that you are to move 1 half step up the keyboard. The symbol is #.", picture: '../assets/pianoimg/piano5.png'},

        {header:"Learning About Flats", text:"The word Flat is also like short hand in typing. It's a short hand way of saying that you are to move 1 half step down the keyboard. The symbol is b.", picture: '../assets/pianoimg/piano6.png'}
      ]
    }
  },

  methods: {
    displayNone(){
      this.showInfo = null
    },
    nextFact(){
      if (this.currentIndex < this.facts.length -1){
        this.currentIndex++
      }
      else {
        this.currentIndex = 0
      }
    },
    previousFact(){
      if (this.currentIndex > 0 ){
        this.currentIndex--
      }
      else {
        this.currentIndex = this.facts.length -1
      }
    }
  }
}
</script>

<template>
  <div v-if="showInfo" id="infoContainer">
    <div class="infoBox">
      <BButton class="btn-close" @click="displayNone"></BButton>
      <h3>{{ facts[currentIndex].header}}</h3>
      <p>{{ facts[currentIndex].text}}</p>
      <img :src="facts[currentIndex].picture" alt="Picture">
      <div id="navForBackward">
        <BButton @click="previousFact" variant="secondary"><i class="bi bi-arrow-left"></i></BButton>
        <BButton class="rightBtn" variant="secondary" @click="nextFact" ><i class="bi bi-arrow-right"></i></BButton>

      </div>
    </div>
  </div>
</template>

<style scoped>
#infoContainer {
  display: flex;
}
.infoBox{
  width: 30rem;
  background-color: white;
  border-radius: 10px;
  text-align: center;

}
#navForBackward{
  display: flex;
}
.rightBtn{
  margin-left: auto;
 /* margin-right: 0px; */
}
.btn-close {
display: block;
margin-left: auto;
margin-right: 5px;
margin-top: 2px;
margin-bottom: 0;
}
img {
  width: 70%;
  object-fit: cover;


}
</style>
