<template>
  <div class=" navbar py-8 px-4  z-10">
    <div class="flex flex-row justify-between">
        <button class="p-4 bg-gray rounded" @click="open()">
            Search for Places
        </button>

        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6E707A" class="w-12 h-12 ">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              
        </div>
    </div>
    <div class="flex flex-row my-4 items-center pr-2 val" v-show="hide">
        <input type="text" placeholder="Enter Place" v-model="place" class="p-2">
        <button class="mx-2 py-2 px-2 bg-gray rounded" @click.prevent="submit()">
            Check
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6E707A" class="w-8 h-8" @click="close()">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
          
    </div>
    <div>

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
            store
        }
    },
    methods:{
        open(){
            this.hide = !this.hide
            gsap.fromTo(
                '.val',{
                    opacity: 0,
                    y: "100%",
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
            store.fetchData(this.place)
        }

    }
}
</script>

<style scoped>
.navbar{

    background-color: rgba(30, 33, 58, 1);
    
    background-size: contain;
    background-repeat: no-repeat;
    
}

</style>