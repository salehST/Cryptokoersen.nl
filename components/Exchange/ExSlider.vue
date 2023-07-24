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
.news-inner .swiper-pagination {
    top: 0;
    text-align: right;
    bottom: auto;
}

.news-inner .swiper-wrapper {
    padding: 30px 0 0;
}

.news-inner span.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #0051FF;
}

.news-inner .swiper-pagination-bullet {
    height: 6px;
    width: 6px;
}

.news-inner .swiper-pagination-bullet.swiper-pagination-bullet-active:after {
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

.news-inner .swiper-pagination-bullet.swiper-pagination-bullet-active {
    position: relative;
}
</style>
<template>
    <section class="bg-white w-full p-10 md:p-12">
        <div class="container mx-auto max-w-screen-xl page-heading news-inner">  <!-- container start -->
            <swiper class=""     
                :breakpoints="{
      '300': {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    }" 
    :modules="modules"
    :slides-per-view="4"
    :space-between="16"    
    autoplay
    :pagination="pagination"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  <swiper-slide>
    <div class="single-news">
        <div class="inner-part">
            <div class="product-img h-[150px] w-full overflow-hidden">
                <img class="object-cover w-full rounded-t-lg h-full mx-auto"
                    src="@/assets/img/news/exchange/001.jpg" alt="image">
            </div>
            <div class="flex items-center justify-between my-2">
                <span class=" text-cblue text-xs font-semibold">Crypto News</span>
                <span class="flex items-center text-secondary text-xs font-normal">
                    <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                    </svg>
                5 Min Read</span>
            </div>
            <h4 class=" text-base text-primary font-semibold">NBA Partners with Sorare for NFT-Based Basketball Fantasy Game</h4>
        </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="single-news">
        <div class="inner-part">
            <div class="product-img h-[150px] w-full rounded-md overflow-hidden">
                <img class="object-cover w-full h-full mx-auto"
                    src="@/assets/img/news/exchange/002.jpg" alt="image">
            </div>
            <div class="flex items-center justify-between my-2">
                <span class=" text-cblue text-xs font-semibold">NFT Token News</span>
                <span class="flex items-center text-secondary text-xs font-normal">
                    <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                    </svg>
                5 Min Read</span>
            </div>
            <h4 class=" text-base text-primary font-semibold">Crypto Rally: Bitcoin, Altcoins Bounce Back, How High Can</h4>
        </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="single-news">
        <div class="inner-part">
            <div class="product-img h-[150px] w-full rounded-md overflow-hidden">
                <img class="object-cover w-full h-full mx-auto"
                    src="@/assets/img/news/exchange/003.jpg" alt="image">
            </div>
            <div class="flex items-center justify-between my-2">
                <span class=" text-cblue text-xs font-semibold">Metaverse News</span>
                <span class="flex items-center text-secondary text-xs font-normal">
                    <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                    </svg>
                5 Min Read</span>
            </div>
            <h4 class=" text-base text-primary font-semibold">Breaking: Terra Classic (LUNC) Price Reaches $0.0005 Target.</h4>
        </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="single-news">
        <div class="inner-part">
            <div class="product-img h-[150px] w-full rounded-md overflow-hidden">
                <img class="object-cover w-full h-full mx-auto"
                    src="@/assets/img/news/exchange/004.jpg" alt="image">
            </div>
            <div class="flex items-center justify-between my-2">
                <span class=" text-cblue text-xs font-semibold">Learn & Earn</span>
                <span class="flex items-center text-secondary text-xs font-normal">
                    <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                    </svg>
                5 Min Read</span>
            </div>
            <h4 class=" text-base text-primary font-semibold">Apeiron NFT god Game Unveils own Marketplace.</h4>
        </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="single-news">
        <div class="inner-part">
            <div class="product-img h-[150px] w-full overflow-hidden">
                <img class="object-cover w-full rounded-t-lg h-full mx-auto"
                    src="@/assets/img/news/exchange/001.jpg" alt="image">
            </div>
            <div class="flex items-center justify-between my-2">
                <span class=" text-cblue text-xs font-semibold">Crypto News</span>
                <span class="flex items-center text-secondary text-xs font-normal">
                    <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                    </svg>
                5 Min Read</span>
            </div>
            <h4 class=" text-base text-primary font-semibold">NBA Partners with Sorare for NFT-Based Basketball Fantasy Game</h4>
        </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="single-news">
        <div class="inner-part">
            <div class="product-img h-[150px] w-full rounded-md overflow-hidden">
                <img class="object-cover w-full h-full mx-auto"
                    src="@/assets/img/news/exchange/002.jpg" alt="image">
            </div>
            <div class="flex items-center justify-between my-2">
                <span class=" text-cblue text-xs font-semibold">NFT Token News</span>
                <span class="flex items-center text-secondary text-xs font-normal">
                    <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                    </svg>
                5 Min Read</span>
            </div>
            <h4 class=" text-base text-primary font-semibold">Crypto Rally: Bitcoin, Altcoins Bounce Back, How High Can</h4>
        </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="single-news">
        <div class="inner-part">
            <div class="product-img h-[150px] w-full rounded-md overflow-hidden">
                <img class="object-cover w-full h-full mx-auto"
                    src="@/assets/img/news/exchange/003.jpg" alt="image">
            </div>
            <div class="flex items-center justify-between my-2">
                <span class=" text-cblue text-xs font-semibold">Metaverse News</span>
                <span class="flex items-center text-secondary text-xs font-normal">
                    <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                    </svg>
                5 Min Read</span>
            </div>
            <h4 class=" text-base text-primary font-semibold">Breaking: Terra Classic (LUNC) Price Reaches $0.0005 Target.</h4>
        </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="single-news">
        <div class="inner-part">
            <div class="product-img h-[150px] w-full rounded-md overflow-hidden">
                <img class="object-cover w-full h-full mx-auto"
                    src="@/assets/img/news/exchange/004.jpg" alt="image">
            </div>
            <div class="flex items-center justify-between my-2">
                <span class=" text-cblue text-xs font-semibold">Learn & Earn</span>
                <span class="flex items-center text-secondary text-xs font-normal">
                    <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                    </svg>
                5 Min Read</span>
            </div>
            <h4 class=" text-base text-primary font-semibold">Apeiron NFT god Game Unveils own Marketplace.</h4>
        </div>
    </div>
  </swiper-slide>
  </swiper>
        </div>
    </section>
</template>