'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const d = dogsJulia.slice(1, 3);
  const combArr = [...d, ...dogsKate];
  combArr.forEach(function (age, i) {
    combArr[i] < 3
      ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
      : console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
  });
}

checkDogs(dogsJulia, dogsKate);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
//if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
/*
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(a => (a <= 2 ? 2 * a : 16 + a * 4));
  const adult = humanAge.filter(a => a >= 18);
  const average = adult.reduce((acc, a) => acc + a, 0) / adult.length;
  console.log(average);
};
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous 
challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (ages) {
  const result = ages
    .map(a => (a <= 2 ? 2 * a : 16 + a * 4))
    .filter(a => a >= 18)
    .reduce((acc, a, i, arr) => acc + a / arr.length, 0);

  console.log(result);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
*/
///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const breeds = [
  {
    breed: 'German Shephjerd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
];
/*
//console.log(breeds);
//1.
const huskyWeight = breeds.find(b => b.breed === 'Husky').averageWeight;
console.log(huskyWeight);

//2.
const dogBothActivities = breeds.find(
  b => b.activities.includes('running') && b.activities.includes('fetch')
).breed;
console.log(dogBothActivities);

//3.
const allActivities = breeds.flatMap(b => b.activities);
console.log(allActivities);

//4.
const uniqueActivities = [...new Set(allActivities)]; //???
console.log(uniqueActivities);

//5. ???????????????????????????????????

// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(b => b.activities.includes('swimming'))
//       .flatMap(b => b.activities)
//       .filter(activity => activity !== 'swimming') // Remove "swimming"
//   ),
// ];
/*
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(b => b.activities.includes('swimming'))
      .flatMap(b => b.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
//.filter(activity => activity !== 'swimming') // Remove "swimming"
//
console.log('swim adj: ' + swimmingAdjacent);
*/
/*
let a = [];
for (const b of breeds) {
  if (b.activities.includes('swimming')) {
    a.push(b.activities);
  }
}
console.log('swim adj: ' + a);
*/
//6.
/*
console.log('average weight < 10: ' + breeds.every(b => b.averageWeight > 10));

//7.
console.log(
  'active dogs (3+ activities) ' + breeds.some(b => b.activities.length >= 3)
);
*/
//bonus.

// heaveast weight + fetch
/*
let maxW = 0;

for (const b of breeds) {
  if (b.averageWeight > maxW && b.activities.includes('fetch'))
    maxW = b.averageWeight;
}
*/
/*
const weights = breeds
  .filter(b => b.activities.includes('fetch')) // Filter breeds that include 'fetch'
  .map(b => b.averageWeight);

console.log(Math.max(...weights));
*/
//breeds.find(b => ));

//console.log('Winer' + maxW);

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 22, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 8, curFood: 340, owners: ['Michael'] }
];




TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀 250
*/

const dogs = [
  { weight: 22, curFood: 284, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 191, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  { weight: 0, curFood: 0, owners: ['Kubilius'] },
];

//1. recommendedFood = weight ** 0.75 * 28.
console.log('++++++++++++ 1 +++++++++++++++++++++++');

dogs.forEach(dog => (dog.recFood2 = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2.
console.log('++++++++++++ 2 +++++++++++++++++++++++');

const SarasDog = dogs.find(d => d.owners.includes('Sarah'));
console.log(
  SarasDog.weight ** 0.75 * 28 < SarasDog.curFood ? 'Too mutch' : 'Too litle'
);

//3.
console.log('*************** 3 ******************');
const calcNormalF = function (weight) {
  return weight ** 0.75 * 28;
};

const ownersEatTooMuch = dogs
  .filter(dog => calcNormalF(dog.weight) < dog.curFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => calcNormalF(dog.weight) > dog.curFood)
  .flatMap(dog => dog.owners);

console.log('ownersEatTooMuch: ', ownersEatTooMuch);
console.log('ownersEatTooLittle: ', ownersEatTooLittle);

//4. Matilda and Alice and Bob's dogs eat too much! CAN BE DONE MORE EFFICIENTLY

console.log('*************** 4 ******************');

function outputString(arr, flag) {
  let str = '';
  for (let i = 0; i < arr.length - 1; i++) {
    str += `${arr[i]}'s and `;
  }
  if (flag == 'mutch') str += `${arr[arr.length - 1]}'s dogs eat too much!`;
  else str += `${arr[arr.length - 1]}'s dogs eat too little!`;
  console.log(str);
}

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs are eating too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs are eating too little`);

outputString(ownersEatTooMuch.flat(), 'mutch');
outputString(ownersEatTooLittle.flat(), 'little');

//5. Correct!!!!
console.log('*************** 5 ******************');

const calcNormalF2 = function (weight) {
  return Math.floor(weight ** 0.75 * 28);
};

const rightAmount = dogs.some(dog => calcNormalF2(dog.weight) === dog.curFood);
console.log(rightAmount);

//6.
console.log('*************** 6 ******************');

const okAm = dogs.every(
  dog =>
    calcNormalF2(dog.weight) * 0.9 < dog.curFood &&
    calcNormalF2(dog.weight) * 1.1 > dog.curFood
);
console.log('dogs eationg ok?: ', okAm);

//current > (recommended * 0.90) && current < (recommended * 1.10)

//7.
console.log('*************** 7 ******************');

const whoEatsOk = dogs.filter(
  dog =>
    calcNormalF2(dog.weight) * 0.9 < dog.curFood &&
    calcNormalF2(dog.weight) * 1.1 > dog.curFood
);
//console.log(calcNormalF2(dogs[3].weight) * 0.9);
console.log(whoEatsOk);

//8.
console.log(' ----- 8 -----');
/*
const groupedDogs = dogs.reduce(
  (group, dog) => {
    if (dog.curFood < calcNormalF(dog.weight)) group.toLittle.push(dog);
    else if (dog.curFood > calcNormalF(dog.weight)) group.toMuch.push(dog);
    else group.exact.push(dog);
    return group;
  },
  { toLittle: [], toMuch: [], exact: [] }
);
console.log('To little: ', groupedDogs.toLittle);
console.log('To much: ', groupedDogs.toMuch);
console.log('Exact: ', groupedDogs.exact);
*/
const dogsP = Object.groupBy(dogs, dog => {
  if (dog.curFood > dog.recFood2) {
    return 'too-much';
  } else if (dog.curFood < dog.recFood2) {
    return 'too-little';
  } else {
    return 'exact';
  }
});
console.log(dogsP);

//9.

console.log('////////////// 9 ///////////////////');
/*
const roupedByNumberOfOwners = dogs.reduce(
  (groups, dog) => {
    if (dog.owners.length === 1) groups.oneOwner.push(dog);
    else groups.twoOwners.push(dog);
    return groups;
  },
  { oneOwner: [], twoOwners: [] }
);
*/
const dogsG = Object.groupBy(dogs, dog => `${dog.owners.length}-owners`);
console.log('o, t: ', dogsG);

/*
console.log('One owner: ', roupedByNumberOfOwners.oneOwner);
console.log('Two owners: ', roupedByNumberOfOwners.twoOwners);
*/
//10.
console.log('////////////// 10 ///////////////////');

console.log(dogs.toSorted((a, b) => a.recFood - b.recFood));
