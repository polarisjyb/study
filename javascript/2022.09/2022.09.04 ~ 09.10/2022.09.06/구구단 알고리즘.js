function googoodanCore(dan, limit) {
  let stepCount = 0;
  let resultArray = [];

  for (let i = 0; i <= limit; i++) {
    let calc = dan * i;

    // Number.isInteger() 주어진 값이 정수인지 판별하는 메서드

    // 만약 매개변수 dan과 i 가 곱해진 값이 정수가 아니면 그 값의 소수점 첫번째 자리까지 반올림하여 값을 반환한다.
    if(Number.isInteger(calc) === false) {
      calc = calc.toFixed(1);
    }

    // 만약 매개변수 dan 과 i 가 곱해진 값이 0보다 작으면서 i 가 정해놓은 조건식의 최대값 limit와 엄격하게 같다면 cal 값의 절대값을 출력합니다.
    if(calc < 0 && i === limit) {
      console.log(Math.abs(calc));
    }

    // 위 2개의 제어문을 통해 나온 값들을 resultArray라는 빈 배열에 push 메서드를 이용하여 추가합니다.
    // i 가 limit 값보다 작거나 같을때 까지 stepCount를 게속 증가시킵니다.
    resultArray.push(calc);
    stepCount++;
  }
  let reduceResult = resultArray.reduce(function(prev, curr) {
    return parseFloat(prev) + parseFloat(curr);
  });

  console.log(`시그마 값 : ${reduceResult}`);
  console.log(`총 ${stepCount}번 실행`);
  return resultArray;
}

console.log(googoodanCore(-3.2, 9));