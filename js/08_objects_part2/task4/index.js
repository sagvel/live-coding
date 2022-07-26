// input: object
// output: array

// algo
// 1. get array of key/value(Object.entries) [[key1, val1],..[keyN, valN]]
// 2. iterate array of entries - on every step create new obj [obj1, ...objN] - map
// 3. sort array & return

// algo 2
// 1. get array of keys - ['key1', ... 'key2']
// 2. iterate array keys - on every step create new obj
// 3. sort array & return

// const getCustomersList = obj => {
//   const objEntries = Object.entries(obj);
//   console.log('Step 1: ', objEntries);
//   const mappedArray = objEntries.map(([id, user]) => ({ ...user, id }));
//   console.log('Step 2: ', mappedArray);
//   const sortedArray = mappedArray.sort((a, b) => a.age - b.age);
//   console.log('Step 3: ', sortedArray);
//   return sortedArray;
// };

const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, user]) => ({ ...user, id }))
    .sort((a, b) => a.age - b.age);
};

// Andriy
// good

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// DRAFT SOLUTION
// const getCustomersList = obj =>
// input: obj
// output: [[key1, val1],..[keyN, valN]]
// Object.entries(obj).map(([id, customer]) => {
//   return { id, ...customer };
// return { id: entry[0], ...entry[1] };
// console.log('entry is: ', entry);
// const obj = {};
// Object.assign(obj, { id: entry[0] });
// console.log('some res 1', obj);
// return Object.assign(obj, entry[1]);
// console.log('some res 2', obj);
// });
// .sort((a, b) => a.age - b.age);

// Anna
// NORM
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// Roman
// Norm
// 1. use push instead of concat
// 2. use map
// 3. rename data
// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// Alex
// Good
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);

// Anastasiya
// Bad
// 1. dont use values
// 2. dont use index
// 3. bad naming
// const getCustomersList = obj => {
// const keys = Object.keys(obj); bad
// const values = Object.values(obj); bad

// return Object.keys(obj)
//   .map(key => ({ ...obj[key], id: key }))
//   .sort((a, b) => a.age - b.age);
// return values.map((el, index) => ({ ...el, id: keys[index] })).sort((a, b) => a.age - b.age); bad
// };

// Oleksii
// Bad
// 1. dont use values
// 2. dont use index
// 3. bad naming
// 4. remove redunt variables
// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// Aleksandr
// Bad
// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

// Vitaliy
// Bad
// 1. dont use shift()
// 2. fix eslint errors
// 3. bad naming
// 4. remove redunt variables
// const getCustomersList = obj => {
// const moderArr = Object.entries(obj).map(arr => {
//   let id = { id: arr.shift() };
//   return (arr[0] = { ...arr[0], ...id });
// });
//   return Object.entries(obj)
//     .map(arr => {
//       const id = { id: arr[0] };
//       return { ...arr[1], ...id };
//     })
//     .sort((a, b) => a.age - b.age);
// };

// Evgen
// 1. dont use index
// 2. bad naming
// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((acc, elem, index) => {
//       acc.push({ id: elem, ...customers[elem] });
//       return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// Dima
// Bad
// const getCustomersList = obj => {
//   // obj is the object we want to get the keys from
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
//   const first = order.map(el => el[1]); // get the values
//   const second = order.map(el => el[0]); // get the keys
//   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
// };
// test data

// const testObj = {
//   'customer-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
// };

// const testRes = getCustomersList(testObj);
// console.log(testRes);
