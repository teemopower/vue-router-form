<template>
  <div class="single-blog">
    <h1>Blog</h1>
    <h1>Title</h1>
    <p>{{ blog.name }}</p>
    <h1>Body</h1>
    <p>{{ blog.description }}</p>
    <h3>Categories</h3>
    <div v-for="cat in blog.categories" :key="cat.id">
      {{ cat }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  props: {},
  methods: {},
  beforeCreate() {},
  created() {
    this.axios
      .get(`https://vue-tutorial-8256a.firebaseio.com/posts/${this.id}.json`)
      .then(result => {
        const { data } = result;
        this.blog = data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
