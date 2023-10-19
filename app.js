document.body.style.backgroundColor = "green";
let intervalId;
let number = 0;
setInterval(() => {
  number++;
  console.log(number);
  if (number === 1 || number % 4 === 1) {
    /*This is a pretty clever way of doing this,
    I did some math and realized this: 
    1.Green, 2.Yellow, 3.Red, 4.Yellow, 5.Green 
    
    Thats the loop that the code needs to follow,
    i realized that Green happens every time the number is 1, 
    or if the number divided by 4 gives u 1.
    (1, 5, 9, 13, 17, 21 etc...)
    
    For Yellow its pretty simple, every even number is Yellow,
    it happens every other color switch ((1)Red, (2)Yellow, (1)Green, (2)Yellow etc...)

    For red, after a quick inspection, i realized that every number 
    divided by 4 that gives us 3, is gonna be Red (3, 7, 11, 15, 19, 23 etc...)
    */
    document.body.style.backgroundColor = "green";
    /* When light turns green, cars get a class that lets the animation continue*/
    document.querySelector(".carMoves").classList.remove("carStops");
    document.querySelector(".car-twoMoves").classList.remove("carStops");
  }
  if (number % 2 === 0) {
    document.body.style.backgroundColor = "yellow";
    /*When it turns yellow, if the light was RED before, the cars will not start moving,
    but if the light was GREEN before, the lights will keep moving until it turns red.
    Its unneccessary to add a class here, the animation works better without it.*/
  }
  if (number % 4 === 3) {
    document.body.style.backgroundColor = "red";
    /*When the light turns red, the cars get a class that tells them to stop. Since they
    dont have a brain and arent conscious beings, they will never run the red light.*/
    document.querySelector(".carMoves").classList.add("carStops");
    document.querySelector(".car-twoMoves").classList.add("carStops");
  }
}, 2000);
