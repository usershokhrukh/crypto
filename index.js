const elLoader = document.querySelector(".real-time__loader");
const elRealBoxes = document.querySelector(".real-time__boxes");
const elRealTitle = document.querySelector(".real-time__boxes-title");
const elRealAmount = document.querySelector(".real-time__coin-amount");
const elCoinArrow = document.querySelector(".coin-arrow");

function getData() {
  axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd").then(response => console.log(response));
}

setInterval(() => {
  getData();
}, 10000);