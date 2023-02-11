<template>
    <div class="py-12 w-4/5 mx-auto">
        <div class="">
            <div class="flex md:flex-row  mb-8 flex-col">
                <h2 class="title-bar-header font-bold  my-5" id="header">The creative crew</h2>

                <span class="title-bar-story md:ml-20 " id="story">
                    <h2 class="uppercase">who we are</h2>
                    <p class="text-left">
                        We are team of creatively diverse.  driven. <br/> innovative individuals working in various<br/> locations from the world.
                    </p>
                </span>
            </div>
            <div class=" flex flex-row justify-center">
                <div class="grid-div grid lg:grid-cols-3 lg:grid-rows-2 mt-8 sm:grid-cols-2 sm:grid-rows-3 flex flex-col justify-center">
                    <ImageCard image="photo1.png" title="Bill Mahoney" description="product owner" class="item sm:m-0 mt-5" id="image1"/>
                    <ImageCard image="photo2.png" title="Saba Cabrera" description="art director" class="item sm:m-0 mt-5" id="image2"/>
                    <ImageCard image="photo3.png" title="Shae Le" description="tech lead" class="item sm:m-0 mt-5" id="image3"/>
                    <ImageCard image="photo4.png" title="Skylah Lu" description="ux designer" class="item sm:m-0 mt-5" id="image4"/>
                    <ImageCard image="photo5.png" title="Griff Richards" description="developer" class="item sm:m-0 mt-5" id="image5"/>
                    <ImageCard image="photo6.png" title="Stan John" description="developer" class="item sm:m-0 mt-5" id="image6"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageCard from './ImageCard.vue'
import {gsap} from 'gsap'
export default {
    name: 'HomePage',
  components: { ImageCard },
  mounted(){
    gsap.fromTo(
        "#header",
    {
      opacity: 0,
      y: "-100%",
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      
    }),
    gsap.fromTo(
        "#story",
    {
      opacity: 0,
      y: "100%",
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      
    }),
    gsap.fromTo(
        "#image1", {
        duration: 1.5,
        x: -25, 
    },{
        duration:1.5,
        x:0,
        ease: "power3.inOut",
    }

    ),
    gsap.fromTo(
        "#image2", {
        duration: 1.5,
        y: -50,
    },
    {
        duration:1.5,
        y:0,
        ease: "power3.inOut",
    }
    ),
    gsap.fromTo(
        "#image3", {
        duration: 1.5,
        x: 25, 
    },{
        duration:1.5,
        x:0,
        ease: "power3.inOut",
    }

    ),
    gsap.fromTo(
        "#image4", {
        duration: 1.5,
        x: -25, 
    },{
        duration:1.5,
        x:0,
        ease: "power3.inOut",
    }

    ),
    gsap.fromTo(
        "#image5", {
        duration: 1.5,
        y: 50,
    },
    {
        duration:1.5,
        y:0,
        ease: "power3.inOut",
    }
    ),
    gsap.fromTo(
        "#image6", {
        duration: 1.5,
        x: 25, 
    },{
        duration:1.5,
        x:0,
        ease: "power3.inOut",
    }

    )

  }
    

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

@media screen and (min-width: 600px){
.grid-div .item:nth-child(2){
    margin-top: 100px;
    
   
}
.grid-div .item:nth-child(5){
    margin-top: 100px;
    
   
}
}

</style>