<script>
import { RouterLink, RouterView } from 'vue-router';
import SoundProvider from "./providers/SoundProvider.vue";

export default {
  components: {
    SoundProvider
  },
  data() {
    return {
      logga: '../assets/PjanologoNew.png'
    }
  }
};
</script>

<template>
  <section>
    <nav class="navbar">
      <img :src=logga alt="logo" id="logo">
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
        <li>
          <RouterLink to="/lessons">Lessons</RouterLink>
        </li>
      </ul>
    </nav>
  </section>

  <main>
    <SoundProvider>
      <RouterView />
    </SoundProvider>
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
}

footer {
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-top: 10px;
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


#logo {
  height: 150px;
  border-radius: 50%;
  margin: 0 0 -75px 10px;
  z-index: 1;
}

nav {
  background-color: #474554;
}

nav ul {
  margin: 0 auto 0 10px;
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
    border-radius: 15%;
  }

  .navbar li {
    float: left;
    display: inline;
  }

  #piano {
    display: flex;
    justify-content: center;
  }


@media(max-width: 500px) {
  #logo {
    display: none;
  }

  footer {
    display: none;
  }

  body {
    transform: rotate(90deg);
  }
}
</style>
