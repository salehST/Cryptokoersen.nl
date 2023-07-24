<template>
    <section class="bg-lblue w-full px-10 md:px-12">
        <div class="container mx-auto max-w-screen-xl page-heading">  <!-- container start -->
            <div class="flex flex-col gap-8 md:flex-row justify-around items-center overflow-hidden">
                <div class="w-full md:w-1/2 mobile-app-img relative flex order-2 md:order-1 justify-end">
                    <img src="@/assets/img/mobile-app.png" alt="">
                </div>
                <div class="flex flex-col order-1 md:order-2 w-full mb-[150px] md:mb-0 md:w-1/2 py-[80px]">
                    <h2 class=" text-cblue font-normal text-base mb-4">Free Mobile Apps</h2>
                    <h3 class=" text-primary font-bold text-[32px] mb-4">Find the best way in Popular Exchange</h3>
                    <p class=" text-secondary font-normal text-base mb-4">We have only found familiar online cryptocurrency exchanges that are active in the Netherlands, including Bitvavo, Etoro and Bitpanda.</p>
                        <p class=" text-secondary font-normal text-base mb-4">    
                    We have only found familiar online cryptocurrency exchanges that are active.</p>

                    <a href="" class="group text-cblue font-bold bg-transparent inline-flex items-center justify-center border border-[#0051FF] py-2 px-6 transition hover:bg-cblue hover:text-white rounded-md">Find the way <svg class="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" class="group-hover:fill-white" clip-rule="evenodd" d="M10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L18.2071 9.29289C18.5976 9.68342 18.5976 10.3166 18.2071 10.7071L12.2071 16.7071C11.8166 17.0976 11.1834 17.0976 10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929L15.0858 11L3.5 11C2.94772 11 2.5 10.5523 2.5 10C2.5 9.44772 2.94772 9 3.5 9H15.0858L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289Z" fill="#0051FF"></path>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
</template>
<style scoped>
.mobile-app-img img {
    position: absolute;
    top: -190px;
    left: 0;
}
</style>