<script>
import { RouterLink, RouterView } from 'vue-router';
import SoundProvider from "./providers/SoundProvider.vue";

export default {
  components: {
    SoundProvider
  },
  data() {
    return {
      logga: '/assets/PjanologoNew.png'
    }
  }
};
</script>

<template>
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
main {
  flex: 1;
  width: 100vw;
}

footer {
  text-align: center;
  margin-top: 10px;
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


@media(max-width: 1000px) {
  #logo {
    height: 70px;
    margin: 0 0 -20px 5px;
  }
}
</style>
