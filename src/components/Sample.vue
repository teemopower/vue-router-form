<template>
  <div class="main-container">
    <br>
    <br>SAMPLE COMPONENT
    <br>Here is the prop data ---
    <div v-for="(test, index) in testProp">{{index}}. {{ test }}</div>
  </div>
</template>

<script>
export default {
  name: "Sample",
  data() {
    return {};
  },
  props: ["testProp"],
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
