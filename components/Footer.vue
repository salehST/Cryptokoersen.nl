<script>
export default {
mounted() {
// go to top start*//
    
        const showOnPx = 100;
        const backToTopButton = document.querySelector(".back-to-top");


const scrollContainer = () => {
  return document.documentElement || document.body;
};



document.addEventListener("scroll", () => {

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hide");
  } else {
    backToTopButton.classList.add("hide");
  }
});


},
methods:{
   goToTop() {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
},
}
};
</script>

<template>
    <!-- footer start -->
    <footer class="p-4 md:p-9 bg-white mt-6">
        <div class="container mx-auto max-w-screen-xl">
            <div class="flex md:flex-row justify-center md:justify-between flex-col">
                <div class="mb-6 md:mb-0 md:basis-1/3 basis-full mx-auto md:mx-0 w-full text-center md:text-left">
                    <NuxtLink to="/" class="flex justify-center md:justify-start mb-2.5 items-center md:text-left">
                        <img src="@/assets/img/logo.svg" class="w-[192px] h-[36px] mx-auto md:mx-0" alt="logo" />
                    </NuxtLink>
                    <p class=" mb-6 text-sm font-normal leading-5 text-secondary sm:pr-9">
                        We store the vast majority of the digital assets in secure offline storage
                    </p>
                    <ul class="flex items-center justify-center md:justify-start gap-4">
                        <li>
                            <a href="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z" fill="#2B313B"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 1.5C15.4 1.8 14.8 1.9 14.1 2C14.8 1.6 15.3 1 15.5 0.2C14.9 0.6 14.2 0.8 13.4 1C12.8 0.4 11.9 0 11 0C8.9 0 7.3 2 7.8 4C5.1 3.9 2.7 2.6 1 0.6C0.1 2.1 0.6 4 2 5C1.5 5 1 4.8 0.5 4.6C0.5 6.1 1.6 7.5 3.1 7.9C2.6 8 2.1 8.1 1.6 8C2 9.3 3.2 10.3 4.7 10.3C3.5 11.2 1.7 11.7 0 11.5C1.5 12.4 3.2 13 5 13C11.1 13 14.5 7.9 14.3 3.2C15 2.8 15.6 2.2 16 1.5Z" fill="#2B313B"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.77503 1.44578C10.8955 1.44578 11.1847 1.44578 12.0521 1.44578C12.7039 1.44578 13.0802 1.58352 13.3557 1.68436C13.4061 1.70281 13.4532 1.72003 13.4979 1.73494C13.5784 1.77517 13.6547 1.81121 13.7276 1.84567C14.0042 1.97634 14.233 2.08445 14.4618 2.31325C14.7509 2.60241 14.9437 2.89157 15.0401 3.27711C15.1365 3.56627 15.2329 3.95181 15.3292 4.72289C15.3292 5.59036 15.3292 5.78313 15.3292 8C15.3292 10.2169 15.3292 10.4096 15.3292 11.2771C15.3292 11.9289 15.1915 12.3052 15.0907 12.5807C15.0722 12.6311 15.055 12.6782 15.0401 12.7229C14.9999 12.8034 14.9638 12.8796 14.9294 12.9526C14.7987 13.2291 14.6906 13.4579 14.4618 13.6867C14.1726 13.9759 13.8835 14.1687 13.4979 14.2651C13.2088 14.3614 12.8232 14.4578 12.0521 14.5542C11.1847 14.5542 10.9919 14.5542 8.77503 14.5542C6.55816 14.5542 6.36539 14.5542 5.49792 14.5542C4.84611 14.5542 4.4698 14.4165 4.19432 14.3156C4.1439 14.2972 4.09686 14.28 4.05213 14.2651C3.97167 14.2248 3.8954 14.1888 3.82246 14.1543C3.54589 14.0237 3.31709 13.9156 3.08828 13.6867C2.79912 13.3976 2.60635 13.1084 2.50996 12.7229C2.41358 12.4337 2.31719 12.0482 2.22081 11.2771C2.22081 10.4096 2.22081 10.2169 2.22081 8C2.22081 5.78313 2.22081 5.59036 2.22081 4.72289C2.22081 4.0711 2.35855 3.69478 2.45938 3.4193C2.47784 3.36888 2.49505 3.32184 2.50996 3.27711C2.5502 3.19664 2.58623 3.12037 2.6207 3.04743C2.75137 2.77087 2.85947 2.54206 3.08828 2.31325C3.37743 2.0241 3.66659 1.83133 4.05213 1.73494C4.34129 1.63855 4.72683 1.54217 5.49792 1.44578C6.36539 1.44578 6.65454 1.44578 8.77503 1.44578ZM8.77503 0C6.55816 0 6.36539 0 5.49792 0C4.63045 0 4.05213 0.192771 3.57021 0.385543C3.08828 0.578314 2.60635 0.86747 2.12442 1.3494C1.64249 1.83133 1.44972 2.21687 1.16057 2.79518C0.967796 3.27711 0.87141 3.85542 0.775024 4.72289C0.775024 5.59036 0.775024 5.87952 0.775024 8C0.775024 10.2169 0.775024 10.4096 0.775024 11.2771C0.775024 12.1446 0.967796 12.7229 1.16057 13.2048C1.35334 13.6867 1.64249 14.1687 2.12442 14.6506C2.60635 15.1325 2.99189 15.3253 3.57021 15.6145C4.05213 15.8072 4.63045 15.9036 5.49792 16C6.36539 16 6.65454 16 8.77503 16C10.8955 16 11.1847 16 12.0521 16C12.9196 16 13.4979 15.8072 13.9798 15.6145C14.4618 15.4217 14.9437 15.1325 15.4256 14.6506C15.9076 14.1687 16.1003 13.7831 16.3895 13.2048C16.5823 12.7229 16.6786 12.1446 16.775 11.2771C16.775 10.4096 16.775 10.1205 16.775 8C16.775 5.87952 16.775 5.59036 16.775 4.72289C16.775 3.85542 16.5823 3.27711 16.3895 2.79518C16.1967 2.31325 15.9076 1.83133 15.4256 1.3494C14.9437 0.86747 14.5582 0.674699 13.9798 0.385543C13.4979 0.192771 12.9196 0.0963856 12.0521 0C11.1847 0 10.9919 0 8.77503 0Z" fill="#2B313B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77503 1.44578H12.0521C12.7039 1.44578 13.0802 1.58352 13.3557 1.68436C13.4061 1.70281 13.4532 1.72003 13.4979 1.73494C13.5784 1.77517 13.6547 1.81121 13.7276 1.84567C14.0042 1.97634 14.233 2.08445 14.4618 2.31325C14.7509 2.60241 14.9437 2.89157 15.0401 3.27711C15.1365 3.56627 15.2329 3.95181 15.3292 4.72289V8V11.2771C15.3292 11.9289 15.1915 12.3052 15.0907 12.5807C15.0722 12.6311 15.055 12.6782 15.0401 12.7229C14.9999 12.8034 14.9638 12.8796 14.9294 12.9526C14.7987 13.2291 14.6906 13.4579 14.4618 13.6867C14.1726 13.9759 13.8835 14.1687 13.4979 14.2651C13.2088 14.3614 12.8232 14.4578 12.0521 14.5542H8.77503H5.49792C4.84611 14.5542 4.4698 14.4165 4.19432 14.3156C4.1439 14.2972 4.09686 14.28 4.05213 14.2651C3.97167 14.2248 3.8954 14.1888 3.82246 14.1543C3.54589 14.0237 3.31709 13.9156 3.08828 13.6867C2.79912 13.3976 2.60635 13.1084 2.50996 12.7229C2.41358 12.4337 2.31719 12.0482 2.22081 11.2771V8V4.72289C2.22081 4.0711 2.35855 3.69478 2.45938 3.4193C2.47784 3.36888 2.49505 3.32184 2.50996 3.27711C2.5502 3.19664 2.58623 3.12037 2.6207 3.04743C2.75137 2.77087 2.85947 2.54206 3.08828 2.31325C3.37743 2.0241 3.66659 1.83133 4.05213 1.73494C4.34129 1.63855 4.72683 1.54217 5.49792 1.44578H8.77503ZM4.63045 8C4.63045 5.68675 6.46177 3.85542 8.77503 3.85542C11.0883 3.85542 12.9196 5.68675 12.9196 8C12.9196 10.3133 11.0883 12.1446 8.77503 12.1446C6.46177 12.1446 4.63045 10.3133 4.63045 8ZM13.9798 3.75904C13.9798 4.29136 13.5483 4.72289 13.016 4.72289C12.4837 4.72289 12.0521 4.29136 12.0521 3.75904C12.0521 3.22671 12.4837 2.79518 13.016 2.79518C13.5483 2.79518 13.9798 3.22671 13.9798 3.75904Z" fill="#2B313B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77503 1.44578H12.0521C12.7039 1.44578 13.0802 1.58352 13.3557 1.68436C13.4061 1.70281 13.4532 1.72003 13.4979 1.73494C13.5784 1.77517 13.6547 1.81121 13.7276 1.84567C14.0042 1.97634 14.233 2.08445 14.4618 2.31325C14.7509 2.60241 14.9437 2.89157 15.0401 3.27711C15.1365 3.56627 15.2329 3.95181 15.3292 4.72289V8V11.2771C15.3292 11.9289 15.1915 12.3052 15.0907 12.5807C15.0722 12.6311 15.055 12.6782 15.0401 12.7229C14.9999 12.8034 14.9638 12.8796 14.9294 12.9526C14.7987 13.2291 14.6906 13.4579 14.4618 13.6867C14.1726 13.9759 13.8835 14.1687 13.4979 14.2651C13.2088 14.3614 12.8232 14.4578 12.0521 14.5542H8.77503H5.49792C4.84611 14.5542 4.4698 14.4165 4.19432 14.3156C4.1439 14.2972 4.09686 14.28 4.05213 14.2651C3.97167 14.2248 3.8954 14.1888 3.82246 14.1543C3.54589 14.0237 3.31709 13.9156 3.08828 13.6867C2.79912 13.3976 2.60635 13.1084 2.50996 12.7229C2.41358 12.4337 2.31719 12.0482 2.22081 11.2771V8V4.72289C2.22081 4.0711 2.35855 3.69478 2.45938 3.4193C2.47784 3.36888 2.49505 3.32184 2.50996 3.27711C2.5502 3.19664 2.58623 3.12037 2.6207 3.04743C2.75137 2.77087 2.85947 2.54206 3.08828 2.31325C3.37743 2.0241 3.66659 1.83133 4.05213 1.73494C4.34129 1.63855 4.72683 1.54217 5.49792 1.44578H8.77503ZM8.77503 0H5.49792C4.63045 0 4.05213 0.192771 3.57021 0.385543C3.08828 0.578314 2.60635 0.86747 2.12442 1.3494C1.64249 1.83133 1.44972 2.21687 1.16057 2.79518C0.967796 3.27711 0.87141 3.85542 0.775024 4.72289V8V11.2771C0.775024 12.1446 0.967796 12.7229 1.16057 13.2048C1.35334 13.6867 1.64249 14.1687 2.12442 14.6506C2.60635 15.1325 2.99189 15.3253 3.57021 15.6145C4.05213 15.8072 4.63045 15.9036 5.49792 16H8.77503H12.0521C12.9196 16 13.4979 15.8072 13.9798 15.6145C14.4618 15.4217 14.9437 15.1325 15.4256 14.6506C15.9076 14.1687 16.1003 13.7831 16.3895 13.2048C16.5823 12.7229 16.6786 12.1446 16.775 11.2771V8V4.72289C16.775 3.85542 16.5823 3.27711 16.3895 2.79518C16.1967 2.31325 15.9076 1.83133 15.4256 1.3494C14.9437 0.86747 14.5582 0.674699 13.9798 0.385543C13.4979 0.192771 12.9196 0.0963856 12.0521 0H8.77503ZM6.07623 8C6.07623 9.54217 7.32924 10.6988 8.77503 10.6988C10.2208 10.6988 11.4738 9.44578 11.4738 8C11.4738 6.45783 10.2208 5.3012 8.77503 5.3012C7.23286 5.3012 6.07623 6.55422 6.07623 8Z" fill="#2B313B"/>
