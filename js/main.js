import createElem from "./createElem";

import randomWords from "random-words";

//import words from "random-words";

const main = document.querySelector(".main");

const rando = [randomWords()];

// alert(rando);

const game = { cur:0, timer: null, num:30, arr1: randomWords(30) };
console.log(game)
const output = createElem("div", main, "", "output");

const txtArea = createElem("textarea", main, "", "txtArea");

txtArea.style.display = "none";

const btn = createElem("button", main, "LET'S GET TYPING!", "btn");

const startGame = () => {
    buildArray();
	btn.style.display = "none";
	let counter = 4;
    output.textContent = "Get Ready 5";
	game.timer = setInterval(() => {
		output.textContent = `Get Ready ${counter}`;
		counter--;
		if (counter <= 0) {
			clearInterval(game.timer);
            gamePlay();
            txtArea.style.display = "block";
		}

	},1000);
}

btn.onclick = startGame;

const buildArray = () => {
    game.arr1.length = 0;
    let lastinddex; 
    while (game.arr1.legnth < game.num){
        const ranIndex= Math.floor(Math.random
        ()*rando.legnth);
        if(lastindex != ranIndex){
            game.arr1.push(rando[ranIndex]);
            lastindex = ranIndex;
        }
    }
}

const gamePlay = () => {
    txtArea.focus();
}
const showWords = () => {
    const w = game.arr1[game.cur]();
    const n = game.arr1[game.cur+1]();
    output.innerHTML = "";
    const curWord = createElem("span", output, w, "curw");
    const nextWord = createElem("span", output, w, "nextw");
    console.log(w,n);
}
