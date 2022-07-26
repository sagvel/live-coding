/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

// algo
// 1. create obj ++
// 2. iterate keylist ++
// 3. put key/value in to obj
// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//     // obj = { ...obj, [keysList[index]]: valuesList[index] };
//   }
//   return obj;
// }

function buildObject(keysList, valuesList) {
  return keysList.reduce(
    (obj, key, index) => ({
      ...obj,
      [key]: valuesList[index],
    }),
    {},
  );
}

// test data
const keys = ['name', 'address', 'age', 'name'];
const values = ['Bob', 'Ukraine', 34, 'James'];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
