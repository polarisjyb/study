/*
  찾고자 하는 요소가 boolean, 정수, 문자열.. 이면 indexOf 함수를 사용해서 찾을 수 있다.
  하지만 배열 안에 있는 값이 객체이거나, 특정 값으로 찾는 것이 아니라 특정 조건으로 찾는 거라면 indexOf로 찾을 수 없다.
  이럴때 사용하는 함수가 findIndex이다.

  내부에 함수를 제공하여 특정 값의 조건으로 찾아서 그것이 몇 번째인지 알고 싶을 때
*/

const todos = [
  {
    id : 1,
    text : '자바스클비트 입문',
    done : true
  },
  {
    id : 2,
    text : '함수 배우기',
    done : true
  },
  {
    id : 3,
    text : '객체와 배열 배우기',
    done : true
  }
];

const index = todos.indexOf(2);
console.log(index); // -1

/*
  findIndex 함수는 파라미터로 함수를 입력받아, 특정 조건을 확인해서 조건을 만족하면 만족하는 원소가 몇 번째인지 알려주는 함수이다.
  배열 안의 값들이 객체이거나, 특정 조건을 만족하는 원소의 index를 알아내야 하는 경우 findIndex 함수를 사용하면 된다.
*/

const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);  // 2