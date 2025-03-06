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
      if(this.feedback!==null){
        this.conter = 0
        console.log("hej")
      } else{
        this.conter = this.conter +1
        if(this.conter>=1){
          this.display.push(this.chord + ", " +this.display[0]) 
          console.log(this.display)
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

