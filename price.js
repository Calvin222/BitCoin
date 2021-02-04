const api = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let btn = document.querySelector('#btn');
let bitcoin = document.querySelector('#bitcoin');

window.onload = () => {
	let coin = new XMLHttpRequest();
	coin.open('GET', api);
	coin.onreadystatechange = function () {
		if(coin.readyState === 4 && coin.status === 200) {
			let response = coin.responseText;
			let parsedResponse = JSON.parse(response);
			bitcoinUSD.innerText = parsedResponse.bpi.USD.rate + ' ' + parsedResponse.bpi.USD.code;
			bitcoinGBP.innerText = parsedResponse.bpi.GBP.rate + ' ' + parsedResponse.bpi.GBP.code;
			bitcoinEUR.innerText = parsedResponse.bpi.EUR.rate + ' ' + parsedResponse.bpi.EUR.code;
		}
	}
	coin.send();	
};
