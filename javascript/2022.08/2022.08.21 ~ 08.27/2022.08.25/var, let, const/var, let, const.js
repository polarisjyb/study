/* let a = {
  b: 'hello'  변수는 아니지만 지역변수처럼 쓰이기 때문에 console.log(b) 로는 직접 조회가 불가능하다.
}

console.log(a.b); // hello 

*/

var a = 'hello';
let b = 'bye';

console.log(a); // hello
console.log(b);   // bye  

var a = 'merong'; // 재선언
a = '메롱'; // 재할당
// var 는 재선언과 재할당이 가능하다.

b = 'wow';  // 재할당
// let은 재할당만 가능하다.

console.log(a);
console.log(b); // wow


const d = '토레타';
console.log(d);

d = '착한 수분';
console.log(d); // const --> 상수 이기 때문에 재선언, 재할당이 불가능하다. 단 한 번 '만' 선언, 할당이 가능하다.