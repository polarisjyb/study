function insa(parameter) {
  parameter + 1;
  return '두진';
}

console.log( typeof (       typeof (     insa('형민')          )      )            );
console.log(typeof('string'));
/* 함수 insa(parameter)는 parameter, 즉 매개변수의 값은 알 수 없지만 어떤 실행문이 있어도 무조건 문자열 '두진' 을 반환한다. 그렇기 때문에 ( typeof insa('형민') ) 은 'string' 이라는 값을 반환하고
console.log( typeof(string) ); 이 되기 때문에 typeof(string)의 데이터 타입은 문자열이다.

그렇기 때문에 콘솔에 출력되는 값은 string 이다.
*/

console.log( insa('은호') === '두진');
/* insa('은호') 함수는 '두진'을 반환한다. 
  '두진' === '두진' 수식이 되는데 값과 데이터 값이 같기 때문에 true ( 참 ) 이 콘솔에 출력된다.
*/
