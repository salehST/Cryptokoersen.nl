<script>

export default {
    data() {
    return {
      isModalOpen: false,
      showDiv1: true,
      showDiv2: false,
      password: '',
      showPassword: false,
      checked: false,
      password2: '',
      showPassword2: false,
      checked2: false,
    };
  },
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
    methods: {
    toggleChecked() {
      this.checked = !this.checked;
    },
    toggleChecked2() {
      this.checked2 = !this.checked2;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    toggleDiv1() {
      this.showDiv1 = !this.showDiv1;
      if (this.showDiv1 && this.showDiv2) {
        this.showDiv2 = false;
      }
    },
    toggleDiv2() {
      this.showDiv2 = !this.showDiv2;
      if (this.showDiv2 && this.showDiv1) {
        this.showDiv1 = false;
      }
    },
        toggleClass() {
    let button = document.querySelector('#nav-icon');
    let nav = document.querySelector('nav');
    button.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
},
        goBack() {
            const backBtn = document.querySelector('.back-ul');

            backBtn.classList.add("opacity-0");
            backBtn.classList.add("hidden");
        },
        showSubMenu() {
            const backBtn = document.querySelector('.back-ul');

            backBtn.classList.remove("opacity-0");
            backBtn.classList.remove("hidden");
        }
    }

}

</script>
<style>
.modal-lg {
    z-index: 91;
}
.modal {
  width: 508px;
  max-width: 90%;
}
.mega-menu-full-dropdown-button li.menu-item:hover button svg path {
    fill: unset;
}

.mega-menu-full-dropdown-button li.menu-item:hover button svg {
    margin-right: 5px;
    display: block;
}
.header-lang .select .selectBtn.filter-icon {
    border: none;
}
.form-toggles-slider {
  transition: background-color 0.2s;
}

.form-toggles-knob {
  transition: transform 0.2s;
}
.header-cu .selectBtn {
    border: none;
    width: 65px;
}
</style>
<template>
    <!-- header start -->
    <header class="">

        <div class="w-full z-40 absolute md:relative text-[#2B313B] bg-white border-b border-[#F5F8FF]">
            <div class="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-0 ">
                <div class="py-4 flex flex-row items-center justify-between">
                    <NuxtLink to="/" class="flex md:hidden items-center w-40"><img src="@/assets/img/logo.svg"
                            class="mr-3 h-[36px]" alt="Logo" /></NuxtLink>
                    <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                        <div id="nav-icon" @click="toggleClass">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <nav class="flex-col flex-grow items-center pb-4 md:pb-0 hidden md:flex md:justify-between md:flex-row">
                    <NuxtLink to="/" class="hidden md:flex items-center w-40"><img src="@/assets/img/logo.svg"
                            class="mr-3 h-[36px]" alt="Logo" /></NuxtLink>
                    <div class="search-area py-2 mx-2 text-sm font-semibold text-[#0052fe] flex flex-col md:flex-row items-start w-full md:w-auto md:items-center justify-start md:justify-center bg-white hover:text-blue-500 ">
                        
                        <NuxtLink to="/" class="text-base md:text-sm font-semibold py-5 px-5 text-black transition hover:text-cblue w-full md:w-auto">Home</NuxtLink>                        
                        <NuxtLink to="/exchange"
                            class="text-base md:text-sm font-semibold border-b border-[#DEE4F1] md:border-none py-5 px-5 text-black w-full md:w-auto transition hover:text-cblue">Exchange</NuxtLink>
                        <a href=""
                            class="text-base md:text-sm font-semibold border-b border-[#DEE4F1] md:border-none py-5 px-5 text-black w-full md:w-auto transition hover:text-cblue">Prices</a>
                        <NuxtLink to="/knowledge-base"
                            class="text-base md:text-sm font-semibold border-b border-[#DEE4F1] md:border-none py-5 px-5 text-black w-full md:w-auto transition hover:text-cblue">Knowledge
                            Base</NuxtLink>
                        <NuxtLink to="/news"
                            class="text-base md:text-sm font-semibold border-b border-[#DEE4F1] md:border-none py-5 px-5 text-black w-full md:w-auto transition hover:text-cblue">News</NuxtLink>                       
                </div>
                <div class="btn-area flex items-center gap-1.5">
                    <button type="button" @click="openModal" class=" text-sm font-bold text-cblue px-4 py-2.5 bg-white rounded hover:bg-gray-100 transition">Log in</button> <button type="button" @click="openModal" class=" text-sm font-bold text-white bg-cblue py-2.5 px-4 rounded opacity-100 transition hover:opacity-90">Sign up</button>

                    <div class="flex items-center gap-4 justify-between">
                        
                        <div class="w-auto header-cu">
                            <form action="" class="text-left w-[65px]">
                                <div class="">
                                    <div class="no-label w-[65px]">
                                        <div class="select" id="">
                                            <div class="selectBtn" data-type="firstOption">USD </div>
                                            <div class="selectDropdown">
                                                <div class="option" data-value="all" data-type="firstOption">
                                                    USD</div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    EUR
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <a href="">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99846 1.60001C5.34749 1.60001 3.19846 3.74904 3.19846 6.40001V9.26864L2.63278 9.83432C2.40398 10.0631 2.33553 10.4072 2.45936 10.7062C2.58318 11.0051 2.87489 11.2 3.19846 11.2H12.7985C13.122 11.2 13.4137 11.0051 13.5376 10.7062C13.6614 10.4072 13.5929 10.0631 13.3641 9.83432L12.7985 9.26864V6.40001C12.7985 3.74904 10.6494 1.60001 7.99846 1.60001Z" fill="#2B313B"/>
                                <path d="M7.99844 14.4C6.67295 14.4 5.59844 13.3255 5.59844 12H10.3984C10.3984 13.3255 9.32392 14.4 7.99844 14.4Z" fill="#2B313B"/>
                            </svg>
                        </a>
                        <div class="user-account-avatar">
                            <div class=" h-6 w-6 rounded-full overflow-hidden">
                                <img src="@/assets/img/user-01.jpeg" class=" object-cover w-full h-full" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

</header>


<div v-if="isModalOpen" class="modal-lg fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
  <div class="modal bg-white rounded-lg p-6">
   
    <div class="sing-in-form-area relative">
        <button @click="closeModal" class="absolute top-0 right-0 ">
      <svg class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <div class="flex items-center justify-center">
        <button @click="toggleDiv1" :class="{'border-b border-cblue !text-black' : showDiv1}" class=" border-cblue transition hover:border-cblue text-2xl font-semibold text-lgray p-3 mr-8">
            Sign in
        </button>
        <div class="border-r border-r-lblue h-8"></div>
        <button @click="toggleDiv2" :class="{'border-b border-cblue !text-black' : showDiv2}" class=" border-cblue transition hover:border-cblue text-2xl font-semibold text-lgray ml-8 p-3">
            Sign Up
        </button>
    </div>
            <div v-if="showDiv1" class=" p-4 mt-4">
            <div class="form-inner-area my-6">
                <div class="mb-2">
                    <label for="email" class=" text-primary text-ms font-normal mb-2 block">Email Address</label>
                    <input type="text" name="email" class=" border-lgray w-full tex-lgray rounded-[10px] border px-2.5 py-4 hover:outline-none focus:outline-none transition hover:border-cblue focus:border-cblu" placeholder="Type your email...">
                </div>
                <div class="mb-2">
                    <label for="password" class=" text-primary text-ms font-normal mb-2 block">Password</label>
                    <div class="relative mb-3">
                        <input v-bind:type="showPassword ? 'text' : 'password'"
      v-model="password" name="password" class=" border-lgray w-full tex-lgray rounded-[10px] border px-2.5 py-4 hover:outline-none focus:outline-none transition hover:border-cblue focus:border-cblu" placeholder="Type your password...">
                        <button  @click="showPassword = !showPassword" type="button" class=" absolute right-2.5 top-[18px]">
                           
<svg v-if="showPassword" fill="#6C7A93"  width="20" height="20" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M18.37,11.17A6.79,6.79,0,0,0,16,11.6l8.8,8.8A6.78,6.78,0,0,0,25.23,18,6.86,6.86,0,0,0,18.37,11.17Z" class="clr-i-solid clr-i-solid-path-1"></path><path d="M34.29,17.53c-3.37-6.23-9.28-10-15.82-10a16.82,16.82,0,0,0-5.24.85L14.84,10a14.78,14.78,0,0,1,3.63-.47c5.63,0,10.75,3.14,13.8,8.43a17.75,17.75,0,0,1-4.37,5.1l1.42,1.42a19.93,19.93,0,0,0,5-6l.26-.48Z" class="clr-i-solid clr-i-solid-path-2"></path><path d="M4.87,5.78l4.46,4.46a19.52,19.52,0,0,0-6.69,7.29L2.38,18l.26.48c3.37,6.23,9.28,10,15.82,10a16.93,16.93,0,0,0,7.37-1.69l5,5,1.75-1.5-26-26Zm8.3,8.3a6.85,6.85,0,0,0,9.55,9.55l1.6,1.6a14.91,14.91,0,0,1-5.86,1.2c-5.63,0-10.75-3.14-13.8-8.43a17.29,17.29,0,0,1,6.12-6.3Z" class="clr-i-solid clr-i-solid-path-3"></path>
    <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
</svg>
<svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99928 12C11.1038 12 11.9993 11.1046 11.9993 10C11.9993 8.89543 11.1038 8 9.99928 8C8.89471 8 7.99928 8.89543 7.99928 10C7.99928 11.1046 8.89471 12 9.99928 12Z" fill="#6C7A93"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.457031 10C1.73128 5.94291 5.52158 3 9.99924 3C14.4769 3 18.2671 5.94288 19.5414 9.99996C18.2672 14.0571 14.4769 17 9.99922 17C5.52159 17 1.73131 14.0571 0.457031 10ZM13.9993 10C13.9993 12.2091 12.2084 14 9.99928 14C7.79014 14 5.99928 12.2091 5.99928 10C5.99928 7.79086 7.79014 6 9.99928 6C12.2084 6 13.9993 7.79086 13.9993 10Z" fill="#6C7A93"/>
</svg>
</button>
                    </div>
                   <div class="flex items-center justify-between mb-12">
                    <div class="">
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input
                            type="checkbox"
                            class="form-toggles-toggle hidden"
                            :checked="checked"
                            @change="toggleChecked"
                            />
                            <div :class="{'bg-cblue': checked, 'bg-lgray': !checked}" class="form-toggles-slider w-4 h-[9px] rounded-full shadow-inner transition-al p-[1px]">
                                <div
                                    :class="{'translate-x-[7px] bg-lblue': checked, 'translate-x-[1px] bg-black': !checked}"
                                    class="form-toggles-knob  w-[7px] h-[7px] rounded-full shadow-md transform transition-transform"
                                >
                                </div>
                            </div>   
                            <span class="text-sm text-gray-600">{{ checked ? 'Yes' : 'Remember Me' }}
                            </span>                      
                        </label>
                    </div>
                    <a href="" class="text-cblue text-xs font-semibold">Forgot Password?</a>
                   </div>
                   <button type="button" class=" w-full py-4 px-6 text-center bg-cblue text-white text-base transition hover:bg-[#1c51b0] font-bold rounded-[10px] mb-4">Sign in</button>
                   <button type="button" class=" w-full py-4 px-6 text-center bg-transparent text-primary text-base font-semibold hover:bg-black transition hover:text-white rounded-[10px] border border-primary mb-4 flex items-center gap-2 justify-center"><span class=" w-6 h-6 rounded-md overflow-hidden"> <img src="@/assets/img/logos/busd.png" alt="" class=" object-cover w-full h-full"></span> Continue with Binance</button>
                   <button type="button" class=" w-full py-4 px-6 text-center bg-transparent text-primary text-base font-semibold hover:bg-black transition hover:text-white rounded-[10px] border border-primary mb-4 flex items-center gap-2 justify-center"><span class=" w-6 h-6 rounded-md overflow-hidden"> <img src="@/assets/img/wallet-icon.svg" alt="" class=" object-cover w-full h-full"></span> Continue with Wallet</button>
                </div>
            </div>
            </div>

            <div v-if="showDiv2" class=" p-4 mt-4">
                <div class="form-inner-area my-6">
                <div class="mb-2">
                    <label for="email2" class=" text-primary text-ms font-normal mb-2 block">Email Address</label>
                    <input type="text" name="email2" class=" border-lgray w-full text-lgray rounded-[10px] border px-2.5 py-4 hover:outline-none focus:text-primary focus:outline-none transition hover:border-cblue focus:border-cblue" placeholder="Type your email...">
                </div>
                <div class="mb-2">
                    <label for="password2" class=" text-primary text-ms font-normal mb-2 block">Password</label>
                    <div class="relative mb-3">
                        <input v-bind:type="showPassword2 ? 'text' : 'password'"
      v-model="password2" name="password2" class="focus:text-primary border-lgray w-full text-lgray rounded-[10px] border px-2.5 py-4 hover:outline-none focus:outline-none transition hover:border-cblue focus:border-cblu3" placeholder="Type your password...">
                        <button  @click="showPassword2 = !showPassword2" type="button" class=" absolute right-2.5 top-[18px]">
                           
<svg v-if="showPassword2" fill="#6C7A93"  width="20" height="20" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M18.37,11.17A6.79,6.79,0,0,0,16,11.6l8.8,8.8A6.78,6.78,0,0,0,25.23,18,6.86,6.86,0,0,0,18.37,11.17Z" class="clr-i-solid clr-i-solid-path-1"></path><path d="M34.29,17.53c-3.37-6.23-9.28-10-15.82-10a16.82,16.82,0,0,0-5.24.85L14.84,10a14.78,14.78,0,0,1,3.63-.47c5.63,0,10.75,3.14,13.8,8.43a17.75,17.75,0,0,1-4.37,5.1l1.42,1.42a19.93,19.93,0,0,0,5-6l.26-.48Z" class="clr-i-solid clr-i-solid-path-2"></path><path d="M4.87,5.78l4.46,4.46a19.52,19.52,0,0,0-6.69,7.29L2.38,18l.26.48c3.37,6.23,9.28,10,15.82,10a16.93,16.93,0,0,0,7.37-1.69l5,5,1.75-1.5-26-26Zm8.3,8.3a6.85,6.85,0,0,0,9.55,9.55l1.6,1.6a14.91,14.91,0,0,1-5.86,1.2c-5.63,0-10.75-3.14-13.8-8.43a17.29,17.29,0,0,1,6.12-6.3Z" class="clr-i-solid clr-i-solid-path-3"></path>
    <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
</svg>
<svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99928 12C11.1038 12 11.9993 11.1046 11.9993 10C11.9993 8.89543 11.1038 8 9.99928 8C8.89471 8 7.99928 8.89543 7.99928 10C7.99928 11.1046 8.89471 12 9.99928 12Z" fill="#6C7A93"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.457031 10C1.73128 5.94291 5.52158 3 9.99924 3C14.4769 3 18.2671 5.94288 19.5414 9.99996C18.2672 14.0571 14.4769 17 9.99922 17C5.52159 17 1.73131 14.0571 0.457031 10ZM13.9993 10C13.9993 12.2091 12.2084 14 9.99928 14C7.79014 14 5.99928 12.2091 5.99928 10C5.99928 7.79086 7.79014 6 9.99928 6C12.2084 6 13.9993 7.79086 13.9993 10Z" fill="#6C7A93"/>
</svg>
</button>
                    </div>
                   <div class="flex items-center justify-between mb-12">
                    <div class="">
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input
                            type="checkbox"
                            class="form-toggles-toggle hidden"
                            :checked="checked2"
                            @change="toggleChecked2"
                            />
                            <div :class="{'bg-cblue': checked2, 'bg-lgray': !checked2}" class="form-toggles-slider w-4 h-[9px] rounded-full shadow-inner transition-al p-[1px]">
                                <div
                                    :class="{'translate-x-[7px] bg-lblue': checked2, 'translate-x-[1px] bg-black': !checked2}"
                                    class="form-toggles-knob  w-[7px] h-[7px] rounded-full shadow-md transform transition-transform"
                                >
                                </div>
                            </div>   
                            <span class="text-sm text-primary">I Accept the <a href="" class="border-b border-primary transition hover:border-cblue hover:text-cblue"> Policy</a> & <a href="" class="border-b border-primary transition hover:border-cblue hover:text-cblue">Terms</a>
                            </span>                      
                        </label>
                    </div>
                    <a href="" class="text-cblue text-xs font-semibold">Forgot Password?</a>
                   </div>
                   <button type="button" class=" w-full py-4 px-6 text-center bg-cblue text-white text-base transition hover:bg-[#1c51b0] font-bold rounded-[10px] mb-4">Create an Account</button>
                   <button type="button" class=" w-full py-4 px-6 text-center bg-transparent text-primary text-base font-semibold hover:bg-black transition hover:text-white rounded-[10px] border border-primary mb-4 flex items-center gap-2 justify-center"><span class=" w-6 h-6 rouned-md overflow-hidden"> <img src="@/assets/img/logos/busd.png" alt="" class=" object-cover w-full h-full"></span> Continue with Binance</button>
                   <button type="button" class=" w-full py-4 px-6 text-center bg-transparent text-primary text-base font-semibold hover:bg-black transition hover:text-white rounded-[10px] border border-primary mb-4 flex items-center gap-2 justify-center"><span class=" w-6 h-6 rouned-md overflow-hidden"> <img src="@/assets/img/wallet-icon.svg" alt="" class=" object-cover w-full h-full"></span> Continue with Wallet</button>
                </div>
            </div>
            </div>
    </div>
  </div>
</div>
<!-- header end --></template>