const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const zipInput = document.getElementById('zip');
const cardNameInput = document.getElementById('cardName');
const cardNumInput = document.getElementById('cardNum');
const expMonthSelect = document.getElementById('exp-month');
const expYearSelect = document.getElementById('exp-year');
const cvvInput = document.getElementById('cvv');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('address', addressInput.value);
  localStorage.setItem('city', cityInput.value);
  localStorage.setItem('state', stateInput.value);
  localStorage.setItem('zip', zipInput.value);
  localStorage.setItem('cardName', cardNameInput.value);
  localStorage.setItem('cardNum', cardNumInput.value);
  localStorage.setItem('expMonth', expMonthSelect.value);
  localStorage.setItem('expYear', expYearSelect.value);
  localStorage.setItem('cvv', cvvInput.value);
});

document.addEventListener('DOMContentLoaded', () => {
  nameInput.value = localStorage.getItem('name');
  emailInput.value = localStorage.getItem('email');
  addressInput.value = localStorage.getItem('address');
  cityInput.value = localStorage.getItem('city');
  stateInput.value = localStorage.getItem('state');
  zipInput.value = localStorage.getItem('zip');
  cardNameInput.value = localStorage.getItem('cardName');
  cardNumInput.value = localStorage.getItem('cardNum');
  expMonthSelect.value = localStorage.getItem('expMonth');
  expYearSelect.value = localStorage.getItem('expYear');
  cvvInput.value = localStorage.getItem('cvv');
});