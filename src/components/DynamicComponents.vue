<template>
  <div class="dynamic-container">
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <button @click="currentComponent = 'form-one'">FormOne page</button>
    <button @click="currentComponent = 'form-two'">FormTwo page</button>
  </div>
</template>

<script>
import FormOne from "./FormOne.vue";
import FormTwo from "./FormTwo.vue";

export default {
  components: {
    "form-one": FormOne,
    "form-two": FormTwo
  },
  data() {
    return {
      currentComponent: "page-one"
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
</style>
