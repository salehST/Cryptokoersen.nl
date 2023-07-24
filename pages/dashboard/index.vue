<script>
import Chart from 'chart.js/auto/auto.mjs';
export default {
    data() {
        return {
            isModalOpen2: false,
            isModalOpen3: false,
            isModalOpen4: false,
            stockConfig3: {
        type: "line",
        data: {
          labels: [
            "Feb 1",
            "Feb 2",
            "Feb 3",
            "Feb 4",
            "Feb 5",
            "Feb 6",
            "Feb 7",
          ],
          datasets: [
            {
              label: "",
              data: [290, 360, 300, 350, 280, 335, 355],
              backgroundColor: (ctx) => {
                const canvas = ctx.chart.ctx;
                const gradient = canvas.createLinearGradient(0, 1200, 0, 0);

                gradient.addColorStop(1, "#0051FF08");
                gradient.addColorStop(0.5, "#0051FF08");

                return gradient;
              },
              // lineTension: 0.4,
              pointRadius: 1,
              pointHoverRadius: 1,
              fill: true,
              redraw: true,
              borderColor: ["#0051FF"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              display: true,
            },
            x: {
              display: true,
            },
            ticks: {
              display: false,
            },
          },

          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              position: "nearest",
              padding: 10,
              cornerRadius: 10,
              backgroundColor: "rgba(43,88,133)",
              callbacks: {
                label: function (context) {
                  return context.parsed.y;
                },
                title: () => null,
              },

              yAlign: "bottom",
              displayColors: false,
            },
          },
        },
            },
            stockChart3: null,
        }
    },
        mounted() {

this.ChartRender();


},
    methods: {
        openModal2() {
      this.isModalOpen2 = true;
    },
    closeModal2() {
      this.isModalOpen2 = false;
    },
        openModal3() {
      this.isModalOpen3 = true;
    },
    closeModal3() {
      this.isModalOpen3 = false;
    },
        openModal4() {
      this.isModalOpen4 = true;
    },
    closeModal4() {
      this.isModalOpen4 = false;
    },
        ChartRender() {
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
<style>
.dash-chart .selectBtn {
    border-radius: 30px;
    padding: 6px 12px;
}

.dash-chart .selectBtn::after {
    top: 14px;
}
.port-drop .selectBtn::after {
    top: 20px;
}
</style>
<template>
    <section class="w-full bg-white p-10 md:p-12 md:pt-16">
        <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
            <div class="breadcrumb mt-10 md:mt-0 mb-8">
                <ul class=" flex items-center gap-1 text-xs text-cblue font-normal">
                    <li><a href="" class="">Home</a></li>
                    <li><a href="" class="active-page text-black">/ Portfolio</a></li>
                </ul>
                 
            </div>
            <div class="flex flex-col md:flex-row items-start justify-between gap-8">
                <div class="w-full md:w-[285px]">
                    <div class="flex flex-col gap-4 pb-0 md:pb-8 mb-8 md:border-b border-lblue">
                        <div class="hidden md:flex items-center gap-2">
                            <div class="i-ss h-12 w-12 rounded-full overflow-hidden">
                                <img src="@/assets/img/icons/all-prot.svg" class=" object-cover w-full h-full" alt="">
                            </div>
                            <div class="text-primary">
                                <h4 class="text-base font-semibold">All Portfolio</h4>
                                <div class="text-sm font-normal">$22,032.08</div>
                            </div>
                        </div>
                        <div class="hidden md:flex items-center gap-2">
                            <div class="i-ss h-12 w-12 rounded-full overflow-hidden">
                                <img src="@/assets/img/2.png" class=" object-cover w-full h-full" alt="">
                            </div>
                            <div class="text-primary">
                                <h4 class="text-base font-semibold">Crypto</h4>
                                <div class="text-sm font-normal">$12,232.22</div>
                            </div>
                        </div>
                        <div class="hidden md:flex items-center gap-2">
                            <div class="i-ss h-12 w-12 rounded-full overflow-hidden">
                                <img src="@/assets/img/3.png" class=" object-cover w-full h-full" alt="">
                            </div>
                            <div class="text-primary">
                                <h4 class="text-base font-semibold">Metaverse</h4>
                                <div class="text-sm font-normal">$09,052.11</div>
                            </div>
                        </div>
                        <div class="hidden md:flex items-center gap-2">
                            <div class="i-ss h-12 w-12 rounded-full overflow-hidden">
                                <img src="@/assets/img/4.png" class=" object-cover w-full h-full" alt="">
                            </div>
                            <div class="text-primary">
                                <h4 class="text-base font-semibold">NFT</h4>
                                <div class="text-sm font-normal">$05,022.10</div>
                            </div>
                        </div>
                        <div class="flex md:hidden w-full port-drop">
                            <form action="" class="text-left w-full">
                                <div class="">
                                    <div class="no-label w-full">
                                        <div class="select" id="">
                                            <div class="selectBtn" data-type="firstOption"><div class="flex items-center gap-2">
                            <div class="i-ss h-6 w-6 rounded-full overflow-hidden">
                                <img src="@/assets/img/icons/all-prot.svg" class=" object-cover w-full h-full" alt="">
                            </div>
                            <div class="text-primary">
                                <h4 class="text-xs font-semibold">All Portfolio</h4>
                            </div>
                        </div> 
                    </div>
                                            <div class="selectDropdown">
                                                <div class="option" data-value="all" data-type="firstOption">
                                                    <div class="flex items-center gap-2">
                            <div class="i-ss h-6 w-6 rounded-full overflow-hidden">
                                <img src="@/assets/img/2.png" class=" object-cover w-full h-full" alt="">
                            </div>
                            <div class="text-primary">
                                <h4 class="text-xs font-semibold">Crypto</h4>
                            </div>
                        </div> </div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    <div class="flex items-center gap-2">
                            <div class="i-ss h-6 w-6 rounded-full overflow-hidden">
                                <img src="@/assets/img/3.png" class=" object-cover w-full h-full" alt="">
                            </div>
                            <div class="text-primary">
                                <h4 class="text-xs font-semibold">Metaverse</h4>
                            </div>
                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button type="button"  @click="openModal2" class="group w-full py-2 px-6 text-center bg-transparent text-primary text-sm font-semibold hover:bg-cblue transition hover:text-white rounded-[10px] border border-primary hover:border-cblue mb-4 hidden md:flex items-center gap-2 justify-center"><span class=" w-4 h-4 rounded-md overflow-hidden"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="transition group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M8.00156 14.4C11.5362 14.4 14.4016 11.5346 14.4016 8C14.4016 4.46538 11.5362 1.6 8.00156 1.6C4.46694 1.6 1.60156 4.46538 1.60156 8C1.60156 11.5346 4.46694 14.4 8.00156 14.4ZM8.80156 5.6C8.80156 5.15817 8.44339 4.8 8.00156 4.8C7.55973 4.8 7.20156 5.15817 7.20156 5.6V7.2H5.60156C5.15973 7.2 4.80156 7.55817 4.80156 8C4.80156 8.44183 5.15973 8.8 5.60156 8.8H7.20156V10.4C7.20156 10.8418 7.55973 11.2 8.00156 11.2C8.44339 11.2 8.80156 10.8418 8.80156 10.4V8.8H10.4016C10.8434 8.8 11.2016 8.44183 11.2016 8C11.2016 7.55817 10.8434 7.2 10.4016 7.2H8.80156V5.6Z" fill="#2B313B"/>
</svg>
</span> Create Portfolio</button>
                    <button type="button" class="group w-full py-2 px-6 text-center bg-transparent text-primary text-sm font-semibold hover:bg-cblue transition hover:text-white rounded-[10px] border border-primary hover:border-cblue mb-4 hidden md:flex items-center gap-2 justify-center"><span class=" w-4 h-4 rounded-md overflow-hidden"> 
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="transition group-hover:fill-white" d="M3.99844 2.4C3.11478 2.4 2.39844 3.11634 2.39844 4V5.6C2.39844 6.48366 3.11478 7.2 3.99844 7.2H5.59844C6.48209 7.2 7.19844 6.48366 7.19844 5.6V4C7.19844 3.11634 6.48209 2.4 5.59844 2.4H3.99844Z" fill="#2B313B"/>
<path class="transition group-hover:fill-white" d="M3.99844 8.8C3.11478 8.8 2.39844 9.51634 2.39844 10.4V12C2.39844 12.8837 3.11478 13.6 3.99844 13.6H5.59844C6.48209 13.6 7.19844 12.8837 7.19844 12V10.4C7.19844 9.51634 6.48209 8.8 5.59844 8.8H3.99844Z" fill="#2B313B"/>
<path class="transition group-hover:fill-white" d="M8.79844 4C8.79844 3.11634 9.51478 2.4 10.3984 2.4H11.9984C12.8821 2.4 13.5984 3.11634 13.5984 4V5.6C13.5984 6.48366 12.8821 7.2 11.9984 7.2H10.3984C9.51478 7.2 8.79844 6.48366 8.79844 5.6V4Z" fill="#2B313B"/>
<path class="transition group-hover:fill-white" d="M8.79844 10.4C8.79844 9.51634 9.51478 8.8 10.3984 8.8H11.9984C12.8821 8.8 13.5984 9.51634 13.5984 10.4V12C13.5984 12.8837 12.8821 13.6 11.9984 13.6H10.3984C9.51478 13.6 8.79844 12.8837 8.79844 12V10.4Z" fill="#2B313B"/>
</svg>

</span> Manage Portfolios</button>
                </div>
                <div class="w-full md:w-[883px]">
                    <div class="chart-content mb-5">
              <div class="bg-white border border-lblue rounded-2xl p-6">
                <div class="flex items-center justify-between">

                    <div class="">
                    <div
                      class="text-primary text-left text-xs font-normal mb-1.5"
                    >
                    Current Balance
                    </div>
                    <div
                      class="text-primary text-2xl font-semibold flex items-center gap-1 mb-1"
                    >
                    $22,032.08
                      <span class="bg-[#23A638] text-white font-normal text-xs py-1 px-[7px] rounded-md ml-2 mr-1"
                        >+ 5.7%</span
                      >
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="text-[#23A638] font-normal text-base mr-1"
                        >+ $22,176.73</span
                      >
                      <span class="text-[#6C7A93] text-xs font-normal"
                        >(24h)</span
                      >
                    </div>
                  </div>
                  <div class="flex md:hidden w-auto dash-chart">
                            <form action="" class="text-left w-[114px]">
                                <div class="">
                                    <div class="no-label w-[114px]">
                                        <div class="select" id="">
                                            <div class="selectBtn" data-type="firstOption">Chart </div>
                                            <div class="selectDropdown">
                                                <div class="option" data-value="all" data-type="firstOption">
                                                    Chart </div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    Allocation
                                                </div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    Statistics
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    <div class="hidden md:flex items-center gap-2">
                        <button type="button" class=" bg-cblue rounded-3xl text-white text-[10px] font-semibold flex items-center px-3 py-1.5 gap-2 hover:bg-blue-800">Add New <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00156 2.10001C7.38816 2.10001 7.70156 2.41341 7.70156 2.80001V6.30001H11.2016C11.5882 6.30001 11.9016 6.61341 11.9016 7.00001C11.9016 7.3866 11.5882 7.70001 11.2016 7.70001H7.70156V11.2C7.70156 11.5866 7.38816 11.9 7.00156 11.9C6.61496 11.9 6.30156 11.5866 6.30156 11.2V7.70001H2.80156C2.41496 7.70001 2.10156 7.3866 2.10156 7.00001C2.10156 6.61341 2.41496 6.30001 2.80156 6.30001L6.30156 6.30001V2.80001C6.30156 2.41341 6.61496 2.10001 7.00156 2.10001Z" fill="white"/>
</svg>
</button>
<div class="">
    <div class="group h-[26px] w-[26px] rounded-[5px] flex justify-center items-center bg-lblue hover:bg-white transition relative cursor-pointer">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.19844 7.00001C4.19844 7.7732 3.57164 8.40001 2.79844 8.40001C2.02524 8.40001 1.39844 7.7732 1.39844 7.00001C1.39844 6.22681 2.02524 5.60001 2.79844 5.60001C3.57164 5.60001 4.19844 6.22681 4.19844 7.00001Z" fill="#2B313B"/>
            <path d="M8.39844 7.00001C8.39844 7.7732 7.77164 8.40001 6.99844 8.40001C6.22524 8.40001 5.59844 7.7732 5.59844 7.00001C5.59844 6.22681 6.22524 5.60001 6.99844 5.60001C7.77164 5.60001 8.39844 6.22681 8.39844 7.00001Z" fill="#2B313B"/>
            <path d="M11.1984 8.40001C11.9716 8.40001 12.5984 7.7732 12.5984 7.00001C12.5984 6.22681 11.9716 5.60001 11.1984 5.60001C10.4252 5.60001 9.79844 6.22681 9.79844 7.00001C9.79844 7.7732 10.4252 8.40001 11.1984 8.40001Z" fill="#2B313B"/>
        </svg>
        <button type="button"  @click="openModal3" class="hidden group-hover:flex absolute top-6 right-0 items-center gap-1 bg-white whitespace-nowrap text-primary text-[10px] font-semibold rounded shadow transition hover:shadow-md px-4 py-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51161 2.51006C10.0583 1.96332 10.9448 1.96332 11.4915 2.51006C12.0382 3.05679 12.0382 3.94322 11.4915 4.48996L10.9365 5.04498L8.95659 3.06508L9.51161 2.51006Z" fill="#2B313B"/>
<path d="M7.96664 4.05503L2.10156 9.92011V11.9H4.08146L9.94654 6.03493L7.96664 4.05503Z" fill="#2B313B"/>
</svg>
  Edit Portfolio
        </button>
    </div>
    
</div>
                    </div>
                </div>
                <div class="mb-6 hidden md:flex items-end justify-between">
                  
                  <div class="w-auto dash-chart">
                            <form action="" class="text-left w-[114px]">
                                <div class="">
                                    <div class="no-label w-[114px]">
                                        <div class="select" id="">
                                            <div class="selectBtn" data-type="firstOption">Chart </div>
                                            <div class="selectDropdown">
                                                <div class="option" data-value="all" data-type="firstOption">
                                                    Chart </div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    Chart 2
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                  <div
                    class="text-center hidden md:flex items-center justify-center mt-4"
                  >
                    <a
                      href=""
                      class="font-normal font-xs px-2.5 py-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition ml-3"
                      >1d</a
                    >
                    <a
                      href=""
                      class="active-tab font-normal font-xs px-2.5 py-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition mx-1"
                      >1W</a
                    >
                    <a
                      href=""
                      class="font-normal font-xs px-2.5 pxy-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition mx-1"
                      >1M</a
                    >
                    <a
                      href=""
                      class="font-normal font-xs px-2.5 pxy-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition"
                      >1Y</a
                    >
                    <a
                      href=""
                      class="font-normal font-xs px-2.5 py-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition"
                      >ALL</a
                    >
                  </div>
                </div>
                <div class="chart">
                  <canvas id="stockChart3" width="400" height="400"></canvas>
                </div>
                <div
                    class="text-center md:hidden flex items-center justify-center mt-4"
                  >
                    <a
                      href=""
                      class="font-normal font-xs px-2.5 py-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition ml-3"
                      >1d</a
                    >
                    <a
                      href=""
                      class="active-tab font-normal font-xs px-2.5 py-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition mx-1"
                      >1W</a
                    >
                    <a
                      href=""
                      class="font-normal font-xs px-2.5 pxy-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition mx-1"
                      >1M</a
                    >
                    <a
                      href=""
                      class="font-normal font-xs px-2.5 pxy-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition"
                      >1Y</a
                    >
                    <a
                      href=""
                      class="font-normal font-xs px-2.5 py-1 bg-white rounded-[10px] hover:bg-lblue text-black hover:text-cblue transition"
                      >ALL</a
                    >
                  </div>
              </div>
            </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-start justify-between gap-8">
                <div class="w-full md:w-[813px]">
                    <div class="flex items-center justify-between mb-6">

                        <h4 class=" text-2xl font-semibold text-primary">Your Assets</h4>
                        <div class="flex md:hidden items-center gap-2">
                        <button type="button" class=" bg-cblue rounded-3xl text-white text-[10px] font-semibold flex items-center px-3 py-1.5 gap-2 hover:bg-blue-800">Add New <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00156 2.10001C7.38816 2.10001 7.70156 2.41341 7.70156 2.80001V6.30001H11.2016C11.5882 6.30001 11.9016 6.61341 11.9016 7.00001C11.9016 7.3866 11.5882 7.70001 11.2016 7.70001H7.70156V11.2C7.70156 11.5866 7.38816 11.9 7.00156 11.9C6.61496 11.9 6.30156 11.5866 6.30156 11.2V7.70001H2.80156C2.41496 7.70001 2.10156 7.3866 2.10156 7.00001C2.10156 6.61341 2.41496 6.30001 2.80156 6.30001L6.30156 6.30001V2.80001C6.30156 2.41341 6.61496 2.10001 7.00156 2.10001Z" fill="white"/>
</svg>
</button>
<div class="">
    <div class="group h-[26px] w-[26px] rounded-[5px] flex justify-center items-center bg-lblue hover:bg-white transition relative cursor-pointer">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.19844 7.00001C4.19844 7.7732 3.57164 8.40001 2.79844 8.40001C2.02524 8.40001 1.39844 7.7732 1.39844 7.00001C1.39844 6.22681 2.02524 5.60001 2.79844 5.60001C3.57164 5.60001 4.19844 6.22681 4.19844 7.00001Z" fill="#2B313B"/>
            <path d="M8.39844 7.00001C8.39844 7.7732 7.77164 8.40001 6.99844 8.40001C6.22524 8.40001 5.59844 7.7732 5.59844 7.00001C5.59844 6.22681 6.22524 5.60001 6.99844 5.60001C7.77164 5.60001 8.39844 6.22681 8.39844 7.00001Z" fill="#2B313B"/>
            <path d="M11.1984 8.40001C11.9716 8.40001 12.5984 7.7732 12.5984 7.00001C12.5984 6.22681 11.9716 5.60001 11.1984 5.60001C10.4252 5.60001 9.79844 6.22681 9.79844 7.00001C9.79844 7.7732 10.4252 8.40001 11.1984 8.40001Z" fill="#2B313B"/>
        </svg>
        <button type="button" @click="openModal3" class="hidden group-hover:flex absolute top-6 right-0 items-center gap-1 bg-white whitespace-nowrap text-primary text-[10px] font-semibold rounded shadow transition hover:shadow-md px-4 py-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51161 2.51006C10.0583 1.96332 10.9448 1.96332 11.4915 2.51006C12.0382 3.05679 12.0382 3.94322 11.4915 4.48996L10.9365 5.04498L8.95659 3.06508L9.51161 2.51006Z" fill="#2B313B"/>
<path d="M7.96664 4.05503L2.10156 9.92011V11.9H4.08146L9.94654 6.03493L7.96664 4.05503Z" fill="#2B313B"/>
</svg>
  Edit Portfolio
        </button>
    </div>
    
</div>
                    </div>
                    </div>
                    <div class="product-table-wrapper no-overlay">
        <table class="w-full">
            <thead class="">
                <tr class="text-sm text-left text-black font-semibold p-4">
                    <th class="py-4 px-2.5 hidden lg:table-cell">No</th>
                    <th class="py-4 px-2.5 ">Name</th>
                    <th class="py-4 px-2.5 ">Price</th>
                    <th class="py-4 px-2.5 hidden lg:table-cell">24h %</th>
                    <th class="py-4 px-2.5 ">Holdings</th>
                    <th class="py-4 px-2.5 hidden lg:table-cell">Avg. Buy Price</th>
                    <th class="py-4 px-2.5 hidden lg:table-cell">Profit/Loss</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4 hidden lg:table-cell">
                        1
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/btc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Bitcoin <b>BTC</b></span> <span class="flex flex-col lg:hidden">Bitcoin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal table-cell">€ 22.546,00</td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal">
                        $19,498.37
                        <div class="text-sm font-semibold text-secondary">5 BTC</div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        +$18,809.11
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $580,634
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                       
                        <div class="group flex justify-center items-center relative cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00156 4.19999C6.22836 4.19999 5.60156 3.57319 5.60156 2.79999C5.60156 2.0268 6.22836 1.39999 7.00156 1.39999C7.77476 1.39999 8.40156 2.0268 8.40156 2.79999C8.40156 3.57319 7.77476 4.19999 7.00156 4.19999Z" fill="#6C7A93"/>
                        <path d="M7.00156 8.39999C6.22836 8.39999 5.60156 7.77319 5.60156 6.99999C5.60156 6.2268 6.22836 5.59999 7.00156 5.59999C7.77476 5.59999 8.40156 6.2268 8.40156 6.99999C8.40156 7.77319 7.77476 8.39999 7.00156 8.39999Z" fill="#6C7A93"/>
                        <path d="M7.00156 12.6C6.22836 12.6 5.60156 11.9732 5.60156 11.2C5.60156 10.4268 6.22836 9.79999 7.00156 9.79999C7.77476 9.79999 8.40156 10.4268 8.40156 11.2C8.40156 11.9732 7.77476 12.6 7.00156 12.6Z" fill="#6C7A93"/>
                        </svg>
        <button type="button"  @click="openModal4" class="hidden group-hover:flex absolute top-3 right-0 items-center gap-1 bg-white whitespace-nowrap text-primary text-[10px] font-semibold rounded shadow transition hover:shadow-md px-4 py-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.30156 1.39999C6.03642 1.39999 5.79404 1.5498 5.67546 1.78694L5.16894 2.79999H2.80156C2.41496 2.79999 2.10156 3.11339 2.10156 3.49999C2.10156 3.88659 2.41496 4.19999 2.80156 4.19999L2.80156 11.2C2.80156 11.9732 3.42836 12.6 4.20156 12.6H9.80156C10.5748 12.6 11.2016 11.9732 11.2016 11.2V4.19999C11.5882 4.19999 11.9016 3.88659 11.9016 3.49999C11.9016 3.11339 11.5882 2.79999 11.2016 2.79999H8.83419L8.32766 1.78694C8.20909 1.5498 7.9667 1.39999 7.70156 1.39999H6.30156ZM4.90156 5.59999C4.90156 5.21339 5.21496 4.89999 5.60156 4.89999C5.98816 4.89999 6.30156 5.21339 6.30156 5.59999V9.79999C6.30156 10.1866 5.98816 10.5 5.60156 10.5C5.21496 10.5 4.90156 10.1866 4.90156 9.79999V5.59999ZM8.40156 4.89999C8.01496 4.89999 7.70156 5.21339 7.70156 5.59999V9.79999C7.70156 10.1866 8.01496 10.5 8.40156 10.5C8.78816 10.5 9.10156 10.1866 9.10156 9.79999V5.59999C9.10156 5.21339 8.78816 4.89999 8.40156 4.89999Z" fill="#2B313B"/>
</svg>
Remove Asset
        </button>
    </div>
                    </td>
                    
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4 hidden lg:table-cell">
                        1
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/btc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Bitcoin <b>BTC</b></span> <span class="flex flex-col lg:hidden">Bitcoin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal table-cell">€ 22.546,00</td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal">
                        $19,498.37
                        <div class="text-sm font-semibold text-secondary">5 BTC</div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        +$18,809.11
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $580,634
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                       
                       <div class="group flex justify-center items-center relative cursor-pointer">
                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7.00156 4.19999C6.22836 4.19999 5.60156 3.57319 5.60156 2.79999C5.60156 2.0268 6.22836 1.39999 7.00156 1.39999C7.77476 1.39999 8.40156 2.0268 8.40156 2.79999C8.40156 3.57319 7.77476 4.19999 7.00156 4.19999Z" fill="#6C7A93"/>
                       <path d="M7.00156 8.39999C6.22836 8.39999 5.60156 7.77319 5.60156 6.99999C5.60156 6.2268 6.22836 5.59999 7.00156 5.59999C7.77476 5.59999 8.40156 6.2268 8.40156 6.99999C8.40156 7.77319 7.77476 8.39999 7.00156 8.39999Z" fill="#6C7A93"/>
                       <path d="M7.00156 12.6C6.22836 12.6 5.60156 11.9732 5.60156 11.2C5.60156 10.4268 6.22836 9.79999 7.00156 9.79999C7.77476 9.79999 8.40156 10.4268 8.40156 11.2C8.40156 11.9732 7.77476 12.6 7.00156 12.6Z" fill="#6C7A93"/>
                       </svg>
       <button type="button"  @click="openModal4" class="hidden group-hover:flex absolute top-3 right-0 items-center gap-1 bg-white whitespace-nowrap text-primary text-[10px] font-semibold rounded shadow transition hover:shadow-md px-4 py-2">
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.30156 1.39999C6.03642 1.39999 5.79404 1.5498 5.67546 1.78694L5.16894 2.79999H2.80156C2.41496 2.79999 2.10156 3.11339 2.10156 3.49999C2.10156 3.88659 2.41496 4.19999 2.80156 4.19999L2.80156 11.2C2.80156 11.9732 3.42836 12.6 4.20156 12.6H9.80156C10.5748 12.6 11.2016 11.9732 11.2016 11.2V4.19999C11.5882 4.19999 11.9016 3.88659 11.9016 3.49999C11.9016 3.11339 11.5882 2.79999 11.2016 2.79999H8.83419L8.32766 1.78694C8.20909 1.5498 7.9667 1.39999 7.70156 1.39999H6.30156ZM4.90156 5.59999C4.90156 5.21339 5.21496 4.89999 5.60156 4.89999C5.98816 4.89999 6.30156 5.21339 6.30156 5.59999V9.79999C6.30156 10.1866 5.98816 10.5 5.60156 10.5C5.21496 10.5 4.90156 10.1866 4.90156 9.79999V5.59999ZM8.40156 4.89999C8.01496 4.89999 7.70156 5.21339 7.70156 5.59999V9.79999C7.70156 10.1866 8.01496 10.5 8.40156 10.5C8.78816 10.5 9.10156 10.1866 9.10156 9.79999V5.59999C9.10156 5.21339 8.78816 4.89999 8.40156 4.89999Z" fill="#2B313B"/>
</svg>
Remove Asset
       </button>
   </div>
                   </td>
                    
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4 hidden lg:table-cell">
                        1
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/btc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Bitcoin <b>BTC</b></span> <span class="flex flex-col lg:hidden">Bitcoin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal table-cell">€ 22.546,00</td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal">
                        $19,498.37
                        <div class="text-sm font-semibold text-secondary">5 BTC</div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        +$18,809.11
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $580,634
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                       
                       <div class="group flex justify-center items-center relative cursor-pointer">
                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7.00156 4.19999C6.22836 4.19999 5.60156 3.57319 5.60156 2.79999C5.60156 2.0268 6.22836 1.39999 7.00156 1.39999C7.77476 1.39999 8.40156 2.0268 8.40156 2.79999C8.40156 3.57319 7.77476 4.19999 7.00156 4.19999Z" fill="#6C7A93"/>
                       <path d="M7.00156 8.39999C6.22836 8.39999 5.60156 7.77319 5.60156 6.99999C5.60156 6.2268 6.22836 5.59999 7.00156 5.59999C7.77476 5.59999 8.40156 6.2268 8.40156 6.99999C8.40156 7.77319 7.77476 8.39999 7.00156 8.39999Z" fill="#6C7A93"/>
                       <path d="M7.00156 12.6C6.22836 12.6 5.60156 11.9732 5.60156 11.2C5.60156 10.4268 6.22836 9.79999 7.00156 9.79999C7.77476 9.79999 8.40156 10.4268 8.40156 11.2C8.40156 11.9732 7.77476 12.6 7.00156 12.6Z" fill="#6C7A93"/>
                       </svg>
       <button type="button"  @click="openModal4" class="hidden group-hover:flex absolute top-3 right-0 items-center gap-1 bg-white whitespace-nowrap text-primary text-[10px] font-semibold rounded shadow transition hover:shadow-md px-4 py-2">
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.30156 1.39999C6.03642 1.39999 5.79404 1.5498 5.67546 1.78694L5.16894 2.79999H2.80156C2.41496 2.79999 2.10156 3.11339 2.10156 3.49999C2.10156 3.88659 2.41496 4.19999 2.80156 4.19999L2.80156 11.2C2.80156 11.9732 3.42836 12.6 4.20156 12.6H9.80156C10.5748 12.6 11.2016 11.9732 11.2016 11.2V4.19999C11.5882 4.19999 11.9016 3.88659 11.9016 3.49999C11.9016 3.11339 11.5882 2.79999 11.2016 2.79999H8.83419L8.32766 1.78694C8.20909 1.5498 7.9667 1.39999 7.70156 1.39999H6.30156ZM4.90156 5.59999C4.90156 5.21339 5.21496 4.89999 5.60156 4.89999C5.98816 4.89999 6.30156 5.21339 6.30156 5.59999V9.79999C6.30156 10.1866 5.98816 10.5 5.60156 10.5C5.21496 10.5 4.90156 10.1866 4.90156 9.79999V5.59999ZM8.40156 4.89999C8.01496 4.89999 7.70156 5.21339 7.70156 5.59999V9.79999C7.70156 10.1866 8.01496 10.5 8.40156 10.5C8.78816 10.5 9.10156 10.1866 9.10156 9.79999V5.59999C9.10156 5.21339 8.78816 4.89999 8.40156 4.89999Z" fill="#2B313B"/>
</svg>
Remove Asset
       </button>
   </div>
                   </td>
                    
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4 hidden lg:table-cell">
                        1
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/btc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Bitcoin <b>BTC</b></span> <span class="flex flex-col lg:hidden">Bitcoin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal table-cell">€ 22.546,00</td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal">
                        $19,498.37
                        <div class="text-sm font-semibold text-secondary">5 BTC</div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        +$18,809.11
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $580,634
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                       
                       <div class="group flex justify-center items-center relative cursor-pointer">
                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7.00156 4.19999C6.22836 4.19999 5.60156 3.57319 5.60156 2.79999C5.60156 2.0268 6.22836 1.39999 7.00156 1.39999C7.77476 1.39999 8.40156 2.0268 8.40156 2.79999C8.40156 3.57319 7.77476 4.19999 7.00156 4.19999Z" fill="#6C7A93"/>
                       <path d="M7.00156 8.39999C6.22836 8.39999 5.60156 7.77319 5.60156 6.99999C5.60156 6.2268 6.22836 5.59999 7.00156 5.59999C7.77476 5.59999 8.40156 6.2268 8.40156 6.99999C8.40156 7.77319 7.77476 8.39999 7.00156 8.39999Z" fill="#6C7A93"/>
                       <path d="M7.00156 12.6C6.22836 12.6 5.60156 11.9732 5.60156 11.2C5.60156 10.4268 6.22836 9.79999 7.00156 9.79999C7.77476 9.79999 8.40156 10.4268 8.40156 11.2C8.40156 11.9732 7.77476 12.6 7.00156 12.6Z" fill="#6C7A93"/>
                       </svg>
       <button type="button"  @click="openModal4" class="hidden group-hover:flex absolute top-3 right-0 items-center gap-1 bg-white whitespace-nowrap text-primary text-[10px] font-semibold rounded shadow transition hover:shadow-md px-4 py-2">
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.30156 1.39999C6.03642 1.39999 5.79404 1.5498 5.67546 1.78694L5.16894 2.79999H2.80156C2.41496 2.79999 2.10156 3.11339 2.10156 3.49999C2.10156 3.88659 2.41496 4.19999 2.80156 4.19999L2.80156 11.2C2.80156 11.9732 3.42836 12.6 4.20156 12.6H9.80156C10.5748 12.6 11.2016 11.9732 11.2016 11.2V4.19999C11.5882 4.19999 11.9016 3.88659 11.9016 3.49999C11.9016 3.11339 11.5882 2.79999 11.2016 2.79999H8.83419L8.32766 1.78694C8.20909 1.5498 7.9667 1.39999 7.70156 1.39999H6.30156ZM4.90156 5.59999C4.90156 5.21339 5.21496 4.89999 5.60156 4.89999C5.98816 4.89999 6.30156 5.21339 6.30156 5.59999V9.79999C6.30156 10.1866 5.98816 10.5 5.60156 10.5C5.21496 10.5 4.90156 10.1866 4.90156 9.79999V5.59999ZM8.40156 4.89999C8.01496 4.89999 7.70156 5.21339 7.70156 5.59999V9.79999C7.70156 10.1866 8.01496 10.5 8.40156 10.5C8.78816 10.5 9.10156 10.1866 9.10156 9.79999V5.59999C9.10156 5.21339 8.78816 4.89999 8.40156 4.89999Z" fill="#2B313B"/>
</svg>
Remove Asset
       </button>
   </div>
                   </td>
                    
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4 hidden lg:table-cell">
                        1
                    </td>
                    <td class="text-primary text-sm font-medium"><span class="flex item items-center gap-1"> <img src="@/assets/img/logos/btc.png" class="mr-2 h-6 w-6" alt=""> <span class="hidden lg:flex">Bitcoin <b>BTC</b></span> <span class="flex flex-col lg:hidden">Bitcoin <span class=" text-[10px] font-normal">M.Cap $380 B</span></span>                
                    </span>
                    
                  </td>
                    <td class="text-primary text-sm font-normal ">€ 22.546,00</td>
                    <td class="hidden lg:table-cell">
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal">
                        $19,498.37
                        <div class="text-sm font-semibold text-secondary">5 BTC</div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        +$18,809.11
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                        $580,634
                        <div class="flex items-center text-sm font-normal" ><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" ></path></svg></div>
                    </td>
                    <td class="text-primary text-sm font-normal hidden lg:table-cell">
                       
                       <div class="group flex justify-center items-center relative cursor-pointer">
                           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7.00156 4.19999C6.22836 4.19999 5.60156 3.57319 5.60156 2.79999C5.60156 2.0268 6.22836 1.39999 7.00156 1.39999C7.77476 1.39999 8.40156 2.0268 8.40156 2.79999C8.40156 3.57319 7.77476 4.19999 7.00156 4.19999Z" fill="#6C7A93"/>
                       <path d="M7.00156 8.39999C6.22836 8.39999 5.60156 7.77319 5.60156 6.99999C5.60156 6.2268 6.22836 5.59999 7.00156 5.59999C7.77476 5.59999 8.40156 6.2268 8.40156 6.99999C8.40156 7.77319 7.77476 8.39999 7.00156 8.39999Z" fill="#6C7A93"/>
                       <path d="M7.00156 12.6C6.22836 12.6 5.60156 11.9732 5.60156 11.2C5.60156 10.4268 6.22836 9.79999 7.00156 9.79999C7.77476 9.79999 8.40156 10.4268 8.40156 11.2C8.40156 11.9732 7.77476 12.6 7.00156 12.6Z" fill="#6C7A93"/>
                       </svg>
       <button type="button"  @click="openModal4" class="hidden group-hover:flex absolute top-3 right-0 items-center gap-1 bg-white whitespace-nowrap text-primary text-[10px] font-semibold rounded shadow transition hover:shadow-md px-4 py-2">
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.30156 1.39999C6.03642 1.39999 5.79404 1.5498 5.67546 1.78694L5.16894 2.79999H2.80156C2.41496 2.79999 2.10156 3.11339 2.10156 3.49999C2.10156 3.88659 2.41496 4.19999 2.80156 4.19999L2.80156 11.2C2.80156 11.9732 3.42836 12.6 4.20156 12.6H9.80156C10.5748 12.6 11.2016 11.9732 11.2016 11.2V4.19999C11.5882 4.19999 11.9016 3.88659 11.9016 3.49999C11.9016 3.11339 11.5882 2.79999 11.2016 2.79999H8.83419L8.32766 1.78694C8.20909 1.5498 7.9667 1.39999 7.70156 1.39999H6.30156ZM4.90156 5.59999C4.90156 5.21339 5.21496 4.89999 5.60156 4.89999C5.98816 4.89999 6.30156 5.21339 6.30156 5.59999V9.79999C6.30156 10.1866 5.98816 10.5 5.60156 10.5C5.21496 10.5 4.90156 10.1866 4.90156 9.79999V5.59999ZM8.40156 4.89999C8.01496 4.89999 7.70156 5.21339 7.70156 5.59999V9.79999C7.70156 10.1866 8.01496 10.5 8.40156 10.5C8.78816 10.5 9.10156 10.1866 9.10156 9.79999V5.59999C9.10156 5.21339 8.78816 4.89999 8.40156 4.89999Z" fill="#2B313B"/>
</svg>
Remove Asset
       </button>
   </div>
                   </td>
                    
                    
                </tr>
        </tbody>
    </table>
        </div>
                </div>
                <div class="w-full md:w-[367px]">
                    <h4 class=" text-2xl font-semibold mb-6 text-primary">Recent Activity</h4>
                    <div class="product-table-wrapper no-overlay">
        <table class="w-full">
            <thead class="">
                <tr class="text-sm text-left text-black font-semibold p-4">
                    <th class="py-4 px-2.5">Date</th>
                    <th class="py-4 px-2.5">Status</th>
                    <th class="py-4 px-2.5">Price</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium px-4 py-1.5">
                        SEP
                        <div class="text-secondary">18</div>
                    </td>
                    <td class="text-primary text-sm font-medium">
                        <div class="flex item items-center gap-1">
                             <b>Bought Bitcoin</b>             
                        </div>
                        <div class="text-[10px] font-normal text-secondary">Using Binance Wallet</div>
                  </td>
                   
                    <td class="text-primary text-sm font-normal">
                        5 BTC
                        <div class="text-[10px] font-normal text-[#23A638]">+$15.780.00</div>
                    </td>                   
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium px-4 py-1.5">
                        SEP
                        <div class="text-secondary">17</div>
                    </td>
                    <td class="text-primary text-sm font-medium">
                        <div class="flex item items-center gap-1">
                             <b>Bought Bitcoin</b>             
                        </div>
                        <div class="text-[10px] font-normal text-secondary">Using Binance Wallet</div>
                  </td>
                   
                    <td class="text-primary text-sm font-normal">
                        5 BTC
                        <div class="text-[10px] font-normal text-[#23A638]">+$15.780.00</div>
                    </td>                   
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium px-4 py-1.5">
                        SEP
                        <div class="text-secondary">18</div>
                    </td>
                    <td class="text-primary text-sm font-medium">
                        <div class="flex item items-center gap-1">
                             <b>Bought Bitcoin</b>             
                        </div>
                        <div class="text-[10px] font-normal text-secondary">Using Binance Wallet</div>
                  </td>
                   
                    <td class="text-primary text-sm font-normal">
                        5 BTC
                        <div class="text-[10px] font-normal text-[#23A638]">+$15.780.00</div>
                    </td>                   
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium px-4 py-1.5">
                        SEP
                        <div class="text-secondary">18</div>
                    </td>
                    <td class="text-primary text-sm font-medium">
                        <div class="flex item items-center gap-1">
                             <b>Bought Bitcoin</b>             
                        </div>
                        <div class="text-[10px] font-normal text-secondary">Using Binance Wallet</div>
                  </td>
                   
                    <td class="text-primary text-sm font-normal">
                        5 BTC
                        <div class="text-[10px] font-normal text-[#23A638]">+$15.780.00</div>
                    </td>                   
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium px-4 py-1.5">
                        SEP
                        <div class="text-secondary">18</div>
                    </td>
                    <td class="text-primary text-sm font-medium">
                        <div class="flex item items-center gap-1">
                             <b>Bought Bitcoin</b>             
                        </div>
                        <div class="text-[10px] font-normal text-secondary">Using Binance Wallet</div>
                  </td>
                   
                    <td class="text-primary text-sm font-normal">
                        5 BTC
                        <div class="text-[10px] font-normal text-[#23A638]">+$15.780.00</div>
                    </td>                   
                    
                </tr>
              
        </tbody>
    </table>
        </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="isModalOpen2" class="modal-lg fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal2">
        <div class="modal bg-white rounded-lg p-6">   
            <div class="sing-in-form-area relative">
                <button @click="closeModal2" class="absolute top-0 right-0 ">
                    <svg class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="form-inner-area my-6">

                <h6 class=" text-2xl font-semibold text-primary text-center mb-10">Create Portfolio</h6>
                <div class="mb-10">
                    <label for="portname" class=" text-primary text-ms font-normal mb-2 block">Portfolio Name</label>
                    <input type="text" name="portname" class=" border-lgray w-full tex-lgray rounded-[10px] border px-2.5 py-4 hover:outline-none focus:outline-none transition hover:border-cblue focus:border-cblu" placeholder="Enter your portfolio name...">
                    <span class="text-xs text-primary font-normal">0/32 characters</span>
                </div>
                <button type="button" class=" w-full py-4 px-6 text-center bg-cblue text-white text-base transition hover:bg-[#1c51b0] font-bold rounded-[10px] mb-4">Create Portfolio</button>
            </div>
        </div>
    </div>
    <div v-if="isModalOpen3" class="modal-lg fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal3">
        <div class="modal bg-white rounded-lg p-6">   
            <div class="sing-in-form-area relative">
                <button @click="closeModal3" class="absolute top-0 right-0 ">
                    <svg class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="form-inner-area my-6">

                <h6 class=" text-2xl font-semibold text-primary text-center mb-10">Edit Portfolio</h6>
                <div class="mb-10">
                    <label for="portname" class=" text-primary text-ms font-normal mb-2 block">Portfolio Name</label>
                    <input type="text" name="portname" class=" border-lgray w-full tex-lgray rounded-[10px] border px-2.5 py-4 hover:outline-none focus:outline-none transition hover:border-cblue focus:border-cblu" placeholder="Enter your portfolio name...">
                    <span class="text-xs text-primary font-normal">0/32 characters</span>
                </div>
                <button type="button" class=" w-full py-4 px-6 text-center bg-cblue text-white text-base transition hover:bg-[#1c51b0] font-bold rounded-[10px] mb-4">Edit Portfolio</button>
            </div>
        </div>
    </div>
    <div v-if="isModalOpen4" class="modal-lg fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal4">
        <div class="modal bg-white rounded-lg p-6">   
            <div class="sing-in-form-area relative">
                <button @click="closeModal4" class="absolute top-0 right-0 ">
                    <svg class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="form-inner-area my-6">

                <h6 class=" text-2xl font-semibold text-primary text-center mb-10">Remove Assets</h6>
                <p class="mb-10 text-sm font-normal text-primary text-center">
                    Are you sure you want to remove this coin? Any transactions associated with this coin will also be removed.
                </p>
                <button type="button" class=" w-full py-4 px-6 text-center bg-[#E71212] text-white text-base transition hover:bg-[#a11010] font-bold rounded-[10px] mb-4">remove</button>
                <button type="button" class=" w-full py-4 px-6 text-center bg-secondary text-white text-base transition hover:bg-gray-600 font-bold rounded-[10px] mb-4">Cancel</button>
            </div>
        </div>
    </div>
</template>