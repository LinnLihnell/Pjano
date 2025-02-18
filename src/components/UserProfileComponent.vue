<template>
  <div>
    <h1>Hello {{ displayUserName }}</h1>
    <form  @submit.prevent="saveUserProfile">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="formUserName">
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
        }
    },
    created(){
        const userName = localStorage.getItem('userName');
        this.displayUserName = userName;
        this.formUserName = userName;
    }

}
</script>
