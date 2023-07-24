<script>
import Chart from 'chart.js/auto/auto.mjs';
export default {

  data() {
    return {
      showDiv: {
        1: false,
        // Add more keys for additional toggle buttons and set them to false initially
      },
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
    removeClass() {
      // Logic to remove the class from the div
      // Replace 'your-div-class' with the actual class name of your div
      const divElement = document.querySelector(".post-content");
      divElement.classList.remove("mh-fixed");
      this.buttonTrue = true;
    },
    ChartRender() {
            if (this.stockChart1 != null) {
                this.stockChart1.destroy();
            }
            this.stockChart1 = new Chart(
                document.getElementById('stockChart1'),
                this.stockConfig1
            );

        },
  },
};
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
    <section class="bg-white w-full pt-12 md:pt-6 px-4 md:px-4">
        <div class="container mx-auto max-w-screen-xl">
            <div class="border-b border-lblue py-8 mb-8">
                <div class="mid-content">
                    <div class="max-w-[764px] mx-auto">
                        <div class="flex flex-col lg:flex-row items-start ">
                            <div class="l-side ">
                              <div class="flex items-start">
                                <div class="im-box w-[140px] h-[140px] rounded-md overflow-hidden mb-8">
                                    <img src="@/assets/img/exchange/b-big.png" class=" object-cover w-full h-full" alt="">
                                </div>
                                <div class="block lg:hidden ml-12">
                                  <h2 class="text-sm text-primary font-semibold">Exchange Review</h2>
                                        <h1 class=" font-bold text-primary text-[32px] flex items-center gap-2.5">Binance <img src="@/assets/img/flag/fl-1.svg" width="30" height="20" class=" w-[30px] h-5" alt=""></h1>
                                        <div class="flex items-center mb-1.5">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F2994A"/>
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F2994A"/>
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F2994A"/>
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F2994A"/>
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.52447 1.08156C9.67415 0.620903 10.3259 0.620905 10.4755 1.08156L11.9941 5.75532C12.1949 6.37336 12.7709 6.7918 13.4207 6.7918H18.335C18.8194 6.7918 19.0207 7.4116 18.6289 7.6963L14.6531 10.5848C14.1274 10.9668 13.9074 11.6439 14.1082 12.2619L15.6268 16.9357C15.7765 17.3963 15.2493 17.7794 14.8574 17.4947L10.8817 14.6061C10.3559 14.2242 9.64405 14.2242 9.11832 14.6061L5.14258 17.4947C4.75073 17.7794 4.22349 17.3963 4.37316 16.9357L5.89176 12.2619C6.09257 11.6439 5.87258 10.9668 5.34685 10.5848L1.37111 7.6963C0.979257 7.4116 1.18064 6.7918 1.66501 6.7918H6.57929C7.22913 6.7918 7.80506 6.37336 8.00587 5.75532L9.52447 1.08156Z" stroke="#F2994A"/>
                                                </svg>

                                        </div>
                                        <div class="text-xs text-secondary font-normal mb-4">4.12 from 2266 votes</div>
                                </div>
                              </div>
                                <div class=" flex flex-row lg:flex-col items-start gap-4 mb-6 lg:mb-0">
                                    <div class="flex items-center gap-1">
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0682 3.66864C10.6931 3.0438 11.7061 3.0438 12.331 3.66864C12.9558 4.29347 12.9558 5.30654 12.331 5.93138L9.93097 8.33138C9.30613 8.95622 8.29306 8.95622 7.66822 8.33138C7.3558 8.01896 6.84927 8.01896 6.53685 8.33138C6.22443 8.6438 6.22443 9.15033 6.53685 9.46275C7.78653 10.7124 9.81266 10.7124 11.0623 9.46275L13.4623 7.06275C14.712 5.81307 14.712 3.78694 13.4623 2.53726C12.2127 1.28759 10.1865 1.28759 8.93685 2.53726L7.73685 3.73726C7.42443 4.04968 7.42443 4.55622 7.73685 4.86863C8.04927 5.18105 8.5558 5.18105 8.86822 4.86863L10.0682 3.66864Z" fill="#6C7A93"/>
<path d="M6.06824 7.66863C6.69308 7.0438 7.70614 7.0438 8.33098 7.66863C8.6434 7.98105 9.14993 7.98105 9.46235 7.66863C9.77477 7.35622 9.77477 6.84968 9.46235 6.53726C8.21267 5.28759 6.18654 5.28759 4.93687 6.53726L2.53687 8.93726C1.28719 10.1869 1.28719 12.2131 2.53687 13.4627C3.78655 14.7124 5.81267 14.7124 7.06235 13.4627L8.26235 12.2627C8.57477 11.9503 8.57477 11.4438 8.26235 11.1314C7.94993 10.819 7.4434 10.819 7.13098 11.1314L5.93098 12.3314C5.30614 12.9562 4.29308 12.9562 3.66824 12.3314C3.0434 11.7065 3.0434 10.6935 3.66824 10.0686L6.06824 7.66863Z" fill="#6C7A93"/>
                                      </svg>

                              <a href="www.binance.com" class=" text-xs text-cblue font-normal">www.binance.com</a>
                              </div>
                              <div class="flex items-center gap-1">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.39666 1.70541C8.15071 1.56487 7.84878 1.56487 7.60284 1.70541L2.00284 4.90541C1.61922 5.12462 1.48594 5.6133 1.70515 5.99692C1.85266 6.25505 2.12219 6.39984 2.39961 6.40014V12C1.95778 12 1.59961 12.3582 1.59961 12.8C1.59961 13.2418 1.95778 13.6 2.39961 13.6H13.5996C14.0414 13.6 14.3996 13.2418 14.3996 12.8C14.3996 12.3582 14.0414 12 13.5996 12V6.40014C13.8771 6.39993 14.1468 6.25514 14.2943 5.99692C14.5135 5.6133 14.3803 5.12462 13.9967 4.90541L8.39666 1.70541ZM4.79961 7.20001C4.35778 7.20001 3.99961 7.55818 3.99961 8.00001V10.4C3.99961 10.8418 4.35778 11.2 4.79961 11.2C5.24144 11.2 5.59961 10.8418 5.59961 10.4V8.00001C5.59961 7.55818 5.24144 7.20001 4.79961 7.20001ZM7.19961 8.00001C7.19961 7.55818 7.55778 7.20001 7.99961 7.20001C8.44144 7.20001 8.79961 7.55818 8.79961 8.00001V10.4C8.79961 10.8418 8.44144 11.2 7.99961 11.2C7.55778 11.2 7.19961 10.8418 7.19961 10.4V8.00001ZM11.1996 7.20001C10.7578 7.20001 10.3996 7.55818 10.3996 8.00001V10.4C10.3996 10.8418 10.7578 11.2 11.1996 11.2C11.6414 11.2 11.9996 10.8418 11.9996 10.4V8.00001C11.9996 7.55818 11.6414 7.20001 11.1996 7.20001Z" fill="#6C7A93"/>
                              </svg>

                                  <a href="" class=" text-xs text-cblue font-normal">Fees</a>
                              </div>
                              <div class="flex items-center gap-1">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3996 7.99999C14.3996 11.0928 11.5342 13.6 7.99961 13.6C6.8063 13.6 5.68927 13.3142 4.73302 12.8166L1.59961 13.6L2.67025 11.1018C1.99385 10.2138 1.59961 9.1472 1.59961 7.99999C1.59961 4.9072 4.46499 2.39999 7.99961 2.39999C11.5342 2.39999 14.3996 4.9072 14.3996 7.99999ZM5.59961 7.19999H3.99961V8.79999H5.59961V7.19999ZM11.9996 7.19999H10.3996V8.79999H11.9996V7.19999ZM7.19961 7.19999H8.79961V8.79999H7.19961V7.19999Z" fill="#6C7A93"/>
                              </svg>

                                  <a href="" class=" text-xs text-cblue font-normal">Chat</a>
                              </div>
                              <div class="flex items-center gap-1">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1653 7.43431C14.4777 7.74673 14.4777 8.25326 14.1653 8.56568L8.56529 14.1657C8.25288 14.4781 7.74634 14.4781 7.43392 14.1657L1.83392 8.56568C1.67769 8.40945 1.59958 8.20467 1.59961 7.9999V4C1.59961 2.67452 2.67413 1.6 3.99961 1.6H7.99983C8.20449 1.60005 8.40914 1.67816 8.56529 1.83431L14.1653 7.43431ZM3.99961 4.8C4.44144 4.8 4.79961 4.44183 4.79961 4C4.79961 3.55817 4.44144 3.2 3.99961 3.2C3.55778 3.2 3.19961 3.55817 3.19961 4C3.19961 4.44183 3.55778 4.8 3.99961 4.8Z" fill="#6C7A93"/>
                              </svg>

                                  <span class=" bg-lblue py-0.5 px-1.5 rounded-full text-xs text-cblue font-normal">Exchange</span>
                              </div>
                                </div>
                            </div>
                            <div class="r-side ml-0 lg:ml-12">
                                <div class=" flex items-start border-b border-lblue pb-5 mb-4">
                                    <div class="">
                                        <div class="hidden lg:block">
                                          <h2 class="text-sm text-primary font-semibold">Exchange Review</h2>
                                        <h1 class=" font-bold text-primary text-[32px] flex items-center gap-2.5">Binance <img src="@/assets/img/flag/fl-1.svg" width="30" height="20" class=" w-[30px] h-5" alt=""></h1>
                                        <div class="flex items-center mb-1.5">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F2994A"/>
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F2994A"/>
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F2994A"/>
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F2994A"/>
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.52447 1.08156C9.67415 0.620903 10.3259 0.620905 10.4755 1.08156L11.9941 5.75532C12.1949 6.37336 12.7709 6.7918 13.4207 6.7918H18.335C18.8194 6.7918 19.0207 7.4116 18.6289 7.6963L14.6531 10.5848C14.1274 10.9668 13.9074 11.6439 14.1082 12.2619L15.6268 16.9357C15.7765 17.3963 15.2493 17.7794 14.8574 17.4947L10.8817 14.6061C10.3559 14.2242 9.64405 14.2242 9.11832 14.6061L5.14258 17.4947C4.75073 17.7794 4.22349 17.3963 4.37316 16.9357L5.89176 12.2619C6.09257 11.6439 5.87258 10.9668 5.34685 10.5848L1.37111 7.6963C0.979257 7.4116 1.18064 6.7918 1.66501 6.7918H6.57929C7.22913 6.7918 7.80506 6.37336 8.00587 5.75532L9.52447 1.08156Z" stroke="#F2994A"/>
                                                </svg>

                                        </div>
                                        <div class="text-xs text-secondary font-normal mb-4">4.12 from 2266 votes</div>
                                        </div>
                                        <div class="text-primary text-sm font-semibold mb-1.5">Volume (24h)</div>
                                        <div class="flex items-center gap-1">
                                            <div class=" text-2xl text-primary font-semibold">$20,542,477,545.10</div>
                                            <div class=" font-normal text-sm text-secondary">(995,965 BTC)</div>
                                        </div>
                                    </div>
                                    <a href="" class="text-cblue text-base font-bold px-8 py-2 border rounded-lg border-[#0051FF] group bg-transparent hover:text-white hover:bg-cblue transition hidden lg:flex items-center ml-8">
                                                    <span class="mr-1.5" >Go to Binance</span>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="group-hover:fill-[#ffffff] transition duration-300" d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z" fill="#0052FE"/>
<path class="group-hover:fill-[#ffffff] transition duration-300" d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15H5V7L8 7C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H5Z" fill="#0052FE"/>
</svg>

                                                </a>
                                </div>
                                <div class="flex flex-col md:flex-row items-center">
                                    <div class="w-full md:w-3/5 mb-4 md:mb-0">
                                        <h3 class="text-sm text-primary font-semibold mb-2">Exchange Fees</h3>
                                        <p class="text-sm font-normal text-secondary pr-16">Withdrawal Fee 0.0002 • Taker Fee 0.10% • Maker Fee 0.10%</p>
                                    </div>
                                    <div class="w-full md:w-2/5">
                                        <h3 class="text-sm text-primary font-semibold mb-2">Deposit Methods</h3>
                                        <div class="flex items-center gap-1">
                                            <span class=" px-2 py-1 border border-[#27AE60] text-xs font-normal text-[#27AE60] rounded-full flex items-center gap-1  whitespace-nowrap"><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6946 4.20503C11.968 4.47839 11.968 4.92161 11.6946 5.19497L6.09458 10.795C5.82122 11.0683 5.378 11.0683 5.10463 10.795L2.30463 7.99497C2.03127 7.72161 2.03127 7.27839 2.30463 7.00503C2.578 6.73166 3.02122 6.73166 3.29458 7.00503L5.59961 9.31005L10.7046 4.20503C10.978 3.93166 11.4212 3.93166 11.6946 4.20503Z" fill="#27AE60"/>
                                            </svg>
                                            Wire Transfer
                                            </span>
                                            <span class=" px-2 py-1 border border-[#27AE60] text-xs font-normal text-[#27AE60] rounded-full flex items-center gap-1 whitespace-nowrap"><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6946 4.20503C11.968 4.47839 11.968 4.92161 11.6946 5.19497L6.09458 10.795C5.82122 11.0683 5.378 11.0683 5.10463 10.795L2.30463 7.99497C2.03127 7.72161 2.03127 7.27839 2.30463 7.00503C2.578 6.73166 3.02122 6.73166 3.29458 7.00503L5.59961 9.31005L10.7046 4.20503C10.978 3.93166 11.4212 3.93166 11.6946 4.20503Z" fill="#27AE60"/>
                                            </svg>
                                            Credit Card
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
        class="detail-content flex flex-col gap-6 lg:flex-row items-start justify-between"
      >
      <div class="hidden lg:flex w-full lg:w-[172px]">
        <div class=" py-2 rounded-lg border border-lblue">
            <div class=" text-base font-semibold text-primary px-3 pb-2 border-b border-lblue mb-3">Contents</div>
            <div class="px-3 flex flex-col">
                <a href="#sec-a" class=" font-normal text-sm text-primary mb-2.5 transition hover:text-cblue">What is Binance?</a>
                <a href="#sec-b" class=" font-normal text-sm text-primary mb-2.5 transition hover:text-cblue">US-investors</a>
                <a href="#sec-c" class=" font-normal text-sm text-primary mb-2.5 transition hover:text-cblue">Liquidity</a>
                <a href="" class=" font-normal text-sm text-primary mb-2.5 transition hover:text-cblue">Mobile Support</a>
                <a href="" class=" font-normal text-sm text-primary mb-2.5 transition hover:text-cblue">OKX Trading View</a>
            </div>
        </div>
      </div>
        <div class="w-full lg:w-[540px]">
          <div class="price-content">
            
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
                  >Buy<img
                    src="@/assets/img/arrow-right-white-bg.svg"
                    class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1"
                    alt=""
                /></a>
              </div>
            </div>

            <div class="post-content">
              <div class="single-content border border-lblue rounded-xl mb-6">
                <h4 id="sec-a"
                  @click="toggleDiv(1)"
                  :class="{
                        'mb-2.5': showDiv[1],
                        'pb-4': !showDiv[1],
                      }"
                  class="font-semibold text-2xl text-primary flex items-center justify-between  pt-4 px-6 rounded cursor-pointer"
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
                  class="pb-6 font-normal text-secondary transition-all duration-300 overflow-hidden text-base"
                >
                  <div class="inn-content px-6">
                    <p class="mb-8">
                        OKX is a crypto exchange which has been active since 2013 and that was previously based in Hong Kong. According to info provided directly from the exchange to us, it is now based in Malta. OKX's “claim to fame” so to say is that it is a one-stop-shop. Here, you can do both spot trading (i.e., regular trading) and derivatives trading. OKX also claims to be the largest crypto spot & futures exchange in the world.
                    </p>
                  </div>
                  <div id="sec-b" class="inn-content px-6">
                    <h4 class="font-semibold text-2xl text-primary mb-2.5">US-investors</h4>
                    <p class="mb-8">
                        OKX is a crypto exchange which has been active since 2013 and that was previously based in Hong Kong. According to info provided directly from the exchange to us, it is now based in Malta. OKX's “claim to fame” so to say is that it is a one-stop-shop. Here, you can do both spot trading (i.e., regular trading) and derivatives trading. OKX also claims to be the largest crypto spot & futures exchange in the world.
                    </p>
                  </div>
                  <div  id="sec-c" class="inn-content px-6">
                    <h4 class="font-semibold text-2xl text-primary mb-2.5">Liquidity</h4>
                    <p class="mb-8">
                        This exchange is regularly one of the top 5 exchanges in terms of trading volume, meaning that the cryptocurrency orders executed here are worth a significiant amount of money (rarely below 1 billion USD per day). This exchange thus offers extreme liquidity which is very advantageous for all investors trading here. On the date of first writing this review, 18 July 2019, this trading platform even had the highest 24 hour trading volume in the world: USD 2.47 billion.
                    </p>
                  </div>
                  <div  id="sec-d" class="inn-content px-6">
                    <h4 class="font-semibold text-2xl text-primary mb-2.5">Binance Trading View</h4>
                    <p class="mb-8">
                        Different exchanges have different trading views. And there is no “this overview is the best”-view. You should yourself determine which trading view that suits you the best. What the views normally have in common is that they all show the order book or at least part of the order book, a price chart of the chosen crypto and order history. They normally also have buy and sell-boxes. Before you choose an exchange, try to have a look at the trading view so that you can see that it feels right to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[425px]">
          <div class="sidebar-wrapper">
           

            <div
              class="converter bg-white py-4 rounded-2xl mb-6 border border-lblue"
            >
              <h4
                class="text-2xl text-primary font-semibold px-6 pb-4 border-b border-lblue"
              >
                Exchange with Binance
              </h4>

              <div
                class="ex-info-inner w-full py-4 px-6 flex border-b border-lblue"
              >
                <div class="ex-detail ml-3 w-full">
                  <div class="detail-top w-full flex items-center justify-between">
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
                    <span class="mr-1.5 hidden md:flex whitespace-nowrap">Visit Website</span>
                      <span class="mr-1.5 md:hidden flex">Visit</span>
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
                class="ex-info-inner w-full py-4 px-6 flex  border-b border-lblue"
              >
                <div class="ex-detail ml-3 w-full">
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
                    <span class="mr-1.5 hidden md:flex whitespace-nowrap">Visit Website</span>
                      <span class="mr-1.5 md:hidden flex">Visit</span>
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
                class="ex-info-inner w-full py-4 px-6 flex  border-b border-lblue"
              >
                <div class="ex-detail ml-3 w-full">
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
                    <span class="mr-1.5 hidden md:flex whitespace-nowrap">Visit Website</span>
                      <span class="mr-1.5 md:hidden flex">Visit</span>
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
                class="ex-info-inner w-full py-4 px-6 flex border-b border-lblue"
              >
                <div class="ex-detail ml-3 w-full">
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
                    <span class="mr-1.5 hidden md:flex whitespace-nowrap">Visit Website</span>
                      <span class="mr-1.5 md:hidden flex">Visit</span>
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
                <div class="ex-detail ml-3 w-full">
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
                      
                    >
                      <span class="mr-1.5 hidden md:flex whitespace-nowrap">Visit Website</span>
                      <span class="mr-1.5 md:hidden flex">Visit</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        
                      >
                        <path
                          class="group-hover:stroke-[#ffffff] transition duration-300"
                          d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                          stroke="#0051FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white py-4 rounded-2xl mb-6 border border-lblue">
                            <h4 class="text-2xl text-primary font-semibold px-6 pb-4 border-b border-lblue mb-5">Overall rating</h4>
                            
                            <div class="flex items-center justify-between  px-6 pb-4">

