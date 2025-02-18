<script>
import Pjano from '../components/Pjano.vue';

export default{
  components: {
    Pjano
  },
  data(){
    return{
      logga: '../assets/Pjanologga.png'
    }

  }
}

</script>

<template>
  <img :src=logga alt="">
<h1>Home</h1>
<Pjano/>
</template>
