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
            stockConfig2: {
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
            stockConfig3: {
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
                            '#23A638',

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
            stockChart2: null,
            stockChart3: null,
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
            if (this.stockChart2 != null) {
                this.stockChart2.destroy();
            }
            this.stockChart2 = new Chart(
                document.getElementById('stockChart2'),
                this.stockConfig2
            );
            if (this.stockChart3 != null) {
                this.stockChart3.destroy();
            }
            this.stockChart3 = new Chart(
                document.getElementById('stockChart3'),
                this.stockConfig3
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
.cu-chart-top canvas {
    max-height: 72px!important;
    width: 237px!important;
}
.active-button {
    color: #0052FE;
    border-color: #0052FE;
}
</style>
<template>
    <section class="bg-white w-full pt-6 px-4 md:px-4">
        <div class="container mx-auto max-w-screen-xl">
            <div class="flex flex-col items-center mt-10 mb-20">
                <div class="content text-left flex-col flex lg:flex-row gap-6">
                    
                    <div class="text-content w-full lg:w-1/2">
                        <h1 class=" text-[32px] text-primary font-bold mb-4 text-left">Today's Cryptocurrency Prices by Market Cap.</h1>
                        <p class="text-base font-normal mb-8 text-secondary text-left">The global crypto market cap is <b>$969.71B</b>, a <span class="text-[#E71212]">2.03%</span> decrease over the last day. The total crypto market volume over the last 24 hours is $48.89B, which makes a 10.74% increase. The total volume in DeFi is currently $3.60B, 7.36% of the total crypto market 24-hour volume.</p>
                    </div>
                    
                    <div class="latest-news  w-full lg:w-1/2">
                <div class="items-center">
                    <div class="flex flex-col md:flex-row gap-4">
                                    <div class="p-4 rounded-lg border border-lgray">
                                        <div class="">
                                            <div class=" text-sm text-secondary font-normal mb-2.5">Market Cap</div>
                                            <div class="flex items-center justify-between gap-2">
                                                <div class=" text-[20px] font-semibold text-primary">$20,102,190,200</div> 
                                                <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                                            </div>
                                        </div>
                                        <div class="cu-chart-top">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart3" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                    </div>                            
                                    <div class="p-4 rounded-lg border border-lgray">
                                        <div class="">
                                            <div class=" text-sm text-secondary font-normal mb-2.5">Trading Volume</div>
                                            <div class="flex items-center justify-between gap-2">
                                                <div class=" text-[20px] font-semibold text-primary">$10,722,300,554</div> 
                                                <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                                            </div>
                                        </div>
                                        <div class="cu-chart-top">
                                            <div ref="btc" class="">
                                                <canvas id="stockChart2" width="400" height="400"></canvas>
                                            </div>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <div class="flex flex-col md:flex-row items-center justify-start md:justify-between mb-10">
        <div class="hidden lg:flex items-center gap-7 filter-bottns">
           <button type="button" class=" text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">Watchlist</button>
           <button type="button" class=" text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">Portfolio</button>
           <button type="button" class="active-button text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">Cryptocurrency</button>
           <button type="button" class=" text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">NFT</button>
           <button type="button" class=" text-secondary text-sm font-semibold border-b border-transparent hover:border-[#0052FE] hover:text-cblue transition">Metaverse</button>
        </div>
        <form action="" class="filter-drop text-left w-full block lg:hidden mb-4">
                    <div class="">
                        <div class="no-label w-full">
                            <div class="select select-b" id="currency">
                                <div class="selectBtn bg-white" data-type="firstOption"> Cryptocurrency</div>
                                <div class="selectDropdown">
                                    <div class="option" data-type="secondOption" data-value="Cryptocurrency">
                                      Cryptocurrency
                                    </div>
                                    <div class="option" data-type="thirdOption" data-value="Watchlist">
                                      Watchlist
                                    </div>
                                    <div class="option" data-type="forthOption" data-value="Portfolio">
                                      Portfolio
                                    </div>
                                    <div class="option" data-type="fifthOption" data-value="NFT">
                                      NFT
                                    </div>
                                    <div class="option" data-type="sixthOption" data-value="Metaverse">
                                      Metaverse
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="options-area flex items-center gap-3 mb-3">
            <div class="flex items-center text-sm gap-1 font-semibold text-secondary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4V11.2676C2.4022 11.6134 2 12.2597 2 13C2 13.7403 2.4022 14.3866 3 14.7324V16C3 16.5523 3.44772 17 4 17C4.55228 17 5 16.5523 5 16V14.7324C5.5978 14.3866 6 13.7403 6 13C6 12.2597 5.5978 11.6134 5 11.2676V4Z" fill="#D3D7DE"/>
<path d="M11 4C11 3.44772 10.5523 3 10 3C9.44772 3 9 3.44772 9 4V5.26756C8.4022 5.61337 8 6.25972 8 7C8 7.74028 8.4022 8.38663 9 8.73244V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V8.73244C11.5978 8.38663 12 7.74028 12 7C12 6.25972 11.5978 5.61337 11 5.26756V4Z" fill="#D3D7DE"/>
<path d="M16 3C16.5523 3 17 3.44772 17 4V11.2676C17.5978 11.6134 18 12.2597 18 13C18 13.7403 17.5978 14.3866 17 14.7324V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V14.7324C14.4022 14.3866 14 13.7403 14 13C14 12.2597 14.4022 11.6134 15 11.2676V4C15 3.44772 15.4477 3 16 3Z" fill="#D3D7DE"/>
</svg>
Filters
            </div>
            <div class="currency-box flex items-center gap-2 border-l border-r px-1.5 lg:px-3">
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
            <div class="search-wrapper w-full lg:w-auto flex order-1 lg:order-2">
                    <div
                        class="search-inner w-full lg:w-auto relative bg-white border border-[#F5F8FF] rounded-full p-[7px]">
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
                                class="hidden md:flex text-secondary font-normal focus:outline-none active:outline-none w-full lg:w-auto hover:outline-none text-sm bg-transparent"
                                placeholder="Search Assets">
                            <input type="text"
                                class="flex md:hidden text-secondary font-normal focus:outline-none active:outline-none w-full lg:w-auto hover:outline-none text-sm bg-transparent"
                                placeholder="Search">
                            
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
                    <th>Name</th>
                    <th class="lg:hidden table-cell">Price (24h%)</th>
                    <th class="hidden lg:table-cell">Price</th>
                    <th class="hidden lg:table-cell">1h %</th>
                    <th class="hidden lg:table-cell">24h %</th>
                    <th class="hidden lg:table-cell">7d %</th>
                    <th class="hidden lg:table-cell">Marketcap</th>
                    <th class="hidden lg:table-cell">Volume(24h)</th>
                    <th class="hidden lg:table-cell">Last 7 Days</th>
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
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/btc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Bitcoin <b>BTC</b></span> <span class="flex flex-col lg:hidden">Bitcoin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 22.546,00</div>
                      <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>

                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 22.546,00</td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                          <div ref="btc" class="">
                              <canvas id="stockChart1" width="400" height="400"></canvas>
                          </div>
                        </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/eth.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Etherium <b>ETH</b></span> <span class="flex flex-col lg:hidden">Etherium <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 1.507,31</div>
                      <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>

                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 1.507,31</td>
                    
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>                    
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $178.941.687.666
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $178.941.687.666
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>

                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/usdt.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Tether <b>USDT</b></span> <span class="flex flex-col lg:hidden">Tether <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                    </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 22.546,00</div>
                      <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>


                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 22.546,00</td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/usdc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">USD Coin  <b>USDC</b></span> <span class="flex flex-col lg:hidden">USD Coin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                    </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 22.546,00</div>
                      <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 22.546,00</td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/bnb.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex"> BNB   <b>BNB</b></span> <span class="flex flex-col lg:hidden">BNB <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                    </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 22.546,00</div>
                      <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>

                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 22.546,00</td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/btc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Bitcoin <b>BTC</b></span> <span class="flex flex-col lg:hidden">Bitcoin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 22.546,00</div>
                      <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>

                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 22.546,00</td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                          <div ref="btc" class="">
                              <canvas id="stockChart1" width="400" height="400"></canvas>
                          </div>
                        </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/eth.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Etherium <b>ETH</b></span> <span class="flex flex-col lg:hidden">Etherium <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 1.507,31</div>
                      <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>

                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 1.507,31</td>
                    
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>                    
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $178.941.687.666
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $178.941.687.666
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>

                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/usdt.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Tether <b>USDT</b></span> <span class="flex flex-col lg:hidden">Tether <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                    </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 22.546,00</div>
                      <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>


                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 22.546,00</td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/usdc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">USD Coin  <b>USDC</b></span> <span class="flex flex-col lg:hidden">USD Coin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                    </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 22.546,00</div>
                      <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 22.546,00</td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18699 0.552786C5.42648 -0.184262 6.4692 -0.184262 6.70868 0.552787L7.56434 3.18622C7.67144 3.51584 7.9786 3.73901 8.32518 3.73901H11.0941C11.8691 3.73901 12.1913 4.7307 11.5644 5.18622L9.32424 6.81378C9.04385 7.01749 8.92652 7.37859 9.03362 7.7082L9.88928 10.3416C10.1288 11.0787 9.28517 11.6916 8.6582 11.2361L6.41807 9.60852C6.13768 9.4048 5.758 9.4048 5.47761 9.60852L3.23747 11.2361C2.6105 11.6916 1.76692 11.0787 2.0064 10.3416L2.86206 7.7082C2.96916 7.37859 2.85183 7.01749 2.57144 6.81378L0.331305 5.18622C-0.295666 4.7307 0.0265549 3.73901 0.801533 3.73901H3.57049C3.91707 3.73901 4.22424 3.51584 4.33134 3.18622L5.18699 0.552786Z" fill="#D3D7DE"/>
                        </svg>
                    </td>
                    
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/bnb.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex"> BNB   <b>BNB</b></span> <span class="flex flex-col lg:hidden">BNB <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                    </td>
                    <td class="text-primary text-sm font-normal lg:hidden table-cell">
                      <div class="">€ 22.546,00</div>
                      <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>

                    <td class="text-primary text-sm font-normal hidden lg:table-cell">€ 22.546,00</td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" ></path></svg></div>
                    </td>
                    <td class=" hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $380,634,857,927
                    </td>
                    
                    <td class="save-info-tag hidden lg:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-white text-cblue border border-cblue font-semibold  text-sm py-2 px-6 rounded-md transition  hover:bg-cblue hover:text-white">Buy</button>
                    </td>
                </tr>
        </tbody>
    </table>
        </div>
        <div class="pagination mb-10">
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
        </div><!-- container end -->
    </section>
</template>