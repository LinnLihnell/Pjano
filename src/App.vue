<script>
import { RouterView } from 'vue-router';
import SoundProvider from "./providers/SoundProvider.vue";
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  components: {
    SoundProvider
  },
  data() {
    return {
    }
  }
};
</script>

<template>
  <NavbarComponent />
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
</style>
