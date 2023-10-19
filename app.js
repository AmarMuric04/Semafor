document.body.style.backgroundColor = "green";
let intervalId;
let number = 0;
setInterval(() => {
  number++;
  console.log(number);
  if (number === 1 || number % 4 === 1) {
    document.body.style.backgroundColor = "green";
    document.querySelector(".carMoves").classList.remove("carStops");
    document.querySelector(".car-twoMoves").classList.remove("carStops");
  }
  if (number % 2 === 0) {
    document.body.style.backgroundColor = "yellow";
    document.querySelector(".carMoves").classList.add("carMStops");
    document.querySelector(".car-twoMoves").classList.add("carMStops");
  }
  if (number % 4 === 3) {
    document.body.style.backgroundColor = "red";
    document.querySelector(".carMoves").classList.add("carStops");
    document.querySelector(".car-twoMoves").classList.add("carStops");
  }
}, 4000);
