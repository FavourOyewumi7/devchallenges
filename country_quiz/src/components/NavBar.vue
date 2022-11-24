<template>

  <div class="nav-bar w-full py-1 h-12 flex flex-row justify-between border-2 bg-blue-800">
    <h1 class="text-2xl pl-5">KnowYourCountry</h1>
    <SearchBar v-model="inputText" />
    <DisplayWord :words="inputText"/>
    <button class="ml-5 border-2 bg-white rounded p-0" @click="submit()" >Press Me</button>
  </div>
  <div>
    
  </div>
</template>

<script>
import DisplayWord from './DisplayWord.vue';
import SearchBar from './SearchBar.vue';

export default {
    name: "NavBar",
    components: { SearchBar, DisplayWord },
    data(){
      return{
        inputText: ''
      }
    },
    emits:['update: inputText'],
    methods:{
      submit(){
        this.$emit('submitValue', this.inputText)
      }
    }

}
</script>

<style>


</style>