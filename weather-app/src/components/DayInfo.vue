<template>
  <div class="flex flex-row gap-4 mx-12 my-8">
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