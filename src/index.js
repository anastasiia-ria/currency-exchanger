import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency.js";

async function makeApiCall() {
  const response = await Currency.getCurrency();
  getElements(response);
}

function getElements(response) {
  if (response) {
    const conversionRates = response.conversion_rates;
    for (let key in conversionRates) {
      $("#currency-from").append(`<option name="currency-from" value="${key}">${key}</option>`);
      $("#currency-to").append(`<option name="currency-to" value="${key}">${key}</option>`);
      sessionStorage.setItem(key, conversionRates[key]);
    }
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}

function roundNum(num, decimal) {
  let i = 10 ** decimal;
  num = Math.round(num * i) / i;
  return num;
}

$(document).ready(function () {
  makeApiCall();
  $("form#converter").submit(function (event) {
    event.preventDefault();
    const valueFrom = parseFloat($("input#value").val());
    const currencyFrom = $("option[name='currency-from']:selected").val();
    const currencyTo = $("option[name='currency-to']:selected").val();
    const rateTo = sessionStorage.getItem(currencyTo);
    const rateFrom = sessionStorage.getItem(currencyFrom);
    const rate = roundNum(rateTo / rateFrom, 4);
    const valueTo = valueFrom * rate;

    $(".res-amount-from").html(valueFrom);
    $(".res-currency-from").html(currencyFrom);
    $(".res-amount-to").html(valueTo);
    $(".res-currency-to").html(currencyTo);
    $(".rate-to").html(rate);
    $(".rate-from").html(roundNum(1 / rate, 4));
  });
});
