/* eslint-disable no-unused-vars */
window.onload = () => {
  require("./index.css");

  // const Sort = require("./Sort");

  const initialArr = [3, 2, 5, 1, 8, 6, 7, 4];
  const split0_0_1 = [3, 2, 5, 1, "", "", "", ""];
  const split0_1_1 = [3, 2, "", "", "", "", "", ""];
  const split1_1_1 = [2, 3, "", "", "", "", "", ""];
  const split2_0_0 = ["", "", 5, 1, "", "", "", ""];
  const split2_0_1 = ["", "", 1, 5, "", "", "", ""];
  const split2_1_1 = [1, 2, 3, 5, "", "", "", ""];
  const split3_0_0 = ["", "", "", "", 8, 6, 7, 4];
  const split3_0_1 = ["", "", "", "", 8, 6, "", ""];
  const split3_1_1 = ["", "", "", "", 6, 8, "", ""];
  const split4_0_1 = ["", "", "", "", "", "", 7, 4];
  const split4_1_1 = ["", "", "", "", "", "", 4, 7];
  const split5_0_0 = ["", "", "", "", 4, 6, 7, 8];
  const split5_0_1 = [1, 2, 3, 5, 4, 6, 7, 8];
  const split5_1_1 = [1, 2, 3, 4, 5, 6, 7, 8];

  function showArr(arr) {
    var element = document.getElementById("bigwrap");
    element.parentNode.removeChild(element);
    var wrap = document.createElement("DIV");
    wrap.setAttribute("id", "bigwrap");
    document.getElementById("outwrap").appendChild(wrap);
    for (let num of arr) {
      var node = document.createElement("DIV");
      node.setAttribute("id", "box");
      var textNode = document.createTextNode(num);
      node.appendChild(textNode);
      document.getElementById("bigwrap").appendChild(node);
    }
  }
  let history = 1;
  const selectArr = {
    1: initialArr,
    2: split0_0_1,
    3: split0_1_1,
    4: split1_1_1,
    5: split2_0_0,
    6: split2_0_1,
    7: split2_1_1,
    8: split3_0_0,
    9: split3_0_1,
    10: split3_1_1,
    11: split4_0_1,
    12: split4_1_1,
    13: split5_0_0,
    14: split5_0_1,
    15: split5_1_1,
  };
  function showArrOnStartReset() {
    showArr(initialArr);
    history = 1;
  }

  function showArrOnLeftClick() {
    showArr(selectArr[history--]);
    if (history <= 1) history = 1;
  }
  function showArrOnRightClick() {
    showArr(selectArr[history++]);
    if (history >= 15) history = 15;
  }

  document.querySelector(".left").addEventListener("click", showArrOnLeftClick);
  document.querySelector(".btn").addEventListener("click", showArrOnStartReset);

  document
    .querySelector(".right")
    .addEventListener("click", showArrOnRightClick);
};
