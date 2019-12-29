<template>
  <div class="main-container">
    <div class="home-container">
      <div></div>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <h2>Contact Us</h2>
          <label>Username</label>
          <br>
          <br>
          <input type="text" v-model="formData.username">
          <br>
          <br>
          <label>Email</label>
          <br>
          <br>
          <input type="email" v-model="formData.email">
          <br>
          <br>
          <button>Submit</button>
        </form>
        <button @click="changeView(true)">Change View</button>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
// import router to change view on click / pushing path to router
import router from "../router";

export default {
  name: "Home",
  props: {
    msg: String
  },
  data() {
    return {
      formData: {
        username: "",
        email: ""
      },
      testCondition: true,
      testData: [
        {
          username: "sanfrancisco",
          email: "sf@gmail.com"
        },
        {
          username: "tomtom",
          email: "gps@gmail.com"
        }
      ]
    };
  },
  methods: {
    submitForm() {
      const { username, email } = this.formData;

      console.log(username);
      console.log(email);
    },
    changeView(x) {
      if (x === true) router.push("/details");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  font-family: Arial;
  max-width: 1280px;
  min-width: 1280px;
  min-height: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 340px 600px 340px;
  grid-template-rows: 100px 500px 100px;
}

.form-container {
  background-color: rgb(248, 248, 248);
  border: thin solid black;
  grid-row: 2/3;
  grid-column: 2/3;
}

.form-container > form {
  padding: 0 0 0 30px;
}

h2 {
  margin-left: 38%;
}

input {
  width: 90%;
  border-radius: 5px;
  border: thin solid black;
  height: 30px;
  outline: none;
  padding-left: 10px;
}

button {
  float: right;
  background-color: lightblue;
  color: rgb(255, 255, 255);
  font-weight: bold;
  outline: none;
  border: thin solid black;
  border-radius: 5px;
  height: 30px;
  width: 100px;
  margin: 100px 70px 0 0;
}
</style>
