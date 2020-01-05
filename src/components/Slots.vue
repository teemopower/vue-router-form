<template>
  <div class="slots-container">
    <h1>Slots Example</h1>
    <slot name="form-header"></slot>
    <slot name="form-fields"></slot>
    <slot name="form-controls"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
