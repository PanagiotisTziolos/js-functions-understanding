//Q1
function myFunction(num1, num2) {
    return num1+num2
}
  
const result1 = myFunction(5,5) // prints 10

//Q2
function myFunction(num1, num2) {
    num1+num2
}
  
const result2 = myFunction(5,5) // undefined

//Q3
function myFunction(_num) {
  return _num-1
}

let _num = 10
_num = myFunction(_num) // 9
_num = myFunction(_num) // 8

//Q4
function myFunction(__num) {
  return __num-1
}

let __num = 10 //10
let add = 3
add = myFunction(add) // 2
add = myFunction(add) // 1

//Q5
function myFunction(num, num1) {
  console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num) // undefined

//Q6
function myFunction(num, num1) {
  console.log(num1)
}

num = 10
num1 = 2

myFunction(num1, num) // 10

//Q7
let counter = 1

function myFunction() {
  counter++
  return counter
}

myFunction()
const num_ = myFunction() // 3

//Q8
function myFunction(num1, num2) {
  return num1 + num2
}

num1 = 10
let num2 = 1
let num3 = 4

let result = myFunction(num3, num1) // 14

//Q9
function myFunction(num1, num2) {
  console.log(num3)
}

num1 = 10
num2 = 1
num3 = 20

myFunction(num3, num1) // 20

//Q10
function myFunction(num1, num2, num3) {
  console.log(num3)
}

num1 = 10
num2 = 1
num3 = 20

myFunction(num3, num1, 100) // 100

//Q11
function myFunction(num1, num2, num3) {
  return num1 + num2 + num3
}

num1 = 10
num2 = 1
num3 = 20

result = myFunction(1, 1, 1) // 3

//Q12
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * num2
}

result = myFunction(5) // 10

//Q13
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * getSomeValue()
}

result = myFunction(5) // 10

//Q14
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue()
}

result = myFunction(5) // 4

//Q15
function myFunction(num1) {
  if(true) {
    return -10
  }

  return num1 * 10
}

result = myFunction(5) // -10

//Q16
function myFunction(num1) {
  if(false) {
    return -100
  }

  return num1 * 10
}

result = myFunction(5) // 50

//Q17
function myFunction(num1) {
  return -100

  return num1 * 10
}

result = myFunction(5) // -100

//Q18
function myFunction(num1) {

  return num1 * 10

  return -100
}

result = myFunction(5) // 50

//Q19
function myFunction(num1, num2, num3) {
  return num2
}

result = myFunction(5, 10, 15) // 10

//Q20
function myFunction(num1, num2, num3) {
  return num1 + num3
}

num1 = 20
num2 = 200
num3 = 1000

result = myFunction(5, 10, num3, 15) // 1005

//Q21
function myFunction(num1, num2) {
  const result = num1+num2
  return result
}

result = myFunction(10, 20) // result is 30
myFunction(100, 2) // 30

//Q22
function myFunction(num1, num2) {
  let result = num1+num2
  return result
}

result = 0 // 0
myFunction(100, 2)

//Q23
function myFunction(num1, num2) {
  result = num1+num2
  console.log("result: ", result)
}

result = 0 
myFunction(100, 2) // result = 102
console.log("hehe", result)

//Q24
function myFunction(num1, num2) {
  const result = num1+num2
  return 100
}

result = myFunction(5, 2) // 100

//Q25
function myFunction(a) {
  let b = 20
  
  console.log("a:", a)
  console.log("b:", b)
  console.log("c:", c)
}

let a = 1
let b = 2
let c = 3

console.log("hehe", myFunction(100)) // 100, 20, 3
