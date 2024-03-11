function randomDice(){
    let number = Math.random() * 6 + 1;
    return Math.floor(number)
}

//Programa Principal

d1 = randomDice();
d2 = randomDice();

let pathPlayerOne = './images/dice' + d1 + '.png';
let pathPlayerTwo = './images/dice' + d2 + '.png';

let p1 = document.querySelector(".img1").setAttribute("src", pathPlayerOne);
let p2 = document.querySelector(".img2").setAttribute("src", pathPlayerTwo);

if( d1 > d2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}else{
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
