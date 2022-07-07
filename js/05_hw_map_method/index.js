// input: array, callback
// output: new array
// ======================
// callback
// input: element of array, index(optional), array(optional)
// output: element
// ======================
// algo
// 1. create new array
// 2. iterate input array
// 3. apply callback for every el
// 4. push result of callback in new array
// 5. return new array
// =======================
const mapArrayElements = (arr, callback) => {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const elem = arr[index];
    const resElem = callback(elem, index, arr);
    resArr.push(resElem);
  }

  return resArr;
};

// test data
const testArr = [1, 2, 3, 4, 5, 6, NaN];
// option 1
const testCallback = el => el * 2;
const testRes = mapArrayElements(testArr, testCallback);
console.log(testRes);
// option 2 with use index
const testCallbackIndex = (el, i) => el + i;
const testResIndex = mapArrayElements(testArr, testCallbackIndex);
console.log(testResIndex);
