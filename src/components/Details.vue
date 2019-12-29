<template>
  <div class="main-container">
    <h1>Details page</h1>
    <ul v-for="test in testData" :key="test.id">
      <li>{{ test.username }}</li>
      <li>{{ test.email }}</li>
    </ul>
    <br>
    <button
      @click="addClass = !addClass"
      :class="{ dynamicClassName: addClass, dynamicClassNameFalse: !addClass}"
    >Dynamic class css</button>
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
      ],
      addClass: true
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dynamicClassName {
  background-color: red;
}

.dynamicClassNameFalse {
  background-color: green;
}
</style>
