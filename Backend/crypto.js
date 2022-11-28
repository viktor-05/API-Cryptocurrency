// Get global data
async function getGlobal() {
	const res = await fetch("https://api.coinpaprika.com/v1/global")
	const globalData = await res.json()
	return (globalData)
}

document.addEventListener("DOMContentLoaded", async () => {
	let globalData = []
	try {
		globalData = await getGlobal()
	} catch (error) {

		console.log(error)
	}
	//display data on the page
	document.getElementById("cryptos").textContent = numberFormat(globalData.cryptocurrencies_number)
	document.getElementById("global_market_cap").textContent = "$" + numberFormat(globalData.market_cap_usd)
	document.getElementById("global_volume").textContent = "$" + numberFormat(globalData.volume_24h_usd)
	document.getElementById("dominance").textContent = `BTC: ${globalData.bitcoin_dominance_percentage}%`


})

// Get data for Coins
async function getCoins() {
	const res = await fetch("https://api.coinpaprika.com/v1/ticker")
	const coinDetails = await res.json()
	return (coinDetails)
}



document.addEventListener("DOMContentLoaded", async () => {
	let coinDetails = []
	try {
		coinDetails = await getCoins()
	} catch (error) {

		console.log(error)
	}



	//Bitcoin data
	document.getElementById("btcRank").textContent = coinDetails[0].rank
	document.getElementById("btcName").textContent = coinDetails[0].name
	document.getElementById("btcSymbol").textContent = coinDetails[0].symbol
	document.getElementById("btcPrice").textContent = "$" + (parseFloat(coinDetails[0].price_usd)).toFixed(2)
	document.getElementById("btcPriceFluctuation24h").textContent = coinDetails[0].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[0].percent_change_24h, "btcPriceFluctuation24h")
	document.getElementById("btcMarketCap").textContent = "$" + numberFormat(coinDetails[0].market_cap_usd)
	document.getElementById("btcVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[0].volume_24h_usd)).toFixed(0))
	document.getElementById("btcCirculatingSupply").textContent = `${numberFormat(coinDetails[0].circulating_supply)} ${coinDetails[0].symbol}`



	//Ethereum data
	document.getElementById("ethName").textContent = coinDetails[1].name
	document.getElementById("ethRank").textContent = coinDetails[1].rank
	document.getElementById("ethSymbol").textContent = coinDetails[1].symbol
	document.getElementById("ethPrice").textContent = "$" + (parseFloat(coinDetails[1].price_usd)).toFixed(2)
	document.getElementById("ethPriceFluctuation24h").textContent = coinDetails[1].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[1].percent_change_24h, "ethPriceFluctuation24h")
	document.getElementById("ethMarketCap").textContent = "$" + numberFormat(coinDetails[1].market_cap_usd)
	document.getElementById("ethVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[1].volume_24h_usd)).toFixed(0))
	document.getElementById("ethCirculatingSupply").textContent = `${numberFormat(coinDetails[1].circulating_supply)} ${coinDetails[1].symbol}`


	// USDT data
	document.getElementById("usdtName").textContent = coinDetails[2].name
	document.getElementById("usdtRank").textContent = coinDetails[2].rank
	document.getElementById("usdtSymbol").textContent = coinDetails[2].symbol
	document.getElementById("usdtPrice").textContent = "$" + (parseFloat(coinDetails[2].price_usd)).toFixed(2)
	document.getElementById("usdtPriceFluctuation24h").textContent = coinDetails[2].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[2].percent_change_24h, "usdtPriceFluctuation24h")
	document.getElementById("usdtMarketCap").textContent = "$" + numberFormat(coinDetails[2].market_cap_usd)
	document.getElementById("usdtVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[2].volume_24h_usd)).toFixed(0))
	document.getElementById("usdtCirculatingSupply").textContent = `${numberFormat(coinDetails[2].circulating_supply)} ${coinDetails[2].symbol}`

	// USDC data
	document.getElementById("usdcName").textContent = coinDetails[3].name
	document.getElementById("usdcRank").textContent = coinDetails[3].rank
	document.getElementById("usdcSymbol").textContent = coinDetails[3].symbol
	document.getElementById("usdcPrice").textContent = "$" + (parseFloat(coinDetails[3].price_usd)).toFixed(2)
	document.getElementById("usdcPriceFluctuation24h").textContent = coinDetails[3].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[3].percent_change_24h, "usdcPriceFluctuation24h")
	document.getElementById("usdcMarketCap").textContent = "$" + numberFormat(coinDetails[3].market_cap_usd)
	document.getElementById("usdcVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[3].volume_24h_usd)).toFixed(0))
	document.getElementById("usdcCirculatingSupply").textContent = `${numberFormat(coinDetails[3].circulating_supply)} ${coinDetails[3].symbol}`

	// Binance coidata
	document.getElementById("bnbName").textContent = coinDetails[4].symbol
	document.getElementById("bnbRank").textContent = coinDetails[4].rank
	document.getElementById("bnbSymbol").textContent = coinDetails[4].symbol
	document.getElementById("bnbPrice").textContent = "$" + (parseFloat(coinDetails[4].price_usd)).toFixed(2)
	document.getElementById("bnbPriceFluctuation24h").textContent = coinDetails[4].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[4].percent_change_24h, "bnbPriceFluctuation24h")
	document.getElementById("bnbMarketCap").textContent = "$" + numberFormat(coinDetails[4].market_cap_usd)
	document.getElementById("bnbVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[4].volume_24h_usd)).toFixed(0))
	document.getElementById("bnbCirculatingSupply").textContent = `${numberFormat(coinDetails[4].circulating_supply)} ${coinDetails[4].symbol}`

	// XRP data
	document.getElementById("xrpName").textContent = coinDetails[5].name
	document.getElementById("xrpRank").textContent = coinDetails[5].rank
	document.getElementById("xrpSymbol").textContent = coinDetails[5].symbol
	document.getElementById("xrpPrice").textContent = "$" + (parseFloat(coinDetails[5].price_usd)).toFixed(4)
	document.getElementById("xrpPriceFluctuation24h").textContent = coinDetails[5].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[5].percent_change_24h, "xrpPriceFluctuation24h")
	document.getElementById("xrpMarketCap").textContent = "$" + numberFormat(coinDetails[5].market_cap_usd)
	document.getElementById("xrpVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[5].volume_24h_usd)).toFixed(0))
	document.getElementById("xrpCirculatingSupply").textContent = `${numberFormat(coinDetails[5].circulating_supply)} ${coinDetails[5].symbol}`

	// busd data
	document.getElementById("busdName").textContent = coinDetails[6].name
	document.getElementById("busdRank").textContent = coinDetails[6].rank
	document.getElementById("busdSymbol").textContent = coinDetails[6].symbol
	document.getElementById("busdPrice").textContent = "$" + (parseFloat(coinDetails[6].price_usd)).toFixed(2)
	document.getElementById("busdPriceFluctuation24h").textContent = coinDetails[6].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[6].percent_change_24h, "busdPriceFluctuation24h")
	document.getElementById("busdMarketCap").textContent = "$" + numberFormat(coinDetails[6].market_cap_usd)
	document.getElementById("busdVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[6].volume_24h_usd)).toFixed(0))
	document.getElementById("busdCirculatingSupply").textContent = `${numberFormat(coinDetails[6].circulating_supply)} ${coinDetails[6].symbol}`

	// Cardano data
	document.getElementById("adaName").textContent = coinDetails[7].name
	document.getElementById("adaRank").textContent = coinDetails[7].rank
	document.getElementById("adaSymbol").textContent = coinDetails[7].symbol
	document.getElementById("adaPrice").textContent = "$" + (parseFloat(coinDetails[7].price_usd)).toFixed(4)
	document.getElementById("adaPriceFluctuation24h").textContent = coinDetails[7].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[7].percent_change_24h, "adaPriceFluctuation24h")
	document.getElementById("adaMarketCap").textContent = "$" + numberFormat(coinDetails[8].market_cap_usd)
	document.getElementById("adaVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[7].volume_24h_usd)).toFixed(0))
	document.getElementById("adaCirculatingSupply").textContent = `${numberFormat(coinDetails[7].circulating_supply)} ${coinDetails[7].symbol}`

	// Solana data
	document.getElementById("solName").textContent = coinDetails[8].name
	document.getElementById("solRank").textContent = coinDetails[8].rank
	document.getElementById("solSymbol").textContent = coinDetails[8].symbol
	document.getElementById("solPrice").textContent = "$" + (parseFloat(coinDetails[8].price_usd)).toFixed(2)
	document.getElementById("solPriceFluctuation24h").textContent = coinDetails[8].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[8].percent_change_24h, "solPriceFluctuation24h")
	document.getElementById("solMarketCap").textContent = "$" + numberFormat(coinDetails[8].market_cap_usd)
	document.getElementById("solVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[8].volume_24h_usd)).toFixed(0))
	document.getElementById("solCirculatingSupply").textContent = `${numberFormat(coinDetails[8].circulating_supply)} ${coinDetails[8].symbol}`

	// Hex data
	document.getElementById("hexName").textContent = coinDetails[9].name
	document.getElementById("hexRank").textContent = coinDetails[9].rank
	document.getElementById("hexSymbol").textContent = coinDetails[9].symbol
	document.getElementById("hexPrice").textContent = "$" + (parseFloat(coinDetails[9].price_usd)).toFixed(4)
	document.getElementById("hexPriceFluctuation24h").textContent = coinDetails[9].percent_change_24h + "%"
	priceFluctuationPercent(coinDetails[9].percent_change_24h, "hexPriceFluctuation24h")
	document.getElementById("hexMarketCap").textContent = "$" + numberFormat(coinDetails[9].market_cap_usd)
	document.getElementById("hexVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[9].volume_24h_usd)).toFixed(0))
	document.getElementById("hexCirculatingSupply").textContent = `${numberFormat(coinDetails[9].circulating_supply)} ${coinDetails[9].symbol}`

	// console.log(coinDetails)
	// console.log(coinDetails[100].name)
	// console.log(coinDetails[0].symbol)
	// console.log(coinDetails[0].rank)
	// console.log(coinDetails[0].market_cap_usd)
	// console.log(coinDetails[9].market_cap_usd)

	// Search function
	const searchCoin = (coinName) => {
		for (let i = 0; i < coinDetails.length; i++) {

			
			
			if ((coinDetails[i].name).toLowerCase() === (coinName.toLowerCase()).trim()) {
				
				// document.getElementById("newCoinDetails_1").style.display = "block"
				document.getElementById("newCoinName").textContent = coinDetails[i].name
				document.getElementById("newCoinLogo").src = "/Project/CryptoCoins/Images/" +`${coinDetails[i].name}.png`
				document.getElementById("newCoinRank").textContent = "#" + coinDetails[i].rank
				document.getElementById("newCoinSymbol").textContent = coinDetails[i].symbol
				document.getElementById("newCoinPrice").textContent = "$" + (parseFloat(coinDetails[i].price_usd)).toFixed(2)
				document.getElementById("newCoinPriceFluctuation24h").textContent = coinDetails[i].percent_change_24h + "%"
				priceFluctuationPercent(coinDetails[i].percent_change_24h, "newCoinPriceFluctuation24h")
				document.getElementById("newCoinMarketCap").textContent = "$" + numberFormat(coinDetails[i].market_cap_usd)
				document.getElementById("newCoinVolume").textContent = "$" + numberFormat((parseFloat(coinDetails[i].volume_24h_usd)).toFixed(0))
				document.getElementById("newCoinCirculatingSupply").textContent = `${numberFormat(coinDetails[i].circulating_supply)} ${coinDetails[i].symbol}`
				break
				
			// }else if((coinDetails[i].name).toLowerCase() !== (coinName.toLowerCase()).trim() && i < (coinDetails.length - 1)){
			// 	document.getElementById("newCoinDetails_1").style.display = "none"
			// 	console.log(i)
			// 	document.getElementById("newCoinDetails").textContent = "No results found"
			// }else{
			// 	document.getElementById("newCoinDetails_1").style.display = "block"
			}
			
			
		}
	}

	const searchBtn = document.getElementById("searchBtn")
	const searchInput = document.getElementById("searchInput")

	//search for coin when press enter
	searchInput.addEventListener("keypress", (event) => {
		if(event.key === "Enter"){
			openNewCoinDetails()
			// event.preventDefault()
			searchCoin(searchInput.value)
			searchInput.value = ''
		}
	})
})

//function for changing price color, if negative = red, if positive = green
const priceFluctuationPercent = (num, id) => {
	num[0] == "-" ? document.getElementById(id).style.color = "red" :
		document.getElementById(id).style.color = "lightgreen"

}

// function for changing number format with "," after every 3 digits
const numberFormat = (num) => {
	if (typeof num === "number") {
		num = num.toString()
	}
	let numReverse = (num.split("")).reverse()
	let comaNum = []
	for (let i = 0; i < numReverse.length; i++) {
		comaNum.unshift(numReverse[i])
		if ((i + 1) % 3 === 0 && i !== numReverse.length - 1) {
			comaNum.unshift(",")
		}
	}
	return comaNum.join("")
}

// function for opening the searched coin details
function openNewCoinDetails() {
	document.getElementById("newCoinDetails").style.display = "block";
}

//function for closing the searched coin details
function closenewCoinDetails() {
	document.getElementById("newCoinDetails").style.display = "none";
}

// function for closing the searched coin details by click anywhere on the window
document.addEventListener(
	"click",
	function(event) {
	  // If user either clicks  clicks outside the modal window, then close modal 
	  if (!event.target.closest(".newCoinContainer")) {
		document.querySelector(".newCoinContainer").style.display = "none"
	  }
	}
  )






