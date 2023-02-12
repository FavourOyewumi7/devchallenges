<template>
  <div class="sm:grid sm:grid-cols-4 flex flex-col">
    <NavBar  />
    <BodyBar class="col-span-3" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import BodyBar from './components/BodyBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    BodyBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
*{
  font-family: 'Raleway', sans-serif;
}
</style>
