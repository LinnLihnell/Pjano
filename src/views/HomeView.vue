<script>
// import Pjano from '../components/Pjano.vue';
// import Question from '../components/Question.vue';
import Play from '../components/Play.vue';

export default {
  components:{
    Play
  },
 methods:{
  userHistory(){
    if(value === undefined){
    value= "id för första lesone"
    }

  }
 }
 }

</script>

<template>
  <!-- <Play/> -->
<div id="homecontainer">
  <div id="welcome-card">
    <h1>Welcome to Pjano!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate qui, quidem numquam perspiciatis quod esse, error porro, sit reprehenderit impedit facere laudantium animi blanditiis quaerat ipsam quam laborum sed ad!</p>
  </div>
  <div class="card" @click="userHistory">
    <h2>Quick start</h2>
  </div>
  <div class="card" @click="$router.push({ path:'/lessons'})">
    <h2>Choose your lesson</h2>
  </div>
  <div class="card" @click="$router.push({ path: '/facts'})">
    <h2>Facts</h2>
  </div>
</div>

</template>

<style scoped>
#homecontainer{
  max-width: 70vw;
  margin: auto;
}
#welcome-card{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    align-items: center;
    color: #f9f9f9e2;
    margin-top: 30px;
    font-weight: bold;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    align-items: center;
    height: 100px;
}
.card:hover {
    background-color: #f9f9f9b0;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
.card h2 {
    margin-left: 10px;
    transition: margin-left 0.3s ease;
}

.card:hover h2 {
    margin-left: 20px;
}
</style>
