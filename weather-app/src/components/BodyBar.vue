<template>
  <div class=" bg-deep-blue text-light p-8">

    
    <div class="flex flex-row justify-center">
      
      <WeatherInfo />
    </div>
  </div>
</template>

<script>
import WeatherInfo from './WeatherInfo.vue';
export default {
  name: 'BodyBar',
  components:{
    WeatherInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
