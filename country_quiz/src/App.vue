<template>
 
  <HomeContainer />
 
</template>

<script>

import HomeContainer from './components/HomeContainer.vue'

export default {
  name: 'App',
  components: {
   
    HomeContainer
}
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  
  width: 100vw;
  height: 100vh;
  background-image: url(../src/assets/background.png);
  background-position:center;
  background-repeat: no-repeat;
 
}
</style>
