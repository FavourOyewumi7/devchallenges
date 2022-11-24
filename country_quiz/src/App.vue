<template>
 

  <NavBar @submitValue = "valueSub" />
  <ResultsPage :names="this.title" />
  
 
</template>

<script>

import NavBar from './components/NavBar.vue';
import ResultsPage from './components/ResultsPage.vue';

export default {
  name: 'App',
  components: {
   ResultsPage,
    NavBar
},
data(){
  return{
    value:'',
    title:''
  }
},
methods:{
  valueSub(value){
    this.title = value
    console.log(value)
    console.log(this.title)
  }
}
}
</script>

<style>
    
*{
  margin: 0px;
  padding: 0px;
 
}
</style>
