'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/// ************************************************ 147 **********************************
console.log(
  '**************************************** 147 **********************************'
);

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2, 4));
console.log(arr.slice(-3));
console.log(arr.slice(1, -2));
console.log([...arr]);
console.log('full array: ', arr);

// SPLICE - mutates array
//console.log(arr.splice(2));
arr.splice(-1); // remove last element *-*//*-**/*--
console.log(arr);
arr.splice(1, 1);
console.log(arr);

//REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ------ mutate!!!!!!!!!!!!!!!!!!!!!!!!
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); // same as spread
console.log(letters);
console.log([...arr, ...arr2]); // same as concat
console.log([arr + arr2]); // weird

console.log(letters.join(' - '));

///  ************************************** 148 *****************************
console.log('****************************** 148 *****************************');

const arras = [23, 11, 64];
console.log(arras[0]);

console.log(arras.at(0));

// GETTING LAST ELEMENT
console.log(arras[arras.length - 1]);
console.log(arras.slice(-1)[0]); // [0] <- retuyrns value!!!
console.log(arras.at(-1));
console.log('deividas'.at(-1));

///  ************************************** 149 *****************************
console.log('****************************** 149 *****************************');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`${i + 1} You deposited ${movement}`);
  else console.log(`${i + 1} You withdrew ${Math.abs(movement)}`);
}

console.log('ForEach below ------------- <> -------------------');

movements.forEach(function (movement) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
});
