<script>
// import Pjano from '../components/Pjano.vue';
// import Question from '../components/Question.vue';
import Play from '../components/Play.vue';

export default {
  components:{
    Play
  },
  created(){
    const isReturningUser=localStorage.getItem('isReturningUser')==='true'
    this.isReturningUser=isReturningUser
  },
  data(){
    return{
      isReturningUser:false
    }
  }
//  methods:{
//   userHistory(){
//     if(value === undefined){
//     value= "id för första lesone"
//     }

//   }
//  }
 }

</script>

<template>
  <!-- <Play/> -->
<div id="homecontainer">
  <div id="welcome-card">
    <h1>Welcome to Pjano!</h1>
    <p>Ready to learn the piano? Whether you're a complete beginner or just want to brush up on your skills, this site is here to guide you every step of the way. Explore interactive lessons, fun exercises, and simple tutorials that will help you play your first song in no time! Let’s start your musical journey together and make learning the piano easy and enjoyable.</p>
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
  <div class="card" :class="{ disabled:isReturningUser}" @click="!isReturningUser && $router.push({ path:'/profile'})"  style="height: 60px;">
    <h2>Create profile</h2>
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
.disabled{
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
