<script>

import { RouterLink, RouterView } from 'vue-router';
import HomeView from './views/HomeView.vue';

  export default {
    components: {
     HomeView
    },
    data(){
    return{
      logga: '../assets/Pjanologga.png'
    }

  }
  };
</script>

<template>
  <div id="header">
    <img :src=logga alt="logo">
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li> <RouterLink to="/profile">Profile</RouterLink></li>
      </ul>
    </nav>

  </div>
<main>
  <RouterView/>
</main>

</template>

<style scoped>
#header{
background-color:#d9d9d9 ;
text-align: center;
}
img{
height: 150px;
}
nav{
  background-color:#9ac5cb
}
ul{
  list-style-type: none;
  display: flex;

}
a{
text-decoration: none
}
</style>
