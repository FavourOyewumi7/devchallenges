<template>
  <div class="border-2 border-black w-1/2">
    <h2>You have searched: {{words}}</h2>
  </div>
</template>

<script>
export default {
    name: 'DisplayWord',
    props: { 
        words: String
    },
    
          
}
</script>

<style>

</style>