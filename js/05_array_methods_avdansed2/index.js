// input: array, callback
// output: newArray

// callback
// input: el, index(opyional), array(optional)
// output: boolean

// algo
// 1. create new array
// 2. iterate input array
// 3. apply callback for every el
// 4. if true -> push in new array
// 5. return new array

const filterArrayElements = (arr, callback) => {
  const restArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];

    if (callback(element, index, arr)) {
      restArr.push(element);
    }
  }

  return restArr;
};

// test data
const testArr = [1, 2, 20, 11, 0, -5, 5, 50, 4, 77, 8, NaN];
// const callback = (el, index, arr) => {
//   // console.log(index);
//   // console.log(arr);
//   if (index > 5 && el > 10) {
//     return true;
//   }
//   return false;
// };

// const filterRes = filterArrayElements(testArr, el => el > 10);
// console.log(filterRes);

// --- multiply
// input: num1, num2 ... numN
function multiply(...args) {
  // console.log(args);
  // console.log(arguments);
  return args.reduce((acc, el) => acc * el);
}

// -- test data

console.log(multiply(10, 2, 5, 7, -2));
