/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// input: object, string, any types (value)
// output: object

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data
// const testObj = { name: 'Berck' };
// const resV1 = addPropertyV1(testObj, 'age', 17);
// console.log(resV1);

function addPropertyV2(obj, key, value) {
  // input: object, object
  // output: object
  return Object.assign(obj, { [key]: value });
}

// test data
// const resV2 = addPropertyV2(testObj, 'age', 17);
// console.log(resV2);
// console.log('Obj after', testObj);

function addPropertyV3(obj, key, value) {
  // input: object, object
  // output: object
  return Object.assign({}, obj, { [key]: value });
}

// test data

// const transaction = { amount: 170 };
// const res1 = addPropertyV3(transaction, 'currency', 'USD');
// const res2 = addPropertyV3(res1, 'amount', 300);
// console.log('result test1: ', res1);
// console.log('result test2: ', res2);
// console.log('Obj after V3: ', transaction);

function addPropertyV4(obj, key, value) {
  // input: object, object
  // output: object
  return { ...obj, [key]: value };
}

// const transaction = { amount: 170 };
// const res1 = addPropertyV4(transaction, 'currency', 'USD');
// const res2 = addPropertyV4(res1, 'amount', 300);
// console.log('result test1: ', res1);
// console.log('result test2: ', res2);
// console.log('Obj after V3: ', transaction);
