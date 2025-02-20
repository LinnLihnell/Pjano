<script>
import Pjano from '../components/Pjano.vue';
import Questions from '../components/Questions.vue';
import Info from '../components/Info.vue';

export default{
  components: {
    Pjano,
    Questions, 
    Info

  },

}

</script>

<template>
<Info/>
<h1>Home</h1>
<Questions />
<Pjano />
</template>
