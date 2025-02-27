<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      logga: '../assets/Pjanologga.png'
    }
  }
};
</script>

<template>
  <section>
    <img :src=logga alt="logo" id="logo">
    <nav class="navbar">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/profile">Profile</RouterLink>
        </li>
        <li>
          <RouterLink to="/facts">Facts</RouterLink>
        </li>
      </ul>
    </nav>
  </section>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>Grupp 14&copy 2025</p>
  </footer>

</template>

<style>
body {
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
  background-image: linear-gradient(to right top, #ecc9dd, #d5b4d0, #bba0c5, #9e8eba, #7e7daf, #6686ba, #448ebf, #0096be, #00b5c0, #4ed1af, #a2e697, #f6f58b);
  background-repeat: no-repeat;
  background-size: cover;
  ;
}

section {
  /* background-color:#d9d9d9 ; */
  text-align: center;
  margin: 0;
  padding: 0;
  /* height: 100vh; */
  /* width: 980px */
  /* max-width: 100% */
}

main {
  width: 100vw;
  /*height: 100vh*/
}


#logo{
  height: 150px;
  border-radius: 50%;
} 

nav {
  background-color: #474554;
}
@media(min-width: 501px){
.navbar ul {
  margin: 0px;
  list-style-type: none;
  padding: 0px;
  overflow: hidden;
  background-color: #474554;
}

.navbar a {
  text-decoration: none;
  text-align: center;
  color: white;
  margin: 5px;
  padding: 8px;
  display: block;
}

.navbar li:hover {
  background-color: black;

}

.navbar li {
  float: left;
  display: inline;
}

footer {
  /* background-color: #474554;
  color: white; */
  text-align: center;
  /* padding: 2px;
  margin-top:10px; */
}

#piano {
  display: flex;
  justify-content: center;
} 
}

@media(max-width: 500px) {
#logo {
  display: none;
} 
footer {
  display: none;
}
body{
  transform: rotate(90deg);
}
.navbar ul {
  margin: 0px;
  list-style-type: none;
  padding: 0px;
  overflow: hidden;
}
}
</style>
