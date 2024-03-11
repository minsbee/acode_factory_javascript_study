/* Data Types
* 
*   여섯개의 Primitive Data Types과 한개의 Object Data Type이 있다.
* 
*  Primitive Data Types
* 1. Number
* 2. String - 문자를 하나하나 리스트로 묶어서 만든 것이 문자열
* 3. Boolean
* 4. Undefined
* 5. Null
* 6. Symbol
* 
* Object Data Type
* 7. Object
* 
* */

const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log("-------------------------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("-------------------------");


const codeFactory = "코드팩토리";
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = '"아이브" 안유진';
console.log(ive);


//템플릿 리터럴
// 1.new line -> \n
// 2. tab -> \t
// 3. backtick -> ``

const iveYujin = `아이브
안유진`;