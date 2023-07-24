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
        //   renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        //   },
        },
        modules: [Pagination, A11y, Autoplay],
      };
    },
  };

</script> 
<style>
.knowledge-slider .swiper-pagination {
    top: 0;
    text-align: right;
    bottom: auto;
    display: none;
}

.knowledge-slider .swiper-wrapper {
    padding: 30px 0 0;
}

.knowledge-slider span.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #0051FF;
}

.knowledge-slider .swiper-pagination-bullet {
    height: 6px;
    width: 6px;
}

.knowledge-slider .swiper-pagination-bullet.swiper-pagination-bullet-active:after {
    content: "";
    width: 14px;
    height: 14px;
    background: transparent;
    position: absolute;
    left: -4px;
    top: -4px;
    border-radius: 50px;
    border: 1px solid #027ffa;
}

.knowledge-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
    position: relative;
}
.news-slider .swiper {
    position:relative;
    z-index: 1;
}
.news-slider .swiper:after {
    content: "";
    position: absolute;
    width: 220px;
    height: 100%;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(252,253,255,0) 0%,rgba(255,255,255,1) 100%);
    z-index: 2;
}
.news-slider .swiper:before {
    content: "";
    position: absolute;
    width: 220px;
    height: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(252,253,255,0) 100%);
    z-index: 2;
}
</style>
<template>
            <div class="knowledge-slider news-slider">
            <div class="flex items-center justify-between gap-[30px]">
                <swiper     
                :breakpoints="{
      '300': {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    }" 
    :modules="modules"
    :slides-per-view="6"
    :space-between="0"    
    autoplay
    :pagination="pagination"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  <swiper-slide>
        <div class="border-lgray border-r overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/btc.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-[10px] font-semibold">BTC/USDT</li>
                    <li class="flex items-center">
                        <span class="text-black font-normal text-xs mr-1">21,726.59</span>
                        <span class="text-[#23A638] font-normal text-[10px] flex items-center gap-1">+4.25 % <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66634 -2.33127e-07L5.33301 4L-0.000325203 4L2.66634 -2.33127e-07Z" fill="#23A638"/>
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border-lgray border-r overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black  text-[10px] font-semibold">ETH/USDT</li>
                    <li class="flex items-center">
                        <span class="text-black font-normal text-xs mr-1">1,726.59</span>
                        <span class="text-[#23A638] font-normal text-[10px] flex items-center gap-1">+4.25 % <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66634 -2.33127e-07L5.33301 4L-0.000325203 4L2.66634 -2.33127e-07Z" fill="#23A638"/>
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border-lgray border-r overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/cro.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black  text-[10px] font-semibold">CRO/USDT</li>
                    <li class="flex items-center">
                        <span class="text-black font-normal text-xs mr-1">11,631.25</span>
                        <span class="text-[#23A638] font-normal text-[10px] flex items-center gap-1">+4.25 % <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66634 -2.33127e-07L5.33301 4L-0.000325203 4L2.66634 -2.33127e-07Z" fill="#23A638"/>
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border-lgray border-r overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/sol.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-[10px] font-semibold">SOL/USDT</li>
                    <li class="flex items-center">
                        <span class="text-black font-normal text-xs mr-1">1,631.25</span>
                        <span class="text-[#23A638] font-normal text-[10px] flex items-center gap-1">+4.25 % <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66634 -2.33127e-07L5.33301 4L-0.000325203 4L2.66634 -2.33127e-07Z" fill="#23A638"/>
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border-lgray border-r overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/aca.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-[10px] font-semibold">ACA/USDT</li>
                    <li class="flex items-center">
                        <span class="text-black font-normal text-xs mr-1">1,631.25</span>
                        <span class="text-[#23A638] font-normal text-[10px] flex items-center gap-1">+4.25 % <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66634 -2.33127e-07L5.33301 4L-0.000325203 4L2.66634 -2.33127e-07Z" fill="#23A638"/>
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border-lgray border-r overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/nch.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-[10px] font-semibold">1NCHUSDT</li>
                    <li class="flex items-center">
                        <span class="text-black font-normal text-xs mr-1">1,631.25</span>
                        <span class="text-[#23A638] font-normal text-[10px] flex items-center gap-1">+4.25 % <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66634 -2.33127e-07L5.33301 4L-0.000325203 4L2.66634 -2.33127e-07Z" fill="#23A638"/>
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border-lgray border-r overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/ach.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-[10px] font-semibold">ACH/USDT</li>
                    <li class="flex items-center">
                        <span class="text-black font-normal text-xs mr-1">1,631.25</span>
                        <span class="text-[#23A638] font-normal text-[10px] flex items-center gap-1">+4.25 % <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66634 -2.33127e-07L5.33301 4L-0.000325203 4L2.66634 -2.33127e-07Z" fill="#23A638"/>
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
    </swiper>
        
    </div>
        </div>
</template>