</svg>

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6 1.7C15.4 1 14.9 0.5 14.2 0.3C13 1.78814e-07 7.89999 0 7.89999 0C7.89999 0 2.90001 1.78814e-07 1.60001 0.3C0.900006 0.5 0.399997 1 0.199997 1.7C-3.05474e-06 3 0 5.6 0 5.6C0 5.6 3.03984e-06 8.2 0.300003 9.5C0.500003 10.2 0.999997 10.7 1.7 10.9C2.9 11.2 8 11.2 8 11.2C8 11.2 13 11.2 14.3 10.9C15 10.7 15.5 10.2 15.7 9.5C16 8.2 16 5.6 16 5.6C16 5.6 16 3 15.6 1.7ZM6.39999 8V3.2L10.6 5.6L6.39999 8Z" fill="#2B313B"/>
</svg>

                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    class="mb-6 md:mb-0 grid grid-cols-2 gap-8 mx-auto sm:justify-between sm:flex sm:basis-1/2 md:basis-3/4 sm:flex-wrap ">
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-primary ">General</h2>
                        <ul class="text-sm font-normal leading-5 text-secondary">
                            <li class="mb-4">
                                <NuxtLink to="/" class="">Home</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/exchange" class="">Exchange</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Prices</a>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/knowlegebase" class="">Knowledge Base</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/news" class="">News</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-primary ">Learn</h2>
                        <ul class="text-sm font-normal leading-5 text-secondary">
                            <li class="mb-4">
                                <a href="#" class=" ">Ethereum Merge</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class=" ">Browse crypto prices</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Crypto basics</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Tips & tutorials</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">What is Bitcoin?</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-primary ">Businesses</h2>
                        <ul class="text-sm font-normal leading-5 text-secondary">
                            <li class="mb-4">
                                <NuxtLink to="/">Institutional</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/">Prime</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Asset Hub</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Commerce</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-primary ">Company</h2>
                        <ul class="text-sm font-normal leading-5 text-secondary">
                            <li class="mb-4">
                                <NuxtLink to="/">Portfolio</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/">Compare</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">BTC Block explorer</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">BTC Mempool</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">ETH Block explorer</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-primary ">Legal</h2>
                        <ul class="text-sm font-normal leading-5 text-secondary">
                            <li class="mb-4">
                                <NuxtLink to="/">Terms & Conditions</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/">Privacy Policy</NuxtLink>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Cookie Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Risk Disclosure</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Trading Rules</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div class="flex items-center justify-center sm:justify-between">
                <span class="font-semibold text-primary  sm:text-center">© 2023 Cryptokoersen. NL All rights reserved
                </span>
            </div>
        </div>
    </footer>
    <!-- footer- end -->
    <!-- go to top -->

<button class="back-to-top hide" @click="goToTop" >
  <svg xmlns="http://www.w3.org/2000/svg" class="back-to-top-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
  </svg>
</button>

 <!-- go to top end -->
</template>