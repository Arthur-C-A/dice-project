function randomDice(){
    let number = Math.random() * 6 + 1;
    return Math.floor(number)
}

let pathPlayerOne = './images/dice' + randomDice() + '.png';
let pathPlayerTwo = './images/dice' + randomDice() + '.png';

let p1 = document.querySelector(".img1").setAttribute("src", pathPlayerOne);
let p2 = document.querySelector(".img2").setAttribute("src", pathPlayerTwo);