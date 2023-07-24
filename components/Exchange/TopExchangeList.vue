<script>
import Chart from 'chart.js/auto/auto.mjs';
export default {
    data() {
        return {
            stockConfig1: {
                type: 'line',
                data: {
                    labels: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7",],
                    datasets: [{
                        label: '',
                        data: [290, 360, 300, 350, 280, 335, 355],
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 0, 0, 0);

                            gradient.addColorStop(0, '#ffffff');
                            gradient.addColorStop(0, '#ffffff');

                            return gradient;
                        },
                        lineTension: 0.5,
                        pointRadius: 0,
                        pointHoverRadius: 1,
                        fill: true,
                        redraw: true,
                        borderColor: [
                            '#FF5555',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    },

                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            position: 'nearest',
                            padding: 10,
                            cornerRadius: 10,
                            backgroundColor: 'rgba(43,88,133)',
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y;
                                },
                                title: () => null
                            },

                            yAlign: 'bottom',
                            displayColors: false,

                        }
                    }
                }
            },
            stockChart1: null,
        }
    },
    mounted() {

this.ChartRender();

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
        ChartRender() {
            if (this.stockChart1 != null) {
                this.stockChart1.destroy();
            }
            this.stockChart1 = new Chart(
                document.getElementById('stockChart1'),
                this.stockConfig1
            );

        },
    }

}

</script>
<style scoped>
.cu-chart canvas {
    max-height: 30px;
    max-width: 150px;
}
.active-button {
    color: #0052FE;
    border-color: #0052FE;
}
</style>
<template>
    <section class="bg-white w-full p-10 md:p-12">
        <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
            <div class="heading-area mb-10">
                <h1 class=" text-[32px] text-primary font-bold mb-3">Top Cryptocurrency Spot Exchanges</h1>
                <p class=" text-secondary text-base font-normal">CoinMarketCap ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported.
