<script>
export default{
  data (){
    return {
      showInfo: "true"
    }
  },

  methods: {
    displayNone(){
      this.showInfo = null
    }
  }
}
</script>

<template>
  <div v-if="showInfo" id="infoContainer">
    <div class="infoBox">
      <button @click="displayNone"  >X</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt sapiente alias molestias, ducimus rerum veritatis sit dolore dolores impedit temporibus modi quasi natus amet. Ipsum ab illo distinctio architecto.</p>
      <img src="" alt="Picture">
      <div id="navForBackward">
        <button id="back"><</button>
        <button id="forward">></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#infoContainer {
  display: flex;
}
.infoBox{
  width: 30rem;
  background-color: white;
  border-radius: 10px;

}
button {
background-color: grey;
display: block;
margin-left: auto;
margin-right: 5px;
margin-top: 2px;
margin-bottom: 0;
}
#navForBackward{
  display: flex;

}
</style>
