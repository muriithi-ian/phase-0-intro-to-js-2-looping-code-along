// Code your solutions in this file
for (let age = 30; age < 40; age++) {
	console.log(`I'm ${age} years old. Happy birthday to me!`);
	// debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
	for (let i = 0; i < gifts.length; i++) {
		console.log(`Wrapped ${gifts[i]} and added a bow!`);
		// debugger;
	}

	return gifts;
}

wrapGifts(gifts);

function writeCards(namesArr, ocassion) {
	const cards = [];
	for (let i = 0; i < namesArr.length; i++) {
		let message = `Thank you, ${namesArr[i]}, for the wonderful ${ocassion} gift!`;
		cards.push(message);
	}
	return cards;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(count) {
	while (count >= 0) {
		console.log(count);
		count--;
	}
}

countDown(10);
