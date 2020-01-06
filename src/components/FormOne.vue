<template>
  <div class="template-container">
    Form one
    <form class="form-one">
      <label>Name</label>
      <input type="text" v-model="blog.name">
      <br>
      <label>Description</label>
      <textarea v-model="blog.description"></textarea>
    </form>
    <div>
    {{ blog.name }}
    {{ blog.description }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        name: "",
        description: ""
      }
    };
  },
  props: {},
  methods: {},
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
