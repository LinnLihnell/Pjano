<template>
   <h3 v-if="deleteMessage" class="deleted">{{ deleteMessage }}</h3>
  <div class="profilecontainer" v-if="!isReturningUser">
    <h1 v-if="!deleteMessage">Welcome!</h1>
    <p v-if="!deleteMessage">Please create your profile by choosing a username</p>
    <form @submit.prevent="saveUserProfile">
      <div class="form-group">
        <label for="name">Username:</label>
        <input type="text" id="name" name="name" v-model="userName" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Create profile</button>
    </form>
  </div>

  <div class="profilecontainer" v-else>
    <h1>Welcome {{ user.username }}</h1>
    <div class="results">
      <p>Lessons completed: {{ lessonsCount }} </p>
    </div>
    <button @click="removeProfile" class="btn btn-danger">Delete profile</button>
  </div>
</template>

<script>
import User from '../models/User';

export default {
  data() {
    return {
      user: new User(),
      userName: '',
      isReturningUser:false,
      deleteMessage: '',
      lessonsCount: null
    }
  },
  methods: {
    saveUserProfile() {
      this.user.username = this.userName;
      this.user.saveToLocalStorage();
      this.isReturningUser=true;
      this.deleteMessage='',
      localStorage.setItem('isReturningUser', 'true')
    },
    removeProfile(){
      localStorage.removeItem('user')
      localStorage.removeItem('lessonsCount')
      localStorage.setItem('isReturningUser', 'false')
      this.user=new User()
      this.userName=""
      this.isReturningUser=false
      this.deleteMessage= 'Your profile has been deleted but you can create a new one here'

    }
  },
  created() {
    const loadedUser=User.loadFromLocalStorage()
    if(loadedUser && loadedUser.username){
      this.user=loadedUser
      this.userName = this.user.username;
      this.isReturningUser=true
    } else{
      this.user=new User()
      this.username=''
      this.isReturningUser=false
    }

    let lessonsCount = localStorage.getItem('lessonsCount')
    if(!lessonsCount){
      lessonsCount=0
    }
    this.lessonsCount = parseInt(lessonsCount)

  }

}
</script>

<style scoped>
.profilecontainer{
  text-align: center;
  margin: auto;
  padding: 20px;
}
.deleted{
text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 300px;
  margin: 10px;
}

form label {
  margin-right: 10px;
}

form input {
  border-radius: 5px;
}
</style>
