<template>
  <div class="main-container">
    <h1>Details page</h1>
    <ul v-for="test in testData" :key="test.id">
      <li>{{ test.username }}</li>
      <li>{{ test.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: {
    msg: String
  },
  data() {
    return {
      testData: [
        {
          id: "1",
          username: "sanfrancisco",
          email: "sf@gmail.com"
        },
        {
          id: "2",
          username: "tomtom",
          email: "gps@gmail.com"
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
