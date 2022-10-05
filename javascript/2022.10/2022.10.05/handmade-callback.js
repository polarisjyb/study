/*
  콜백함수는 슬기롭게 사용하는 것이라면, 상당히 매력적인 실행제어를 조작할 수 있다. 통념적으로 콜백함수라는 '조건'을 받아서 사용해야 하는 경우가 많아서, 직접 만들어본다는 생각까지 닿기 어렵지만 충분히 만들어서 사용할 수 있는 구조이다. 특히 함수형 프로그래밍에서는 빼놓을 수 없는 주요 개념이기도 한다. 함수의 리턴은 불변하기 때문에, 역으로 콜백을 사용하기도 하는 구조도 존재한다.
*/

function oneFunc(param){
  if(typeof(param) === 'string') {
    return param + 'one';
  }
}

function twoFunc(param){
  if(typeof(param) === 'string') {
    return param + 'two';
  }
}

function handMade(test, callback) {
  if(typeof (test) === 'string' && typeof callback === 'function') {
    // handMade 함수는 test, callback의 매개변수(parameter)를 인자(argument)로 받는데, 0번째 매개변수는 '문자열' 이여야만 하고, 1번째 매개변수는 '함수' 여야만 '참(true)' 판정을 낸다.

    console.log(typeof test);
    console.log(typeof callback);
    // 위의 callback이라는 매개변수의 타입체크 방법을 눈여겨보면 함수호출의 방식인 () 소괄호를 별도로 붙여주지 않은 것을 확인한다. 자바스크립트에서 소괄호가 없으면 '호출(call)'을 하지 않았다는 표시이므로 주의한다.

    console.log(callback(test));
    // test 라는 인자는 부모함수인 handMade 함수에서 받아온 인자이다.

  }
}

handMade('나는 이렇게 말하지' , oneFunc);
handMade('나는 이렇게 말하지' , twoFunc);

/*
  같은 함수를 두 번 호출했는데, 매개변수로 사용된 함수는 다르다.
  위의 함수는 콜백으로 만드는 의미가 전혀 없긴 하지만, 명확하게 함수를 다시 부르는 형태를 통해 실행되었다.

  onwFunc(), rwoFunc()는 독립적이지 않고, 자식처럼 handMade 라는 함수의 '매개변수' 형태로 활용 즉, 콜백 함수의 형태이다.
*/