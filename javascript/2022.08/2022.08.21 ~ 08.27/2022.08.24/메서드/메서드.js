
// ? 메서드(method) === '함수'와 동일한 것
// * 이름이 다른 이유는 무엇일까?

let forMe = {
  name: '이블린',
  age : 20,
  nextYear : function() { // 데이터 묶음에 있는 함수 ( 메서드 )
    return forMe.age + 1;
  } 
}

function nextYear(number) { // 일반 함수
  return number + 1;
}

console.log(forMe.nextYear(forMe.age)); // 21

console.log(forMe.name);  // 이블린


