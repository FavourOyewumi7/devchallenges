<template>
  <div id="app"  >
    <HomePage class="homepage mx-auto w-screen "/>
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
}
}
</script>

<style>
*{
  width: 100%;
  
}
#app{
  background-color: #FAFAFA;
  width: fit-content;
}

</style>
