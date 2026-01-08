const elLoader = document.querySelector(".real-time__loader");
const elRealBoxes = document.querySelector(".real-time__boxes");
let elAmount = document.querySelectorAll(".span-amount");
const elCoinArrow = document.querySelectorAll(".coin-arrow");
const elRealAmount = document.querySelectorAll(".real-time__coin-amount");
if (localStorage.getItem("dataUsd")) {
  const dataUsdObject = JSON.parse(localStorage.getItem("dataUsd"));
  elAmount[0].textContent = dataUsdObject.binancecoin.usd;
  elAmount[1].textContent = dataUsdObject.bitcoin.usd;
  elAmount[2].textContent = dataUsdObject.ethereum.usd;
  elAmount[3].textContent = dataUsdObject.tether.usd;
}

let dataUsdStatus = {
  binancecoin: null,
  bitcoin: null,
  ethereum: null,
  tether: null,
};
function getData() {
  elLoader.classList.remove("none");
  elLoader.classList.remove("animation-none");
  setTimeout(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd"
      )
      .then((response) => showData(response))
      .catch((error) => {
        elLoader.classList.add("none");
        elLoader.classList.add("animation-none");
        showToast("red", "Can't get data!");
        console.error("GET error");
      });
  }, 1300);

  function showData(response) {
    elAmount = document.querySelectorAll(".span-amount");
    elLoader.classList.add("none");
    elLoader.classList.add("animation-none");
    amountChange(0);
    amountChange(1);
    amountChange(2);
    amountChange(3);

    function amountChange(index) {
      switch (index) {
        case 0:
          if (elAmount[index].textContent > response.data.binancecoin.usd) {
            dataAmountChange(index, "low");
            elRealAmount[index].classList.add("red");
            elCoinArrow[index].classList.add("down");
            elRealAmount[index].classList.remove("green");
            elCoinArrow[index].classList.remove("up");
          } else if (
            elAmount[index].textContent != response.data.binancecoin.usd
          ) {
            dataAmountChange(index, "high");
            elRealAmount[index].classList.remove("red");
            elCoinArrow[index].classList.remove("down");
            elRealAmount[index].classList.add("green");
            elCoinArrow[index].classList.add("up");
          }
          elAmount[index].textContent = response.data.binancecoin.usd;
          break;
        case 1:
          if (elAmount[index].textContent > response.data.bitcoin.usd) {
            dataAmountChange(index, "low");
            elRealAmount[index].classList.add("red");
            elCoinArrow[index].classList.add("down");
            elRealAmount[index].classList.remove("green");
            elCoinArrow[index].classList.remove("up");
          } else if (elAmount[index].textContent != response.data.bitcoin.usd) {
            dataAmountChange(index, "high");
            elRealAmount[index].classList.remove("red");
            elCoinArrow[index].classList.remove("down");
            elRealAmount[index].classList.add("green");
            elCoinArrow[index].classList.add("up");
          }
          elAmount[index].textContent = response.data.bitcoin.usd;
          break;
        case 2:
          if (elAmount[index].textContent > response.data.ethereum.usd) {
            dataAmountChange(index, "low");
            elRealAmount[index].classList.add("red");
            elCoinArrow[index].classList.add("down");
            elRealAmount[index].classList.remove("green");
            elCoinArrow[index].classList.remove("up");
          } else if (
            elAmount[index].textContent != response.data.ethereum.usd
          ) {
            dataAmountChange(index, "high");
            elRealAmount[index].classList.remove("red");
            elCoinArrow[index].classList.remove("down");
            elRealAmount[index].classList.add("green");
            elCoinArrow[index].classList.add("up");
          }
          elAmount[index].textContent = response.data.ethereum.usd;
          break;
        case 3:
          if (elAmount[index].textContent > response.data.tether.usd) {
            dataAmountChange(index, "low");
            elRealAmount[index].classList.add("red");
            elCoinArrow[index].classList.add("down");
            elRealAmount[index].classList.remove("green");
            elCoinArrow[index].classList.remove("up");
          } else if (elAmount[index].textContent != response.data.tether.usd) {
            dataAmountChange(index, "high");
            elRealAmount[index].classList.remove("red");
            elCoinArrow[index].classList.remove("down");
            elRealAmount[index].classList.add("green");
            elCoinArrow[index].classList.add("up");
          }
          elAmount[index].textContent = response.data.tether.usd;
          break;
      }
    }

    function dataAmountChange(index, status) {
      switch (index) {
        case 0:
          if (dataUsdStatus.binancecoin == status) {
            if (status == "low") {
              elRealAmount[index].classList.remove(`low-again-text`);
              elRealAmount[index].classList.remove(`high-again-text`);
              elRealAmount[index].classList.add(`low-again-text`);
            } else {
              elRealAmount[index].classList.remove(`low-again-text`);
              elRealAmount[index].classList.remove(`high-again-text`);
              elRealAmount[index].classList.add(`high-again-text`);
            }
          }

          dataUsdStatus.binancecoin = `${status}`;
          break;
        case 1:
          if (dataUsdStatus.bitcoin == status) {
            if (status == "low") {
              elRealAmount[index].classList.remove(`low-again-text`);
              elRealAmount[index].classList.remove(`high-again-text`);
              elRealAmount[index].classList.add(`low-again-text`);
            } else {
              elRealAmount[index].classList.remove(`low-again-text`);
              elRealAmount[index].classList.remove(`high-again-text`);
              elRealAmount[index].classList.add(`high-again-text`);
            }
          }
          dataUsdStatus.bitcoin = `${status}`;
          break;
        case 2:
          if (dataUsdStatus.ethereum == status) {
            if (status == "low") {
              elRealAmount[index].classList.remove(`low-again-text`);
              elRealAmount[index].classList.remove(`high-again-text`);
              elRealAmount[index].classList.add(`low-again-text`);
            } else {
              elRealAmount[index].classList.remove(`low-again-text`);
              elRealAmount[index].classList.remove(`high-again-text`);
              elRealAmount[index].classList.add(`high-again-text`);
            }
          }
          dataUsdStatus.ethereum = `${status}`;
          break;
        case 3:
          if (dataUsdStatus.tether == status) {
            if (status == "low") {
              elRealAmount[index].classList.remove(`low-again-text`);
              elRealAmount[index].classList.remove(`high-again-text`);
              elRealAmount[index].classList.add(`low-again-text`);
            } else {
              elRealAmount[index].classList.remove(`low-again-text`);
              elRealAmount[index].classList.remove(`high-again-text`);
              elRealAmount[index].classList.add(`high-again-text`);
            }
          }
          dataUsdStatus.tether = `${status}`;
          break;
      }
    }

    localStorage.setItem("dataUsd", JSON.stringify(response.data));
  }
}

