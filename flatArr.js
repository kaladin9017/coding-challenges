/*
  Function to create random array with nested Arrays for testing
*/

//Helper Function
function getRandNum() {
  return Math.floor((Math.random() * 14));
}
let randomValues = [0,1,2,3,4,5,6,7,8,9,null,'a','b','c'];

function createArr(array = []) {
  /*
    Generate Random numbers
    Push random value into test array
  */
  let randomNumber = getRandNum();
  let randomIndex = getRandNum();
  let currentValue = randomValues[randomIndex];
  array.push(currentValue);
  /*
    Use random number to determine next step in function
    If random number equal 1 return test array exit function
    If random number equal 2 return recusive call with nested array
    If random number equal 3 return recursive call with array
  */
  if (randomNumber == 1) {
    return array;
  }
  else if (randomNumber == 2) {
    array = [array];
    return createArr(array);
  }
  else if (randomNumber == 3) {
    return createArr(array);
  }
    return createArr(array);
}

/*
  Declare three test arrays
*/
let testOne = createArr();
let testTwo = createArr();
let testThree = createArr();

/*
  A Recursive Soulution
  Declare a result array(flatArray)
  Loop through array passed into flatten function
  On each iteration if the current element is an Array array concat the recursive call onto result array
  else push element into result array
 */
function flatten (arr) {
  let flatArray = []
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element))
    }
    else {
      element === null ? null: flatArray.push(element)
    }
  })
  return flatArray
}

console.log("First Test: ", testOne)
console.log("Flat Array#1: ", flatten(testOne))

console.log("Second Test: ", testTwo)
console.log("Flat Array#2: ", flatten(testTwo))

console.log("Third Test: ", testThree)
console.log("Flat Array#3: ", flatten(testThree))
