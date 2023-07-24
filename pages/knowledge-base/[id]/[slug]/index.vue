<script>

export default {
    mounted(){
          
        const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});
        
  },
    method: {
       

        
    
    }
    
}
</script>
<style>
.accordion {
  width: 100%;
  overflow: hidden;
}
.accordion__intro {
  position: relative; 
  cursor: pointer;
}
.accordion__content {
  max-height: 0;
  overflow: hidden;
  will-change: max-height;
  transition: all 0.25s ease-out;
  color: #2B313B;
  opacity: 1;
}
.accordion h4,
.accordion a {
  color: #2B313B;
  font-weight: 400;
  font-size: 14px;
}
.accordion.accordion__active .button svg {
    transform: rotate(0deg);
}
</style>
<template>
        <section class="w-full bg-white p-10 md:p-12 md:pt-16">
        <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
            <div class="blog-news flex gap-6 flex-col mx-auto lg:flex-row items-stretch justify-center">
                <div class=" w-full lg:w-[630px]">
                    <div class="mb-6">
                        
                    <div class="h-[384px] w-full lg:w-[630px] relative overflow-hidden rounded-[15px]">                       
                                    <span class="fixed-size overflow-hidden h-[384px] w-[96vw] md:w-[60vw] lg:w-[630px] rounded-[15px]">
                                        <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/07.jpg" alt="icon">
                                    </span>
                    </div>
                    </div>
                    <div class="">
                        <h1 class="text-2xl md:text-[32px] text-black font-semibold mb-3 leading-9">What is money and what forms exist?</h1>  
                        
                        <div class="post-info flex justify-between mb-10 border-b border-lblue pb-8">
                            <span class="publish-date-time text-secondary font-normal text-xs flex items-center gap-1"><span class="mr-2">September 09, 2022</span> <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                                        </svg> 5 Min Read</span>

                             <span class=" text-cblue flex items-center rounded-full text-[10px] font-semibold">
                                BEGINNER 1/14
                             </span>  
                        </div>
                        <div class="post-content-texts mb-8">
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                In order to properly understand the world of cryptocurrencies and blockchain, it’s important to first learn more about what money has looked like over time and how it has been used. We will therefore start at the beginning: the history of money. Money plays an important role in our everyday life, but it hasn’t always looked the way it does today. It’s fascinating to see the various roles, forms, and functions money has played and held over the centuries. The most recent development in the world of money is the rise of cryptocurrencies, which has been in part been a response to financial crises.
                            </p>
                            <h2 class="text-2xl font-bold text-primary mb-2.5">The history and forms of money</h2>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Money has a long history and throughout history has taken many forms. In principle, anything can become a form of money, based on a mix of custom, social use and general acceptance.






</p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Shells, barley, peppercorns, gold and silver at some point all were used as money. The island of Yap in the Pacific Ocean even used large disks of stone as payment method. These disks came from afar, via a dangerous journey to the islands of Palau. People from Yap often died during these journeys, which could take years. When the first Europeans arrived in Yap, they started helping transporting the stones, and also brought better tools to work the stones. The stones have an oral history and still change owners in this manner. Around the year 1700, Jesuits were the first to name these stones, and they often appear in marine logs throughout the 1800s. It was now possible to collect and process larger stones. However, it’s the older and smaller stones that now carry the greatest value in Yap, thanks to their longer oral delivery and history, and because they were more scarce at the time. This example shows how scarcity also adds value to a currency.


</p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                It’s not too long ago, namely at the end of the Second World War, that cigarettes were used as currency in Germany. In modern prisons, cigarettes are something still used as a means of exchange.
</p>
<h2 class="text-2xl font-bold text-primary mb-2.5">Does money keep its value?</h2>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Money does not always keep its value, as its value can change for example due to inflation, deflation or devaluation.




</p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Inflation means that the value of money has fallen. When dealing with inflation, the same amount of money buys us less after a few years. In other words: an individual’s purchasing power decreases. This can have various causes, but is often caused by a lot of new money being printed.
Deflation occurs when the prices of goods and service falls over time, increasing purchasing power. When too little money is circulating due to economic growth, the value of money increases and prices become cheaper. It is also possible that more goods are being produced than are needed. This means that companies will have to offer these goods at a cheaper price in order to sell them. Deflation is regarded as a sign of a weaker economy.
Devaluation occurs when a country decides to devalue its currency due to issues with the trade balance. A country can improve its competitive position in global markets by lowering export costs. Import costs, meanwhile, are increased. Rising prices or inflation can also affect a currency’s devaluation.</p>
                                <h3 class="text-2xl font-bold text-primary mb-2.5">What role can money play?</h3>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Money plays various roles, and moreover solves the problems created by a barter economy. A currency’s main function is to serve as an accepted exchange tool.
                            </p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
However, a few secondary functions can be derived from this.
                            </p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