<div class="rating-star flex items-center gap-[10px]">
<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z" fill="#F2994A"/>
</svg>
<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z" fill="#F2994A"/>
</svg>
<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z" fill="#F2994A"/>
</svg>
<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z" fill="#F2994A"/>
</svg>
<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5245 1.08156C16.6741 0.620904 17.3259 0.620904 17.4755 1.08156L20.7902 11.2832C20.9911 11.9012 21.567 12.3197 22.2168 12.3197H32.9434C33.4278 12.3197 33.6292 12.9395 33.2373 13.2242L24.5593 19.5291C24.0336 19.9111 23.8136 20.5881 24.0144 21.2062L27.3291 31.4078C27.4788 31.8685 26.9516 32.2515 26.5597 31.9668L17.8817 25.6619C17.3559 25.2799 16.6441 25.2799 16.1183 25.6619L7.4403 31.9668C7.04844 32.2515 6.5212 31.8685 6.67088 31.4078L9.98559 21.2062C10.1864 20.5881 9.96641 19.9111 9.44068 19.5291L0.762661 13.2242C0.370804 12.9395 0.572192 12.3197 1.05655 12.3197H11.7832C12.433 12.3197 13.009 11.9012 13.2098 11.2832L16.5245 1.08156Z" stroke="#F2994A"/>
</svg>


