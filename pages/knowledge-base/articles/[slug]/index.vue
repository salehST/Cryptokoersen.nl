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
                                        <img class="object-cover top-0 absolute flex  w-full h-full inset-x-auto mb-0" src="@/assets/img/knowledge/01.jpg" alt="icon">
                                    </span>
                    </div>
                    </div>
                    <div class="">
                        <h1 class="text-2xl md:text-[32px] text-black font-semibold mb-3 leading-9">What is the difference between fiat money and cryptocurrency?</h1>  
                        
                        <div class="post-info flex justify-between mb-10 border-b border-lblue pb-8">
                            <span class="publish-date-time text-secondary font-normal text-xs flex items-center gap-1"><span class="mr-2">September 09, 2022</span> <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9ZM5.5 3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5C4.5 5.13261 4.55268 5.25979 4.64645 5.35355L6.06066 6.76777C6.25592 6.96303 6.5725 6.96303 6.76777 6.76777C6.96303 6.5725 6.96303 6.25592 6.76777 6.06066L5.5 4.79289V3Z" fill="#6C7A93"/>
                                        </svg> 5 Min Read</span>

                             <span class="bg-[#FB9245] text-white flex items-center rounded-full text-[10px] font-semibold px-3 py-0.5">
                                METAVERSE
                             </span>  
                        </div>
                        <div class="post-content-texts mb-8">
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                The fact that some people, nowadays, transact through electronic money continues to affirm suggestions that cryptocurrencies could be the currencies of the future. However, it will take some time before they find their way into the mainstream sector, given the strong opposition from regulators around the world. Even as the world moves towards a cashless society, very few people have an idea of how different cryptocurrencies are from fiat currencies.
                            </p>
                            <h2 class="text-2xl font-bold text-primary mb-2.5">What Is Fiat Money?</h2>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Fiat Money is a kind of currency, issued by the government and regulated by a central authority such as a central bank. Such currencies act like legal tender and are not necessarily backed by a physical commodity. Instead, it is based on the credit of the economy.




</p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Fiat currencies such as the US Dollar, Pound or Euro derive their value from the forces of supply and demand in the market. Such currencies are always at risk of becoming worthless due to hyperinflation as they are not linked to any physical reserves such as commodities.
</p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Fiat currency first came into being at around 1000 AD in China before spreading to other parts of the world. Initially, currencies were based on physical commodities such as gold. It is only in the 20th century that President Richard Nixon stopped the conversion of U.S dollar into gold.
</p>
<h2 class="text-2xl font-bold text-primary mb-2.5">Advantages of Fiat Money</h2>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Fiat Money has remained legal tender in most countries in part because they are highly stable and controlled. Unlike other forms of money, such as cryptocurrencies and commodity-based currencies, fiat currencies are relatively stable. The stability allows regulators and governments to navigate the economy against recession and inflation.


</p>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Stability also allows fiat money to act as a means of storing value and facilitating exchange. It can also be used to provide a numerical account. Greater control also allows central banks to manage various economic variables such as liquidity, interest rates and credit supply key to ensuring a robust, stable economy.</p>
                                <h3 class="text-2xl font-bold text-primary mb-2.5">Disadvantages of Fiat Money</h3>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Though Fiat Money is considered a stable currency, yet that is not always the case. Economic recessions over the years have highlighted some of the deficiencies associated with Fiat money. The fact that a central bank’s greater control at times does little to stop inflation or recession has led most people to believe that gold could be a much stable currency given its unlimited supply. The notion of central banks control over the economy and the constant increase in global prices create the need for cryptocurrencies.
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
                                <h3 class="text-2xl font-bold text-primary mb-2.5">Cryptocurrencies Advantages</h3>
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Cryptocurrencies are available on a click of a button, all over the world. Anyone that can make an online transfer can also acquire and own a digital coin of choice. Although the process is still complicated, in the futures, it will be easier to transact and own cryptocurrencies.




                            </p>
                                
                            <p class=" text-secondary text-base font-normal leading-8 mb-6">
                                Lower transaction fees have seen cryptocurrencies emerge as a preferred means of sending money across borders. Transferring money using other bank gateways can be quite expensive given the number of fees charged along the way.
                            </p><p class=" text-secondary text-base font-normal leading-8 mb-6">

                                Privacy is another aspect that has made cryptocurrency desirable as users don’t have to share their identity to be able to complete transactions. There are altcoins which the main functions are to maintain the privacy of people behind transactions.
</p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-[281px]">                    

                    <div class="accordion bg-white pt-4 rounded-2xl mb-6 border border-lblue">
                            <div class="accordion">
                                <div class="accordion__intro">                                    
                                    <div class="button flex items-center justify-between w-full text-left cursor-pointer px-6 pb-4 border-b border-lblue">
                                        <span class=" text-xl text-primary font-semibold ">Table of contents</span>
                                        <svg class="arrow-icon fill-current text-[#2B313B] h-7 w-7 md:h-7 md:w-7 transform transition-transform duration-500 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__content">
                                    <ul class="px-6">
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-primary transition py-4">What is Fiat Money?</a></li>
                                        
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-primary transition py-4">Advatages of Fiat Money</a></li>
                                        
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-primary transition py-4">Disadvantages of Fiat Money</a></li>
                                        
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-primary transition py-4">What is a cryptocurrency?</a></li>
                                        
                                        <li><a href="#" class="block w-full font-normal text-sm text-primary hover:text-primary transition py-4">Cryptocurrencies Advantages</a></li>
                                        
                                    </ul>
                                </div>
                            </div>               
                        </div>

                        <div class="s-cta hidden lg:flex mb-8">
                    <div class=" px-6 py-4 bg-cblue rounded-lg">
                        <img src="@/assets/img/k-article-cta-sidebar.svg" class="mb-6" alt="">
                        <h5 class=" font-bold text-white text-2xl mb-6">Not ready to get started? Learn more.</h5>
                        <a class="bg-transparent group border-white border text-white text-sm font-bold flex whitespace-nowrap items-center justify-center py-3 px-2.5 rounded-[10px]" href="">Go to Lesson<img src="@/assets/img/arrow-right-white-bg.svg" class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>