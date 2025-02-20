<template>
  <div>
    <h1>Hello {{ displayUserName }}</h1>
    <form  @submit.prevent="saveUserProfile">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="formUserName">
        </div>
        <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default{
  data(){
    return {
        formUserName: '',
        displayUserName: ''
    }
  },
    methods: {
        saveUserProfile(){
            localStorage.setItem('userName', this.formUserName)
            this.displayUserName = this.formUserName;
        }
    },
    created(){
        const userName = localStorage.getItem('userName');
        this.displayUserName = userName;
        this.formUserName = userName;
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
