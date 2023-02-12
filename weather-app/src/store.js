import { reactive } from "vue";

export const store = reactive({
    location: String,
    // todos : JSON.parse(localStorage.getItem('todos')),
    // values : [],
    // count:1,
    // todo_count: Number,
    
    // addTodos(value){
    //     this.todo = {
    //         title:value,
    //         index: this.count++,
    //         completed: false

    //     }

    //     this.values.push(this.todo)
    //     localStorage.setItem("todos",JSON.stringify(this.values))

    // }
    information:'',
    wind:0,
    humid:0,
    visible:0 ,
    pressure:0 ,
    
    fetchData(location){
        
     fetch(`http://api.weatherapi.com/v1/current.json?key=4f13a835b21142a388f212743231102&q=${location}}&aqi=no`)
    .then((Response) => Response.json())
    .then((data)=>{
        // console.log(data),
        this.information = data;
        this.wind=this.information.current.wind_mph,
        this.humid=this.information.current.humidity,
        this.visible=this.information.current.vis_miles ,
        this.pressure=this.information.current.pressure_mb 
        
    }
        
    )
    }
    
})
