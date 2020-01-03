<template>
  <div class="main-container">
    <br>
    <br>SAMPLE COMPONENT
    <br>Here is the prop data ---
    <div v-for="(test, index) in testProp" :key="index">{{index}}. {{ test }}</div>
    <br>
    <button @click="emitData">asd</button>
  </div>
</template>

<script>
export default {
  name: "Sample",
  data() {
    return {
      testObject: {
        name: "jimmy",
        location: "seattle"
      }
    };
  },
  props: {
    testProp: {
      type: Array
    }
  },
  methods: {
    accessPropData() {
      console.log(this.testProp);
    },
    emitData() {
      this.$emit("emittedData", this.testObject);
    }
  },
  mounted() {
    this.accessPropData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  height: 50px;
  width: 100px;
}
</style>
