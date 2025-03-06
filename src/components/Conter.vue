<script>
export default{

  data() {
    return {
      conter:0,
      display:[],
    }
  },
  methods:{
    learn_more(){
      if(this.feedback==="rätt"){
        this.conter = 0
      } else{
        this.conter = this.conter +1
        if(this.conter>=2){
          this.display[0] = this.chord + ", " +this.display[0]
        }
      }
    },
  },
  props: {
    chord: {
      type: String
    },
    feedback: {
      type: String
    },
  }
}
</script>

<template>
  <p>{{ display }}</p>
</template>

<style></style>

