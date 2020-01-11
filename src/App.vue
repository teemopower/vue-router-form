<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>|
      <router-link to="/details" exact>Details</router-link>|
      <router-link to="/blog" exact>Blog</router-link>|
      <router-link to="/listone" exact>listone</router-link>|
      <router-link to="/listtwo" exact>listtwo</router-link>|
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
