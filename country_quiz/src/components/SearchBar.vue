<template>
  <div class="flex flex-row items-center ml-10 ">
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="h-5" >
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props:{
      modelValue: String
    },
    emits:['update: modelValue'],
    
    
    
   }
</script>

<style>

</style>