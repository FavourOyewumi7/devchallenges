<template>
    <div class="w-4/5 text-light">
        <h2 class="font-bold text-2xl">Today's Highlight</h2>
        <div class="sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-4 flex flex-col  m-4">
            <div class="bg-blue p-8 flex flex-row justify-center ">
                <div>
                    <h4 class="text-sm text-center">
                        Wind Status
                    </h4>
                    <p class="text-4xl">
                       <span class="text-6xl font-bold">{{ store.wind }} </span> mph
                    </p>
                </div>
            </div>
            <div class="bg-blue p-8 flex flex-row justify-center">
                <div>
                    <h4 class="text-sm text-center">
                        Humidity
                    </h4>
                    <p class="text-4xl">
                        <span class="text-6xl font-bold"> {{ store.humid }} </span> %
                    </p>
                </div>
                
            </div>
            <div class="bg-blue p-8 flex flex-row justify-center">
                <div>
                    <h4 class="text-sm text-center">
                        Visibility
                    </h4>
                    <p class="text-4xl">
                       <span class="text-6xl font-bold">{{ store.visible }}  </span> miles
                    </p>
                </div>
            </div>
            <div class="bg-blue p-8 flex flex-row justify-center">
                <div>
                    <h4 class="text-sm text-center">
                        Air Pressure
                    </h4>
                    <p class="text-4xl">
                       <span class="text-6xl font-bold"> {{ store.pressure }} </span> mb
                    </p>
                </div>
                
            </div>

        </div>
    </div>
</template>

<script>
import { store } from '@/store';
export default {
    name:'WeatherInfo',
    data(){
        return{
            store,
            


        }
    }
}
</script>

<style>

</style>