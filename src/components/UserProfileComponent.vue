<template>
  <div>
    <h1 v-if="user">Hello {{ user.username }}</h1>
    <form @submit.prevent="saveUserProfile">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="userName">
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import User from '../models/User';

export default {
  data() {
    return {
      user: new User(),
      userName: ''
    }
  },
  methods: {
    saveUserProfile() {
      this.user.username = this.userName;
      this.user.saveToLocalStorage();
    }
  },
  created() {
    this.user = User.loadFromLocalStorage();
    this.userName = this.user.username;
  }

}
</script>

<style scoped>
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
  color: var(--text-color);
}

form input {
  border-radius: 5px;
}
</style>
