
/* 1. 함수 one을 호출하면 콘솔에 "첫번째 함수" 라는 메세지를 출력하게끔 '알고리즘'을 작성하세요. */

function one() {
  console.log('첫번째 함수');
}

one();

/* 2. 함수 two를 호출하면 숫자 10이라는 값이 콘솔에 출력되게끔 '알고리즘'을 작성하세요. */

function two() {
  console.log(10);
}

two();

/* 3. 첫번째 매개변수 parameter에 'KDT'를 입력하면 'KDT'의 데이터 타입이 콘솔에 출력되게끔 '알고리즘'을 작성하세요. */

function three(parameter) {
  if (parameter === 'KDT') {
    console.log(typeof('KDT'))
  }
}

three('KDT'); // 데이터 타입은 string

/* 4. 첫번째 매개변수 param에 'KDT'값이 들어오면 콘솔화면에서 'K-digital training' 이라는 문구가 출력되도록 '알고리즘'을 작성하세요.
'KDT'가 아니라면, '한컴타자놀이'가 출력되게끔 '알고리즘'을 추가하세요. */

/* == 는 '같다' 입니다. 변수 타입과 상관없이 값이 같으면 참을 반환합니다.
    즉 5 == 5 도 참이고 '5' == 5 도 참입니다. 

/* != 는 '같지 않다' 입니다. 변수 타입과 상관없이 값이 같지 않으면 참을 반환합니다. */

/* === 는 '엄격하게 같다' 입니다. '엄격하게'의 의미는 변수 타입까지 고려한다는 것입니다. 변수의 값 뿐 아니라 변수의 타입까지 같아야 참 입니다.
변수의 값은 같으나 타입이 다르다면 거짓입니다.
즉 5 === 5 는 참이지만, '5' === 5 는 거짓입니다.. 왼쪽 변수는 문자열이고 오른쪽 변수는 숫자이기 때문입니다. */

/* !== 는 '엄격하게 같지 않다' 입니다. 즉 '5' != 5 는 거짓 이나 '5' !== 5 는 참 입니다.  */

function four(param) {
  if (param === 'KDT') {
    console.log('K-digital training');
  }
  else if(param !=='KDT') {
    console.log('한컴타자놀이');
  }
}

four('KDT');
four('K');

/* 5.  위에 먼저 선언된 함수 a(), b()을 덧셈하여 나온값을 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
console.log(five(매개변수 두 개) + a()); 덧셈이 실행되어 어떠한 '숫자값'이 나오도록 작성하세요. */

function a () {
  return 1;
}

function b () {
  return 2;
}

function five(paramOne, paramTwo) {
  return paramOne + paramTwo;
}

console.log(a(), b()); // 1, 2

console.log(five(a(), b())+ a()); // 4

console.log(five(a(), b()) === 3); // true

/* console.log(a());
console.log(b());

function five(paramOne, paramTwo) {
  let plus = paramOne + paramTwo;
  console.log(plus);

  return plus;
}

console.log(a(), b()); 

console.log(five(1, 2) + a ());
 */

