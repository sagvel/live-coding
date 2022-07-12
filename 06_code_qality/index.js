// Hlib
// BAD

// const withdraw = (clients, balances, client, amount) => {
//   // remove logic from if
//   // get rid of duplicated code
//   // don't use find

//   // BAD
//   balances.find((item, index) => clients.indexOf(client)
//   // GOOD
//   balances[clients.indexOf(client)];
//   // ====================================================
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// Igor
// BAD
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;

// Oleksiy
// BAD
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

// GOOD
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = balances[clients.indexOf(client)];

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   // eslint-disable-next-line no-param-reassign
//   balances[clientIndex] -= amount;

//   return balances[clientIndex];
// };

// Sergiy
// BAD
// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
//   const newBalance = balances[curentClient] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   const newBalance = balances[curentClient] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };

// // test data

// // input
// const balances = [1400, 87, -6];
// const res = withdraw(['Ann', 'John', 'User'], balances, 'John', 50);
// console.log(res);
// console.log(balances);

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// Denis
// NORM
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

// GOOD

// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   // eslint-disable-next-line no-param-reassign
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// Volodimir
// NORM
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// DIMA
// const withdraw = (clients, balances, client, amount) => {
//   const clientBalance = balances[clients.indexOf(client)];

//   return clientBalance < amount ? -1 : clientBalance - amount;
// };

// Aleksandr

// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     return -1;
//   }
// }

// Anastasiya
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

// ========================

const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);
  if (toCeil - fromCeil < 1) {
    return null;
  }
  const arr = new Array(length);
  return arr.fill(Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
};

console.log(getRandomNumbers(length, 1.7, 2.2));
console.log(getRandomNumbers(length, 0.7, 0.2));
