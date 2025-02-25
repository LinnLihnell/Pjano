<script>
import Pjano from './Pjano.vue';
import Questions from './Questions.vue';
// import Info from './Info.vue';

export default{
  components: {
    Pjano,
    Questions

  },

  emits:{
    click: null,

    submit:({ pianoKey, answer }) => {
      if (pianoKey && answer){
        return true
      } else{
        console.log("fel")
        return false
      }
    }


  },
  methods:{
    submitAnswer(pianoKey,answer){
      this.$emit('submit', {pianoKey, answer})
    }
  }

}

</script>

<template>
  hej
  <Pjano/>
  <Questions/>
</template>
