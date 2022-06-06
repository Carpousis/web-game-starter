import createElem from "./createElem";

import randomWords from "random-words";

import words from "random-words";

//import words from "random-words";

const main = document.querySelector(".main");

const rando = [randomWords()];

// alert(words);

const game = { timer: null, num:30, arr1: randomWords(30) };

console.log(game)

const output = createElem("div", main, "", "output");

const txtArea = createElem("textarea", main, "", "txtArea");

txtArea.style.display = "none";

const btn = createElem("button", main, "LET'S GET TYPING!", "btn");


const startGame = () => {
    buildArray();
	    btn.style.display = "none";
	    let counter = 4;
    output.textContent = "Begin in 5";
	    game.timer = setInterval(() => {
		    output.textContent = `Begin in ${counter}`;
		    counter--;
		    if (counter <= 0) {
			    clearInterval(game.timer);
            gamePlay(); 
                txtArea.style.display = "block";
		        }
	    },500);
}
btn.onclick = startGame; 

const buildArray = () => {
    game.arr1.length = 30;
        let lastindex; 
            while (game.arr1.length < 30){
                const ranIndex = Math.floor(Math.random
                ()*words.length);
            if(lastindex != ranIndex){
                game.arr1.push(words[ranIndex]);
                lastindex = ranIndex;
        }
    }
    console.log(game.arr1);
}

const gamePlay = () => {
    txtArea.focus();
}
const showWords = () => {
    // const w = game.arr1[game.cur]();
    // const n = game.arr1[game.cur+1]();
    // output.innerHTML = "";
    // const curWord = createElem("span", output, w, "curw");
    // const nextWord = createElem("span", output, w, "nextw");
    // console.log(w,n);
}
