<template>
  <div class=" navbar py-8 lg:h-full">
    <div class="flex flex-row justify-between px-4 mb-6">
        <button class="px-4 bg-gray text-light " @click="open()">
            Search for Places
        </button>

        <div class="flex flex-col justify-center bg-gray rounded-full p-2" @click="store.fetchLocation()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 " fill="#E7E7EB">
                <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
            </svg>
              
        </div>
    </div>
    <div class="flex flex-row md:flex-col xl:flex-row mb-4 items-center pr-2 val px-4" v-show="hide">
        <input type="text" placeholder="Enter Place" v-model="place" class="p-2 bg-blue text-light border border-1">
        <button class="mx-2 py-2 my-2 px-2 bg-button-blue" @click.prevent="submit()">
            Check
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6E707A" class="w-8 h-8" @click="close()">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
          
    </div>
    <div class="relative h-2/5 ">
        <div class="navbar-image  absolute h-fit ">
            
        </div>
        <div class="absolute h-full w-full flex flex-row justify-center px-5">
            <img :src="'https:'+store.icon" alt="" class="w-[202px] h-[234px]">
        </div>
    </div>
    <div class=" text-center px-12">
        <div class="text-light flex flex-col justify-center">

            
            <h1 class=" ">
                <span class="text-9xl text-light">{{ store.currtemp }}</span>
                <span class="text-dark text-5xl">&#176; C</span>

            </h1>


            <p class="my-8 text-4xl text-gray font-semibold ">
                {{ store.condition }}
            </p>

            <div class="flex flex-row justify-center my-5 text-lightgray ">
                <p class="pr-2">Today</p>
                <p class="pr-2"> . </p>
                <p>
                    {{ this.days[this.new_day]}}, {{ this.new_date }} {{ this.months[this.new_month] }}
                </p>
            </div>
            <div class="flex flex-row text-center justify-center text-lightgray">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6E707A" class="w-6 h-6 mr-2">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                </span>
                <span>
                    {{ store.city }}
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/store';
import gsap from 'gsap'
export default {
    name:'NavBar',
    data(){
        return{
            hide:false,
            place:'',
            store,
            new_day:'',
            new_month:'',
            new_date:'',
            days:{
                0:'Sun',
                1:'Mon',
                2:'Tues',
                3:'Wed',
                4:'Thu',
                5:'Fri',
                6:'Sat'
            },
            months:{
                0:'Jan',
                1:'Feb',
                2:'Mar',
                3:'Apr',
                4:'May',
                5:'Jun',
                6:'Jul',
                7:'Aug',
                8:'Sep',
                9:'Oct',
                10:'Nov',
                11:'Dec'
            }
        }
    },
    created(){
        let new_date_1 = new Date()
        this.new_day = new_date_1.getDay()
        this.new_month = new_date_1.getMonth()
        this.new_date = new_date_1.getDate()
       
    },
    methods:{
        open(){
            this.hide = !this.hide
            gsap.fromTo(
                '.val',{
                    opacity: 0,
                    y: '50%',
                },
                {
                    duration: 1.5,
                    opacity: 1,
                    y: 0,
                    ease: "power3.inOut",
                }
            )
        },
        close(){
            this.hide = !this.hide
           
        },
        submit(){
            store.fetchCurrData(this.place)
            store.fetchFutureData(this.place)
        }

    }
}
</script>

<style scoped>
.navbar{

    background-color: rgba(30, 33, 58, 1);
    
    
}
.navbar-image{
    width: 100%;
    height: 100%;
    background-image: url('../assets/Cloud-background.png');
    background-size: contain;
    background-repeat: no-repeat;
   opacity: 0.1; 
}

</style>