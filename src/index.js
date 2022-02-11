import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency.js";

let ratesArray = [];

async function makeApiCall() {
  const response = await Currency.getCurrency();
  getElements(response);
}

function getElements(response) {
  if (response) {
    const conversionRates = response.conversion_rates;
    let i = 0;
    for (let key in conversionRates) {
      $("#currency-from").append(`<option name="currency-from" value="${i} id="${key}">${key}</option>`);
      $("#currency-to").append(`<option name="currency-to" value="${i} id="${key}">${key}</option>`);
      i++;
    }
    for (let value of Object.values(conversionRates)) {
      ratesArray.push(value);
    }
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}

$(document).ready(function () {
  makeApiCall();
  $("form#converter").submit(function (event) {
    event.preventDefault();
    const valueFrom = parseFloat($("input#value").val());
    const currencyFromIndex = parseInt($("option[name='currency-from']:selected").val());
    const currencyToIndex = parseInt($("option[name='currency-to']:selected").val());
    const valueTo = Math.round(((valueFrom * ratesArray[currencyToIndex]) / ratesArray[currencyFromIndex]) * 100) / 100;

    const currencyFrom = $("option[name='currency-from']:selected").attr("id");
    const currencyTo = $("option[name='currency-to']:selected").attr("id");

    console.log(valueFrom);
    console.log(ratesArray[currencyFromIndex]);
    console.log(ratesArray[currencyToIndex]);
    console.log(valueTo);
    console.log(currencyFrom);
    console.log(currencyTo);

    $("#res-amount-from").html(valueFrom);
    $("#res-currency-from").html(currencyFrom);
    $("#res-amount-to").html(valueTo);
    $("#res-currency-to").html(currencyTo);
  });
});
