<script>
export default{
  data(){
    return{
      facts:[
        {header:"First Look at the Piano Keyboard", text:"As you first look at the piano keyboard, it looks like there are lots and lots of notes to learn. Not so! You only need to learn 12 notes. The shaded area on the keyboard in the image shows the 12 notes you will need to learn. Notes on a piano are grouped in sets of 12 notes. ", picture: '../assets/pianoimg/piano1.png'},
        {},
        {},
        {},
        {},
        {},
        {},
      ]
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="fact in facts">
      <h3>{{ facts.header }}</h3>
      <p>{{ facts.text }}</p>
      <img :src=picture alt="">
    </li>
  </ul>
</template>
