<template>
  <div class="main-container">
    <h1>Details page</h1>
    <ul v-for="(test, index) in testData" :key="index">
      <li>{{ test.username }}</li>
      <li>{{ test.email }}</li>
    </ul>
    <template v-for="test in testData">
      <div v-for="(val, key) in test">
        <p>{{ key }} : {{ val }}</p>
      </div>
    </template>
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
    <br>
    <br>
    <div v-if="ifExample">Show if v-if is true</div>
    <div v-else-if="!ifExample">Show if v-if is false</div>
    <br>
    <br>
    <div v-show="showExample">Show if v-show is true</div>
    <br>
    <br>
    <input type="text" ref="mario">
    <input type="text" ref="luigi">
    <button @click="readRefs">Read Refs</button>
    ref value is {{ refValue }}
    <br>
    {{ updatedName }}
    {{ updatedLocation}}
    <component-sample
      :testProp="testPropData"
      :title="updatedName"
      @emittedData="updateTitle($event)"
    />
    <br>
    <slot-example>
      <div slot="form-header">
        <h2>Form header</h2>
        <p>Enter your information</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name">
        <input type="password" placeholder="password">
      </div>
      <div slot="form-controls">
        <button>Submit</button>
      </div>
    </slot-example>
    <dynamic-components></dynamic-components>
  </div>
</template>

<script>
import Sample from "./Sample.vue";
import Slot from "./Slots.vue";
import DynamicComponents from "./DynamicComponents.vue";

export default {
  name: "Details",
  components: {
    "dynamic-components": DynamicComponents,
    "component-sample": Sample,
    "slot-example": Slot
  },
  data() {
    return {
      testPropData: ["sam", "dan"],
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
      class2: false,
      ifExample: false,
      showExample: true,
      refValue: "",
      updatedName: "",
      updatedLocation: "",
      dynamicSlotTitle: "I am a dynamic slot title"
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    readRefs() {
      console.log(this.$refs);
      this.refValue = this.$refs.mario.value;
    },
    updateTitle(event) {
      console.log("log in Details component", event);
      this.updatedName = event.name;
      this.updatedLocation = event.location;
    }
  },
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
