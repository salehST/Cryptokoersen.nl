<script>
export default {
mounted() {

/* custom selectors News Start */

let index = 1;

const on = (listener, query, fn) => {
    document.querySelectorAll(query).forEach(item => {
        item.addEventListener(listener, el => {
            fn(el);
        })
    })
}

on('click', '.selectBtn', item => {
    item.target.classList.toggle('toggle');
    const next = item.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index++;
});

document.addEventListener('mouseup', function (e) {

    const containers = document.querySelectorAll('.selectBtn');
    if (containers.length > 0) {
        const options = document.querySelectorAll('.selectDropdown');
        containers.forEach(function (container, index) {
            if (!container.contains(e.target)) {
                container.classList.remove('toggle');
                options[index].classList.remove('toggle');
            }
        });

    }
});
on('click', '.option', item => {
    item.target.parentElement.classList.remove('toggle');
    const parent = item.target.closest('.select').children[0];
    parent.setAttribute('data-type', item.target.getAttribute('data-type'));
    parent.innerText = item.target.innerText;
})
/* custom selectors News End */
},

};
</script>
<template>
    <section class="w-full bg-white p-10 md:p-12 md:pt-16">
        <div class="container mx-auto max-w-screen-xl">
            <!-- container start -->
            <NewsCarousal />
        </div>
    </section>
    <section class="w-full bg-white p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
        <div class="blog-news-slider flex gap-6 flex-col lg:flex-row items-stretch justify-between">
            <div class=" w-full lg:w-[743px]">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <h1 class=" text-[32px] text-black font-semibold">News</h1>
                    <div class="flex w-full md:w-auto flex-col md:flex-row mb-4">
                    <div class="w-full lg:w-auto mb-4 md:mb-0">
                        <form action="" class="text-left w-full md:w-40 mx-auto md:mx-0">
                            <div class="w-full md:w-40">
                                <div class="no-label w-full md:w-40 mx-auto md:mx-0">
                                    <div class="select bg-white rounded-lg" id="">
                                        <div class="selectBtn" data-type="firstOption">All </div>
                                        <div class="selectDropdown">
                                            <div class="option" data-value="all" data-type="firstOption">All</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Investing</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Mining</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Trading</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Exchanges
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="search-wrapper w-full  flex mb-8">
                    <div
                        class="search-inner flex md:hidden w-full  relative bg-white border border-lgray rounded-full p-[7px]">
                        <form action="" class=" flex items-center w-full">
                            <span class="pr-3 pl-1">
                                <svg class=" inline-flex w-auto" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                                        fill="black" />
                                </svg>
                            </span>
                            <input type="text"
                                class="hidden md:flex text-secondary font-normal focus:outline-none active:outline-none w-full hover:outline-none text-sm bg-transparent"
                                placeholder="Search Assets">
                            <input type="text"
                                class="flex md:hidden text-secondary font-normal focus:outline-none active:outline-none w-full hover:outline-none text-sm bg-transparent"
                                placeholder="Search">
                            
                        </form>
                    </div>
                </div>
                </div>
                </div>
                
                <NewsTopSlider />

                <NewsOtherNews />
            </div>
                <div class="w-full lg:w-[425px]">
                    
                    <NewsSideBar />
                </div>
        </div>

        </div>
    </section>
</template>