// getData();

// setInterval(() => {
//   getData();
// }, 15000);

function showToast(color, text) {
  Toastify({
    text: `${text}`,
    duration: 3000, // 5 soniya
    gravity: "top", // Yuqori qism
    position: "right", // O'ng tomon
    close: false,
    stopOnFocus: true,
    style: {
      background: "white",
      color: "black", // Matn rangini qora qilamiz
      borderRadius: "5px", // Yumaloq burchaklar
      borderLeft: `5px solid ${color}`, // Chap tomonda ko'k rangli chiziq qo'shamiz (progress bar o'rniga)
      // boxShadow: "0 3px 10px rgba(0,0,0,0.1)", // Engil soya
      padding: "15px",
      fontFamily: "sans-serif",
      boxShadow: `2px 0px 10px -3px ${color}`,
    },
  }).showToast();
}

const elRealAddForm = document.querySelector(".real-time__add-form");
const elAddSelect = document.querySelector(".real-time__add-select");
let selectText = "Binancecoin";
elAddSelect.addEventListener("change", (event) => {
  selectText = event.target.options[event.target.selectedIndex].text;
});
let showToastAddStatus = false;
elRealAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elAddInputAmount = elRealAddForm["add-input"].value.trim();
  console.log(elAddInputAmount + " " + selectText);

  if (!showToastAddStatus) {
    showToastAddStatus = true;
    if (elAddInputAmount) {
      const elRealTimeBody = document.querySelector(".real-time-body");
      elRealTimeBody.innerHTML += `
        <tr class="real-time__actives-row">
                  <td class="real-time__actives-des">${selectText}</td>
                  <td class="real-time__actives-des">${elAddInputAmount}</td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path fill="#1caf08" d="M13 18v-6h5l-6-7l-6 7h5v6z" />
                    </svg>
                  </td>
                </tr>
      `;
    } else {
      showToast("red", "Please fill amount!");
    }
    setTimeout(() => {
      showToastAddStatus = false;
    }, 3000);
  }
});
