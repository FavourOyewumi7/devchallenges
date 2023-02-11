<template>
  <div class="image-card ">
    <div class="flex ">
      <div class=" ">

        <img :src="require('@/assets/'+image+'')" alt="" class=" ">
        <h2 class="text-black pt-2">{{title}}</h2>
      </div>
      <div class="">
        <p class="uppercase text-black text" >{{description}}</p>
      </div>
    </div>
  
      
  </div>

  
</template>

<script>
export default {
  name: 'ImageCard',
  props:{
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Poppins:wght@600&display=swap');
  
  p{
    font-family: PT Serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;  
    
  }
  h2{
    font-family: Poppins;
    font-size: 18px;
    line-height: 27px;
  
  }
  .text{
    text-orientation: mixed;
    writing-mode: vertical-rl;
    width: 20px;
  }
  
;
</style>