Payment method. The most important function of money is to serve as payment method. Money allows us to buy goods and services, but also to supply goods and services ourselves in exchange for money.
Calculation unit. As calculation unit, money provides a benchmark to measure other values against. For example, an accountant’s services may cost EUR 100 per hour, but so can two pairs of shoes. Money is what connects these two examples. This means that the value of money for example can also be used to calculate a company’s profits or losses.</p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
Value storage. Money can also be useful as a means of exchange for use in the future. When goods are stored, there is no guarantee that they will retain their value in the future. This is different for money, since it does in fact keep its value: tomorrow or one year from now, the amount will still be the same. However, its value may fall slightly due to inflation.</p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
Standard of deferred payment. This means that if money can be used today to pay, it must also be possible to make a purchase that is only paid later. This is then done by using loans and debts. This makes it possible to purchase goods and services today, but to pay for them only later.
                            </p>
                                <h3 class="text-2xl font-bold text-primary mb-2.5">What is a cryptocurrency?</h3>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                A cryptocurrency is a form of digital or virtual currency that can work as a medium of exchange. Being virtual in nature, they use cryptography technology to process, secure and verify transactions.
                            </p><p class=" text-secondary text-base font-normal leading-8 mb-6">
Unlike Fiat currencies, cryptocurrencies are not controlled by any central authority such as a central bank. Instead, they are limited entries in a database such as a blockchain that no one can change or manipulate, unless certain conditions are met.
</p><p class=" text-secondary text-base font-normal leading-8 mb-6">
Cryptocurrencies came into being as a side product of Satoshi Nakamoto, the brainchild behind Bitcoin cryptocurrency. Nakamoto did not intend to develop a currency but a peer-to-peer electronic cash system for facilitating transactions without any central oversight.
</p><p class=" text-secondary text-base font-normal leading-8 mb-6">
The decentralization aspect of the network means there is no central server where transactions are hosted or controlling authority. In a decentralized network like Bitcoin, every transaction to have ever happened is displayed for everyone to see. Each transaction file also consists of senders and recipients public keys.
                            </p> 
                                <h3 class="text-2xl font-bold text-primary mb-2.5">Summary</h3>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Money is important in people’s lives. Without money, our society would look different. A barter economy would be the most obvious alternative, but such an economy has many disadvantages. Money fulfills important functions, such as serving as payment method, calculation unit, and as value storage.






                            </p>
                                
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Money also constantly changes form. For example, in the past stones were used as payment, while these days it is possible to pay with cryptocurrencies. The function of money also changes, because these days it is used as value storage.


                            </p><p class=" text-secondary text-base font-normal leading-8 mb-6">

                                Cryptocurrencies are a form of money on the rise since 2009. This is a digital form of money that is being used by an increasing number of money as payment method or investment. An important feature of cryptocurrencies is that they are managed decentralized by the blockchain, on which this currency is running.
</p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-[281px]">                    

                    <div class="accordion bg-white pt-4 rounded-2xl mb-6 border border-lblue">
                            <div class="accordion">
                                <div class="accordion__intro">                                    
                                    <div class="button flex items-center justify-between w-full text-left cursor-pointer px-6 pb-4 border-b border-lblue">
                                        <span class=" text-lg text-primary font-semibold ">Table of contents</span>
                                        <svg class="arrow-icon fill-current text-[#2B313B] h-7 w-7 md:h-7 md:w-7 transform transition-transform duration-500 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__content">
                                    <ul class="px-6">
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-cblue transition py-4">The history and forms of money</a></li>
                                        
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-cblue transition py-4">Does money keep its value?</a></li>
                                        
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-cblue transition py-4">What role can money play?</a></li>
                                        
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-cblue transition py-4">Summary</a></li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>               
                        </div>
                    <div class="accordion bg-white pt-4 rounded-2xl mb-6 border border-lblue">
                            <div class="accordion">
                                <div class="accordion__intro">                                    
                                    <div class="button flex items-center justify-between w-full text-left cursor-pointer px-6 pb-4">
                                        <span class=" text-lg text-primary font-semibold ">BEGINNER - Lesson 1</span>
                                        <svg class="arrow-icon fill-current text-[#2B313B] h-7 w-7 md:h-7 md:w-7 transform transition-transform duration-500 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__content">
                                    <ul class="px-6">
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-cblue transition  border-t border-lblue py-4"><b> Lesson 1</b> - What Is Money And What Forms Exist?</a></li>
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-cblue transition  border-t border-lblue py-4"><b> Lesson 2</b>  - What Is The Difference Between Fiat Money And Cryptocurrency?</a></li>
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-cblue transition  border-t border-lblue py-4"><b> Lesson 3</b> - What Is Blockchain?</a></li>
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-cblue transition  border-t border-lblue py-4"><b> Lesson 4</b> - What Is Bitcoin (BTC)?</a></li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>               
                        </div>

                </div>
            </div>
            <div class="k-cta w-full mx-auto md:w-[944px] bg-cblue rounded-[10px] px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="py-7  w-full md:w-1/2 order-2 md:order-1">
                    <h4 class="text-2xl md:text-[32px] text-white font-semibold mb-6">What is the difference between fiat money and cryptocurrency?</h4>
                    <a class="bg-transparent group border-white border text-white text-base font-bold flex whitespace-nowrap items-center justify-center w-full md:w-[200px] py-3 px-2.5 rounded-[10px]" href="">Next Lesson<img src="@/assets/img/arrow-right-white-bg.svg" class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                </div>
                <div class=" w-full md:w-1/2 order-1 md:order-2">
                    <img src="@/assets/img/k-article-cta-sidebar.svg" class="w-full h-full object-cover" alt="">
                </div>
            </div>
        </div>
    </section>
</template>