<template>
    <div class="bg-blue py-4 px-4 flex flex-row justify-center mx-2">
        <div class="" >
            <p class="text-center font-medium text-base"> {{ this.days[this.new_day]}}, {{ this.new_date }} {{ this.months[this.new_month] }} </p>
            <div class="flex flex-row justify-center p-4">
                <img  alt="" class="w-[56px] h-[62px]" :src="'https:'+ weather.day.condition.icon">
            </div>
            <div class="flex flex-row justify-between pt-4 leading-3">
                <span class="text-light pr-4"> {{this.up }}<span>&#176;</span>C </span>
                <span class="text-dark "> {{ this.down  }} <span>&#176;</span>C </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DayInfoCard',
    props:{
        weather:Object  
    },
    data(){
        return{
            new_day:'',
            new_month:'',
            new_date:'',
            up :'',
            down:'',
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
        let new_date_1 = new Date(this.weather.date)
        this.new_day = new_date_1.getDay()
        this.new_month = new_date_1.getMonth()
        this.new_date = new_date_1.getDate()
        this.up = Math.round(this.weather.day.maxtemp_c)
        this.down = Math.round(this.weather.day.mintemp_c)
        
    

    },
    
    
}
</script>

<style>

</style>