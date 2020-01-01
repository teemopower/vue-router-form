<template>
  <div class="main-container">
    <br>
    <br>SAMPLE COMPONENT
    <br>Here is the prop data ---
    <div v-for="(test, index) in testProp" :key="index">{{index}}. {{ test }}</div>
  </div>
</template>

<script>
export default {
  name: "Sample",
  data() {
    return {};
  },
  props: {
    testProp: {
      type: Array
    }
  },
  methods: {
    accessPropData() {
      console.log(this.testProp);
    }
  },
  mounted() {
    this.accessPropData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
