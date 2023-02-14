<template>
    <div class="bg-blue p-4 flex flex-row justify-center">
        <div class="" >
            <p class="text-center font-medium text-base"> {{ this.days[this.new_day]}}, {{ this.new_date }} {{ this.months[this.new_month] }} </p>
            <img src="../assets/Hail.png" alt="">
            <div class="flex flex-row justify-between px-4">
            <span class="text-light"> {{ weather.day.maxtemp_c }}<span>&#176;</span>C </span>
            <span class="text-dark"> {{ weather.day.mintemp_c  }} <span>&#176;</span>C </span>
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
        console.log(this.new_date,this.new_day,this.new_month)

    }
    
}
</script>

<style>

</style>