</div>
<button class="  text-sm font-semibold text-primary px-6 py-2 bg-lblue rounded-md">Rate</button>
</div>
                            <div class="rating mb-6 px-6 pb-4">
                                <div class="">
                                    <span class="font-semibold text-[40px]">4.9</span><span
                                        class="text-secondary text-2xl">/5</span><span
                                        class="text-secondary text-base font-normal">(30 Reviews)</span>
                                </div>
                            </div>
                            <div class="rating-info mb-2 px-6 pb-4">
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Ease of use</span> <span class="">4.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-cblue rounded-[10px]" style="width: 90%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Value for money</span> <span class="">4.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-cblue rounded-[10px]" style="width: 90%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Verification</span> <span class="">4</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-cblue rounded-[10px]" style="width: 80%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Support</span> <span class="">3.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-cblue rounded-[10px]" style="width: 70%"></div>
                                    </div>
                                </div>
                            </div>
                            <a href=""
                                class="text-cblue text-base font-semibold py-1.5 px-5 group bg-transparent hover:text-white hover:bg-cblue transition  w-auto inline- rounded-md flex mx-6 items-center justify-center"
                                >
                                <span class="mr-1.5" >Go to Binance</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" >
                                    <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                        d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                        stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                        ></path>
                                </svg>
                            </a>
                        </div>
                        <div class="bg-white py-4 rounded-2xl mb-6 border border-lblue">
                            <h4 class="text-2xl text-primary font-semibold px-6 pb-4 border-b border-lblue mb-5">Properties</h4>
                            <div class=" px-6">
                            <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.0001 10.8V8.40002C6.0001 5.08632 8.68639 2.40002 12.0001 2.40002C15.3138 2.40002 18.0001 5.08632 18.0001 8.40002V10.8C19.3256 10.8 20.4001 11.8745 20.4001 13.2V19.2C20.4001 20.5255 19.3256 21.6 18.0001 21.6H6.0001C4.67461 21.6 3.6001 20.5255 3.6001 19.2V13.2C3.6001 11.8745 4.67461 10.8 6.0001 10.8ZM15.6001 8.40002V10.8H8.4001V8.40002C8.4001 6.4118 10.0119 4.80002 12.0001 4.80002C13.9883 4.80002 15.6001 6.4118 15.6001 8.40002Z"
                                        fill="#0051FF" />
                                </svg>
                                Two-factor Authentication
                            </div>
                            <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.4 2.40002C7.07452 2.40002 6 3.47454 6 4.80002V19.2C6 20.5255 7.07452 21.6 8.4 21.6H15.6C16.9255 21.6 18 20.5255 18 19.2V4.80002C18 3.47454 16.9255 2.40002 15.6 2.40002H8.4ZM12 19.2C12.6627 19.2 13.2 18.6628 13.2 18C13.2 17.3373 12.6627 16.8 12 16.8C11.3373 16.8 10.8 17.3373 10.8 18C10.8 18.6628 11.3373 19.2 12 19.2Z"
                                        fill="#0051FF" />
                                </svg>

                                Mobile App
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.8507 12.3516C12.6167 12.1176 12.3095 12 12.0023 12C11.6951 12 11.3879 12.1176 11.1539 12.3516L8.7539 14.7516C8.4959 15.0096 8.3747 15.3636 8.4071 15.7152C8.4191 15.8328 8.4467 15.9468 8.4935 16.0596C8.6783 16.5072 9.1175 16.8 9.6023 16.8H10.7999V20.4C10.7999 21.0636 11.3363 21.6 11.9999 21.6C12.6635 21.6 13.1999 21.0636 13.1999 20.4V16.8H14.4023C14.8871 16.8 15.3263 16.5072 15.5111 16.0596C15.5579 15.9468 15.5855 15.8328 15.5951 15.7152C15.6275 15.3636 15.5063 15.0096 15.2507 14.7516L12.8507 12.3516ZM17.9999 8.40002C17.9399 8.40002 17.8835 8.41442 17.8247 8.41802C17.9267 8.02682 17.9999 7.62362 17.9999 7.20002C17.9999 4.54922 15.8507 2.40002 13.1999 2.40002C10.8911 2.40002 8.9663 4.03082 8.5067 6.20282C8.0879 6.08402 7.6571 6.00002 7.1999 6.00002C4.5491 6.00002 2.3999 8.14922 2.3999 10.8V12C2.3999 14.3004 4.0199 16.218 6.1787 16.686C6.1043 16.4484 6.0443 16.2048 6.0179 15.954C5.9171 14.8668 6.2951 13.8156 7.0559 13.0548L9.4559 10.6548C10.1363 9.97442 11.0411 9.60002 12.0023 9.60002C12.9635 9.60002 13.8683 9.97442 14.5475 10.6548L16.9475 13.0548C17.7095 13.824 18.0839 14.8716 17.9843 15.9372C17.9615 16.2156 17.8883 16.5108 17.7851 16.8H17.9999C19.9883 16.8 21.5999 15.1884 21.5999 13.2V12C21.5999 10.0128 19.9883 8.40002 17.9999 8.40002Z"
                                    fill="#0051FF" />
                            </svg>


                            Cold Storage
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.7998 4.80002C4.7998 3.47454 5.87432 2.40002 7.1998 2.40002H12.7027C13.3393 2.40002 13.9497 2.65288 14.3998 3.10297L18.4969 7.20002C18.9469 7.65011 19.1998 8.26056 19.1998 8.89708V19.2C19.1998 20.5255 18.1253 21.6 16.7998 21.6H7.1998C5.87432 21.6 4.7998 20.5255 4.7998 19.2V4.80002ZM7.1998 12C7.1998 11.3373 7.73706 10.8 8.3998 10.8H15.5998C16.2625 10.8 16.7998 11.3373 16.7998 12C16.7998 12.6628 16.2625 13.2 15.5998 13.2H8.3998C7.73706 13.2 7.1998 12.6628 7.1998 12ZM8.3998 15.6C7.73706 15.6 7.1998 16.1373 7.1998 16.8C7.1998 17.4628 7.73706 18 8.3998 18H15.5998C16.2625 18 16.7998 17.4628 16.7998 16.8C16.7998 16.1373 16.2625 15.6 15.5998 15.6H8.3998Z"
                                    fill="#0051FF" />
                            </svg>
                            Affiliate Program
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.59923 5.99871C6.20915 5.94974 9.49824 4.57242 11.9999 2.33337C14.5016 4.57242 17.7907 5.94974 21.4006 5.99871C21.5317 6.77964 21.5999 7.58188 21.5999 8.40006C21.5999 14.6699 17.5928 20.0038 11.9999 21.9806C6.40698 20.0038 2.3999 14.6699 2.3999 8.40006C2.3999 7.58188 2.46814 6.77964 2.59923 5.99871ZM16.4484 10.4486C16.9171 9.97992 16.9171 9.22013 16.4484 8.7515C15.9798 8.28287 15.22 8.28287 14.7514 8.7515L10.7999 12.703L9.24843 11.1515C8.7798 10.6829 8.02 10.6829 7.55137 11.1515C7.08275 11.6201 7.08275 12.3799 7.55137 12.8486L9.95137 15.2486C10.42 15.7172 11.1798 15.7172 11.6484 15.2486L16.4484 10.4486Z"
                                    fill="#0051FF" />
                            </svg>
                            Instant Verification
                        </div>
                        <div class="flex items-center gap-[10px]"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 5.25C3 4.65326 3.23705 4.08097 3.65901 3.65901C4.08097 3.23705 4.65326 3 5.25 3H16.5C17.2956 3 18.0587 3.31607 18.6213 3.87868C19.1839 4.44129 19.5 5.20435 19.5 6V6.402C19.956 6.6653 20.3348 7.044 20.5981 7.50004C20.8614 7.95609 21 8.4734 21 9V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6.75C5.75544 21 4.80161 20.6049 4.09835 19.9016C3.39509 19.1984 3 18.2446 3 17.25V5.25ZM4.5 5.25C4.5 5.44891 4.57902 5.63968 4.71967 5.78033C4.86032 5.92098 5.05109 6 5.25 6H18C18 5.60218 17.842 5.22064 17.5607 4.93934C17.2794 4.65804 16.8978 4.5 16.5 4.5H5.25C5.05109 4.5 4.86032 4.57902 4.71967 4.71967C4.57902 4.86032 4.5 5.05109 4.5 5.25ZM15.75 12C15.5511 12 15.3603 12.079 15.2197 12.2197C15.079 12.3603 15 12.5511 15 12.75C15 12.9489 15.079 13.1397 15.2197 13.2803C15.3603 13.421 15.5511 13.5 15.75 13.5H17.25C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75C18 12.5511 17.921 12.3603 17.7803 12.2197C17.6397 12.079 17.4489 12 17.25 12H15.75Z"
                                    fill="#0051FF" />
                            </svg>
                            Integrated Wallet
                        </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>

      <div class="heading-area mb-10">
                <h5 class=" text-[32px] text-primary font-bold mb-3">Market</h5>
                <p class=" text-secondary text-base font-normal">The global crypto market cap is <span class=" font-bold">$969.71B</span>, a <span class=" text-r text-[#E71212]"> 2.03%</span> decrease over the last day.</p>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-start md:justify-between mb-10">
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

      <div class="product-table-wrapper">
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
        <div class="button-v text-center mt-5 ">
            <a href="" class="group text-cblue bg-white flex items-center justify-center font-bold  rounded-xl">View More
            
                <svg class="ml-2 transition translate-x-0 group-hover:translate-x-1"  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23429 2.63434C8.54671 2.32192 9.05324 2.32192 9.36566 2.63434L14.1657 7.43434C14.4781 7.74676 14.4781 8.25329 14.1657 8.56571L9.36566 13.3657C9.05324 13.6781 8.54671 13.6781 8.23429 13.3657C7.92187 13.0533 7.92187 12.5468 8.23429 12.2343L11.6686 8.80002L2.39998 8.80003C1.95815 8.80002 1.59998 8.44185 1.59998 8.00002C1.59998 7.5582 1.95815 7.20002 2.39998 7.20002H11.6686L8.23429 3.76571C7.92187 3.45329 7.92187 2.94676 8.23429 2.63434Z" fill="#0052FE"/>
</svg>
</a>
</div>
        </div>
    </section>
</template>