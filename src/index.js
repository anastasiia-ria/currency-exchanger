import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency.js";
import getSymbolFromCurrency from "currency-symbol-map";

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
    $("#currency-from option[value='USD']").prop("selected", true);
    $("#currency-to option[value='EUR']").prop("selected", true);
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}

function roundNum(num, decimal) {
  let i = 10 ** decimal;
  num = Math.round(num * i) / i;
  return num;
}

function showCurrencySymbol(currency) {
  return getSymbolFromCurrency(currency);
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

    $(".res-amount-from").html(roundNum(valueFrom, 4));
    $(".res-currency-from").html(currencyFrom);
    $(".res-amount-to").html(roundNum(valueTo, 4));
    $(".res-currency-to").html(currencyTo);
    $(".rate-to").html(rate);
    $(".rate-from").html(roundNum(1 / rate, 4));
  });

  $("#currency-from").on("change", function () {
    const currencyFrom = $("option[name='currency-from']:selected").val();
    const currencySymbol = showCurrencySymbol(currencyFrom);
    $("#currency-symbol").html(currencySymbol);
  });

  $("#exchange").click(function () {
    const currencyFrom = $("option[name='currency-from']:selected").val();
    const currencyTo = $("option[name='currency-to']:selected").val();
    $(`#currency-from option[value=${currencyTo}]`).prop("selected", true);
    $(`#currency-to option[value=${currencyFrom}]`).prop("selected", true);
  });
});
