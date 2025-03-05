<script>
import { BButton } from 'bootstrap-vue-next';
import lessonsData from '../../assets/Lessones.json';

export default {
  data() {
    return {
      showInfo: "true",
      disabledPrevious: false,
      disabledNext: false,
      currentIndex: 0,
      // facts:[
      //   {header:"First Look at the Piano Keyboard", text:"As you first look at the piano keyboard, it looks like there are lots and lots of notes to learn. Not so! You only need to learn 12 notes. The shaded area on the keyboard in the image shows the 12 notes you will need to learn. Notes on a piano are grouped in sets of 12 notes. ", picture: '../assets/pianoimg/piano1.png'},

      //   {header:"C notes", text:"Here are more “C” notes. See how they are all located next to two black notes? Good job. . . you have learned where “C” is on the piano. This is a big step because you will always need to locate “C” before you begin to play a song on the piano.", picture: '../assets/pianoimg/piano2.png'},

      //   {header:"Learning About Octaves", text:"This spacing of 12 half steps (includes white and black notes) on the keyboard is called an Octave.", picture: '../assets/pianoimg/piano3.png'},

      //   {header:"Learning About Black Keys", text:"The notes on a piano are divided into Half Steps. Any time you are moving from one key to the next (which includes the black keys), you are moving 1 half step.", picture: '../assets/pianoimg/piano4.png'},

      //   {header:"Learning About Sharps", text:"The word Sharp is like shorthand in typing. It's a short hand way of saying that you are to move 1 half step up the keyboard. The symbol is #.", picture: '../assets/pianoimg/piano5.png'},

      //   {header:"Learning About Flats", text:"The word Flat is also like short hand in typing. It's a short hand way of saying that you are to move 1 half step down the keyboard. The symbol is b.", picture: '../assets/pianoimg/piano6.png'}
      // ]
      facts: lessonsData.lessons[this.$route.params.id - 1]
    }
  },
  created() {
    // console.log(lessonsData)
    console.log(lessonsData.lessons[this.$route.params.id - 1].information[this.currentIndex])
  },

  methods: {
    displayNone() {
      this.showInfo = false
    },
    nextFact() {
      console.log(this.currentIndex)
      if (this.currentIndex < this.facts.information.length - 1) {
        this.currentIndex++
      }
      else {
        this.currentIndex = 0
      }
    },
    previousFact() {
      console.log(this.currentIndex)
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
      else {
        this.currentIndex = this.facts.information.length - 1
      }
    }
  }
}
</script>

<template>
  <div v-if="showInfo" id="infoContainer">
    <div class="infoBox">
      <BButton class="btn-close" @click="displayNone"></BButton>
      <!-- <h3>{{ facts[currentIndex].header}}</h3>
      <p>{{ facts[currentIndex].text}}</p>
      <img :src="facts[currentIndex].picture" alt="Picture"> -->
      <h3>{{ facts.lesson_name }}</h3>
      <p>{{ facts.information[this.currentIndex] }}</p>
      <img :src="`/assets/${facts.infoImage[this.currentIndex]}`" alt="image">
      <div id="navForBackward">
        <BButton @click="previousFact" variant="outline-secondary"><i class="bi bi-arrow-left"></i></BButton>
        <BButton class="rightBtn" variant="outline-secondary" @click="nextFact"><i class="bi bi-arrow-right"></i>
        </BButton>

      </div>
    </div>
  </div>
</template>

<style scoped>
#infoContainer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
}

.infoBox {
  width: 30rem;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 4px 4px 4px;
}

#navForBackward {
  display: flex;
}

.rightBtn {
  margin-left: auto;
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
  max-height: 300px;
  object-fit: contain;
}
</style>
