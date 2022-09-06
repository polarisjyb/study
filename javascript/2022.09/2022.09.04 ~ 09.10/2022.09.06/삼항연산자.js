let operandOne = 'test';
let operandTwo = 4;

// operand(용어): 피연산자

/* 조건 (삼항) 연산자는 javascript에서 세 개의 피연산자를 받는 유일한 연산자이다.
앞에서부터 조건문, 물음표(?), 조건문이 참(true)일 경우 실행할 표현식, 콜론(:),
조건문이 거짓(false)일 경우 실행할 표현식이 배치된다.

해석 방법 -- 만약에 조건문이 true 면 물음표 뒤에 오는 첫번째 표현식을 실행해줘,
            false인 경우에는 두번째 표현식을 실행해줘
*/

let result = (operandOne.length === operandTwo) ? 'hello' : 'bye';

console.log(result);  // hello


function Fee(money) {
  return (money ? '$2.00' : '$10.00');
}

console.log(Fee(true)); // $2.00

console.log(Fee(false));  // $10.00

// false 이외에 falsy한 표현식에는 null, NaN, 0, 비어있는 문자열(''), 그리고 undefined가 있다.
console.log(Fee(null));


let age = 27;

let beverage = (age >= 21) ? "Orange" : 'Apple';

console.log(beverage);  // Orange


// null 값 처리하기
// null 일 수 있는 값을 처리할 때 흔히 사용됩니다.
let greeting = function (person) {
  let name = person ? person.name : `stranger`
  return `Howdy, ${name}`
}

console.log(greeting({name:'Alice'}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"


/* 해당 연산자는 if...else 문의 대체재로 빈번하게 사용된다.  */

// 연결된 조건문 처리하기
// 조건 연산자는 아래와 같이 연결해 사용할 수 있습니다.
// 이는 연결된 if.. else if else.. if else.. 와 유사합니다.

function example() {
  return  condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}

// 위 코드는 아래의 연결된 if ... else와 동등합니다.

function example1() {
  if(condition1) { return value1; }
  else if (condition2) { return value2; }
  else if (condition3) { return value3; }
  else { return value4; }
}