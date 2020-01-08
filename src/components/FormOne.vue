<template>
  <div class="template-container">
    <div v-theme:color="'dark'">Form one</div>
    <div>{{ filterExample | slice }}</div>
    <div v-if="!submitted">
      <form class="form-one" @submit.prevent="handleSubmit">
        <label>Name</label>
        <input type="text" v-model="blog.name">
        <br>
        <label>Description</label>
        <textarea v-model="blog.description"></textarea>
        <br>
        <label>Ninja</label>
        <input type="checkbox" value="ninja" v-model="blog.categories">
        <br>
        <label>Samurai</label>
        <input type="checkbox" value="samurai" v-model="blog.categories">
        <br>
        <label>Warrior</label>
        <input type="checkbox" value="warrior" v-model="blog.categories">
        <br>
        <br>
        <label>Select</label>
        <br>
        <select v-model="blog.city">
          <option disabled>Select One</option>
          <option v-for="(city,index) in blog.selectCities" :key="index">{{ city }}</option>
        </select>
        <br>
        <br>
        <button type="submit">Submit</button>
      </form>
    </div>
    <br>
    <div v-if="submitted">
      <h1>Submitted</h1>
    </div>
    <div>
      {{ blog.name }}
      <br>
      {{ blog.description }}
      <br>
      <div v-for="(category, index) in blog.categories" :key="index">
        {{ category }}
        <br>
      </div>
      <br>
    </div>
    <div>{{ info }}</div>
    <div style="min-height: 300px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        name: "",
        description: "",
        categories: [],
        city: "",
        selectCities: ["Seattle", "Los Angeles", "San Francisco"]
      },
      submitted: false,
      info: null,
      filterExample: "filter example to uppercase"
    };
  },
  props: {},
  methods: {
    handleSubmit() {
      const { name, description, categories, city } = this.blog;
      console.log(name, description, categories, city);
      // this.$http
      //   .post("https://jsonplaceholder.typicode.com/posts", {
      //     title: this.blog.name,
      //     body: this.blog.description,
      //     userId: 1
      //   })
      //   .then(result => {
      //     console.log(result);
      //     this.submitted = true;
      //   });

      // this.axios
      //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      //   .then(response => (this.info = response))
      //   .catch(error => console.log(error));

      this.axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.name,
          body: this.blog.description,
          userId: 1
        })
        .then(response => (this.info = response))
        .catch(error => console.log(error));
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-one {
  height: 300px;
  width: 400px;
  border: thin solid black;
}
</style>
