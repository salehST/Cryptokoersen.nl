<style>
.latest-news .overlay-c:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(360deg, #002128 0%, rgba(0, 50, 61, 0.00) 100%);
    z-index: 1;
}
.latest-news .overlay-c{
    position: relative;
}
</style>
<template>
    <section class="w-full bg-white p-10 md:p-12 md:pt-16">
        <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
            <div class="text-content text-center w-full mt-10  mb-24">
                    <h1 class=" text-[32px] md:text-[64px] text-primary font-bold leading-8 md:leading-[64px] mb-6">Latest Articles</h1>
                    <p class="text-base font-normal mb-8 text-secondary">New to the crypto world? Learn the fundamentals with these 14 articles.</p>
                </div>
            <div class="k-articles mb-6 latest-news flex flex-col lg:flex-row items-center justify-between gap-8">
                <div class="w-full md:w-3/5 lg:w-[743px]">
                    <div class="overlay-c h-[362px] w-full lg:w-[743px] relative overflow-hidden rounded-[15px] ">                       
                                    <span class="fixed-size overflow-hidden h-[362px] w-[96vw] md:w-[60vw] lg:w-[668px] rounded-[15px]">
                                        <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/01.jpg" alt="icon">
                                    </span>
                                    <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[362px]">
                                        <div class="flex items-center justify-between">
                                            <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                <a href="#">
                                                    <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">METAVERSE</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottom-content text-left flex flex-col mt-14">
                                                <h2 class="text-2xl md:text-[32px] font-bold text-white w-[290px] sm:w-[488px] leading-9 mb-3">What is the difference between fiat money and cryptocurrency?</h2>
                                            
                                        <div class="mt-6">
                                            
                                        <div class="text-white font-normal text-sm "><span class="flex items-center gap-2 ">September 09, 2022 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="white"/>
                                        </svg>
                                        5 min Read</span></div>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                </div>
                <div class="w-full md:w-2/5 lg:w-[425px]">
                    <div class="overlay-c h-[362px] w-full lg:w-[425px] relative overflow-hidden rounded-[15px] ">                       
                                    <span class="fixed-size overflow-hidden h-[362px] w-full md:w-2/5 lg:w-[425px] rounded-[15px]">
                                        <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/02.jpg" alt="icon">
                                    </span>
                                    <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[362px]">
                                        <div class="flex items-center justify-between">
                                            <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                <a href="#">
                                                    <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">CRYPTO</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottom-content text-left flex flex-col mt-14">
                                                <h2 class="text-2xl md:text-[32px] font-bold text-white w-[290px] sm:w-[488px] leading-9 mb-3">How do I start trading Cryptocurrency?</h2>
                                            
                                        <div class="mt-6">
                                            
                                        <div class="text-white font-normal text-sm "><span class="flex items-center gap-2 ">September 09, 2022 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="white"/>
                                        </svg>
                                        5 min Read</span></div>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>
            <div class="k-articles mb-6 latest-news table-auto overflow-x-auto">
                <div class="flex flex-row items-center">
                    <div class="com-lists flex flex-row gap-7">
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/03.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">NFT</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What is money and what forms exist?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/04.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">NFT</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What are public and private keys?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/05.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">METAVERSE</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What are ICOs, IEOs and fair launches?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/06.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">CRYPTO</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What is an Automated Market Maker (AMM)?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="k-articles mb-6 latest-news table-auto overflow-x-auto">
                <div class="flex flex-row items-center">
                    <div class="com-lists flex flex-row gap-7">
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/03.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">NFT</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What is money and what forms exist?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/04.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">NFT</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What are public and private keys?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/05.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">METAVERSE</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What are ICOs, IEOs and fair launches?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/06.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">CRYPTO</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What is an Automated Market Maker (AMM)?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="k-articles mb-6 latest-news table-auto overflow-x-auto">
                <div class="flex flex-row items-center">
                    <div class="com-lists flex flex-row gap-7">
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/03.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">NFT</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What is money and what forms exist?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/04.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">NFT</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What are public and private keys?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/05.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">METAVERSE</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What are ICOs, IEOs and fair launches?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div class="w-[277px] h-[370px] rounded-md overflow-hidden">
                            <div class="overlay-c h-[370px] w-[277px] relative overflow-hidden rounded-[15px] ">                       
                                        <span class="fixed-size overflow-hidden h-[370px] w-[277px] rounded-[15px]">
                                            <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/06.jpg" alt="icon">
                                        </span>
                                        <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[370px]">
                                            <div class="flex items-center justify-between mb-20">
                                                <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#">
                                                        <span class="w-fit bg-[#FB9245] text-white text-xs font-normal mr-1 px-2.5 py-1.5 rounded-full whitespace-nowrap">CRYPTO</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="bottom-content text-left flex flex-col mt-24">
                                                    <h4 class="text-base font-semibold text-white w-[228px] leading-5 mb-3">What is an Automated Market Maker (AMM)?</h4>
                                                
                                            <div class="mt-2">
                                                
                                            <div class="text-white font-normal text-xs ">September 09, 2022 </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>