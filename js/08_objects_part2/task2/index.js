// input: obj1, obj2
// output: boolean
// algo
// 1. get keys1, keys2
// 2. if length1 !== length2 ==> false
// 3. iterate keys1
// 4. compare key1/value1 && key2/value2
// 5. if (step 4 === false) ==> false

// draft solution

// function compareObjects(obj1, obj2) {
//   // put your code here
//   // eslint-disable-next-line no-restricted-syntax
//   for (const key in obj2) {
//     if (obj1[key] !== obj2[key] || !(key in obj1)) {
//       return false;
//     }
//   }

//   // eslint-disable-next-line no-restricted-syntax
//   for (const key in obj1) {
//     if (obj2[key] !== obj1[key] || !(key in obj2)) {
//       return false;
//     }
//   }
//   return true;
// }

// function compareObjects(obj1, obj2) {
//   const objKeys1 = Object.keys(obj1);
//   const objKeys2 = Object.keys(obj2);

//   if (objKeys1.length !== objKeys2.length) {
//     return false;
//   }

//   // eslint-disable-next-line no-restricted-syntax
//   for (const key of objKeys1) {
//     if (!(key in obj2) || obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }
function compareObjects(obj1, obj2) {
  const objKeys1 = Object.keys(obj1);

  if (objKeys1.length !== Object.keys(obj2).length) {
    return false;
  }

  return objKeys1.every(key => obj1[key] === obj2[key]);
}

// examples

const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  age: 17,
  name: 'Tom',
};

const res1 = compareObjects(obj1, obj2); // ==> false
const res2 = compareObjects(obj2, obj3); // ==> false
const res3 = compareObjects(obj1, obj4); // ==> true
console.log(res1);
console.log(res2);
console.log(res3);

// console.log(obj1);
// console.log(obj4);

const arr1 = [1, 2, 4, 11, 21];
console.log(arr1.sort());
