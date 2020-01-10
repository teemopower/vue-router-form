<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>|
      <router-link to="/details" exact>Details</router-link>|
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
</script>

<style>
.router-link-active {
  background-color: lightskyblue;
}
</style>
