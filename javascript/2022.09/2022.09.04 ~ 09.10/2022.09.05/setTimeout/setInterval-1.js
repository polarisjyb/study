let num = 1;


// setInterval 함수를 사용하여 애니메이션 만들기
// num을 카운트 하여 num의 값이 100이 되었을때, clearInterval 함수로 setInterval 함수를 멈춘다.

const a = setInterval(function() {
  num++
  console.log(num);
  if(num === 100) {
    clearInterval(a);
  }
}, 16)