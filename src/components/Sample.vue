<template>
  <div class="main-container">
    <br>
    <br>SAMPLE COMPONENT
    <br>Here is the prop data ---
    <div v-for="(test, index) in testProp" :key="index">{{index}}. {{ test }}</div>
    <br>
    <button @click="emitData">asd</button>
    {{ title }}
  </div>
</template>

<script>
import { bus } from "../main.js";

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
    },
    title: {
      type: String
    }
  },
  methods: {
    accessPropData() {
      console.log(this.testProp);
    },
    emitData() {
      // this.$emit("emittedData", this.testObject);
      bus.$emit("busEmittedData", "hello from bus");
    }
  },
  beforeCreate(){

  },
  created(){

  },
  beforeMount(){

  },
  mounted() {
    this.accessPropData();
  },
  beforeUpdate(){

  },
  updated(){
    
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
