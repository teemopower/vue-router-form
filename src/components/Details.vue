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
    <br>
    <br>
    <button @click="class1 = !class1">class1</button>
    <button @click="class2 = !class2">class2</button>
    <div :class="moreThanOneDynamicClass">More than one class</div>
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
      addClass: true,
      class1: false,
      class2: false
    };
  },
  methods: {},
  computed: {
    moreThanOneDynamicClass() {
      return {
        class1: this.class1,
        class2: this.class2
      };
    }
  }
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

.class1 {
  width: 200px;
}

.class2 {
  background-color: lightcoral;
}
</style>
