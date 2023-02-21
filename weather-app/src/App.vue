<template>
  <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 flex flex-col">
    <NavBar  />
    <BodyBar class="lg:col-span-3 md:col-span-2" />
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
