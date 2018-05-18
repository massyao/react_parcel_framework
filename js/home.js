// index.js

const setButton = require('./setButton').setButton;
const setColor = require('./setColor').setColor;

const btnsTxt = ['原谅的颜色', '寂寞的颜色', '花儿的颜色'];
document.getElementById('btnBox').innerHTML = setButton(btnsTxt);

const btns = document.getElementsByClassName('btn');
for(let i = 0; i < btns.length; i++) {
	btns[i].onclick = function () {
		const color = setColor(this.textContent)
		document.getElementsByClassName('hat')[0].style.backgroundColor = color
		document.getElementById('txt').style.color = color
	}
}
// setButton.js

function setButton(arr) {
	let btnHtml = '';
	for(let i of arr) {
		btnHtml += `
			<button class="btn" type="button">${i}</button>
		`
	}
	return btnHtml;
}

module.exports = {
	setButton: setButton
}
//setColor.js

function setColor(tip) {
	let color;
	switch (tip) {
		case '原谅的颜色':
			color = '#00db00'
			break;
		case '寂寞的颜色':
			color = '#ffff37'
			break;
		case '花儿的颜色':
			color = '#f75000'
			break;
		default:
			color = '#000'
			break;
	}
	return color;
}

module.exports = {
	setColor: setColor
}