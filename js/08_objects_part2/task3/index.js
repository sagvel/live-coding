// input: object
// output: array

// algo
// 1. transform object to array(use Object.entries)
// 2. map array
// 3. sort new array
// 4. return sorted array

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

// test data

const testObj = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

const testRes = getCustomersList(testObj);
console.log(testRes);
