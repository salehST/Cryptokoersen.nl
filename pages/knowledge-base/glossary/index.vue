<script>
export default {

  data() {
    return {
        buttonTrue: false,
      activeTab: 0,
      tabs: ["Cryptocurrency", "Payment Methods", "Payout Methods", "Compensation"]
    };
  },
  methods: {
    removeClass() {
      // Logic to remove the class from the div
      // Replace 'your-div-class' with the actual class name of your div
      const divElement = document.querySelector('.post-content');
      divElement.classList.remove('mh-fixed');
      this.buttonTrue = true;
    }
  }
};
</script>
<style scoped>
.active-le{
    font-weight: 700;
    color: #0052FE;
    background-color: #F5F8FF;
}
.sec-n {
    font-size: 50px;
    color: #000000;
    font-weight: 700;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke: 1px;
}
</style>
<template>
    <section class="w-full bg-white p-10 md:p-12 md:pt-16">
        <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
            <div class="text-content text-center w-full mt-10  mb-24">
                    <h1 class=" text-[32px] md:text-[64px] text-primary font-bold leading-8 md:leading-[64px] mb-6">Glossary</h1>
                    <p class="text-base font-normal mb-8 text-secondary">Learn all of the most important blockchain and cryptocurrency terms and jargon here.</p>
            </div>
            <div class="search-wrapper w-full lg:w-auto flex order-1 lg:order-2 mb-6 lg:mb-0">
                    <div
                        class="search-inner w-full md:w-[425px] mx-auto relative bg-white border border-[#F5F8FF] rounded-full p-[7px]">
                        <form action="" class=" flex items-center w-full md:w-[425px]">
                            <span class="pr-3 pl-1">
                                <svg class=" inline-flex w-auto" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                                        fill="black" />
                                </svg>
                            </span>
                            <input type="text"
                                class=" text-secondary font-normal focus:outline-none active:outline-none w-full md:w-[425px] hover:outline-none text-sm bg-transparent"
                                placeholder="Search Assets">
                            
                        </form>
                    </div>
            </div>

            <div class="alphabets-i py-8 w-full md:w-[894px] mx-auto border-b border-lblue flex flex-wrap items-center gap-2 justify-center text-base text-primary font-normal mb-6 md:mb-12"> 
                # <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue active-le">A</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">B</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">C</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">D</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">E</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">F</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">G</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">H</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">I</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">J</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">K</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">L</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">M</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">N</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">O</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">P</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">Q</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">R</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">S</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">T</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">U</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">V</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue ">W</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue">X</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue">Y</a>
                <a href="" class="px-1 py-0.5 bg-transparent transition hover:text-cblue hover:bg-lblue">Z</a>
            </div>

            <div class="post-content mh-fixed">
                <div class="flex flex-col md:flex-row items-start justify-start gap-4 mb-8 md:mb-14">
                    <div id="" class="sec-n pr-0 md:pr-12 lg:pr-28">
                        #
                    </div>
                    <div class="w-full md:w-[894px] mt-4">
                        <h2 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Decentralized API (dAPI)</h2>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            API services that are intrinsically interoperable with blockchain technology are known as decentralized application programming interfaces (dAPIs). This is an invention of the API3 protocol.
                        </p>
                        <h2 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Shielded Transaction</h2>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            A shielded transaction is essentially a transaction that is between two shielded addresses.
                        </p>
                        <h3 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">0x Protocol</h3>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            0x is an Ethereum-based open-source platform for exchanging cryptocurrencies. It allows for the creation of features in a decentralized exchange (DEX), a wallet or a marketplace.
                        </p>
                        <h3 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">1hr</h3>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Stands for data for the past 1 hour.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">24hr</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Stands for data for the past 24 hours.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">30d</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Stands for data for the past 30 days.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">401(k) Plan</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            A 401(k) plan is a retirement savings program sponsored by US companies where employees contribute part of their income and the employer matches the contributions.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">51% Attack</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            If more than half the computer power or mining hash rate on a network is run by a single person or a single group of people, then a 51% attack is in operation.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">52-Week High/Low</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            A 52-week high and low is the highest and lowest market price of a given asset over 52 weeks or one year.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">7d</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Stands for data for the past 7 days.
                        </p>
                        <h5 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">80/20 Rule (Pareto Principle)</h5>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            The 80/20 rule, commonly known as Pareto Principle, states that 20% of your actions account for 80% of results.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-start justify-start gap-4 mb-8 md:mb-14">
                    <div id="" class="sec-n pr-0 md:pr-12 lg:pr-28">
                        A
                    </div>
                    <div class="w-full md:w-[894px] mt-4">
                        <h5 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Abenomics</h5>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Abenomics is the economic strategy implemented by Shinzo Abe of Japan and is comprised of three arrows: monetary policy, fiscal stimulus and structural reforms.
                        </p>
                        <h5 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Abnormal Return</h5>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            A shielded transaction is essentially a transaction that is between two shielded addresses.
                        </p>
                        <h5 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Absolute Advantage</h5>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Absolute advantage is a situation in which a company can produce the same product as other companies using fewer resources.
                        </p>
                        <h5 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Absolute Return</h5>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            The term absolute return refers to the return on investment (whether positive or negative) obtained in a specific period of time.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Abstract</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Abstract is something that exists in thought as an idea.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Accepting Risk (Acceptance)</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Accepting risk, also known as risk acceptance, is a risk management strategy employed by companies to accept risks linked to certain events instead of investing resources to tackle them.
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Account</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            An account is essentially a whose purpose is to track the financial activities of a specific asset/
                        </p>
                        <h4 class="text-2xl md:text-[32px] text-primary font-bold mb-2.5">Account Balance</h4>
                        <p class=" text-secondary text-base font-normal mb-10 md:mb-14">
                            Account balance refers to the amount in a bank/cryptocurrency account that can be accessed immediately. On the other hand, in accounting, account balance refers to the sum obtained from the difference between all debit and credit transactions posted to a company’s account.
                        </p>
                       
                    </div>
                </div>
                
            </div>
            <div class="text-center mb-10 block">
                        <button @click="removeClass" :class="{ 'hidden': buttonTrue }" class="read-more-btn text-cblue w-auto mx-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">
                            View More
                                </button>
                    </div>
        </div>
    </section>    
</template>