'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Deividas Strole',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Donald John Trump',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Joe Robinette Biden',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Barack Hussein Obama',
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

const displayMov = function (mavements) {
  containerMovements.innerHTML = '';
  mavements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMov(account1.movements);

const calcDisplyBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}`;
};

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}⚡`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}⚡`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}⚡`;
};

calcDisplyBalance(account1.movements);
calcDisplaySummary(account1.movements);

const createUN = function (acc) {
  acc.forEach(a => {
    a.userName = a.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUN(accounts);
console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// js 1111
/*
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
arr.splice(-1); // remove last element 
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

movements.forEach(function (movement, i, array) {
  if (movement > 0) console.log(`${i + 1} You deposited ${movement}`);
  else console.log(`${i + 1} You withdrew ${Math.abs(movement)}`);
});

///  ************************************** 150 *****************************
console.log('****************************** 150 *****************************');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (val, key, map) {
  console.log(`${key}: ${val}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (val, _a, _b) {
  console.log(`${val}: ${val}`);
});

///  ************************************** 155 *****************************
console.log('****************************** 155 *****************************');
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);
const mDes = movements.map(
  (mov, i) =>
    `${i + 1} You ${mov < 0 ? 'withdrew' : 'deposited'} ${Math.abs(mov)}`
);
console.log(mDes);
*/
/*
///  ************************************** 157 *****************************
console.log('****************************** 157 *****************************');

const deposits = movements.filter(mov => mov > 0); // only if true arr element gets into array

console.log(movements);
console.log(deposits);

const w = movements.filter(wit => wit < 0);
console.log(w);
*/
/*
///  ************************************** 158 *****************************
console.log('****************************** 158 *****************************');

console.log(movements);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
*/
/*
// Maximum val
/*
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/
/*
///  ************************************** 160 *****************************
console.log('****************************** 160 *****************************');

// PIPELINE
const total = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((ACC, MOV) => ACC + MOV, 0);

console.log(total);
*/
///  ************************************** 162 *****************************
console.log('****************************** 162 *****************************');

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Donald John Trump');
console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Donald John Trump') console.log(acc);
}

//  ************************************** 163 *****************************
console.log('****************************** 163 *****************************');
