/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

// pop
// input: -
// output: last element og array
const numbersList1 = [1, 2, 3, 4, 5];

console.log('BEFORE POP', numbersList1);
const lastEl = numbersList1.pop();
console.log('LAST EL', lastEl);
console.log('AFTER POP', numbersList1);

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

// push
// input: data
// output: new length og array
const numbersList2 = [1, 2, 3, 4, 5];
console.log('BEFORE PUSH', numbersList2);
const pushRes = numbersList2.push(777);
console.log(pushRes);
console.log('AFTER PUSH', numbersList2);

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// shift
// input: -
// output: first elem of array
const numbersList3 = [1, 2, 3, 4, 5];
console.log('BEFORE SHIFT', numbersList3);
const firsElem = numbersList3.shift();
console.log(firsElem);
console.log('AFTER SHIFT', numbersList3);

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
  ф-ция callback запустится по очереди для каждого элемента начального массива arr
  в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
  callback(arr[i]) === true -> элемент будет добавлен в финальный массив
  callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
// filter
// input: callback
// output: new Array

// callback
// input: element (any type)
// output: boolean

function filterCallback(element) {
  return element > 5;
}
// option 1
const filteredArray = anotherNumbersList.filter(function filterCallback(element) {
  return element > 5;
});

// option 2
anotherNumbersList.filter(el => el > 0);

console.log(filteredArray);

// callback function

function sum(from, to, resolver) {
  let sumRes = 0;

  for (let index = from; index <= to; index += 1) {
    sumRes += index;
  }

  resolver(sumRes);
}

// -- test data
function callback(number) {
  console.log(number);
}

function callbackAlert(number) {
  alert(number);
}

sum(1, 10, callback);
// sum(1, 10, callbackAlert);
