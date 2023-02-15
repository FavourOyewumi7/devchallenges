<template>
    <div class="w-screen text-light mx-8 my-4   ">
        <h2 class="font-bold text-2xl">Today's Highlight</h2>
        <div class="sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-4 flex flex-col  m-4">
            <div class="bg-blue py-12 flex flex-row justify-center ">
                <div>
                    <h4 class="text-sm text-center">
                        Wind Status
                    </h4>
                    <p class="text-4xl">
                       <span class="text-6xl font-bold">{{ store.wind }} </span> <span class="text-5xl"> mph</span> 
                    </p>
                    <div class="flex flex-row justify-center pt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6" fill="#E7E7EB">
                            <path d="M413.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144C5.7 200.2-2.3 215.2 .6 230.2s16.1 25.8 31.4 25.8H208V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/>
                        </svg>
                        <p>
                            {{ 
                                store.wind_dir
                            }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="bg-blue py-12 flex flex-row justify-center">
                <div class="flex-col justify-between">
                    <h4 class="text-sm text-center">
                        Humidity
                    </h4>
                    <p class="text-center">
                        <span class="text-6xl font-bold"> {{ store.humid }} </span> <span class="text-5xl">%</span>
                    </p>

                    <progress  :value="store.humid" max="100" class="progress-bar mt-5"> </progress>
                </div>
                
                
            </div>
            <div class="bg-blue py-12 flex flex-row justify-center">
                <div>
                    <h4 class="text-sm text-center">
                        Visibility
                    </h4>
                    <p class="text-4xl">
                       <span class="text-6xl font-bold">{{ store.visible }}  </span> <span class="text-5xl"> miles</span>
                    </p>
                </div>
            </div>
            <div class="bg-blue py-12 flex flex-row justify-center">
                <div>
                    <h4 class="text-sm text-center">
                        Air Pressure
                    </h4>
                    <p class="text-4xl">
                       <span class="text-6xl font-bold"> {{ store.pressure }} </span> <span class="text-5xl"> mb </span>
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

<style scoped>
progress{
    border-radius: 20px;
}
progress[value]{
    appearance: none;
    height: 8px;
    width: 220px;
}
progress[value]::-webkit-progress-value{
    background-color: #FFEC65;
    border-radius: 2px;
}

</style>