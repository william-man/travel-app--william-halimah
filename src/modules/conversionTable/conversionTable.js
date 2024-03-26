import eurRates from "/exchange/EUR.js";
import GBPRates from "/exchange/GBP.js";
import usdRates from "/exchange/USD.js";
import ngnRates from "/exchange/NGN.js";
import jmdRates from "/exchange/JMD.js";

class Converter {
  constructor() {
    this.__fromCurrency = "";
    this.__toCurrency = "";
    this.__amount = 0;
    this.__rates = [];
    this.__rate = 0;
  }
  //getters and setters for fromCurrency
  get fromCurrency() {
    return this.__fromCurrency;
  }
  set fromCurrency(currency) {
    this.__fromCurrency = currency;
  }

  //getters and setters for toCurrency
  get toCurrency() {
    return this.__toCurrency;
  }
  set toCurrency(currency) {
    this.__toCurrency = currency;
  }

  //getters and setters for amount inputted
  get amount() {
    return this.__amount;
  }
  set amount(value) {
    this.__amount = value;
  }
  //getters and setters for rates
  get rates() {
    return this.__rates;
  }
  set rates(data) {
    this.__rates = data;
  }
  //getters and setters for rate
  get rate() {
    return this.__rate;
  }
  set rate(currency) {
    this.__rate = this.__rates[currency];
  }

  convert(multiplier = 1) {
    return this.__amount * this.__rate * multiplier;
  }
}

const converter = new Converter();

const fetchRates = async () => {
  try {
    const response = await fetch("/currency-rates");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    converter.fromCurrency = await data.from;
    converter.toCurrency = await data.to;
    converter.amount = await data.amount;
    converter.rates = await data.responseData;
    converter.rate = await data.to;
  } catch (error) {
    console.log("Fetch error: ", error.message);
  }
};

window.onload = fetchRates();

const fromRow1 = document.querySelector("#from-row-1");
const fromRow2 = document.querySelector("#from-row-2");
const fromRow3 = document.querySelector("#from-row-3");
const fromRow4 = document.querySelector("#from-row-4");
const fromRow5 = document.querySelector("#from-row-5");

const toRow1 = document.querySelector("#to-row-1");
const toRow2 = document.querySelector("#to-row-2");
const toRow3 = document.querySelector("#to-row-3");
const toRow4 = document.querySelector("#to-row-4");
const toRow5 = document.querySelector("#to-row-5");

toRow1.innerHTML = converter.convert(
  parseInt(fromRow1.innerText.split(" ")[0])
);
