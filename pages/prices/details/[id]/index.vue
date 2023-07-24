<script>
import Chart from "chart.js/auto/auto.mjs";
export default {
  data() {
    return {
      showDiv: {
        1: false,
        2: false,
        // Add more keys for additional toggle buttons and set them to false initially
      },
      config1: {
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
      priceChart1: null,
      buttonTrue: false,
    };
  },
  mounted() {
    this.ChartRender();

    /* custom selectors News Start */
    let index = 1;

    const on = (listener, query, fn) => {
      document.querySelectorAll(query).forEach((item) => {
        item.addEventListener(listener, (el) => {
          fn(el);
        });
      });
    };

    on("click", ".selectBtn", (item) => {
      item.target.classList.toggle("toggle");
      const next = item.target.nextElementSibling;
      next.classList.toggle("toggle");
      next.style.zIndex = index++;
    });

    document.addEventListener("mouseup", function (e) {
      const containers = document.querySelectorAll(".selectBtn");
      if (containers.length > 0) {
        const options = document.querySelectorAll(".selectDropdown");
        containers.forEach(function (container, index) {
          if (!container.contains(e.target)) {
            container.classList.remove("toggle");
            options[index].classList.remove("toggle");
          }
        });
      }
    });
    on("click", ".option", (item) => {
      item.target.parentElement.classList.remove("toggle");
      const parent = item.target.closest(".select").children[0];
      parent.setAttribute("data-type", item.target.getAttribute("data-type"));
      parent.innerText = item.target.innerText;
    });
    /* custom selectors News End */
  },
  methods: {
    toggleDiv(buttonNumber) {
      this.showDiv[buttonNumber] = !this.showDiv[buttonNumber];
    },
    ChartRender() {
      if (this.priceChart1 != null) {
        this.priceChart1.destroy();
      }
      this.priceChart1 = new Chart(
        document.getElementById("priceChart1"),
        this.config1
      );
    },
    removeClass() {
      // Logic to remove the class from the div
      // Replace 'your-div-class' with the actual class name of your div
      const divElement = document.querySelector(".post-content");
      divElement.classList.remove("mh-fixed");
      this.buttonTrue = true;
    },
  },
};
</script>

<style scoped>
.priceChart1 canvas {
  max-height: 60px;
  max-width: 170px;
}
</style>
<template>
  <section class="w-full bg-white p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">
      <!-- container start -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between mt-12 mb-4">
        <h2
          class="text-black text-[32px] font-normal mb-1 flex items-center gap-1"
        >
          <img src="@/assets/img/logos/btc.png" class="w-8 h-8" alt="" />
          Bitcoin <b>BTC</b>
        </h2>

        <div class="flex flex-col justify-start md:justify-between md:flex-row  items-start md:items-center gap-4">
          <div class="stars flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04917 3.92704C9.34852 3.00573 10.6519 3.00573 10.9513 3.92704L12.0209 7.21883C12.1547 7.63086 12.5387 7.90982 12.9719 7.90982H16.4331C17.4018 7.90982 17.8046 9.14943 17.0209 9.71883L14.2207 11.7533C13.8702 12.0079 13.7236 12.4593 13.8575 12.8713L14.927 16.1631C15.2264 17.0844 14.1719 17.8505 13.3882 17.2811L10.588 15.2467C10.2375 14.9921 9.76293 14.9921 9.41244 15.2467L6.61227 17.2811C5.82856 17.8505 4.77408 17.0844 5.07343 16.1631L6.143 12.8713C6.27688 12.4593 6.13022 12.0079 5.77973 11.7533L2.97956 9.71883C2.19585 9.14943 2.59862 7.90982 3.56735 7.90982H7.02855C7.46177 7.90982 7.84573 7.63086 7.9796 7.21883L9.04917 3.92704Z"
                fill="#F2994A"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04917 3.92704C9.34852 3.00573 10.6519 3.00573 10.9513 3.92704L12.0209 7.21883C12.1547 7.63086 12.5387 7.90982 12.9719 7.90982H16.4331C17.4018 7.90982 17.8046 9.14943 17.0209 9.71883L14.2207 11.7533C13.8702 12.0079 13.7236 12.4593 13.8575 12.8713L14.927 16.1631C15.2264 17.0844 14.1719 17.8505 13.3882 17.2811L10.588 15.2467C10.2375 14.9921 9.76293 14.9921 9.41244 15.2467L6.61227 17.2811C5.82856 17.8505 4.77408 17.0844 5.07343 16.1631L6.143 12.8713C6.27688 12.4593 6.13022 12.0079 5.77973 11.7533L2.97956 9.71883C2.19585 9.14943 2.59862 7.90982 3.56735 7.90982H7.02855C7.46177 7.90982 7.84573 7.63086 7.9796 7.21883L9.04917 3.92704Z"
                fill="#F2994A"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04917 3.92704C9.34852 3.00573 10.6519 3.00573 10.9513 3.92704L12.0209 7.21883C12.1547 7.63086 12.5387 7.90982 12.9719 7.90982H16.4331C17.4018 7.90982 17.8046 9.14943 17.0209 9.71883L14.2207 11.7533C13.8702 12.0079 13.7236 12.4593 13.8575 12.8713L14.927 16.1631C15.2264 17.0844 14.1719 17.8505 13.3882 17.2811L10.588 15.2467C10.2375 14.9921 9.76293 14.9921 9.41244 15.2467L6.61227 17.2811C5.82856 17.8505 4.77408 17.0844 5.07343 16.1631L6.143 12.8713C6.27688 12.4593 6.13022 12.0079 5.77973 11.7533L2.97956 9.71883C2.19585 9.14943 2.59862 7.90982 3.56735 7.90982H7.02855C7.46177 7.90982 7.84573 7.63086 7.9796 7.21883L9.04917 3.92704Z"
                fill="#F2994A"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04917 3.92704C9.34852 3.00573 10.6519 3.00573 10.9513 3.92704L12.0209 7.21883C12.1547 7.63086 12.5387 7.90982 12.9719 7.90982H16.4331C17.4018 7.90982 17.8046 9.14943 17.0209 9.71883L14.2207 11.7533C13.8702 12.0079 13.7236 12.4593 13.8575 12.8713L14.927 16.1631C15.2264 17.0844 14.1719 17.8505 13.3882 17.2811L10.588 15.2467C10.2375 14.9921 9.76293 14.9921 9.41244 15.2467L6.61227 17.2811C5.82856 17.8505 4.77408 17.0844 5.07343 16.1631L6.143 12.8713C6.27688 12.4593 6.13022 12.0079 5.77973 11.7533L2.97956 9.71883C2.19585 9.14943 2.59862 7.90982 3.56735 7.90982H7.02855C7.46177 7.90982 7.84573 7.63086 7.9796 7.21883L9.04917 3.92704Z"
                fill="#F2994A"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04917 3.92704C9.34852 3.00573 10.6519 3.00573 10.9513 3.92704L12.0209 7.21883C12.1547 7.63086 12.5387 7.90982 12.9719 7.90982H16.4331C17.4018 7.90982 17.8046 9.14943 17.0209 9.71883L14.2207 11.7533C13.8702 12.0079 13.7236 12.4593 13.8575 12.8713L14.927 16.1631C15.2264 17.0844 14.1719 17.8505 13.3882 17.2811L10.588 15.2467C10.2375 14.9921 9.76293 14.9921 9.41244 15.2467L6.61227 17.2811C5.82856 17.8505 4.77408 17.0844 5.07343 16.1631L6.143 12.8713C6.27688 12.4593 6.13022 12.0079 5.77973 11.7533L2.97956 9.71883C2.19585 9.14943 2.59862 7.90982 3.56735 7.90982H7.02855C7.46177 7.90982 7.84573 7.63086 7.9796 7.21883L9.04917 3.92704Z"
                fill="#D3D7DE"
              />
            </svg>
            <span class="text-base font-normal text-primary ml-2">4.0</span>
            <a
              href=""
              class="ml-4 px-4 border-l border-lblue text-cblue font-semibold text-xs opacity-100 transition hover:opacity-90"
              >Add Review</a
            >
          </div>
         <div class="flex flex-row  items-start md:items-center justify-start md:justify-between gap-2">
          <div class="w-full lg:w-auto">
            <form action="" class="text-left w-[70px] mx-auto md:mx-0">
              <div class="">
                <div class="no-label w-[70px] mx-auto md:mx-0">
                  <div class="select" id="price">
                    <div class="selectBtn" data-type="firstOption">USD</div>
                    <div class="selectDropdown">
                      <div
                        class="option"
                        data-value="all"
                        data-type="firstOption"
                      >
                        USD
                      </div>
                      <div
                        class="option"
                        data-type="secondOption"
                        data-value="internet-tv"
                      >
                        AUD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <button
            type="button"
            class="text-primary text-sm font-normal whitespace-nowrap px-3 py-2.5 border rounded-full border-lgray bg-transparent hover:bg-lgray flex items-center gap-1 transition"
          >
            Add to watchlist
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.81005 2.90346C6.86992 2.71919 7.1306 2.71919 7.19047 2.90346L7.93917 5.20771C8.09982 5.70214 8.56056 6.03689 9.08044 6.03689H11.5033C11.697 6.03689 11.7776 6.28482 11.6208 6.3987L9.66071 7.82281C9.24013 8.12838 9.06414 8.67002 9.22479 9.16445L9.97349 11.4687C10.0334 11.653 9.82246 11.8062 9.66572 11.6923L7.7056 10.2682C7.28502 9.96263 6.7155 9.96263 6.29492 10.2682L4.3348 11.6923C4.17805 11.8062 3.96716 11.653 4.02703 11.4687L4.77573 9.16445C4.93638 8.67002 4.76039 8.12838 4.3398 7.82281L2.37968 6.3987C2.22294 6.28482 2.30349 6.03689 2.49724 6.03689H4.92008C5.43995 6.03689 5.9007 5.70214 6.06135 5.20771L6.81005 2.90346Z"
                stroke="#2B313B"
              />
            </svg>
          </button>
          <div
            class="search-wrapper w-full lg:w-auto flex order-1 lg:order-2 mb-0"
          >
            <div
              class="search-inner w-full lg:w-auto relative bg-white border border-lgray rounded-full p-[10px]"
            >
              <form action="" class="flex items-center w-[118px] lg:w-auto">
                <span class="pr-3 pl-1">
                  <svg
                    class="inline-flex w-auto"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="text-lgray font-normal focus:outline-none active:outline-none w-full lg:w-auto hover:outline-none text-sm bg-transparent"
                  placeholder="Search Assets"
                />
              </form>
            </div>
          </div>
         </div>
        </div>
      </div>
      <div
        class="detail-content flex flex-col gap-6 lg:flex-row items-start justify-between"
      >
        <div class="w-full lg:w-[743px]">
          <div class="price-content">
            <div class="chart-content mb-5">
              <div class="bg-white border border-lblue rounded-2xl p-6">
                <div class="mb-6 flex items-end justify-between">
                  <div class="">
                    <div
                      class="text-primary text-left text-xs font-normal mb-1"
                    >
                      Price
                    </div>
                    <div
                      class="text-primary text-2xl font-semibold flex items-center gap-1"
                    >
                      $19,747.64
                      <span class="text-[#23A638] font-normal text-sm ml-2 mr-1"
                        >+4.25 %</span
                      >
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z"
                          fill="#23A638"
                        />
                      </svg>
                      <span class="text-[#6C7A93] text-[10px] font-normal"
                        >(24h)</span
                      >
                    </div>
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
                  <canvas id="priceChart1" width="400" height="400"></canvas>
                </div>
              </div>
            </div>

            <div class="post-content">
              <div class="single-content border border-lblue rounded-xl mb-6">
                <h4
                  @click="toggleDiv(1)"
                  :class="{ 'border-b': showDiv[1], '': !showDiv[1] }"
                  class="font-semibold text-2xl text-primary flex items-center justify-between border-lblue py-4 px-6 rounded cursor-pointer"
                >
                  What is Bitcoin?
                  <span class="arrow">
                    <svg
                      :class="{
                        'rotate-0': showDiv[1],
                        ' rotate-90': !showDiv[1],
                      }"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.35147 8.75147C6.8201 8.28284 7.5799 8.28284 8.04853 8.75147L12 12.7029L15.9515 8.75147C16.4201 8.28284 17.1799 8.28284 17.6485 8.75147C18.1172 9.2201 18.1172 9.9799 17.6485 10.4485L12.8485 15.2485C12.3799 15.7172 11.6201 15.7172 11.1515 15.2485L6.35147 10.4485C5.88284 9.9799 5.88284 9.2201 6.35147 8.75147Z"
                        fill="#2B313B"
                      />
                    </svg>
                  </span>
                </h4>

                <div
                  v-if="showDiv[1]"
                  class="py-6 font-normal text-secondary transition-all duration-300 overflow-hidden text-base"
                >
                  <div class="inn-content px-6">
                    <p class="my-4">
                      Bitcoin (BTC) is the first decentralized digital currency
                      in history. Just after the financial crisis in 2008, the
                      white paper "Bitcoin: A Peer-to-Peer Electronic Cash
                      System" was published under the pseudonym of Satoshi
                      Nakamoto. Nakamoto invented Bitcoin in response to the
                      need for an electronic payment system based on the
                      revolutionary blockchain technology, which is used to
                      record and control transactions, instead of trust. This
                      payment system makes it possible for two parties to
                      perform transactions directly with each other without the
                      intervention of a third party such as a bank.
                    </p>
                    <div class="flex items-center gap-1">
                      <span
                        class="text-cblue bg-lblue text-sm font-semibold px-3.5 py-0.5 rounded-full"
                        >Wikipedia</span
                      >
                      <span
                        class="text-cblue bg-lblue text-sm font-semibold px-3.5 py-0.5 rounded-full"
                        >Whitepaper</span
                      >
                      <span
                        class="text-cblue bg-lblue text-sm font-semibold px-3.5 py-0.5 rounded-full"
                      >
                        Github</span
                      >
                      <span
                        class="text-cblue bg-lblue text-sm font-semibold px-3.5 py-0.5 rounded-full"
                      >
                        Website</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-content border border-lblue rounded-xl mb-6">
                <h4
                  @click="toggleDiv(2)"
                  :class="{ 'border-b': showDiv[2], '': !showDiv[2] }"
                  class="font-semibold text-2xl text-primary flex items-center justify-between border-lblue py-4 px-6 rounded cursor-pointer"
                >
                  Related Assets
                  <span class="arrow">
                    <svg
                      :class="{
                        'rotate-0': showDiv[2],
                        ' rotate-90': !showDiv[2],
                      }"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.35147 8.75147C6.8201 8.28284 7.5799 8.28284 8.04853 8.75147L12 12.7029L15.9515 8.75147C16.4201 8.28284 17.1799 8.28284 17.6485 8.75147C18.1172 9.2201 18.1172 9.9799 17.6485 10.4485L12.8485 15.2485C12.3799 15.7172 11.6201 15.7172 11.1515 15.2485L6.35147 10.4485C5.88284 9.9799 5.88284 9.2201 6.35147 8.75147Z"
                        fill="#2B313B"
                      />
                    </svg>
                  </span>
                </h4>

                <div
                  v-if="showDiv[2]"
                  class="py-6 font-normal text-secondary transition-all duration-300 overflow-hidden text-base"
                >
                  <div class="inn-content px-6">
                    <h4 class="text-base font-semibold text-primary my-4">
                      Trending Assets
                    </h4>
                    <p class="my-4">
                      Assets with the biggest change in unique page views on
                      coinbase.com over the past 24 hours.
                    </p>
                  </div>
                  <div
                    class="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 p-6 border-b border-lblue"
                  >
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/eos.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      EOS
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/suku.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      SUKU
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/idex.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      IDEX
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/mxc.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      MXC
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/api3.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      API3
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/xrp.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      XRP
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/dia.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      DIA
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/xyo.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      XYO
                    </div>
                  </div>
                  <div class="inn-content px-6">
                    <h4 class="text-base font-semibold text-primary my-4">
                      Popular Cryptocurrencies
                    </h4>
                    <p class="my-4">
                      A selection of cryptocurrencies in the top 50 by market
                      cap.
                    </p>
                  </div>
                  <div
                    class="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 p-6 border-b border-lblue"
                  >
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/bitcoin.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Bitcoin
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/ethereum.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Ethereum
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/tether.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Tether
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/binance.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Binance USD
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/usd-coin.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      USD Coin
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/cardano.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Cardano
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/solana.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Solana
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/polkadot.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Polkadot
                    </div>
                  </div>
                  <div class="inn-content px-6">
                    <h4 class="text-base font-semibold text-primary my-4">
                      Recently Added
                    </h4>
                    <p class="my-4">
                      A selection of the most recently added cryptocurrencies.
                    </p>
                  </div>
                  <div
                    class="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 p-6 border-b border-lblue"
                  >
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/near-p.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      NEAR p
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/mxc.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      MXC
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/ooki-p.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Ooki p
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/Coinbase-w.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Coinbase W
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/celer-n.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Celer N
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/league.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      League
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/stargate-f.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Stargate F
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/superrare.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      SuperRare
                    </div>
                  </div>
                  <div class="inn-content px-6">
                    <h4 class="text-base font-semibold text-primary my-4">
                      Comparable Market Cap
                    </h4>
                    <p class="my-4">
                      Of all the assets on Coinbase, these 8 are the closest to
                      Bitcoin in market cap.
                    </p>
                  </div>
                  <div
                    class="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 p-6"
                  >
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/bitcoin.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Bitcoin
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/ethereum.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Ethereum
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/tether.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Tether
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/binance.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Binance USD
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/usd-coin.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      USD Coin
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/cardano.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Cardano
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/solana.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Solana
                    </div>
                    <div
                      class="flex items-center text-primary text-base font-medium gap-2.5"
                    >
                      <div class="img-s w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="@/assets/img/trending/polkadot.png"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                      Polkadot
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-content border border-lblue rounded-xl mb-6">
                <h4
                  @click="toggleDiv(3)"
                  :class="{ 'border-b': showDiv[3], '': !showDiv[3] }"
                  class="font-semibold text-2xl text-primary flex items-center justify-between border-lblue py-4 px-6 rounded cursor-pointer"
                >
                  Social
                  <span class="arrow">
                    <svg
                      :class="{
                        'rotate-0': showDiv[3],
                        ' rotate-90': !showDiv[3],
                      }"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.35147 8.75147C6.8201 8.28284 7.5799 8.28284 8.04853 8.75147L12 12.7029L15.9515 8.75147C16.4201 8.28284 17.1799 8.28284 17.6485 8.75147C18.1172 9.2201 18.1172 9.9799 17.6485 10.4485L12.8485 15.2485C12.3799 15.7172 11.6201 15.7172 11.1515 15.2485L6.35147 10.4485C5.88284 9.9799 5.88284 9.2201 6.35147 8.75147Z"
                        fill="#2B313B"
                      />
                    </svg>
                  </span>
                </h4>

                <div
                  v-if="showDiv[3]"
                  class="py-6 font-normal text-secondary transition-all duration-300 overflow-hidden text-base"
                >
                  <div class="inn-content border-b border-lblue px-6">
                    <h4 class="text-base font-semibold text-primary my-4">
                      Bitcoin on social media.
                    </h4>
                    <p class="my-4">
                      Bitcoin was mentioned in 263,282 out of 1,433,869 social
                      media posts on Twitter and Reddit on Sep 04, 2022. 139,452
                      unique individuals are talking about Bitcoin and it is
                      ranked #1 in most mentions and activity from collected
                      posts.
                    </p>
                  </div>
                  <h4 class="text-base font-semibold text-primary my-4 px-6">
                    Key indicators
                  </h4>
                  <div
                    class="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 p-6"
                  >
                    <div class="">
                      <div class="text-[10px] text-secondary font-normal mb-3">
                        CONTRIBUTORS
                      </div>
                      <div class="text-base font-semibold text-primary">
                        139,452 People
                      </div>
                    </div>
                    <div class="">
                      <div class="text-[10px] text-secondary font-normal mb-3">
                        POSTS
                      </div>
                      <div class="text-base font-semibold text-primary">
                        263,282 Posts
                      </div>
                    </div>
                    <div class="">
                      <div class="text-[10px] text-secondary font-normal mb-3">
                        DOMINANCE
                      </div>
                      <div class="text-base font-semibold text-primary">
                        18.36%
                      </div>
                    </div>
                    <div class="">
                      <div class="text-[10px] text-secondary font-normal mb-3">
                        VOLUME RANK
                      </div>
                      <div class="text-base font-semibold text-primary">#1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[425px]">
          <div class="sidebar-wrapper">
            <div class="bg-white py-4 rounded-2xl mb-6 border border-lblue">
              <h4
                class="text-2xl text-primary font-semibold px-6 pb-4 border-b border-lblue"
              >
                Market Stats
              </h4>
              <div
                class="grid grid-cols-3 gap-6 px-6 py-4 border-b border-lblue"
              >
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    Market Cap
                  </div>
                  <div class="text-base font-semibold text-primary">
                    $377.6B
                  </div>
                </div>
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    VOLUME (24H)
                  </div>
                  <div class="text-base font-semibold text-primary">$28.2B</div>
                </div>
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    CIRCULATING SUPPLY
                  </div>
                  <div class="text-base font-semibold text-primary">
                    19.1M BTC
                  </div>
                </div>
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    POPULARITY
                  </div>
                  <div class="text-base font-semibold text-primary">#1</div>
                </div>
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    ALL TIME HIGH
                  </div>
                  <div class="text-base font-semibold text-primary">
                    $68,789.63
                  </div>
                </div>
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    TYPICAL HOLD TIME
                  </div>
                  <div class="text-base font-semibold text-primary">
                    135 days
                  </div>
                </div>
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    PRICE CHANGE (1H)
                  </div>
                  <div
                    class="text-base font-semibold text-[#E71212] flex items-center gap-1"
                  >
                    -0.09%
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 6L0 0L8 8.65261e-07L4 6Z" fill="#E71212" />
                    </svg>
                  </div>
                </div>
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    PRICE CHANGE (24H)
                  </div>
                  <div
                    class="text-base font-semibold text-[#23A638] flex items-center gap-1"
                  >
                    +0.08%
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z"
                        fill="#23A638"
                      />
                    </svg>
                  </div>
                </div>
                <div class="">
                  <div class="text-[10px] text-secondary font-normal mb-3">
                    PRICE CHANGE (7D)
                  </div>
                  <div
                    class="text-base font-semibold text-[#E71212] flex items-center gap-1"
                  >
                    -0.56%
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 6L0 0L8 8.65261e-07L4 6Z" fill="#E71212" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h5 class="mb-4 text-base font-normal text-primary">
                  Trading Activity
                </h5>
                <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px] mb-1.5">
                  <div
                    class="h-[10px] bg-cblue rounded-[10px]"
                    style="width: 90%"
                  ></div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-secondary text-[10px] font-normal"
                    >96% Buy</span
                  >
                  <span class="text-secondary text-[10px] font-normal"
                    >4% Sell</span
                  >
                </div>
              </div>
            </div>

            <div
              class="converter bg-white py-4 rounded-2xl mb-6 border border-lblue"
            >
              <h4
                class="text-2xl text-primary font-semibold px-6 pb-4 border-b border-lblue"
              >
                BUSD to EUR
              </h4>
              <div class="flex items-center justify-between mb-8 pt-4 px-6">
                <div>
                  <label
                    for="weight"
                    class="block mb-1 text-xs font-normal text-black"
                    >From</label
                  >
                  <div class="flex">
                    <span
                      class="inline-flex items-center bg-white text-black font-normal text-xs border-r-0 border-lblue border rounded-l-md"
                    >
                      <div class="">
                        <div class="no-label w-[85px]">
                          <div class="select">
                            <div
                              class="selectBtn flex items-center gap-1"
                              data-type="firstOption"
                            >
                              <img
                                src="@/assets/img/exchange/Binance.png"
                                height="24"
                                width="24"
                                class="rounded-full overflow-hidden"
                                alt=""
                              />
                              USD
                            </div>
                            <div class="selectDropdown">
                              <div
                                class="option"
                                data-value="all"
                                data-type="firstOption"
                              >
                                EUR
                              </div>
                              <div
                                class="option"
                                data-type="secondOption"
                                data-value="internet-tv"
                              >
                                USD
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                    <input
                      type="text"
                      id="weight"
                      class="rounded-none rounded-r-md bg-white border border-lblue text-black font-normal text-xs focus:outline-none block flex-1 min-w-0 w-full p-2.5"
                      placeholder=""
                    />
                  </div>
                </div>

                <button type="button" class="toggle-button pt-6 mx-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 5C7.44772 5 7 5.44771 7 6C7 6.55228 7.44772 7 8 7L13.5858 7L12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711C12.6834 10.0976 13.3166 10.0976 13.7071 9.70711L16.7071 6.70711C16.8946 6.51957 17 6.26522 17 6C17 5.73478 16.8946 5.48043 16.7071 5.29289L13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289C11.9024 2.68342 11.9024 3.31658 12.2929 3.70711L13.5858 5L8 5Z"
                      fill="#0052FE"
                    />
                    <path
                      d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13L6.41421 13L7.70711 11.7071C8.09763 11.3166 8.09763 10.6834 7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929L3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14C3 14.2652 3.10536 14.5196 3.29289 14.7071L6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.7071 17.7071C8.09763 17.3166 8.09763 16.6834 7.70711 16.2929L6.41421 15L12 15Z"
                      fill="#0052FE"
                    />
                  </svg>
                </button>

                <div class="">
                  <label
                    for="weight"
                    class="block mb-1 text-xs font-normal text-black"
                    >To</label
                  >
                  <div class="flex">
                    <span
                      class="inline-flex items-center bg-white text-black font-normal text-xs border-r-0 border-lblue border rounded-l-md"
                    >
                      <div class="">
                        <div class="no-label w-[85px]">
                          <div class="select">
                            <div
                              class="selectBtn flex items-center gap-1"
                              data-type="firstOption"
                            >
                              <img
                                src="@/assets/img/usd-icon.png"
                                class="h-5 w-5 translate-x-0 transition group-hover:translate-x-1"
                                alt=""
                              />
                              USD
                            </div>
                            <div class="selectDropdown">
                              <div
                                class="option"
                                data-value="all"
                                data-type="firstOption"
                              >
                                EUR
                              </div>
                              <div
                                class="option"
                                data-type="secondOption"
                                data-value="internet-tv"
                              >
                                USD
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                    <input
                      type="text"
                      id="weight"
                      class="rounded-none rounded-r-md bg-white border border-lblue text-black font-normal text-xs focus:outline-none block flex-1 min-w-0 w-full p-2.5"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div class="buy-button group px-6">
                <a
                  class="bg-cblue text-white flex justify-center items-center py-2 px-7 rounded-lg"
                  href=""
                  >Buy Now<img
                    src="@/assets/img/arrow-right-white-bg.svg"
                    class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1"
                    alt=""
                /></a>
              </div>
            </div>

            <div
              class="converter bg-white py-4 rounded-2xl mb-6 border border-lblue"
            >
              <h4
                class="text-2xl text-primary font-semibold px-6 pb-4 border-b border-lblue"
              >
                Exchange with Binance
              </h4>

              <div
                class="ex-info-inner w-full py-4 px-6 flex items-start border-b border-lblue"
              >
                <div class="ex-detail ml-3 w-auto">
                  <div class="detail-top flex items-center justify-between">
                    <div class="w-[163px] flex items-center gap-2.5">
                      <div class="logo w-12 h-12 overflow-hidden">
                        <img
                          src="@/assets/img/exchange/Bitvavo.png"
                          class="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                      <div
                        class="font-medium text-base text-primary flex items-center"
                      >
                        Bitvavo
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="rating-ex mx-3 px-3 border-r border-l border-[#F1F5FE] font-normal text-sm text-[#219653] flex items-center gap-1"
                        >5.0</span
                      >
                    </div>
                    <a
                      href=""
                      class="text-cblue text-sm font-normal py-1.5 px-2 border rounded-lg border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"
                      data-v-4b67e9dd=""
                    >
                      <span class="mr-1.5" data-v-4b67e9dd=""
                        >Visit Website</span
                      >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-4b67e9dd=""
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-v-4b67e9dd=""
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="ex-info-inner w-full py-4 px-6 flex items-start border-b border-lblue"
              >
                <div class="ex-detail ml-3 w-auto">
                  <div class="detail-top flex items-center justify-between">
                    <div class="w-[163px] flex items-center gap-2.5">
                      <div class="logo w-12 h-12 overflow-hidden">
                        <img
                          src="@/assets/img/exchange/Binance.png"
                          class="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                      <div
                        class="font-medium text-base text-primary flex items-center"
                      >
                        Binance
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="rating-ex mx-3 px-3 border-r border-l border-[#F1F5FE] font-normal text-sm text-[#219653] flex items-center gap-1"
                        >5.0</span
                      >
                    </div>
                    <a
                      href=""
                      class="text-cblue text-sm font-normal py-1.5 px-2 border rounded-lg border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"
                      data-v-4b67e9dd=""
                    >
                      <span class="mr-1.5" data-v-4b67e9dd=""
                        >Visit Website</span
                      >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-4b67e9dd=""
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-v-4b67e9dd=""
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="ex-info-inner w-full py-4 px-6 flex items-start border-b border-lblue"
              >
                <div class="ex-detail ml-3 w-auto">
                  <div class="detail-top flex items-center justify-between">
                    <div class="w-[163px] flex items-center gap-2.5">
                      <div class="logo w-12 h-12 overflow-hidden">
                        <img
                          src="@/assets/img/exchange/CoinBene.png"
                          class="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                      <div
                        class="font-medium text-base text-primary flex items-center"
                      >
                        CoinBene
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="rating-ex mx-3 px-3 border-r border-l border-[#F1F5FE] font-normal text-sm text-[#219653] flex items-center gap-1"
                        >4.5</span
                      >
                    </div>
                    <a
                      href=""
                      class="text-cblue text-sm font-normal py-1.5 px-2 border rounded-lg border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"
                      data-v-4b67e9dd=""
                    >
                      <span class="mr-1.5" data-v-4b67e9dd=""
                        >Visit Website</span
                      >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-4b67e9dd=""
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-v-4b67e9dd=""
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="ex-info-inner w-full py-4 px-6 flex items-start border-b border-lblue"
              >
                <div class="ex-detail ml-3 w-auto">
                  <div class="detail-top flex items-center justify-between">
                    <div class="w-[163px] flex items-center gap-2.5">
                      <div class="logo w-12 h-12 overflow-hidden">
                        <img
                          src="@/assets/img/exchange/SideShift.png"
                          class="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                      <div
                        class="font-medium text-base text-primary flex items-center"
                      >
                        SideShift
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="rating-ex mx-3 px-3 border-r border-l border-[#F1F5FE] font-normal text-sm text-[#F2994A] flex items-center gap-1"
                        >3.5</span
                      >
                    </div>
                    <a
                      href=""
                      class="text-cblue text-sm font-normal py-1.5 px-2 border rounded-lg border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"
                      data-v-4b67e9dd=""
                    >
                      <span class="mr-1.5" data-v-4b67e9dd=""
                        >Visit Website</span
                      >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-4b67e9dd=""
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-v-4b67e9dd=""
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="ex-info-inner w-full pt-4 px-6 flex items-start">
                <div class="ex-detail ml-3 w-auto">
                  <div class="detail-top flex items-center justify-between">
                    <div class="w-[163px] flex items-center gap-2.5">
                      <div class="logo w-12 h-12 overflow-hidden">
                        <img
                          src="@/assets/img/exchange/CoinEx.png"
                          class="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                      <div
                        class="font-medium text-base text-primary flex items-center"
                      >
                        CoinEx
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="rating-ex mx-3 px-3 border-r border-l border-[#F1F5FE] font-normal text-sm text-[#F2994A] flex items-center gap-1"
                        >3.0</span
                      >
                    </div>
                    <a
                      href=""
                      class="text-cblue text-sm font-normal py-1.5 px-2 border rounded-lg border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition flex items-center"
                      data-v-4b67e9dd=""
                    >
                      <span class="mr-1.5" data-v-4b67e9dd=""
                        >Visit Website</span
                      >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-4b67e9dd=""
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-v-4b67e9dd=""
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class=" bg-white py-4 rounded-2xl mb-6 border border-lblue"
            >
              <h4
                class="text-2xl text-primary font-semibold px-6 pb-4 border-b border-lblue"
              >
                Bitcoin News
              </h4>
              <a href="" class="">
                <div
                  class="flex items-center justify-between py-4 px-6 border-b border-lblue"
                >
                  <div class="h-[97px] w-[97px] rounded-[10px] overflow-hidden">
                    <img
                      src="@/assets/img/news/cu-1.png"
                      class="object-cover h-full w-full"
                      alt=""
                    />
                  </div>
                  <div class="w-[266px] ml-2">
                    <h4 class="text-primary text-base font-semibold mb-3">
                      Relief ahead? What FTM’s latest correction means for
                      traders in the long term
                    </h4>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-semibold text-cblue"
                        >Crypto News</span
                      >
                      <span class="text-[#959595] text-[10px] font-normal"
                        >Jul 25, 2022 • Read: 5 min</span
                      >
                    </div>
                  </div>
                </div>
              </a>
              <a href="" class="">
                <div
                  class="flex items-center justify-between py-4 px-6 border-b border-lblue"
                >
                  <div class="h-[97px] w-[97px] rounded-[10px] overflow-hidden">
                    <img
                      src="@/assets/img/news/cu-2.png"
                      class="object-cover h-full w-full"
                      alt=""
                    />
                  </div>
                  <div class="w-[266px] ml-2">
                    <h4 class="text-primary text-base font-semibold mb-3">
                      Blockchain.com CEO says its Cowboys marketing push is a
                      long play
                    </h4>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-semibold text-cblue"
                        >Crypto News</span
                      >
                      <span class="text-[#959595] text-[10px] font-normal"
                        >Jul 25, 2022 • Read: 5 min</span
                      >
                    </div>
                  </div>
                </div>
              </a>
              <a href="" class="">
                <div
                  class="flex items-center justify-between py-4 px-6 border-b border-lblue"
                >
                  <div class="h-[97px] w-[97px] rounded-[10px] overflow-hidden">
                    <img
                      src="@/assets/img/news/cu-3.png"
                      class="object-cover h-full w-full"
                      alt=""
                    />
                  </div>
                  <div class="w-[266px] ml-2">
                    <h4 class="text-primary text-base font-semibold mb-3">
                      Miramax & Tarantino Settle Suit Over The Pulp Fiction
                      NFTs, Hint At Future Plans
                    </h4>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-semibold text-cblue"
                        >Crypto News</span
                      >
                      <span class="text-[#959595] text-[10px] font-normal"
                        >Jul 25, 2022 • Read: 5 min</span
                      >
                    </div>
                  </div>
                </div>
              </a>
              <a href="" class="">
                <div
                  class="flex items-center justify-between py-4 px-6 border-b border-lblue"
                >
                  <div class="h-[97px] w-[97px] rounded-[10px] overflow-hidden">
                    <img
                      src="@/assets/img/news/cu-4.png"
                      class="object-cover h-full w-full"
                      alt=""
                    />
                  </div>
                  <div class="w-[266px] ml-2">
                    <h4 class="text-primary text-base font-semibold mb-3">
                      Ethereum: Chalking out ETH’s likely trajectory for the
                      coming week
                    </h4>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-semibold text-cblue"
                        >Crypto News</span
                      >
                      <span class="text-[#959595] text-[10px] font-normal"
                        >Jul 25, 2022 • Read: 5 min</span
                      >
                    </div>
                  </div>
                </div>
              </a>
              <a href="" class="">
                <div class="flex items-center justify-between py-4 px-6">
                  <div class="h-[97px] w-[97px] rounded-[10px] overflow-hidden">
                    <img
                      src="@/assets/img/news/cu-5.png"
                      class="object-cover h-full w-full"
                      alt=""
                    />
                  </div>
                  <div class="w-[266px] ml-2">
                    <h4 class="text-primary text-base font-semibold mb-3">
                      Polkadot [DOT] investors should be aware of these updates
                      before pulling out
                    </h4>
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-semibold text-cblue"
                        >Crypto News</span
                      >
                      <span class="text-[#959595] text-[10px] font-normal"
                        >Jul 25, 2022 • Read: 5 min</span
                      >
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <HomeJoinCTA />
</template>
