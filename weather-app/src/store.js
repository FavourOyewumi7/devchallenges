import { reactive } from "vue";

export const store = reactive({
    location: String,
    city: '',
    icon:'',
    country:'',
    currtemp:'',
    currInformation:'',
    futureInformation:'',
    wind:'-',
    wind_dir:'-',
    humid:'-',
    visible:'-' ,
    pressure:'-' ,
    currdate:'',
    condition:'',
    long:'',
    lat:'',
    place:'',
    fetchCurrData(location){
    try{
     fetch(`https://api.weatherapi.com/v1/current.json?key=4f13a835b21142a388f212743231102&q=${location}}&aqi=no`)
    .then((Response) => Response.json())
    .then((data)=>{
        // console.log(data),
        this.currInformation = data;
        this.city = this.currInformation.location.name,
        this.country = this.currInformation.location.country,
        this.wind=this.currInformation.current.wind_mph,
        this.humid=this.currInformation.current.humidity,
        this.visible=this.currInformation.current.vis_miles ,
        this.pressure=this.currInformation.current.pressure_mb ,
        this.currdate= this.currInformation.location.localtime,
        this.condition=this.currInformation.current.condition.text
        this.currtemp = this.currInformation.current.temp_c,
        this.wind_dir = this.currInformation.current.wind_dir,
        this.icon = this.currInformation.current.condition.icon}
    )
    }catch(err){
            console.log(err)
        }
    }    
    ,

    fetchFutureData(location){
        
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=4f13a835b21142a388f212743231102&q=${location}&days=6&aqi=no&alerts=0`)
       .then((Response) => Response.json())
       .then((data)=>{
           this.futureInformation = data.forecast.forecastday.slice(1)
          
           
       }
           
       )
       },
       fetchCity(){
               
          fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${this.lat}&lon=${this.long}&apiKey=5fb905cf9b69441bb7a7bf44e0507c89`)
            .then((response) => response.json())
            .then((data) => {
                this.fetchCurrData(data.features[0].properties.city)
                this.fetchFutureData(data.features[0].properties.city)}
                 )
       },
       fetchLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                this.long = position.coords.longitude
                this.lat = position.coords.latitude
                this.fetchCity()
                
            })

        }else{
            alert('This browser does not support Geolocation')
        }
       }
    
})
