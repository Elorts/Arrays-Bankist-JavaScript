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

const displayMov = function (mavements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

const calcDisplyBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}⚡`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}⚡`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}⚡`;
};

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

const updateUI = function (acc) {
  //Display movements
  displayMov(acc.movements);

  //Display balance
  calcDisplyBalance(acc);
  //Displaysummary

  calcDisplaySummary(acc);
};

// EVENT HANDLER
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Login');
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & Welcome
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // CLEAR INPUT FIELDS
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName == inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // Doing the tramsfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

//const

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    //add movement here
    currentAccount.movements.push(amount);

    //update ui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );

    //Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log('Wrong creds!');
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMov(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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
/*
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
*/

/*
//  ************************************** 166 *****************************
console.log('****************************** 166 *****************************');

console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 2000);
console.log(lastWithdrawal);

const lastLarge = movements.findLastIndex(mov => Math.abs(mov) > 1000);
console.log(lastLarge);

//('Your latest large movement was ');
*/
/*
//  ************************************** 167 *****************************
console.log('****************************** 167 *****************************');

console.log(movements);
console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 150000);
console.log(anyDeposits);

//every

const everyM = movements.every(mov => mov > -1000000);
console.log('every: ' + everyM);

// separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
/*
//  ************************************** 168 *****************************
console.log('****************************** 168 *****************************');

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

//flat
const allBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(allBalance);

//flatMap
const allBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(allBalance2);
*/
/*
//  ************************************** 170 *****************************
console.log('****************************** 170 *****************************');

// FOR STRINGS ONLY!!!!!!!!!!!!!!!!!
const owners = ['Deividas', 'Zigmas', 'Jonas', 'Mikas'];
console.log(owners.sort()); // mutates!
//console.log(movements.sort());

// FOR NUMBERS
//console.log(movements);
/*
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);
*/
/*
movements.sort((a, b) => a - b);
console.log(movements);
*/

//  ************************************** 171 *****************************
console.log('****************************** 171 *****************************');

console.log(movements);
/*
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements);
*/

const groupledByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active!';
  if (movementCount >= 4) return 'active!';
  if (movementCount >= 1) return 'ehhhh...';
  return 'inactive';
});

console.log(groupledByActivity);
