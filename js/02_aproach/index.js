// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

/**
 * @param {number} num
 * @return {undefined}
 */

// input: number
// output: undefined

// algoritm
// 1. iterate from 2 to n
// 2. check if N prime
// 2.1 iterate from 2 to N
// 2.2 if N % iterator === 0 then NOT prime
// 3. if prime - print it

function isPrime(num) {
  for (let index = 2; index < num; index += 1) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

// test data

getPrimes(15);
getPrimes(7);
