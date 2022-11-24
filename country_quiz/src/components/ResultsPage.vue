<template>
    <div class="border-2 h-screen border-black">
        <h1>
            You have searched for: <b>{{names}}</b>
        </h1>
        {{this.countryPosition}}
        {{this.countryName.common}}
    </div>
  
</template>

<script>
export default {
    name:"ResultPage",
    props:{
        names: String
    },
    data(){
        return {
            countryPosition: '',
            countryName:{},
            datas:{}
        }
    },
    updated(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            fetch('https://restcountries.com/v3.1/name/'+this.names)
            .then((response)=> response.json())
            .then((data)=>{
             this.datas = data[0],
             this.countryName = this.datas['name'], 
             this.countryPosition = this.datas['latlng']})
            
        }
    }
}
</script>

<style>

</style>