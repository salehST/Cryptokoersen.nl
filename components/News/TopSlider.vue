<script>
  // import Swiper core and required modules
  import { Pagination, A11y, Autoplay } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,        
        pagination: {
          clickable: true,
        },
        modules: [Pagination, A11y, Autoplay],
      };
    },
  };

</script> 
<style>


.blog-news-slider .swiper-slide:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #161C4B00 0%,#0D1138 100%);
    z-index: 1;
}
.blog-news-slider .swiper-slide {
    border-radius: 15px;
    overflow: hidden;
}
.blog-news-slider span.swiper-pagination-bullet {
    background: #fff;
    height: 6px;
    width: 6px;
    display: inline-block;
    margin: 0 10px 5px 0!important;
    opacity: 1;
}


span.swiper-pagination-bullet.swiper-pagination-bullet-active {
    position: relative;
    border-radius: 6px;
    background: #0251de;
}
span.swiper-pagination-bullet.swiper-pagination-bullet-active:after {
    content: "";
    position: absolute;
    border-radius: 16px;
    width: 16px;
    height: 16px;
    top: -5px;
    left: -5px;
    border: 1px solid #0251de;
    background: transparent;
}
.blog-news-slider .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 20px;
    left: auto;
    right: 10px;
    width: auto;
}
@media only screen and (max-width: 769px) {
.swiper {
    margin-top: 0;
}
}
</style>
<template>
    <div class=" mb-6">
        <swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="0"
                    autoplay
                    :pagination="pagination"
                    :loop="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                <swiper-slide>
                <!-- slider-area start -->
                <div class="slider-area">
                    
                    <div class="h-[362px] w-full lg:w-[743px] relative overflow-hidden rounded-[15px] ">                       
                                    <span class="overlay"></span>
                                    <span class="fixed-size overflow-hidden h-[362px] w-[96vw] md:w-[60vw] lg:w-[668px] rounded-[15px]">
                                        <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/news-02.jpg" alt="icon">
                                    </span>
                                    <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[362px]">
                                        <div class="flex items-center justify-between">
                                            <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                <a href="#">
                                                    <span class="w-fit bg-lblue text-cblue text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">Crypto News</span>
                                                </a>
                                                <a href="#">
                                                    <span class="w-fit bg-lblue text-cblue text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">Shiba</span>
                                                </a>
                                            </div>
                                            <div class="emoji-text text-white text-sm font-bold flex items-center gap-1"><img src="@/assets/img/emoji-s.svg" alt=""> 
                                                100% Fact
                                            </div>
                                        </div>
                                        <div class="bottom-content text-left flex flex-col mt-14">
                                                <h2 class="text-2xl md:text-[32px] font-bold text-white w-[290px] sm:w-[488px] leading-9 mb-3">Why Shiba Inu holders need to hold their horses on SHIB purchase</h2>
                                            
                                        <div class="mt-10">
                                            
<div class="text-white font-normal text-sm "><span class="flex items-center gap-2 ">September 09, 2022 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="white"/>
</svg>
  5 min Read</span></div>
                                            </div>
                                        </div>
                                    </div>
                    </div>

                </div>
                <!-- slider-area end -->   
                
                </swiper-slide>
                <swiper-slide>
                <!-- slider-area start -->
                <div class="slider-area">
                    
                    <div class="h-[362px] w-full lg:w-[743px] relative overflow-hidden rounded-[15px] ">                       
                                    <span class="overlay"></span>
                                    <span class="fixed-size overflow-hidden h-[362px] w-[96vw] md:w-[60vw] lg:w-[668px] rounded-[15px]">
                                        <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/news-02.jpg" alt="icon">
                                    </span>
                                    <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[362px]">
                                        <div class="">
                                            <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                <a href="#">
                                                    <span class="w-fit bg-lblue text-cblue text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">Crypto News</span>
                                                </a>
                                                <a href="#">
                                                    <span class="w-fit bg-lblue text-cblue text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">Shiba</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottom-content text-left flex flex-col mt-14">
                                                <h2 class="text-2xl md:text-[32px] font-bold text-white w-[290px] sm:w-[488px] leading-9 mb-3">Why Shiba Inu holders need to hold their horses on SHIB purchase</h2>
                                            
                                        <div class="mt-10">
                                            
<div class="text-white font-normal text-sm "><span class="flex items-center gap-2 ">September 09, 2022 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="white"/>
</svg>
  5 min Read</span></div>
                                            </div>
                                        </div>
                                    </div>
                    </div>

                </div>
                <!-- slider-area end -->   
                
                </swiper-slide>
                <swiper-slide>
                <!-- slider-area start -->
                <div class="slider-area">
                    
                    <div class="h-[362px] w-full lg:w-[743px] relative overflow-hidden rounded-[15px] ">                       
                                    <span class="overlay"></span>
                                    <span class="fixed-size overflow-hidden h-[362px] w-[96vw] md:w-[60vw] lg:w-[668px] rounded-[15px]">
                                        <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/news-02.jpg" alt="icon">
                                    </span>
                                    <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[362px]">
                                        <div class="">
                                            <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                <a href="#">
                                                    <span class="w-fit bg-lblue text-cblue text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">Crypto News</span>
                                                </a>
                                                <a href="#">
                                                    <span class="w-fit bg-lblue text-cblue text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">Shiba</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottom-content text-left flex flex-col mt-14">
                                                <h2 class="text-2xl md:text-[32px] font-bold text-white w-[290px] sm:w-[488px] leading-9 mb-3">Why Shiba Inu holders need to hold their horses on SHIB purchase</h2>
                                            
                                        <div class="mt-10">
                                            
<div class="text-white font-normal text-sm "><span class="flex items-center gap-2 ">September 09, 2022 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="white"/>
</svg>
  5 min Read</span></div>
                                            </div>
                                        </div>
                                    </div>
                    </div>

                </div>
                <!-- slider-area end -->   
                
                </swiper-slide>
        </swiper>
    </div>
</template>