/*
  Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다.
  Math.abs(a-b = x) x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환합니다.
*/

/*
  abs()는 Math의 정적 메서드 이므로, 사용자가 생성한 Math 객체의 메서드로 호출할 수 없고
  항상 Math.abs()를 사용해야합니다.
*/


function test(a, b) {
  return Math.abs(a - b);
}

// a - b 의 값이 -2 이므로 양수값 2를 출력합니다.
console.log(test(3, 5)); // 2

// a - b 의 값이 2 이므로 2를 출력합니다.
console.log(test(5, 3)); // 2

// a - b 의 값이 -5.112 이므로 양수값 5.112를 출력합니다.
console.log(test(2.736, 7.848)); // 5.112


/*
  Math.abs()의 작동 방식

  빈 객체, 하나 이상의 요소를 가진 배열, 숫자가 아닌 문자열, undefined나 빈 매개변수를 받으면 NaN을 반환합니다. null, 빈 문자열이나 빈 배열을 제공하면 0을 반환합니다.
*/


console.log(Math.abs([1]));  // 1
console.log(Math.abs([1, 2])); // NaN 
console.log(Math.abs('4')); // 4
console.log(Math.abs('sdf')); // NaN
console.log(Math.abs('-1'));  // 1
console.log(Math.abs(-2));  // 2
console.log(Math.abs(null));     // 0
console.log(Math.abs(''));       // 0
console.log(Math.abs([]));       // 0
console.log(Math.abs([2]));      // 2
console.log(Math.abs([1,2]));    // NaN
console.log(Math.abs({}));       // NaN
console.log(Math.abs('string')); // NaN
console.log(Math.abs());         // NaN
