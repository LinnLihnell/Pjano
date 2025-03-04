<script>
export default {
  data() {
    return {
      facts: [
        { header: "First Look at the Piano Keyboard", text: "As you first look at the piano keyboard, it looks like there are lots and lots of notes to learn. Not so! You only need to learn 12 notes. The shaded area on the keyboard in the image shows the 12 notes you will need to learn. Notes on a piano are grouped in sets of 12 notes. ", picture: '../assets/pianoimg/piano1.png' },

        { header: "C notes", text: "Here are more “C” notes. See how they are all located next to two black notes? Good job. . . you have learned where “C” is on the piano. This is a big step because you will always need to locate “C” before you begin to play a song on the piano.", picture: '../assets/pianoimg/piano2.png' },

        { header: "Learning About Octaves", text: "This spacing of 12 half steps (includes white and black notes) on the keyboard is called an Octave.", picture: '../assets/pianoimg/piano3.png' },

        { header: "Learning About Black Keys", text: "The notes on a piano are divided into Half Steps. Any time you are moving from one key to the next (which includes the black keys), you are moving 1 half step.", picture: '../assets/pianoimg/piano4.png' },

        { header: "Learning About Sharps", text: "The word Sharp is like shorthand in typing. It's a short hand way of saying that you are to move 1 half step up the keyboard. The symbol is #.", picture: '../assets/pianoimg/piano5.png' },

        { header: "Learning About Flats", text: "The word Flat is also like short hand in typing. It's a short hand way of saying that you are to move 1 half step down the keyboard. The symbol is b.", picture: '../assets/pianoimg/piano6.png' }
      ]
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="fact in facts" class="card">
      <h3>{{ fact.header }}</h3>
      <p>{{ fact.text }}</p>
      <img :src="fact.picture" alt="">
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  justify-content: center;
  padding: 0%;
}

li {
  flex: 1 1 20%;
  max-width: 20%;
  min-width: 200px;
  list-style-type: none;
  border: 1px solid white;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
}

img {
  border-radius: 0%;
  max-width: 100%;
  height: auto;
}

@media(max-width: 600px) {
  ul {
    width: 100%;
  }

  li {
    flex: 1 1 100%;
    max-width: 100%;
    margin: 10px;

  }
}
</style>
