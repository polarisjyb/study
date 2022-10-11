/*
  만약에 찾는 것이 index가 아니라 해당 원소나 객체일 경우

  내부에 함수를 제공하여 특정 값의 조건으로 찾아서 그 값 자체를 사용하고 싶을 때
*/

const todos = [
  {
    id : 1,
    text : '자바스크립트 입문',
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
  },
  {
		id : 4,
		text : '배열 내장함수 배우기',
		done : false
	}
];

const todo = todos.find(todo => todo.id === 3);
console.log(todo);  // { id: 3, text: '객체와 배열 배우기', done: true}

const todo2 = todos.find(todo => todo.done === false);
console.log(todo2);  // {id: 4, text: '배열과 내장함수 배우기', done: false}