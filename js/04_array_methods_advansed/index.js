// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log(numbersList);
// input: callback
// output: array
// callback
// input: elOfArr
// output: newElem
const mapRes = numbersList.map(el => {
  const newEl = el * el;
  return newEl;
});
console.log(mapRes);
const newMapRes = numbersList.map(el => el * el);
console.log(newMapRes);

// option 1
const mapResIndex = numbersList.map((el, index) => {
  let newEl = null;
  if (index > 2) {
    newEl = el * el;
  } else {
    newEl = el;
  }

  return newEl;
});
console.log(mapResIndex);
// option 2
const mapResIndex2 = numbersList.map((el, index) => {
  if (index > 2) {
    return el * el;
  }
  return el;
});
console.log(mapResIndex2);
// option 3
const mapResIndex3 = numbersList.map((el, index) => (index > 2 ? el * el : el));
console.log(mapResIndex3);

// ===================================================================================================

// Task 3
// input: callback
// output: undefined
// callback
// input: element
// output: undefined
numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
});

// const forEachRes = numbersList.forEach(el => el * el);
// console.log(numbersList);
// console.log(forEachRes);

/* метод reduce */
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, initial value(optional)
// output: result

// callback
// input: acc, el, index(optional), array(optional)
// output: acc
// option 1
const resReduceSum = transactions.reduce((sum, val) => {
  console.log('sum', sum);
  console.log('el', val);
  if (sum > 100) {
    return sum + val;
  }
  return sum;
}, 0);

console.log(resReduceSum);

// option 2
const resReduceSum2 = transactions.reduce((sum, val) => (val > 100 ? sum + val : sum), 0);
console.log(resReduceSum2);
// put your code here

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

// put your code here
