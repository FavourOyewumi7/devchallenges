<template>

    <div class="flex flex-row mb-8">
        <h2 class="title-bar-header font-bold w-1/2 h-[47px]">The creative crew</h2>

        <span class="title-bar-story w-[439px] h-[120px]">
            <h2 class="uppercase">who we are</h2>
            <p class="text-left">
                We are team of creatively diverse.  driven. <br/> innovative individuals working in various<br/> locations from the world.
            </p>
        </span>
    </div>
    <div class="grid-div grid grid-cols-3 grid-rows-2 mt-8">
        <ImageCard image="photo1.png" title="Bill Mahoneyssss" description="product owner" class="item"/>
        <ImageCard image="photo2.png" title="Saba Cabrera" description="art director" class="item"/>
        <ImageCard image="photo3.png" title="Shae Le" description="tech lead" class="item"/>
        <ImageCard image="photo4.png" title="Skylah Lu" description="ux designer" class="item"/>
        <ImageCard image="photo5.png" title="Griff Richards" description="developer" class="item"/>
        <ImageCard image="photo6.png" title="Stan John" description="developer" class="item"/>
    </div>
</template>

<script>
import ImageCard from './ImageCard.vue'

export default {
    name: 'HomePage',
  components: { ImageCard }
    

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Poppins:wght@600&display=swap');
.title-bar-header{
    font-family: PT Serif;
    font-size: 36px;
    font-style: normal;
    line-height: 48px;
    letter-spacing: -0.045em;
}

.uppercase{
    text-transform: uppercase;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    


}
.title-bar-header p{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
}
.grid-div .item:nth-child(2){
    margin-top: 100px;
    
   
}
.grid-div .item:nth-child(5){
    margin-top: 100px;
    
   
}


</style>