<template>
  <div class="lg:flex lg:flex-row lg:justify-center flex flex-col gap-2 sm:grid sm:grid-cols-2 mx-12 my-8 ">
      <DayInfoCard v-for="day in store.futureInformation" :key="day.id" :weather="day" />
  </div>
</template>

<script>
import { store } from '@/store';
import DayInfoCard from './DayInfoCard.vue';
export default {
    name: 'DayInfo',
    components:{
      DayInfoCard
    },
    data(){
      return {
        store
      }
    }
}
</script>

<style>

</style>