console.log('Hello');

// func 1
function getSenseOfLife() {
  return 42;
}

// test data

// option 1
const res1 = getSenseOfLife();
console.log(res1);

// option 2
console.log(getSenseOfLife());

// func 2
function getSquared(n) {
  return n ** 2;
}

// test data
const res2 = getSquared(3);
console.log(res2);

// func 3

function sun(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// test data
const res3 = sun(3, 16);
console.log(res3);

// func4

function printMessage(age) {
  return `I am ${age} years old`;
}

// test data
console.log(printMessage(34));
console.log(printMessage('34'));
console.log(printMessage('kuku'));

// func5
function sumFromTo(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i += 1) {
    sum += i;
  }
  return sum;
}

// test data
console.log(sumFromTo(3, 7));
console.log(sumFromTo(1, 3));
console.log(sumFromTo(4, 5));
console.log(sumFromTo(-5, 5));

function compareSum(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFromTo(firstFrom, firstTo) > sumFromTo(secondFrom, secondTo);
}
// test data
console.log(compareSum(1, 3, 4, 5));
console.log(compareSum(5, 14, 3, 1));

// func6

const mult = (firstNumber, secondNumber) => firstNumber * secondNumber;

// test data
console.log(mult(2, 2));
console.log(mult(3, 3));
console.log(mult(-3, 3));
console.log(mult(-3, -4));

// func7

const getSquareArrow = num => num * num;

// test data

console.log(getSquareArrow(0));
console.log(getSquareArrow(-10));
console.log(getSquareArrow(10));

// func 8

const getMagicNumber = () => 17;

// test data

console.log(getMagicNumber());