We now track 287 spot exchanges with a total 24h volume of $258.82B. For more info on exchange ranking.</p>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-start md:justify-between mb-10">
        <div class="hidden lg:flex items-center gap-7 filter-bottns">
           <button type="button" class=" text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">Watchlist</button>
           <button type="button" class=" text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">Spot</button>
           <button type="button" class="active-button text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">Derivatives</button>
           <button type="button" class=" text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">DEX</button>
           <button type="button" class=" text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">Lending</button>
        </div>

        <form action="" class="filter-drop text-left w-full block lg:hidden mb-4">
                    <div class="">
                        <div class="no-label w-full">
                            <div class="select select-b" id="currency">
                                <div class="selectBtn bg-white" data-type="firstOption"> Spot</div>
                                <div class="selectDropdown">
                                    <div class="option" data-type="secondOption" data-value="Cryptocurrency">
                                        Watchlist
                                    </div>
                                    <div class="option" data-type="thirdOption" data-value="Watchlist">
                                        Spot
                                    </div>
                                    <div class="option" data-type="forthOption" data-value="Portfolio">
                                        Derivatives
                                    </div>
                                    <div class="option" data-type="fifthOption" data-value="NFT">
                                        DEX
                                    </div>
                                    <div class="option" data-type="sixthOption" data-value="Metaverse">
                                        Lending
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

        <div class="options-area flex items-center gap-3 mb-3">
            <div class="currency-box flex items-center gap-2 border-lblue border-r  px-3">
                <span class=" text-sm font-semibold text-secondary whitespace-nowrap">Show Rows</span>
                <form action="" class="text-left w-[60px]">
                    <div class="">
                        <div class="no-label w-[60px]">
                            <div class="select select-b" id="currency">
                                <div class="selectBtn bg-white" data-type="firstOption"> 30</div>
                                <div class="selectDropdown">
                                    <div class="option" data-type="secondOption" data-value="30">
                                        30
                                    </div>
                                    <div class="option" data-type="thirdOption" data-value="20">
                                        20
                                    </div>
                                    <div class="option" data-type="forthOption" data-value="10">
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="search-wrapper w-full lg:w-auto flex order-1 lg:order-2 mb-0">
                    <div
                        class="search-inner w-full lg:w-auto relative bg-white border border-lblue rounded-full p-[7px]">
                        <form action="" class=" flex items-center w-full lg:w-auto">
                            <span class="pr-3 pl-1">
                                <svg class=" inline-flex w-auto" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                                        fill="black" />
                                </svg>
                            </span>
                            <input type="text"
                                class=" text-secondary font-normal focus:outline-none active:outline-none w-full lg:w-auto hover:outline-none text-sm bg-transparent"
                                placeholder="Search Assets">
                            
                        </form>
                    </div>
                </div>
        </div>
    </div>
    <div class="product-table-wrapper no-overlay">
        <table class="w-full">
            <thead class="">
                <tr class="text-sm text-left text-black font-semibold p-4">
                    <th class="p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#2B313B"/>
                        </svg>
                    </th>
                    <th>Exchange</th>
                    <th>Score</th>
                    <th class="hidden md:table-cell">Avg. Liquidity</th>
                    <th class="hidden md:table-cell">Weekly Visit</th>
                    <th class="hidden md:table-cell">Markets</th>
                    <th class="hidden md:table-cell">Coins</th>
                    <th class="hidden md:table-cell">Volume Graph (7d)</th>
                    <th class="hidden md:table-cell">Volume(24h)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/busd.png" class="mr-2 h-6 w-6" alt=""> Binance</span></td>
                    <td class="text-[#27AE60] text-sm font-normal">5.0</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/exchange/Kraken.png" class="mr-2 h-6 w-6" alt=""> Kraken</span></td>
                    <td class="text-[#27AE60] text-sm font-normal">5.0</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/exchange/Kucoin.png" class="mr-2 h-6 w-6" alt=""> Kucoin</span></td>
                    <td class="text-[#27AE60] text-sm font-normal">5.0</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/exchange/Bitvavo.png" class="mr-2 h-6 w-6" alt=""> Bitvavo</span></td>
                    <td class="text-[#F2994A] text-sm font-normal">3.5</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/exchange/OKEX.png" class="mr-2 h-6 w-6" alt=""> OKEX</span></td>
                    <td class="text-[#EB5757] text-sm font-normal">2.1</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/busd.png" class="mr-2 h-6 w-6" alt=""> Binance</span></td>
                    <td class="text-[#27AE60] text-sm font-normal">5.0</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/exchange/Kraken.png" class="mr-2 h-6 w-6" alt=""> Kraken</span></td>
                    <td class="text-[#27AE60] text-sm font-normal">5.0</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/exchange/Kucoin.png" class="mr-2 h-6 w-6" alt=""> Kucoin</span></td>
                    <td class="text-[#27AE60] text-sm font-normal">5.0</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/exchange/Bitvavo.png" class="mr-2 h-6 w-6" alt=""> Bitvavo</span></td>
                    <td class="text-[#F2994A] text-sm font-normal">3.5</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/exchange/OKEX.png" class="mr-2 h-6 w-6" alt=""> OKEX</span></td>
                    <td class="text-[#EB5757] text-sm font-normal">2.1</td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        910
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        17,867,235
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        1702
                    </td>                   
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        387
                    </td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-primary text-sm font-normal  hidden md:table-cell">
                        $380,634,857,927
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Visit</button>
                    </td>
                </tr>
        </tbody>
    </table>
        </div>
        <div class="pagination">
            <div class="flex items-center justify-center md:justify-between mt-6">
                <div class="hidden md:flex font-normal text-sm text-primary">Showing 1 - 10 out of 7023</div>
  <nav class="flex gap-2">
    <a href="#" class="items-center flex justify-center rounded bg-white text-black hover:bg-cblue hover:text-white">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L15.4142 16L18.7071 19.2929C19.0976 19.6834 19.0976 20.3166 18.7071 20.7071C18.3166 21.0976 17.6834 21.0976 17.2929 20.7071L13.2929 16.7071C12.9024 16.3166 12.9024 15.6834 13.2929 15.2929L17.2929 11.2929C17.6834 10.9024 18.3166 10.9024 18.7071 11.2929Z" fill="#B4BAC6"/>
</svg>

    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center bg-cblue text-white rounded">
      1
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
      2
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
      3
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
      4
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
      &hellip;
    </a>
    <a href="#" class="group items-center flex justify-center  rounded bg-white text-black hover:bg-cblue hover:text-white">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect class=" group-hover:fill-[#0051FF]" width="32" height="32" rx="4" fill="white"/>
<path class=" group-hover:fill-[#fff]" fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 20.7071C12.9024 20.3166 12.9024 19.6834 13.2929 19.2929L16.5858 16L13.2929 12.7071C12.9024 12.3166 12.9024 11.6834 13.2929 11.2929C13.6834 10.9024 14.3166 10.9024 14.7071 11.2929L18.7071 15.2929C19.0976 15.6834 19.0976 16.3166 18.7071 16.7071L14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071Z" fill="black"/>
</svg>

    </a>
  </nav>
</div>

        </div>
        </div>
    </section>
</template>