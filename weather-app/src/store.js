import { reactive } from "vue";

export const store = reactive({
    location: String,
    city: '',
    country:'',
    currInformation:'',
    futureInformation:'',
    wind:'-',
    humid:'-',
    visible:'-' ,
    pressure:'-' ,
    currdate:'',
    condition:'',
    
    fetchCurrData(location){
        
     fetch(`http://api.weatherapi.com/v1/current.json?key=4f13a835b21142a388f212743231102&q=${location}}&aqi=no`)
    .then((Response) => Response.json())
    .then((data)=>{
        // console.log(data),
        this.currInformation = data;
        this.city = this.currInformation.location.region,
        this.country = this.currInformation.location.country,
        this.wind=this.currInformation.current.wind_mph,
        this.humid=this.currInformation.current.humidity,
        this.visible=this.currInformation.current.vis_miles ,
        this.pressure=this.currInformation.current.pressure_mb ,
        this.currdate= this.currInformation.location.localtime,
        this.condition=this.currInformation.current.condition.text
        
    }
        
    )
    },

    fetchFutureData(location){
        
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=4f13a835b21142a388f212743231102&q=${location}&days=6&aqi=no&alerts=0`)
       .then((Response) => Response.json())
       .then((data)=>{
            console.log(data)
           this.futureInformation = data.forecast.forecastday.slice(1)
           console.log(this.futureInformation)
           
       }
           
       )
       }
    
})
