<script>
import Play from '../components/Play.vue';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  components: {
    Play
  },
  setup() {
    const isPortrait = ref(window.innerHeight > window.innerWidth);
    const showOverlay = ref(isPortrait.value);

    const handleOrientationChange = () => {
      isPortrait.value = window.innerHeight > window.innerWidth;
      showOverlay.value = isPortrait.value;
    };

    const exitOverlay = () => {
      showOverlay.value = false;
    };

    onMounted(() => {
      window.addEventListener('resize', handleOrientationChange);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleOrientationChange);
    });

    return {
      showOverlay,
      exitOverlay
    };
  }
}
</script>

<template>
  <div v-if="showOverlay" id="overlay">
    <div id="overlay-content">
      <p>Please turn the screen to landscape mode.</p>
      <button @click="exitOverlay">Exit</button>
    </div>
  </div>
  <Play />
</template>

<style scoped>
#overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}

#overlay-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

#overlay-content p {
  margin: 0 0 20px 0;
}

#overlay-content button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#exit-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
