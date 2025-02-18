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
  <section>
    <img :src=logga alt="logo">
    <nav class="navbar">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li> <RouterLink to="/profile">Profile</RouterLink></li>
      </ul>
    </nav>
  </section>

<main>
  <RouterView/>
</main>

<footer>
  <p>Grupp 14&copy 2025</p>
</footer>

</template>

<style scoped>
section{
background-color:#d9d9d9 ;
text-align: center;
margin: 0;
padding: 0;
/* height: 100vh; */
/* width: 980px */
/* max-width: 100% */
}
main{
  width: 100vw;
  /* height: 100vh; */
}
img{
height: 150px;
}
nav{
  background-color:#474554;
  padding: 10px;
}
.navbar ul{
  margin: 0;
  list-style-type: none;
  display: flex;
  padding: 0;
  overflow: hidden;
}
.navbar a{
text-decoration: none;
color:white;
margin: 5px;
display: block;
}

.navbar a:hover {
  background-color: blue;
}

footer{
  background-color: #474554;
  color: white;
  text-align: center;
  padding: 2px;
  margin-top:10px;
}
</style>
