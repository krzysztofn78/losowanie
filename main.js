const evenSort= document.querySelector("#evenSort");
const oddSort= document.querySelector("#oddSort");
const number = [];
const numberEven = [];
const numberOdd = [];

const losowanie = function () {
    for (var a=0; a<20; a++){
    if (number.length === 20) return;
    const los = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    for (var i = 0; i < number.length; i++) {
        if (los === number[i]) {
            return losowanie()
        }
    }
    if (los % 2 == 0) {
        numberEven.push(los);
    }
    else{
        numberOdd.push(los);
    }
    number.push(los);
}
}

const print = function () {
    numberEven.sort((a, b) => a - b);
    numberOdd.sort((a, b) => a - b);
      for (var i = 0; i < numberEven.length; i++) {
        const div = document.createElement("div");
        div.classList.add("Even");
        div.textContent = numberEven[i];
        document.getElementById('even').appendChild(div);
      }
    for (var i = 0; i < numberOdd.length; i++) {
        const div = document.createElement("div");
        div.classList.add("Odd");
        div.textContent = numberOdd[i];
        document.body.appendChild(div);
        document.getElementById('odd').appendChild(div);
      }
      button.style.visibility = "hidden";
    }
const button = document.querySelector("button");
button.addEventListener("click", losowanie);
button.addEventListener("click", print);