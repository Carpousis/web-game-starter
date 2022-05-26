import createElem from "./createElem";

import randomWords from "random-words";

const main = document.querySelector(".main");

// const rando = randomWords();

// alert(rando);

const game = { timer: null };

const output = createElem("div", main, "", "output");

const txtArea = createElem("textarea", main, "", "txtArea");

txtArea.style.display = "none";

const btn = createElem("button", main, "LET'S GET TYPING!", "btn");

const startGame = () => {
	txtArea.style.display = "block";
	btn.style.display = "none";
	txtArea.focus();
	let counter = 4;
    output.textContent = "Get Ready 5";
	game.timer = setInterval(() => {
		output.textContent = `Get Ready ${counter}`;
		counter--;
		if (counter <= 0) {
			clearInterval(game.timer);
		}

	},1000);
}

btn.onclick = startGame;

const gamePlay = () => {
}
const showWords = () => {
}
