function a() {
  return 'hello';
}

/* 
  함수 a()는 문자열 'hello'를 리턴(반환)하는 간단한 함수이다.
  함수로 선언되어있지만 호출이 되어 실행되는 순간 함수 a()는 문자열(string) 으로 바뀐다고 생각하여도 무방하다.
  a() 함수와 문자열 타입을 완전히 동일하다 라고 할 수는 없지만, 실행 완료된 a()는  문자열 타입으로 반환되는 것은 맞다.
*/

function b(text, callback) {
  if(typeof text === 'string' && typeof callback === 'function') {

/*  
    첫번째 매개변수 text의 데이터 타입은 string 이어야만 한다.
    두번째 매개변수 callback의 데이터 타입은 function 이어야만 한다.
    두개의 조건이 충족되어야 실행된다. (참 true)
*/

    console.log(typeof callback);
    return text + callback();

/*
    두번째 매개변수 callback이라는 변수는 '함수'를 요구한다.
    함수이름에 () 소괄호 '만' 붙으면 함수가 호출된다.
    함수를 부모함수인 b()함수 내에서 '호출'된 것을 확인할 수 있다.
    callback() 이라는 이름으로 호출되었다.
    b() 함수는 실행되면 내부 실행부에 의해 자식함수를 실행한다.

    '파일'이 '함수'를 실행하는 일반적인 방식과
    '함수'가 '함수'를 실행하는 위의 방식을 구분할 것

    매개변수에는 다양한 타입의 재료가 들어올 수 있다는 것으로 사고를 확장 할 수 있다.
*/
  }
}


console.log(b('boom', a)); // 매개변수로 함수가 사용될 때는 '변수' 이기 때문에 일반적인 호출방식을 사용하지 않는다.


/*

    따라서 'a()'로 작성하면 a 함수를 호출(call) 할래, 가 되고
    a로 작성하면 : 그저 변수로 사용된다. 호출(call)과 다르다.
    결과적으로 마지막 코드인 console.log(b()); 부분은 b()함수'만'을 실행했을 뿐이지만,
    b() 자체의 기능 때문에 a() 함수도 호출 된 결과를 낳았다.
    call이 함수를 불러오는 뜻이라면, callback은 '함수가', '함수를' 불러오는 방식이다.

*/