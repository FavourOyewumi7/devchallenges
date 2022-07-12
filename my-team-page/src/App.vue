<template id="app"  >
  <HomePage class="homepage "/>
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
#app{
  box-sizing: border-box;
  margin: auto;
  width: 62%;
  height: 100vh;
  padding-top: 4%;

}
.homepage{

  width: inherit;
  height: inherit;
  background-color: #FAFAFA;
}
</style>
