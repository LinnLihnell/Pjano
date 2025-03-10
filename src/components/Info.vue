<script>
import { BButton } from 'bootstrap-vue-next';
import lessonsData from '../../assets/Lessones.json';

export default {
  data() {
    return {
      showInfo: "true",
      disabledPrevious: false,
      disabledNext: false,
      currentIndex: 0,
      facts: lessonsData.lessons[this.$route.params.id - 1]
    }
  },

  methods: {
    displayNone() {
      this.showInfo = false
    },
    nextFact() {
      if (this.currentIndex < this.facts.information.length - 1) {
        this.currentIndex++
      }
      else {
        this.currentIndex = 0
      }
    },
    previousFact() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
      else {
        this.currentIndex = this.facts.information.length - 1
      }
    }
  }
}
</script>

<template>
  <div v-if="showInfo" id="infoContainer">
    <div class="infoBox">
      <BButton class="btn-close" @click="displayNone"></BButton>
      <h3>{{ facts.lesson_name }}</h3>
      <p>{{ facts.information[this.currentIndex] }}</p>
      <img :src="`/assets/${facts.infoImage[this.currentIndex]}`" alt="image" />

      <div id="navForBackward">
        <BButton @click="previousFact" variant="outline-secondary"><i class="bi bi-arrow-left"></i></BButton>
        <BButton class="rightBtn" variant="outline-secondary" @click="nextFact"><i class="bi bi-arrow-right"></i>
        </BButton>

      </div>
    </div>
  </div>
</template>

<style scoped>
#infoContainer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  max-width: 100%;
  max-height: 100%;
}

.infoBox {
  width: 30rem;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 4px 4px 4px;
  max-width: fit-content;
}

#navForBackward {
  display: flex;
}

.rightBtn {
  margin-left: auto;
}

.btn-close {
  display: block;
  margin-left: auto;
  margin-right: 5px;
  margin-top: 2px;
  margin-bottom: 0;
}

img {
  width: 70%;
  max-height: 300px;
  object-fit: contain;
}
</style>
